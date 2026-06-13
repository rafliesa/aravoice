import Link from "next/link";
import { type NewsCardData } from "@/lib/news";

type NewsCardProps = {
  news: NewsCardData;
};

export default function NewsCard({ news }: NewsCardProps) {
  const isVideo = news.formats.some((format) => format.toUpperCase() === "VIDEO");

  return (
    <article
      id={`berita-${news.id}`}
      className="overflow-hidden rounded-lg border border-zinc-200 bg-white"
    >
      {news.cover_image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={news.cover_image}
          alt={news.title}
          className="aspect-[16/10] w-full object-cover"
        />
      ) : (
        <div className="aspect-[16/10] w-full bg-black" />
      )}

      <div className="p-6">
        <p className="text-xs font-bold tracking-wider text-[#F29100]">
          {news.category.toUpperCase()}
        </p>
        <h3 className="mt-3 text-xl font-bold leading-snug">{news.title}</h3>
        <p className="mt-3 text-sm leading-7 text-zinc-600">{news.excerpt}</p>

        <div className="mt-6 flex items-center justify-between border-t border-zinc-100 pt-4">
          <div className="flex items-center gap-4">
            <MetaItem icon={isVideo ? <VideoIcon /> : <DocIcon />}>
              {isVideo ? "Video" : "Artikel"}
            </MetaItem>
            <MetaItem icon={<ClockIcon />}>
              {news.reading_time} menit{isVideo ? "" : " baca"}
            </MetaItem>
          </div>
          <Link
            href={`#berita-${news.id}`}
            aria-label={`Baca ${news.title}`}
            className="text-[#F29100] transition-colors hover:text-[#8A5100]"
          >
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </article>
  );
}

function MetaItem({
  children,
  icon,
}: {
  children: React.ReactNode;
  icon: React.ReactNode;
}) {
  return (
    <span className="inline-flex items-center gap-1.5 text-sm text-zinc-500">
      {icon}
      {children}
    </span>
  );
}

function ClockIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function DocIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  );
}

function VideoIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="23 7 16 12 23 17 23 7" />
      <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}
