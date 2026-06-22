"use client";

import {
  useId,
  useState,
  useRef,
  useEffect,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";

const grantData = [
  { year: 2021, value: 2.7, label: "2,7M", full: "Rp2.700.000.000" },
  { year: 2022, value: 2.7, label: "2,7M", full: "Rp2.700.000.000" },
  { year: 2023, value: 2.7, label: "2,7M", full: "Rp2.700.000.000" },
  { year: 2024, value: 5, label: "5M", full: "Rp5.000.000.000" },
  { year: 2025, value: 4.5, label: "4,5M", full: "Rp4.500.000.000" },
  { year: 2026, value: 5, label: "5M", full: "Rp5.000.000.000" },
] as const;

const chart = {
  width: 760,
  height: 340,
  left: 64,
  right: 28,
  top: 32,
  bottom: 62,
} as const;

const maxValue = 6;
const chartWidth = chart.width - chart.left - chart.right;
const chartHeight = chart.height - chart.top - chart.bottom;

const points = grantData.map((item, index) => ({
  ...item,
  x: chart.left + (index / (grantData.length - 1)) * chartWidth,
  y: chart.top + chartHeight - (item.value / maxValue) * chartHeight,
}));

const linePath = points
  .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`)
  .join(" ");

const areaPath = `${linePath} L ${points.at(-1)?.x} ${
  chart.top + chartHeight
} L ${points[0].x} ${chart.top + chartHeight} Z`;

export default function GrantTrendChart() {
  const containerRef = useRef<HTMLElement>(null);
  const [isAnimated, setIsAnimated] = useState(false);
  const [selectedYear, setSelectedYear] = useState(2026);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const gradientId = `grant-trend-fill-${useId().replaceAll(":", "")}`;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);
  const selectedIndex = grantData.findIndex(
    (item) => item.year === selectedYear,
  );
  const selectedPoint = points[selectedIndex];
  const activePoint = points[hoveredIndex ?? selectedIndex];

  function selectWithKeyboard(
    event: ReactKeyboardEvent<SVGGElement>,
    index: number,
  ) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setSelectedYear(grantData[index].year);
      return;
    }

    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      const direction = event.key === "ArrowRight" ? 1 : -1;
      const nextIndex = Math.min(
        grantData.length - 1,
        Math.max(0, index + direction),
      );
      setHoveredIndex(nextIndex);
      setSelectedYear(grantData[nextIndex].year);
    }
  }

  return (
    <article 
      ref={containerRef}
      className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm"
    >
      <div className="flex flex-col gap-4 border-b border-zinc-200 p-6 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-secondary-700 font-sans text-xs font-extrabold uppercase tracking-[0.14em]">
            Grafik Tren Hibah 2021-2026
          </p>
          <h3 id="grant-trend-title" className="mt-2 font-sans text-xl font-bold">
            Dana hibah NPCI Kota Bandung
          </h3>
          <p
            id="grant-trend-description"
            className="mt-2 max-w-xl font-sans text-sm leading-6 text-zinc-600"
          >
            Arahkan kursor, fokuskan titik, atau klik tahun untuk melihat nilai
            hibah per tahun.
          </p>
        </div>
        <div
          aria-live="polite"
          className="bg-secondary-50 text-secondary-900 min-w-48 rounded-xl px-4 py-3"
        >
          <span className="block font-sans text-xs font-bold uppercase tracking-wide">
            Tahun terpilih
          </span>
          <strong className="mt-1 block font-sans text-lg text-secondary-900 font-black">
            {selectedPoint.year} · {selectedPoint.full}
          </strong>
        </div>
      </div>

      <div className="overflow-x-auto px-2 py-5 sm:px-5">
        <svg
          aria-labelledby="grant-trend-title grant-trend-description"
          className="min-w-[680px]"
          onPointerLeave={() => setHoveredIndex(null)}
          role="group"
          viewBox={`0 0 ${chart.width} ${chart.height}`}
        >
          <defs>
            <linearGradient id={gradientId} x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#FF8C00" stopOpacity="0.24" />
              <stop offset="100%" stopColor="#FF8C00" stopOpacity="0.02" />
            </linearGradient>
          </defs>

          {[0, 1.5, 3, 4.5, 6].map((tick) => {
            const y = chart.top + chartHeight - (tick / maxValue) * chartHeight;
            return (
              <g aria-hidden="true" key={tick}>
                <line
                  stroke="#E4E4E7"
                  strokeDasharray={tick === 0 ? undefined : "5 6"}
                  x1={chart.left}
                  x2={chart.width - chart.right}
                  y1={y}
                  y2={y}
                />
                <text
                  className="fill-zinc-400 font-sans text-[11px]"
                  textAnchor="end"
                  x={chart.left - 14}
                  y={y + 4}
                >
                  {formatAxisLabel(tick)}
                </text>
              </g>
            );
          })}

          <rect
            aria-hidden="true"
            fill="#FFF4E5"
            height={chartHeight}
            rx="12"
            width={Math.min(
              88,
              chart.width -
                chart.right -
                Math.max(chart.left, selectedPoint.x - 44),
            )}
            x={Math.max(chart.left, selectedPoint.x - 44)}
            y={chart.top}
          />

          <path 
            aria-hidden="true" 
            d={areaPath} 
            fill={`url(#${gradientId})`} 
            className="transition-opacity duration-1000 ease-out"
            style={{
              opacity: isAnimated ? 1 : 0,
              transitionDelay: "800ms",
            }}
          />
          <path
            aria-hidden="true"
            d={linePath}
            fill="none"
            stroke="#001F3F"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
            className="transition-all duration-[1200ms] ease-in-out"
            style={{
              strokeDasharray: 1000,
              strokeDashoffset: isAnimated ? 0 : 1000,
            }}
          />

          {points.map((point, index) => {
            const isSelected = point.year === selectedYear;
            const isHovered = index === hoveredIndex;
            return (
              <g
                aria-label={`${point.year}, ${point.full} hibah${
                  isSelected ? ", dipilih" : ""
                }`}
                aria-pressed={isSelected}
                className="cursor-pointer outline-none"
                key={point.year}
                onBlur={() => setHoveredIndex(null)}
                onClick={() => setSelectedYear(point.year)}
                onFocus={() => setHoveredIndex(index)}
                onKeyDown={(event) => selectWithKeyboard(event, index)}
                onPointerEnter={() => setHoveredIndex(index)}
                role="button"
                tabIndex={0}
              >
                <circle
                  cx={point.x}
                  cy={point.y}
                  fill="transparent"
                  r="16"
                  stroke={
                    isSelected
                      ? "#FF8C00"
                      : isHovered
                        ? "#2563EB"
                        : "transparent"
                  }
                  strokeWidth="4"
                  className="transition-all duration-300"
                />
                <circle
                  cx={point.x}
                  cy={point.y}
                  fill={
                    isSelected
                      ? "#FF8C00"
                      : isHovered
                        ? "#2563EB"
                        : "#001F3F"
                  }
                  r={isSelected || isHovered ? 8 : 6}
                  stroke="white"
                  strokeWidth="3"
                  className="transition-all duration-300"
                  style={{
                    transform: isAnimated ? "scale(1)" : "scale(0)",
                    transformOrigin: `${point.x}px ${point.y}px`,
                    opacity: isAnimated ? 1 : 0,
                    transitionDelay: `${200 + index * 150}ms`,
                    transitionProperty: "transform, opacity",
                  }}
                />
                <text
                  aria-hidden="true"
                  className={`font-sans text-[12px] font-bold ${
                    isSelected ? "fill-secondary-700" : "fill-zinc-500"
                  }`}
                  textAnchor="middle"
                  x={point.x}
                  y={chart.height - 24}
                >
                  {point.year}
                </text>
              </g>
            );
          })}

          <g
            aria-hidden="true"
            pointerEvents="none"
            transform={`translate(${Math.min(
              chart.width - 150,
              Math.max(chart.left, activePoint.x - 70),
            )} ${Math.max(6, activePoint.y - 58)})`}
          >
            <rect fill="#001F3F" height="42" rx="8" width="140" />
            <text
              className="fill-white font-sans text-[10px] font-bold"
              textAnchor="middle"
              x="70"
              y="18"
            >
              {activePoint.year}
            </text>
            <text
              className="fill-white font-sans text-[11px] font-bold"
              textAnchor="middle"
              x="70"
              y="33"
            >
              {activePoint.full}
            </text>
          </g>
        </svg>
      </div>

      <div className="border-t border-zinc-200 bg-zinc-50 px-6 py-4">
        <p className="font-sans text-xs font-normal leading-6 text-zinc-500">
          Sumber: Data hibah NPCI Kota Bandung 2021-2026.
        </p>
      </div>
    </article>
  );
}

function formatAxisLabel(value: number) {
  if (value === 0) return "0";
  return `${String(value).replace(".", ",")}M`;
}
