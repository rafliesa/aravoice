import "server-only";

import type { News as NewsRecord } from "@/generated/prisma/client";
import type { CreateNewsPayload, News, NewsCardData } from "@/lib/news";
import { prisma } from "@/lib/prisma";
import { ApiError } from "@/lib/server/http";
import { sanitizeNewsHtml } from "@/lib/server/sanitize-news-html";

const CREATE_FIELDS = new Set([
  "slug",
  "category",
  "title",
  "excerpt",
  "body",
  "author",
  "reading_time",
  "cover_image",
  "caption",
  "formats",
  "published_at",
  "is_published",
]);

const RFC3339 =
  /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/;

function requiredString(value: unknown, name: string) {
  if (typeof value !== "string" || !value.trim()) {
    throw new ApiError(`${name} is required`, 400);
  }
  return value.trim();
}

function optionalString(value: unknown, name: string) {
  if (value === undefined) return "";
  if (typeof value !== "string") {
    throw new ApiError(`${name} must be a string`, 400);
  }
  return value.trim();
}

export function parseCreateNewsPayload(
  value: Record<string, unknown>,
): CreateNewsPayload {
  for (const key of Object.keys(value)) {
    if (!CREATE_FIELDS.has(key)) {
      throw new ApiError(`unknown field: ${key}`, 400);
    }
  }

  const body = sanitizeNewsHtml(requiredString(value.body, "body"));
  if (!body) throw new ApiError("body is required", 400);

  const readingTime = value.reading_time;
  if (!Number.isInteger(readingTime) || Number(readingTime) < 0) {
    throw new ApiError("reading_time cannot be negative", 400);
  }

  const publishedAt = requiredString(value.published_at, "published_at");
  if (!RFC3339.test(publishedAt) || Number.isNaN(Date.parse(publishedAt))) {
    throw new ApiError("published_at must use RFC3339 format", 400);
  }

  if (
    value.formats !== undefined &&
    (!Array.isArray(value.formats) ||
      value.formats.some((format) => typeof format !== "string"))
  ) {
    throw new ApiError("formats must be an array of strings", 400);
  }

  if (
    value.is_published !== undefined &&
    typeof value.is_published !== "boolean"
  ) {
    throw new ApiError("is_published must be a boolean", 400);
  }

  return {
    slug: requiredString(value.slug, "slug"),
    category: requiredString(value.category, "category"),
    title: requiredString(value.title, "title"),
    excerpt: optionalString(value.excerpt, "excerpt"),
    body,
    author: requiredString(value.author, "author"),
    reading_time: Number(readingTime),
    cover_image: optionalString(value.cover_image, "cover_image"),
    caption: optionalString(value.caption, "caption"),
    formats: ((value.formats as string[] | undefined) ?? [])
      .map((format) => format.trim())
      .filter(Boolean),
    published_at: new Date(publishedAt).toISOString(),
    is_published: (value.is_published as boolean | undefined) ?? false,
  };
}

export function serializeNews(record: NewsRecord): News {
  return {
    id: record.id,
    slug: record.slug,
    category: record.category,
    title: record.title,
    excerpt: record.excerpt,
    body: sanitizeNewsHtml(record.body),
    author: record.author,
    reading_time: record.readingTime,
    cover_image: record.coverImage,
    caption: record.caption,
    formats: record.formats,
    published_at: record.publishedAt.toISOString(),
    is_published: record.isPublished,
  };
}

export function serializeNewsCard(
  record: Omit<NewsRecord, "body" | "isPublished" | "createdAt" | "updatedAt">,
): NewsCardData {
  return {
    id: record.id,
    slug: record.slug,
    category: record.category,
    title: record.title,
    excerpt: record.excerpt,
    author: record.author,
    reading_time: record.readingTime,
    cover_image: record.coverImage,
    caption: record.caption,
    formats: record.formats,
    published_at: record.publishedAt.toISOString(),
  };
}

export async function createNews(payload: CreateNewsPayload) {
  const record = await prisma.news.create({
    data: {
      slug: payload.slug,
      category: payload.category,
      title: payload.title,
      excerpt: payload.excerpt,
      body: payload.body,
      author: payload.author,
      readingTime: payload.reading_time,
      coverImage: payload.cover_image,
      caption: payload.caption,
      formats: payload.formats,
      publishedAt: new Date(payload.published_at),
      isPublished: payload.is_published,
    },
  });
  return serializeNews(record);
}

export async function getAllNews() {
  const records = await prisma.news.findMany({
    orderBy: [{ publishedAt: "desc" }, { id: "desc" }],
  });
  return records.map(serializeNews);
}

export async function getNewsCards(category: string, page: number, limit: number) {
  if (limit > 50) {
    throw new ApiError("limit must be between 1 and 50", 400);
  }

  const where = {
    isPublished: true,
    ...(category
      ? { category: { equals: category, mode: "insensitive" as const } }
      : {}),
  };
  const select = {
    id: true,
    slug: true,
    category: true,
    title: true,
    excerpt: true,
    author: true,
    readingTime: true,
    coverImage: true,
    caption: true,
    formats: true,
    publishedAt: true,
  };

  const [records, totalItems] = await prisma.$transaction([
    prisma.news.findMany({
      where,
      select,
      orderBy: [{ publishedAt: "desc" }, { id: "desc" }],
      skip: (page - 1) * limit,
      take: limit,
    }),
    prisma.news.count({ where }),
  ]);

  return {
    data: records.map(serializeNewsCard),
    pagination: {
      page,
      limit,
      total_items: totalItems,
      total_pages: totalItems === 0 ? 0 : Math.ceil(totalItems / limit),
    },
  };
}

export async function getNewsById(id: number) {
  const record = await prisma.news.findUnique({ where: { id } });
  if (!record) throw new ApiError("news not found", 404);
  return serializeNews(record);
}

export async function getNewsBySlug(slug: string) {
  const normalized = requiredString(slug, "slug");
  const record = await prisma.news.findUnique({ where: { slug: normalized } });
  if (!record) throw new ApiError("news not found", 404);
  return serializeNews(record);
}

export async function searchNewsByTitle(title: string) {
  const normalized = requiredString(title, "title");
  const records = await prisma.news.findMany({
    where: { title: { contains: normalized, mode: "insensitive" } },
    orderBy: [{ publishedAt: "desc" }, { id: "desc" }],
  });
  return records.map(serializeNews);
}

export async function deleteNews(id: number) {
  const result = await prisma.news.deleteMany({ where: { id } });
  if (result.count === 0) throw new ApiError("news not found", 404);
}
