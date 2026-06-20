"use client";

import { useEffect, useRef, useState } from "react";

const flowSteps = [
  {
    label: "NPCI",
    title: "Ajukan Proposal",
    description: "Proposal disiapkan satu tahun sebelumnya.",
    note: "Contoh: pengajuan 2026 untuk hibah 2027.",
  },
  {
    label: "Dispora",
    title: "Cek & Verifikasi",
    description: "Usulan diperiksa dari sisi kebutuhan, kelengkapan, dan program.",
  },
  {
    label: "Pemda/APBD",
    title: "Penyesuaian Anggaran",
    description: "Besaran hibah disesuaikan dengan kemampuan keuangan daerah.",
  },
  {
    label: "NPCI",
    title: "Dana Turun",
    description: "Hibah ditetapkan dan masuk ke organisasi penerima.",
  },
  {
    label: "NPCI",
    title: "Penerbitan SK",
    description: "NPCI menyusun SK sebagai dasar distribusi program dan atlet.",
  },
  {
    label: "Atlet",
    title: "Dana Cair",
    description: "Pencairan dilakukan untuk kebutuhan pembinaan, termasuk atlet.",
  },
];

export default function GrantFlowInfographic() {
  const ref = useRef<HTMLElement>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      const frame = requestAnimationFrame(() => setIsActive(true));
      return () => cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setIsActive(true);
        observer.disconnect();
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="overflow-hidden rounded-[1.75rem] bg-[#071126] p-5 shadow-2xl shadow-[#07102d]/20 sm:p-6"
      ref={ref}
    >
      <div className="rounded-[1.5rem] bg-[radial-gradient(circle_at_82%_14%,#1f68ff_0%,#1b4eaa_42%,#102654_100%)] px-5 py-7 sm:px-8 sm:py-8">
        <span className="inline-flex rounded-full border border-sky-200/35 bg-sky-200/10 px-4 py-1.5 font-sans text-[0.68rem] font-extrabold uppercase tracking-[0.2em] text-sky-100">
          Alur Dana Hibah Dispora ke NPCI
        </span>
        <h2 className="mt-5 max-w-4xl font-sans text-4xl font-extrabold leading-tight text-white sm:text-5xl">
          Dari Proposal ke{" "}
          <span className="text-sky-300">Pencairan Atlet</span>
        </h2>
        <p className="mt-4 max-w-4xl font-sans text-sm font-normal leading-7 text-slate-200 sm:text-base">
          Dana hibah bergerak melalui proses administratif bertahap: diajukan
          lebih awal, diverifikasi, disesuaikan dengan kemampuan APBD, lalu
          diturunkan melalui mekanisme organisasi sebelum sampai ke kebutuhan
          pembinaan.
        </p>
      </div>

      <div className="mt-5 rounded-2xl border border-white/10 bg-[#0b1530] p-4 sm:p-5">
        <div
          className={`grid gap-0 transition-opacity duration-500 md:grid-cols-3 ${
            isActive ? "opacity-100" : "opacity-75"
          }`}
        >
          {flowSteps.map((step, index) => (
            <FlowStep
              index={index}
              isActive={isActive}
              isLast={index === flowSteps.length - 1}
              key={step.title}
              {...step}
            />
          ))}
        </div>
      </div>

      <div className="mt-5 rounded-2xl border border-white/8 bg-white/[0.025] px-5 py-4">
        <p className="font-sans text-xs font-normal leading-6 text-slate-400">
          Skema disusun dari keterangan proses hibah Dispora kepada NPCI Kota
          Bandung.
        </p>
      </div>
    </section>
  );
}

function FlowStep({
  description,
  index,
  isActive,
  isLast,
  label,
  note,
  title,
}: {
  description: string;
  index: number;
  isActive: boolean;
  isLast: boolean;
  label: string;
  note?: string;
  title: string;
}) {
  const isTopRow = index < 3;
  const isBottomRow = index >= 3;
  const showRowConnector = index !== 2 && !isLast;
  const showDropConnector = index === 2;
  const direction = isBottomRow ? "left" : "right";

  return (
    <div
      className={`relative pb-10 md:px-2 ${
        isTopRow ? "md:pb-20" : "md:pb-0"
      }`}
    >
      <article
        className={`relative min-h-56 overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.08),rgba(255,255,255,0.025))] p-5 transition duration-500 ${
          isActive ? "translate-y-0 opacity-100" : "translate-y-3 opacity-60"
        }`}
        style={{ transitionDelay: `${index * 110}ms` }}
      >
        {!isLast ? (
          <span className="sr-only">Berlanjut ke tahap berikutnya</span>
        ) : null}
        <div className="flex items-start gap-4">
          <div className="grid size-12 shrink-0 place-items-center rounded-2xl border border-sky-200/30 bg-[#102654] font-sans text-base font-extrabold text-sky-100 shadow-lg shadow-sky-950/40">
            {index + 1}
          </div>
          <div className="min-w-0">
            <p className="font-sans text-[0.63rem] font-extrabold uppercase tracking-[0.18em] text-cyan-300">
              {label}
            </p>
            <h3 className="mt-2 font-sans text-lg font-extrabold leading-6 text-white">
              {title}
            </h3>
          </div>
        </div>
        <p className="mt-5 font-sans text-sm font-normal leading-7 text-slate-300">
          {description}
        </p>
        {note ? (
          <p className="mt-4 rounded-xl border border-sky-300/15 bg-sky-300/10 px-4 py-3 font-sans text-xs font-bold leading-6 text-sky-100">
            {note}
          </p>
        ) : null}
      </article>

      {showRowConnector ? (
        <div
          className={`pointer-events-none absolute hidden h-8 items-center md:flex ${
            isTopRow ? "bottom-8" : "bottom-0"
          } ${
            direction === "right"
              ? "left-[calc(50%+2rem)] right-[-2rem]"
              : "left-[-2rem] right-[calc(50%+2rem)]"
          }`}
        >
          {direction === "left" ? (
            <span className="mr-2 font-sans text-lg font-extrabold leading-none text-sky-300">
              ←
            </span>
          ) : null}
          <span className="h-1 flex-1 rounded-full bg-slate-700/70">
            <span
              className={`block h-full rounded-full bg-gradient-to-r from-sky-300 via-cyan-300 to-emerald-300 transition-[width] duration-700 ease-out ${
                isActive ? "w-full" : "w-0"
              }`}
              style={{ transitionDelay: `${280 + index * 120}ms` }}
            />
          </span>
          {direction === "right" ? (
            <span className="ml-2 font-sans text-lg font-extrabold leading-none text-emerald-300">
              →
            </span>
          ) : null}
        </div>
      ) : null}

      {showDropConnector ? (
        <div className="pointer-events-none absolute bottom-0 right-1/2 hidden h-20 translate-x-1/2 md:block">
          <span className="block h-full w-1 rounded-full bg-slate-700/70">
            <span
              className={`block w-full rounded-full bg-gradient-to-b from-emerald-300 to-sky-300 transition-[height] delay-[720ms] duration-500 ease-out ${
                isActive ? "h-full" : "h-0"
              }`}
            />
          </span>
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 font-sans text-lg font-extrabold leading-none text-sky-300">
            ↓
          </span>
        </div>
      ) : null}
    </div>
  );
}
