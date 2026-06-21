import type { NextRequest } from "next/server";
import { assertAdminRequest } from "@/lib/server/admin-auth";
import { errorResponse, positiveInteger, readJsonObject } from "@/lib/server/http";
import {
  deleteMerchProduct,
  parseCreateMerchProductPayload,
  updateMerchProduct,
} from "@/lib/server/merch";

export const runtime = "nodejs";

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function PUT(request: NextRequest, context: RouteContext) {
  try {
    assertAdminRequest(request);
    const { id } = await context.params;
    const payload = parseCreateMerchProductPayload(await readJsonObject(request));
    return Response.json(await updateMerchProduct(positiveInteger(id, "id"), payload));
  } catch (error) {
    return errorResponse(error);
  }
}

export async function DELETE(request: NextRequest, context: RouteContext) {
  try {
    assertAdminRequest(request);
    const { id } = await context.params;
    await deleteMerchProduct(positiveInteger(id, "id"));
    return new Response(null, { status: 204 });
  } catch (error) {
    return errorResponse(error);
  }
}
