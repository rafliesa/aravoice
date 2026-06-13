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
