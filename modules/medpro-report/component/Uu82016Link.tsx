"use client";

import { useEffect, useRef, useState } from "react";
import { DocumentIcon, CloseIcon } from "@/components/design-system/Primitives";

const disabilityRights = [
  { id: 1, name: "Hak Hidup", desc: "Hak untuk mempertahankan hidup dan kehidupan." },
  { id: 2, name: "Hak Bebas dari Stigma", desc: "Hak untuk tidak mendapatkan label negatif dari masyarakat." },
  { id: 3, name: "Hak Privasi", desc: "Perlindungan atas kehidupan pribadi." },
  { id: 4, name: "Hak Keadilan dan Perlindungan Hukum", desc: "Kesamaan kedudukan di depan hukum." },
  { id: 5, name: "Hak Pendidikan", desc: "Akses pada pendidikan inklusif di semua jenjang." },
  { id: 6, name: "Hak Pekerjaan, Kewirausahaan, dan Koperasi", desc: "Hak untuk bekerja dan mandiri secara ekonomi." },
  { id: 7, name: "Hak Kesehatan", desc: "Akses pelayanan kesehatan yang setara." },
  { id: 8, name: "Hak Politik", desc: "Hak memilih dan dipilih dalam pemilihan umum." },
  { id: 9, name: "Hak Keagamaan", desc: "Menjalankan ibadah sesuai keyakinan tanpa hambatan." },
  { id: 10, name: "Hak Keolahragaan", desc: "Hak berprestasi dan mendapatkan sarana olahraga yang layak." },
  { id: 11, name: "Hak Kebudayaan dan Pariwisata", desc: "Akses pada hiburan, wisata, dan pelestarian budaya." },
  { id: 12, name: "Hak Kesejahteraan Sosial", desc: "Jaminan sosial dari negara untuk kebutuhan dasar." },
  { id: 13, name: "Hak Aksesibilitas", desc: "Penyediaan fasilitas publik yang mudah digunakan secara mandiri." },
  { id: 14, name: "Hak Pelayanan Publik", desc: "Pelayanan umum yang ramah disabilitas." },
  { id: 15, name: "Hak Perlindungan dari Bencana", desc: "Prioritas penyelamatan saat situasi darurat bencana." },
  { id: 16, name: "Hak Habilitasi dan Rehabilitasi", desc: "Pemulihan dan pemeliharaan fungsi fisik serta sosial." },
  { id: 17, name: "Hak Konsesi", desc: "Keringanan biaya untuk layanan dan fasilitas tertentu." },
  { id: 18, name: "Hak Pendataan", desc: "Tercatat secara resmi sebagai warga negara disabilitas." },
  { id: 19, name: "Hak Hidup Mandiri dan Dilibatkan dalam Masyarakat", desc: "Hak berbaur dan tidak diisolasi." },
  { id: 20, name: "Hak Berekspresi, Berkomunikasi, dan Informasi", desc: "Akses komunikasi, seperti Braille dan bahasa isyarat." },
  { id: 21, name: "Hak Berpindah Tempat dan Kewarganegaraan", desc: "Kebebasan mobilitas dan status hukum." },
  { id: 22, name: "Hak Bebas dari Kekerasan dan Eksploitasi", desc: "Perlindungan dari diskriminasi, penelantaran, dan penyiksaan." },
];

export default function Uu82016Link({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"summary" | "pdf">("summary");
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

  // Reset tab to summary when opening modal
  const handleOpen = (event: React.MouseEvent) => {
    event.preventDefault();
    setActiveTab("summary");
    setIsOpen(true);
  };

  return (
    <>
      <a
        href="#legal-reference-dialog"
        onClick={handleOpen}
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
            id="legal-reference-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="legal-dialog-title"
            aria-describedby="legal-dialog-description"
            className="max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-t-2xl bg-white shadow-2xl sm:rounded-2xl flex flex-col"
          >
            {/* Header */}
            <div className="bg-primary flex items-start justify-between gap-6 px-6 py-5 text-white sm:px-8 shrink-0">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-200">
                  Detail Peraturan & Undang-Undang
                </p>
                <h2 id="legal-dialog-title" className="mt-2 text-xl font-bold">
                  UU Nomor 8 Tahun 2016
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

            {/* Tab Navigation */}
            <div className="flex border-b border-zinc-200 bg-zinc-50/50 px-6 sm:px-8 shrink-0">
              <button
                type="button"
                onClick={() => setActiveTab("summary")}
                className={`border-b-2 px-4 py-3 text-xs font-extrabold uppercase tracking-wider transition-colors cursor-pointer ${
                  activeTab === "summary"
                    ? "border-secondary-800 text-secondary-800"
                    : "border-transparent text-zinc-500 hover:text-zinc-700"
                }`}
              >
                Ringkasan Hak
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("pdf")}
                className={`border-b-2 px-4 py-3 text-xs font-extrabold uppercase tracking-wider transition-colors cursor-pointer ${
                  activeTab === "pdf"
                    ? "border-secondary-800 text-secondary-800"
                    : "border-transparent text-zinc-500 hover:text-zinc-700"
                }`}
              >
                Dokumen PDF Resmi
              </button>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 overflow-y-auto flex-1 max-h-[60vh]">
              {activeTab === "summary" ? (
                <div className="space-y-6">
                  <div>
                    <p className="text-secondary-700 text-xs font-extrabold uppercase tracking-[0.14em]">
                      Tentang Penyandang Disabilitas
                    </p>
                    <p
                      id="legal-dialog-description"
                      className="mt-2 text-base leading-relaxed text-zinc-700 font-sans"
                    >
                      Peraturan ini mengatur kesamaan kesempatan, penghormatan, pelindungan, dan pemenuhan hak penyandang disabilitas, termasuk penyediaan aksesibilitas serta akomodasi yang layak.
                    </p>
                  </div>

                  {/* Scrollable list of 22 rights */}
                  <div>
                    <div className="border-t border-zinc-200 pt-4">
                      <h3 className="text-sm font-extrabold uppercase tracking-[0.1em] text-primary">
                        Mengenal 22 Hak Dasar Penyandang Disabilitas (Pasal 5 UU No. 8/2016)
                      </h3>
                      <p className="text-xs text-zinc-500 mt-1">
                        Berikut adalah hak-hak yang wajib dipenuhi oleh pemerintah dan masyarakat:
                      </p>
                    </div>

                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {disabilityRights.map((right) => (
                        <div 
                          key={right.id}
                          className="p-4 rounded-xl border border-zinc-150 bg-zinc-50/50 hover:bg-white hover:shadow-md transition-all duration-200 flex gap-3 align-start"
                        >
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary-100 text-xs font-black text-secondary-800">
                            {right.id}
                          </span>
                          <div>
                            <h4 className="text-sm font-bold text-zinc-800">{right.name}</h4>
                            <p className="text-xs text-zinc-500 mt-1 leading-normal">{right.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Meta information grid */}
                  <dl className="grid gap-4 rounded-xl bg-zinc-50 p-5 sm:grid-cols-3">
                    <div>
                      <dt className="text-xs font-bold uppercase text-zinc-500">
                        Ditetapkan
                      </dt>
                      <dd className="mt-1 font-bold text-sm text-zinc-800">15 April 2016</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-bold uppercase text-zinc-500">
                        Status
                      </dt>
                      <dd className="mt-1 font-bold text-sm text-emerald-700">Berlaku</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-bold uppercase text-zinc-500">
                        Sumber
                      </dt>
                      <dd className="mt-1 font-bold text-sm text-zinc-800">JDIH BPK RI</dd>
                    </div>
                  </dl>
                </div>
              ) : (
                <div className="w-full h-[55vh] min-h-[350px] bg-zinc-100 rounded-xl overflow-hidden shadow-inner border border-zinc-200 flex flex-col">
                  <iframe
                    src="/uu-8-2016.pdf#toolbar=1"
                    className="w-full h-full border-none"
                    title="Undang-Undang Nomor 8 Tahun 2016 PDF"
                  />
                </div>
              )}
            </div>

            {/* Footer Buttons */}
            <div className="px-6 py-4 border-t border-zinc-200 bg-zinc-50 shrink-0 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end rounded-b-2xl">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="min-h-11 rounded-lg border border-zinc-300 px-5 py-2.5 text-sm font-bold transition-colors hover:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary bg-white text-zinc-700 cursor-pointer"
              >
                Kembali ke artikel
              </button>
              <a
                href={activeTab === "pdf" ? "/uu-8-2016.pdf" : OFFICIAL_LAW_URL}
                target="_blank"
                rel="noopener noreferrer"
                download={activeTab === "pdf" ? "UU_Nomor_8_Tahun_2016.pdf" : undefined}
                className="bg-secondary hover:bg-secondary-600 min-h-11 rounded-lg px-5 py-2.5 text-center text-sm font-bold text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary flex items-center justify-center gap-1.5 cursor-pointer"
              >
                {activeTab === "pdf" ? "Unduh PDF Asli ⬇" : "Buka sumber resmi ↗"}
              </a>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
