"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type CarouselImage = {
  alt: string;
  caption: string;
  src: string;
};

type ArticleImageCarouselProps = {
  images: CarouselImage[];
  title: string;
};

export default function ArticleImageCarousel({
  images,
  title,
}: ArticleImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const activeImage = images[activeIndex];

  useEffect(() => {
    if (isPaused || images.length < 2) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, [images.length, isPaused]);

  const goToPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? images.length - 1 : current - 1,
    );
  };

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % images.length);
  };

  if (images.length === 0 || !activeImage) return null;

  return (
    <figure
      className="overflow-hidden rounded-lg border border-[#d9d2c7] bg-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative aspect-[16/10] bg-black">
        {images.map((image, index) => (
          <Image
            alt={image.alt}
            className={`object-cover transition-opacity duration-700 ease-out ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
            fill
            key={image.src}
            priority={index === 0}
            sizes="(min-width: 1024px) 67rem, 100vw"
            src={image.src}
          />
        ))}

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent px-5 pb-5 pt-16 text-white">
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-secondary-200">
            {title}
          </p>
          <figcaption className="mt-2 max-w-3xl font-sans text-sm font-normal leading-6 text-white/90">
            {activeImage.caption}
          </figcaption>
        </div>

        {images.length > 1 ? (
          <div className="absolute inset-x-4 top-1/2 flex -translate-y-1/2 justify-between">
            <button
              aria-label="Foto sebelumnya"
              className="grid size-10 place-items-center rounded-full border border-white/35 bg-black/30 font-sans text-xl text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-[#101522]"
              onClick={goToPrevious}
              type="button"
            >
              ‹
            </button>
            <button
              aria-label="Foto berikutnya"
              className="grid size-10 place-items-center rounded-full border border-white/35 bg-black/30 font-sans text-xl text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-[#101522]"
              onClick={goToNext}
              type="button"
            >
              ›
            </button>
          </div>
        ) : null}
      </div>

      {images.length > 1 ? (
        <div className="flex flex-wrap items-center justify-between gap-4 px-5 py-4">
          <div className="flex items-center gap-2" aria-label="Navigasi foto">
            {images.map((image, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  aria-current={isActive ? "true" : undefined}
                  aria-label={`Tampilkan foto ${index + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    isActive
                      ? "w-7 bg-secondary-800"
                      : "w-2 bg-[#cfc8bd] hover:bg-secondary-700"
                  }`}
                  key={image.src}
                  onClick={() => setActiveIndex(index)}
                  type="button"
                />
              );
            })}
          </div>
          <p className="font-sans text-xs font-normal text-[#6b7280]">
            {activeIndex + 1} / {images.length}
          </p>
        </div>
      ) : null}
    </figure>
  );
}
