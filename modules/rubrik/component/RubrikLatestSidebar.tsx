import Link from "next/link";
import { type NewsCardData, formatPublishedDate } from "@/lib/news";

type RubrikLatestSidebarProps = {
  allArticlesHref: string;
  articles: NewsCardData[];
};

export default function RubrikLatestSidebar({
  allArticlesHref,
  articles,
}: RubrikLatestSidebarProps) {
  return (
    <aside className="rounded-lg border border-[#d9dce2] bg-white p-6">
      <h2 className="text-2xl font-extrabold tracking-tight text-[#202020]">
        Artikel Lainnya
      </h2>
      <div className="mt-3 h-1 w-36 bg-[#9a5a00]" />

      <div className="mt-3 divide-y divide-[#d8d8d8]">
        {articles.map((item) => (
          <article key={item.id} className="py-5">
            <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#9a5a00]">
              PARA X
            </p>
            <Link
              href={`/${item.slug}`}
              className="mt-2 block text-lg font-medium leading-7 text-[#202020] transition-colors hover:text-[#9a5a00]"
            >
              {item.title}
            </Link>
            <p className="mt-2 text-xs text-[#8a8f99]">
              {formatPublishedDate(item.published_at)} • {item.reading_time} mnt baca
            </p>
          </article>
        ))}
      </div>

      <Link
        href={allArticlesHref}
        className="mt-3 flex h-12 items-center justify-center rounded-md border-2 border-[#202020] px-5 text-sm font-extrabold text-[#202020] transition-colors hover:bg-[#202020] hover:text-white"
      >
        Lihat Semua Artikel <span className="ml-2 text-lg" aria-hidden="true">→</span>
      </Link>
    </aside>
  );
}
