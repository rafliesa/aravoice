import "server-only";

import type { MerchProduct as MerchProductRecord } from "@/generated/prisma/client";
import type { CreateMerchProductPayload, MerchProduct } from "@/lib/merch";
import { prisma } from "@/lib/prisma";
import { ApiError } from "@/lib/server/http";

const CREATE_FIELDS = new Set([
  "name",
  "category",
  "description",
  "price",
  "image",
  "sort_order",
  "is_active",
]);

function requiredString(value: unknown, name: string) {
  if (typeof value !== "string" || !value.trim()) {
    throw new ApiError(`${name} is required`, 400);
  }
  return value.trim();
}

export function parseCreateMerchProductPayload(
  value: Record<string, unknown>,
): CreateMerchProductPayload {
  for (const key of Object.keys(value)) {
    if (!CREATE_FIELDS.has(key)) {
      throw new ApiError(`unknown field: ${key}`, 400);
    }
  }

  const sortOrder = value.sort_order;
  if (!Number.isInteger(sortOrder)) {
    throw new ApiError("sort_order must be an integer", 400);
  }

  if (
    value.is_active !== undefined &&
    typeof value.is_active !== "boolean"
  ) {
    throw new ApiError("is_active must be a boolean", 400);
  }

  return {
    name: requiredString(value.name, "name"),
    category: requiredString(value.category, "category"),
    description: requiredString(value.description, "description"),
    price: requiredString(value.price, "price"),
    image: requiredString(value.image, "image"),
    sort_order: Number(sortOrder),
    is_active: (value.is_active as boolean | undefined) ?? true,
  };
}

export function serializeMerchProduct(record: MerchProductRecord): MerchProduct {
  return {
    id: record.id,
    name: record.name,
    category: record.category,
    description: record.description,
    price: record.price,
    image: record.image,
    sort_order: record.sortOrder,
    is_active: record.isActive,
  };
}

export async function getMerchProducts(includeInactive = false) {
  const records = await prisma.merchProduct.findMany({
    where: includeInactive ? undefined : { isActive: true },
    orderBy: [{ sortOrder: "asc" }, { id: "asc" }],
  });
  return records.map(serializeMerchProduct);
}

export async function createMerchProduct(payload: CreateMerchProductPayload) {
  const record = await prisma.merchProduct.create({
    data: {
      name: payload.name,
      category: payload.category,
      description: payload.description,
      price: payload.price,
      image: payload.image,
      sortOrder: payload.sort_order,
      isActive: payload.is_active,
    },
  });
  return serializeMerchProduct(record);
}

export async function updateMerchProduct(
  id: number,
  payload: CreateMerchProductPayload,
) {
  const record = await prisma.merchProduct.update({
    where: { id },
    data: {
      name: payload.name,
      category: payload.category,
      description: payload.description,
      price: payload.price,
      image: payload.image,
      sortOrder: payload.sort_order,
      isActive: payload.is_active,
    },
  });
  return serializeMerchProduct(record);
}

export async function deleteMerchProduct(id: number) {
  await prisma.merchProduct.delete({ where: { id } });
}
