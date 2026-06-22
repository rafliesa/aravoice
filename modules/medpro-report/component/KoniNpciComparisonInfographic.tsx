import React from "react";

type ComparisonRow = {
  category: string;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  koni: {
    title: string;
    desc: string;
  };
  npci: {
    title: string;
    desc: string;
  };
};

const comparisonRows: ComparisonRow[] = [
  {
    category: "SUMBER ANGGARAN",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-400",
    icon: (
      <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    koni: {
      title: "Dana Hibah APBD",
      desc: "",
    },
    npci: {
      title: "Dana Hibah APBD",
      desc: "",
    },
  },
  {
    category: "FASILITAS LATIHAN",
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-400",
    icon: (
      <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    koni: {
      title: "Fasilitas mapan",
      desc: "Aset sendiri atau kerja sama jangka panjang, dibangun bertahun-tahun.",
    },
    npci: {
      title: "Hampir seluruhnya sewa",
      desc: "Belum memiliki fasilitas latihan mandiri yang signifikan.",
    },
  },
  {
    category: "PENGEMBANGAN PELATIH",
    iconBg: "bg-rose-500/10",
    iconColor: "text-rose-400",
    icon: (
      <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
      </svg>
    ),
    koni: {
      title: "Program terstruktur",
      desc: "Uji kompetensi dan jalur sertifikasi pelatih resmi.",
    },
    npci: {
      title: "Belajar otodidak",
      desc: "Banyak pelatih berkembang dari pengalaman sebagai atlet.",
    },
  },
  {
    category: "KEBUTUHAN ATLET",
    iconBg: "bg-indigo-500/10",
    iconColor: "text-indigo-400",
    icon: (
      <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
    koni: {
      title: "Peralatan standar",
      desc: "Kebutuhan perlengkapan relatif standar dan mudah didapat.",
    },
    npci: {
      title: "Peralatan khusus",
      desc: "Butuh alat bantu dan peralatan khusus dengan biaya tinggi.",
    },
  },
  {
    category: "JARINGAN KERJA SAMA",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-400",
    icon: (
      <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a3 3 0 11-5.13-2.107m7.26-2.212a3 3 0 00-5.13-2.107m1.114-5.558a3 3 0 11-5.13 2.107m7.26 2.212a3 3 0 01-5.13 2.107M10.5 8.72a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z" />
      </svg>
    ),
    koni: {
      title: "Jaringan luas",
      desc: "Kerja sama aktif dengan perguruan tinggi dan sektor swasta.",
    },
    npci: {
      title: "Masih terbatas",
      desc: "Jaringan kemitraan belum berkembang secara signifikan.",
    },
  },
];

export default function KoniNpciComparisonInfographic() {
  return (
    <section className="rounded-[2rem] bg-white p-4 sm:p-6 shadow-xl border border-slate-100/80 flex flex-col gap-6 font-sans">
      
      {/* 1. Header Banner */}
      <div className="rounded-3xl bg-gradient-to-r from-[#0b1f48] via-[#0d2c6c] to-[#164bb8] px-6 py-8 sm:px-10 sm:py-10 text-left relative overflow-hidden shadow-md">
        {/* Subtle decorative mesh background overlay */}
        <div className="absolute inset-0 bg-grid-white/[0.03] pointer-events-none" />
        
        <span className="inline-block bg-white/10 border border-white/20 text-[#a5c3f7] text-[10px] sm:text-[11px] font-black uppercase tracking-[0.18em] px-4 py-1.5 rounded-full mb-4">
          EKOSISTEM OLAHRAGA KOTA BANDUNG
        </span>
        
        <h2 className="text-white text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
          Perbandingan KONI &amp; NPCI <br className="hidden sm:inline" />
          Kota Bandung
        </h2>
        
        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mt-4 max-w-3xl font-medium">
          Meskipun sama-sama menerima <strong className="text-white font-black">dana hibah APBD</strong>, kondisi dukungan kelembagaan, fasilitas, dan pengembangan SDM antara KONI dan NPCI masih menunjukkan <strong className="text-white font-black">perbedaan yang cukup besar</strong>.
        </p>
      </div>

      {/* 2. Column Headers (KONI & NPCI) */}
      <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 shadow-sm">
        <div className="grid grid-cols-2 divide-x divide-slate-200/80">
          
          {/* KONI Column Header */}
          <div className="flex flex-col items-center px-4 py-6 text-center bg-[#fdfefe]/40">
            <span className="grid size-12 place-items-center rounded-full border border-emerald-200 bg-emerald-50 text-emerald-600 shadow-sm" aria-hidden="true">
              <TrophyIcon />
            </span>
            <p className="mt-3 text-base sm:text-lg font-black text-[#0f2942]">
              KONI
            </p>
            <p className="mt-0.5 text-[11px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Non-Disabilitas
            </p>
          </div>

          {/* NPCI Column Header */}
          <div className="flex flex-col items-center px-4 py-6 text-center bg-[#fafcff]/40">
            <span className="grid size-12 place-items-center rounded-full border border-blue-200 bg-blue-50 text-blue-600 shadow-sm" aria-hidden="true">
              <TrophyIcon />
            </span>
            <p className="mt-3 text-base sm:text-lg font-black text-[#0f2942]">
              NPCI
            </p>
            <p className="mt-0.5 text-[11px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Disabilitas
            </p>
          </div>

        </div>
      </div>

      {/* 3. Comparison Cards Section */}
      <div className="flex flex-col gap-5">
        {comparisonRows.map((row) => (
          <div 
            key={row.category} 
            className="overflow-hidden rounded-2xl border border-slate-200/80 shadow-sm flex flex-col"
          >
            {/* Row Title Bar */}
            <div className="bg-[#0a1e3b] px-4 py-2.5 sm:px-6 flex items-center gap-2.5 border-b border-[#132c52]">
              <span className={`w-7 h-7 rounded-lg flex items-center justify-center ${row.iconBg} ${row.iconColor} shadow-inner`}>
                {row.icon}
              </span>
              <span className="text-white text-[11px] sm:text-xs font-black tracking-widest uppercase">
                {row.category}
              </span>
            </div>

            {/* Row Value Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-700/35 bg-[#132c52]">
              
              {/* KONI Side Cell */}
              <div className="p-4 sm:p-5 flex flex-col justify-start min-h-[70px] md:min-h-[90px]">
                <p className="font-extrabold text-sm sm:text-base leading-snug text-white">
                  {row.koni.title}
                </p>
                {row.koni.desc && (
                  <p className="mt-1 text-xs sm:text-sm leading-relaxed text-slate-300 font-medium">
                    {row.koni.desc}
                  </p>
                )}
              </div>

              {/* NPCI Side Cell */}
              <div className="p-4 sm:p-5 flex flex-col justify-start min-h-[70px] md:min-h-[90px]">
                <p className="font-extrabold text-sm sm:text-base leading-snug text-white">
                  {row.npci.title}
                </p>
                {row.npci.desc && (
                  <p className="mt-1 text-xs sm:text-sm leading-relaxed text-slate-300 font-medium">
                    {row.npci.desc}
                  </p>
                )}
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* 4. Footer info block */}
      <div className="bg-[#08152c] px-6 py-4 rounded-2xl flex items-center justify-between border border-slate-800/40">
        <p className="text-slate-400 text-[10px] sm:text-[11px] font-medium leading-normal">
          Sumber: <span className="font-bold text-slate-300">Data KONI Kota Bandung dan NPCI Kota Bandung Tahun 2026</span>
        </p>
      </div>

    </section>
  );
}

function TrophyIcon() {
  return (
    <svg
      className="size-5"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.5"
      viewBox="0 0 24 24"
    >
      <path d="M8 21h8" />
      <path d="M12 17v4" />
      <path d="M7 4h10v4a5 5 0 0 1-10 0V4Z" />
      <path d="M5 5H3v2a4 4 0 0 0 4 4" />
      <path d="M19 5h2v2a4 4 0 0 1-4 4" />
    </svg>
  );
}
