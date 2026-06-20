import type { Metadata } from "next";
import MedproReportPage from "@/modules/medpro-report";
import { medproArticleDescription } from "@/modules/medpro-report/data";
import SubtitleFourContent from "@/modules/medpro-report/content/SubtitleFourContent";

const title = "Ekonomi";

export const metadata: Metadata = {
  title,
  description: medproArticleDescription,
};

export default function SubtitleFourPage() {
  return (
    <MedproReportPage
      activeIndex={3}
      currentLabel="Sub Judul 4 dari 7"
      heroTitle={title}
      nextHref="/para-report/berprestasi-dalam-keterbatasan/sub-judul-5"
      previousHref="/para-report/berprestasi-dalam-keterbatasan/sub-judul-3"
    >
      <SubtitleFourContent />
    </MedproReportPage>
  );
}
