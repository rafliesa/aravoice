"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import LatestNewsCard from "@/components/news/LatestNewsCard";
import NewsCard from "@/components/news/NewsCard";
import {
  type NewsCardData,
  fetchNewsCards,
  formatPublishedDate,
} from "@/lib/news";

// Pull a generous batch so every category section has cards to group from.
const CARD_FETCH_LIMIT = 50;

// Category sections rendered below the hero, in display order.
// `key` is matched case-insensitively against each news item's category.
// `href` points to the rubrik page behind "Lihat Selengkapnya".
const CATEGORY_SECTIONS = [
  { key: "Para Atlet", title: "Para Atlet", href: "/para-atlet" },
  { key: "Para Pop", title: "Para Pop", href: "/para-pop" },
  { key: "Para Edu", title: "Para Edu", href: "/para-edu" },
  { key: "Para Report", title: "Para Report", href: "/para-report" },
  { key: "Para Data", title: "Para Data", href: "/para-data" },
];

const SECTION_CARD_LIMIT = 3;

function MetaItem({ children, icon }: { children: React.ReactNode; icon: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-sm text-zinc-500">
      {icon}
      {children}
    </span>
  );
}

export default function Home() {
  const [cardNews, setCardNews] = useState<NewsCardData[]>([]);
  const [loadingCards, setLoadingCards] = useState(true);
  const [newsError, setNewsError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function loadNews() {
      setLoadingCards(true);
      setNewsError("");
      try {
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

  return (
    <div className="flex-1 bg-[#faf8f3] text-[#1a1a1a]">
      <div className="mx-auto max-w-7xl px-6 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-zinc-500">
          <Link href="/" className="hover:text-zinc-800">Home</Link>
          <span>›</span>
          <span className="font-semibold text-[#F29100]">{heroCategory}</span>
        </nav>

        {/* Hero */}
        <section className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold tracking-wider text-[#F29100]">
              {heroCategory}
            </p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              {heroTitle}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600">
              {heroExcerpt}
            </p>

            {leadNews && (
              <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-zinc-200 pt-6">
                <MetaItem icon={<UserIcon />}>Oleh {leadNews.author}</MetaItem>
                <MetaItem icon={<CalendarIcon />}>
                  {formatPublishedDate(leadNews.published_at)}
                </MetaItem>
                <MetaItem icon={<ClockIcon />}>
                  {leadNews.reading_time} menit baca
                </MetaItem>
              </div>
            )}

            {availableFormats.length > 0 && (
              <div className="mt-6 flex flex-wrap items-center justify-end gap-3">
                <span className="text-sm font-medium text-zinc-500">Format tersedia:</span>
                {availableFormats.map((format) => (
                  <span
                    key={format}
                    className="rounded bg-[#F29100] px-3 py-1 text-xs font-bold tracking-wide text-white"
                  >
                    {format}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div>
            {leadNews?.cover_image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={leadNews.cover_image}
                alt={leadNews.title}
                className="aspect-[16/10] w-full rounded-sm object-cover"
              />
            ) : (
              <div className="aspect-[16/10] w-full rounded-sm bg-black" />
            )}
            {leadNews?.caption && (
              <p className="mt-3 text-sm text-zinc-500">{leadNews.caption}</p>
            )}
            {leadNews && (
              <div className="mt-4 text-right">
                <Link
                  href={`/${leadNews.slug}`}
                  className="text-sm font-bold text-[#8A5100] hover:underline"
                >
                  Baca Selengkapnya ↓
                </Link>
              </div>
            )}
          </div>
        </section>


        {/* Featured + sidebar */}
        <section className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {initialLoading ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {Array.from({ length: 2 }, (_, index) => (
                  <div
                    key={index}
                    className="h-96 animate-pulse rounded-lg border border-zinc-200 bg-zinc-100"
                  />
                ))}
              </div>
            ) : featuredNews.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {featuredNews.map((news) => (
                  <NewsCard key={news.id} news={news} />
                ))}
              </div>
            ) : (
              <p className="text-sm text-zinc-500">
                {newsError || "Belum ada berita lain untuk ditampilkan."}
              </p>
            )}
          </div>

          {/* Sidebar */}
          <aside id="berita-terbaru">
            <div className="rounded-lg border border-zinc-200 bg-white p-6">
              <h2 className="text-2xl font-extrabold tracking-tight">Terbaru di Paravoice.id</h2>
              <div className="mt-2 h-1 w-16 rounded bg-[#F29100]" />

              <ul className="mt-6 divide-y divide-zinc-200">
                {latestNews.map((news) => (
                  <LatestNewsCard key={news.id} news={news} />
                ))}
              </ul>

              {initialLoading && (
                <p className="mt-6 text-sm text-zinc-500">Memuat berita terbaru...</p>
              )}
              {!initialLoading && latestNews.length === 0 && (
                <p className="mt-6 text-sm text-zinc-500">
                  {newsError || "Belum ada berita yang diterbitkan."}
                </p>
              )}

              <Link
                href="/para-report"
                className="mt-6 flex items-center justify-center gap-2 rounded-md border border-zinc-300 px-4 py-3 text-sm font-semibold text-zinc-800 transition-colors hover:bg-zinc-100"
              >
                Lihat Semua Artikel →
              </Link>
            </div>
          </aside>
        </section>

        {/* Category sections */}
        {categorySections.map((section) => (
          <section key={section.key} className="mt-16">
            <div className="flex items-center justify-between gap-3 border-b border-zinc-300 pb-4">
              <div className="flex items-center gap-3">
                <span className="h-7 w-1.5 rounded bg-[#F29100]" />
                <h2 className="font-caslon text-3xl font-bold tracking-tight">
                  {section.title}
                </h2>
              </div>
              <Link
                href={section.href}
                className="shrink-0 text-sm font-bold text-[#8A5100] hover:underline"
              >
                Lihat Selengkapnya →
              </Link>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
              {section.items.map((news) => (
                <NewsCard key={news.id} news={news} />
              ))}
            </div>
          </section>
        ))}

        {!loadingCards && newsError && cardNews.length > 0 && (
          <p className="mt-6 text-center text-sm text-red-600">{newsError}</p>
        )}

        {/* Bottom CTA boxes */}
        <section className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex flex-col items-center rounded-lg border-2 border-[#F29100] bg-white p-8 text-center">
            <h2 className="font-caslon text-3xl font-bold tracking-tight">
              Bergabung Dengan Kami
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-7 text-zinc-600">
              Dapatkan kisah dan kabar terbaru dari kesejahteraan atlet disabilitas
            </p>
            <Link
              href="/buletin"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#0b0f1a] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-black"
            >
              Selanjutnya →
            </Link>
          </div>

          <div className="flex flex-col rounded-lg border border-zinc-200 bg-white p-8">
            <h2 className="font-caslon text-3xl font-bold tracking-tight">
              Kami adalah media nirlaba independen
            </h2>
            <p className="mt-4 text-sm leading-7 text-zinc-600">
              Dukungan Anda membantu kami terus menyuarakan prestasi dan tantangan
              yang dihadapi atlet disabilitas Indonesia.
            </p>
            <Link
              href="/donasi"
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-md bg-[#0b0f1a] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-black"
            >
              Donasi ♡
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

function UserIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
