import Link from "next/link";
import { StatusBadge } from "@/components/design-system/Primitives";
import { type NewsCardData, formatPublishedDate } from "@/lib/news";

type RubrikHeroProps = {
  category: string;
  leadNews: NewsCardData;
};

export default function RubrikHero({ category, leadNews }: RubrikHeroProps) {
  const formats = leadNews.formats.map((format) => format.toUpperCase());

  return (
    <section className="motion-fade-up pt-8">
      <nav
        aria-label="Breadcrumb"
        className="flex items-center gap-2 text-sm text-[#5b5b5b]"
      >
        <Link href="/" className="hover:text-[#202020]">
          Home
        </Link>
        <span aria-hidden="true">›</span>
        <span className="font-semibold text-[#9a5a00]">{category}</span>
      </nav>

      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[1.06fr_1fr] lg:items-stretch">
        <div>
          <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-[#9a5a00]">
            Liputan Khusus
        </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-[#202020] sm:text-5xl lg:text-[3.4rem]">
            <Link href={`/${leadNews.slug}`} className="transition-colors hover:text-[#9a5a00]">
            {leadNews.title}
          </Link>
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#5f5f5f]">
          {leadNews.excerpt}
        </p>

          <div className="mt-9 border-y border-[#d8d0c2] py-5">
            <div className="flex flex-wrap items-center gap-x-7 gap-y-3 text-xs text-[#5f5f5f]">
              <span className="inline-flex items-center gap-2">
                <UserIcon />
                Oleh {leadNews.author}
              </span>
              <span className="inline-flex items-center gap-2">
                <CalendarIcon />
                {formatPublishedDate(leadNews.published_at)}
              </span>
              <span className="inline-flex items-center gap-2">
                <ClockIcon />
                {leadNews.reading_time} menit baca
              </span>
            </div>

            {formats.length > 0 && (
              <div className="mt-7 flex flex-wrap items-center justify-start gap-3 lg:justify-end">
                <span className="text-xs font-semibold text-[#4f4f4f]">
                  Format tersedia:
                </span>
                {formats.map((format) => (
                  <StatusBadge key={format} tone="new">
                    {format}
                  </StatusBadge>
                ))}
              </div>
            )}
          </div>
        </div>

        <Link
          href={`/${leadNews.slug}`}
          aria-label={`Baca ${leadNews.title}`}
          className="group motion-card motion-slide-in-right flex h-full flex-col overflow-hidden rounded-lg border border-[#d0b894] bg-white"
        >
          {leadNews.cover_image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={leadNews.cover_image}
              alt={leadNews.title}
              className="motion-image aspect-[16/10] w-full flex-1 bg-black object-cover lg:aspect-auto"
            />
          ) : (
            <div className="aspect-[16/10] w-full flex-1 bg-black lg:aspect-auto" />
          )}
          <div className="px-4 py-3">
            <p className="text-xs leading-5 text-[#5f5f5f]">
              {leadNews.caption ||
                "Maulida Aulia, peraih medali emas ASEAN Para Games 2023 (Foto: NPC Indonesia)"}
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
}

function UserIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}
