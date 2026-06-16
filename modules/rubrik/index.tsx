"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  type NewsCardData,
  type Pagination,
  fetchNewsCards,
} from "@/lib/news";
import RubrikHero from "@/modules/rubrik/sections/RubrikHero";
import RubrikArticles from "@/modules/rubrik/sections/RubrikArticles";
import ErrorState from "@/modules/rubrik/component/ErrorState";
import RubrikSkeleton, { PAGE_SIZE } from "@/modules/rubrik/component/RubrikSkeleton";
import PaginationNav from "@/modules/rubrik/component/PaginationNav";

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
            <RubrikHero leadNews={leadNews} />

            <RubrikArticles otherNews={otherNews} category={category} />

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