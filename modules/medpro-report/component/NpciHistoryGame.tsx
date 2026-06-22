"use client";

import { useState } from "react";

type Milestone = {
  year: number;
  title: string;
  name: string;
  desc: string;
  progress: number; // percentage of track
};

const historyMilestones: Milestone[] = [
  {
    year: 1962,
    name: "YPOC Terbentuk",
    title: "Awal Mula Perjuangan",
    desc: "Yayasan Pembina Olahraga Cacat (YPOC) didirikan di Surakarta pada 31 Oktober 1962 oleh Prof. Dr. Soeharso. Ini menjadi cikal bakal organisasi olahraga disabilitas pertama di Indonesia.",
    progress: 10,
  },
  {
    year: 1993,
    name: "Menjadi BPOC",
    title: "Penyelarasan Struktur",
    desc: "Nama organisasi disesuaikan menjadi Badan Pembina Olahraga Cacat (BPOC) untuk memperkuat koordinasi pembinaan olahraga prestasi khusus penyandang disabilitas di tingkat daerah.",
    progress: 35,
  },
  {
    year: 2010,
    name: "BPOC Menjadi NPCI",
    title: "Deklarasi Kemandirian",
    desc: "BPOC bertransformasi menjadi National Paralympic Committee of Indonesia (NPCI) pada Konferensi Nasional di Surakarta, memisahkan diri secara penuh dari naungan KONI demi pembinaan yang lebih mandiri dan terarah.",
    progress: 65,
  },
  {
    year: 2014,
    name: "Kemandirian Penuh",
    title: "Kesetaraan Sejajar KONI",
    desc: "NPCI resmi diakui sebagai lembaga mandiri yang mengelola olahraga disabilitas secara independen dan mendapat anggaran langsung dari pemerintah, setara dengan KONI.",
    progress: 100,
  },
];

export default function NpciHistoryGame() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const currentMilestone = historyMilestones[activeStep];

  return (
    <section className="w-full bg-[#0a1b3a] rounded-3xl p-6 sm:p-8 text-white shadow-2xl border border-blue-900/50 my-10 overflow-hidden font-sans">
      <div className="text-center mb-8">
        <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
          Interactive Timeline Game
        </span>
        <h3 className="mt-3 text-2xl sm:text-3xl font-black text-white tracking-tight">
          Menelusuri Jejak Sejarah NPCI
        </h3>
        <p className="text-sm text-slate-400 mt-2 max-w-xl mx-auto">
          Klik setiap ikon tahun untuk menggerakkan atlet menuju kemandirian penuh di tahun 2014!
        </p>
      </div>

      {/* The Track */}
      <div className="relative w-full h-48 bg-[#112347] rounded-2xl border border-blue-900/60 flex items-center px-8 sm:px-16 overflow-hidden">
        {/* Track Lanes */}
        <div className="absolute inset-x-0 h-0.5 border-t border-dashed border-slate-500/25 top-1/3" />
        <div className="absolute inset-x-0 h-0.5 border-t border-dashed border-slate-500/25 top-2/3" />
        
        {/* Red track line progress */}
        <div 
          className="absolute left-0 h-1 bg-gradient-to-r from-red-500 to-amber-500 transition-all duration-1000 ease-out"
          style={{ width: `${currentMilestone.progress}%` }}
        />

        {/* Start & Finish Labels */}
        <div className="absolute left-2 bottom-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
          START
        </div>
        <div className="absolute right-4 bottom-2 text-[10px] font-bold text-red-500 uppercase tracking-widest animate-pulse">
          FINISH (2014)
        </div>

        {/* Running Athlete Avatar */}
        <div 
          className="absolute z-10 transition-all duration-1000 ease-out -translate-x-1/2"
          style={{ 
            left: `${currentMilestone.progress}%`,
            transform: `translateX(-50%) scale(${1 + (activeStep * 0.05)})` 
          }}
        >
          <div className="flex flex-col items-center">
            {/* Animated Glow effect */}
            <div className="absolute -inset-1 rounded-full bg-cyan-400 opacity-30 blur animate-ping" />
            
            {/* Icon representation of athlete (Wheelchair racer/runner avatar) */}
            <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-cyan-500 to-blue-500 border-2 border-cyan-300 shadow-xl shadow-cyan-500/20">
              <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                {activeStep === 3 ? (
                  // Celebrating finisher
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                ) : (
                  // Running athlete
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                )}
              </svg>
            </div>
            <span className="mt-1.5 rounded bg-cyan-900/90 border border-cyan-400/40 px-2 py-0.5 text-[10px] font-extrabold text-cyan-300">
              {currentMilestone.year}
            </span>
          </div>
        </div>

        {/* Milestone Stop Buttons along the track */}
        {historyMilestones.map((milestone, idx) => {
          const isPassed = idx <= activeStep;
          const isActive = idx === activeStep;

          return (
            <button
              key={milestone.year}
              type="button"
              onClick={() => setActiveStep(idx)}
              className="absolute z-20 -translate-x-1/2 group"
              style={{ left: `${milestone.progress}%` }}
            >
              <div className="flex flex-col items-center">
                <div 
                  className={`h-4 w-4 rounded-full border-2 transition-all duration-300 ${
                    isActive 
                      ? "bg-white border-cyan-400 scale-125 shadow-lg shadow-cyan-400/50" 
                      : isPassed 
                        ? "bg-cyan-500 border-cyan-400" 
                        : "bg-slate-800 border-slate-600 hover:border-slate-400"
                  }`} 
                />
                <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute top-6 bg-slate-900 text-white text-[10px] font-bold px-2 py-1 rounded border border-slate-700 whitespace-nowrap shadow-xl">
                  {milestone.name}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Info Card describing the active milestone */}
      <div className="mt-8 bg-[#10244c] border border-blue-900/40 rounded-2xl p-6 relative overflow-hidden">
        {/* Subtle decorative year watermark */}
        <div className="absolute right-4 bottom-[-20px] text-8xl font-black text-white/[0.03] select-none pointer-events-none">
          {currentMilestone.year}
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.16em] text-cyan-400">
              Misi Ke-{activeStep + 1}: {currentMilestone.name}
            </span>
            <h4 className="text-xl font-bold text-white mt-1">
              {currentMilestone.title} ({currentMilestone.year})
            </h4>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              disabled={activeStep === 0}
              onClick={() => setActiveStep((prev) => prev - 1)}
              className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-bold transition-all hover:bg-white/10 disabled:opacity-30 disabled:pointer-events-none"
            >
              ← Mundur
            </button>
            <button
              type="button"
              disabled={activeStep === historyMilestones.length - 1}
              onClick={() => setActiveStep((prev) => prev + 1)}
              className="px-4 py-1.5 rounded-lg bg-cyan-500 border border-cyan-400 text-xs font-bold transition-all hover:bg-cyan-600 text-[#061025] disabled:opacity-30 disabled:pointer-events-none animate-pulse"
            >
              Maju →
            </button>
          </div>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-slate-300 min-h-20 font-sans">
          {currentMilestone.desc}
        </p>

        {activeStep === historyMilestones.length - 1 && (
          <div className="mt-4 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold flex items-center gap-2">
            <span className="text-lg">🎉</span>
            Selamat! Anda telah mendampingi perjuangan kemandirian atlet disabilitas hingga mencapai pengakuan sejajar di tahun 2014!
          </div>
        )}
      </div>
    </section>
  );
}
