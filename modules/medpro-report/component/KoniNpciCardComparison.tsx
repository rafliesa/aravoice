"use client";

import { useState } from "react";

// Standard Spade Icon (SVG)
const SpadeIcon = ({ className = "w-6 h-6", glossy = false }) => {
  if (glossy) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="spadeGlossy" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8e9aaf" />
            <stop offset="30%" stopColor="#2f3e46" />
            <stop offset="70%" stopColor="#1a252c" />
            <stop offset="100%" stopColor="#0d1317" />
          </linearGradient>
          <filter id="spadeShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#000000" floodOpacity="0.8" />
          </filter>
        </defs>
        <path 
          d="M12 2C11.23 2.01 5.5 7.63 5.5 11.5c0 3.04 2.46 5.5 5.5 5.5.34 0 .67-.03 1-.09v2.59H10v1.5h4v-1.5h-2v-2.59c.33.06.66.09 1 .09 3.04 0 5.5-2.46 5.5-5.5 0-3.87-5.73-9.49-6-9.5z" 
          fill="url(#spadeGlossy)"
          filter="url(#spadeShadow)"
        />
      </svg>
    );
  }
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C11.23 2.01 5.5 7.63 5.5 11.5c0 3.04 2.46 5.5 5.5 5.5.34 0 .67-.03 1-.09v2.59H10v1.5h4v-1.5h-2v-2.59c.33.06.66.09 1 .09 3.04 0 5.5-2.46 5.5-5.5 0-3.87-5.73-9.49-6-9.5z" />
    </svg>
  );
};

// Standard Diamond Icon (SVG)
const DiamondIcon = ({ className = "w-6 h-6", glossy = false }) => {
  if (glossy) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="diamondGlossy" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff6b6b" />
            <stop offset="40%" stopColor="#ee5253" />
            <stop offset="80%" stopColor="#c0392b" />
            <stop offset="100%" stopColor="#962d22" />
          </linearGradient>
          <filter id="diamondShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#000000" floodOpacity="0.6" />
          </filter>
        </defs>
        <path 
          d="M12 2L3 12L12 22L21 12Z" 
          fill="url(#diamondGlossy)"
          filter="url(#diamondShadow)"
        />
      </svg>
    );
  }
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L3 12L12 22L21 12Z" />
    </svg>
  );
};

export default function KoniNpciCardComparison() {
  const [isNpciFlipped, setIsNpciFlipped] = useState(false);
  const [isKoniFlipped, setIsKoniFlipped] = useState(false);

  const flipAllOpen = () => {
    setIsNpciFlipped(true);
    setIsKoniFlipped(true);
  };

  const flipAllClosed = () => {
    setIsNpciFlipped(false);
    setIsKoniFlipped(false);
  };

  return (
    <section className="my-12 w-full font-sans select-none">
      {/* Styles for card flipping */}
      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>

      {/* Header */}
      <div className="text-center mb-6">
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#a94f00]">
          Analisis Kesenjangan Kebutuhan
        </span>
        <h4 className="text-xl md:text-2xl font-black text-[#0a3358] mt-1">
          KONI vs NPCI: Anggaran &amp; Beban Pembinaan
        </h4>
        <p className="text-xs text-zinc-500 mt-2 italic">
          💡 Klik pada kartu untuk membalik dan melihat detail tanggung jawab &amp; catatan pembinaan.
        </p>
      </div>

      {/* Control Buttons */}
      <div className="flex justify-center gap-3 mb-8">
        <button 
          onClick={flipAllOpen}
          className="px-4 py-2 text-xs font-bold text-zinc-700 bg-white border border-zinc-200 hover:border-zinc-300 active:bg-zinc-50 rounded-xl shadow-sm hover:shadow transition-all flex items-center gap-1.5"
        >
          🃏 Buka Semua
        </button>
        <button 
          onClick={flipAllClosed}
          className="px-4 py-2 text-xs font-bold text-zinc-700 bg-white border border-zinc-200 hover:border-zinc-300 active:bg-zinc-50 rounded-xl shadow-sm hover:shadow transition-all flex items-center gap-1.5"
        >
          🎴 Tutup Semua
        </button>
      </div>

      {/* Grid Cards Container */}
      <div className="grid gap-8 md:grid-cols-2 justify-items-center max-w-3xl mx-auto px-4">
        
        {/* ==================== NPCI CARD ==================== */}
        <div 
          onClick={() => setIsNpciFlipped(!isNpciFlipped)}
          className="perspective-1000 w-full max-w-[325px] sm:max-w-[340px] aspect-[2.5/3.8] cursor-pointer group"
        >
          <div className={`w-full h-full relative duration-700 transform-style-3d transition-transform ${
            isNpciFlipped ? "rotate-y-180" : "hover:scale-[1.02]"
          }`}>
            
            {/* Card Back (Closed Card) */}
            <div className="absolute inset-0 backface-hidden w-full h-full rounded-2xl overflow-hidden shadow-xl border border-zinc-800 bg-gradient-to-b from-[#1b2541] via-[#10162a] to-[#0a0d1a] p-5 flex flex-col justify-between">
              {/* Playing Card Grid Lines */}
              <div className="absolute inset-3 border border-white/10 rounded-[14px] pointer-events-none" />
              
              {/* Top Corner */}
              <div className="flex flex-col items-start text-white/95 z-10">
                <span className="font-serif font-black text-xl leading-none">5</span>
                <SpadeIcon className="w-4 h-4 mt-0.5 opacity-90" />
              </div>

              {/* Center */}
              <div className="flex flex-col items-center justify-center z-10 gap-2">
                <SpadeIcon className="w-20 h-20 text-zinc-300" glossy={true} />
                <span className="font-serif font-black text-3xl text-white tracking-[0.2em] mt-2 translate-x-[0.1em]">
                  NPCI
                </span>
              </div>

              {/* Bottom Corner (Inverted) */}
              <div className="flex flex-col items-start text-white/95 z-10 rotate-180">
                <span className="font-serif font-black text-xl leading-none">5</span>
                <SpadeIcon className="w-4 h-4 mt-0.5 opacity-90" />
              </div>
            </div>

            {/* Card Front (Open Card) */}
            <div className="absolute inset-0 backface-hidden w-full h-full rounded-2xl overflow-hidden shadow-xl border-2 border-[#10162a] bg-white rotate-y-180 p-5 flex flex-col justify-between">
              
              {/* Top Row */}
              <div className="flex justify-between items-start text-[#10162a]">
                <div className="flex flex-col items-center">
                  <span className="font-serif font-black text-xl leading-none">5</span>
                  <SpadeIcon className="w-4 h-4 mt-0.5" />
                </div>
                <span className="font-serif font-black text-sm tracking-widest mt-1">NPCI</span>
              </div>

              {/* Suit Emblem Under Top Header */}
              <div className="flex justify-center -mt-2">
                <SpadeIcon className="w-6 h-6 text-[#10162a]/90" />
              </div>

              {/* Content Box */}
              <div className="flex-1 flex flex-col justify-center my-3 px-1">
                <span className="text-[10px] font-black text-zinc-400 tracking-[0.25em] text-center block mb-3.5 uppercase">
                  TANGGUNG JAWAB
                </span>
                
                <ul className="space-y-2 text-[11px] sm:text-xs font-semibold text-zinc-800">
                  <li className="flex items-start gap-2.5">
                    <SpadeIcon className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[#10162a]" />
                    <span>Pembinaan 17 cabang olahraga</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <SpadeIcon className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[#10162a]" />
                    <span>Insentif atlet, pelatih, dan pendamping</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <SpadeIcon className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[#10162a]" />
                    <span>Perlengkapan olahraga</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <SpadeIcon className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[#10162a]" />
                    <span>Alat tambahan ramah disabilitas</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <SpadeIcon className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[#10162a]" />
                    <span>Suplemen</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <SpadeIcon className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[#10162a]" />
                    <span>Keberangkatan dan pelatihan cabang</span>
                  </li>
                </ul>

                {/* Catatan Box */}
                <div className="bg-zinc-100 border border-zinc-200/80 rounded-xl p-3 mt-4">
                  <span className="text-[9px] font-black text-zinc-500 tracking-wider block mb-0.5 uppercase">
                    CATATAN
                  </span>
                  <p className="text-[10.5px] sm:text-[11.5px] leading-snug italic text-zinc-700 font-medium">
                    Cabor lebih sedikit, tetapi kebutuhan per atlet lebih kompleks
                  </p>
                </div>
              </div>

              {/* Bottom Row (Inverted) */}
              <div className="flex justify-between items-start text-[#10162a] rotate-180">
                <div className="flex flex-col items-center">
                  <span className="font-serif font-black text-xl leading-none">5</span>
                  <SpadeIcon className="w-4 h-4 mt-0.5" />
                </div>
                <span className="font-serif font-black text-sm tracking-widest mt-1">NPCI</span>
              </div>

            </div>

          </div>
        </div>

        {/* ==================== KONI CARD ==================== */}
        <div 
          onClick={() => setIsKoniFlipped(!isKoniFlipped)}
          className="perspective-1000 w-full max-w-[325px] sm:max-w-[340px] aspect-[2.5/3.8] cursor-pointer group"
        >
          <div className={`w-full h-full relative duration-700 transform-style-3d transition-transform ${
            isKoniFlipped ? "rotate-y-180" : "hover:scale-[1.02]"
          }`}>
            
            {/* Card Back (Closed Card) */}
            <div className="absolute inset-0 backface-hidden w-full h-full rounded-2xl overflow-hidden shadow-xl border border-red-950 bg-gradient-to-b from-[#a62424] via-[#591010] to-[#3a0808] p-5 flex flex-col justify-between">
              {/* Playing Card Grid Lines */}
              <div className="absolute inset-3 border border-white/10 rounded-[14px] pointer-events-none" />
              
              {/* Top Corner */}
              <div className="flex flex-col items-start text-white/95 z-10">
                <span className="font-serif font-black text-xl leading-none text-red-100">35</span>
                <DiamondIcon className="w-4 h-4 mt-0.5 opacity-90" />
              </div>

              {/* Center */}
              <div className="flex flex-col items-center justify-center z-10 gap-2">
                <DiamondIcon className="w-20 h-20 text-red-200" glossy={true} />
                <span className="font-serif font-black text-3xl text-white tracking-[0.2em] mt-2 translate-x-[0.1em]">
                  KONI
                </span>
              </div>

              {/* Bottom Corner (Inverted) */}
              <div className="flex flex-col items-start text-white/95 z-10 rotate-180">
                <span className="font-serif font-black text-xl leading-none text-red-100">35</span>
                <DiamondIcon className="w-4 h-4 mt-0.5 opacity-90" />
              </div>
            </div>

            {/* Card Front (Open Card) */}
            <div className="absolute inset-0 backface-hidden w-full h-full rounded-2xl overflow-hidden shadow-xl border-2 border-[#a62424] bg-white rotate-y-180 p-5 flex flex-col justify-between">
              
              {/* Top Row */}
              <div className="flex justify-between items-start text-[#a62424]">
                <div className="flex flex-col items-center">
                  <span className="font-serif font-black text-xl leading-none">35</span>
                  <DiamondIcon className="w-4 h-4 mt-0.5" />
                </div>
                <span className="font-serif font-black text-sm tracking-widest mt-1">KONI</span>
              </div>

              {/* Suit Emblem Under Top Header */}
              <div className="flex justify-center -mt-2">
                <DiamondIcon className="w-6 h-6 text-[#a62424]/90" />
              </div>

              {/* Content Box */}
              <div className="flex-1 flex flex-col justify-center my-3 px-1">
                <span className="text-[10px] font-black text-red-400 tracking-[0.25em] text-center block mb-3.5 uppercase">
                  TANGGUNG JAWAB
                </span>
                
                <ul className="space-y-2.5 text-[11px] sm:text-xs font-semibold text-zinc-800">
                  <li className="flex items-start gap-2.5">
                    <DiamondIcon className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[#a62424]" />
                    <span>Pembinaan 81 cabang olahraga</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <DiamondIcon className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[#a62424]" />
                    <span>Insentif atlet dan pelatih</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <DiamondIcon className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[#a62424]" />
                    <span>Perlengkapan olahraga</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <DiamondIcon className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[#a62424]" />
                    <span>Suplemen</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <DiamondIcon className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[#a62424]" />
                    <span>Keberangkatan dan pelatihan cabang</span>
                  </li>
                </ul>

                {/* Catatan Box */}
                <div className="bg-red-50 border border-red-100 rounded-xl p-3 mt-5">
                  <span className="text-[9px] font-black text-red-500 tracking-wider block mb-0.5 uppercase">
                    CATATAN
                  </span>
                  <p className="text-[10.5px] sm:text-[11.5px] leading-snug italic text-red-900 font-medium">
                    Cabor lebih banyak, sistem pembinaan lebih luas
                  </p>
                </div>
              </div>

              {/* Bottom Row (Inverted) */}
              <div className="flex justify-between items-start text-[#a62424] rotate-180">
                <div className="flex flex-col items-center">
                  <span className="font-serif font-black text-xl leading-none">35</span>
                  <DiamondIcon className="w-4 h-4 mt-0.5" />
                </div>
                <span className="font-serif font-black text-sm tracking-widest mt-1">KONI</span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
