"use client";

import { useState } from "react";

export default function KoniNpciCardComparison() {
  const [hoveredCard, setHoveredCard] = useState<"koni" | "npci" | null>(null);

  return (
    <section className="my-10 w-full font-sans">
      <div className="text-center mb-6">
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#a94f00]">
          Analisis Kesenjangan Kebutuhan
        </span>
        <h4 className="text-xl font-black text-[#0a3358] mt-1">
          KONI vs NPCI: Anggaran &amp; Beban Pembinaan
        </h4>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Card 1: KONI */}
        <div
          onMouseEnter={() => setHoveredCard("koni")}
          onMouseLeave={() => setHoveredCard(null)}
          className={`relative rounded-3xl border p-6 transition-all duration-300 bg-white ${
            hoveredCard === "koni"
              ? "border-emerald-500 shadow-xl -translate-y-1"
              : "border-zinc-200 shadow-md"
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
            <div>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-[10px] font-bold text-emerald-800 uppercase tracking-wide">
                Umum
              </span>
              <h5 className="mt-2 text-2xl font-black text-zinc-800">KONI</h5>
            </div>
            <div className="text-right">
              <span className="text-[10px] font-bold text-zinc-400 block uppercase">
                HIBAH 2026
              </span>
              <span className="text-2xl font-black text-emerald-600 block">
                Rp35 Miliar
              </span>
            </div>
          </div>

          {/* Stats List */}
          <ul className="mt-6 space-y-4 text-sm text-zinc-600">
            <li className="flex items-start gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 font-bold text-xs">
                ✓
              </span>
              <span>
                Menaungi <strong>80 Cabang Olahraga</strong> secara terstruktur.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 font-bold text-xs">
                ✓
              </span>
              <span>
                Fasilitas latihan sudah relatif mapan dan bertahan bertahun-tahun.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 font-bold text-xs">
                ✓
              </span>
              <span>
                Alokasi dana untuk Pelatcab, BPJS Atlet, beasiswa, dan tunjangan prestasi.
              </span>
            </li>
          </ul>

          <div className="mt-6 pt-4 border-t border-zinc-100 text-xs text-zinc-400 italic">
            *Pemotongan anggaran dari usulan awal memberi tekanan, tetapi struktur operasional umum tetap terlindung.
          </div>
        </div>

        {/* Card 2: NPCI */}
        <div
          onMouseEnter={() => setHoveredCard("npci")}
          onMouseLeave={() => setHoveredCard(null)}
          className={`relative rounded-3xl border p-6 transition-all duration-300 bg-white ${
            hoveredCard === "npci"
              ? "border-blue-500 shadow-xl -translate-y-1"
              : "border-zinc-200 shadow-md"
          }`}
        >
          {/* Accent glow on hover */}
          {hoveredCard === "npci" && (
            <div className="absolute -inset-px rounded-3xl bg-gradient-to-tr from-blue-500 to-amber-500 opacity-10 blur-sm -z-10" />
          )}

          {/* Header */}
          <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
            <div>
              <span className="rounded-full bg-blue-100 px-3 py-1 text-[10px] font-bold text-blue-800 uppercase tracking-wide">
                Disabilitas
              </span>
              <h5 className="mt-2 text-2xl font-black text-zinc-800">NPCI</h5>
            </div>
            <div className="text-right">
              <span className="text-[10px] font-bold text-zinc-400 block uppercase">
                HIBAH 2026
              </span>
              <span className="text-2xl font-black text-blue-600 block">
                Rp5 Miliar
              </span>
            </div>
          </div>

          {/* Stats List */}
          <ul className="mt-6 space-y-4 text-sm text-zinc-600">
            <li className="flex items-start gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 font-bold text-xs">
                ✓
              </span>
              <span>
                Menaungi <strong>17 Cabang Olahraga</strong> dengan 516 atlet (diseleksi jadi 250 kontingen).
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 font-bold text-xs">
                ✓
              </span>
              <span>
                <strong>Beban Ganda Pendamping:</strong> Setiap atlet disabilitas membutuhkan honor pelatih sekaligus honor pendamping khusus.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 font-bold text-xs">
                ✓
              </span>
              <span>
                Peralatan modifikasi khusus (kursi roda balap, jam taktil) berbiaya 2-3x lipat dibanding olahraga umum.
              </span>
            </li>
          </ul>

          <div className="mt-6 pt-4 border-t border-zinc-100 text-xs text-amber-600 font-bold flex items-center gap-1">
            <span className="text-sm">⚠️</span>
            Kebutuhan pendampingan dan peralatan mahal membuat dana Rp5 miliar sangat minim dalam operasional harian.
          </div>
        </div>
      </div>
    </section>
  );
}
