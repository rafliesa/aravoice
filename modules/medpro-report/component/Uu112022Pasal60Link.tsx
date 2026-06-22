"use client";

import { useEffect, useRef, useState } from "react";
import { CloseIcon } from "@/components/design-system/Primitives";

export default function Uu112022Pasal60Link({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const OFFICIAL_LAW_URL = "https://peraturan.bpk.go.id/Details/203148/uu-no-11-tahun-2022";

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
        href="#legal-reference-dialog-11-2022-60"
        onClick={(event) => {
          event.preventDefault();
          setIsOpen(true);
        }}
        className="rounded-sm font-bold text-secondary-800 underline decoration-2 underline-offset-4 transition-colors hover:text-secondary-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary cursor-pointer"
      >
        {children}
      </a>

      {isOpen && (
        <div
          className="fixed inset-0 z-[80] flex items-end justify-center bg-black/60 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsOpen(false);
          }}
        >
          <section
            id="legal-reference-dialog-11-2022-60"
            role="dialog"
            aria-modal="true"
            aria-labelledby="legal-dialog-title-11-60"
            aria-describedby="legal-dialog-description-11-60"
            className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-t-2xl bg-white shadow-2xl sm:rounded-2xl"
          >
            <div className="bg-primary flex items-start justify-between gap-6 px-6 py-5 text-white sm:px-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-200">
                  Detail Regulasi Keolahragaan
                </p>
                <h2 id="legal-dialog-title-11-60" className="mt-2 text-xl font-bold">
                  UU No. 11 Tahun 2022 Pasal 60
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

            <div className="p-6 sm:p-8 space-y-4">
              <p className="text-secondary-700 text-xs font-extrabold uppercase tracking-[0.14em]">
                Olahraga Khusus Disabilitas &amp; Hak Penghargaan Setara
              </p>
              
              <div className="space-y-4 text-base leading-8 text-[#0a3358] font-sans border-l-4 border-secondary-500 pl-4 bg-zinc-50 p-4 rounded-r-xl">
                <p id="legal-dialog-description-11-60">
                  <strong>Ayat (1):</strong> Olahragawan penyandang disabilitas melaksanakan kegiatan olahraga khusus bagi penyandang disabilitas.
                </p>
                <p>
                  <strong>Ayat (2):</strong> Setiap Olahragawan penyandang disabilitas sebagaimana dimaksud pada ayat (1) berhak untuk:
                </p>
                <p className="font-semibold text-zinc-800 pl-4">
                  e. Mendapatkan hak yang sama untuk memperoleh penghargaan sesuai dengan prestasi yang dicapai.
                </p>
              </div>

              <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end border-t border-zinc-150 pt-4">
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
            </div>
          </section>
        </div>
      )}
    </>
  );
}
