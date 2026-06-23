import type { NextRequest } from "next/server";
import { assertAdminRequest } from "@/lib/server/admin-auth";
import { errorResponse, readJsonObject } from "@/lib/server/http";
import {
  createEditorialMember,
  getEditorialMembers,
  parseCreateEditorialMemberPayload,
} from "@/lib/server/about";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  try {
    return Response.json(await getEditorialMembers());
  } catch (error) {
    return errorResponse(error);
  }
}

export async function POST(request: NextRequest) {
  try {
    assertAdminRequest(request);
    const payload = parseCreateEditorialMemberPayload(await readJsonObject(request));
    return Response.json(await createEditorialMember(payload), { status: 201 });
  } catch (error) {
    return errorResponse(error);
  }
}
