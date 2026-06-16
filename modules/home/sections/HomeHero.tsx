import Link from "next/link";
import { StatusBadge } from "@/components/design-system/Primitives";
import { type NewsCardData, formatPublishedDate } from "@/lib/news";
import MetaItem from "@/modules/home/component/MetaItem";
import { UserIcon, CalendarIcon, ClockIcon } from "@/modules/home/component/icons";

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
    <section className="motion-fade-up pt-8">
      <nav className="flex items-center gap-2 text-sm text-[#5b5b5b]">
        <Link href="/" className="hover:text-[#202020]">Home</Link>
        <span aria-hidden="true">›</span>
      </nav>

      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[1.06fr_1fr] lg:items-start">
        <div>
          <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-[#9a5a00]">
          {heroCategory}
        </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-[#202020] sm:text-5xl lg:text-[3.4rem]">
          {heroTitle}
        </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#5f5f5f]">
          {heroExcerpt}
        </p>

          <div className="mt-9 border-t border-[#d8d0c2] pt-6">
            {leadNews && (
              <div className="flex flex-wrap items-center gap-x-7 gap-y-3">
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
              <div className="mt-7 flex flex-wrap items-center justify-start gap-3 lg:justify-end">
                <span className="text-xs font-semibold text-[#4f4f4f]">
                  Format tersedia:
                </span>
                {availableFormats.map((format) => (
                  <StatusBadge key={format} tone="new">
                    {format}
                  </StatusBadge>
                ))}
              </div>
            )}
          </div>
        </div>

        <Link
          href={leadNews ? `/${leadNews.slug}` : "/"}
          aria-label={leadNews ? `Baca ${leadNews.title}` : "Berita utama"}
          className="group motion-card motion-slide-in-right block overflow-hidden rounded-lg border border-[#d0b894] bg-white"
        >
          {leadNews?.cover_image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={leadNews.cover_image}
              alt={leadNews.title}
              className="motion-image aspect-[16/10] w-full bg-black object-cover"
            />
          ) : (
            <div className="aspect-[16/10] w-full bg-black" />
          )}
          <div className="px-4 py-3">
            <p className="text-xs leading-5 text-[#5f5f5f]">
              {leadNews?.caption ||
                "Maulida Aulia, peraih medali emas ASEAN Para Games 2023 (Foto: NPC Indonesia)"}
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
}
