"use client";

import { useState } from "react";

type EducationData = {
  level: string;
  disability: number;
  nonDisability: number;
  description: string;
};

const educationData: EducationData[] = [
  {
    level: "Tamat SMP / Sederajat",
    disability: 11.12,
    nonDisability: 22.36,
    description: "Tingkat kelulusan SMP kelompok disabilitas tipe 1 hanya setengah dari kelompok non-disabilitas, menunjukkan hambatan besar sejak pendidikan dasar.",
  },
  {
    level: "Tamat SMA / Sederajat",
    disability: 14.42,
    nonDisability: 9.50,
    description: "Meskipun tercatat 14,42% untuk disabilitas tipe 1 di SMA, proporsi penyandang disabilitas yang melanjutkan ke perguruan tinggi menurun drastis karena keterbatasan sarana penunjang kemandirian.",
  },
];

export default function DisabilityEducationChart() {
  const [activeLevel, setActiveLevel] = useState<string>("Tamat SMP / Sederajat");

  const activeData = educationData.find((d) => d.level === activeLevel) || educationData[0];

  return (
    <article className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm font-sans mx-auto my-8 max-w-2xl">
      {/* Header */}
      <div className="flex flex-col gap-4 border-b border-zinc-200 p-6 sm:flex-row sm:items-start sm:justify-between bg-zinc-50/30">
        <div>
          <p className="text-secondary-700 text-xs font-extrabold uppercase tracking-[0.14em]">
            Grafik Kesenjangan Pendidikan
          </p>
          <h3 id="edu-chart-title" className="mt-2 text-xl font-bold text-[#082b4d]">
            Proporsi Kelulusan SMP & SMA
          </h3>
          <p id="edu-chart-description" className="mt-1 text-xs text-zinc-500">
            Berdasarkan data Long Form SP2020 (Potret Penyandang Disabilitas di Indonesia).
          </p>
        </div>
        <div className="bg-secondary-50 text-secondary-900 rounded-xl px-4 py-2 text-xs font-bold self-start sm:self-auto">
          Klik diagram batang untuk info detail
        </div>
      </div>

      {/* Main Chart Body */}
      <div className="p-6">
        {/* Legends */}
        <div className="flex justify-center gap-6 mb-8 text-xs font-bold">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-secondary-500" />
            <span className="text-zinc-700">Disabilitas Tipe 1</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#082b4d]" />
            <span className="text-[#082b4d]">Non-Disabilitas</span>
          </div>
        </div>

        {/* Visual Bars Container */}
        <div className="space-y-6">
          {educationData.map((item) => {
            const isSelected = activeLevel === item.level;
            
            // Scaled widths for horizontal bars (max percentage is around 25%)
            const maxVal = 25;
            const disabilityWidth = `${(item.disability / maxVal) * 100}%`;
            const nonDisabilityWidth = `${(item.nonDisability / maxVal) * 100}%`;

            return (
              <div
                key={item.level}
                onClick={() => setActiveLevel(item.level)}
                className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? "border-secondary-300 bg-secondary-50/30 shadow-sm"
                    : "border-transparent hover:bg-zinc-50"
                }`}
              >
                {/* Level title */}
                <h4 className="text-sm font-bold text-zinc-800 mb-3">{item.level}</h4>

                {/* Horizontal Bars */}
                <div className="space-y-3">
                  {/* Disabilitas Tipe 1 Bar */}
                  <div>
                    <div className="flex justify-between text-xs font-medium text-zinc-500 mb-1">
                      <span>Disabilitas Tipe 1</span>
                      <span className="font-bold text-secondary-700">{item.disability}%</span>
                    </div>
                    <div className="w-full bg-zinc-100 h-3 rounded-full overflow-hidden">
                      <div
                        className="bg-secondary-500 h-full rounded-full transition-all duration-500"
                        style={{ width: disabilityWidth }}
                      />
                    </div>
                  </div>

                  {/* Non-Disabilitas Bar */}
                  <div>
                    <div className="flex justify-between text-xs font-medium text-[#082b4d] mb-1">
                      <span>Non-Disabilitas</span>
                      <span className="font-bold">{item.nonDisability}%</span>
                    </div>
                    <div className="w-full bg-zinc-100 h-3 rounded-full overflow-hidden">
                      <div
                        className="bg-[#082b4d] h-full rounded-full transition-all duration-500"
                        style={{ width: nonDisabilityWidth }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Data Card Summary */}
        <div className="mt-6 p-4 rounded-xl bg-secondary-50/50 border border-secondary-100 transition-all duration-300">
          <h4 className="text-xs font-extrabold uppercase text-secondary-700 tracking-wider">
            Analisis Data: {activeData.level}
          </h4>
          <p className="mt-2 text-xs leading-relaxed text-zinc-700">
            {activeData.description}
          </p>
          <div className="mt-3 flex gap-4 text-xs font-bold border-t border-secondary-100 pt-3">
            <div>
              <span className="text-zinc-500 block font-normal">Disabilitas Tipe 1</span>
              <span className="text-secondary-700 text-sm font-extrabold">{activeData.disability}%</span>
            </div>
            <div className="border-l border-secondary-100 pl-4">
              <span className="text-[#082b4d] block font-normal">Non-Disabilitas</span>
              <span className="text-[#082b4d] text-sm font-extrabold">{activeData.nonDisability}%</span>
            </div>
            <div className="border-l border-secondary-100 pl-4">
              <span className="text-zinc-500 block font-normal">Selisih Kesenjangan</span>
              <span className="text-red-600 text-sm font-extrabold">
                {Math.abs(activeData.nonDisability - activeData.disability).toFixed(2)}%
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-zinc-200 bg-zinc-50 px-6 py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
        <p className="text-[10px] text-zinc-500">
          Sumber: Potret Penyandang Disabilitas di Indonesia 2020 (SP2020 Long Form)
        </p>
        <a
          href="https://www.bps.go.id/id/publication/2022/12/12/f2a4773c52a3be6ec8d3d9cb/potret-penyandang-disabilitas-di-indonesia-2022.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10px] font-bold text-secondary-700 hover:underline"
        >
          Lihat Publikasi Resmi BPS ↗
        </a>
      </div>
    </article>
  );
}
