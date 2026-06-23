"use client";

import { useState, useEffect } from "react";

type YearData = {
  year: number;
  value: number;
  label: string;
  notes: string;
};

const populationData: YearData[] = [
  { year: 2017, value: 2490300, label: "2.490.300", notes: "Pertumbuhan penduduk yang konstan dengan urbanisasi tinggi ke arah Bandung Raya." },
  { year: 2019, value: 2507880, label: "2.507.880", notes: "Pertumbuhan stabil, Kota Bandung menjadi pusat ekonomi regional Jawa Barat." },
  { year: 2021, value: 2452900, label: "2.452.900", notes: "Penurunan pencatatan statistik berdasarkan hasil Sensus Penduduk 2020 (SP2020)." },
  { year: 2023, value: 2470120, label: "2.470.120", notes: "Pemulihan aktivitas sosial pasca-pandemi mendorong mobilitas penduduk kembali meningkat." },
  { year: 2025, value: 2527850, label: "2.527.850", notes: "Estimasi terbaru memperlihatkan Kota Bandung menembus angka 2,52 juta jiwa." },
];

const disabilityData: YearData[] = [
  { year: 2017, value: 6420, label: "6.420 jiwa", notes: "Pendataan awal disabilitas terfokus pada penerima jaminan bantuan sosial." },
  { year: 2019, value: 7150, label: "7.150 jiwa", notes: "Peningkatan pendataan seiring disahkannya Perda Pemenuhan Hak Disabilitas Kota Bandung." },
  { year: 2021, value: 7920, label: "7.920 jiwa", notes: "Integrasi sistem pendataan dinas sosial (Dinsos) dengan tingkat kelurahan." },
  { year: 2023, value: 8450, label: "8.450 jiwa", notes: "Peningkatan jangkauan pencatatan kelompok disabilitas usia produktif." },
  { year: 2025, value: 9120, label: "9.120 jiwa", notes: "Pencatatan terbaru menunjukkan potensi difabel yang berhak mendapatkan jaminan perlindungan sosial." },
];

export default function BandungDemographicsChart() {
  const [activeTab, setActiveTab] = useState<"population" | "disability">("population");
  const [selectedYear, setSelectedYear] = useState<number>(2025);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 750);
    return () => clearTimeout(timer);
  }, [activeTab]);

  const currentDataset = activeTab === "population" ? populationData : disabilityData;
  const selectedPoint = currentDataset.find((d) => d.year === selectedYear) || currentDataset[currentDataset.length - 1];

  // Visual layout helpers
  const maxValue = activeTab === "population" ? 2600000 : 10000;
  const minValue = activeTab === "population" ? 2300000 : 5000;

  return (
    <article className="mx-auto my-8 max-w-2xl overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm font-sans">
      {/* Header */}
      <div className="flex flex-col gap-4 border-b border-zinc-200 p-6 sm:flex-row sm:items-start sm:justify-between bg-zinc-50/30">
        <div>
          <p className="text-secondary-700 text-xs font-extrabold uppercase tracking-[0.14em]">
            Demografi & Potensi Disabilitas
          </p>
          <h3 className="mt-2 text-lg font-bold text-[#082b4d]">
            Statistik Perkembangan Kota Bandung (2017-2025)
          </h3>
          <p className="mt-1 text-xs text-zinc-500">
            Pencatatan statistik kependudukan Kota Bandung dari tahun ke tahun.
          </p>
        </div>
      </div>

      {/* Dataset Tabs Switcher */}
      <div className="flex border-b border-zinc-200">
        <button
          onClick={() => {
            setActiveTab("population");
            setSelectedYear(2025);
          }}
          className={`flex-1 py-3 text-center text-xs font-bold transition-all border-b-2 cursor-pointer ${
            activeTab === "population"
              ? "border-secondary-500 text-secondary-800 bg-secondary-50/10"
              : "border-transparent text-zinc-400 hover:text-zinc-600 hover:bg-zinc-50"
          }`}
          type="button"
        >
          Jumlah Penduduk
        </button>
        <button
          onClick={() => {
            setActiveTab("disability");
            setSelectedYear(2025);
          }}
          className={`flex-1 py-3 text-center text-xs font-bold transition-all border-b-2 cursor-pointer ${
            activeTab === "disability"
              ? "border-secondary-500 text-secondary-800 bg-secondary-50/10"
              : "border-transparent text-zinc-400 hover:text-zinc-600 hover:bg-zinc-50"
          }`}
          type="button"
        >
          Jumlah Penyandang Disabilitas
        </button>
      </div>

      {/* Main Interactive chart */}
      <div className="p-6">
        <div className="flex justify-between items-center text-xs font-bold mb-4">
          <span className="text-zinc-500">Pilih Tahun untuk Info Detail:</span>
          <span className="text-[#082b4d] bg-zinc-100 px-2 py-0.5 rounded">
            Dataset: {activeTab === "population" ? "Penduduk Umum" : "Difabel Terdaftar"}
          </span>
        </div>

        {/* Bar Matrix */}
        <div className="relative h-48 border-b border-zinc-200 pb-3">
          {isLoading && (
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-white/70 backdrop-blur-[1px] z-10 rounded-xl transition-all duration-300">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full border-2 border-secondary-500 border-t-transparent animate-spin" />
                <span className="text-xs font-bold text-zinc-500 tracking-wide animate-pulse">
                  Memuat data...
                </span>
              </div>
            </div>
          )}

          <div className="grid grid-cols-5 gap-3 h-full items-end">
            {currentDataset.map((d) => {
              const isSelected = d.year === selectedYear;
              
              // Calculate height percentage relative to min/max scale
              const percentHeight = ((d.value - minValue) / (maxValue - minValue)) * 80 + 20;

              return (
                <div
                  key={d.year}
                  onClick={() => !isLoading && setSelectedYear(d.year)}
                  className="group flex flex-col items-center cursor-pointer h-full justify-end"
                >
                  {/* Visual Bar */}
                  <div
                    className={`w-full rounded-t-lg transition-all duration-500 ease-out ${
                      isSelected
                        ? "bg-secondary-500 shadow-md scale-x-105"
                        : "bg-[#082b4d] hover:bg-opacity-80"
                    }`}
                    style={{ height: isLoading ? "0%" : `${percentHeight}%` }}
                  />
                  
                  {/* Year Label */}
                  <span className={`text-[10px] font-bold mt-2 transition-colors ${
                    isSelected ? "text-secondary-700" : "text-zinc-400"
                  }`}>
                    {d.year}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Data Card */}
        <div className="mt-6 p-4 rounded-xl border border-secondary-100 bg-secondary-50/30 transition-all duration-300">
          <div className="flex justify-between items-center">
            <span className="text-[10px] font-extrabold uppercase text-secondary-600 tracking-wider">
              Tahun Terpilih: {selectedPoint.year}
            </span>
            <span className="text-xs font-black text-[#082b4d]">
              {selectedPoint.label}
            </span>
          </div>
          <p className="mt-2 text-xs leading-relaxed text-zinc-600">
            {selectedPoint.notes}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-zinc-200 bg-zinc-50 px-6 py-4">
        <p className="text-[10px] text-zinc-500 font-medium">
          Sumber: Dinas Kependudukan & Pencatatan Sipil (Disdukcapil) & Dinas Sosial (Dinsos) Kota Bandung.
        </p>
      </div>
    </article>
  );
}
