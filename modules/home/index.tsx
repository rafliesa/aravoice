"use client";

import { useEffect, useState } from "react";
import { formatPublishedDate } from "@/lib/news";
import HomeHero from "@/modules/home/sections/HomeHero";
import HomeFeatured from "@/modules/home/sections/HomeFeatured";
import HomeBottomCta from "@/modules/home/sections/HomeBottomCta";
import HomeNewsSkeleton from "@/modules/home/component/HomeNewsSkeleton";
import { CARD_FETCH_LIMIT } from "@/modules/home/sections/HomeCategories";

import type { NewsCardData } from "@/lib/news";

const medproLeadNews: NewsCardData = {
  id: -1,
  slug: "para-report/berprestasi-dalam-keterbatasan",
  category: "Liputan Khusus",
  title: "Berprestasi dalam Keterbatasan di Kesejahteraan yang Tak Pasti",
  excerpt:
    "Menelisik realita atlet Bandung disabilitas, dari tuntutan prestasi hingga kesejahteraan yang masih penuh ketidakpastian.",
  author: "Redaksi ParaVoice",
  reading_time: 12,
  cover_image: "/hero/pak-ono.webp",
  caption:
    "Atlet disabilitas terus berlatih di tengah keterbatasan dukungan dan kepastian kesejahteraan.",
  formats: ["TEKS", "AUDIO", "VIDEO"],
  published_at: "2026-06-20T00:00:00.000Z",
};

export default function HomePage() {
  const [cardNews, setCardNews] = useState<NewsCardData[]>([]);
  const [loadingCards, setLoadingCards] = useState(true);
  const [newsError, setNewsError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function loadNews() {
      setLoadingCards(true);
      setNewsError("");
      try {
        const { fetchNewsCards } = await import("@/lib/news");
        const response = await fetchNewsCards(1, CARD_FETCH_LIMIT, controller.signal);
        setCardNews(response.data);
      } catch (error) {
        if ((error as Error).name !== "AbortError") {
          setCardNews([]);
          setNewsError(error instanceof Error ? error.message : "Berita gagal dimuat");
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoadingCards(false);
        }
      }
    }

    loadNews();
    return () => controller.abort();
  }, []);

  const leadNews = medproLeadNews;
  const articleNews = cardNews.slice(0, 6);
  const latestNews = cardNews.slice(0, 7);
  const availableFormats = leadNews?.formats.map((format) => format.toUpperCase()) ?? [];
  const heroCategory = leadNews?.category.toUpperCase() ?? "BERITA";
  const initialLoading = false;
  const heroTitle = leadNews.title;
  const heroExcerpt = leadNews.excerpt;

  const latestArticles = latestNews.map((news) => ({
    category: news.category,
    title: news.title,
    meta: `${formatPublishedDate(news.published_at)} • ${news.reading_time} menit baca`,
    href: `/${news.slug}`,
  }));

  return (
    <div className="flex-1 bg-surface-warm text-neutral">
      <div className="mx-auto max-w-7xl px-6 pb-12">
        {initialLoading ? (
          <HomeNewsSkeleton />
        ) : (
          <>
            <HomeHero
              availableFormats={availableFormats}
              heroCategory={heroCategory}
              heroExcerpt={heroExcerpt}
              heroTitle={heroTitle}
              leadNews={leadNews}
            />

            <HomeFeatured
              articleNews={articleNews}
              initialLoading={false}
              latestArticles={latestArticles}
              newsError={newsError}
            />
          </>
        )}

        {!loadingCards && newsError && cardNews.length > 0 && (
          <p className="mt-6 text-center text-sm text-red-600">{newsError}</p>
        )}
      </div>
      <HomeBottomCta />
    </div>
  );
}
