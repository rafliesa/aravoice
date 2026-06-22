"use client";

import Image from "next/image";
import { useState } from "react";

export default function DandanSupardanGallery() {
  const [activePhoto, setActivePhoto] = useState<number | null>(null);

  const photos = [
    {
      id: 1,
      src: "/uploads/dandan-menembak.jpg",
      fallback: "/uploads/d42c798d9c02a41627330f928b3c33c2.jpg",
      title: "Fokus Membidik Sasaran",
      desc: "Dandan Supardan memosisikan busur dan membidik sasaran secara presisi saat sesi latihan panahan.",
    },
    {
      id: 2,
      src: "/uploads/dandan-cabut-panah.jpg",
      fallback: "/uploads/9ee61479be07118e6f3170b0b7197bb1.jpg",
      title: "Evaluasi Hasil Tembakan",
      desc: "Dandan Supardan mencabut anak panah dari bantalan sasaran untuk menganalisis akurasi bidikannya.",
    },
  ];

  return (
    <figure className="mx-auto my-8 max-w-3xl overflow-hidden rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm font-sans">
      <div className="grid gap-4 sm:grid-cols-2">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="group relative flex flex-col overflow-hidden rounded-xl border border-zinc-150 bg-zinc-50 transition-all duration-300 hover:shadow-md cursor-pointer"
            onClick={() => setActivePhoto(photo.id)}
          >
            {/* Image Wrapper */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-800">
              <Image
                src={photo.src}
                alt={photo.title}
                fill
                sizes="(min-width: 640px) 350px, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  const img = e.target as HTMLImageElement;
                  img.src = photo.fallback;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              <span className="absolute bottom-3 left-3 rounded-full bg-secondary-600 px-2 py-0.5 text-[10px] font-bold text-white uppercase tracking-wider">
                Foto {photo.id}
              </span>
            </div>

            {/* Captions */}
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="text-sm font-bold text-[#082b4d] group-hover:text-secondary-700 transition-colors">
                  {photo.title}
                </h4>
                <p className="mt-1 text-xs text-zinc-500 leading-relaxed">
                  {photo.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox / Enlarged View */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          onClick={() => setActivePhoto(null)}
        >
          <div className="relative max-h-[85vh] max-w-3xl overflow-hidden rounded-2xl bg-zinc-950 p-1 shadow-2xl flex flex-col">
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
              aria-label="Tutup foto"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="relative aspect-[3/2] w-full max-h-[70vh] shrink">
              <Image
                src={photos[activePhoto - 1].src}
                alt={photos[activePhoto - 1].title}
                fill
                className="object-contain"
                onError={(e) => {
                  const img = e.target as HTMLImageElement;
                  img.src = photos[activePhoto - 1].fallback;
                }}
              />
            </div>
            
            <div className="bg-zinc-900 px-6 py-4 text-white text-center rounded-b-xl shrink-0">
              <h3 className="text-base font-bold text-secondary-400">
                {photos[activePhoto - 1].title}
              </h3>
              <p className="mt-1 text-xs text-zinc-300">
                {photos[activePhoto - 1].desc}
              </p>
            </div>
          </div>
        </div>
      )}

      <figcaption className="mt-3 text-center text-xs text-zinc-500 font-medium">
        Dokumentasi Dandan Supardan, atlet panahan disabilitas Jawa Barat yang menyeimbangkan karir atletik dengan pekerjaan formalnya sebagai ASN Kemensos.
      </figcaption>
    </figure>
  );
}
