import { EditorialCard } from "@/components/design-system/Editorial";
import { type NewsCardData } from "@/lib/news";
import SectionHeading from "@/modules/rubrik/component/SectionHeading";
import EmptySection from "@/modules/rubrik/component/EmptySection";
import { getNewsFormat } from "@/modules/rubrik/lib";

type RubrikArticlesProps = {
  otherNews: NewsCardData[];
  category: string;
};

export default function RubrikArticles({ otherNews, category }: RubrikArticlesProps) {
  return (
    <section className="mt-12">
      <SectionHeading>Artikel {category}</SectionHeading>

      {otherNews.length > 0 ? (
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {otherNews.map((item) => (
            <EditorialCard
              key={item.id}
              category={item.category}
              title={item.title}
              excerpt={item.excerpt}
              format={getNewsFormat(item)}
              readingTime={`${item.reading_time} menit`}
              href={`/${item.slug}`}
              imageSrc={item.cover_image || undefined}
              imageAlt={item.title}
            />
          ))}
        </div>
      ) : (
        <EmptySection />
      )}
    </section>
  );
}