import Link from "next/link";
import { type NewsCardData, formatPublishedDate } from "@/lib/news";

type LatestNewsCardProps = {
  news: NewsCardData;
};

export default function LatestNewsCard({ news }: LatestNewsCardProps) {
  return (
    <li className="py-5 first:pt-0">
      <p className="text-xs font-bold tracking-wider text-[#F29100]">
        {news.category.toUpperCase()}
      </p>
      <Link
        href={`/${news.slug}`}
        className="mt-2 block text-lg font-bold leading-snug hover:text-[#8A5100]"
      >
        {news.title}
      </Link>
      <p className="mt-2 text-xs text-zinc-500">
        {formatPublishedDate(news.published_at)} • {news.reading_time} menit baca
      </p>
    </li>
  );
}
