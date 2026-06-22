"use client";

import { useEffect, useRef, useState } from "react";

export default function Pasal53Infographic() {
  return (
    <div className="mx-auto my-6 max-w-lg rounded-3xl overflow-hidden shadow-lg border border-zinc-200/50 bg-white">
      <InfographicBody animate={true} />
    </div>
  );
}

function InfographicBody({ animate = true }: { animate?: boolean }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full bg-white rounded-3xl overflow-hidden flex flex-col font-sans text-left">
      {/* Top Header Panel (Vibrant Blue Radial Gradient) */}
      <div className="bg-[radial-gradient(circle_at_85%_15%,#2563eb_0%,#1e3a8a_50%,#0f172a_100%)] p-6 md:p-8 text-white relative overflow-hidden">
        {/* Light Glow elements for premium feel */}
        <div className="absolute -right-6 -top-6 w-32 h-32 rounded-full bg-blue-400/25 blur-2xl pointer-events-none" />
        <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />

        {/* Pill Badge */}
        <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 border border-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-sky-200">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
          Regulasi Ketenagakerjaan Inklusif
        </div>

        {/* Title */}
        <h3 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-white">
          Pasal 53
        </h3>
        
        {/* Subtitle */}
        <h4 className="mt-1 text-base md:text-lg font-bold text-sky-200/90 leading-snug">
          Kewajiban Mempekerjakan Penyandang Disabilitas
        </h4>

        {/* Paragraph description */}
        <p className="mt-4 text-xs md:text-sm text-zinc-300 leading-relaxed font-light">
          Pasal 53 menegaskan kewajiban instansi pemerintah, BUMN, BUMD, dan perusahaan swasta untuk menyediakan peluang kerja yang inklusif bagi Penyandang Disabilitas melalui <span className="font-semibold text-white">kuota minimal sesuai jenis lembaga.</span>
        </p>
      </div>

      {/* Middle Cards Panel (White Background) */}
      <div className="p-5 md:p-6 bg-[#f8fafc] grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
        {/* Card 1: Instansi Pemerintah, BUMN, BUMD */}
        <div className="bg-[#173166] rounded-2xl p-5 text-white shadow-md border border-white/5 flex flex-col justify-between hover:scale-[1.01] transition-transform duration-300">
          <div>
            <span className="block text-[8px] md:text-[9px] font-extrabold uppercase tracking-widest text-sky-300/80 leading-relaxed">
              Instansi Pemerintah, BUMN, dan BUMD
            </span>
            <div className="mt-4 flex items-baseline gap-0.5">
              <span className="text-5xl md:text-6xl font-black text-white tracking-tight leading-none">
                {animate ? <AnimatedNumber value={2} /> : "2"}
              </span>
              <span className="text-2xl md:text-3xl font-extrabold text-sky-300">%</span>
            </div>
            <span className="block text-[9px] md:text-[10px] text-sky-200/60 font-medium mt-1.5 leading-tight">
              minimal dari total pegawai atau pekerja
            </span>
          </div>

          <div>
            {/* Animated Divider */}
            <div className="my-4 flex justify-center">
              <div className={`h-[1px] bg-white/15 transition-all duration-1000 ease-out ${isMounted ? "w-full" : "w-0"}`} />
            </div>
            
            <p className="text-[10px] md:text-xs text-zinc-300 leading-relaxed font-light">
              Pemerintah, Pemerintah Daerah, BUMN, dan BUMD wajib mempekerjakan paling sedikit <span className="font-bold text-white">2%</span> Penyandang Disabilitas.
            </p>
          </div>
        </div>

        {/* Card 2: Perusahaan Swasta */}
        <div className="bg-[#173166] rounded-2xl p-5 text-white shadow-md border border-white/5 flex flex-col justify-between hover:scale-[1.01] transition-transform duration-300">
          <div>
            <span className="block text-[8px] md:text-[9px] font-extrabold uppercase tracking-widest text-sky-300/80 leading-relaxed">
              Perusahaan Swasta
            </span>
            <div className="mt-4 flex items-baseline gap-0.5">
              <span className="text-5xl md:text-6xl font-black text-white tracking-tight leading-none">
                {animate ? <AnimatedNumber value={1} /> : "1"}
              </span>
              <span className="text-2xl md:text-3xl font-extrabold text-sky-300">%</span>
            </div>
            <span className="block text-[9px] md:text-[10px] text-sky-200/60 font-medium mt-1.5 leading-tight">
              minimal dari total pegawai atau pekerja
            </span>
          </div>

          <div>
            {/* Animated Divider */}
            <div className="my-4 flex justify-center">
              <div className={`h-[1px] bg-white/15 transition-all duration-1000 ease-out ${isMounted ? "w-full" : "w-0"}`} />
            </div>
            
            <p className="text-[10px] md:text-xs text-zinc-300 leading-relaxed font-light">
              Perusahaan swasta wajib mempekerjakan paling sedikit <span className="font-bold text-white">1%</span> Penyandang Disabilitas.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Panel */}
      <div className="bg-[#0b1329] py-3 px-5 md:px-6 flex items-center justify-between text-[9px] md:text-[10px] text-zinc-400 font-medium border-t border-zinc-800">
        <a 
          href="https://peraturan.bpk.go.id/Details/37251/uu-no-8-tahun-2016" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-white underline transition-colors cursor-pointer"
        >
          Sumber: Pasal 53 Undang-Undang tentang Penyandang Disabilitas
        </a>
        <span className="hidden sm:inline text-sky-400/70">
          AraVoice • UU No. 8/2016
        </span>
      </div>
    </div>
  );
}

function AnimatedNumber({ value, duration = 1500 }: { value: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        observer.disconnect();

        const startedAt = performance.now();

        const tick = (now: number) => {
          const progress = Math.min((now - startedAt) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3); // cubic ease-out

          const currentVal = value * eased;
          
          if (progress < 1) {
            setDisplayValue(currentVal.toFixed(1));
          } else {
            setDisplayValue(value.toString());
          }

          if (progress < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
      },
      { threshold: 0.1 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value, duration]);

  return <span ref={ref}>{displayValue}</span>;
}
