import { getNewsCards } from "@/lib/server/news";
import RubrikHero from "@/modules/rubrik/sections/RubrikHero";
import RubrikArticles from "@/modules/rubrik/sections/RubrikArticles";
import RubrikMembershipCta from "@/modules/rubrik/sections/RubrikMembershipCta";
import { PAGE_SIZE } from "@/modules/rubrik/component/RubrikSkeleton";
import PaginationNav from "@/modules/rubrik/component/PaginationNav";
import type { NewsCardData, Pagination } from "@/lib/news";

const EMPTY_PAGINATION: Pagination = {
  page: 1,
  limit: PAGE_SIZE,
  total_items: 0,
  total_pages: 0,
};

type RubrikPageProps = {
  category: string;
  description: string;
  page?: number;
};

export default async function RubrikPage({
  category,
  description,
  page = 1,
}: RubrikPageProps) {
  let error = "";
  let news: NewsCardData[] = [];
  let pagination = { ...EMPTY_PAGINATION, page };

  try {
    const response = await getNewsCards(category, page, PAGE_SIZE);
    news = response.data;
    pagination = response.pagination;
  } catch (loadError) {
    error =
      loadError instanceof Error
        ? loadError.message
        : "Berita rubrik gagal dimuat.";
  }

  const leadNews = news[0];
  const articleNews = news.slice(1, 7);
  const remainingNews = news.slice(7, 14);
  const sidebarNews = remainingNews.length > 0 ? remainingNews : news.slice(0, 7);
  const categoryHref = `/${category.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <main
      className="bg-surface-warm text-neutral flex-1 scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl px-6 pb-8">
        {error ? (
          <div
            role="alert"
            className="mt-10 rounded-lg border border-red-200 bg-red-50 px-6 py-10 text-center"
          >
            <h1 className="text-3xl font-extrabold text-red-900">
              Berita belum dapat dimuat
            </h1>
            <p className="mt-3 text-sm text-red-700">{error}</p>
          </div>
        ) : leadNews ? (
          <>
            <RubrikHero category={category} leadNews={leadNews} />

            <RubrikArticles
              allArticlesHref={categoryHref}
              articleNews={articleNews}
              sidebarNews={sidebarNews}
            />

            {pagination.total_pages > 1 && (
              <PaginationNav
                baseHref={categoryHref}
                pagination={pagination}
              />
            )}
          </>
        ) : (
          <div className="bg-headline-surface mt-10 rounded-lg border border-tertiary-200 px-6 py-14 text-center">
            <h1 className="text-3xl font-extrabold">
              Belum ada artikel di {category}
            </h1>
            <p className="mt-3 text-sm text-zinc-500">
              {description}
            </p>
          </div>
        )}

        <RubrikMembershipCta />
      </div>
    </main>
  );
}
