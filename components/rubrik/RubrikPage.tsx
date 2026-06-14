"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { EditorialCard } from "@/components/design-system/Editorial";
import {
  DesignButton,
  DesignLink,
} from "@/components/design-system/Primitives";
import {
  type NewsCardData,
  type Pagination,
  fetchNewsCards,
  formatPublishedDate,
} from "@/lib/news";

const PAGE_SIZE = 9;

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

function getNewsFormat(news: NewsCardData) {
  const formats = news.formats.map((format) => format.toUpperCase());
  if (formats.includes("VIDEO")) return "Video";
  if (formats.includes("AUDIO")) return "Audio";
  return "Artikel";
}

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
  const otherNews = news.slice(1);

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
      className="bg-surface-warm text-neutral flex-1 scroll-mt-24"
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
          <span className="text-secondary-700 font-semibold">{category}</span>
        </nav>

        <header className="mt-8 max-w-3xl">
          <p className="text-secondary-700 text-sm font-bold tracking-[0.18em]">
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
                <p className="text-secondary-700 text-sm font-bold tracking-wider">
                  {leadNews.category.toUpperCase()}
                </p>
                <h2 className="mt-4 font-caslon text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                  <Link
                    href={`/${leadNews.slug}`}
                    className="transition-colors hover:text-secondary-800"
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

                <DesignLink
                  href={`/${leadNews.slug}`}
                  variant="secondary"
                  className="mt-7 w-fit"
                >
                  Baca Selengkapnya
                  <span aria-hidden="true">→</span>
                </DesignLink>
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

            <section className="mt-12">
              <SectionHeading>Artikel {category}</SectionHeading>

              {otherNews.length > 0 ? (
                <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {otherNews.map((item) => (
                    <EditorialCard
                      key={item.id}
                      category={item.category}
                      title={item.title}
                      excerpt={item.excerpt}
                      format={getNewsFormat(item)}
                      readingTime={`${item.reading_time} menit`}
                      href={`/${item.slug}`}
                      imageSrc={item.cover_image || undefined}
                      imageAlt={item.title}
                    />
                  ))}
                </div>
              ) : (
                <EmptySection />
              )}
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
          <div className="bg-headline-surface mt-10 rounded-lg border border-tertiary-200 px-6 py-14 text-center">
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
      <span className="bg-secondary h-7 w-1.5 rounded" />
      <h2 className="font-caslon text-3xl font-bold tracking-tight">
        {children}
      </h2>
    </div>
  );
}

function EmptySection() {
  return (
    <p className="bg-headline-surface mt-6 rounded-lg border border-tertiary-200 px-6 py-10 text-sm text-zinc-500">
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
      <DesignButton
        variant="next"
        onClick={onRetry}
        className="mt-6"
      >
        Coba lagi
      </DesignButton>
    </div>
  );
}

function RubrikSkeleton() {
  return (
    <div aria-label="Memuat artikel" aria-busy="true">
      <div className="mt-10 grid grid-cols-1 gap-10 border-y border-zinc-200 py-10 lg:grid-cols-2">
        <div className="space-y-4">
          <div className="bg-tertiary-200 h-4 w-24 animate-pulse rounded" />
          <div className="bg-tertiary-200 h-12 w-full animate-pulse rounded" />
          <div className="bg-tertiary-200 h-12 w-4/5 animate-pulse rounded" />
          <div className="bg-tertiary-200 h-24 w-full animate-pulse rounded" />
        </div>
        <div className="bg-tertiary-200 aspect-[16/10] animate-pulse rounded-lg" />
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: PAGE_SIZE - 1 }, (_, index) => (
          <div
            key={index}
            className="bg-tertiary-200 h-96 animate-pulse rounded-lg"
          />
        ))}
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
      <DesignButton
        variant="secondary"
        onClick={() => onPageChange(pagination.page - 1)}
        disabled={pagination.page <= 1 || loading}
        className="disabled:cursor-not-allowed disabled:opacity-40"
      >
        Sebelumnya
      </DesignButton>

      {Array.from({ length: pagination.total_pages }, (_, index) => index + 1).map(
        (pageNumber) => (
          <DesignButton
            key={pageNumber}
            variant={pageNumber === pagination.page ? "next" : "secondary"}
            aria-current={
              pageNumber === pagination.page ? "page" : undefined
            }
            onClick={() => onPageChange(pageNumber)}
            disabled={loading}
            className="h-10 min-w-10 px-3 disabled:cursor-not-allowed disabled:opacity-40"
          >
            {pageNumber}
          </DesignButton>
        ),
      )}

      <DesignButton
        variant="secondary"
        onClick={() => onPageChange(pagination.page + 1)}
        disabled={pagination.page >= pagination.total_pages || loading}
        className="disabled:cursor-not-allowed disabled:opacity-40"
      >
        Berikutnya
      </DesignButton>
    </nav>
  );
}
