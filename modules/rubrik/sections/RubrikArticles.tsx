import { type NewsCardData } from "@/lib/news";
import EmptySection from "@/modules/rubrik/component/EmptySection";
import RubrikArticleCard from "@/modules/rubrik/component/RubrikArticleCard";
import RubrikLatestSidebar from "@/modules/rubrik/component/RubrikLatestSidebar";

type RubrikArticlesProps = {
  allArticlesHref: string;
  articleNews: NewsCardData[];
  sidebarNews: NewsCardData[];
};

export default function RubrikArticles({
  allArticlesHref,
  articleNews,
  sidebarNews,
}: RubrikArticlesProps) {
  return (
    <section className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_22rem] lg:items-start">
      <div>
        {articleNews.length > 0 ? (
          <div className="grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2">
            {articleNews.map((item) => (
              <RubrikArticleCard key={item.id} news={item} />
            ))}
          </div>
        ) : (
          <EmptySection />
        )}
      </div>

      {sidebarNews.length > 0 && (
        <div>
          <RubrikLatestSidebar
            allArticlesHref={allArticlesHref}
            articles={sidebarNews}
          />
        </div>
      )}
    </section>
  );
}
