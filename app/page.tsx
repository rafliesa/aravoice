"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import LatestNewsCard from "@/components/news/LatestNewsCard";
import NewsCard from "@/components/news/NewsCard";
import {
  type NewsCardData,
  type Pagination,
  fetchNewsCards,
  formatPublishedDate,
} from "@/lib/news";

const CARD_PAGE_SIZE = 6;

const EMPTY_PAGINATION: Pagination = {
  page: 1,
  limit: CARD_PAGE_SIZE,
  total_items: 0,
  total_pages: 0,
};

const summaryCards = [
  {
    title: "Mengapa ini penting?",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="8" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
  {
    title: "Apa solusinya?",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.1v.2h6v-.2c0-.8.4-1.6 1-2.1A7 7 0 0 0 12 2z" />
      </svg>
    ),
  },
  {
    title: "Siapa yang terdampak?",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Apa masalahnya?",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
];

function MetaItem({ children, icon }: { children: React.ReactNode; icon: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-sm text-zinc-500">
      {icon}
      {children}
    </span>
  );
}

export default function Home() {
  const [page, setPage] = useState(1);
  const [cardNews, setCardNews] = useState<NewsCardData[]>([]);
  const [pagination, setPagination] = useState<Pagination>(EMPTY_PAGINATION);
  const [loadingCards, setLoadingCards] = useState(true);
  const [newsError, setNewsError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function loadNews() {
      setLoadingCards(true);
      setNewsError("");
      try {
        const response = await fetchNewsCards(page, CARD_PAGE_SIZE, controller.signal);
        setCardNews(response.data);
        setPagination(response.pagination);
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
  }, [page]);

  const leadNews = cardNews[0];
  const latestNews = cardNews.slice(0, 3);
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

  return (
    <div className="flex-1 bg-[#faf8f3] text-[#1a1a1a]">
      <div className="mx-auto max-w-7xl px-6 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-zinc-500">
          <Link href="/" className="hover:text-zinc-800">Home</Link>
          <span>›</span>
          <Link href="/para-report" className="hover:text-zinc-800">Para Report</Link>
          <span>›</span>
          <span className="font-semibold text-[#F29100]">Liputan Khusus</span>
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
                  href={`#berita-${leadNews.id}`}
                  className="text-sm font-bold text-[#8A5100] hover:underline"
                >
                  Baca Selengkapnya ↓
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* Action buttons */}
        <div className="mt-8 flex flex-wrap gap-4">
          <button className="inline-flex items-center gap-2 rounded-md bg-[#1a1a1a] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-black">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3" /></svg>
            Dengarkan Artikel
          </button>
          <button className="inline-flex items-center gap-2 rounded-md border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-800 transition-colors hover:bg-zinc-100">
            <span className="font-bold">A+</span> Perbesar Teks
          </button>
          <button className="inline-flex items-center gap-2 rounded-md border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-800 transition-colors hover:bg-zinc-100">
            <svg width="16" height="16" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" /><path d="M12 3a9 9 0 0 1 0 18z" fill="currentColor" /></svg>
            Kontras Tinggi
          </button>
        </div>

        {/* Main + sidebar */}
        <section className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-extrabold tracking-tight">Ringkasan Cepat</h2>
            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {summaryCards.map((card) => (
                <div key={card.title} className="rounded-lg border border-zinc-200 bg-white p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-zinc-100 text-zinc-700">
                    {card.icon}
                  </div>
                  <h3 className="mt-5 text-lg font-bold">{card.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">{card.body}</p>
                </div>
              ))}
            </div>
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
            </div>
          </aside>
        </section>

        {/* Featured cards */}
        <section className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {loadingCards
            ? Array.from({ length: CARD_PAGE_SIZE }, (_, index) => (
              <div
                key={index}
                className="h-96 animate-pulse rounded-lg border border-zinc-200 bg-zinc-100"
              />
              ))
            : cardNews.map((news) => <NewsCard key={news.id} news={news} />)}
        </section>

        {!loadingCards && newsError && (
          <p className="mt-6 text-center text-sm text-red-600">{newsError}</p>
        )}

        {pagination.total_pages > 1 && (
          <nav
            aria-label="Pagination berita"
            className="mt-8 flex items-center justify-center gap-4"
          >
            <button
              type="button"
              onClick={() => setPage((current) => Math.max(1, current - 1))}
              disabled={page <= 1 || loadingCards}
              className="rounded-md border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 transition-colors hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
            >
              Sebelumnya
            </button>
            <span className="text-sm text-zinc-600">
              Halaman {pagination.page} dari {pagination.total_pages}
            </span>
            <button
              type="button"
              onClick={() =>
                setPage((current) => Math.min(pagination.total_pages, current + 1))
              }
              disabled={page >= pagination.total_pages || loadingCards}
              className="rounded-md border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 transition-colors hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
            >
              Berikutnya
            </button>
          </nav>
        )}
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
