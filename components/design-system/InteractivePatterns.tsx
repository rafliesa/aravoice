"use client";

import Image from "next/image";
import {
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";
import { CloseIcon, DocumentIcon } from "./Primitives";

const TREND_DATA = [
  { year: 2019, value: 18 },
  { year: 2020, value: 27 },
  { year: 2021, value: 35 },
  { year: 2022, value: 54 },
  { year: 2023, value: 72 },
  { year: 2024, value: 91 },
] as const;

const CHART = {
  width: 760,
  height: 340,
  left: 64,
  right: 28,
  top: 28,
  bottom: 58,
} as const;

const chartWidth = CHART.width - CHART.left - CHART.right;
const chartHeight = CHART.height - CHART.top - CHART.bottom;

const points = TREND_DATA.map((item, index) => ({
  ...item,
  x: CHART.left + (index / (TREND_DATA.length - 1)) * chartWidth,
  y: CHART.top + chartHeight - (item.value / 100) * chartHeight,
}));

const linePath = points
  .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`)
  .join(" ");

const areaPath = `${linePath} L ${points.at(-1)?.x} ${
  CHART.top + chartHeight
} L ${points[0].x} ${CHART.top + chartHeight} Z`;

export function InteractiveTrendChart() {
  const [selectedYear, setSelectedYear] = useState(2021);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const gradientId = `trend-fill-${useId().replaceAll(":", "")}`;
  const selectedIndex = TREND_DATA.findIndex(
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
      setSelectedYear(TREND_DATA[index].year);
      return;
    }

    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      const direction = event.key === "ArrowRight" ? 1 : -1;
      const nextIndex = Math.min(
        TREND_DATA.length - 1,
        Math.max(0, index + direction),
      );
      setHoveredIndex(nextIndex);
      setSelectedYear(TREND_DATA[nextIndex].year);
    }
  }

  return (
    <article className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
      <div className="flex flex-col gap-4 border-b border-zinc-200 p-6 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-secondary-700 text-xs font-extrabold uppercase tracking-[0.14em]">
            Demo interaktif
          </p>
          <h3 id="trend-chart-title" className="mt-2 text-xl font-bold">
            Pertumbuhan liputan berbasis data
          </h3>
          <p id="trend-chart-description" className="mt-2 text-sm text-zinc-600">
            Arahkan kursor, fokuskan titik, atau klik tahun untuk memilih data.
          </p>
        </div>
        <div
          aria-live="polite"
          className="bg-secondary-50 text-secondary-900 min-w-40 rounded-xl px-4 py-3"
        >
          <span className="block text-xs font-bold uppercase tracking-wide">
            Tahun terpilih
          </span>
          <strong className="mt-1 block text-2xl">
            {selectedPoint.year} · {selectedPoint.value} liputan
          </strong>
        </div>
      </div>

      <div className="overflow-x-auto px-2 py-5 sm:px-5">
        <svg
          viewBox={`0 0 ${CHART.width} ${CHART.height}`}
          className="min-w-[680px]"
          role="group"
          aria-labelledby="trend-chart-title trend-chart-description"
          onPointerLeave={() => setHoveredIndex(null)}
        >
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FF8C00" stopOpacity="0.24" />
              <stop offset="100%" stopColor="#FF8C00" stopOpacity="0.02" />
            </linearGradient>
          </defs>

          {[0, 25, 50, 75, 100].map((tick) => {
            const y = CHART.top + chartHeight - (tick / 100) * chartHeight;
            return (
              <g key={tick} aria-hidden="true">
                <line
                  x1={CHART.left}
                  x2={CHART.width - CHART.right}
                  y1={y}
                  y2={y}
                  stroke="#E4E4E7"
                  strokeDasharray={tick === 0 ? undefined : "5 6"}
                />
                <text
                  x={CHART.left - 14}
                  y={y + 4}
                  textAnchor="end"
                  className="fill-zinc-400 text-[11px]"
                >
                  {tick}
                </text>
              </g>
            );
          })}

          <rect
            x={Math.max(CHART.left, selectedPoint.x - 44)}
            y={CHART.top}
            width={Math.min(
              88,
              CHART.width -
                CHART.right -
                Math.max(CHART.left, selectedPoint.x - 44),
            )}
            height={chartHeight}
            rx="12"
            fill="#FFF4E5"
            aria-hidden="true"
          />

          <path d={areaPath} fill={`url(#${gradientId})`} aria-hidden="true" />
          <path
            d={linePath}
            fill="none"
            stroke="#001F3F"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          />

          {points.map((point, index) => {
            const isSelected = point.year === selectedYear;
            const isHovered = index === hoveredIndex;
            return (
              <g
                key={point.year}
                role="button"
                tabIndex={0}
                aria-label={`${point.year}, ${point.value} liputan${
                  isSelected ? ", dipilih" : ""
                }`}
                aria-pressed={isSelected}
                className="cursor-pointer outline-none"
                onPointerEnter={() => setHoveredIndex(index)}
                onFocus={() => setHoveredIndex(index)}
                onBlur={() => setHoveredIndex(null)}
                onClick={() => setSelectedYear(point.year)}
                onKeyDown={(event) => selectWithKeyboard(event, index)}
              >
                <circle
                  cx={point.x}
                  cy={point.y}
                  r="16"
                  fill="transparent"
                  stroke={
                    isSelected
                      ? "#FF8C00"
                      : isHovered
                        ? "#2563EB"
                        : "transparent"
                  }
                  strokeWidth="4"
                />
                <circle
                  cx={point.x}
                  cy={point.y}
                  r={isSelected || isHovered ? 8 : 6}
                  fill={
                    isSelected
                      ? "#FF8C00"
                      : isHovered
                        ? "#2563EB"
                        : "#001F3F"
                  }
                  stroke="white"
                  strokeWidth="3"
                />
                <text
                  x={point.x}
                  y={CHART.height - 24}
                  textAnchor="middle"
                  className={`text-[12px] font-bold ${
                    isSelected ? "fill-secondary-700" : "fill-zinc-500"
                  }`}
                  aria-hidden="true"
                >
                  {point.year}
                </text>
              </g>
            );
          })}

          <g
            transform={`translate(${Math.min(
              CHART.width - 132,
              Math.max(CHART.left, activePoint.x - 54),
            )} ${Math.max(6, activePoint.y - 58)})`}
            pointerEvents="none"
            aria-hidden="true"
          >
            <rect width="108" height="42" rx="8" fill="#001F3F" />
            <text
              x="54"
              y="18"
              textAnchor="middle"
              className="fill-white text-[10px] font-bold"
            >
              {activePoint.year}
            </text>
            <text
              x="54"
              y="33"
              textAnchor="middle"
              className="fill-white text-[12px] font-bold"
            >
              {activePoint.value} liputan
            </text>
          </g>
        </svg>
      </div>

      <div className="border-t border-zinc-100 px-6 py-5">
        <div
          className="flex flex-wrap gap-2"
          role="group"
          aria-label="Pilih tahun data"
        >
          {TREND_DATA.map((item) => {
            const selected = item.year === selectedYear;
            return (
              <button
                key={item.year}
                type="button"
                aria-pressed={selected}
                onClick={() => setSelectedYear(item.year)}
                className={`min-h-10 rounded-full border px-4 py-2 text-sm font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary ${
                  selected
                    ? "border-secondary bg-secondary text-white"
                    : "hover:border-primary hover:text-primary border-zinc-300 bg-white text-zinc-600"
                }`}
              >
                {item.year}
              </button>
            );
          })}
        </div>
        <p className="mt-4 text-xs leading-5 text-zinc-500">
          Data demonstrasi untuk spesifikasi komponen, bukan data publikasi.
        </p>
      </div>
    </article>
  );
}

const OFFICIAL_LAW_URL =
  "https://peraturan.bpk.go.id/Details/37251/uu-no-8-tahun-2016";

export function LegalReferenceDemo() {
  const [isOpen, setIsOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    const focusTimer = window.setTimeout(
      () => closeButtonRef.current?.focus(),
      0,
    );

    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        return;
      }

      if (event.key !== "Tab") return;

      const dialog = closeButtonRef.current?.closest('[role="dialog"]');
      const focusable = dialog?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, [isOpen]);

  return (
    <>
      <article className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-3">
          <span className="bg-primary flex h-11 w-11 items-center justify-center rounded-xl text-white">
            <DocumentIcon />
          </span>
          <div>
            <p className="text-secondary-700 text-xs font-extrabold uppercase tracking-[0.14em]">
              Referensi hukum
            </p>
            <h3 className="mt-1 text-xl font-bold">Tautan dengan detail cepat</h3>
          </div>
        </div>

        <p className="mt-6 text-base leading-8 text-zinc-700">
          Penyediaan informasi yang aksesibel merupakan bagian dari pemenuhan
          hak penyandang disabilitas. Baca ringkasan{" "}
          <a
            href="#legal-reference-dialog"
            onClick={(event) => {
              event.preventDefault();
              setIsOpen(true);
            }}
            className="text-secondary-800 rounded-sm font-bold underline decoration-2 underline-offset-4 transition-colors hover:text-secondary-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary"
          >
            UU Nomor 8 Tahun 2016
          </a>{" "}
          tanpa meninggalkan konteks artikel.
        </p>

        <div className="mt-6 flex flex-wrap gap-2 text-xs font-bold">
          <span className="rounded-full bg-emerald-100 px-3 py-1.5 text-emerald-800">
            Sumber resmi
          </span>
          <span className="rounded-full bg-blue-100 px-3 py-1.5 text-blue-800">
            Fokus keyboard
          </span>
          <span className="rounded-full bg-zinc-100 px-3 py-1.5 text-zinc-700">
            Tanpa HTML mentah
          </span>
        </div>
      </article>

      {isOpen && (
        <div
          className="fixed inset-0 z-[80] flex items-end justify-center bg-black/60 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsOpen(false);
          }}
        >
          <section
            id="legal-reference-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="legal-dialog-title"
            aria-describedby="legal-dialog-description"
            className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-t-2xl bg-white shadow-2xl sm:rounded-2xl"
          >
            <div className="bg-primary flex items-start justify-between gap-6 px-6 py-5 text-white sm:px-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-200">
                  Detail peraturan
                </p>
                <h2 id="legal-dialog-title" className="mt-2 text-xl font-bold">
                  UU Nomor 8 Tahun 2016
                </h2>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setIsOpen(false)}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/30 transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                aria-label="Tutup informasi undang-undang"
              >
                <CloseIcon />
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <p className="text-secondary-700 text-xs font-extrabold uppercase tracking-[0.14em]">
                Tentang Penyandang Disabilitas
              </p>
              <p
                id="legal-dialog-description"
                className="mt-4 text-base leading-8 text-zinc-700"
              >
                Peraturan ini mengatur kesamaan kesempatan, penghormatan,
                pelindungan, dan pemenuhan hak penyandang disabilitas, termasuk
                penyediaan aksesibilitas serta akomodasi yang layak.
              </p>

              <dl className="mt-6 grid gap-4 rounded-xl bg-zinc-50 p-5 sm:grid-cols-3">
                <div>
                  <dt className="text-xs font-bold uppercase text-zinc-500">
                    Ditetapkan
                  </dt>
                  <dd className="mt-1 font-bold">15 April 2016</dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase text-zinc-500">
                    Status
                  </dt>
                  <dd className="mt-1 font-bold text-emerald-700">Berlaku</dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase text-zinc-500">
                    Sumber
                  </dt>
                  <dd className="mt-1 font-bold">JDIH BPK RI</dd>
                </div>
              </dl>

              <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="min-h-11 rounded-lg border border-zinc-300 px-5 py-2.5 text-sm font-bold transition-colors hover:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Kembali ke artikel
                </button>
                <a
                  href={OFFICIAL_LAW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary hover:bg-secondary-600 min-h-11 rounded-lg px-5 py-2.5 text-center text-sm font-bold text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
                >
                  Buka sumber resmi <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}

export function ContextualAudioCard() {
  return (
    <article className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
      <div className="grid md:grid-cols-[220px_minmax(0,1fr)]">
        <div className="relative min-h-64 bg-zinc-900">
          <Image
            src="/dukung-kami-hero.png"
            alt="Potret narasumber demonstrasi di lintasan atletik"
            fill
            sizes="(min-width: 768px) 220px, 100vw"
            className="object-cover object-[51%_28%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
          <p className="absolute inset-x-5 bottom-5 text-xs font-bold uppercase tracking-[0.12em] text-white">
            Profil narasumber
          </p>
        </div>

        <div className="p-6 sm:p-8">
          <p className="text-secondary-700 text-xs font-extrabold uppercase tracking-[0.14em]">
            Audio story
          </p>
          <h3 className="mt-2 text-xl font-bold">
            Suara dari lintasan: cuplikan narasumber
          </h3>
          <p className="mt-3 text-sm leading-7 text-zinc-600">
            Pemutar ditempatkan bersama profil agar sumber suara dan konteks
            editorial tetap jelas bagi pembaca.
          </p>

          <audio
            controls
            preload="metadata"
            className="mt-6 w-full"
            aria-label="Putar cuplikan audio demonstrasi"
          >
            <source src="/design-system/sample-audio" type="audio/wav" />
            Browser Anda belum mendukung pemutar audio HTML.
          </audio>

          <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
            Audio ini berupa nada uji singkat. Pada konten produksi, URL
            same-origin ini diganti dengan rekaman wawancara yang telah
            diverifikasi dan diberi transkrip.
          </div>

          <div className="mt-5 flex flex-wrap gap-2 text-xs font-bold">
            <span className="rounded-full bg-zinc-100 px-3 py-1.5 text-zinc-700">
              Tanpa autoplay
            </span>
            <span className="rounded-full bg-blue-100 px-3 py-1.5 text-blue-800">
              Media same-origin
            </span>
            <span className="rounded-full bg-emerald-100 px-3 py-1.5 text-emerald-800">
              Kontrol native
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
