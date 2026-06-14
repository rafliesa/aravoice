import { positiveInteger, errorResponse } from "@/lib/server/http";
import { getNewsCards } from "@/lib/server/news";

export const runtime = "nodejs";

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const page = positiveInteger(url.searchParams.get("page"), "page", 1);
    const limit = positiveInteger(url.searchParams.get("limit"), "limit", 9);
    const category = url.searchParams.get("category")?.trim() ?? "";

    return Response.json(await getNewsCards(category, page, limit));
  } catch (error) {
    return errorResponse(error);
  }
}
