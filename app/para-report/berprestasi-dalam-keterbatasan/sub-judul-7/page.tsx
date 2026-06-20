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
      activeIndex={6}
      currentLabel="Sub Judul 7 dari 7"
      heroTitle={title}
      nextHref="#"
    >
      <SubtitleSevenContent />
    </MedproReportPage>
  );
}
