import type { NextRequest } from "next/server";
import { assertAdminRequest } from "@/lib/server/admin-auth";
import { errorResponse, readJsonObject } from "@/lib/server/http";
import {
  createMerchProduct,
  getMerchProducts,
  parseCreateMerchProductPayload,
} from "@/lib/server/merch";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  try {
    const includeInactive = request.nextUrl.searchParams.get("all") === "1";
    if (includeInactive) assertAdminRequest(request);
    return Response.json(await getMerchProducts(includeInactive));
  } catch (error) {
    return errorResponse(error);
  }
}

export async function POST(request: NextRequest) {
  try {
    assertAdminRequest(request);
    const payload = parseCreateMerchProductPayload(await readJsonObject(request));
    return Response.json(await createMerchProduct(payload), { status: 201 });
  } catch (error) {
    return errorResponse(error);
  }
}
