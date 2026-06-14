export type News = {
  id: number;
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  body: string;
  author: string;
  reading_time: number;
  cover_image: string;
  caption: string;
  formats: string[];
  published_at: string;
  is_published: boolean;
};

export type CreateNewsPayload = Omit<News, "id">;

export type NewsCardData = Pick<
  News,
  | "id"
  | "slug"
  | "category"
  | "title"
  | "excerpt"
  | "author"
  | "reading_time"
  | "cover_image"
  | "caption"
  | "formats"
  | "published_at"
>;

export type Pagination = {
  page: number;
  limit: number;
  total_items: number;
  total_pages: number;
};

export type PaginatedNewsCards = {
  data: NewsCardData[];
  pagination: Pagination;
};

export async function fetchNewsCards(
  page: number,
  limit: number,
  signal?: AbortSignal,
  category?: string,
) {
  const params = new URLSearchParams({
    page: String(page),
    limit: String(limit),
  });
  if (category) {
    params.set("category", category);
  }
  const response = await fetch(`/api/news/cards?${params}`, {
    cache: "no-store",
    signal,
  });
  if (!response.ok) {
    throw new Error(await getResponseError(response));
  }

  return (await response.json()) as PaginatedNewsCards;
}

export async function fetchNewsBySlug(slug: string, signal?: AbortSignal) {
  const response = await fetch(`/api/news/slug/${encodeURIComponent(slug)}`, {
    cache: "no-store",
    signal,
  });
  if (!response.ok) {
    if (response.status === 404) return null;
    throw new Error(await getResponseError(response));
  }

  return (await response.json()) as News;
}

export async function searchNewsByTitle(
  title: string,
  signal?: AbortSignal,
) {
  const params = new URLSearchParams({ title });
  const response = await fetch(`/api/news/search?${params}`, {
    cache: "no-store",
    signal,
  });
  if (!response.ok) {
    throw new Error(await getResponseError(response));
  }

  return (await response.json()) as NewsCardData[];
}

export async function getResponseError(response: Response) {
  try {
    const data = (await response.json()) as { error?: string };
    return data.error || `Request gagal (${response.status})`;
  } catch {
    return `Request gagal (${response.status})`;
  }
}

export function formatPublishedDate(value: string) {
  return new Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(value));
}

export function slugify(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
