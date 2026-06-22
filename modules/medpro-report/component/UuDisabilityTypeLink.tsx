"use client";

import { useEffect, useRef, useState } from "react";
import { CloseIcon } from "@/components/design-system/Primitives";

export default function UuDisabilityTypeLink({ children }: { children: React.ReactNode }) {
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
      <a
        href="#disability-type-dialog"
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
            id="disability-type-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="disability-dialog-title"
            className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-t-2xl bg-white shadow-2xl sm:rounded-2xl"
          >
            <div className="bg-primary flex items-start justify-between gap-6 px-6 py-5 text-white sm:px-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-200">
                  Klasifikasi Washington Group (WG-SS)
                </p>
                <h2 id="disability-dialog-title" className="mt-2 text-xl font-bold">
                  4 Pengukuran Disabilitas (Tipe 1-4)
                </h2>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setIsOpen(false)}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/30 transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                aria-label="Tutup klasifikasi disabilitas"
              >
                <CloseIcon />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-6 text-[#0a3358] font-sans">
              <p className="text-sm leading-relaxed text-zinc-650">
                Terdapat 4 jenis pengukuran disabilitas (Office for National Statistics 2019) berdasarkan survei yang disusun oleh <strong>Washington Group Short Set (WG-SS) on Functioning</strong>:
              </p>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-150">
                  <h4 className="text-sm font-bold text-zinc-800">Disabilitas Tipe 1</h4>
                  <p className="text-xs text-zinc-600 mt-1 leading-relaxed">
                    Setidaknya satu dari pertanyaan fungsional diberi kode <strong>“agak kesulitan”</strong>, <strong>“banyak kesulitan”</strong>, atau <strong>“tidak bisa mengerjakan sama sekali”</strong>. Tipe 1 sering digunakan di Indonesia untuk mengidentifikasi tingkat kesulitan sedang hingga berat guna menyusun program pemenuhan hak sesuai UU No. 8/2016.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-150">
                  <h4 className="text-sm font-bold text-zinc-800">Disabilitas Tipe 2</h4>
                  <p className="text-xs text-zinc-600 mt-1 leading-relaxed">
                    Setidaknya satu pertanyaan fungsional diberi kode <strong>“banyak kesulitan”</strong> atau <strong>“tidak bisa sama sekali”</strong>, ATAU minimal dua dari enam pertanyaan diberi kode <strong>“agak kesulitan”</strong>.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-150">
                  <h4 className="text-sm font-bold text-zinc-800">Disabilitas Tipe 3 (Rekomendasi Internasional)</h4>
                  <p className="text-xs text-zinc-600 mt-1 leading-relaxed">
                    Setidaknya satu pertanyaan fungsional berkode <strong>“banyak kesulitan”</strong> atau <strong>“tidak bisa sama sekali”</strong>. Ini adalah standar pengukuran utama yang direkomendasikan secara global.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-150">
                  <h4 className="text-sm font-bold text-zinc-800">Disabilitas Tipe 4</h4>
                  <p className="text-xs text-zinc-600 mt-1 leading-relaxed">
                    Setidaknya satu pertanyaan fungsional diberi kode <strong>“tidak bisa sama sekali”</strong>.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex justify-end border-t border-zinc-150 pt-4">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="min-h-11 rounded-lg border border-zinc-300 px-5 py-2.5 text-sm font-bold bg-white text-zinc-700 transition-colors hover:bg-zinc-100"
                >
                  Kembali ke artikel
                </button>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
