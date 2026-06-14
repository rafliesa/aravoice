import { errorResponse } from "@/lib/server/http";
import { searchNewsByTitle } from "@/lib/server/news";

export const runtime = "nodejs";

export async function GET(request: Request) {
  try {
    const title = new URL(request.url).searchParams.get("title") ?? "";
    return Response.json(await searchNewsByTitle(title));
  } catch (error) {
    return errorResponse(error);
  }
}
