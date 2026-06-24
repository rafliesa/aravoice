"use client";

import { useId, useState, useRef, useEffect } from "react";

const grantData = [
  { year: 2021, value: 2.7, label: "Rp 2.7M", full: "Rp2.700.000.000" },
  { year: 2022, value: 2.7, label: "Rp 2.7M", full: "Rp2.700.000.000" },
  { year: 2023, value: 2.7, label: "Rp 2.7M", full: "Rp2.700.000.000" },
  { year: 2024, value: 5,   label: "Rp 5M",   full: "Rp5.000.000.000" },
  { year: 2025, value: 4.5, label: "Rp 4.5M", full: "Rp4.500.000.000" },
  { year: 2026, value: 5,   label: "Rp 5M",   full: "Rp5.000.000.000" },
] as const;

const chart = {
  width: 760,
  height: 320,
  left: 72,
  right: 32,
  top: 48,
  bottom: 56,
} as const;

const maxValue = 6;
const chartWidth  = chart.width  - chart.left - chart.right;
const chartHeight = chart.height - chart.top  - chart.bottom;

const points = grantData.map((item, index) => ({
  ...item,
  x: chart.left + (index / (grantData.length - 1)) * chartWidth,
  y: chart.top  + chartHeight - (item.value / maxValue) * chartHeight,
}));

const linePath = points
  .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
  .join(" ");

const areaPath =
  `${linePath} L ${points.at(-1)!.x} ${chart.top + chartHeight} L ${points[0].x} ${chart.top + chartHeight} Z`;

export default function GrantTrendChart() {
  const containerRef = useRef<HTMLElement>(null);
  const [isAnimated, setIsAnimated]   = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const gradientId = `gtc-fill-${useId().replaceAll(":", "")}`;
  const lineId     = `gtc-line-${useId().replaceAll(":", "")}`;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsAnimated(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const yTicks = [0, 2, 4, 6];

  return (
    <article
      ref={containerRef}
      className="w-full overflow-hidden rounded-2xl shadow-lg font-sans"
    >
      {/* ── Dark navy header ── */}
      <div
        className="relative px-6 py-7"
        style={{ background: "linear-gradient(135deg, #0f2c5c 0%, #1a3f7a 45%, #1e4d96 100%)" }}
      >
        {/* decorative circles */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/5" />
          <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-white/5" />
        </div>
        <div className="relative">
          <span className="inline-block rounded-full border border-white/20 bg-white/10 px-3 py-0.5 text-[9px] font-bold uppercase tracking-widest text-white/80">
            Laporan Transparansi Anggaran
          </span>
          <h3 className="mt-3 text-lg font-bold text-blue-200 leading-tight">
            Tren Dana Hibah
          </h3>
          <p className="text-3xl font-black text-white leading-tight tracking-tight">
            NPCI Kota Bandung
          </p>
          <p className="mt-1 text-sm font-semibold text-blue-300">
            2021 – 2026
          </p>
        </div>
      </div>

      {/* ── Chart area ── */}
      <div className="bg-white px-5 pt-5 pb-3">
        <p className="font-bold text-sm text-zinc-800">Alokasi Dana Hibah</p>
        <p className="text-xs text-zinc-400 mb-2">Satuan: Miliar Rupiah (Rp M)</p>

        <div className="overflow-x-auto">
          <svg
            viewBox={`0 0 ${chart.width} ${chart.height}`}
            className="min-w-[640px] w-full"
            role="img"
            aria-label="Grafik tren dana hibah NPCI Kota Bandung 2021-2026"
            onPointerLeave={() => setHoveredIndex(null)}
          >
            <defs>
              {/* area gradient – light blue/lavender */}
              <linearGradient id={gradientId} x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%"   stopColor="#3b6bda" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#3b6bda" stopOpacity="0.03" />
              </linearGradient>
              {/* clip for animated line draw */}
              <clipPath id={lineId}>
                <rect
                  x={chart.left}
                  y={0}
                  height={chart.height}
                  style={{
                    width: isAnimated ? chartWidth + chart.right : 0,
                    transition: "width 1200ms ease-in-out",
                  }}
                />
              </clipPath>
            </defs>

            {/* ── Grid lines + Y-axis labels ── */}
            {yTicks.map((tick) => {
              const y = chart.top + chartHeight - (tick / maxValue) * chartHeight;
              return (
                <g key={tick} aria-hidden="true">
                  <line
                    x1={chart.left} x2={chart.width - chart.right}
                    y1={y} y2={y}
                    stroke="#e5e7eb"
                    strokeDasharray={tick === 0 ? undefined : "4 6"}
                    strokeWidth="1"
                  />
                  <text
                    x={chart.left - 10} y={y + 4}
                    textAnchor="end"
                    className="fill-zinc-400 font-sans"
                    fontSize="11"
                  >
                    {tick === 0 ? "Rp 0M" : `Rp ${tick}M`}
                  </text>
                </g>
              );
            })}

            {/* ── Area fill ── */}
            <path
              d={areaPath}
              fill={`url(#${gradientId})`}
              aria-hidden="true"
              style={{
                opacity: isAnimated ? 1 : 0,
                transition: "opacity 800ms ease-out 900ms",
              }}
            />

            {/* ── Line (clipped animated draw) ── */}
            <path
              d={linePath}
              fill="none"
              stroke="#0f2c5c"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              clipPath={`url(#${lineId})`}
              aria-hidden="true"
            />

            {/* ── Data points + labels + x-axis years ── */}
            {points.map((point, index) => {
              const isHovered  = index === hoveredIndex;
              const isActive   = isHovered || index === selectedIndex;

              return (
                <g
                  key={point.year}
                  onPointerEnter={() => setHoveredIndex(index)}
                  onPointerLeave={() => setHoveredIndex(null)}
                  onClick={() => setSelectedIndex(index === selectedIndex ? null : index)}
                  className="cursor-pointer"
                >
                  {/* data label above point — only visible on hover */}
                  <text
                    x={point.x}
                    y={point.y - 16}
                    textAnchor="middle"
                    fontSize="11"
                    fontWeight="700"
                    className="font-sans fill-blue-700"
                    style={{
                      opacity: isActive ? 1 : 0,
                      transition: "opacity 150ms ease",
                    }}
                  >
                    {point.label}
                  </text>

                  {/* outer ring (hover) */}
                  <circle
                    cx={point.x} cy={point.y} r="14"
                    fill="transparent"
                    stroke="#3b6bda"
                    strokeWidth="2"
                    className="transition-opacity duration-200"
                    style={{ opacity: isHovered ? 0.4 : 0 }}
                  />

                  {/* main dot */}
                  <circle
                    cx={point.x} cy={point.y}
                    r={isActive ? 8 : 6}
                    fill={isActive ? "#0f2c5c" : "white"}
                    stroke={isActive ? "#0f2c5c" : "#3b6bda"}
                    strokeWidth="2.5"
                    className="transition-all duration-300"
                    style={{
                      transform: isAnimated ? "scale(1)" : "scale(0)",
                      transformOrigin: `${point.x}px ${point.y}px`,
                      opacity: isAnimated ? 1 : 0,
                      transition: `transform 400ms ease ${200 + index * 150}ms, opacity 400ms ease ${200 + index * 150}ms`,
                    }}
                  />

                  {/* x-axis year label */}
                  <text
                    x={point.x}
                    y={chart.height - 12}
                    textAnchor="middle"
                    fontSize="12"
                    fontWeight={isActive ? "700" : "500"}
                    className={`font-sans transition-colors duration-200 ${
                      isActive ? "fill-zinc-800" : "fill-zinc-500"
                    }`}
                  >
                    {point.year}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      {/* ── Footer ── */}
      <div className="px-5 py-3" style={{ background: "#0f2c5c" }}>
        <p className="text-[11px] text-white/60">
          <span className="font-bold text-white/80">Sumber:</span>{" "}
          Data hibah NPCI Kota Bandung 2021–2026.
        </p>
      </div>
    </article>
  );
}
