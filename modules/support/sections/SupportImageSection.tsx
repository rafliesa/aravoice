"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    title: "Dari Tribun yang Sepi, Suara Itu Tetap Tumbuh",
    description:
      "Di balik arena yang jauh dari sorotan, para atlet disabilitas terus berjuang dengan fasilitas, waktu, dan tenaga yang sering kali terbatas.",
    image: "/dukung-kami-hero.png",
    imagePosition: "center",
  },
  {
    title: "Janji di Atas Kertas, Latihan di Atas Keterbatasan",
    description:
      "Undang-undang telah memberi pedoman bagi pemenuhan hak penyandang disabilitas. Namun, bagi sebagian atlet NPCI Kota Bandung, hak itu masih harus dicari di antara ruang latihan, pekerjaan, dan insentif yang tidak selalu pasti.",
    image: "/dukung-kami-hero.png",
    imagePosition: "45% center",
  },
  {
    title: "Alat Impor, Mimpi yang Tetap Dipikul Sendiri",
    description:
      "Saat dana pembinaan harus dibagi untuk banyak cabang olahraga, atlet disabilitas tetap dituntut berprestasi dengan peralatan yang mahal, terbatas, dan tidak selalu mudah dirawat.",
    image: "/dukung-kami-hero.png",
    imagePosition: "55% center",
  },
];

export default function SupportImageSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const activeSlide = slides[activeIndex];

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  const goToPrevious = () => {
    setActiveIndex((current) => (current === 0 ? slides.length - 1 : current - 1));
  };

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % slides.length);
  };

  return (
    <section
      aria-label="Sorotan dukungan"
      className="relative overflow-hidden bg-[#080d16]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative min-h-[28rem] overflow-hidden sm:min-h-[34rem] lg:min-h-[35rem]">
        {slides.map((slide, index) => (
          <Image
            key={`${slide.title}-${index}`}
            src={slide.image}
            alt=""
            fill
            priority={index === 0}
            sizes="100vw"
            className={`object-cover transition-opacity duration-1000 ease-out ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ objectPosition: slide.imagePosition }}
          />
        ))}
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/28 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 mx-auto flex max-w-7xl flex-col gap-7 px-6 pb-8 text-white sm:pb-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="motion-fade-up max-w-5xl">
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.18em] text-white/70">
              Artikel
            </p>
            <h2 className="max-w-5xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-[3.25rem]">
              {activeSlide.title}
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-white/82 sm:text-base">
              {activeSlide.description}
            </p>
          </div>

          <div className="motion-slide-in-right flex items-end justify-between gap-8 lg:min-w-96">
            <div className="flex items-center gap-2" aria-label="Slide carousel">
              {slides.map((slide, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={slide.title}
                    type="button"
                    aria-label={`Tampilkan slide ${index + 1}`}
                    aria-current={isActive ? "true" : undefined}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2 rounded-full transition-all duration-500 ${
                      isActive ? "w-7 bg-white" : "w-2 bg-white/45 hover:bg-white/75"
                    }`}
                  />
                );
              })}
            </div>

            <div className="flex items-center gap-4">
              <button
                type="button"
                aria-label="Slide sebelumnya"
                onClick={goToPrevious}
                className="flex h-12 w-12 items-center justify-center border border-white/35 bg-white/5 text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-[#101522]"
              >
                <ArrowLeftIcon />
              </button>
              <button
                type="button"
                aria-label="Slide berikutnya"
                onClick={goToNext}
                className="flex h-12 w-12 items-center justify-center border border-white/35 bg-white/5 text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-[#101522]"
              >
                <ArrowRightIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowLeftIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M19 12H5" />
      <path d="m12 19-7-7 7-7" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
