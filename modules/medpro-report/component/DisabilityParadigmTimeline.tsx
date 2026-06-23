"use client";

import React from "react";

export default function DisabilityParadigmTimeline() {
  return (
    <article className="w-full max-w-4xl mx-auto overflow-hidden rounded-2xl border border-zinc-200 bg-[#fafafa] shadow-md font-sans my-5">
      {/* ── Header Section with Dark Navy Gradient ── */}
      <div
        className="relative px-6 py-5 text-white overflow-hidden"
        style={{ background: "linear-gradient(135deg, #091833 0%, #0f2a5c 50%, #173d7c 100%)" }}
      >
        {/* Decorative background glows */}
        <div className="absolute -right-10 -top-10 w-36 h-36 rounded-full bg-blue-500/10 blur-2xl pointer-events-none" />
        <div className="absolute -left-10 -bottom-10 w-36 h-36 rounded-full bg-cyan-500/10 blur-2xl pointer-events-none" />
        
        <div className="relative">
          <span className="inline-block bg-white/10 border border-white/20 text-blue-200 text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full mb-2">
            SEJARAH PARADIGMA DISABILITAS
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
            Perkembangan Paradigma Disabilitas di Indonesia
          </h3>
          <p className="mt-1.5 text-xs sm:text-[13px] text-slate-300 max-w-3xl leading-relaxed">
            Perubahan cara pandang terhadap penyandang disabilitas menunjukkan pergeseran dari pendekatan belas kasihan menuju <strong className="text-white font-bold">pendekatan berbasis hak asasi manusia</strong>.
          </p>
        </div>
      </div>

      {/* ── Timeline Grid Content ── */}
      <div className="p-4 sm:p-5 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] items-stretch gap-3">
          
          {/* Card 1: Medical Model */}
          <div className="bg-[#0b1b36] border border-blue-500/20 rounded-xl p-4 flex flex-col justify-between shadow-sm relative overflow-hidden transition-all duration-300">
            <div>
              <div className="flex justify-between items-start mb-2.5">
                <span className="inline-block bg-blue-500/10 text-blue-300 border border-blue-400/20 text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded">
                  1997 • PRE-REFORMASI
                </span>
                <div className="text-blue-400 bg-blue-500/10 p-1.5 rounded-lg border border-blue-500/20">
                  <svg className="size-4.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
              
              <h4 className="text-base font-black text-white">Medical Model</h4>
              <p className="text-[9px] sm:text-[10px] text-blue-300 uppercase tracking-widest font-extrabold mt-0.5 mb-2">
                Penyelamatan Medis
              </p>
              <p className="text-slate-300 text-xs sm:text-[13px] leading-relaxed font-normal">
                Disabilitas dipandang sebagai kondisi medis atau penyakit. Penyandang disabilitas sering ditempatkan sebagai objek belas kasihan dan rehabilitasi.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5">
              <span className="block text-[9px] font-black uppercase tracking-wider text-slate-400 mb-1.5">
                REGULASI TERKAIT
              </span>
              <div className="bg-white/5 border border-white/10 rounded-lg p-2.5 flex items-center gap-2">
                <span className="text-blue-300 text-base font-bold shrink-0">§</span>
                <p className="text-[11px] sm:text-xs leading-tight text-white/90">
                  <strong className="text-blue-300 font-bold block text-[11.5px]">UU No. 4 Tahun 1997</strong>
                  tentang Penyandang Cacat
                </p>
              </div>
            </div>
          </div>

          {/* Arrow 1 */}
          <div className="flex md:flex-col items-center justify-center py-1 md:py-0 text-slate-300">
            <svg className="size-5 rotate-90 md:rotate-0 text-[#0c2b5c]/30" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>

          {/* Card 2: Social Model */}
          <div className="bg-[#0b1b36] border border-emerald-500/20 rounded-xl p-4 flex flex-col justify-between shadow-sm relative overflow-hidden transition-all duration-300">
            <div>
              <div className="flex justify-between items-start mb-2.5">
                <span className="inline-block bg-emerald-500/10 text-emerald-300 border border-emerald-400/20 text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded">
                  2006 • PASCA-REFORMASI
                </span>
                <div className="text-emerald-400 bg-emerald-500/10 p-1.5 rounded-lg border border-emerald-500/20">
                  <svg className="size-4.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
              </div>
              
              <h4 className="text-base font-black text-white">Social Model</h4>
              <p className="text-[9px] sm:text-[10px] text-emerald-300 uppercase tracking-widest font-extrabold mt-0.5 mb-2">
                Pendekatan Sosial
              </p>
              <p className="text-slate-300 text-xs sm:text-[13px] leading-relaxed font-normal">
                Hambatan berasal dari lingkungan, sistem, dan sikap masyarakat, bukan semata dari individu. Mulai berkembang pendekatan yang lebih inklusif.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5">
              <span className="block text-[9px] font-black uppercase tracking-wider text-slate-400 mb-1.5">
                REGULASI TERKAIT
              </span>
              <div className="bg-white/5 border border-white/10 rounded-lg p-2.5 flex items-center gap-2">
                <svg className="size-4 text-emerald-300 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 00-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-.778.099-1.533.284-2.253" />
                </svg>
                <p className="text-[11px] sm:text-xs leading-tight text-white/90">
                  <strong className="text-emerald-300 font-bold block text-[11.5px]">CRPD PBB 2006</strong>
                  Convention on the Rights
                </p>
              </div>
            </div>
          </div>

          {/* Arrow 2 */}
          <div className="flex md:flex-col items-center justify-center py-1 md:py-0 text-slate-300">
            <svg className="size-5 rotate-90 md:rotate-0 text-[#0c2b5c]/30" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>

          {/* Card 3: Human Rights Model */}
          <div className="bg-[#0b1b36] border border-amber-500/20 rounded-xl p-4 flex flex-col justify-between shadow-sm relative overflow-hidden transition-all duration-300">
            <div>
              <div className="flex justify-between items-start mb-2.5">
                <span className="inline-block bg-amber-500/10 text-amber-300 border border-amber-400/20 text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded">
                  2011 - 2016 • ERA HAK ASASI
                </span>
                <div className="text-amber-400 bg-amber-500/10 p-1.5 rounded-lg border border-amber-500/20">
                  <svg className="size-4.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
              </div>
              
              <h4 className="text-base font-black text-white">Human Rights Model</h4>
              <p className="text-[9px] sm:text-[10px] text-amber-300 uppercase tracking-widest font-extrabold mt-0.5 mb-2">
                Penegakan Hak Asasi Manusia
              </p>
              <p className="text-slate-300 text-xs sm:text-[13px] leading-relaxed font-normal">
                Disabilitas dipandang sebagai bagian keberagaman manusia. Pemenuhan hak adalah kewajiban negara untuk menghormati dan melindungi.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5">
              <span className="block text-[9px] font-black uppercase tracking-wider text-slate-400 mb-1.5">
                REGULASI TERKAIT
              </span>
              
              <div className="flex items-center gap-2">
                {/* UU 19/2011 */}
                <div className="flex-1 bg-white/5 border border-white/10 rounded-lg p-2 flex flex-col justify-center min-w-0">
                  <span className="text-[9px] font-extrabold text-amber-300">UU 19/2011</span>
                  <p className="text-[10px] leading-none text-white/70 mt-1 truncate">
                    Ratifikasi CRPD
                  </p>
                </div>
                
                {/* Right Arrow */}
                <div className="text-amber-400 shrink-0">
                  <svg className="size-3.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                
                {/* UU 8/2016 */}
                <div className="flex-1 bg-white/5 border border-white/10 rounded-lg p-2 flex flex-col justify-center min-w-0">
                  <span className="text-[9px] font-extrabold text-amber-300">UU 8/2016</span>
                  <p className="text-[10px] leading-none text-white/70 mt-1 truncate">
                    UU Disabilitas
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── Footer ── */}
      <div className="px-6 py-4 bg-[#091833] border-t border-white/10">
        <p className="text-[10px] text-white/60 font-medium">
          <span className="font-extrabold text-white/80">Sumber:</span> UU No. 4/1997, CRPD PBB 2006, UU No. 19/2011, UU No. 8/2016
        </p>
      </div>
    </article>
  );
}
