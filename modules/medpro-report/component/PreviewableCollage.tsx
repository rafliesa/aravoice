"use client";

import { useState } from "react";
import Image from "next/image";

const collageData = [
  {
    src: "/3/blind-dojo.webp",
    fallback: "/photo-story/1.jpeg",
    alt: "Fasilitas Judo",
    title: "Fasilitas Dojo Blind Judo",
    description:
      "Tempat latihan bela diri blind judo yang disewa dari PJSI Jawa Barat di lantai dua GOR Pajajaran. Aksesnya masih terbatas tangga tanpa ramp.",
  },
  {
    src: "/3/catur.webp",
    fallback: "/photo-story/2.jpeg",
    alt: "Fasilitas Catur",
    title: "Fasilitas Catur Tunanetra",
    description:
      "Papan catur dan jam timer taktil/Braille khusus tunanetra. Ketersediaannya sangat terbatas karena harganya yang 2-3x lebih mahal dari catur umum.",
  },
  {
    src: "/3/angkat-beban.webp",
    fallback: "/uploads/d42c798d9c02a41627330f928b3c33c2.jpg",
    alt: "Fasilitas Angkat Berat",
    title: "Fasilitas Angkat Berat Paralimpik",
    description:
      "Ono Saipudin dan atlet lainnya berlatih menggunakan sarana gym angkat berat di Sekretariat NPCI Kota Bandung.",
  },
  {
    src: "/3/atletik.webp",
    fallback: "/photo-story/3.jpeg",
    alt: "Fasilitas Atletik",
    title: "Fasilitas Kursi Roda Balap Atletik",
    description:
      "Sarana latihan kursi roda balap atletik yang berharga sangat mahal dan membutuhkan perawatan berkala agar optimal dalam perlombaan.",
  },
];

function CollageImage({
  item,
  className = "",
  onClick,
}: {
  item: (typeof collageData)[number];
  className?: string;
  onClick?: () => void;
}) {
  return (
    <div onClick={onClick} className={`group relative overflow-hidden rounded-xl bg-zinc-900 ${onClick ? "cursor-pointer" : ""} ${className}`}>
      <Image
        src={item.src}
        alt={item.alt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(min-width: 768px) 50vw, 100vw"
        onError={(e) => {
          const t = e.target as HTMLImageElement;
          if (item.fallback && !t.src.includes(item.fallback)) t.src = item.fallback;
        }}
      />
      {/* Gradient overlay + caption */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-3">
        <p className="text-[10px] font-black uppercase tracking-widest text-white/70">
          {item.title}
        </p>
        <p className="mt-0.5 text-xs font-light text-white/85 leading-snug line-clamp-2">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default function PreviewableCollage() {
  const [preview, setPreview] = useState<(typeof collageData)[number] | null>(null);

  const handleOpen  = (item: (typeof collageData)[number]) => setPreview(item);
  const handleClose = () => setPreview(null);

  return (
    <section className="my-8 w-full font-sans">
      {/* Header */}
      <div className="mb-4 text-center">
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#a94f00]">
          Dokumentasi Lapangan
        </span>
        <h4 className="mt-1 text-xl font-black text-[#0a3358]">
          Kondisi Fasilitas Latihan Atlet Disabilitas
        </h4>
      </div>

      {/*
        Editorial collage layout:
        ┌──────────────┬──────┐
        │              │  [1] │
        │     [0]      ├──────┤
        │              │  [2] │
        ├──────┬────── ┤      │  ← mobile: stack 2x2
        │  [3] │       │      │
        └──────┴───────┴──────┘
        Desktop: [0] tall left | [1][2] stacked right-top | [3] wide bottom-right
      */}

      {/* Desktop layout */}
      <div className="hidden md:grid gap-2" style={{ gridTemplateColumns: "3fr 2fr 2fr", gridTemplateRows: "200px 200px" }}>
        {/* [0] Dojo — spans 2 rows on left */}
        <div onClick={() => handleOpen(collageData[0])} className="row-span-2 relative overflow-hidden rounded-xl bg-zinc-900 group cursor-pointer">
          <Image
            src={collageData[0].src}
            alt={collageData[0].alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="33vw"
            onError={(e) => {
              const t = e.target as HTMLImageElement;
              if (collageData[0].fallback && !t.src.includes(collageData[0].fallback)) t.src = collageData[0].fallback;
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <p className="text-[10px] font-black uppercase tracking-widest text-white/70">{collageData[0].title}</p>
            <p className="mt-0.5 text-xs font-light text-white/85 leading-snug">{collageData[0].description}</p>
          </div>
        </div>

        {/* [1] Catur — top right col 1 */}
        <div onClick={() => handleOpen(collageData[1])} className="relative overflow-hidden rounded-xl bg-zinc-900 group cursor-pointer">
          <Image
            src={collageData[1].src}
            alt={collageData[1].alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="22vw"
            onError={(e) => {
              const t = e.target as HTMLImageElement;
              if (collageData[1].fallback && !t.src.includes(collageData[1].fallback)) t.src = collageData[1].fallback;
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-3">
            <p className="text-[10px] font-black uppercase tracking-widest text-white/70">{collageData[1].title}</p>
            <p className="mt-0.5 text-[10px] font-light text-white/85 leading-snug line-clamp-2">{collageData[1].description}</p>
          </div>
        </div>

        {/* [2] Angkat Berat — top right col 2 */}
        <div onClick={() => handleOpen(collageData[2])} className="relative overflow-hidden rounded-xl bg-zinc-900 group cursor-pointer">
          <Image
            src={collageData[2].src}
            alt={collageData[2].alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="22vw"
            onError={(e) => {
              const t = e.target as HTMLImageElement;
              if (collageData[2].fallback && !t.src.includes(collageData[2].fallback)) t.src = collageData[2].fallback;
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-3">
            <p className="text-[10px] font-black uppercase tracking-widest text-white/70">{collageData[2].title}</p>
            <p className="mt-0.5 text-[10px] font-light text-white/85 leading-snug line-clamp-2">{collageData[2].description}</p>
          </div>
        </div>

        {/* [3] Atletik — spans 2 cols bottom */}
        <div onClick={() => handleOpen(collageData[3])} className="col-span-2 relative overflow-hidden rounded-xl bg-zinc-900 group cursor-pointer">
          <Image
            src={collageData[3].src}
            alt={collageData[3].alt}
            fill
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            sizes="44vw"
            onError={(e) => {
              const t = e.target as HTMLImageElement;
              if (collageData[3].fallback && !t.src.includes(collageData[3].fallback)) t.src = collageData[3].fallback;
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-3">
            <p className="text-[10px] font-black uppercase tracking-widest text-white/70">{collageData[3].title}</p>
            <p className="mt-0.5 text-[10px] font-light text-white/85 leading-snug">{collageData[3].description}</p>
          </div>
        </div>
      </div>

      {/* Mobile layout — 2x2 grid */}
      <div className="grid md:hidden grid-cols-2 gap-2">
        {collageData.map((item) => (
          <CollageImage key={item.title} item={item} className="aspect-square" onClick={() => handleOpen(item)} />
        ))}
      </div>

      {/* Simple fullscreen lightbox */}
      {preview && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={handleClose}
        >
          <button
            type="button"
            onClick={handleClose}
            className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Tutup"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
          <div
            className="relative max-h-[90vh] max-w-4xl w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={preview.src}
              alt={preview.alt}
              fill
              className="object-contain"
              sizes="90vw"
              onError={(e) => {
                const t = e.target as HTMLImageElement;
                if (preview.fallback && !t.src.includes(preview.fallback)) t.src = preview.fallback;
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm px-5 py-3">
              <p className="text-xs font-bold text-white uppercase tracking-wider">{preview.title}</p>
              <p className="text-xs font-light text-white/80 mt-0.5 leading-snug">{preview.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
