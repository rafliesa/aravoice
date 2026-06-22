"use client";

import { useState } from "react";

type Step = {
  num: number;
  title: string;
  desc: string;
  detail: string;
  icon: string;
};

const literacySteps: Step[] = [
  {
    num: 1,
    title: "Pemisahan & Pemetaan Dana",
    desc: "Memisahkan dana insentif latihan harian dari bonus kompetisi besar.",
    detail: "Bonus besar saat juara harus ditempatkan pada rekening terpisah dari rekening kebutuhan harian agar tidak habis terpakai secara konsumtif.",
    icon: "bank",
  },
  {
    num: 2,
    title: "Anggaran Harian & Pos Cedera",
    desc: "Mengalokasikan dana khusus untuk operasional latihan dan proteksi medis.",
    detail: "Menyiapkan pos khusus untuk biaya tak terduga seperti pemulihan cedera atau fisioterapi mandiri karena keterbatasan cakupan asuransi organisasi.",
    icon: "budget",
  },
  {
    num: 3,
    title: "Alokasi Modal Produktif",
    desc: "Memanfaatkan bonus kompetisi sebagai modal usaha ril untuk masa depan.",
    detail: "Membangun usaha sampingan (seperti toko alat olahraga atau reseller) untuk menjamin arus kas mandiri pasca-masa produktif atlet berakhir.",
    icon: "chart",
  },
  {
    num: 4,
    title: "Persiapan Dana Darurat",
    desc: "Menciptakan bantalan finansial untuk jeda insentif rutin.",
    detail: "Menabung minimal 6-12 bulan biaya hidup untuk menghadapi ketidakpastian administratif seperti keterlambatan pencairan dana hibah tahunan.",
    icon: "shield",
  },
];

export default function FinancialLiteracySteps() {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section className="my-10 w-full overflow-hidden rounded-3xl bg-gradient-to-br from-[#0c1a30] to-[#050f21] text-white shadow-2xl border border-blue-900/50 p-6 sm:p-8 font-sans">
      <div className="text-center mb-8">
        <span className="inline-flex rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-1 text-xs font-black uppercase tracking-[0.2em] text-amber-300">
          Panduan Finansial Atlet
        </span>
        <h4 className="text-xl sm:text-2xl font-black text-white mt-1.5 tracking-tight">
          Langkah Literasi Keuangan Bagi Atlet
        </h4>
        <p className="text-xs text-slate-400 mt-1 max-w-md mx-auto">
          Strategi pengelolaan bonus dan dana pembinaan demi kesejahteraan jangka panjang
        </p>
      </div>

      {/* Interactive timeline grid */}
      <div className="grid md:grid-cols-[1fr_1.5fr] gap-8 items-start">
        
        {/* Step Selector List (Left) */}
        <div className="space-y-3">
          {literacySteps.map((step, idx) => {
            const isActive = idx === activeStep;
            return (
              <button
                key={step.num}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-center gap-4 ${
                  isActive
                    ? "bg-[#112240] border-secondary shadow-lg shadow-secondary-500/10"
                    : "bg-white/[0.02] border-white/5 hover:bg-white/[0.04]"
                }`}
              >
                <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-black transition-all ${
                  isActive ? "bg-secondary text-white" : "bg-zinc-800 text-zinc-400"
                }`}>
                  {step.num}
                </span>
                <div>
                  <h5 className={`text-sm font-bold transition-all ${isActive ? "text-white" : "text-slate-300"}`}>
                    {step.title}
                  </h5>
                  <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                    {step.desc}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Step Detail Panel (Right) */}
        <div className="bg-[#112240]/40 rounded-2xl p-6 border border-white/5 relative overflow-hidden min-h-[220px] flex flex-col justify-between">
          {/* Decorative number watermark */}
          <div className="absolute right-4 bottom-[-20px] text-9xl font-black text-white/[0.02] select-none pointer-events-none">
            0{activeStep + 1}
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-black uppercase tracking-wider text-secondary-400">
                PANDUAN DETAIL LANGKAH {activeStep + 1}
              </span>
            </div>
            
            <h4 className="text-xl font-bold text-white leading-tight">
              {literacySteps[activeStep].title}
            </h4>
            
            <p className="text-sm text-slate-300 mt-4 leading-relaxed font-sans relative z-10">
              {literacySteps[activeStep].detail}
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-white/5 text-[10px] text-slate-500 font-bold uppercase tracking-wider">
            Klik langkah lain di sebelah kiri untuk membaca panduan
          </div>
        </div>

      </div>
    </section>
  );
}
