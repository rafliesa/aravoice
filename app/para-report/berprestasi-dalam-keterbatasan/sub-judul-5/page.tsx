import type { Metadata } from "next";
import MedproReportPage from "@/modules/medpro-report";
import { medproArticleDescription } from "@/modules/medpro-report/data";
import SubtitleFiveContent, {
  subtitleFiveHeading,
} from "@/modules/medpro-report/content/SubtitleFiveContent";

const title = "Pendidikan/Lapangan Pekerjaan";

export const metadata: Metadata = {
  title,
  description: medproArticleDescription,
};

export default function SubtitleFivePage() {
  return (
    <MedproReportPage
      activeIndex={4}
      currentLabel="Sub Judul 5 dari 7"
      nextHref="/para-report/berprestasi-dalam-keterbatasan/sub-judul-6"
      subtitleLabel={subtitleFiveHeading}
    >
      <SubtitleFiveContent />
    </MedproReportPage>
  );
}
