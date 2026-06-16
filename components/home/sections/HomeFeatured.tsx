import { EditorialCard, LatestArticles } from "@/components/design-system/Editorial";
import { type NewsCardData } from "@/lib/news";
import { getNewsFormat } from "../lib";

type LatestArticleItem = {
  category: string;
  title: string;
  meta: string;
  href: string;
};

type HomeFeaturedProps = {
  featuredNews: NewsCardData[];
  initialLoading: boolean;
  latestArticles: LatestArticleItem[];
  newsError: string;
};

export default function HomeFeatured({
  featuredNews,
  initialLoading,
  latestArticles,
  newsError,
}: HomeFeaturedProps) {
  return (
    <section className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div className="lg:col-span-2">
        {initialLoading ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {Array.from({ length: 2 }, (_, index) => (
              <div
                key={index}
                className="h-96 animate-pulse rounded-lg border border-zinc-200 bg-zinc-100"
              />
            ))}
          </div>
        ) : featuredNews.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {featuredNews.map((news) => (
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
        ) : (
          <p className="text-sm text-zinc-500">
            {newsError || "Belum ada berita lain untuk ditampilkan."}
          </p>
        )}
      </div>

      <aside id="berita-terbaru">
        <LatestArticles
          title="Terbaru di ParaVoice.id"
          items={latestArticles}
          allArticlesHref="/para-report"
          emptyMessage={
            initialLoading
              ? "Memuat berita terbaru..."
              : newsError || "Belum ada berita yang diterbitkan."
          }
        />
      </aside>
    </section>
  );
}