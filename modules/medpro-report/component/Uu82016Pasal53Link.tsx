"use client";

import { useEffect, useRef, useState } from "react";
import { DocumentIcon, CloseIcon } from "@/components/design-system/Primitives";

export default function Uu82016Pasal53Link({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const OFFICIAL_LAW_URL = "https://peraturan.bpk.go.id/Details/37251/uu-no-8-tahun-2016";

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
      <a
        href="#pasal-53-dialog"
        onClick={(event) => {
          event.preventDefault();
          setIsOpen(true);
        }}
        className="rounded-sm font-bold text-secondary-800 underline decoration-2 underline-offset-4 transition-colors hover:text-secondary-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary cursor-pointer inline-flex items-center gap-1"
      >
        {children}
        <DocumentIcon />
      </a>

      {isOpen && (
        <div
          className="fixed inset-0 z-[80] flex items-end justify-center bg-black/60 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsOpen(false);
          }}
        >
          <section
            id="pasal-53-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="pasal-53-dialog-title"
            aria-describedby="pasal-53-dialog-description"
            className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-t-2xl bg-white shadow-2xl sm:rounded-2xl flex flex-col"
          >
            {/* Header */}
            <div className="bg-primary flex items-start justify-between gap-6 px-6 py-5 text-white sm:px-8 shrink-0">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-200">
                  Undang-Undang Republik Indonesia
                </p>
                <h2 id="pasal-53-dialog-title" className="mt-2 text-xl font-bold">
                  UU Nomor 8 Tahun 2016 · Pasal 53
                </h2>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setIsOpen(false)}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/30 transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                aria-label="Tutup rincian pasal"
              >
                <CloseIcon />
              </button>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6 text-[#0a3358] font-sans">
              <div>
                <p className="text-secondary-700 text-xs font-extrabold uppercase tracking-[0.14em]">
                  Kutipan Resmi
                </p>
                <div className="mt-3 rounded-xl border border-zinc-150 bg-zinc-50 p-6 font-mono text-xs text-zinc-800 leading-relaxed space-y-4">
                  <div className="border-b border-zinc-200 pb-3 font-bold text-sm text-zinc-700">
                    Pasal 53
                  </div>
                  <div>
                    <span className="font-bold text-zinc-900 block mb-1">(1)</span>
                    Pemerintah, Pemerintah Daerah, Badan Usaha Milik Negara, dan Badan Usaha Milik Daerah wajib mempekerjakan paling sedikit 2% (dua persen) Penyandang Disabilitas dari jumlah pegawai atau pekerja.
                  </div>
                  <div>
                    <span className="font-bold text-zinc-900 block mb-1">(2)</span>
                    Perusahaan swasta wajib mempekerjakan paling sedikit 1% (satu persen) Penyandang Disabilitas dari jumlah pegawai atau pekerja.
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-bold text-zinc-800">
                  Implikasi Kebijakan
                </h4>
                <p id="pasal-53-dialog-description" className="text-xs text-zinc-600 leading-relaxed">
                  Pasal ini merupakan landasan afirmatif hukum ketenagakerjaan bagi penyandang disabilitas di Indonesia. Namun, seperti yang diungkapkan oleh Komisioner KND Jonna Aman Damanik, realisasi kuota ini kerap terhambat oleh kesenjangan kualifikasi pendidikan formal dan sertifikasi kompetensi.
                </p>
              </div>

              {/* Meta info */}
              <div className="grid grid-cols-2 gap-4 rounded-xl bg-zinc-50 p-4 text-xs">
                <div>
                  <span className="block text-zinc-400 font-bold uppercase tracking-wider text-[10px]">Kuota Sektor Publik</span>
                  <strong className="text-sm text-secondary-800 font-extrabold mt-1 block">Minimal 2%</strong>
                  <span className="text-[10px] text-zinc-500">Pemerintah, BUMN, BUMD</span>
                </div>
                <div>
                  <span className="block text-zinc-400 font-bold uppercase tracking-wider text-[10px]">Kuota Sektor Swasta</span>
                  <strong className="text-sm text-secondary-800 font-extrabold mt-1 block">Minimal 1%</strong>
                  <span className="text-[10px] text-zinc-500">Perusahaan Swasta</span>
                </div>
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="px-6 py-4 border-t border-zinc-200 bg-zinc-50 shrink-0 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end rounded-b-2xl">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="min-h-11 rounded-lg border border-zinc-300 px-5 py-2.5 text-sm font-bold transition-colors hover:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary bg-white text-zinc-700"
              >
                Kembali ke artikel
              </button>
              <a
                href={OFFICIAL_LAW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary hover:bg-secondary-600 min-h-11 rounded-lg px-5 py-2.5 text-center text-sm font-bold text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary flex items-center justify-center gap-1.5"
              >
                Buka sumber resmi ↗
              </a>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
