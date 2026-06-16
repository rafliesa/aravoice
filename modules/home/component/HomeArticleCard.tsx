import Link from "next/link";
import { type NewsCardData } from "@/lib/news";
import { getNewsFormat } from "@/modules/home/lib";
import { ArticleIcon, ClockIcon } from "@/modules/home/component/icons";

type HomeArticleCardProps = {
  news: NewsCardData;
};

export default function HomeArticleCard({ news }: HomeArticleCardProps) {
  return (
    <Link href={`/${news.slug}`} aria-label={`Baca ${news.title}`} className="group block h-full">
      <article className="flex h-full flex-col overflow-hidden rounded-lg border border-[#ecd7bd] bg-white">
        {news.cover_image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={news.cover_image}
            alt={news.title}
            className="aspect-[16/9] w-full bg-black object-cover"
          />
        ) : (
          <div className="aspect-[16/9] w-full bg-black" />
        )}

        <div className="flex flex-1 flex-col p-6">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#9a5a00]">
            {news.category}
          </p>
          <h3 className="mt-3 text-xl font-semibold leading-7 text-[#202020] transition-colors group-hover:text-[#9a5a00]">
            {news.title}
          </h3>
          <p className="mt-3 line-clamp-2 text-sm leading-6 text-[#626262]">
            {news.excerpt}
          </p>
          <div className="mt-auto flex items-center justify-between pt-6 text-xs text-[#333333]">
            <div className="flex flex-wrap items-center gap-4">
              <span className="inline-flex items-center gap-1">
                <ArticleIcon />
                {getNewsFormat(news)}
              </span>
              <span className="inline-flex items-center gap-1">
                <ClockIcon />
                {news.reading_time} menit baca
              </span>
            </div>
            <span className="text-xl leading-none text-[#9a5a00]">→</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
