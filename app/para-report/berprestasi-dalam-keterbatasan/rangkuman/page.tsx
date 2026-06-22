import type { Metadata } from "next";
import MedproReportPage from "@/modules/medpro-report";
import { medproArticleDescription } from "@/modules/medpro-report/data";
import { articleParagraphClass } from "@/modules/medpro-report/component/articleContentClasses";
import VideoNoteCard from "@/modules/medpro-report/component/VideoNoteCard";

const title = "Rangkuman";

export const metadata: Metadata = {
  title,
  description: medproArticleDescription,
};

export default function SummaryPage() {
  return (
    <MedproReportPage
      activeIndex={8}
      currentLabel="Rangkuman"
      heroTitle={title}
      previousHref="/para-report/berprestasi-dalam-keterbatasan/sub-judul-7"
      nextHref=""
    >
      <p className={articleParagraphClass}>
        Dalam ketidakpastian ekonomi saat ini, kisah Ono menjadi refleksi nyata bagaimana atlet disabilitas Kota Bandung berlatih dan berjuang tidak hanya untuk meraih prestasi, tetapi juga keberlangsungan hidup mereka.
      </p>

      <p className={articleParagraphClass}>
        Disisi lain, Wirya Dharma, seorang koordinator sekaligus asisten pelatih pada cabang olahraga blind judo membagikan kisah bagaimana dedikasi dan kekhawatiran dari sudut pandang seorang pelatih dalam keterbatasan kondisi saat ini.
      </p>

      {/* Wirya Dharma Video Feature Outro (Video Feature) */}
      <div className="my-8 flex justify-center">
        <VideoNoteCard
          videoSrc="/uploads/pak toto perasaan ibu.mov"
          title="VIDEO FEATURE WIRYA DHARMA"
          description="Dedikasi dan kekhawatiran dari sudut pandang asisten pelatih blind judo."
          speakerName="Wirya Dharma"
          speakerRole="Asisten Pelatih Blind Judo NPCI Kota Bandung"
          imageSrc="/uploads/9ee61479be07118e6f3170b0b7197bb1.jpg"
        />
      </div>
    </MedproReportPage>
  );
}
