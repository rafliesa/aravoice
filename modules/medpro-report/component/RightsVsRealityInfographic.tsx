"use client";

import { useState } from "react";

type RightsRealityData = {
  category: string;
  rights: string;
  reality: string;
  badgeRights: string;
  badgeReality: string;
};

const items: RightsRealityData[] = [
  {
    category: "Pekerjaan Formal",
    rights: "Kuota minimal 2% untuk sektor publik (Pemerintah/BUMN) & 1% untuk swasta bagi tenaga kerja disabilitas.",
    reality: "Hanya segelintir atlet disabilitas (seperti Dandan Supardan) yang berhasil menembus pekerjaan formal karena hambatan syarat ijazah, rendahnya akses pendidikan tinggi, dan minimnya sertifikasi kompetensi.",
    badgeRights: "UU 8/2016 Pasal 53",
    badgeReality: "Data BPS & KND",
  },
  {
    category: "Aksesibilitas Dojo/GOR",
    rights: "Pemda wajib memfasilitasi sarana olahraga yang mudah diakses dan ramah disabilitas secara mandiri.",
    reality: "GOR Pajajaran Kota Bandung masih menyulitkan atlet; akses ke Dojo Blind Judo di lantai dua menggunakan tangga curam tanpa ubin pemandu (guiding blocks) atau ramp, sehingga atlet harus meraba-raba tangga atau digendong.",
    badgeRights: "Perda 15/2019 Pasal 18",
    badgeReality: "Realita Dojo",
  },
  {
    category: "Jaminan Kesehatan",
    rights: "Akses jaminan perlindungan sosial dan asuransi kecelakaan/kesehatan berkelanjutan.",
    reality: "BPJS kesehatan atlet disabilitas bentukan organisasi sering kali dinonaktifkan di luar event olahraga. Jika terjadi cedera saat latihan mandiri, atlet menanggung pengobatan secara mandiri.",
    badgeRights: "Perda 15/2019 Pasal 22",
    badgeReality: "Laporan Lapangan",
  },
  {
    category: "Kesejahteraan Pensiun",
    rights: "Penghargaan prestasi keolahragaan dan jaminan peningkatan kesejahteraan sosial.",
    reality: "Belum ada program asuransi pensiun, santunan, atau jaminan hidup jangka panjang bagi atlet setelah pensiun dari dunia tanding. Pendapatan mereka terhenti begitu masa bertanding berakhir.",
    badgeRights: "Perda 15/2019 Pasal 18",
    badgeReality: "Kondisi Atlet",
  },
];

export default function RightsVsRealityInfographic() {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  const [imgError, setImgError] = useState(false);

  return (
    <article className="mx-auto my-8 max-w-2xl overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm font-sans">
      {/* Header */}
      <div className="border-b border-zinc-200 p-6 bg-zinc-50/30">
        <p className="text-secondary-700 text-xs font-extrabold uppercase tracking-[0.14em]">
          Komparasi Regulasi vs Lapangan
        </p>
        <h3 className="mt-2 text-lg font-bold text-[#082b4d]">
          Hak dalam Regulasi vs Realita Atlet
        </h3>
        <p className="mt-1 text-xs text-zinc-500">
          {!imgError 
            ? "Mencoba memuat diagram Infografis Nami. Jika gambar tidak muncul, sistem akan menampilkan data interaktif." 
            : "Kategori interaktif di bawah ini merinci ketimpangan antara jaminan hukum dan keadaan nyata di lapangan."
          }
        </p>
      </div>

      {/* Main Image with Fallback */}
      {!imgError ? (
        <div className="p-4 bg-zinc-50 flex justify-center items-center">
          <img
            src="/uploads/Infografis Nami.png"
            alt="Infografis Hak dalam Regulasi — Realita Atlet"
            className="w-full max-h-[500px] object-contain rounded-xl shadow-sm cursor-zoom-in"
            onError={() => {
              console.warn("Infografis Nami.png not found, falling back to HTML interactive layout.");
              setImgError(true);
            }}
          />
        </div>
      ) : (
        <>
          {/* Tabs */}
          <div className="flex border-b border-zinc-200 overflow-x-auto whitespace-nowrap scrollbar-thin">
            {items.map((item, idx) => {
              const isActive = idx === selectedIdx;
              return (
                <button
                  key={item.category}
                  onClick={() => setSelectedIdx(idx)}
                  className={`flex-1 py-3 px-4 text-xs font-bold transition-all border-b-2 cursor-pointer ${
                    isActive
                      ? "border-secondary-500 text-secondary-800 bg-secondary-50/10"
                      : "border-transparent text-zinc-400 hover:text-zinc-600 hover:bg-zinc-50"
                  }`}
                  type="button"
                >
                  {item.category}
                </button>
              );
            })}
          </div>

          {/* Content */}
          <div className="p-6 grid gap-6 sm:grid-cols-2">
            {/* Left Column: Hak Regulasi */}
            <div className="rounded-xl border border-emerald-150 bg-emerald-50/20 p-5 relative flex flex-col justify-between">
              <div>
                <span className="inline-block rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-extrabold px-2.5 py-0.5 tracking-wider uppercase mb-3">
                  {items[selectedIdx].badgeRights}
                </span>
                <h4 className="text-sm font-bold text-emerald-900">
                  Hak yang Dijamin Regulasi:
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-emerald-950 font-medium">
                  {items[selectedIdx].rights}
                </p>
              </div>
              <div className="absolute right-4 bottom-4 text-5xl text-emerald-500/10 font-bold select-none pointer-events-none">
                ✓
              </div>
            </div>

            {/* Right Column: Realita Lapangan */}
            <div className="rounded-xl border border-red-150 bg-red-50/20 p-5 relative flex flex-col justify-between">
              <div>
                <span className="inline-block rounded-full bg-red-100 text-red-800 text-[10px] font-extrabold px-2.5 py-0.5 tracking-wider uppercase mb-3">
                  {items[selectedIdx].badgeReality}
                </span>
                <h4 className="text-sm font-bold text-red-900">
                  Kenyataan di Lapangan:
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-red-950 font-medium">
                  {items[selectedIdx].reality}
                </p>
              </div>
              <div className="absolute right-4 bottom-4 text-5xl text-red-500/10 font-bold select-none pointer-events-none">
                ✗
              </div>
            </div>
          </div>
        </>
      )}
    </article>
  );
}
