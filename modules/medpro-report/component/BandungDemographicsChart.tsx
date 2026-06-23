"use client";

import { useEffect, useId, useRef, useState } from "react";

// ── Data ────────────────────────────────────────────────────────────────────

const disabilityByYear = [
  { year: 2019, value: 1897 },
  { year: 2020, value: 1874 },
  { year: 2021, value: 1982 },
  { year: 2022, value: 9170 },
  { year: 2023, value: 8982 },
  { year: 2024, value: 8763 },
  { year: 2025, value: 9312 },
];

const categoryData = [
  { label: "Cacat Mental",       value: 2831, pct: "31.4%", color: "#3b6bda" },
  { label: "Cacat Fisik",        value: 1917, pct: "21.3%", color: "#0ea5a0" },
  { label: "Lainnya",            value: 1765, pct: "19.6%", color: "#7c3aed" },
  { label: "Tuna Rungu",         value: 1155, pct: "12.8%", color: "#60a5fa" },
  { label: "Tuna Netra",         value: 702,  pct: "7.8%",  color: "#f59e0b" },
  { label: "Cacat Fisik Mental", value: 650,  pct: "7.2%",  color: "#ef4444" },
];

const kecamatanData = [
  { rank: 1,  name: "Batununggal",     value: 612 },
  { rank: 2,  name: "Kiaracondong",    value: 449 },
  { rank: 3,  name: "Bojongloa Kaler", value: 441 },
  { rank: 4,  name: "Babakan Ciparay", value: 436 },
  { rank: 5,  name: "Bandung Kulon",   value: 426 },
  { rank: 6,  name: "Ujung Berung",    value: 425 },
  { rank: 7,  name: "Coblong",         value: 390 },
  { rank: 8,  name: "Andir",           value: 386 },
  { rank: 9,  name: "Bojongloa Kidul", value: 380 },
  { rank: 10, name: "Cibeunying Kidul",value: 373 },
];

// ── SVG Chart helpers ────────────────────────────────────────────────────────

const chart = { width: 760, height: 280, left: 52, right: 28, top: 36, bottom: 44 } as const;
const maxVal = 10000;
const cW = chart.width - chart.left - chart.right;
const cH = chart.height - chart.top - chart.bottom;

const pts = disabilityByYear.map((d, i) => ({
  ...d,
  x: chart.left + (i / (disabilityByYear.length - 1)) * cW,
  y: chart.top + cH - (d.value / maxVal) * cH,
}));

const linePath = pts.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
const areaPath = `${linePath} L ${pts.at(-1)!.x} ${chart.top + cH} L ${pts[0].x} ${chart.top + cH} Z`;
const yTicks = [0, 2000, 4000, 6000, 8000, 10000];

function fmtY(v: number) {
  return v === 0 ? "0" : `${v / 1000}k`;
}

// ── Main Component ───────────────────────────────────────────────────────────

export default function BandungDemographicsChart() {
  const containerRef = useRef<HTMLElement>(null);
  const [animated, setAnimated]     = useState(false);
  const [hovered, setHovered]       = useState<number | null>(null);
  const gradId  = `bdg-fill-${useId().replaceAll(":", "")}`;
  const clipId  = `bdg-clip-${useId().replaceAll(":", "")}`;

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setAnimated(true); obs.disconnect(); } },
      { threshold: 0.2 }
    );
    if (containerRef.current) obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, []);

  const maxKec = kecamatanData[0].value;
  const maxCat = categoryData[0].value;
  const [expanded, setExpanded] = useState(false);

  return (
    <article ref={containerRef} className="w-full overflow-hidden rounded-2xl shadow-lg font-sans">

      {/* ── Dark navy header ── */}
      <div
        className="relative px-6 py-7"
        style={{ background: "linear-gradient(135deg,#0f2c5c 0%,#1a3f7a 45%,#1e4d96 100%)" }}
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-14 -top-14 h-52 w-52 rounded-full bg-white/5" />
          <div className="absolute -bottom-8 -left-8 h-36 w-36 rounded-full bg-white/5" />
        </div>
        <div className="relative">
          <span className="inline-block rounded-full border border-white/20 bg-white/10 px-3 py-0.5 text-[9px] font-bold uppercase tracking-widest text-white/80">
            Data Kependudukan Kota Bandung
          </span>
          <h3 className="mt-3 text-lg font-bold text-blue-200 leading-tight">
            Jumlah Penyandang
          </h3>
          <p className="text-3xl font-black text-white leading-tight tracking-tight">
            Disabilitas Kota Bandung
          </p>
          <p className="mt-1 text-sm font-semibold text-blue-300">2019 – 2025</p>
        </div>
      </div>

      {/* ── Line Chart ── */}
      <div className="bg-white px-5 pt-5 pb-2">
        <p className="font-bold text-sm text-zinc-800 mb-1">
          Jumlah Penyandang Disabilitas Terdaftar (2019–2025)
        </p>
        <div className="overflow-x-auto">
          <svg
            viewBox={`0 0 ${chart.width} ${chart.height}`}
            className="min-w-[580px] w-full"
            role="img"
            aria-label="Grafik penyandang disabilitas Kota Bandung 2019-2025"
            onPointerLeave={() => setHovered(null)}
          >
            <defs>
              <linearGradient id={gradId} x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%"   stopColor="#3b6bda" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#3b6bda" stopOpacity="0.02" />
              </linearGradient>
              <clipPath id={clipId}>
                <rect
                  x={chart.left} y={0} height={chart.height}
                  style={{
                    width: animated ? cW + chart.right : 0,
                    transition: "width 1200ms ease-in-out",
                  }}
                />
              </clipPath>
            </defs>

            {/* grid + y-labels */}
            {yTicks.map(tick => {
              const y = chart.top + cH - (tick / maxVal) * cH;
              return (
                <g key={tick} aria-hidden="true">
                  <line x1={chart.left} x2={chart.width - chart.right} y1={y} y2={y}
                    stroke="#e5e7eb" strokeDasharray={tick === 0 ? undefined : "4 6"} strokeWidth="1" />
                  <text x={chart.left - 8} y={y + 4} textAnchor="end"
                    fontSize="10" className="fill-zinc-400 font-sans">{fmtY(tick)}</text>
                </g>
              );
            })}

            {/* area */}
            <path d={areaPath} fill={`url(#${gradId})`} aria-hidden="true"
              style={{ opacity: animated ? 1 : 0, transition: "opacity 800ms ease 900ms" }} />

            {/* line */}
            <path d={linePath} fill="none" stroke="#0f2c5c" strokeWidth="2.5"
              strokeLinecap="round" strokeLinejoin="round"
              clipPath={`url(#${clipId})`} aria-hidden="true" />

            {/* points */}
            {pts.map((pt, i) => {
              const isHov  = hovered === i;
              const is2022 = pt.year === 2022;
              return (
                <g key={pt.year}
                  onPointerEnter={() => setHovered(i)}
                  onPointerLeave={() => setHovered(null)}
                  className="cursor-pointer"
                >
                  {/* hover label */}
                  <text x={pt.x} y={pt.y - 14} textAnchor="middle"
                    fontSize="10" fontWeight="700" className="fill-zinc-700 font-sans"
                    style={{ opacity: isHov ? 1 : 0, transition: "opacity 150ms" }}>
                    {pt.value.toLocaleString("id")}
                  </text>

                  {/* dot */}
                  <circle cx={pt.x} cy={pt.y}
                    r={is2022 || isHov ? 7 : 5}
                    fill={is2022 ? "#0f2c5c" : "white"}
                    stroke={is2022 ? "#0f2c5c" : "#3b6bda"}
                    strokeWidth="2"
                    className="transition-all duration-300"
                    style={{
                      transform: animated ? "scale(1)" : "scale(0)",
                      transformOrigin: `${pt.x}px ${pt.y}px`,
                      opacity: animated ? 1 : 0,
                      transition: `transform 400ms ease ${200 + i * 120}ms, opacity 400ms ease ${200 + i * 120}ms`,
                    }} />

                  {/* x-label */}
                  <text x={pt.x} y={chart.height - 8} textAnchor="middle"
                    fontSize="11" fontWeight={is2022 ? "700" : "500"}
                    className={is2022 ? "fill-zinc-800 font-sans" : "fill-zinc-400 font-sans"}>
                    {pt.year}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      {/* ── Toggle Button ── */}
      <div className="flex justify-center bg-white pb-5">
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-zinc-200 hover:border-zinc-300 text-xs font-semibold text-zinc-600 hover:text-zinc-800 transition bg-zinc-50/50 hover:bg-zinc-50 active:scale-95"
        >
          {expanded ? (
            <>
              Sembunyikan Detail
              <svg className="w-3.5 h-3.5 text-zinc-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
              </svg>
            </>
          ) : (
            <>
              Lihat Selengkapnya
              <svg className="w-3.5 h-3.5 text-zinc-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </>
          )}
        </button>
      </div>

      {/* ── Two panels ── */}
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-0 bg-white overflow-hidden transition-all duration-500 ease-in-out ${expanded ? "max-h-[1200px] border-t border-zinc-100" : "max-h-0"}`}>

        {/* Panel 1: Kategori */}
        <div className="px-5 py-5 border-b md:border-b-0 md:border-r border-zinc-100">
          <p className="text-xs font-black uppercase tracking-widest text-zinc-500 mb-4">
            Kategori Disabilitas (2022)
          </p>
          <div className="flex flex-col gap-3">
            {categoryData.map((cat) => {
              const pct = (cat.value / maxCat) * 100;
              return (
                <div key={cat.label}>
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="text-xs text-zinc-700 font-medium">{cat.label}</span>
                    <span className="text-xs font-bold ml-2 whitespace-nowrap" style={{ color: cat.color }}>
                      {cat.value.toLocaleString("id")}{" "}
                      <span className="text-zinc-400 font-normal">({cat.pct})</span>
                    </span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-zinc-100 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700 ease-out"
                      style={{
                        width: (animated && expanded) ? `${pct}%` : "0%",
                        backgroundColor: cat.color,
                        transitionDelay: (animated && expanded) ? "400ms" : "0ms",
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Panel 2: Top 10 Kecamatan */}
        <div className="px-5 py-5">
          <p className="text-xs font-black uppercase tracking-widest text-zinc-500 mb-4">
            10 Kecamatan Tertinggi (2022)
          </p>
          <div className="flex flex-col gap-2">
            {kecamatanData.map((kec, i) => {
              const pct = (kec.value / maxKec) * 100;
              return (
                <div key={kec.name} className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-zinc-400 w-4 text-right flex-shrink-0">
                    {kec.rank}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-baseline mb-0.5">
                      <span className="text-xs text-zinc-700 truncate">{kec.name}</span>
                      <span className="text-xs font-bold text-zinc-800 ml-2 flex-shrink-0">
                        {kec.value.toLocaleString("id")}
                      </span>
                    </div>
                    <div className="h-1 w-full rounded-full bg-zinc-100 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-slate-600 transition-all duration-700 ease-out"
                        style={{
                          width: (animated && expanded) ? `${pct}%` : "0%",
                          transitionDelay: (animated && expanded) ? `${300 + i * 60}ms` : "0ms",
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Footer ── */}
      <div className="px-5 py-3" style={{ background: "#0f2c5c" }}>
        <p className="text-[11px] text-white/60">
          <span className="font-bold text-white/80">Sumber:</span>{" "}
          Dinas Kependudukan dan Pencatatan Sipil Kota Bandung
        </p>
      </div>
    </article>
  );
}
