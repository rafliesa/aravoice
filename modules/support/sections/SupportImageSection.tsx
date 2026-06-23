"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    title: "Dari Medali ke Nyala Api Kompor yang Menolak Mati",
    description:
      "Prestasi atlet paralimpik sering hadir dalam bentuk medali, piagam, dan seremoni penghargaan. Namun, ketika lampu arena padam dan sorak penonton berhenti, banyak atlet kembali menghadapi persoalan yang sama, bagaimana memenuhi kebutuhan keluarga sambil mempertahankan karier olahraga yang belum tentu menjamin kehidupan mereka.",
    image: "/dukung-kami/Dari Medali ke Nyala Api Kompor yang Menolak Mati_.jpg",
  },
  {
    title: "Doa-Doa di Balik Barisan Piala",
    description:
      "Kemenangan tidak sependek podium-podium perayaan itu. Kemenangan dipupuk dalam keseharian, kemenangan ada dalam senyuman orang-orang terdekat yang selama ini menemani Ono. Dalam tekanan kompetisi dan ekonomi, dukungan keluarga menjadi penopang tubuhnya untuk terus maju, menguatkannya dalam mengangkat beban yang lebih berat.",
    image: "/dukung-kami/Doa-Doa di Balik Barisan Piala_ .jpg",
  },
  {
    title: "Yang Terduduk Tidak Akan Pernah Tunduk",
    description:
      "Enam bulan menuju Pekan Paralimpik Daerah Jawa Barat, dan barisan kursi roda itu tetap berjajar rapi di tepi lapangan, berdoa kemudia melakukan pemanasan. Pemandangan ini sudah berlangsung dari dua bulan sebelumnya, dan niat mereka tetap sama, Meraih Juara.",
    image: "/dukung-kami/Yang Terduduk Tidak Akan Pernah Tunduk_.jpg",
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
