"use client";

import { useState } from "react";

type HierarchyNode = {
  level: string;
  title: string;
  authority: string;
  scope: string;
  implementation: string;
  description: string;
};

const hierarchyData: HierarchyNode[] = [
  {
    level: "Tingkat Nasional (UU)",
    title: "UU No. 8 Tahun 2016",
    authority: "Dewan Perwakilan Rakyat & Presiden RI",
    scope: "Pedoman utama perlindungan hak disabilitas berskala nasional. Mengatur 22 hak dasar disabilitas, penyerapan kerja minimal 1-2%, dan akomodasi sarana olahraga disabilitas.",
    implementation: "Berjalan baik di level wacana regulasi, namun pengawasannya di tingkat pelaksanaan daerah masih lemah.",
    description: "Hukum payung (umbrella law) yang merevolusi paradigma disabilitas dari sekadar bantuan sosial menjadi pemenuhan hak asasi manusia yang setara.",
  },
  {
    level: "Tingkat Kementerian (Permen)",
    title: "Permenpora RI",
    authority: "Menteri Pemuda dan Olahraga RI",
    scope: "Mengatur rincian teknis pembinaan prestasi olahraga disabilitas, fasilitasi kejuaraan (Peparnas, ASEAN Para Games), standar bonus, dan pengadaan sarana latihan atlet disabilitas.",
    implementation: "Sering kali bonus prestasi disetarakan dengan atlet non-disabilitas, namun anggaran pembinaan rutin tahunan tidak dirincikan secara mengikat bagi daerah.",
    description: "Regulasi sektoral yang menerjemahkan mandat undang-undang ke dalam kebijakan praktis keolahragaan nasional.",
  },
  {
    level: "Tingkat Daerah (Perda / Pergub)",
    title: "Perda Kota Bandung No. 15 Tahun 2019",
    authority: "Pemerintah Daerah & DPRD Kota Bandung",
    scope: "Mengatur kewajiban Pemda Kota Bandung untuk membina organisasi olahraga disabilitas (NPCI), menjamin sarana latihan yang aksesibel di GOR/Dojo lokal, dan memfasilitasi kerja ASN.",
    implementation: "Dilematis. Perda mencantumkan jaminan yang sangat lengkap, tetapi di lapangan (seperti Dojo Judo GOR Pajajaran), akses masih bertangga curam tanpa ramp/lift.",
    description: "Aturan hukum tingkat daerah yang menyentuh langsung kehidupan harian para atlet di wilayah perkotaan Bandung.",
  },
];

export default function LegalHierarchyInfographic() {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <article className="mx-auto my-8 max-w-2xl overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm font-sans">
      {/* Header */}
      <div className="border-b border-zinc-200 p-6 bg-zinc-50/30">
        <p className="text-secondary-700 text-xs font-extrabold uppercase tracking-[0.14em]">
          Struktur Regulasi Indonesia
        </p>
        <h3 className="mt-2 text-lg font-bold text-[#082b4d]">
          Hierarki Hukum Perlindungan Atlet Disabilitas
        </h3>
        <p className="mt-1 text-xs text-zinc-500">
          Dari undang-undang pusat hingga peraturan daerah yang mengikat kesejahteraan atlet.
        </p>
      </div>

      <div className="p-6 grid gap-6 md:grid-cols-[1fr_1.5fr] items-start">
        {/* Left: Interactive Timeline Steps */}
        <div className="flex flex-col gap-3">
          {hierarchyData.map((node, index) => {
            const isActive = index === activeStep;
            return (
              <button
                key={node.level}
                onClick={() => setActiveStep(index)}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex gap-3 items-center cursor-pointer ${
                  isActive
                    ? "border-secondary-500 bg-secondary-50/20 text-[#082b4d] shadow-sm"
                    : "border-zinc-200 text-zinc-500 hover:bg-zinc-50"
                }`}
                type="button"
              >
                <span
                  className={`size-6 rounded-full flex items-center justify-center text-xs font-extrabold shrink-0 transition-colors ${
                    isActive ? "bg-secondary text-white" : "bg-zinc-100 text-zinc-400"
                  }`}
                >
                  {index + 1}
                </span>
                <div>
                  <span className="block text-[10px] font-extrabold uppercase tracking-wide opacity-75">
                    {node.level}
                  </span>
                  <strong className="block text-xs font-black mt-0.5">
                    {node.title}
                  </strong>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right: Detailed Card */}
        <div className="rounded-xl border border-zinc-150 bg-zinc-50/50 p-5 space-y-4 min-h-[220px] transition-all duration-300">
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-secondary-600">
              Otoritas Penerbit
            </span>
            <h4 className="text-sm font-black text-[#082b4d] mt-0.5">
              {hierarchyData[activeStep].authority}
            </h4>
          </div>

          <div className="space-y-3 border-t border-zinc-200 pt-3 text-xs">
            <div>
              <span className="block font-bold text-zinc-500 uppercase tracking-wide text-[10px]">
                Fungsi & Cakupan:
              </span>
              <p className="mt-1 leading-relaxed text-zinc-700">
                {hierarchyData[activeStep].scope}
              </p>
            </div>

            <div>
              <span className="block font-bold text-zinc-500 uppercase tracking-wide text-[10px]">
                Status Implementasi:
              </span>
              <p className="mt-1 leading-relaxed text-zinc-700">
                {hierarchyData[activeStep].implementation}
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
