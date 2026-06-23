"use client";

import { useEffect, useState } from "react";

const needRows = [
  {
    icon: "bus",
    need: "Transportasi latihan rutin",
    reality: "Biaya Rp700-Rp800 rb per bulan ditanggung sendiri oleh atlet.",
    color: "#2dd4bf", // teal
  },
  {
    icon: "wallet",
    need: "Insentif latihan yang rutin",
    reality: "Insentif Jan-Jun 2026: Rp0. SK baru turun Juni. Enam bulan latihan dari kantong sendiri.",
    color: "#2dd4bf",
  },
  {
    icon: "heart",
    need: "Biaya pengobatan & pemulihan cedera",
    reality: "Fisioterapi, pijat, cedera pergelangan — sebagian besar tidak diklaim karena tidak ada anggaran khusus.",
    color: "#2dd4bf",
  },
  {
    icon: "flask",
    need: "Suplemen latihan",
    reality: "Tergantung pelatih. Tidak semua atlet menerima bantuan suplemen.",
    color: "#2dd4bf",
  },
  {
    icon: "shield",
    need: "Jaminan kesehatan atlet",
    reality: "BPJS masih pribadi, bukan dari NPCI. Fasilitas medis hanya tersedia saat event besar.",
    color: "#2dd4bf",
  },
];

export default function AthleteNeedsInfographic() {
  return (
    <div className="w-full rounded-3xl overflow-hidden shadow-lg border border-zinc-200/50 bg-white">
      {/* Top Header Panel (Vibrant Blue Radial Gradient) */}
      <div className="bg-[radial-gradient(circle_at_85%_15%,#2563eb_0%,#1e3a8a_50%,#0f172a_100%)] p-6 md:p-8 text-white relative overflow-hidden">
        {/* Light Glow elements for premium feel */}
        <div className="absolute -right-6 -top-6 w-32 h-32 rounded-full bg-blue-400/25 blur-2xl pointer-events-none" />
        <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />

        {/* Pill Badge */}
        <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 border border-white/20 px-3 py-1.5 text-[9px] font-bold uppercase tracking-widest text-sky-200">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
          Infografis Kebutuhan Atlet Disabilitas
        </div>

        {/* Title */}
        <h3 className="mt-4 text-2xl md:text-3xl font-extrabold tracking-tight text-white leading-tight">
          Kebutuhan Atlet Disabilitas
        </h3>
        
        {/* Subtitle */}
        <h4 className="mt-1 text-base md:text-lg font-bold text-sky-200/90 leading-snug">
          Kebutuhan vs Realita
        </h4>

        {/* Paragraph description */}
        <p className="mt-3 text-xs md:text-sm text-zinc-300 leading-relaxed font-light">
          Sejumlah kebutuhan dasar latihan masih banyak ditanggung sendiri oleh atlet disabilitas. Visual ini menyoroti <span className="font-semibold text-white">kesenjangan antara kebutuhan latihan dan realita dukungan yang diterima.</span>
        </p>
      </div>

      {/* Middle Grid (Light Background with Navy Rows) */}
      <div className="p-5 md:p-6 bg-[#f8fafc] space-y-4">
        {needRows.map((row) => (
          <NeedRow key={row.need} {...row} />
        ))}
      </div>

      {/* Footer Panel */}
      <div className="bg-[#0b1329] py-3.5 px-5 md:px-6 text-[9px] md:text-[10px] text-zinc-400 font-medium border-t border-zinc-800 text-left">
        Sumber: Wawancara Kono Saipudin, Wiryadharma, NPCI Kota Bandung pada Juni 2026.
      </div>
    </div>
  );
}

function NeedRow({
  icon,
  need,
  reality,
}: {
  icon: string;
  need: string;
  reality: string;
}) {
  return (
    <div className="flex flex-col sm:flex-row items-stretch gap-2.5 sm:gap-3">
      {/* Left Card: KEBUTUHAN */}
      <div className="flex-1 bg-[#173166] rounded-2xl p-4 flex items-center gap-3.5 border border-white/5 shadow-sm hover:scale-[1.01] transition-transform duration-300">
        <div className="h-10 w-10 flex items-center justify-center rounded-full bg-white/10 text-white shrink-0">
          <InfographicIcon name={icon} />
        </div>
        <div className="text-left">
          <span className="block text-[8px] md:text-[9px] font-extrabold uppercase tracking-widest text-[#2dd4bf]">
            Kebutuhan
          </span>
          <span className="block text-[11px] md:text-xs font-bold text-white leading-snug mt-0.5">
            {need}
          </span>
        </div>
      </div>

      {/* Middle VS divider */}
      <div className="flex items-center justify-center text-[10px] font-black uppercase tracking-widest text-zinc-400/80 my-0.5 sm:my-0 sm:px-1 shrink-0">
        vs
      </div>

      {/* Right Card: REALITA */}
      <div className="flex-1 bg-[#173166] rounded-2xl p-4 flex flex-col justify-center border border-white/5 shadow-sm hover:scale-[1.01] transition-transform duration-300 text-left">
        <span className="block text-[8px] md:text-[9px] font-extrabold uppercase tracking-widest text-[#fb923c]">
          Realita
        </span>
        <span className="block text-[11px] md:text-xs font-light text-zinc-200 leading-relaxed mt-0.5">
          {reality}
        </span>
      </div>
    </div>
  );
}

function InfographicIcon({ name }: { name: string }) {
  if (name === "bus") {
    return (
      <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="5" width="16" height="11" rx="2" />
        <path d="M7 16v2M17 16v2M7 9h10M8 13h.01M16 13h.01" />
      </svg>
    );
  }

  if (name === "wallet") {
    return (
      <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 7h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a3 3 0 0 1 3-3h12" />
        <path d="M16 12h4v4h-4a2 2 0 0 1 0-4Z" />
      </svg>
    );
  }

  if (name === "heart") {
    return (
      <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21s-7-4.4-9-8a5 5 0 0 1 8-5 5 5 0 0 1 8 5c-2 3.6-9 8-9 8Z" />
        <path d="M8 13h2l1-3 2 6 1-3h2" />
      </svg>
    );
  }

  if (name === "flask") {
    return (
      <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3h6M10 3v6l-4 8a3 3 0 0 0 2.7 4h6.6A3 3 0 0 0 18 17l-4-8V3" />
        <path d="M8 16h8" />
      </svg>
    );
  }

  return (
    <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3 5 6v5c0 5 3 8 7 10 4-2 7-5 7-10V6l-7-3Z" />
      <path d="m9 12 2 2 4-5" />
    </svg>
  );
}
