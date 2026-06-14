import { errorResponse } from "@/lib/server/http";
import { getNewsBySlug } from "@/lib/server/news";

export const runtime = "nodejs";

type RouteContext = {
  params: Promise<{ slug: string }>;
};

export async function GET(_request: Request, context: RouteContext) {
  try {
    const { slug } = await context.params;
    return Response.json(await getNewsBySlug(decodeURIComponent(slug)));
  } catch (error) {
    return errorResponse(error);
  }
}
