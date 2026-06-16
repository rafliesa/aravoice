"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { formatPublishedDate } from "@/lib/news";
import HomeHero from "@/components/home/sections/HomeHero";
import HomeFeatured from "@/components/home/sections/HomeFeatured";
import HomeCategories from "@/components/home/sections/HomeCategories";
import HomeBottomCta from "@/components/home/sections/HomeBottomCta";
import { CARD_FETCH_LIMIT, CATEGORY_SECTIONS, SECTION_CARD_LIMIT } from "@/components/home/sections/HomeCategories";

import type { NewsCardData } from "@/lib/news";

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

  const leadNews = cardNews[0];
  const latestNews = cardNews.slice(0, 3);
  const featuredNews = cardNews.slice(1, 3);
  const availableFormats = leadNews?.formats.map((format) => format.toUpperCase()) ?? [];
  const heroCategory = leadNews?.category.toUpperCase() ?? "BERITA";
  const initialLoading = loadingCards && cardNews.length === 0;
  const heroTitle = initialLoading
    ? "Memuat berita terbaru..."
    : newsError && cardNews.length === 0
      ? "Berita belum dapat dimuat"
      : leadNews?.title ?? "Belum ada berita terbit";
  const heroExcerpt = newsError && cardNews.length === 0
    ? newsError
    : leadNews?.excerpt ?? "Berita yang dipublikasikan dari halaman admin akan tampil di sini.";

  const categorySections = CATEGORY_SECTIONS.map((section) => ({
    ...section,
    items: cardNews
      .filter((news) => news.category.toLowerCase() === section.key.toLowerCase())
      .slice(0, SECTION_CARD_LIMIT),
  })).filter((section) => section.items.length > 0);

  const latestArticles = latestNews.map((news) => ({
    category: news.category,
    title: news.title,
    meta: `${formatPublishedDate(news.published_at)} • ${news.reading_time} menit baca`,
    href: `/${news.slug}`,
  }));

  return (
    <div className="bg-surface-warm text-neutral flex-1">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <nav className="flex items-center gap-2 text-sm text-zinc-500">
          <Link href="/" className="hover:text-zinc-800">Home</Link>
          <span>›</span>
          <span className="text-secondary-700 font-semibold">{heroCategory}</span>
        </nav>

        <HomeHero
          availableFormats={availableFormats}
          heroCategory={heroCategory}
          heroExcerpt={heroExcerpt}
          heroTitle={heroTitle}
          leadNews={leadNews}
        />

        <HomeFeatured
          featuredNews={featuredNews}
          initialLoading={initialLoading}
          latestArticles={latestArticles}
          newsError={newsError}
        />

        <HomeCategories sections={categorySections} />

        {!loadingCards && newsError && cardNews.length > 0 && (
          <p className="mt-6 text-center text-sm text-red-600">{newsError}</p>
        )}

        <HomeBottomCta />
      </div>
    </div>
  );
}