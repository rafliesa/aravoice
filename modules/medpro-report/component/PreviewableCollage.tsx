"use client";

import { useState } from "react";
import Image from "next/image";
import { CloseIcon } from "@/components/design-system/Primitives";

type CollageImage = {
  src: string;
  alt: string;
  title: string;
  description: string;
  fallback?: string;
  externalLink?: string;
};

const collageData: CollageImage[] = [
  {
    src: "/3/blind-dojo.webp",
    fallback: "/photo-story/1.jpeg",
    alt: "Fasilitas Judo",
    title: "Fasilitas Dojo Blind Judo",
    description: "Tempat latihan bela diri blind judo yang disewa dari PJSI Jawa Barat di lantai dua GOR Pajajaran. Aksesnya masih terbatas tangga tanpa ramp.",
    externalLink: "https://photos.app.goo.gl/Rbsa8SnB3ja7nMVD8",
  },
  {
    src: "/3/catur.webp",
    fallback: "/photo-story/2.jpeg",
    alt: "Fasilitas Catur",
    title: "Fasilitas Catur Tunanetra",
    description: "Papan catur dan jam timer taktil/Braille khusus tunanetra. Ketersediaannya sangat terbatas karena harganya yang 2-3x lebih mahal dari catur umum.",
  },
  {
    src: "/3/angkat-beban.webp",
    fallback: "/uploads/d42c798d9c02a41627330f928b3c33c2.jpg",
    alt: "Fasilitas Angkat Berat",
    title: "Fasilitas Angkat Berat Paralimpik",
    description: "Ono Saipudin dan atlet lainnya berlatih menggunakan sarana gym angkat berat di Sekretariat NPCI Kota Bandung.",
  },
  {
    src: "/3/atletik.webp",
    fallback: "/photo-story/3.jpeg",
    alt: "Fasilitas Atletik",
    title: "Fasilitas Kursi Roda Balap Atletik",
    description: "Sarana latihan kursi roda balap atletik yang berharga sangat mahal and membutuhkan perawatan berkala agar optimal dalam perlombaan.",
  },
];

export default function PreviewableCollage() {
  const [selectedPhoto, setSelectedPhoto] = useState<CollageImage | null>(null);

  return (
    <section className="my-8 w-full font-sans">
      <div className="text-center mb-6">
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#a94f00]">
          Dokumentasi Lapangan
        </span>
        <h4 className="text-xl font-black text-[#0a3358] mt-1">
          Kondisi Fasilitas Latihan Atlet Disabilitas
        </h4>
        <p className="text-xs text-zinc-500 mt-1">
          Klik foto untuk memperbesar dan melihat keterangan detail
        </p>
      </div>

      {/* Grid Collage Layout */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {collageData.map((photo, index) => (
          <div
            key={photo.title}
            onClick={() => setSelectedPhoto(photo)}
            className="group relative aspect-square overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-950 shadow-md cursor-pointer hover:shadow-xl transition-all duration-300"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:opacity-80"
              sizes="(min-width: 768px) 25vw, 50vw"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                if (photo.fallback && !target.src.includes(photo.fallback)) {
                  target.src = photo.fallback;
                }
              }}
            />
            {/* Hover overlay description */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h5 className="text-xs font-black text-white uppercase tracking-wider">
                {photo.title}
              </h5>
              <p className="text-[10px] text-zinc-300 leading-snug mt-1 line-clamp-2">
                {photo.description}
              </p>
            </div>
            {/* Default overlay label */}
            <div className="absolute bottom-3 left-3 right-3 bg-black/40 backdrop-blur-sm px-2.5 py-1.5 rounded-lg border border-white/10 group-hover:hidden transition-all text-center">
              <span className="text-[10px] font-bold text-white uppercase tracking-wider">
                {photo.title}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal Overlay */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black/90 p-4 sm:p-6 md:p-8 backdrop-blur-md"
          onClick={() => setSelectedPhoto(null)}
        >
          <div 
            className="relative max-w-3xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Large Image View */}
            <div className="relative aspect-[4/3] md:aspect-auto md:w-[60%] min-h-[300px] bg-zinc-950">
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 45vw, 100vw"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (selectedPhoto.fallback && !target.src.includes(selectedPhoto.fallback)) {
                    target.src = selectedPhoto.fallback;
                  }
                }}
              />
            </div>

            {/* Info Panel */}
            <div className="p-6 md:p-8 flex-1 flex flex-col justify-between text-[#0a3358] bg-[#fbfbf9]">
              <div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#a94f00]">
                    DOKUMENTASI VENUE
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedPhoto(null)}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 bg-white shadow-sm transition-colors hover:bg-zinc-50"
                    aria-label="Tutup pratinjau"
                  >
                    <CloseIcon />
                  </button>
                </div>
                <h4 className="text-xl font-black mt-3 leading-snug">
                  {selectedPhoto.title}
                </h4>
                <p className="text-sm text-zinc-600 mt-4 leading-relaxed font-sans">
                  {selectedPhoto.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-200 flex flex-col gap-3">
                {selectedPhoto.externalLink && (
                  <a
                    href={selectedPhoto.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 bg-secondary text-center text-xs font-bold text-white rounded-lg hover:bg-secondary-600 transition-colors"
                  >
                    Buka Album Foto Bersama ↗
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => setSelectedPhoto(null)}
                  className="w-full py-2.5 px-4 bg-zinc-200 text-center text-xs font-bold text-zinc-700 rounded-lg hover:bg-zinc-300 transition-colors"
                >
                  Kembali ke artikel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
