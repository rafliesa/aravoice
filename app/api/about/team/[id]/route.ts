import type { NextRequest } from "next/server";
import { assertAdminRequest } from "@/lib/server/admin-auth";
import { errorResponse, positiveInteger, readJsonObject } from "@/lib/server/http";
import {
  deleteEditorialMember,
  parseCreateEditorialMemberPayload,
  updateEditorialMember,
} from "@/lib/server/about";

export const runtime = "nodejs";

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function PUT(request: NextRequest, context: RouteContext) {
  try {
    assertAdminRequest(request);
    const { id } = await context.params;
    const payload = parseCreateEditorialMemberPayload(await readJsonObject(request));
    return Response.json(await updateEditorialMember(positiveInteger(id, "id"), payload));
  } catch (error) {
    return errorResponse(error);
  }
}

export async function DELETE(request: NextRequest, context: RouteContext) {
  try {
    assertAdminRequest(request);
    const { id } = await context.params;
    await deleteEditorialMember(positiveInteger(id, "id"));
    return new Response(null, { status: 204 });
  } catch (error) {
    return errorResponse(error);
  }
}
