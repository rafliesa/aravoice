"use client";

import Link from "next/link";
import { use, useEffect, useState } from "react";
import { ARTICLE_PROSE } from "@/components/editor/articleProse";
import {
  type News,
  fetchNewsBySlug,
  formatPublishedDate,
} from "@/lib/news";

export default function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const [news, setNews] = useState<News | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "notfound" | "error">(
    "loading",
  );
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function load() {
      setStatus("loading");
      try {
        const data = await fetchNewsBySlug(slug, controller.signal);
        if (controller.signal.aborted) return;
        if (!data) {
          setStatus("notfound");
          return;
        }
        setNews(data);
        setStatus("ready");
      } catch (err) {
        if ((err as Error).name === "AbortError") return;
        setError(err instanceof Error ? err.message : "Berita gagal dimuat");
        setStatus("error");
      }
    }

    load();
    return () => controller.abort();
  }, [slug]);

  return (
    <div className="flex-1 bg-[#faf8f3] text-[#1a1a1a]">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <nav className="flex items-center gap-2 text-sm text-zinc-500">
          <Link href="/" className="hover:text-zinc-800">
            Home
          </Link>
          <span>›</span>
          <span className="font-semibold text-[#F29100]">
            {news?.category ?? "Berita"}
          </span>
        </nav>

        {status === "loading" && <ArticleSkeleton />}

        {status === "notfound" && (
          <div className="mt-10">
            <h1 className="text-3xl font-extrabold tracking-tight">
              Berita tidak ditemukan
            </h1>
            <p className="mt-3 text-zinc-600">
              Berita yang kamu cari mungkin sudah dihapus atau belum terbit.
            </p>
            <Link
              href="/"
              className="mt-6 inline-block text-sm font-bold text-[#8A5100] hover:underline"
            >
              ← Kembali ke beranda
            </Link>
          </div>
        )}

        {status === "error" && (
          <p className="mt-10 text-sm text-red-600">{error}</p>
        )}

        {status === "ready" && news && (
          <article className="mt-8">
            <p className="text-sm font-bold tracking-wider text-[#F29100]">
              {news.category.toUpperCase()}
            </p>
            <h1 className="mt-3 font-serif text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              {news.title}
            </h1>
            {news.excerpt && (
              <p className="mt-5 text-lg leading-8 text-zinc-600">{news.excerpt}</p>
            )}

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 border-y border-zinc-200 py-4 text-sm text-zinc-500">
              <span>Oleh {news.author}</span>
              <span>{formatPublishedDate(news.published_at)}</span>
              <span>{news.reading_time} menit baca</span>
              {news.formats.length > 0 && (
                <span className="flex flex-wrap gap-2">
                  {news.formats.map((f) => (
                    <span
                      key={f}
                      className="rounded bg-[#F29100] px-2 py-0.5 text-xs font-bold tracking-wide text-white"
                    >
                      {f.toUpperCase()}
                    </span>
                  ))}
                </span>
              )}
            </div>

            {news.cover_image && (
              <figure className="mt-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={news.cover_image}
                  alt={news.title}
                  className="w-full rounded-lg object-cover"
                />
                {news.caption && (
                  <figcaption className="mt-3 text-sm text-zinc-500">
                    {news.caption}
                  </figcaption>
                )}
              </figure>
            )}

            <div
              className={`mt-10 ${ARTICLE_PROSE}`}
              dangerouslySetInnerHTML={{ __html: news.body }}
            />
          </article>
        )}
      </div>
    </div>
  );
}

function ArticleSkeleton() {
  return (
    <article aria-busy="true" aria-label="Artikel sedang dimuat" className="motion-fade-up mt-8">
      <div className="skeleton-block h-4 w-32 rounded" />
      <div className="mt-4 space-y-4">
        <div className="skeleton-block h-12 w-full max-w-4xl rounded" />
        <div className="skeleton-block h-12 w-11/12 max-w-4xl rounded" />
        <div className="skeleton-block h-12 w-2/3 max-w-3xl rounded" />
      </div>
      <div className="mt-6 space-y-3">
        <div className="skeleton-block h-5 w-full max-w-2xl rounded" />
        <div className="skeleton-block h-5 w-4/5 max-w-xl rounded" />
      </div>
      <div className="mt-6 flex flex-wrap gap-4 border-y border-zinc-200 py-4">
        <div className="skeleton-block h-4 w-28 rounded" />
        <div className="skeleton-block h-4 w-24 rounded" />
        <div className="skeleton-block h-4 w-24 rounded" />
        <div className="skeleton-block h-4 w-16 rounded" />
      </div>
      <div className="mt-8 skeleton-block aspect-[16/8] w-full rounded-lg" />
      <div className="mt-10 max-w-3xl space-y-4">
        {Array.from({ length: 8 }, (_, index) => (
          <div
            key={index}
            className={`skeleton-block h-5 rounded ${
              index % 3 === 2 ? "w-3/4" : "w-full"
            }`}
          />
        ))}
      </div>
    </article>
  );
}
