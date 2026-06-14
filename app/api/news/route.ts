import type { NextRequest } from "next/server";
import { assertAdminRequest } from "@/lib/server/admin-auth";
import { createNews, getAllNews, parseCreateNewsPayload } from "@/lib/server/news";
import { errorResponse, readJsonObject } from "@/lib/server/http";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  try {
    assertAdminRequest(request);
    return Response.json(await getAllNews());
  } catch (error) {
    return errorResponse(error);
  }
}

export async function POST(request: NextRequest) {
  try {
    assertAdminRequest(request);
    const payload = parseCreateNewsPayload(await readJsonObject(request));
    return Response.json(await createNews(payload), { status: 201 });
  } catch (error) {
    return errorResponse(error);
  }
}
