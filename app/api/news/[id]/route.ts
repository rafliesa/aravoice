import type { NextRequest } from "next/server";
import { assertAdminRequest } from "@/lib/server/admin-auth";
import {
  deleteNews,
  getNewsById,
  parseCreateNewsPayload,
  updateNews,
} from "@/lib/server/news";
import { errorResponse, positiveInteger, readJsonObject } from "@/lib/server/http";

export const runtime = "nodejs";

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function GET(request: NextRequest, context: RouteContext) {
  try {
    assertAdminRequest(request);
    const { id } = await context.params;
    return Response.json(await getNewsById(positiveInteger(id, "id")));
  } catch (error) {
    return errorResponse(error);
  }
}

export async function PUT(request: NextRequest, context: RouteContext) {
  try {
    assertAdminRequest(request);
    const { id } = await context.params;
    const payload = parseCreateNewsPayload(await readJsonObject(request));
    return Response.json(await updateNews(positiveInteger(id, "id"), payload));
  } catch (error) {
    return errorResponse(error);
  }
}

export async function DELETE(request: NextRequest, context: RouteContext) {
  try {
    assertAdminRequest(request);
    const { id } = await context.params;
    await deleteNews(positiveInteger(id, "id"));
    return new Response(null, { status: 204 });
  } catch (error) {
    return errorResponse(error);
  }
}
