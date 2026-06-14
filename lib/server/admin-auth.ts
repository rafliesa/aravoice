import "server-only";

import { createHash, createHmac, timingSafeEqual } from "node:crypto";
import type { NextRequest } from "next/server";
import { ApiError } from "@/lib/server/http";

export const ADMIN_SESSION_COOKIE = "aravoice_admin_session";
export const ADMIN_SESSION_TTL_SECONDS = 8 * 60 * 60;

function getAdminPassword() {
  const password = process.env.ADMIN_PASSWORD;

  if (password === undefined) {
    throw new Error("ADMIN_PASSWORD is not configured");
  }

  return password;
}

function digest(value: string) {
  return createHash("sha256").update(value).digest();
}

function sign(payload: string) {
  return createHmac("sha256", getAdminPassword())
    .update(payload)
    .digest("base64url");
}

export function verifyAdminPassword(candidate: string) {
  return timingSafeEqual(digest(candidate), digest(getAdminPassword()));
}

export function createAdminSession(now = Date.now()) {
  const expiresAt = Math.floor(now / 1000) + ADMIN_SESSION_TTL_SECONDS;
  const payload = `v1.${expiresAt}`;
  return `${payload}.${sign(payload)}`;
}

export function isValidAdminSession(
  session: string | undefined,
  now = Date.now(),
) {
  if (!session) return false;

  const [version, expiresAtValue, signature, ...extra] = session.split(".");
  if (
    version !== "v1" ||
    !expiresAtValue ||
    !signature ||
    extra.length > 0
  ) {
    return false;
  }

  const expiresAt = Number(expiresAtValue);
  const nowSeconds = Math.floor(now / 1000);
  if (
    !Number.isSafeInteger(expiresAt) ||
    expiresAt <= nowSeconds ||
    expiresAt > nowSeconds + ADMIN_SESSION_TTL_SECONDS
  ) {
    return false;
  }

  const expected = sign(`${version}.${expiresAtValue}`);
  return timingSafeEqual(digest(signature), digest(expected));
}

export function assertAdminRequest(request: NextRequest) {
  const session = request.cookies.get(ADMIN_SESSION_COOKIE)?.value;
  if (!isValidAdminSession(session)) {
    throw new ApiError("authentication required", 401);
  }

  const origin = request.headers.get("origin");
  if (origin && origin !== request.nextUrl.origin) {
    throw new ApiError("cross-origin request is not allowed", 403);
  }
}
