import Link from "next/link";
import { DesignLink, StatusBadge } from "@/components/design-system/Primitives";
import { type NewsCardData, formatPublishedDate } from "@/lib/news";
import MetaItem from "../MetaItem";
import { UserIcon, CalendarIcon, ClockIcon } from "../icons";

type HomeHeroProps = {
  availableFormats: string[];
  heroCategory: string;
  heroExcerpt: string;
  heroTitle: string;
  leadNews?: NewsCardData;
};

export default function HomeHero({
  availableFormats,
  heroCategory,
  heroExcerpt,
  heroTitle,
  leadNews,
}: HomeHeroProps) {
  return (
    <section className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-2">
      <div>
        <p className="text-secondary-700 text-sm font-bold tracking-wider">
          {heroCategory}
        </p>
        <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
          {heroTitle}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600">
          {heroExcerpt}
        </p>

        {leadNews && (
          <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-zinc-200 pt-6">
            <MetaItem icon={<UserIcon />}>Oleh {leadNews.author}</MetaItem>
            <MetaItem icon={<CalendarIcon />}>
              {formatPublishedDate(leadNews.published_at)}
            </MetaItem>
            <MetaItem icon={<ClockIcon />}>
              {leadNews.reading_time} menit baca
            </MetaItem>
          </div>
        )}

        {availableFormats.length > 0 && (
          <div className="mt-6 flex flex-wrap items-center justify-end gap-3">
            <span className="text-sm font-medium text-zinc-500">Format tersedia:</span>
            {availableFormats.map((format) => (
              <StatusBadge key={format} tone="new">
                {format}
              </StatusBadge>
            ))}
          </div>
        )}
      </div>

      <div>
        {leadNews?.cover_image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={leadNews.cover_image}
            alt={leadNews.title}
            className="aspect-[16/10] w-full rounded-sm object-cover"
          />
        ) : (
          <div className="aspect-[16/10] w-full rounded-sm bg-black" />
        )}
        {leadNews?.caption && (
          <p className="mt-3 text-sm text-zinc-500">{leadNews.caption}</p>
        )}
        {leadNews && (
          <div className="mt-4 text-right">
            <DesignLink href={`/${leadNews.slug}`} variant="secondary">
              Baca Selengkapnya <span aria-hidden="true">→</span>
            </DesignLink>
          </div>
        )}
      </div>
    </section>
  );
}