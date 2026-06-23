"use client";

import React, { useState, useEffect, useRef } from "react";

type PerdaArticle = {
  id: string;
  pasal: string;
  category: string;
  officialText: string;
  summary: string;
};

const articles: PerdaArticle[] = [
  {
    id: "p18",
    pasal: "Pasal 18",
    category: "Hak Keolahragaan",
    officialText: "Pemerintah Daerah Kota dalam Penghormatan, Pelindungan dan Pemenuhan hak keolahragaan wajib menjamin Penyandang Disabilitas dalam: melakukan kegiatan keolahragaan; mendapatkan penghargaan yang sama; memperoleh pelayanan; memperoleh sarana prasarana yang mudah diakses; memilih/mengikuti cabang olahraga; memperoleh pengarahan, bimbingan, pembinaan; menjadi pelaku keolahragaan; mengembangkan industri keolahragaan; dan meningkatkan prestasi di semua tingkatan.",
    summary: "Negara wajib membiayai, melatih, serta memfasilitasi sarana prasarana olahraga yang ramah bagi disabilitas di Kota Bandung secara setara dengan non-disabilitas.",
  },
  {
    id: "p19",
    pasal: "Pasal 19",
    category: "Pembinaan Olahraga",
    officialText: "(1) Pemerintah Daerah Kota wajib membina dan mengembangkan keolahragaan bagi Penyandang Disabilitas untuk meningkatkan kesehatan, rasa percaya diri, dan prestasi. (2) Menyediakan peralatan/perlengkapan sesuai ragam disabilitas. (3) Membentuk, membina, dan mengembangkan organisasi disabilitas (seperti NPCI) melalui pusat pembinaan.",
    summary: "Pemerintah Kota Bandung wajib menyuplai alat khusus olahraga disabilitas serta membentuk wadah pembinaan khusus (NPCI) secara terstruktur.",
  },
  {
    id: "p22",
    pasal: "Pasal 22",
    category: "Kesejahteraan Sosial",
    officialText: "Pemerintah Daerah Kota dalam Penghormatan, Pelindungan dan Pemenuhan hak kesejahteraan sosial wajib menjamin akses bagi Penyandang Disabilitas untuk mendapatkan: a. Rehabilitasi Sosial, b. Jaminan Sosial, c. Pemberdayaan Sosial, d. Perlindungan Sosial.",
    summary: "Mandat dasar bagi Dinas Sosial dan jajaran Pemkot untuk menyediakan jaring pengaman sosial, jaminan dasar hidup, dan fasilitas pemulihan disabilitas.",
  },
  {
    id: "p23",
    pasal: "Pasal 23",
    category: "Rehabilitasi Sosial",
    officialText: "Rehabilitasi Sosial ditujukan untuk memulihkan fungsi sosial disabilitas melalui pelayanan utuh: motivasi psikososial, perawatan, pelatihan vokasional kewirausahaan, bimbingan fisik/spiritual, konseling psikososial, bantuan asistensi, dan resosialisasi.",
    summary: "Penyandang disabilitas berhak mendapatkan layanan konseling psikolog dan latihan kerja (vokasi) yang dibiayai daerah demi kemandirian ekonomi.",
  },
  {
    id: "p24",
    pasal: "Pasal 24",
    category: "Jaminan Sosial",
    officialText: "(1) Jaminan Sosial ditujukan untuk memenuhi kebutuhan dasar penyandang disabilitas miskin atau tidak berpenghasilan. (3) Jaminan Sosial diberikan dalam bentuk asuransi kesejahteraan sosial, bantuan langsung berkelanjutan, dan bantuan khusus.",
    summary: "Penyandang disabilitas yang miskin atau tidak memiliki pendapatan tetap (termasuk atlet pasca pensiun) berhak atas asuransi sosial dan bantuan langsung tunai rutin.",
  },
  {
    id: "p25",
    pasal: "Pasal 25",
    category: "Pemberdayaan Sosial",
    officialText: "Pemberdayaan Sosial diarahkan agar penyandang disabilitas mampu memenuhi kebutuhannya secara mandiri serta meningkatkan partisipasi lembaga atau sumber daya masyarakat dalam penyelenggaraan kesetaraan.",
    summary: "Dukungan pelatihan mandiri agar penyandang disabilitas tidak tergantung pada bantuan pasif tetapi aktif menggerakkan roda ekonomi.",
  },
  {
    id: "p27",
    pasal: "Pasal 27",
    category: "Perlindungan Sosial",
    officialText: "Perlindungan Sosial bagi penyandang disabilitas dilaksanakan paling sedikit melalui pemberian: a. bantuan sosial, b. advokasi sosial, c. dan/atau bantuan hukum.",
    summary: "Daerah wajib menyediakan pendampingan advokasi hukum dan pembelaan hak ketika terjadi diskriminasi atau pelanggaran hak disabilitas.",
  },
  {
    id: "p28",
    pasal: "Pasal 28",
    category: "Bantuan Sosial",
    officialText: "(1) Bantuan Sosial diberikan kepada penyandang disabilitas, keluarga, dan/atau komunitas yang mengalami risiko sosial agar tetap hidup wajar. (2) Berupa bantuan langsung, bantuan aksesibilitas, dan penguatan kelembagaan.",
    summary: "Skema bantuan keuangan dan fasilitas aksesibilitas bagi keluarga disabilitas yang rentan agar dapat mempertahankan taraf hidup yang bermartabat.",
  },
  {
    id: "p29",
    pasal: "Pasal 29",
    category: "Advokasi Sosial",
    officialText: "(1) Advokasi sosial dimaksudkan untuk melindungi dan membela hak penyandang disabilitas, keluarga, dan komunitas yang dilanggar haknya. (2) Diberikan dalam bentuk penyadaran hak dan pembelaan.",
    summary: "Mekanisme pengaduan dan bantuan hukum terstruktur untuk memperjuangkan pemenuhan hak-hak dasar yang terhambat di instansi publik/swasta.",
  },
];

// Helper component to render individual pages on canvas
type PdfCanvasProps = {
  pageNo: number;
  pdfDoc: any;
  scale: number;
};

function PdfCanvas({ pageNo, pdfDoc, scale }: PdfCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!pdfDoc) return;
    
    let active = true;
    let renderTask: any = null;

    pdfDoc.getPage(pageNo).then((page: any) => {
      if (!active) return;

      const canvas = canvasRef.current;
      if (!canvas) return;
      
      const context = canvas.getContext("2d");
      if (!context) return;
      
      const viewport = page.getViewport({ scale });
      canvas.height = viewport.height;
      canvas.width = viewport.width;
      
      const renderContext = {
        canvasContext: context,
        viewport: viewport,
      };
      
      renderTask = page.render(renderContext);
      
      renderTask.promise.catch((err: any) => {
        if (err && err.name !== "RenderingCancelledException") {
          console.error("Render error:", err);
        }
      });
    });

    return () => {
      active = false;
      if (renderTask) {
        renderTask.cancel();
      }
    };
  }, [pdfDoc, pageNo, scale]);

  return <canvas ref={canvasRef} className="max-w-full block" />;
}

export default function PerdaInteractiveReader() {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [isPdfOpen, setIsPdfOpen] = useState<boolean>(false);
  
  // Custom PDF Reader States
  const [libLoaded, setLibLoaded] = useState<boolean>(false);
  const [pdfDoc, setPdfDoc] = useState<any>(null);
  const [pageNum, setPageNum] = useState<number>(1);
  const [numPages, setNumPages] = useState<number>(0);
  const [scale, setScale] = useState<number>(1.2);
  const [inputVal, setInputVal] = useState<string>("1");
  const containerRef = useRef<HTMLDivElement>(null);

  const prevSlide = () => {
    setCurrentIdx((prev) => (prev === 0 ? articles.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIdx((prev) => (prev === articles.length - 1 ? 0 : prev + 1));
  };

  // Load PDF.js from CDN when modal is open
  useEffect(() => {
    if (!isPdfOpen) return;
    
    if ((window as any).pdfjsLib) {
      setLibLoaded(true);
      return;
    }
    
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.min.js";
    script.onload = () => {
      const pdfjsLib = (window as any).pdfjsLib;
      pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js";
      setLibLoaded(true);
    };
    document.body.appendChild(script);
  }, [isPdfOpen]);

  // Load PDF document
  useEffect(() => {
    if (!libLoaded || !isPdfOpen) return;
    
    const pdfjsLib = (window as any).pdfjsLib;
    pdfjsLib.getDocument("/7/2019pw3221015.pdf").promise.then(
      (pdf: any) => {
        setPdfDoc(pdf);
        setNumPages(pdf.numPages);
        setPageNum(1);
        setInputVal("1");
      },
      (err: any) => {
        console.error("Error loading PDF:", err);
      }
    );
  }, [libLoaded, isPdfOpen]);

  // Track active page during scroll
  const handleScroll = () => {
    const container = containerRef.current;
    if (!container || !pdfDoc) return;

    const children = container.children;
    let currentVisiblePage = 1;
    const containerTop = container.getBoundingClientRect().top;

    for (let i = 0; i < children.length; i++) {
      const child = children[i] as HTMLElement;
      if (!child.id.startsWith("pdf-page-wrapper-")) continue;

      const rect = child.getBoundingClientRect();
      // If page top is close to container top, count it as current page
      if (rect.top - containerTop <= 120) {
        const pageNo = parseInt(child.id.replace("pdf-page-wrapper-", ""), 10);
        if (!isNaN(pageNo)) {
          currentVisiblePage = pageNo;
        }
      }
    }

    setPageNum(currentVisiblePage);
    setInputVal(currentVisiblePage.toString());
  };

  const handlePageInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.target.value);
  };

  const handlePageInputSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const val = parseInt(inputVal, 10);
      if (!isNaN(val) && val >= 1 && val <= numPages) {
        scrollToPage(val);
      } else {
        setInputVal(pageNum.toString());
      }
    }
  };

  const scrollToPage = (pageNo: number) => {
    const targetPage = Math.max(1, Math.min(pageNo, numPages));
    setPageNum(targetPage);
    setInputVal(targetPage.toString());

    const element = document.getElementById(`pdf-page-wrapper-${targetPage}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <article className="mx-auto my-8 max-w-2xl overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-md font-sans">
        {/* Header */}
        <div className="border-b border-zinc-200 p-6 bg-zinc-50/30 flex justify-between items-center">
          <div>
            <p className="text-secondary-700 text-xs font-extrabold uppercase tracking-[0.14em]">
              Dokumen Resmi Perda Kota Bandung
            </p>
            <h3 className="mt-1 text-base font-bold text-[#082b4d]">
              Perda Kota Bandung No. 15 Tahun 2019
            </h3>
          </div>
          <button
            onClick={() => setIsPdfOpen(true)}
            className="text-xs font-bold text-secondary-800 border border-[#d9d2c7] px-3 py-1.5 rounded-lg hover:bg-zinc-50 transition-colors cursor-pointer"
            type="button"
          >
            Lihat PDF Asli ↗
          </button>
        </div>

        {/* Main Slider Content */}
        <div className="p-6 min-h-[300px] flex flex-col justify-between">
          <div className="space-y-4">
            {/* Pasal Badge & Category */}
            <div className="flex justify-between items-center">
              <span className="bg-secondary-50 text-secondary-900 font-extrabold text-xs px-3 py-1 rounded-full border border-secondary-100">
                {articles[currentIdx].pasal}
              </span>
              <span className="text-xs text-zinc-500 font-semibold italic">
                Kategori: {articles[currentIdx].category}
              </span>
            </div>

            {/* Official text snippet */}
            <div>
              <span className="block text-[10px] font-extrabold text-zinc-400 uppercase tracking-widest mb-1.5">
                Bunyi Pasal Perda:
              </span>
              <blockquote className="bg-zinc-50 border-l-4 border-zinc-300 p-4 text-xs font-medium text-zinc-700 italic leading-relaxed">
                {articles[currentIdx].officialText}
              </blockquote>
            </div>

            {/* Plain language summary */}
            <div>
              <span className="block text-[10px] font-extrabold text-secondary-600 uppercase tracking-widest mb-1">
                Arti Secara Praktis (Bahasa Awam):
              </span>
              <p className="text-xs leading-relaxed text-zinc-800 font-bold">
                {articles[currentIdx].summary}
              </p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="mt-8 pt-4 border-t border-zinc-150 flex items-center justify-between">
            <button
              onClick={prevSlide}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 text-zinc-600 transition-colors hover:bg-zinc-100 cursor-pointer"
              aria-label="Artikel sebelumnya"
              type="button"
            >
              ←
            </button>
            
            <span className="text-xs text-zinc-400 font-bold">
              {currentIdx + 1} / {articles.length} Pasal
            </span>

            <button
              onClick={nextSlide}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 text-zinc-600 transition-colors hover:bg-zinc-100 cursor-pointer"
              aria-label="Artikel berikutnya"
              type="button"
            >
              →
            </button>
          </div>
        </div>
      </article>

      {/* PDF Modal Viewer (Custom PDF Reader UI matching screenshot) */}
      {isPdfOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
          <div className="relative bg-zinc-100 rounded-2xl w-full max-w-4xl h-[90vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 border border-zinc-200">
            
            {/* Top Bar / Control Panel */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-200 bg-white">
              {/* File Dropdown / Title */}
              <div className="flex items-center gap-3">
                <button className="text-xs font-bold text-zinc-700 bg-zinc-100 hover:bg-zinc-200 px-3 py-1.5 rounded-lg flex items-center gap-1 transition-all cursor-pointer">
                  File <span className="text-[10px] text-zinc-500">▼</span>
                </button>
                <div className="hidden sm:block h-4 w-px bg-zinc-300" />
                <span className="text-xs font-black text-[#082b4d] hidden sm:inline truncate max-w-[250px]">
                  Perda No. 15 Tahun 2019
                </span>
              </div>

              {/* Search Box */}
              <div className="flex items-center gap-2 flex-1 max-w-xs justify-center mx-4">
                <div className="relative w-full">
                  <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-zinc-400 text-xs">🔍</span>
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full pl-8 pr-3 py-1.5 bg-zinc-150 rounded-lg border-0 text-xs focus:ring-1 focus:ring-zinc-300 focus:outline-none placeholder-zinc-400"
                  />
                </div>
              </div>

              {/* Action Buttons: Download & Close */}
              <div className="flex items-center gap-2">
                <a
                  href="/7/2019pw3221015.pdf"
                  download="Perda_Bandung_15_2019.pdf"
                  className="text-zinc-600 hover:text-zinc-900 text-xs font-bold bg-zinc-100 hover:bg-zinc-200 border border-zinc-250 px-3.5 py-2 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer no-underline"
                >
                  <span>📥</span> Download
                </a>
                <button 
                  onClick={() => setIsPdfOpen(false)}
                  className="text-zinc-600 hover:text-zinc-900 text-xs font-bold bg-zinc-200/50 hover:bg-zinc-200 px-4 py-2 rounded-xl transition-all cursor-pointer"
                  type="button"
                >
                  Tutup ✕
                </button>
              </div>
            </div>

            {/* Main Content Area (Scrollable Canvas Container) */}
            <div 
              ref={containerRef}
              onScroll={handleScroll}
              className="flex-1 overflow-y-auto bg-zinc-200 flex flex-col items-center p-6 gap-6 scroll-smooth"
            >
              {!libLoaded ? (
                <div className="flex flex-col items-center justify-center h-full gap-2">
                  <div className="animate-spin rounded-full h-8 w-8 border-2 border-secondary-700 border-t-transparent" />
                  <span className="text-xs text-zinc-500 font-bold">Memuat PDF Reader...</span>
                </div>
              ) : (
                Array.from({ length: numPages }).map((_, idx) => {
                  const pageNo = idx + 1;
                  return (
                    <div 
                      key={pageNo}
                      id={`pdf-page-wrapper-${pageNo}`}
                      className="relative bg-white shadow-xl rounded border border-zinc-300 max-w-full overflow-hidden transition-all duration-300 flex-shrink-0"
                    >
                      {/* Floating page number in corner */}
                      <span className="absolute left-4 top-4 text-[10px] font-bold text-zinc-400 z-10 bg-white/80 px-2 py-0.5 rounded shadow-sm">
                        p. {pageNo}
                      </span>
                      <PdfCanvas pageNo={pageNo} pdfDoc={pdfDoc} scale={scale} />
                    </div>
                  );
                })
              )}
            </div>

            {/* Bottom Navigation / Zoom Bar */}
            <div className="flex items-center justify-between px-4 py-3 border-t border-zinc-200 bg-white">
              {/* Pagination controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => scrollToPage(1)}
                  disabled={pageNum === 1}
                  className="flex h-8 w-8 items-center justify-center rounded-lg hover:bg-zinc-100 disabled:opacity-30 disabled:hover:bg-transparent text-zinc-700 text-xs font-black cursor-pointer"
                  title="First Page"
                >
                  |←
                </button>
                <button
                  onClick={() => scrollToPage(pageNum - 1)}
                  disabled={pageNum === 1}
                  className="flex h-8 w-8 items-center justify-center rounded-lg hover:bg-zinc-100 disabled:opacity-30 disabled:hover:bg-transparent text-zinc-700 text-xs font-black cursor-pointer"
                  title="Previous Page"
                >
                  ←
                </button>
                
                <div className="flex items-center gap-1.5 text-xs text-zinc-600 font-bold">
                  <span>Page</span>
                  <input
                    type="text"
                    value={inputVal}
                    onChange={handlePageInputChange}
                    onKeyDown={handlePageInputSubmit}
                    className="w-10 text-center border border-zinc-300 rounded px-1 py-0.5 bg-zinc-50 text-xs font-bold"
                  />
                  <span>of {numPages || 4}</span>
                </div>

                <button
                  onClick={() => scrollToPage(pageNum + 1)}
                  disabled={pageNum === numPages}
                  className="flex h-8 w-8 items-center justify-center rounded-lg hover:bg-zinc-100 disabled:opacity-30 disabled:hover:bg-transparent text-zinc-700 text-xs font-black cursor-pointer"
                  title="Next Page"
                >
                  →
                </button>
                <button
                  onClick={() => scrollToPage(numPages)}
                  disabled={pageNum === numPages}
                  className="flex h-8 w-8 items-center justify-center rounded-lg hover:bg-zinc-100 disabled:opacity-30 disabled:hover:bg-transparent text-zinc-700 text-xs font-black cursor-pointer"
                  title="Last Page"
                >
                  →|
                </button>
              </div>

              {/* Zoom Fit Selection dropdown */}
              <div className="flex items-center gap-2">
                <select
                  value={scale.toString()}
                  onChange={(e) => setScale(parseFloat(e.target.value))}
                  className="border border-zinc-300 rounded px-2 py-1 text-xs font-bold text-zinc-700 bg-zinc-50 focus:outline-none"
                >
                  <option value="0.75">75%</option>
                  <option value="1.0">100%</option>
                  <option value="1.2">Fit Width</option>
                  <option value="1.5">150%</option>
                  <option value="2.0">200%</option>
                </select>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
