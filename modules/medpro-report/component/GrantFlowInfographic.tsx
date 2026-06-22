"use client";

import React, { useRef, useState, useEffect } from "react";

type FlowStep = {
  index: number;
  label: string;
  title: string;
  description: string;
  note?: string;
  x: number;
  y: number;
  triggerProgress: number;
};

const flowSteps: FlowStep[] = [
  {
    index: 1,
    label: "NPCI",
    title: "Ajukan Proposal",
    description: "Proposal disiapkan satu tahun sebelumnya untuk perencanaan APBD.",
    note: "Contoh: pengajuan 2026 untuk dana hibah 2027.",
    x: 18,
    y: 28,
    triggerProgress: 0.0,
  },
  {
    index: 2,
    label: "DISPORA",
    title: "Cek & Verifikasi",
    description: "Usulan proposal diperiksa kelayakan, rincian kebutuhan, dan kesesuaian program.",
    x: 50,
    y: 28,
    triggerProgress: 0.2,
  },
  {
    index: 3,
    label: "PEMDA / APBD",
    title: "Penyesuaian Anggaran",
    description: "Besaran nominal dana hibah disesuaikan dengan kemampuan keuangan keuangan daerah.",
    x: 82,
    y: 28,
    triggerProgress: 0.4,
  },
  {
    index: 4,
    label: "NPCI",
    title: "Dana Turun",
    description: "Dana hibah ditetapkan secara resmi dan ditransfer ke rekening organisasi penerima.",
    x: 82,
    y: 72,
    triggerProgress: 0.6,
  },
  {
    index: 5,
    label: "NPCI",
    title: "Penerbitan SK",
    description: "NPCI menyusun Surat Keputusan (SK) pembagian distribusi anggaran dan program pembinaan.",
    x: 50,
    y: 72,
    triggerProgress: 0.8,
  },
  {
    index: 6,
    label: "ATLET",
    title: "Dana Cair",
    description: "Pencairan operasional dilakukan untuk gaji pelatih, honor atlet, serta operasional harian.",
    x: 18,
    y: 72,
    triggerProgress: 0.95,
  },
];

export default function GrantFlowInfographic() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return;

      const rect = scrollRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Scroll container has h-[400vh] to lock screen and animate
      const totalScrollable = rect.height - viewportHeight;
      if (totalScrollable <= 0) return;

      const progress = -rect.top / totalScrollable;
      const clampedProgress = Math.max(0, Math.min(1, progress));
      setScrollProgress(clampedProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Preload background frames on mount
  useEffect(() => {
    const assets = [];
    for (let i = 2; i <= 12; i++) {
      assets.push(`/3/alur-dana/${i}.webp`);
    }
    assets.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Map progress to background frame indexes (2 to 12)
  const frameIndex = Math.min(12, Math.max(2, Math.floor(scrollProgress * 10) + 2));

  // Determine active step for mobile views
  const activeStep = [...flowSteps]
    .reverse()
    .find((step) => scrollProgress >= step.triggerProgress) || flowSteps[0];

  return (
    <section className="w-full my-12 font-sans select-none">
      
      {/* Scroll track container */}
      <div ref={scrollRef} className="relative w-full h-[400vh]">
        
        {/* Sticky Lock Screen */}
        <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center">
          
          {/* Desktop/Tablet Frame Container */}
          <div className="relative h-[80vh] max-h-[600px] aspect-[1920/1080] flex-shrink-0 bg-[#071126] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            
            {/* Background frame (drawn step-by-step based on scroll progress) */}
            <img
              src={`/3/alur-dana/${frameIndex}.webp`}
              alt="Alur Dana Background"
              className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none z-0"
              loading="eager"
            />

            {/* Desktop Overlays: Crisp text boxes placed directly over the low-res background ones */}
            {flowSteps.map((step) => {
              const isVisible = scrollProgress >= step.triggerProgress;
              return (
                <div
                  key={step.title}
                  style={{
                    left: `${step.x}%`,
                    top: `${step.y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                  className={`absolute hidden lg:block bg-[#0a1e3b]/95 border border-blue-400/25 rounded-2xl p-4 shadow-xl text-left select-text transition-all duration-300 w-[240px] ${
                    isVisible
                      ? "opacity-100 scale-100 z-30"
                      : "opacity-0 scale-95 z-0 pointer-events-none"
                  }`}
                >
                  <div className="flex justify-between items-center border-b border-white/10 pb-1 mb-2">
                    <span className="text-[9px] font-black text-cyan-400 tracking-wider">
                      TAHAP {step.index} • {step.label}
                    </span>
                  </div>
                  <h4 className="text-xs font-black text-amber-300 leading-snug">
                    {step.title}
                  </h4>
                  <p className="text-[11px] text-slate-100 mt-1.5 leading-relaxed font-semibold">
                    {step.description}
                  </p>
                  {step.note && (
                    <div className="mt-2.5 p-2 bg-blue-500/10 border border-blue-400/20 rounded-xl text-[10px] text-cyan-300 font-bold leading-normal">
                      {step.note}
                    </div>
                  )}
                </div>
              );
            })}

          </div>

          {/* Mobile Overlay Card (hidden on desktop) */}
          <div className="absolute bottom-20 left-4 right-4 lg:hidden z-20 flex flex-col items-center">
            <div className="w-full max-w-[340px] bg-[#0c2b5c]/95 border border-blue-400/25 backdrop-blur-md rounded-2xl p-4 shadow-xl text-left transition-all duration-300">
              <div className="flex justify-between items-center border-b border-white/10 pb-1.5 mb-2">
                <span className="text-[9px] font-black uppercase tracking-[0.1em] text-cyan-400">
                  Tahap {activeStep.index} • {activeStep.label}
                </span>
              </div>
              <h4 className="text-xs font-bold text-amber-300 leading-tight">
                {activeStep.title}
              </h4>
              <p className="text-[11px] text-slate-200 mt-1.5 leading-relaxed font-medium">
                {activeStep.description}
              </p>
              {activeStep.note && (
                <div className="mt-2 p-2 bg-blue-500/10 border border-blue-400/20 rounded-xl text-[10px] text-cyan-300 font-bold leading-normal">
                  {activeStep.note}
                </div>
              )}
            </div>
          </div>

          {/* Visual Indicator of scroll progress at bottom of screen */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-20 bg-[#071126]/90 border border-white/10 px-4 py-2.5 rounded-full backdrop-blur-sm shadow-md">
            <span className="text-[9px] font-black uppercase tracking-[0.18em] text-[#a5c3f7]">
              Scroll to Explore Alur Dana
            </span>
            <div className="w-36 sm:w-44 bg-slate-800 h-1 rounded-full overflow-hidden">
              <div
                className="h-full bg-cyan-400 transition-all duration-75 ease-out"
                style={{
                  width: `${scrollProgress * 100}%`,
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
