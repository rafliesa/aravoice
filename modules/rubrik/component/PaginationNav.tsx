import Link from "next/link";
import { type Pagination } from "@/lib/news";

type PaginationNavProps = {
  baseHref: string;
  pagination: Pagination;
};

export default function PaginationNav({
  baseHref,
  pagination,
}: PaginationNavProps) {
  const pageHref = (page: number) => (page <= 1 ? baseHref : `${baseHref}?page=${page}`);

  return (
    <nav
      aria-label="Pagination artikel rubrik"
      className="mt-12 flex flex-wrap items-center justify-center gap-3"
    >
      <Link
        href={pageHref(pagination.page - 1)}
        aria-disabled={pagination.page <= 1}
        className={`inline-flex h-11 items-center justify-center rounded-md border px-5 text-sm font-extrabold transition-colors ${
          pagination.page <= 1
            ? "pointer-events-none border-zinc-200 text-zinc-300"
            : "border-[#202020] text-[#202020] hover:bg-[#202020] hover:text-white"
        }`}
      >
        Sebelumnya
      </Link>

      {Array.from({ length: pagination.total_pages }, (_, index) => index + 1).map(
        (pageNumber) => (
          <Link
            key={pageNumber}
            href={pageHref(pageNumber)}
            aria-current={
              pageNumber === pagination.page ? "page" : undefined
            }
            className={`inline-flex h-11 min-w-11 items-center justify-center rounded-md border px-3 text-sm font-extrabold transition-colors ${
              pageNumber === pagination.page
                ? "border-[#9a5a00] bg-[#9a5a00] text-white"
                : "border-[#202020] text-[#202020] hover:bg-[#202020] hover:text-white"
            }`}
          >
            {pageNumber}
          </Link>
        ),
      )}

      <Link
        href={pageHref(pagination.page + 1)}
        aria-disabled={pagination.page >= pagination.total_pages}
        className={`inline-flex h-11 items-center justify-center rounded-md border px-5 text-sm font-extrabold transition-colors ${
          pagination.page >= pagination.total_pages
            ? "pointer-events-none border-zinc-200 text-zinc-300"
            : "border-[#202020] text-[#202020] hover:bg-[#202020] hover:text-white"
        }`}
      >
        Berikutnya
      </Link>
    </nav>
  );
}
