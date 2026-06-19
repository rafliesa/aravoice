import type { Metadata } from "next";
import MedproReportPage from "@/modules/medpro-report";
import { medproArticleDescription } from "@/modules/medpro-report/data";
import SubtitleThreeContent, {
  subtitleThreeHeading,
} from "@/modules/medpro-report/content/SubtitleThreeContent";

const title = "Dana yang Berputar, Kebutuhan yang Bertambah";

export const metadata: Metadata = {
  title,
  description: medproArticleDescription,
};

export default function SubtitleThreePage() {
  return (
    <MedproReportPage
      activeIndex={2}
      currentLabel="Sub Judul 3 dari 7"
      nextHref="/para-report/berprestasi-dalam-keterbatasan/sub-judul-4"
      subtitleLabel={subtitleThreeHeading}
    >
      <SubtitleThreeContent />
    </MedproReportPage>
  );
}
