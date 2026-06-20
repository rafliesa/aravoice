import type { ReactNode } from "react";
import ArticleContent from "@/modules/medpro-report/sections/ArticleContent";
import ArticleHero from "@/modules/medpro-report/sections/ArticleHero";
import {
  medproArticleDescription,
  medproSubnav,
} from "@/modules/medpro-report/data";
import ArticleMeta from "@/modules/medpro-report/component/ArticleMeta";
import ArticleSubnav from "@/modules/medpro-report/component/ArticleSubnav";

type MedproReportPageProps = {
  activeIndex?: number;
  children: ReactNode;
  currentLabel?: string;
  heroTitle: string;
  nextHref?: string;
};

export default function MedproReportPage({
  activeIndex = 0,
  children,
  currentLabel = "Sub Judul 1 dari 7",
  heroTitle,
  nextHref = "/para-report/berprestasi-dalam-keterbatasan/sub-judul-2",
}: MedproReportPageProps) {
  return (
    <main className="flex-1 bg-[#faf8f3] text-[#082b4d]">
      <article className="mx-auto max-w-[67rem] px-5 py-8 sm:px-6">
        <ArticleSubnav activeIndex={activeIndex} items={medproSubnav} />
        <ArticleHero
          title={heroTitle}
          description={medproArticleDescription}
        />
        <ArticleMeta currentLabel={currentLabel} />
        <ArticleContent nextHref={nextHref}>{children}</ArticleContent>
      </article>
    </main>
  );
}
