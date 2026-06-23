"use client";

import { useEffect, useId, useRef, useState } from "react";

// Data untuk Jumlah Penduduk (dalam juta)
const populationData = [
  { year: 2017, value: 2402000, display: "2,40jt" },
  { year: 2018, value: 2441700, display: "2,44jt" },
  { year: 2019, value: 2470000, display: "2,47jt" },
  { year: 2020, value: 2490500, display: "2,49jt" },
  { year: 2021, value: 2516000, display: "2,52jt" },
  { year: 2022, value: 2534500, display: "2,53jt" },
  { year: 2023, value: 2558600, display: "2,56jt" },
  { year: 2024, value: 2581300, display: "2,58jt" },
  { year: 2025, value: 2595500, display: "2,60jt" },
];

// Data pertumbuhan tahunan
const growthData = [
  { year: 2018, value: 39700, display: "+39.7k", heightPct: 100 },
  { year: 2019, value: 28300, display: "+28.3k", heightPct: 71 },
  { year: 2020, value: 20500, display: "+20.5k", heightPct: 52 },
  { year: 2021, value: 25500, display: "+25.5k", heightPct: 64 },
  { year: 2022, value: 18500, display: "+18.5k", heightPct: 47 },
  { year: 2023, value: 24100, display: "+24.1k", heightPct: 61 },
  { year: 2024, value: 22700, display: "+22.7k", heightPct: 57 },
  { year: 2025, value: 14200, display: "+14.2k", heightPct: 36 },
];

// SVG Dimensions
const chart = { width: 760, height: 280, left: 52, right: 28, top: 36, bottom: 44 } as const;
const minVal = 2380000;
const maxVal = 2620000;
const cW = chart.width - chart.left - chart.right;
const cH = chart.height - chart.top - chart.bottom;

const pts = populationData.map((d, i) => ({
  ...d,
  x: chart.left + (i / (populationData.length - 1)) * cW,
  y: chart.top + cH - ((d.value - minVal) / (maxVal - minVal)) * cH,
}));

const linePath = pts.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
const areaPath = `${linePath} L ${pts.at(-1)!.x} ${chart.top + cH} L ${pts[0].x} ${chart.top + cH} Z`;
const yTicks = [2400000, 2500000, 2600000];

function fmtY(v: number) {
  if (v === 2400000) return "2,4jt";
  if (v === 2500000) return "2,5jt";
  if (v === 2600000) return "2,6jt";
  return "";
}

export default function BandungPopulationChart() {
  const containerRef = useRef<HTMLElement>(null);
  const [animated, setAnimated] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  const gradId = `pop-fill-${useId().replaceAll(":", "")}`;
  const clipId = `pop-clip-${useId().replaceAll(":", "")}`;

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setAnimated(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (containerRef.current) obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <article ref={containerRef} className="w-full overflow-hidden rounded-3xl border border-zinc-200/80 bg-white shadow-xl font-sans my-8">
      {/* Dark Navy/Blue Gradient Header */}
      <div
        className="relative px-6 py-8 sm:px-8"
        style={{ background: "linear-gradient(135deg, #091a3c 0%, #17387e 50%, #1e4ca2 100%)" }}
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-14 -top-14 h-52 w-52 rounded-full bg-white/5" />
          <div className="absolute -bottom-8 -left-8 h-36 w-36 rounded-full bg-white/5" />
        </div>
        <div className="relative">
          <span className="inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
            DATA KEPENDUDUKAN KOTA BANDUNG
          </span>
          <h3 className="mt-4 text-3xl sm:text-4xl font-extrabold text-white leading-tight tracking-tight">
            Jumlah Penduduk<br />Kota Bandung
          </h3>
          <p className="mt-2 text-lg font-medium text-blue-200">2017 – 2025</p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="bg-white p-6 sm:p-8">
        {/* Line Chart Section */}
        <div className="mb-8">
          <h4 className="font-bold text-base text-zinc-800 mb-4">
            Perkembangan Jumlah Penduduk (2017–2025)
          </h4>
          <div className="overflow-x-auto -mx-6 px-6 sm:mx-0 sm:px-0">
            <svg
              viewBox={`0 0 ${chart.width} ${chart.height}`}
              className="min-w-[580px] w-full h-auto"
              role="img"
              aria-label="Grafik perkembangan jumlah penduduk Kota Bandung 2017-2025"
              onPointerLeave={() => setHovered(null)}
            >
              <defs>
                <linearGradient id={gradId} x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#2563eb" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#2563eb" stopOpacity="0.01" />
                </linearGradient>
                <clipPath id={clipId}>
                  <rect
                    x={chart.left}
                    y={0}
                    height={chart.height}
                    style={{
                      width: animated ? cW + chart.right : 0,
                      transition: "width 1400ms cubic-bezier(0.2, 0.8, 0.2, 1)",
                    }}
                  />
                </clipPath>
              </defs>

              {/* Grid Lines + Y Labels */}
              {yTicks.map((tick) => {
                const y = chart.top + cH - ((tick - minVal) / (maxVal - minVal)) * cH;
                return (
                  <g key={tick} aria-hidden="true">
                    <line
                      x1={chart.left}
                      x2={chart.width - chart.right}
                      y1={y}
                      y2={y}
                      stroke="#e4e4e7"
                      strokeDasharray="4 6"
                      strokeWidth="1"
                    />
                    <text
                      x={chart.left - 12}
                      y={y + 4}
                      textAnchor="end"
                      fontSize="10"
                      className="fill-zinc-400 font-sans"
                    >
                      {fmtY(tick)}
                    </text>
                  </g>
                );
              })}

              {/* Shaded Area under the curve */}
              <path
                d={areaPath}
                fill={`url(#${gradId})`}
                aria-hidden="true"
                style={{
                  opacity: animated ? 1 : 0,
                  transition: "opacity 800ms ease 800ms",
                }}
              />

              {/* Line */}
              <path
                d={linePath}
                fill="none"
                stroke="#2563eb"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                clipPath={`url(#${clipId})`}
                aria-hidden="true"
              />

              {/* Interactive Dots & Data Points */}
              {pts.map((pt, i) => {
                const isHov = hovered === i;
                return (
                  <g
                    key={pt.year}
                    onPointerEnter={() => setHovered(i)}
                    onPointerLeave={() => setHovered(null)}
                    className="cursor-pointer"
                  >
                    {/* Hover text label */}
                    <g
                      style={{
                        opacity: isHov ? 1 : 0,
                        transform: isHov ? "translateY(0)" : "translateY(4px)",
                        transition: "opacity 150ms ease, transform 150ms ease",
                      }}
                    >
                      <rect
                        x={pt.x - 35}
                        y={pt.y - 32}
                        width="70"
                        height="20"
                        rx="4"
                        fill="#0f172a"
                      />
                      <text
                        x={pt.x}
                        y={pt.y - 18}
                        textAnchor="middle"
                        fontSize="9.5"
                        fontWeight="700"
                        fill="white"
                        className="font-sans"
                      >
                        {pt.value.toLocaleString("id-ID")}
                      </text>
                    </g>

                    {/* Dot Outline */}
                    <circle
                      cx={pt.x}
                      cy={pt.y}
                      r={isHov ? 8 : 6}
                      fill="white"
                      stroke="#2563eb"
                      strokeWidth="3"
                      className="transition-all duration-200"
                      style={{
                        transform: animated ? "scale(1)" : "scale(0)",
                        transformOrigin: `${pt.x}px ${pt.y}px`,
                        opacity: animated ? 1 : 0,
                        transition: `transform 400ms cubic-bezier(0.34, 1.56, 0.64, 1) ${100 + i * 80}ms, opacity 400ms ease ${100 + i * 80}ms`,
                      }}
                    />

                    {/* X-axis year labels */}
                    <text
                      x={pt.x}
                      y={chart.height - 12}
                      textAnchor="middle"
                      fontSize="11"
                      fontWeight={isHov ? "700" : "500"}
                      className={isHov ? "fill-zinc-800 font-sans" : "fill-zinc-400 font-sans"}
                    >
                      {pt.year}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>

        {/* Bar Chart Section */}
        <div className="border-t border-zinc-100 pt-6">
          <h4 className="font-bold text-xs uppercase tracking-wider text-zinc-400 mb-6">
            PERTUMBUHAN TAHUNAN (JIWA)
          </h4>

          <div className="grid grid-cols-8 gap-2 sm:gap-4 items-end h-32 pt-2">
            {growthData.map((d, i) => {
              return (
                <div key={d.year} className="flex flex-col items-center group h-full justify-end">
                  {/* Hover tooltip for absolute growth number */}
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-150 absolute -translate-y-14 bg-zinc-800 text-white text-[9px] font-bold py-1 px-2 rounded pointer-events-none whitespace-nowrap shadow-md">
                    +{d.value.toLocaleString("id-ID")} jiwa
                  </span>

                  {/* Growth Bar */}
                  <div className="w-full bg-zinc-100 rounded-t-md overflow-hidden flex-grow flex items-end">
                    <div
                      className="w-full bg-blue-600 rounded-t-md hover:bg-blue-700 transition-all duration-500 origin-bottom"
                      style={{
                        height: animated ? `${d.heightPct}%` : "0%",
                        transitionDelay: `${200 + i * 50}ms`,
                      }}
                    />
                  </div>

                  {/* Year Label */}
                  <span className="text-[10px] sm:text-xs font-semibold text-zinc-500 mt-2 block">
                    {d.year}
                  </span>
                  
                  {/* Growth Rate Label */}
                  <span className="text-[9px] font-bold text-blue-600 mt-0.5 whitespace-nowrap">
                    {d.display}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Dark Navy Footer */}
      <div className="px-6 py-4 sm:px-8" style={{ background: "#091a3c" }}>
        <p className="text-[10px] sm:text-xs text-zinc-400 leading-relaxed">
          <span className="font-bold text-zinc-300">Sumber:</span> Dinas Kependudukan dan Pencatatan Sipil Kota Bandung — Data Konsolidasi Bersih Kementerian Dalam Negeri
        </p>
      </div>
    </article>
  );
}
