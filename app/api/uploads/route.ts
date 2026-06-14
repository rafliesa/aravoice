import type { NextRequest } from "next/server";
import { assertAdminRequest } from "@/lib/server/admin-auth";
import { ApiError, errorResponse } from "@/lib/server/http";
import { storeUpload } from "@/lib/server/uploads";

export const runtime = "nodejs";

const MAX_REQUEST_SIZE = (200 << 20) + (1 << 20);

export async function POST(request: NextRequest) {
  try {
    assertAdminRequest(request);
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
