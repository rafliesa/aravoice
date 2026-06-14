import { Prisma } from "@/generated/prisma/client";

export class ApiError extends Error {
  constructor(
    message: string,
    readonly status: number,
  ) {
    super(message);
  }
}

export function errorResponse(error: unknown) {
  if (error instanceof ApiError) {
    return Response.json({ error: error.message }, { status: error.status });
  }

  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    if (error.code === "P2002") {
      return Response.json({ error: "news slug already exists" }, { status: 409 });
    }
    if (error.code === "P2025") {
      return Response.json({ error: "news not found" }, { status: 404 });
    }
  }

  console.error(error);
  return Response.json({ error: "internal server error" }, { status: 500 });
}

export async function readJsonObject(request: Request, maxBytes = 1 << 20) {
  const contentLength = Number(request.headers.get("content-length"));
  if (Number.isFinite(contentLength) && contentLength > maxBytes) {
    throw new ApiError("request body is too large", 413);
  }

  const text = await request.text();
  if (new TextEncoder().encode(text).byteLength > maxBytes) {
    throw new ApiError("request body is too large", 413);
  }

  let value: unknown;
  try {
    value = JSON.parse(text);
  } catch {
    throw new ApiError("invalid request body", 400);
  }

  if (!value || typeof value !== "object" || Array.isArray(value)) {
    throw new ApiError("request body must contain one JSON object", 400);
  }

  return value as Record<string, unknown>;
}

export function positiveInteger(
  value: string | null,
  name: string,
  fallback?: number,
) {
  if (value === null && fallback !== undefined) return fallback;

  const parsed = Number(value);
  if (!Number.isInteger(parsed) || parsed <= 0) {
    throw new ApiError(`${name} must be a positive integer`, 400);
  }
  return parsed;
}
