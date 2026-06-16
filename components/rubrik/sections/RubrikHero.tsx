import Link from "next/link";
import { DesignLink } from "@/components/design-system/Primitives";
import { type NewsCardData, formatPublishedDate } from "@/lib/news";

type RubrikHeroProps = {
  leadNews: NewsCardData;
  category: string;
};

export default function RubrikHero({ leadNews, category }: RubrikHeroProps) {
  return (
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
  );
}