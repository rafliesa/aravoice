"use client";

import { useState } from "react";

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

export default function PerdaInteractiveReader() {
  const [currentIdx, setCurrentIdx] = useState<number>(0);

  const prevSlide = () => {
    setCurrentIdx((prev) => (prev === 0 ? articles.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIdx((prev) => (prev === articles.length - 1 ? 0 : prev + 1));
  };

  return (
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
        <a
          href="https://jdih.bandung.go.id/home/produk-hukum/peraturan-perundang-undangan-daerah/22115#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-bold text-secondary-800 hover:underline border border-[#d9d2c7] px-3 py-1.5 rounded-lg hover:bg-zinc-50"
        >
          Lihat PDF Asli ↗
        </a>
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
  );
}
