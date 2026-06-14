import { errorResponse } from "@/lib/server/http";
import { loadUpload } from "@/lib/server/uploads";

export const runtime = "nodejs";

type RouteContext = {
  params: Promise<{ filename: string }>;
};

export async function GET(_request: Request, context: RouteContext) {
  try {
    const { filename } = await context.params;
    const upload = await loadUpload(filename);
    return new Response(new Uint8Array(upload.data), {
      headers: {
        "Content-Type": upload.contentType,
        "Content-Length": String(upload.data.byteLength),
        "Cache-Control": "public, max-age=31536000, immutable",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch (error) {
    return errorResponse(error);
  }
}
