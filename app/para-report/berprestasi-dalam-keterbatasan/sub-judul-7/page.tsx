import type { Metadata } from "next";
import MedproReportPage from "@/modules/medpro-report";
import { medproArticleDescription } from "@/modules/medpro-report/data";
import SubtitleSevenContent from "@/modules/medpro-report/content/SubtitleSevenContent";

const title = "Bab Advokasi";

export const metadata: Metadata = {
  title,
  description: medproArticleDescription,
};

export default function SubtitleSevenPage() {
  return (
    <MedproReportPage
      activeIndex={7}
      currentLabel="Sub Judul 7 dari 8"
      heroTitle={title}
      previousHref="/para-report/berprestasi-dalam-keterbatasan/sub-judul-6"
      nextHref="/para-report/berprestasi-dalam-keterbatasan/rangkuman"
    >
      <SubtitleSevenContent />
    </MedproReportPage>
  );
}
