import Link from "next/link";
import type { ReactNode } from "react";
import {
  BulbIcon,
  DesignLink,
} from "@/components/design-system/Primitives";

export function EditorialCard({
  category,
  title,
  excerpt,
  format = "Video",
  readingTime = "8 menit",
  href,
  imageSrc,
  imageAlt,
}: {
  category: string;
  title: string;
  excerpt: string;
  format?: string;
  readingTime?: string;
  href?: string;
  imageSrc?: string;
  imageAlt?: string;
}) {
  const card = (
    <article className="h-full overflow-hidden rounded-lg border border-[#ecd7bd] bg-white transition-shadow group-hover:border-secondary-300 group-hover:shadow-lg">
      {imageSrc ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={imageSrc}
          alt={imageAlt ?? title}
          className="aspect-[16/10] w-full object-cover"
        />
      ) : (
        <div className="aspect-[16/10] bg-black" />
      )}
      <div className="p-6">
        <p className="text-secondary-700 text-xs font-extrabold uppercase tracking-[0.12em]">
          {category}
        </p>
        <h3 className="text-neutral mt-3 text-xl font-bold leading-snug transition-colors group-hover:text-secondary-800">
          {title}
        </h3>
        <p className="mt-4 text-sm leading-7 text-zinc-600">{excerpt}</p>
        <div className="mt-6 flex items-center justify-between border-t border-zinc-100 pt-4 text-sm text-zinc-500">
          <div className="flex items-center gap-4">
            <span>{format}</span>
            <span>{readingTime}</span>
          </div>
          <span className="text-secondary-700 text-xl">→</span>
        </div>
      </div>
    </article>
  );

  if (!href) return card;

  return (
    <Link href={href} aria-label={`Baca ${title}`} className="group block h-full">
      {card}
    </Link>
  );
}

type LatestArticle = {
  category: string;
  title: string;
  meta: string;
  href?: string;
};

export function LatestArticles({
  title,
  items,
  allArticlesHref,
  emptyMessage,
}: {
  title: string;
  items: LatestArticle[];
  allArticlesHref?: string;
  emptyMessage?: string;
}) {
  return (
    <aside className="rounded-lg border border-zinc-200 bg-white p-6">
      <h3 className="text-2xl font-bold tracking-tight">{title}</h3>
      <div className="bg-secondary mt-3 h-1 w-36" />
      <div className="mt-2 divide-y divide-zinc-200">
        {items.map((item) => (
          <article key={item.title} className="py-6">
            <p className="text-secondary-700 text-xs font-extrabold uppercase tracking-[0.12em]">
              {item.category}
            </p>
            {item.href ? (
              <Link
                href={item.href}
                className="mt-3 block text-lg font-medium leading-7 transition-colors hover:text-secondary-800"
              >
                {item.title}
              </Link>
            ) : (
              <h4 className="mt-3 text-lg font-medium leading-7">{item.title}</h4>
            )}
            <p className="mt-3 text-xs text-zinc-400">{item.meta}</p>
          </article>
        ))}
      </div>
      {items.length === 0 && emptyMessage && (
        <p className="py-6 text-sm text-zinc-500">{emptyMessage}</p>
      )}
      {allArticlesHref && (
        <DesignLink
          href={allArticlesHref}
          variant="secondary"
          className="mt-2 w-full"
        >
          Lihat Semua Artikel <span aria-hidden="true">→</span>
        </DesignLink>
      )}
    </aside>
  );
}

export function SolutionCard({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <article className="rounded-lg border border-[#ecd7bd] bg-white p-6">
      <div className="bg-secondary-50 text-secondary flex h-12 w-12 items-center justify-center rounded">
        <BulbIcon />
      </div>
      <h3 className="mt-5 text-base font-bold">{title}</h3>
      <div className="mt-5 text-lg leading-8 text-zinc-700">{children}</div>
    </article>
  );
}

type DataPoint = {
  label: string;
  value: number;
  tone?: "primary" | "muted";
};

export function InfographicCard({
  title,
  eyebrow,
  data,
  insight,
}: {
  title: string;
  eyebrow: string;
  data: DataPoint[];
  insight: string;
}) {
  return (
    <article className="rounded-xl border border-zinc-200 bg-white p-7">
      <div className="text-secondary-700 flex items-center gap-3">
        <BarsIcon />
        <h3 className="text-neutral text-xl font-bold">{title}</h3>
      </div>
      <div className="mt-7 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-zinc-500">
            {eyebrow}
          </p>
          <div className="mt-7 space-y-5">
            {data.map((item) => (
              <div key={item.label}>
                <div className="flex justify-between gap-4 text-sm">
                  <span>{item.label}</span>
                  <strong>{item.value}%</strong>
                </div>
                <div className="mt-2 h-3 overflow-hidden rounded-full bg-zinc-200">
                  <div
                    className={`h-full rounded-full ${
                      item.tone === "primary"
                        ? "bg-secondary-700"
                        : "bg-tertiary-600"
                    }`}
                    style={{ width: `${item.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="mt-10 text-xs italic leading-5 text-zinc-500">
            Sumber: Data internal ParaVoice. Data untuk keperluan riset.
          </p>
        </div>
        <div className="bg-primary flex min-h-64 flex-col justify-between rounded-xl p-7 text-white">
          <p className="text-sm italic leading-7 text-blue-100">{insight}</p>
          <div className="mt-8 flex items-center gap-4">
            <span className="bg-secondary-700 flex h-10 w-10 items-center justify-center rounded-full">
              <BarsIcon />
            </span>
            <div>
              <strong className="block text-2xl">6.5x</strong>
              <span className="text-xs text-blue-200">Lebih banyak dampak.</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function BarsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <rect x="3" y="11" width="4" height="10" rx="1" />
      <rect x="10" y="5" width="4" height="16" rx="1" />
      <rect x="17" y="14" width="4" height="7" rx="1" />
    </svg>
  );
}
