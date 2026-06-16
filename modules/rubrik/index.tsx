"use client";

import { useEffect, useRef, useState } from "react";
import {
  type NewsCardData,
  type Pagination,
  fetchNewsCards,
} from "@/lib/news";
import RubrikHero from "@/modules/rubrik/sections/RubrikHero";
import RubrikArticles from "@/modules/rubrik/sections/RubrikArticles";
import RubrikMembershipCta from "@/modules/rubrik/sections/RubrikMembershipCta";
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
  const articleNews = news.slice(1, 7);
  const remainingNews = news.slice(7, 14);
  const sidebarNews = remainingNews.length > 0 ? remainingNews : news.slice(0, 7);
  const categoryHref = `/${category.toLowerCase().replace(/\s+/g, "-")}`;

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
      <div className="mx-auto max-w-7xl px-6 pb-8">
        {loading ? (
          <RubrikSkeleton />
        ) : error ? (
          <ErrorState
            message={error}
            onRetry={() => setRetryKey((value) => value + 1)}
          />
        ) : leadNews ? (
          <>
            <RubrikHero category={category} leadNews={leadNews} />

            <RubrikArticles
              allArticlesHref={categoryHref}
              articleNews={articleNews}
              sidebarNews={sidebarNews}
            />

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
            <h1 className="text-3xl font-extrabold">
              Belum ada artikel di {category}
            </h1>
            <p className="mt-3 text-sm text-zinc-500">
              {description}
            </p>
          </div>
        )}

        <RubrikMembershipCta />
      </div>
    </main>
  );
}
