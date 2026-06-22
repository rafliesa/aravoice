"use client";

const principles = [
  {
    number: "01",
    title: "Kegunaan",
    description:
      "Fasilitas bisa benar-benar digunakan oleh penyandang disabilitas, bukan sekadar ada secara fisik.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Keselamatan",
    description: "Fasilitas tidak menimbulkan risiko atau bahaya bagi pengguna penyandang disabilitas.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Kenyamanan",
    description:
      "Fasilitas membuat atlet tidak harus berjuang keras hanya untuk masuk ke gedung atau area latihan.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Kemandirian",
    description:
      "Penyandang disabilitas dapat mengakses tanpa harus selalu dibantu atau \"digotong\" orang lain.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
];

export default function AccessibilityPrinciplesInfographic() {
  return (
    <div className="my-8 overflow-hidden rounded-2xl shadow-xl border border-zinc-200/60 font-sans">

      {/* ── Header: dark navy → blue gradient ── */}
      <div
        className="relative px-7 py-8 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0a1628 0%, #0d2d6b 55%, #1e4db7 100%)",
        }}
      >
        {/* Subtle radial glow */}
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #60a5fa 0%, transparent 70%)" }}
        />

        {/* Badge */}
        <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white/80 mb-5">
          Aksesibilitas Fasilitas Olahraga
        </span>

        {/* Title */}
        <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
          Prinsip Fasilitas Aksesibel
        </h3>
        <p className="text-lg sm:text-xl font-semibold text-blue-200 mt-0.5">
          bagi Penyandang Disabilitas
        </p>

        {/* Description */}
        <p className="mt-4 text-sm text-blue-100/80 leading-relaxed max-w-lg">
          Empat prinsip utama untuk memastikan fasilitas olahraga dapat{" "}
          <strong className="text-white font-bold">digunakan secara optimal</strong>{" "}
          oleh penyandang disabilitas.
        </p>
      </div>

      {/* ── Cards grid ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-zinc-100">
        {principles.map((p) => (
          <div key={p.number} className="bg-white px-6 py-6 flex gap-4 items-start">
            {/* Number + icon column */}
            <div className="shrink-0 flex flex-col items-center gap-1.5">
              <span className="text-[11px] font-black tabular-nums text-blue-800/40 tracking-wider">
                {p.number}
              </span>
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-blue-50 text-blue-700">
                {p.icon}
              </div>
            </div>

            {/* Text */}
            <div className="pt-0.5">
              <p className="text-sm font-extrabold uppercase tracking-wide text-[#0a1f4e] mb-1">
                {p.title}
              </p>
              <p className="text-sm text-zinc-500 leading-relaxed">
                {p.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ── Footer ── */}
      <div
        className="px-7 py-3 flex items-center"
        style={{ background: "#0a1628" }}
      >
        <span className="text-[10px] text-white/40 font-medium">
          Sumber: UU No. 8 Tahun 2016 tentang Penyandang Disabilitas
        </span>
      </div>

    </div>
  );
}
