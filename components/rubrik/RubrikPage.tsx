"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import LatestNewsCard from "@/components/news/LatestNewsCard";
import NewsCard from "@/components/news/NewsCard";
import {
  type NewsCardData,
  type Pagination,
  fetchNewsCards,
  formatPublishedDate,
} from "@/lib/news";

const PAGE_SIZE = 6;

const EMPTY_PAGINATION: Pagination = {
  page: 1,
  limit: PAGE_SIZE,
  total_items: 0,
  total_pages: 0,
};

type RubrikPageProps = {
  category: string;
  description: string;
};

export default function RubrikPage({
  category,
  description,
}: RubrikPageProps) {
  const pageTopRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(1);
  const [news, setNews] = useState<NewsCardData[]>([]);
  const [pagination, setPagination] =
    useState<Pagination>(EMPTY_PAGINATION);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [retryKey, setRetryKey] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    async function loadNews() {
      setLoading(true);
      setError("");

      try {
        const response = await fetchNewsCards(
          page,
          PAGE_SIZE,
          controller.signal,
          category,
        );
        if (controller.signal.aborted) return;

        setNews(response.data);
        setPagination(response.pagination);
      } catch (loadError) {
        if ((loadError as Error).name === "AbortError") return;

        setNews([]);
        setPagination({
          ...EMPTY_PAGINATION,
          page,
        });
        setError(
          loadError instanceof Error
            ? loadError.message
            : "Berita rubrik gagal dimuat.",
        );
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    loadNews();
    return () => controller.abort();
  }, [category, page, retryKey]);

  const leadNews = news[0];
  const featuredNews = news.slice(1, 3);
  const latestNews = news.slice(3);

  const changePage = (nextPage: number) => {
    if (
      loading ||
      nextPage < 1 ||
      nextPage > pagination.total_pages ||
      nextPage === page
    ) {
      return;
    }

    setPage(nextPage);
    pageTopRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main
      ref={pageTopRef}
      className="flex-1 scroll-mt-24 bg-[#faf8f3] text-[#1a1a1a]"
    >
      <div className="mx-auto max-w-7xl px-6 py-8">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-sm text-zinc-500"
        >
          <Link href="/" className="hover:text-zinc-800">
            Home
          </Link>
          <span aria-hidden="true">›</span>
          <span className="font-semibold text-[#F29100]">{category}</span>
        </nav>

        <header className="mt-8 max-w-3xl">
          <p className="text-sm font-bold tracking-[0.18em] text-[#F29100]">
            RUBRIK
          </p>
          <h1 className="mt-3 font-caslon text-4xl font-bold tracking-tight sm:text-5xl">
            {category}
          </h1>
          <p className="mt-4 text-base leading-8 text-zinc-600">
            {description}
          </p>
        </header>

        {loading ? (
          <RubrikSkeleton />
        ) : error ? (
          <ErrorState
            message={error}
            onRetry={() => setRetryKey((value) => value + 1)}
          />
        ) : leadNews ? (
          <>
            <section className="mt-10 grid grid-cols-1 gap-10 border-y border-zinc-200 py-10 lg:grid-cols-2">
              <div className="flex flex-col justify-center">
                <p className="text-sm font-bold tracking-wider text-[#F29100]">
                  {leadNews.category.toUpperCase()}
                </p>
                <h2 className="mt-4 font-caslon text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                  <Link
                    href={`/${leadNews.slug}`}
                    className="transition-colors hover:text-[#8A5100]"
                  >
                    {leadNews.title}
                  </Link>
                </h2>
                <p className="mt-5 max-w-xl text-lg leading-8 text-zinc-600">
                  {leadNews.excerpt}
                </p>

                <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 border-t border-zinc-200 pt-5 text-sm text-zinc-500">
                  <span>Oleh {leadNews.author}</span>
                  <span>{formatPublishedDate(leadNews.published_at)}</span>
                  <span>{leadNews.reading_time} menit baca</span>
                </div>

                <Link
                  href={`/${leadNews.slug}`}
                  className="mt-7 inline-flex w-fit items-center gap-2 text-sm font-bold text-[#8A5100] hover:underline"
                >
                  Baca Selengkapnya
                  <span aria-hidden="true">→</span>
                </Link>
              </div>

              <Link
                href={`/${leadNews.slug}`}
                aria-label={`Baca ${leadNews.title}`}
                className="group block"
              >
                {leadNews.cover_image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={leadNews.cover_image}
                    alt={leadNews.title}
                    className="aspect-[16/10] w-full rounded-lg object-cover transition-transform duration-300 group-hover:scale-[1.01]"
                  />
                ) : (
                  <div className="aspect-[16/10] w-full rounded-lg bg-zinc-900" />
                )}
                {leadNews.caption && (
                  <p className="mt-3 text-sm text-zinc-500">
                    {leadNews.caption}
                  </p>
                )}
              </Link>
            </section>

            <section className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <SectionHeading>Pilihan {category}</SectionHeading>

                {featuredNews.length > 0 ? (
                  <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {featuredNews.map((item) => (
                      <NewsCard key={item.id} news={item} />
                    ))}
                  </div>
                ) : (
                  <EmptySection />
                )}
              </div>

              <aside>
                <div className="rounded-lg border border-zinc-200 bg-white p-6">
                  <h2 className="font-caslon text-2xl font-bold tracking-tight">
                    Terbaru di {category}
                  </h2>
                  <div className="mt-2 h-1 w-16 rounded bg-[#F29100]" />

                  {latestNews.length > 0 ? (
                    <ul className="mt-6 divide-y divide-zinc-200">
                      {latestNews.map((item) => (
                        <LatestNewsCard key={item.id} news={item} />
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-6 text-sm leading-7 text-zinc-500">
                      Artikel lain akan segera hadir.
                    </p>
                  )}
                </div>
              </aside>
            </section>

            {pagination.total_pages > 1 && (
              <PaginationNav
                pagination={pagination}
                loading={loading}
                onPageChange={changePage}
              />
            )}
          </>
        ) : (
          <div className="mt-10 rounded-lg border border-zinc-200 bg-white px-6 py-14 text-center">
            <h2 className="font-caslon text-2xl font-bold">
              Belum ada artikel di {category}
            </h2>
            <p className="mt-3 text-sm text-zinc-500">
              Artikel yang sudah diterbitkan akan tampil di halaman ini.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 border-b border-zinc-300 pb-4">
      <span className="h-7 w-1.5 rounded bg-[#F29100]" />
      <h2 className="font-caslon text-3xl font-bold tracking-tight">
        {children}
      </h2>
    </div>
  );
}

function EmptySection() {
  return (
    <p className="mt-6 rounded-lg border border-zinc-200 bg-white px-6 py-10 text-sm text-zinc-500">
      Artikel pilihan lain akan segera hadir.
    </p>
  );
}

function ErrorState({
  message,
  onRetry,
}: {
  message: string;
  onRetry: () => void;
}) {
  return (
    <div
      role="alert"
      className="mt-10 rounded-lg border border-red-200 bg-red-50 px-6 py-10 text-center"
    >
      <h2 className="font-caslon text-2xl font-bold text-red-900">
        Berita belum dapat dimuat
      </h2>
      <p className="mt-3 text-sm text-red-700">{message}</p>
      <button
        type="button"
        onClick={onRetry}
        className="mt-6 rounded-md bg-red-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-red-950"
      >
        Coba lagi
      </button>
    </div>
  );
}

function RubrikSkeleton() {
  return (
    <div aria-label="Memuat artikel" aria-busy="true">
      <div className="mt-10 grid grid-cols-1 gap-10 border-y border-zinc-200 py-10 lg:grid-cols-2">
        <div className="space-y-4">
          <div className="h-4 w-24 animate-pulse rounded bg-zinc-200" />
          <div className="h-12 w-full animate-pulse rounded bg-zinc-200" />
          <div className="h-12 w-4/5 animate-pulse rounded bg-zinc-200" />
          <div className="h-24 w-full animate-pulse rounded bg-zinc-200" />
        </div>
        <div className="aspect-[16/10] animate-pulse rounded-lg bg-zinc-200" />
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2">
          {Array.from({ length: 2 }, (_, index) => (
            <div
              key={index}
              className="h-96 animate-pulse rounded-lg bg-zinc-200"
            />
          ))}
        </div>
        <div className="h-96 animate-pulse rounded-lg bg-zinc-200" />
      </div>
    </div>
  );
}

function PaginationNav({
  pagination,
  loading,
  onPageChange,
}: {
  pagination: Pagination;
  loading: boolean;
  onPageChange: (page: number) => void;
}) {
  return (
    <nav
      aria-label="Pagination artikel rubrik"
      className="mt-12 flex flex-wrap items-center justify-center gap-3"
    >
      <button
        type="button"
        onClick={() => onPageChange(pagination.page - 1)}
        disabled={pagination.page <= 1 || loading}
        className="rounded-md border border-zinc-300 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-700 transition-colors hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Sebelumnya
      </button>

      {Array.from({ length: pagination.total_pages }, (_, index) => index + 1).map(
        (pageNumber) => (
          <button
            key={pageNumber}
            type="button"
            aria-current={
              pageNumber === pagination.page ? "page" : undefined
            }
            onClick={() => onPageChange(pageNumber)}
            disabled={loading}
            className={`h-10 min-w-10 rounded-md px-3 text-sm font-semibold transition-colors ${
              pageNumber === pagination.page
                ? "bg-[#0b0f1a] text-white"
                : "border border-zinc-300 bg-white text-zinc-700 hover:bg-zinc-100"
            }`}
          >
            {pageNumber}
          </button>
        ),
      )}

      <button
        type="button"
        onClick={() => onPageChange(pagination.page + 1)}
        disabled={pagination.page >= pagination.total_pages || loading}
        className="rounded-md border border-zinc-300 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-700 transition-colors hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Berikutnya
      </button>
    </nav>
  );
}
