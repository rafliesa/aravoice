import React, { useState } from "react";
import Image from "next/image";

type EquipmentCategory = {
  id: string;
  name: string;
  icon: React.ReactNode;
  illustration: React.ReactNode;
  disabilitas: {
    title: string;
    desc: string;
    badge: string;
  };
  nonDisabilitas: {
    title: string;
    desc: string;
    badge: string;
  };
};

const equipmentCategories: EquipmentCategory[] = [
  {
    id: "kursi-roda-harian",
    name: "Kursi Roda Harian",
    icon: (
      <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 19H5a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2z" />
      </svg>
    ),
    illustration: (
      <div className="relative w-20 h-20 sm:w-24 sm:h-24">
        <Image
          src="/2/kursi_roda_harian.png"
          alt="Kursi Roda Harian"
          fill
          className="object-contain"
        />
      </div>
    ),
    disabilitas: {
      title: "Rp4 Juta – Rp6,7 Juta",
      desc: "Mulai dari Rp4 juta untuk kursi roda harian buatan Tiongkok, hingga Rp6,7 juta untuk sampai di Bandung.",
      badge: "Peralatan Khusus / Kursi Roda Harian",
    },
    nonDisabilitas: {
      title: "Tidak Diperlukan",
      desc: "Atlet non-disabilitas tidak memerlukan kursi roda bantuan untuk mobilitas dan aktivitas harian.",
      badge: "Aktivitas Harian Umum",
    },
  },
  {
    id: "kursi-roda-balap",
    name: "Kursi Roda Balap",
    icon: (
      <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    illustration: (
      <div className="relative w-20 h-20 sm:w-24 sm:h-24">
        <Image
          src="/2/kursi_roda_balap.png"
          alt="Kursi Roda Balap"
          fill
          className="object-contain"
        />
      </div>
    ),
    disabilitas: {
      title: "Rp100 Juta – Rp210 Juta",
      desc: "Sekitar Rp140–210 juta untuk produk impor Amerika berbahan titanium ringan, atau Rp100 juta untuk produk lokal berbahan baja.",
      badge: "Spesifikasi Balap Atletik Disabilitas",
    },
    nonDisabilitas: {
      title: "Tidak Diperlukan",
      desc: "Atlet lari non-disabilitas berlari langsung secara fisik menggunakan sepatu lari standar tanpa perangkat mekanis.",
      badge: "Lari Atletik Umum",
    },
  },
  {
    id: "timer-catur",
    name: "Timer Catur Taktil",
    icon: (
      <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    illustration: (
      <div className="relative w-20 h-20 sm:w-24 sm:h-24">
        <Image
          src="/2/catur.png"
          alt="Timer Catur Taktil"
          fill
          className="object-contain"
        />
      </div>
    ),
    disabilitas: {
      title: "Rp7,5 Juta / Unit",
      desc: "Timer catur edisi khusus yang dirancang dengan sistem Braille atau penunjuk taktil rabaan untuk pecatur tunanetra.",
      badge: "Timer Catur Braille / Taktil",
    },
    nonDisabilitas: {
      title: "Rp2 Juta / Unit",
      desc: "Menggunakan jam timer catur digital standar yang umum ditemui di turnamen catur biasa.",
      badge: "Timer Catur Standar",
    },
  },
  {
    id: "guide-rail",
    name: "Guide Rail (Bowling)",
    icon: (
      <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    ),
    illustration: (
      <div className="relative w-20 h-20 sm:w-24 sm:h-24">
        <Image
          src="/2/guide_rail.png"
          alt="Guide Rail (Bowling)"
          fill
          className="object-contain"
        />
      </div>
    ),
    disabilitas: {
      title: "Ketersediaan Terbatas",
      desc: "Alat bantu rel penuntun besi untuk melempar bola bagi atlet bowling tunanetra. Jumlahnya sangat terbatas dan baru ada sejak 2014.",
      badge: "Rel Penuntun Tunanetra",
    },
    nonDisabilitas: {
      title: "Tidak Diperlukan",
      desc: "Pemain bowling non-disabilitas melempar langsung menggunakan arah pandangan mata visual standar.",
      badge: "Bowling Standar",
    },
  },
  {
    id: "shuttlecock",
    name: "Badminton / Shuttlecock",
    icon: (
      <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
      </svg>
    ),
    illustration: (
      <div className="relative w-20 h-20 sm:w-24 sm:h-24">
        <Image
          src="/2/shuttlecock_right.png"
          alt="Badminton / Shuttlecock"
          fill
          className="object-contain"
        />
      </div>
    ),
    disabilitas: {
      title: "Hingga 1 Slop / Hari",
      desc: "Konsumsi shuttlecock dan frekuensi raket yang sama tingginya untuk kebutuhan latihan intensif harian para atlet disabilitas.",
      badge: "Peralatan Latihan Intensif",
    },
    nonDisabilitas: {
      title: "Hingga 1 Slop / Hari",
      desc: "Konsumsi peralatan latihan (raket dan shuttlecock) sama persis dengan standar program latihan intensif atlet non-disabilitas.",
      badge: "Peralatan Latihan Intensif",
    },
  },
];

export default function AthleteNeedsComparisonInfographic() {
  const [activeTab, setActiveTab] = useState<string>("kursi-roda-harian");

  const currentCategory = equipmentCategories.find((cat) => cat.id === activeTab) || equipmentCategories[0];

  return (
    <div className="my-8 font-sans w-full max-w-5xl mx-auto">
      
      {/* ── Outer Card Dashboard Container ── */}
      <div 
        className="overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl p-4 sm:p-6 text-white"
        style={{ background: "linear-gradient(135deg,#0f2c5c 0%,#1a3f7a 45%,#1e4d96 100%)" }}
      >
        
        {/* Header Title Section */}
        <div className="text-center mb-6 border-b border-white/10 pb-5">
          <span className="inline-block bg-white/10 border border-white/20 text-blue-200 text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-3">
            INTERACTIVE DASHBOARD
          </span>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-wider text-white">
            Kebutuhan &amp; Biaya Alat Atlet
          </h3>
          <p className="text-xs sm:text-sm text-blue-100 mt-2 max-w-2xl mx-auto">
            Klik tombol kategori di bawah untuk membandingkan perbedaan biaya dan kebutuhan peralatan khusus antara atlet disabilitas (NPCI) dan non-disabilitas (KONI).
          </p>
        </div>

        {/* ── Pill Tab Selector ── */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {equipmentCategories.map((cat) => {
            const isActive = cat.id === activeTab;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold border transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-[#0c2b5c] border-blue-400/60 text-blue-300 shadow-md shadow-blue-500/10"
                    : "bg-white/5 border-white/10 hover:bg-white/10 text-slate-300 hover:text-white"
                }`}
              >
                {cat.icon}
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* ── Comparison View Panel ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 items-stretch">
          
          {/* Comparative Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Left Card: Disabilitas (NPCI) */}
            <div className="bg-[#0a1e3b]/80 border border-blue-400/25 rounded-2xl p-5 flex flex-col justify-between shadow-lg relative overflow-hidden group">
              {/* Highlight gradient back shadow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full blur-xl group-hover:bg-blue-500/10 transition-all duration-300" />
              
              <div>
                <span className="inline-block bg-blue-500/15 text-blue-300 border border-blue-400/30 text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md mb-4">
                  {currentCategory.disabilitas.badge}
                </span>
                
                <h4 className="text-xs font-black tracking-widest text-[#a5c3f7] uppercase mb-1.5">
                  DISABILITAS
                </h4>
                <p className="text-xl sm:text-2xl font-black text-white leading-snug">
                  {currentCategory.disabilitas.title}
                </p>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mt-3 font-medium">
                  {currentCategory.disabilitas.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[10px] text-blue-300 font-extrabold">
                <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span>Memerlukan Anggaran Ekstra</span>
              </div>
            </div>

            {/* Right Card: Non Disabilitas (KONI) */}
            <div className="bg-[#10244c]/60 border border-slate-700/30 rounded-2xl p-5 flex flex-col justify-between shadow-lg relative overflow-hidden group">
              <div>
                <span className="inline-block bg-slate-500/10 text-slate-300 border border-white/10 text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md mb-4">
                  {currentCategory.nonDisabilitas.badge}
                </span>
                
                <h4 className="text-xs font-black tracking-widest text-slate-400 uppercase mb-1.5">
                  NON DISABILITAS
                </h4>
                <p className="text-xl sm:text-2xl font-black text-white/95 leading-snug">
                  {currentCategory.nonDisabilitas.title}
                </p>
                <p className="text-slate-300/90 text-xs sm:text-sm leading-relaxed mt-3 font-medium">
                  {currentCategory.nonDisabilitas.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[10px] text-slate-400 font-extrabold">
                <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Standar Biaya Umum / Nihil</span>
              </div>
            </div>

          </div>

          {/* Right Vector Illustration Card */}
          <div className="bg-[#06142c] border border-white/5 rounded-2xl p-5 flex flex-col items-center justify-center text-center shadow-lg relative overflow-hidden">
            {/* Ambient circular blur background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.06)_0%,transparent_70%)] pointer-events-none" />
            
            <div className="relative z-10 p-4 bg-white/5 border border-white/10 rounded-2xl mb-4 shadow-inner flex items-center justify-center min-h-[110px] min-w-[110px]">
              {currentCategory.illustration}
            </div>
            
            <h5 className="relative z-10 text-white text-sm font-black uppercase tracking-wider leading-snug">
              {currentCategory.name}
            </h5>
            <p className="relative z-10 text-slate-400 text-[10px] sm:text-xs leading-normal mt-1.5 px-3">
              Representasi visual peralatan yang dikomparasikan.
            </p>
          </div>

        </div>

      </div>

      {/* ── Source footer ── */}
      <div className="px-4">
        <p className="mt-3.5 text-[10px] sm:text-[11px] text-[#2d323b]/70 leading-relaxed font-medium">
          <strong>*Sumber:</strong> Aden Ahmad (Atlet Tennis), Muslim (Atlet Catur), Bambang Basuki (Atlet Bowling), Djumono Sekretaris Umum NPCI Kota Bandung.
        </p>
      </div>

    </div>
  );
}
