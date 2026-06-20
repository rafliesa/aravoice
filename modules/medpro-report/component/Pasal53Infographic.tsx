"use client";

import { useEffect, useRef, useState } from "react";

export default function Pasal53Infographic() {
  return (
    <section className="overflow-hidden rounded-[1.75rem] bg-[#081336] shadow-2xl shadow-[#07102d]/20">
      <div className="bg-[radial-gradient(circle_at_15%_8%,#284ad8_0%,#173a84_38%,#10345f_100%)] px-5 py-6 sm:px-8 sm:py-8">
        <span className="inline-flex rounded-full border border-sky-300/35 bg-sky-300/10 px-4 py-1.5 font-sans text-[0.65rem] font-bold uppercase tracking-[0.24em] text-sky-100">
          Regulasi Ketenagakerjaan Inklusif
        </span>
        <h2 className="mt-4 font-sans text-3xl font-extrabold leading-tight text-white sm:text-4xl">
          Highlights <span className="text-sky-300">Pasal 53</span>
        </h2>
        <p className="mt-2 font-sans text-sm font-semibold text-sky-100/80 sm:text-base">
          Kewajiban Mempekerjakan Penyandang Disabilitas
        </p>

        <div className="mt-6 rounded-xl border-l-4 border-sky-300 bg-white/8 px-5 py-4">
          <p className="font-sans text-sm font-normal leading-7 text-sky-50/86">
            Pasal 53 menegaskan kewajiban instansi pemerintah, BUMN, BUMD,
            dan perusahaan swasta untuk menyediakan peluang kerja yang
            inklusif bagi Penyandang Disabilitas melalui{" "}
            <strong className="font-extrabold text-white">
              kuota minimal sesuai jenis lembaga.
            </strong>
          </p>
        </div>
      </div>

      <div className="bg-[linear-gradient(180deg,#101b3c_0%,#081321_100%)] px-5 py-6 sm:px-8 sm:py-8">
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-slate-500/35" />
          <p className="font-sans text-[0.65rem] font-extrabold uppercase tracking-[0.24em] text-slate-400">
            Kuota Wajib
          </p>
          <div className="h-px flex-1 bg-slate-500/35" />
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <QuotaCard
            description="Pemerintah, Pemerintah Daerah, BUMN, dan BUMD wajib mempekerjakan paling sedikit 2% Penyandang Disabilitas."
            label="Instansi Pemerintah & Badan Usaha Milik Negara/Daerah"
            tone="blue"
            value={2}
          />
          <QuotaCard
            description="Perusahaan swasta wajib mempekerjakan paling sedikit 1% Penyandang Disabilitas."
            label="Perusahaan Swasta"
            tone="green"
            value={1}
          />
        </div>
      </div>

      <div className="bg-[#050b22] px-5 py-4 sm:px-8">
        <p className="font-sans text-xs font-normal text-slate-500">
          Sumber: Pasal 53 Undang-Undang tentang Penyandang Disabilitas
        </p>
      </div>
    </section>
  );
}

function QuotaCard({
  description,
  label,
  tone,
  value,
}: {
  description: string;
  label: string;
  tone: "blue" | "green";
  value: number;
}) {
  const isBlue = tone === "blue";

  return (
    <article
      className={`rounded-2xl p-5 text-white sm:p-6 ${
        isBlue
          ? "bg-[radial-gradient(circle_at_20%_12%,#3652ef_0%,#214dd2_48%,#1e43b8_100%)]"
          : "bg-[radial-gradient(circle_at_82%_12%,#1ab89c_0%,#168878_48%,#117265_100%)]"
      }`}
    >
      <p className="font-sans text-[0.65rem] font-extrabold uppercase leading-5 tracking-[0.24em] text-sky-100/85">
        {label}
      </p>
      <div className="mt-4 flex items-end gap-1">
        <AnimatedNumber value={value} />
        <span className="pb-3 font-sans text-5xl font-extrabold leading-none sm:text-6xl">
          %
        </span>
      </div>
      <p className="mt-3 font-sans text-xs font-bold text-sky-100/80">
        minimal dari total pegawai atau pekerja
      </p>
      <div className="my-4 h-px bg-white/18" />
      <p className="font-sans text-sm font-normal leading-6 text-white/78">
        {description}
      </p>
    </article>
  );
}

function AnimatedNumber({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      const animationFrame = requestAnimationFrame(() => {
        setDisplayValue(value);
      });
      return () => cancelAnimationFrame(animationFrame);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        observer.disconnect();

        const startedAt = performance.now();
        const duration = 850;

        const tick = (now: number) => {
          const progress = Math.min((now - startedAt) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);

          setDisplayValue(Math.round(value * eased));
          if (progress < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
      },
      { threshold: 0.45 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span
      className="font-sans text-7xl font-extrabold leading-none sm:text-8xl"
      ref={ref}
    >
      {displayValue}
    </span>
  );
}
