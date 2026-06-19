import type { Metadata } from "next";
import MedproReportPage from "@/modules/medpro-report";
import {
  medproArticleDescription,
  medproArticleTitle,
} from "@/modules/medpro-report/data";
import SubtitleOneContent, {
  subtitleOneHeading,
} from "@/modules/medpro-report/content/SubtitleOneContent";

export const metadata: Metadata = {
  title: medproArticleTitle,
  description: medproArticleDescription,
};

export default function MedproArticlePage() {
  return (
    <MedproReportPage
      activeIndex={0}
      currentLabel="Sub Judul 1 dari 7"
      nextHref="/para-report/berprestasi-dalam-keterbatasan/sub-judul-2"
      subtitleLabel={subtitleOneHeading}
    >
      <SubtitleOneContent />
    </MedproReportPage>
  );
}
