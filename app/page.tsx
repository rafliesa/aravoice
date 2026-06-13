"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { type News, formatPublishedDate } from "@/lib/news";

const summaryCards = [
  {
    title: "Mengapa ini penting?",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="8" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
  {
    title: "Apa solusinya?",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.1v.2h6v-.2c0-.8.4-1.6 1-2.1A7 7 0 0 0 12 2z" />
      </svg>
    ),
  },
  {
    title: "Siapa yang terdampak?",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Apa masalahnya?",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
];

type LatestItem = {
  id: string;
  category: string;
  title: string;
  meta: string;
  href: string;
};

type FeaturedItem = {
  id: string;
  category: string;
  title: string;
  body: string;
  type: string;
  duration: string;
  coverImage: string;
  href: string;
};

const fallbackLatest: LatestItem[] = [
  {
    id: "fallback-latest-1",
    category: "PARA DATA",
    title: "NPCI Kota Bandung: Event Melimpah, Anggaran 2026 Menciut",
    meta: "10 Mei 2024 • 5 mnt baca",
    href: "#berita-terbaru",
  },
  {
    id: "fallback-latest-2",
    category: "PARA ATLET",
    title: "Maulida Aulia: Melampaui Batas dengan Lompatan Harapan",
    meta: "08 Mei 2024 • 8 mnt baca",
    href: "#berita-terbaru",
  },
  {
    id: "fallback-latest-3",
    category: "PARA EDU",
    title: "Panduan Etika Jurnalistik dalam Liputan Disabilitas",
    meta: "05 Mei 2024 • 12 mnt baca",
    href: "#berita-terbaru",
  },
];

const fallbackFeatured: FeaturedItem[] = [
  {
    id: "fallback-featured-1",
    category: "PARA POP",
    title: "Dari Cedera ke Podium Nasional",
    body: "Perjalanan seorang atlet para-atletik yang kembali bangkit setelah mengalami cedera…",
    type: "Artikel",
    duration: "5 menit baca",
    coverImage: "",
    href: "#berita-terbaru",
  },
  {
    id: "fallback-featured-2",
    category: "PARA REPORT",
    title: "Latihan Tiap Hari, Tanpa Fasilitas Layak",
    body: "Atlet renang berlatih di kolam umum demi mimpi besar mengharumkan nama bangsa di",
    type: "Artikel",
    duration: "6 menit baca",
    coverImage: "",
    href: "#berita-terbaru",
  },
  {
    id: "fallback-featured-3",
    category: "PARA POP",
    title: "Medali Emas ASEAN Para Games 2026",
    body: "Kebanggaan Indonesia dari cabang para-powerlifting yang berhasil memecahkan rekor",
    type: "Video",
    duration: "8 menit",
    coverImage: "",
    href: "#berita-terbaru",
  },
];

function MetaItem({ children, icon }: { children: React.ReactNode; icon: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-sm text-zinc-500">
      {icon}
      {children}
    </span>
  );
}

export default function Home() {
  const [publishedNews, setPublishedNews] = useState<News[]>([]);

  useEffect(() => {
    const controller = new AbortController();

    fetch("/api/news", { cache: "no-store", signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error("Backend tidak tersedia");
        return response.json() as Promise<News[]>;
      })
      .then((items) => setPublishedNews(items.filter((item) => item.is_published)))
      .catch(() => {
        // Keep the curated fallback content when the API is unavailable.
      });

    return () => controller.abort();
  }, []);

  const leadNews = publishedNews[0];
  const latestItems: LatestItem[] =
    publishedNews.length > 0
      ? publishedNews.slice(0, 3).map((item) => ({
          id: String(item.id),
          category: item.category.toUpperCase(),
          title: item.title,
          meta: `${formatPublishedDate(item.published_at)} • ${item.reading_time} menit baca`,
          href: `#berita-${item.id}`,
        }))
      : fallbackLatest;
  const featuredItems: FeaturedItem[] =
    publishedNews.length > 0
      ? publishedNews.slice(0, 3).map((item) => {
          const isVideo = item.formats.some((format) => format.toUpperCase() === "VIDEO");
          return {
            id: String(item.id),
            category: item.category.toUpperCase(),
            title: item.title,
            body: item.excerpt,
            type: isVideo ? "Video" : "Artikel",
            duration: `${item.reading_time} menit${isVideo ? "" : " baca"}`,
            coverImage: item.cover_image,
            href: `#berita-${item.id}`,
          };
        })
      : fallbackFeatured;
  const availableFormats = leadNews?.formats.length
    ? leadNews.formats.map((format) => format.toUpperCase())
    : ["TEKS", "AUDIO", "VIDEO"];

  return (
    <div className="flex-1 bg-[#faf8f3] text-[#1a1a1a]">
      <div className="mx-auto max-w-7xl px-6 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-zinc-500">
          <Link href="/" className="hover:text-zinc-800">Home</Link>
          <span>›</span>
          <Link href="/para-report" className="hover:text-zinc-800">Para Report</Link>
          <span>›</span>
          <span className="font-semibold text-[#F29100]">Liputan Khusus</span>
        </nav>

        {/* Hero */}
        <section className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold tracking-wider text-[#F29100]">
              {leadNews?.category.toUpperCase() ?? "LIPUTAN KHUSUS"}
            </p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              {leadNews?.title ?? "Di Balik Prestasi: Polemik Masa Depan Atlet Disabilitas"}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600">
              {leadNews?.excerpt ??
                "Ketika medali dirayakan, masa depan atlet sering masih dipertanyakan. Paravoice mengangkat cerita, data, dan suara untuk perubahan yang nyata."}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-zinc-200 pt-6">
              <MetaItem icon={<UserIcon />}>Oleh {leadNews?.author ?? "Tim Paravoice"}</MetaItem>
              <MetaItem icon={<CalendarIcon />}>
                {leadNews ? formatPublishedDate(leadNews.published_at) : "10 Mei 2026"}
              </MetaItem>
              <MetaItem icon={<ClockIcon />}>
                {leadNews ? `${leadNews.reading_time} menit baca` : "12 menit baca"}
              </MetaItem>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-end gap-3">
              <span className="text-sm font-medium text-zinc-500">Format tersedia:</span>
              {availableFormats.map((format) => (
                <span
                  key={format}
                  className="rounded bg-[#F29100] px-3 py-1 text-xs font-bold tracking-wide text-white"
                >
                  {format}
                </span>
              ))}
            </div>
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
            <p className="mt-3 text-sm text-zinc-500">
              {leadNews?.caption ||
                "Maulida Aulia, peraih medali emas ASEAN Para Games 2023 (Foto: NPC Indonesia)"}
            </p>
            <div className="mt-4 text-right">
              <Link
                href={leadNews ? `#berita-${leadNews.id}` : "#berita-terbaru"}
                className="text-sm font-bold text-[#8A5100] hover:underline"
              >
                Baca Selengkapnya ↓
              </Link>
            </div>
          </div>
        </section>

        {/* Action buttons */}
        <div className="mt-8 flex flex-wrap gap-4">
          <button className="inline-flex items-center gap-2 rounded-md bg-[#1a1a1a] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-black">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3" /></svg>
            Dengarkan Artikel
          </button>
          <button className="inline-flex items-center gap-2 rounded-md border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-800 transition-colors hover:bg-zinc-100">
            <span className="font-bold">A+</span> Perbesar Teks
          </button>
          <button className="inline-flex items-center gap-2 rounded-md border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-800 transition-colors hover:bg-zinc-100">
            <svg width="16" height="16" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" /><path d="M12 3a9 9 0 0 1 0 18z" fill="currentColor" /></svg>
            Kontras Tinggi
          </button>
        </div>

        {/* Main + sidebar */}
        <section className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-extrabold tracking-tight">Ringkasan Cepat</h2>
            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {summaryCards.map((card) => (
                <div key={card.title} className="rounded-lg border border-zinc-200 bg-white p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-zinc-100 text-zinc-700">
                    {card.icon}
                  </div>
                  <h3 className="mt-5 text-lg font-bold">{card.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">{card.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside id="berita-terbaru">
            <div className="rounded-lg border border-zinc-200 bg-white p-6">
              <h2 className="text-2xl font-extrabold tracking-tight">Terbaru di Paravoice.id</h2>
              <div className="mt-2 h-1 w-16 rounded bg-[#F29100]" />

              <ul className="mt-6 divide-y divide-zinc-200">
                {latestItems.map((item) => (
                  <li key={item.id} className="py-5 first:pt-0">
                    <p className="text-xs font-bold tracking-wider text-[#F29100]">{item.category}</p>
                    <Link href={item.href} className="mt-2 block text-lg font-bold leading-snug hover:text-[#8A5100]">
                      {item.title}
                    </Link>
                    <p className="mt-2 text-xs text-zinc-500">{item.meta}</p>
                  </li>
                ))}
              </ul>

              <Link
                href="#"
                className="mt-6 flex items-center justify-center gap-2 rounded-md border border-zinc-300 px-5 py-3 text-sm font-bold text-zinc-800 transition-colors hover:bg-zinc-100"
              >
                Lihat Semua Artikel
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
              </Link>
            </div>
          </aside>
        </section>

        {/* Featured cards */}
        <section className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {featuredItems.map((item) => (
            <article
              id={`berita-${item.id}`}
              key={item.id}
              className="overflow-hidden rounded-lg border border-zinc-200 bg-white"
            >
              {item.coverImage ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={item.coverImage}
                  alt={item.title}
                  className="aspect-[16/10] w-full object-cover"
                />
              ) : (
                <div className="aspect-[16/10] w-full bg-black" />
              )}
              <div className="p-6">
                <p className="text-xs font-bold tracking-wider text-[#F29100]">{item.category}</p>
                <h3 className="mt-3 text-xl font-bold leading-snug">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{item.body}</p>
                <div className="mt-6 flex items-center justify-between border-t border-zinc-100 pt-4">
                  <div className="flex items-center gap-4">
                    <MetaItem icon={item.type === "Video" ? <VideoIcon /> : <DocIcon />}>{item.type}</MetaItem>
                    <MetaItem icon={<ClockIcon />}>{item.duration}</MetaItem>
                  </div>
                  <Link href={item.href} aria-label="Baca" className="text-[#F29100] transition-colors hover:text-[#8A5100]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}

function UserIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function DocIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  );
}

function VideoIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="23 7 16 12 23 17 23 7" />
      <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
    </svg>
  );
}
