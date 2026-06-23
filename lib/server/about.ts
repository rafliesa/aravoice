import "server-only";

import type { EditorialMember as EditorialMemberRecord } from "@/generated/prisma/client";
import type { CreateEditorialMemberPayload, EditorialMember } from "@/lib/about";
import { prisma } from "@/lib/prisma";
import { ApiError } from "@/lib/server/http";

const CREATE_FIELDS = new Set([
  "name",
  "role",
  "image",
  "sort_order",
]);

function requiredString(value: unknown, name: string) {
  if (typeof value !== "string" || !value.trim()) {
    throw new ApiError(`${name} is required`, 400);
  }
  return value.trim();
}

export function parseCreateEditorialMemberPayload(
  value: Record<string, unknown>,
): CreateEditorialMemberPayload {
  for (const key of Object.keys(value)) {
    if (!CREATE_FIELDS.has(key)) {
      throw new ApiError(`unknown field: ${key}`, 400);
    }
  }

  const sortOrder = value.sort_order;
  if (!Number.isInteger(sortOrder)) {
    throw new ApiError("sort_order must be an integer", 400);
  }

  return {
    name: requiredString(value.name, "name"),
    role: requiredString(value.role, "role"),
    image: typeof value.image === "string" ? value.image.trim() : "",
    sort_order: Number(sortOrder),
  };
}

export function serializeEditorialMember(record: EditorialMemberRecord): EditorialMember {
  return {
    id: record.id,
    name: record.name,
    role: record.role,
    image: record.image,
    sort_order: record.sortOrder,
  };
}

function checkPrismaModel() {
  if (!prisma.editorialMember) {
    throw new ApiError(
      "Klien database belum memuat model Tim Editorial. Harap restart server pengembangan Next.js Anda (development server cache).",
      500
    );
  }
}

export async function getEditorialMembers() {
  checkPrismaModel();
  const records = await prisma.editorialMember.findMany({
    orderBy: [{ sortOrder: "asc" }, { id: "asc" }],
  });
  return records.map(serializeEditorialMember);
}

export async function createEditorialMember(payload: CreateEditorialMemberPayload) {
  checkPrismaModel();
  const record = await prisma.editorialMember.create({
    data: {
      name: payload.name,
      role: payload.role,
      image: payload.image,
      sortOrder: payload.sort_order,
    },
  });
  return serializeEditorialMember(record);
}

export async function updateEditorialMember(
  id: number,
  payload: CreateEditorialMemberPayload,
) {
  checkPrismaModel();
  const record = await prisma.editorialMember.update({
    where: { id },
    data: {
      name: payload.name,
      role: payload.role,
      image: payload.image,
      sortOrder: payload.sort_order,
    },
  });
  return serializeEditorialMember(record);
}

export async function deleteEditorialMember(id: number) {
  checkPrismaModel();
  await prisma.editorialMember.delete({ where: { id } });
}

