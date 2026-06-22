"use client";

import { useEffect, useRef, useState } from "react";
import { CloseIcon } from "@/components/design-system/Primitives";

type OrganizationData = {
  name: string;
  grant: string;
  cabsCount: string;
  facilities: string;
  advocacy: string;
  burden: string;
  extraInfo: string;
};

const koniData: OrganizationData = {
  name: "KONI (Komite Olahraga Nasional Indonesia)",
  grant: "Rp35 Miliar (APBD 2026)",
  cabsCount: "80-81 Cabang Olahraga",
  facilities: "Sudah relatif mapan dan mandiri, memiliki kemitraan jangka panjang dan prasarana yang mapan selama bertahun-tahun.",
  advocacy: "Memiliki struktur hukum dan bidang advokasi yang jelas dalam organisasi untuk membela hak-hak atlet secara formal.",
  burden: "Satu atlet hanya membutuhkan pelatih umum, prasarana standar, dan tidak memerlukan akomodasi pendampingan personal khusus tingkat tinggi.",
  extraInfo: "Meskipun sempat menghadapi pemotongan dari usulan awal, dana operasional KONI sangat memadai untuk menopang seluruh program kerja daerah.",
};

const npciData: OrganizationData = {
  name: "NPCI (National Paralympic Committee of Indonesia)",
  grant: "Rp5 Miliar (APBD 2026)",
  cabsCount: "17 Cabang Olahraga",
  facilities: "Mayoritas sewa. Belum memiliki fasilitas latihan mandiri yang ramah disabilitas secara permanen di Kota Bandung.",
  advocacy: "Belum memiliki bidang advokasi hukum yang memadai untuk kesejahteraan atlet disabilitas (bidang hukum yang ada sebatas menangani klasifikasi ketunaan).",
  burden: "Beban Ganda Pendamping: Satu atlet membutuhkan honor pelatih + honor pendamping khusus. Peralatan khusus disabilitas (seperti kursi roda balap, dsb.) seharga puluhan juta rupiah (2-3x lebih mahal dari peralatan umum).",
  extraInfo: "NPCI harus memangkas anggaran pembinaan dan sarana penunjang akibat dana hibah Rp5 Miliar yang tidak mencukupi untuk memenuhi beban operasional disabilitas.",
};

export default function KoniNpciScaleComparison() {
  const [activeModal, setActiveModal] = useState<"koni" | "npci" | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!activeModal) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    const focusTimer = window.setTimeout(
      () => closeButtonRef.current?.focus(),
      0,
    );

    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveModal(null);
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
  }, [activeModal]);

  const modalData = activeModal === "koni" ? koniData : npciData;

  return (
    <article className="mx-auto my-8 max-w-3xl overflow-hidden rounded-3xl border border-zinc-200 bg-gradient-to-b from-white to-zinc-50/50 p-6 shadow-md font-sans">
      {/* Header Info */}
      <div className="text-center mb-6">
        <span className="inline-block rounded-full bg-secondary-100 text-secondary-800 text-[10px] font-black px-3 py-1 uppercase tracking-widest mb-2 border border-secondary-200">
          Analisis Beban Olahraga Disabilitas
        </span>
        <h3 className="text-xl font-bold text-[#082b4d]">
          Timbangan Beban Organisasi: KONI vs NPCI
        </h3>
        <p className="text-xs text-zinc-500 mt-1 max-w-md mx-auto leading-relaxed">
          NPCI memikul beban operasional ganda dengan anggaran yang jauh lebih minim. Klik beban timbangan di bawah untuk melihat rincian datanya.
        </p>
      </div>

      {/* SVG Scale Interactive Visualization */}
      <div className="relative aspect-[21/10] w-full max-w-2xl mx-auto bg-zinc-950/5 rounded-2xl border border-zinc-150 p-4 flex items-center justify-center overflow-hidden">
        <svg
          viewBox="0 0 600 280"
          className="w-full h-full select-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Base Stand of the Scale */}
          <path d="M 285 240 L 315 240 L 305 120 L 295 120 Z" fill="#4B5563" />
          <rect x="250" y="240" width="100" height="15" rx="4" fill="#374151" />
          
          {/* Main Central Pivot Joint */}
          <circle cx="300" cy="115" r="8" fill="#1F2937" />

          {/* Tilted Main Beam */}
          {/* Tilted Angle: ~8 degrees down on NPCI side (Right is down, Left is up)
              Pivot: (300, 115)
              Left Pivot End: (140, 95)
              Right Pivot End: (460, 135)
          */}
          <line x1="140" y1="95" x2="460" y2="135" stroke="#374151" strokeWidth="8" strokeLinecap="round" />
          <circle cx="140" cy="95" r="6" fill="#1F2937" />
          <circle cx="460" cy="135" r="6" fill="#1F2937" />

          {/* KONI Left Scale Strings & Pan (Raised Side) */}
          <line x1="140" y1="95" x2="105" y2="185" stroke="#9CA3AF" strokeWidth="2" />
          <line x1="140" y1="95" x2="175" y2="185" stroke="#9CA3AF" strokeWidth="2" />
          <path d="M 90 185 L 190 185 L 180 195 L 100 195 Z" fill="#10B981" className="cursor-pointer" onClick={() => setActiveModal("koni")} />

          {/* NPCI Right Scale Strings & Pan (Weighed Down Side) */}
          <line x1="460" y1="135" x2="425" y2="225" stroke="#9CA3AF" strokeWidth="2" />
          <line x1="460" y1="135" x2="495" y2="225" stroke="#9CA3AF" strokeWidth="2" />
          <path d="M 410 225 L 510 225 L 500 235 L 420 235 Z" fill="#EF4444" className="cursor-pointer" onClick={() => setActiveModal("npci")} />

          {/* Labels & Click Hotspots */}
          {/* Left Pan (KONI) Text */}
          <g className="cursor-pointer" onClick={() => setActiveModal("koni")}>
            <rect x="85" y="45" width="110" height="35" rx="8" fill="#E0F2FE" stroke="#0284C7" strokeWidth="1.5" />
            <text x="140" y="60" fill="#0369A1" fontSize="11" fontWeight="bold" textAnchor="middle">KONI (Ringan)</text>
            <text x="140" y="73" fill="#0284C7" fontSize="9" fontWeight="extrabold" textAnchor="middle" className="animate-pulse">Click Here</text>
          </g>

          {/* Right Pan (NPCI) Text */}
          <g className="cursor-pointer" onClick={() => setActiveModal("npci")}>
            <rect x="405" y="150" width="110" height="48" rx="8" fill="#FEE2E2" stroke="#EF4444" strokeWidth="1.5" />
            <text x="460" y="165" fill="#991B1B" fontSize="11" fontWeight="bold" textAnchor="middle">NPCI (Beban Berat)</text>
            <text x="460" y="178" fill="#991B1B" fontSize="9" textAnchor="middle">Biaya + Pendamping</text>
            <text x="460" y="191" fill="#EF4444" fontSize="9" fontWeight="extrabold" textAnchor="middle" className="animate-pulse">Click Here</text>
          </g>
        </svg>

        {/* Visual weight marker overlays */}
        <div className="absolute left-6 top-6 text-[10px] text-zinc-400 bg-white/80 border border-zinc-200 px-2 py-0.5 rounded shadow-sm">
          Timbangan Anggaran APBD
        </div>
      </div>

      {/* Interactive Legend Text */}
      <p className="text-center text-[10px] text-zinc-500 font-bold mt-4">
        *NPCI menanggung beban yang jauh lebih berat karena biaya peralatan penunjang, modifikasi akses, serta honor pendamping disabilitas.
      </p>

      {/* Modal Dialog */}
      {activeModal && (
        <div
          className="fixed inset-0 z-[80] flex items-end justify-center bg-black/60 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setActiveModal(null);
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="scale-dialog-title"
            className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-t-2xl bg-white shadow-2xl sm:rounded-2xl flex flex-col font-sans"
          >
            {/* Modal Header */}
            <div className={`flex items-start justify-between gap-6 px-6 py-5 text-white shrink-0 ${
              activeModal === "koni" ? "bg-emerald-600" : "bg-[#0a3358]"
            }`}>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/80">
                  Rincian Anggaran & Aspek Pembinaan
                </p>
                <h2 id="scale-dialog-title" className="mt-1 text-lg font-bold">
                  {modalData.name}
                </h2>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setActiveModal(null)}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/20 transition-colors hover:bg-white/10"
                aria-label="Tutup detail organisasi"
              >
                <CloseIcon />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-5 text-[#0a3358] text-xs overflow-y-auto flex-1">
              <div>
                <span className="block text-[10px] font-extrabold uppercase text-zinc-400 tracking-wider">
                  Besaran Anggaran Hibah (APBD 2026)
                </span>
                <strong className={`text-base font-black mt-0.5 block ${
                  activeModal === "koni" ? "text-emerald-700" : "text-blue-700"
                }`}>
                  {modalData.grant}
                </strong>
              </div>

              <div>
                <span className="block text-[10px] font-extrabold uppercase text-zinc-400 tracking-wider">
                  Cakupan Cabang Olahraga
                </span>
                <p className="mt-1 font-bold text-zinc-800 text-xs">
                  {modalData.cabsCount}
                </p>
              </div>

              <div className="border-t border-zinc-150 pt-3">
                <span className="block text-[10px] font-extrabold uppercase text-zinc-400 tracking-wider">
                  Ketersediaan Fasilitas & Venue Latihan
                </span>
                <p className="mt-1 leading-relaxed text-zinc-600">
                  {modalData.facilities}
                </p>
              </div>

              <div className="border-t border-zinc-150 pt-3">
                <span className="block text-[10px] font-extrabold uppercase text-zinc-400 tracking-wider">
                  Beban Pendampingan & Peralatan Atlet
                </span>
                <p className="mt-1 leading-relaxed text-zinc-600 font-medium">
                  {modalData.burden}
                </p>
              </div>

              <div className="border-t border-zinc-150 pt-3">
                <span className="block text-[10px] font-extrabold uppercase text-zinc-400 tracking-wider">
                  Struktur Advokasi & Perlindungan Hukum
                </span>
                <p className="mt-1 leading-relaxed text-zinc-600">
                  {modalData.advocacy}
                </p>
              </div>

              <div className="mt-4 p-4 rounded-xl bg-zinc-50 border border-zinc-150 italic text-[11px] leading-relaxed text-zinc-500">
                {modalData.extraInfo}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-zinc-200 bg-zinc-50 shrink-0 flex justify-end">
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="rounded-lg border border-zinc-300 px-4 py-2 text-xs font-bold transition-colors hover:bg-zinc-100 bg-white text-zinc-700"
              >
                Tutup Rincian
              </button>
            </div>
          </section>
        </div>
      )}
    </article>
  );
}
