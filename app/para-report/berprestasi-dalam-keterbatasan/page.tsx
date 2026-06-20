import type { Metadata } from "next";
import MedproReportPage from "@/modules/medpro-report";
import {
  medproArticleDescription,
} from "@/modules/medpro-report/data";
import SubtitleOneContent from "@/modules/medpro-report/content/SubtitleOneContent";

const title = "Kesejahteraan yang Tak Pasti";

export const metadata: Metadata = {
  title,
  description: medproArticleDescription,
};

export default function MedproArticlePage() {
  return (
    <MedproReportPage
      activeIndex={0}
      currentLabel="Sub Judul 1 dari 7"
      heroTitle={title}
      nextHref="/para-report/berprestasi-dalam-keterbatasan/sub-judul-2"
    >
      <SubtitleOneContent />
    </MedproReportPage>
  );
}
