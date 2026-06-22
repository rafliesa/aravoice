"use client";

import { useState } from "react";

// Braille mapping for A-Z
// Represented as 6-dot cell indexes:
// 1 4
// 2 5
// 3 6
const brailleAlphabet: Record<string, number[]> = {
  a: [1],
  b: [1, 2],
  c: [1, 4],
  d: [1, 4, 5],
  e: [1, 5],
  f: [1, 2, 4],
  g: [1, 2, 4, 5],
  h: [1, 2, 5],
  i: [2, 4],
  j: [2, 4, 5],
  k: [1, 3],
  l: [1, 2, 3],
  m: [1, 3, 4],
  n: [1, 3, 4, 5],
  o: [1, 3, 5],
  p: [1, 2, 3, 4],
  q: [1, 2, 3, 4, 5],
  r: [1, 2, 3, 5],
  s: [2, 3, 4],
  t: [2, 3, 4, 5],
  u: [1, 3, 6],
  v: [1, 2, 3, 6],
  w: [2, 4, 5, 6],
  x: [1, 3, 4, 6],
  y: [1, 3, 4, 5, 6],
  z: [1, 3, 5, 6],
  " ": [],
};

export default function InteractiveBrailleSimulator() {
  const [inputText, setInputText] = useState("aravoice");
  const [customDots, setCustomDots] = useState<number[]>([]);

  const handleDotToggle = (dotNum: number) => {
    setCustomDots((prev) =>
      prev.includes(dotNum) ? prev.filter((d) => d !== dotNum) : [...prev, dotNum].sort()
    );
  };

  // Find letter corresponding to custom dots configuration
  const getCustomLetter = () => {
    const sortedCustom = [...customDots].sort().join(",");
    for (const [letter, dots] of Object.entries(brailleAlphabet)) {
      if (dots.join(",") === sortedCustom) {
        return letter.toUpperCase();
      }
    }
    return "?";
  };

  const getBrailleCells = (text: string) => {
    return text
      .toLowerCase()
      .split("")
      .map((char) => {
        return {
          char,
          dots: brailleAlphabet[char] || [],
        };
      });
  };

  const cells = getBrailleCells(inputText);

  return (
    <section className="w-full bg-[#fbf8f2] rounded-3xl p-6 sm:p-8 text-[#0a3358] border border-[#d9d2c7] shadow-xl my-8 font-sans">
      <div className="text-center mb-8 border-b border-[#e5ded3] pb-6">
        <span className="inline-flex rounded-full bg-[#0a3358] px-3.5 py-1 text-xs font-black uppercase tracking-wider text-white">
          Interactive Simulator
        </span>
        <h3 className="mt-3 text-2xl font-black text-[#0a3358] tracking-tight">
          Simulator Huruf Braille Interaktif
        </h3>
        <p className="text-xs text-zinc-600 mt-2 max-w-lg mx-auto">
          Mantan atlet tunanetra bergantung pada verbal dan braille. Coba tulis kata atau rakit huruf braille Anda sendiri!
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left Side: Type and Translate */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#e5ded3] flex flex-col justify-between">
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#a94f00] mb-3">
              Tulis &amp; Terjemahkan
            </h4>
            <div className="mb-4">
              <label htmlFor="braille-input" className="sr-only">Input kata untuk braille</label>
              <input
                id="braille-input"
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value.slice(0, 15).replace(/[^a-zA-Z ]/g, ""))}
                placeholder="Ketik kata (maks 15 huruf)..."
                className="w-full px-4 py-3 rounded-xl border border-zinc-300 focus:outline-none focus:border-[#0a3358] text-sm"
              />
              <p className="text-[10px] text-zinc-400 mt-1">Hanya mendukung huruf A-Z dan Spasi.</p>
            </div>

            {/* Translation Output */}
            <div className="flex flex-wrap gap-4 items-center justify-center py-6 min-h-[140px] bg-[#fbfbf9] rounded-xl border border-dashed border-zinc-200 px-4">
              {cells.length === 0 ? (
                <span className="text-xs text-zinc-400">Belum ada teks diketik</span>
              ) : (
                cells.map((cell, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-1.5">
                    {/* Braille Cell Graphic */}
                    <div className="grid grid-cols-2 gap-x-2 gap-y-1.5 p-2 bg-white border border-zinc-200 rounded-lg shadow-sm w-12 h-16">
                      {[1, 4, 2, 5, 3, 6].map((dot) => {
                        const isRaised = cell.dots.includes(dot);
                        return (
                          <div
                            key={dot}
                            className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
                              isRaised ? "bg-[#0a3358] scale-110 shadow-sm" : "bg-zinc-200"
                            }`}
                          />
                        );
                      })}
                    </div>
                    {/* Text Label */}
                    <span className="text-xs font-extrabold uppercase text-[#0a3358]">
                      {cell.char === " " ? "Spasi" : cell.char}
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Right Side: Learn & Build a Cell */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#e5ded3] flex flex-col justify-between">
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#a94f00] mb-3">
              Rakit Huruf Anda Sendiri
            </h4>
            <p className="text-xs text-zinc-500 mb-5">
              Klik pada lingkaran abu-abu untuk menaikkan titik (raised dots) braille dan lihat huruf apa yang terbentuk!
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-around gap-6 py-4">
              {/* Interactive Large Cell */}
              <div className="relative p-6 bg-[#fbf8f2] border-2 border-[#0a3358] rounded-2xl shadow-inner grid grid-cols-2 gap-x-6 gap-y-4 w-32 h-44 items-center justify-center">
                {[1, 4, 2, 5, 3, 6].map((dot) => {
                  const isRaised = customDots.includes(dot);
                  return (
                    <button
                      key={dot}
                      type="button"
                      onClick={() => handleDotToggle(dot)}
                      className="relative group focus:outline-none flex items-center justify-center"
                      aria-label={`Toggle titik ${dot}`}
                    >
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center font-sans text-[10px] font-bold transition-all duration-200 shadow-sm ${
                          isRaised
                            ? "bg-[#0a3358] text-white scale-110"
                            : "bg-zinc-200 text-zinc-500 hover:bg-zinc-300"
                        }`}
                      >
                        {dot}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Translation Display */}
              <div className="text-center sm:text-left">
                <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest block">
                  TERJEMAHAN
                </span>
                <div className="text-5xl font-black text-[#0a3358] mt-1 min-h-[50px] flex items-center">
                  {getCustomLetter()}
                </div>
                <button
                  type="button"
                  onClick={() => setCustomDots([])}
                  className="mt-3 text-xs font-bold text-red-600 hover:text-red-700 uppercase tracking-wider"
                >
                  Reset Papan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
