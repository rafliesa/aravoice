import Link from "next/link";

export type SidebarArticle = {
  category: string;
  title: string;
  meta: string;
  href: string;
};

type HomeLatestSidebarProps = {
  emptyMessage: string;
  items: SidebarArticle[];
};

export default function HomeLatestSidebar({
  emptyMessage,
  items,
}: HomeLatestSidebarProps) {
  return (
    <aside className="motion-slide-in-right rounded-lg border border-[#d9dce2] bg-white p-6">
      <h2 className="text-2xl font-extrabold tracking-tight text-[#202020]">
        Artikel Lainnya
      </h2>
      <div className="mt-3 h-1 w-36 bg-[#9a5a00]" />

      <div className="mt-3 divide-y divide-[#d8d8d8]">
        {items.map((item, index) => (
          <article key={`${item.href}-${index}`} className="py-5">
            <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#9a5a00]">
              {item.category}
            </p>
            <Link
              href={item.href}
              className="mt-2 block text-lg font-medium leading-7 text-[#202020] transition-colors hover:text-[#9a5a00]"
            >
              {item.title}
            </Link>
            <p className="mt-2 text-xs text-[#8a8f99]">{item.meta}</p>
          </article>
        ))}
      </div>

      {items.length === 0 && (
        <p className="py-6 text-sm leading-6 text-zinc-500">{emptyMessage}</p>
      )}

      <Link
        href="/para-report"
        className="mt-3 flex h-12 items-center justify-center rounded-md border-2 border-[#202020] px-5 text-sm font-extrabold text-[#202020] transition-colors hover:bg-[#202020] hover:text-white"
      >
        Lihat Semua Artikel <span className="ml-2 text-lg" aria-hidden="true">→</span>
      </Link>
    </aside>
  );
}
