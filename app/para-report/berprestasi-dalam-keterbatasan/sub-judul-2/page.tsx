import type { Metadata } from "next";
import MedproReportPage from "@/modules/medpro-report";
import { medproArticleDescription } from "@/modules/medpro-report/data";
import SubtitleTwoContent from "@/modules/medpro-report/content/SubtitleTwoContent";

const title = "Inklusivitas Hanya di Atas Kertas";

export const metadata: Metadata = {
  title,
  description: medproArticleDescription,
};

export default function SubtitleTwoPage() {
  return (
    <MedproReportPage
      activeIndex={2}
      currentLabel="Sub Judul 2 dari 7"
      heroTitle={title}
      nextHref="/para-report/berprestasi-dalam-keterbatasan/sub-judul-3"
      previousHref="/para-report/berprestasi-dalam-keterbatasan/sub-judul-1"
    >
      <SubtitleTwoContent />
    </MedproReportPage>
  );
}
