import type { NextRequest } from "next/server";
import {
  handleUpload,
  type HandleUploadBody,
} from "@vercel/blob/client";
import { assertAdminRequest } from "@/lib/server/admin-auth";
import { ApiError, errorResponse } from "@/lib/server/http";
import {
  storeUpload,
  validateMediaUpload,
} from "@/lib/server/uploads";

export const runtime = "nodejs";

const MAX_REQUEST_SIZE = (200 << 20) + (1 << 20);
const BLOB_PATHNAME = /^news\/[a-z0-9][a-z0-9._-]{0,180}$/i;

type BlobClientPayload = {
  mimeType: string;
  size: number;
};

function hasBlobStorage() {
  return Boolean(process.env.BLOB_READ_WRITE_TOKEN);
}

export function GET(request: NextRequest) {
  try {
    assertAdminRequest(request);
    return Response.json({
      strategy: hasBlobStorage()
        ? "blob"
        : process.env.VERCEL
          ? "unavailable"
          : "local",
    });
  } catch (error) {
    return errorResponse(error);
  }
}

export async function POST(request: NextRequest) {
  try {
    const contentType = request.headers.get("content-type") ?? "";
    if (contentType.startsWith("application/json")) {
      if (!hasBlobStorage()) {
        throw new ApiError(
          "BLOB_READ_WRITE_TOKEN is not configured. Connect a Vercel Blob store to this project.",
          503,
        );
      }

      let body: HandleUploadBody;
      try {
        body = (await request.json()) as HandleUploadBody;
      } catch {
        throw new ApiError("invalid upload request", 400);
      }
      if (!body || typeof body !== "object" || !("type" in body)) {
        throw new ApiError("invalid upload request", 400);
      }
      if (body.type === "blob.generate-client-token") {
        assertAdminRequest(request);
      }

      return Response.json(
        await handleUpload({
          body,
          request,
          onBeforeGenerateToken: async (pathname, clientPayload) => {
            if (!BLOB_PATHNAME.test(pathname)) {
              throw new ApiError("invalid upload pathname", 400);
            }

            let payload: BlobClientPayload;
            try {
              payload = JSON.parse(clientPayload ?? "") as BlobClientPayload;
            } catch {
              throw new ApiError("invalid upload metadata", 400);
            }
            if (
              !payload ||
              typeof payload.mimeType !== "string" ||
              !Number.isSafeInteger(payload.size)
            ) {
              throw new ApiError("invalid upload metadata", 400);
            }

            const media = validateMediaUpload(
              pathname,
              payload.mimeType,
              payload.size,
            );
            return {
              allowedContentTypes: [media.mimeType],
              maximumSizeInBytes: media.limit,
              addRandomSuffix: true,
              tokenPayload: JSON.stringify({ kind: media.kind }),
            };
          },
        }),
      );
    }

    assertAdminRequest(request);
    if (process.env.VERCEL) {
      throw new ApiError(
        "Persistent media storage is not configured. Connect a Vercel Blob store.",
        503,
      );
    }

    const contentLength = Number(request.headers.get("content-length"));
    if (Number.isFinite(contentLength) && contentLength > MAX_REQUEST_SIZE) {
      throw new ApiError("file exceeds the upload limit", 413);
    }

    let formData: FormData;
    try {
      formData = await request.formData();
    } catch {
      throw new ApiError("request must use multipart/form-data", 400);
    }

    const allFiles = [...formData.values()].filter(
      (value): value is File => value instanceof File,
    );
    const files = formData
      .getAll("file")
      .filter((value): value is File => value instanceof File);

    if (files.length === 0) {
      throw new ApiError('multipart field "file" is required', 400);
    }
    if (allFiles.length !== 1 || files.length !== 1) {
      throw new ApiError("only one file may be uploaded at a time", 400);
    }

    return Response.json(await storeUpload(files[0]), { status: 201 });
  } catch (error) {
    return errorResponse(error);
  }
}
