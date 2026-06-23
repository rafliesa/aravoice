import type { Metadata } from "next";
import MedproReportPage from "@/modules/medpro-report";
import { medproArticleDescription } from "@/modules/medpro-report/data";
import SubtitleFiveContent from "@/modules/medpro-report/content/SubtitleFiveContent";

const title = "Pseudo Aksesibilitas";

export const metadata: Metadata = {
  title,
  description: medproArticleDescription,
};

export default function SubtitleFivePage() {
  return (
    <MedproReportPage
      activeIndex={5}
      currentLabel="Sub Judul 5 dari 7"
      heroTitle={title}
      coverImageSrc="/5/hero.jpg"
      coverImageCaption="Guiding block berbelok dan dihimpit tiang di area GOR Pajajaran Kota Bandung."
      nextHref="/para-report/berprestasi-dalam-keterbatasan/sub-judul-6"
      previousHref="/para-report/berprestasi-dalam-keterbatasan/sub-judul-4"
    >
      <SubtitleFiveContent />
    </MedproReportPage>
  );
}
