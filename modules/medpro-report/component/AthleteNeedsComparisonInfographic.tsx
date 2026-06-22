"use client";

import { useState } from "react";

type NeedItem = {
  category: string;
  general: {
    title: string;
    desc: string;
    cost: string;
    icon: string;
  };
  disability: {
    title: string;
    desc: string;
    cost: string;
    icon: string;
  };
};

const comparisonData: NeedItem[] = [
  {
    category: "Peralatan Olahraga",
    general: {
      title: "Peralatan Standar",
      desc: "Jam catur standar atau papan biasa.",
      cost: "Rp2.000.000",
      icon: "chess",
    },
    disability: {
      title: "Peralatan Modifikasi Khusus",
      desc: "Jam catur taktil/Braille khusus, kursi roda balap titanium impor.",
      cost: "Rp7.500.000 - Rp210.000.000",
      icon: "wheelchair",
    },
  },
  {
    category: "Transportasi Harian",
    general: {
      title: "Transportasi Mandiri",
      desc: "Sepeda motor standar, ojek online, atau kendaraan umum biasa.",
      cost: "Rp10.000 / hari",
      icon: "bike",
    },
    disability: {
      title: "Aksesibilitas Khusus & Pendamping",
      desc: "Sewa kendaraan ramah kursi roda, atau butuh pendamping jalan bagi tunanetra.",
      cost: "Rp700.000 - Rp800.000 / bulan",
      icon: "van",
    },
  },
  {
    category: "Akses Fasilitas Latihan",
    general: {
      title: "Akses Bebas",
      desc: "Bisa menggunakan fasilitas tangga, toilet umum, dan lapangan standar tanpa hambatan.",
      cost: "Tersedia Bebas",
      icon: "building",
    },
    disability: {
      title: "Ketergantungan Akses Fisik",
      desc: "Membutuhkan ramp, lift hidrolik, toilet ramah disabilitas, dan guiding block taktil.",
      cost: "Terbatas & Harus Sewa",
      icon: "ramp",
    },
  },
  {
    category: "Penyampaian Program",
    general: {
      title: "Metode Konvensional",
      desc: "Program tertulis di kertas, WhatsApp, atau papan tulis visual.",
      cost: "Sederhana & Gratis",
      icon: "document",
    },
    disability: {
      title: "Format Khusus (Braille & Verbal)",
      desc: "Memerlukan cetak kertas Braille, petunjuk audio, atau deskripsi verbal bertahap.",
      cost: "Butuh Alat Khusus",
      icon: "braille",
    },
  },
];

export default function AthleteNeedsComparisonInfographic() {
  const [activeTab, setActiveTab] = useState<"compare" | "general" | "disability">("compare");

  return (
    <section className="w-full bg-gradient-to-br from-[#0c1a30] to-[#050f21] rounded-3xl p-6 sm:p-8 text-white shadow-2xl border border-blue-900/50 my-8 font-sans">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <span className="inline-flex rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-1 text-xs font-black uppercase tracking-[0.2em] text-amber-300">
            Perbandingan Kebutuhan
          </span>
          <h3 className="mt-3 text-2xl sm:text-3xl font-black text-white tracking-tight">
            Kebutuhan Atlet: Umum vs Disabilitas
          </h3>
          <p className="text-sm text-slate-400 mt-1.5">
            Analisis kesenjangan biaya dan fasilitas yang harus dipenuhi oleh para atlet
          </p>
        </div>

        {/* Interactive Tabs */}
        <div className="flex rounded-xl bg-[#112240] p-1 border border-white/5 self-start md:self-auto shrink-0">
          <button
            type="button"
            onClick={() => setActiveTab("compare")}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              activeTab === "compare" 
                ? "bg-secondary text-white shadow" 
                : "text-slate-400 hover:text-white"
            }`}
          >
            Bandingkan
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("general")}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              activeTab === "general" 
                ? "bg-secondary text-white shadow" 
                : "text-slate-400 hover:text-white"
            }`}
          >
            Atlet Umum
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("disability")}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              activeTab === "disability" 
                ? "bg-secondary text-white shadow" 
                : "text-slate-400 hover:text-white"
            }`}
          >
            Atlet Disabilitas
          </button>
        </div>
      </div>

      <div className="grid gap-6">
        {comparisonData.map((item) => (
          <div 
            key={item.category}
            className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 hover:bg-white/[0.03] transition-all duration-300"
          >
            <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4 pb-2 border-b border-white/5">
              {item.category}
            </h4>

            <div className="grid md:grid-cols-2 gap-4">
              {/* General Column */}
              {(activeTab === "compare" || activeTab === "general") && (
                <div className={`p-4 rounded-xl border transition-all ${
                  activeTab === "general" ? "bg-emerald-950/20 border-emerald-500/30" : "bg-[#112240]/40 border-white/5"
                }`}>
                  <div className="flex justify-between items-start gap-2 mb-2">
                    <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400">
                      Atlet Umum (Non-Disabilitas)
                    </span>
                    <span className="text-xs font-extrabold text-emerald-300 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/20">
                      {item.general.cost}
                    </span>
                  </div>
                  <h5 className="font-bold text-white text-base">{item.general.title}</h5>
                  <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">{item.general.desc}</p>
                </div>
              )}

              {/* Disability Column */}
              {(activeTab === "compare" || activeTab === "disability") && (
                <div className={`p-4 rounded-xl border transition-all ${
                  activeTab === "disability" || activeTab === "compare" 
                    ? "bg-orange-950/20 border-orange-500/30" 
                    : "bg-[#112240]/40 border-white/5"
                }`}>
                  <div className="flex justify-between items-start gap-2 mb-2">
                    <span className="text-[10px] font-black uppercase tracking-wider text-orange-400">
                      Atlet Disabilitas (NPCI)
                    </span>
                    <span className="text-xs font-extrabold text-orange-300 bg-orange-950/60 px-2 py-0.5 rounded border border-orange-500/20">
                      {item.disability.cost}
                    </span>
                  </div>
                  <h5 className="font-bold text-white text-base">{item.disability.title}</h5>
                  <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">{item.disability.desc}</p>
                  
                  {activeTab === "compare" && (
                    <div className="mt-3 pt-2.5 border-t border-orange-500/20 text-[11px] text-orange-200/80 flex items-center gap-1">
                      <span className="text-base">⚠️</span>
                      Beban finansial jauh lebih tinggi untuk tingkat kesetaraan yang sama.
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
