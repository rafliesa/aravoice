import { type NewsCardData } from "@/lib/news";
import HomeArticleCard from "@/modules/home/component/HomeArticleCard";
import HomeLatestSidebar, {
  type SidebarArticle,
} from "@/modules/home/component/HomeLatestSidebar";

type HomeFeaturedProps = {
  articleNews: NewsCardData[];
  initialLoading: boolean;
  latestArticles: SidebarArticle[];
  newsError: string;
};

export default function HomeFeatured({
  articleNews,
  initialLoading,
  latestArticles,
  newsError,
}: HomeFeaturedProps) {
  return (
    <section className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_22rem] lg:items-start">
      <div>
        {initialLoading ? (
          <div className="grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2">
            {Array.from({ length: 6 }, (_, index) => (
              <div
                key={index}
                className="h-[26rem] animate-pulse rounded-lg border border-zinc-200 bg-zinc-100"
              />
            ))}
          </div>
        ) : articleNews.length > 0 ? (
          <div className="grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2">
            {articleNews.map((news) => (
              <HomeArticleCard key={news.id} news={news} />
            ))}
          </div>
        ) : (
          <p className="text-sm text-zinc-500">
            {newsError || "Belum ada berita lain untuk ditampilkan."}
          </p>
        )}
      </div>

      <HomeLatestSidebar
        items={latestArticles}
        emptyMessage={
          initialLoading ? "" : newsError || "Belum ada berita yang diterbitkan."
        }
      />
    </section>
  );
}
