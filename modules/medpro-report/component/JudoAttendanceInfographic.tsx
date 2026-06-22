"use client";

import { useState } from "react";

export default function JudoAttendanceInfographic() {
  const totalAthletes = 21;
  const presentCount = 10;
  const absentCount = 11;

  return (
    <section className="my-10 w-full overflow-hidden rounded-3xl bg-gradient-to-br from-[#0c1a30] to-[#061023] text-white shadow-2xl border border-blue-900/40 p-6 sm:p-8 font-sans">
      <div className="text-center mb-8">
        <span className="inline-flex rounded-full border border-red-500/20 bg-red-500/10 px-4 py-1 text-xs font-black uppercase tracking-[0.2em] text-red-400">
          Krisis Kehadiran Latihan
        </span>
        <h4 className="text-xl sm:text-2xl font-black text-white mt-1.5 tracking-tight">
          Hanya 10 dari 21 Atlet Blind Judo yang Hadir
        </h4>
        <p className="text-xs text-slate-400 mt-1 max-w-md mx-auto">
          Dampak langsung dari ketidakpastian insentif dan keterbatasan biaya transportasi harian
        </p>
      </div>

      <div className="grid md:grid-cols-[1.2fr_1.1fr] gap-8 items-stretch">
        
        {/* Visual Matrix (Left) */}
        <div className="bg-[#112240]/40 rounded-2xl p-6 border border-white/5 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-black uppercase tracking-wider text-slate-400">
                Matriks Kehadiran Atlet
              </span>
              <span className="text-xs font-bold bg-[#112240] px-2.5 py-1 rounded border border-white/10 text-slate-300">
                Total Binaan: 21 Orang
              </span>
            </div>
            
            {/* Grid of Avatars */}
            <div className="grid grid-cols-7 gap-3 py-2 justify-center justify-items-center">
              {Array.from({ length: totalAthletes }).map((_, idx) => {
                const isPresent = idx < presentCount;
                return (
                  <div
                    key={idx}
                    className={`relative size-10 rounded-xl flex items-center justify-center border transition-all duration-500 ${
                      isPresent
                        ? "bg-gradient-to-tr from-blue-500 to-cyan-500 border-cyan-400 text-white shadow-md shadow-blue-500/20 scale-105"
                        : "bg-zinc-800/40 border-zinc-700/50 text-zinc-500 opacity-40"
                    }`}
                    title={isPresent ? "Atlet Hadir Latihan" : "Atlet Absen (Terkendala Biaya/Kerja)"}
                  >
                    <svg className="h-5.5 w-5.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    {/* Tick / Cross Indicator */}
                    <span className={`absolute -top-1 -right-1 text-[8px] font-black rounded-full w-4 h-4 flex items-center justify-center border ${
                      isPresent 
                        ? "bg-cyan-500 border-cyan-300 text-[#0c1a30]" 
                        : "bg-zinc-700 border-zinc-600 text-zinc-400"
                    }`}>
                      {isPresent ? "✓" : "×"}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Legend */}
          <div className="grid grid-cols-2 gap-4 mt-6 pt-4 border-t border-white/5 text-xs">
            <div className="flex items-center gap-2">
              <span className="size-3.5 rounded bg-gradient-to-tr from-blue-500 to-cyan-500 border border-cyan-400" />
              <span>Hadir Latihan (<strong>{presentCount} orang</strong>)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="size-3.5 rounded bg-zinc-800/40 border border-zinc-700 opacity-40" />
              <span>Absen / Bekerja (<strong>{absentCount} orang</strong>)</span>
            </div>
          </div>
        </div>

        {/* Video / Loop Animation Box (Right) */}
        <div className="relative rounded-2xl overflow-hidden border border-white/5 bg-zinc-950 min-h-[220px] md:min-h-auto flex flex-col justify-end">
          {/* Looping video container */}
          <video
            src="/uploads/ANIMASI ATLET JUDO.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-80"
            onError={(e) => {
              // Handle missing video source gracefully
              console.warn("Judo animation video source not found, playing simulated display");
            }}
          />
          {/* Fallback layout if video doesn't exist */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-gradient-to-t from-black via-black/35 to-transparent text-center">
            {/* Visual simulation of judo athletes */}
            <div className="size-16 rounded-full bg-secondary-500/20 border border-secondary-400/40 flex items-center justify-center animate-pulse mb-3">
              <svg className="h-8 w-8 text-secondary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="text-[10px] font-black tracking-widest text-secondary-400 uppercase">
              ANIMASI ATLET JUDO
            </span>
            <p className="text-xs text-zinc-400 mt-1 max-w-xs">
              Simulasi gerakan latihan blind judo NPCI Kota Bandung
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
