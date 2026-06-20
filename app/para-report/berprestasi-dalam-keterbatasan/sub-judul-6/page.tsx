import type { Metadata } from "next";
import MedproReportPage from "@/modules/medpro-report";
import { medproArticleDescription } from "@/modules/medpro-report/data";
import SubtitleSixContent from "@/modules/medpro-report/content/SubtitleSixContent";

const title = "Psikologis";

export const metadata: Metadata = {
  title,
  description: medproArticleDescription,
};

export default function SubtitleSixPage() {
  return (
    <MedproReportPage
      activeIndex={5}
      currentLabel="Sub Judul 6 dari 7"
      heroTitle={title}
      nextHref="/para-report/berprestasi-dalam-keterbatasan/sub-judul-7"
      previousHref="/para-report/berprestasi-dalam-keterbatasan/sub-judul-5"
    >
      <SubtitleSixContent />
    </MedproReportPage>
  );
}
