"use client";

import React, { useEffect, useRef, useState } from "react";

type ChartItem = {
  category: string;
  disability: number;     // Blue bar (%)
  nonDisability: number;  // Orange bar (%)
};

const chartData: ChartItem[] = [
  {
    category: "Belum/Tidak Pernah Sekolah/Tidak Tamat SD",
    disability: 30.56,
    nonDisability: 7.73,
  },
  {
    category: "Tamat SD",
    disability: 38.88,
    nonDisability: 27.29,
  },
  {
    category: "Tamat SMP",
    disability: 11.12,
    nonDisability: 22.36,
  },
  {
    category: "Tamat SMA",
    disability: 14.42,
    nonDisability: 33.12,
  },
  {
    category: "Tamat Perguruan Tinggi",
    disability: 5.02,
    nonDisability: 9.50,
  },
];

export default function DisabilityEducationChart() {
  const maxVal = 40; // Scale goes up to 40%
  const [animate, setAnimate] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = containerRef.current;
    
    // Set up IntersectionObserver to trigger animation when chart enters view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          if (currentRef) {
            observer.unobserve(currentRef);
          }
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of chart is visible
        rootMargin: "0px 0px -50px 0px" // Trigger slightly before it fully shows
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="w-full max-w-3xl mx-auto overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-lg font-sans my-8"
    >
      {/* Blue Header Section */}
      <div className="bg-gradient-to-r from-[#0d1b3e] via-[#0f2d59] to-[#1d4ed8] p-6 sm:p-8 text-white relative">
        <div className="inline-block rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-[10px] sm:text-xs font-bold tracking-wider uppercase">
          Data Kependudukan Kota Bandung
        </div>
        <h3 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-black leading-tight tracking-tight">
          Pendidikan Penduduk Disabilitas
        </h3>
        <p className="mt-2 text-xs sm:text-sm text-white/80 max-w-2xl leading-relaxed">
          Distribusi penduduk usia <span className="font-bold text-white">15 tahun ke atas</span> menurut <span className="font-bold text-white">tingkat pendidikan</span> yang ditamatkan dan kondisi disabilitas di Indonesia.
        </p>
      </div>

      {/* Main Body Section */}
      <div className="p-6 sm:p-8">
        {/* Title and Legend Row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-zinc-100 pb-6 mb-6">
          <div>
            <h4 className="text-base sm:text-lg font-extrabold text-[#0d1b3e]">
              Distribusi Tingkat Pendidikan
            </h4>
            <p className="text-[10px] sm:text-xs text-zinc-500 font-medium mt-0.5">
              Persentase (%), Penduduk Usia 15 Tahun ke Atas
            </p>
          </div>
          {/* Legend */}
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-6 rounded-full bg-[#2563eb]" />
              <span className="text-xs font-bold text-[#0d1b3e]">Disabilitas Tipe 1</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-6 rounded-full bg-[#f97316]" />
              <span className="text-xs font-bold text-[#0d1b3e]">Non Disabilitas</span>
            </div>
          </div>
        </div>

        {/* Chart Area with Grid Lines */}
        <div className="relative mt-8">
          {/* Vertical Grid Lines */}
          <div className="absolute inset-y-0 left-0 md:left-[196px] right-0 flex justify-between pointer-events-none">
            <div className="border-l border-dashed border-zinc-200 h-[calc(100%-20px)]" />
            <div className="border-l border-dashed border-zinc-200 h-[calc(100%-20px)]" />
            <div className="border-l border-dashed border-zinc-200 h-[calc(100%-20px)]" />
            <div className="border-l border-dashed border-zinc-200 h-[calc(100%-20px)]" />
            <div className="border-l border-dashed border-zinc-200 h-[calc(100%-20px)]" />
          </div>

          {/* Rows */}
          <div className="space-y-6 relative z-10">
            {chartData.map((item) => {
              // Calculate target widths, but set to 0% if animate is false
              const disWidth = animate ? `${(item.disability / maxVal) * 100}%` : "0%";
              const nonDisWidth = animate ? `${(item.nonDisability / maxVal) * 100}%` : "0%";

              // Helper for label positioning and style inside the bar
              const getLabelStyle = (val: number) => {
                if (val <= 12) {
                  return "justify-center";
                }
                return "justify-end pr-3";
              };

              return (
                <div key={item.category} className="grid grid-cols-1 md:grid-cols-[180px_1fr] md:items-center gap-2 md:gap-4">
                  {/* Category Label */}
                  <div className="text-xs font-bold text-[#0d1b3e] leading-tight">
                    {item.category}
                  </div>

                  {/* Bars Container */}
                  <div className="space-y-2">
                    {/* Blue Bar (Disabilitas) */}
                    <div className="w-full bg-[#f1f5f9] h-6 rounded-full overflow-hidden relative">
                      <div
                        className="bg-[#2563eb] h-full rounded-full transition-all duration-[1200ms] ease-out flex items-center text-white font-extrabold text-[10px] sm:text-xs tracking-wide"
                        style={{ width: disWidth }}
                      >
                        <div 
                          className={`w-full flex ${getLabelStyle(item.disability)} transition-opacity duration-500 delay-300 ${
                            animate ? "opacity-100" : "opacity-0"
                          }`}
                        >
                          {item.disability}%
                        </div>
                      </div>
                    </div>

                    {/* Orange Bar (Non Disabilitas) */}
                    <div className="w-full bg-[#fff7ed] h-6 rounded-full overflow-hidden relative">
                      <div
                        className="bg-[#f97316] h-full rounded-full transition-all duration-[1200ms] ease-out flex items-center text-white font-extrabold text-[10px] sm:text-xs tracking-wide"
                        style={{ width: nonDisWidth }}
                      >
                        <div 
                          className={`w-full flex ${getLabelStyle(item.nonDisability)} transition-opacity duration-500 delay-300 ${
                            animate ? "opacity-100" : "opacity-0"
                          }`}
                        >
                          {item.nonDisability}%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* X-Axis Labels */}
          <div className="mt-4 flex justify-between text-[10px] sm:text-xs font-bold text-zinc-400 pl-0 md:pl-[196px]">
            <span>0%</span>
            <span>10%</span>
            <span>20%</span>
            <span>30%</span>
            <span>40%</span>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-[#0b132b] px-6 sm:px-8 py-4 text-left">
        <p className="text-[10px] sm:text-xs font-bold text-zinc-400">
          Sumber: Dinas Kependudukan dan Pencatatan Sipil Kota Bandung
        </p>
      </div>
    </div>
  );
}
