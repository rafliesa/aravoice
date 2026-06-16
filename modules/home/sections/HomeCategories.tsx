import Link from "next/link";
import { EditorialCard } from "@/components/design-system/Editorial";
import { type NewsCardData } from "@/lib/news";
import { getNewsFormat } from "../lib";

// Pull a generous batch so every category section has cards to group from.
export const CARD_FETCH_LIMIT = 50;

// Category sections rendered below the hero, in display order.
// `key` is matched case-insensitively against each news item's category.
// `href` points to the rubrik page behind "Lihat Selengkapnya".
export const CATEGORY_SECTIONS = [
  { key: "Para Atlet", title: "Para Atlet", href: "/para-atlet" },
  { key: "Para Pop", title: "Para Pop", href: "/para-pop" },
  { key: "Para Edu", title: "Para Edu", href: "/para-edu" },
  { key: "Para Report", title: "Para Report", href: "/para-report" },
  { key: "Para Data", title: "Para Data", href: "/para-data" },
];

export const SECTION_CARD_LIMIT = 3;

export type CategorySection = (typeof CATEGORY_SECTIONS)[number] & {
  items: NewsCardData[];
};

type HomeCategoriesProps = {
  sections: CategorySection[];
};

export default function HomeCategories({ sections }: HomeCategoriesProps) {
  return sections.map((section) => (
    <section key={section.key} className="mt-16">
      <div className="flex items-center justify-between gap-3 border-b border-zinc-300 pb-4">
        <div className="flex items-center gap-3">
          <span className="bg-secondary h-7 w-1.5 rounded" />
          <h2 className="font-caslon text-3xl font-bold tracking-tight">
            {section.title}
          </h2>
        </div>
        <Link
          href={section.href}
          className="text-secondary-800 shrink-0 text-sm font-bold hover:underline"
        >
          Lihat Selengkapnya →
        </Link>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        {section.items.map((news) => (
          <EditorialCard
            key={news.id}
            category={news.category}
            title={news.title}
            excerpt={news.excerpt}
            format={getNewsFormat(news)}
            readingTime={`${news.reading_time} menit`}
            href={`/${news.slug}`}
            imageSrc={news.cover_image || undefined}
            imageAlt={news.title}
          />
        ))}
      </div>
    </section>
  ));
}