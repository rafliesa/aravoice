import type { Metadata } from "next";
import ArticlePage from "@/modules/article";
import { getNewsBySlug } from "@/lib/server/news";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  try {
    const { slug } = await params;
    const news = await getNewsBySlug(decodeURIComponent(slug));

    return {
      title: news.title,
      description: news.excerpt || `${news.title} di Paravoice.id.`,
      openGraph: {
        title: news.title,
        description: news.excerpt || `${news.title} di Paravoice.id.`,
        images: news.cover_image ? [news.cover_image] : undefined,
        type: "article",
      },
    };
  } catch {
    return {
      title: "Berita Tidak Ditemukan",
    };
  }
}

export default function Page({
  params,
}: PageProps) {
  return <ArticlePage params={params} />;
}
