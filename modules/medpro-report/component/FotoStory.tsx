"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type StoryImage = {
  src: string;
  alt: string;
  caption: string;
  secondSrc?: string;
  secondAlt?: string;
};

type FotoStoryProps = {
  images: StoryImage[];
  title: string;
  bottomText?: string;
};

function StoryCard({
  image,
  index,
  total,
}: {
  image: StoryImage;
  index: number;
  total: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Split multi-paragraph captions on double newline or single newline
  const paragraphs = image.caption
    .split(/\n\n|\n/)
    .map((p) => p.trim())
    .filter(Boolean);

  const isPortrait = index % 3 === 2; // Every 3rd card is portrait for rhythm

  if (image.secondSrc) {
    return (
      <div
        ref={ref}
        className={`flex flex-col gap-6 my-6 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* Double Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column: Image 1 */}
          <div className="flex flex-col gap-3">
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl bg-zinc-950 shadow-md">
              <Image
                alt={image.alt}
                className="object-cover"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                src={image.src}
              />
              <div className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1.5 backdrop-blur-sm">
                <span className="font-mono text-xs font-bold text-white">
                  {String(index + 1).padStart(2, "0")}a
                </span>
                <span className="text-white/40 text-xs">/</span>
                <span className="font-mono text-xs text-white/60">
                  {String(total).padStart(2, "0")}
                </span>
              </div>
            </div>
            {/* Left Image Visible Alt Caption */}
            <p className="font-sans text-xs sm:text-sm text-zinc-400 font-light leading-relaxed px-1">
              {image.alt}
            </p>
          </div>

          {/* Right Column: Image 2 */}
          <div className="flex flex-col gap-3">
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl bg-zinc-950 shadow-md">
              <Image
                alt={image.secondAlt || ""}
                className="object-cover"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                src={image.secondSrc}
              />
              <div className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1.5 backdrop-blur-sm">
                <span className="font-mono text-xs font-bold text-white">
                  {String(index + 1).padStart(2, "0")}b
                </span>
                <span className="text-white/40 text-xs">/</span>
                <span className="font-mono text-xs text-white/60">
                  {String(total).padStart(2, "0")}
                </span>
              </div>
            </div>
            {/* Right Image Visible Alt Caption */}
            <p className="font-sans text-xs sm:text-sm text-zinc-400 font-light leading-relaxed px-1">
              {image.secondAlt}
            </p>
          </div>
        </div>

        {/* Narrative caption */}
        <div className="space-y-4 px-1 mt-2">
          {paragraphs.map((para, i) => (
            <p
              key={i}
              className="font-sans text-base leading-relaxed text-zinc-700"
            >
              {para}
            </p>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={`flex flex-col gap-4 my-6 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      {/* Image Container */}
      <div
        className={`relative w-full overflow-hidden rounded-2xl bg-zinc-950 shadow-md ${
          isPortrait ? "aspect-[4/3]" : "aspect-[16/9]"
        }`}
      >
        <Image
          alt={image.alt}
          className="object-cover"
          fill
          priority={index === 0}
          sizes="(min-width: 1024px) 67rem, 100vw"
          src={image.src}
        />
        {/* Slide number badge */}
        <div className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1.5 backdrop-blur-sm">
          <span className="font-mono text-xs font-bold text-white">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-white/40 text-xs">/</span>
          <span className="font-mono text-xs text-white/60">
            {String(total).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* Visible Alt Text Caption */}
      {image.alt && (
        <p className="font-sans text-xs sm:text-sm text-zinc-400 font-light leading-relaxed px-1 -mt-1">
          {image.alt}
        </p>
      )}

      {/* Caption/Narrative (standard paragraph styling, no wrapper card) */}
      <div className="space-y-4 px-1">
        {paragraphs.map((para, i) => (
          <p
            key={i}
            className="font-sans text-base leading-relaxed text-zinc-700"
          >
            {para}
          </p>
        ))}
      </div>
    </div>
  );
}

export default function FotoStory({ images, title, bottomText }: FotoStoryProps) {
  if (images.length === 0) return null;

  return (
    <div className="mb-10 w-full">
      {/* Header */}
      <div className="mb-8 flex flex-col gap-1">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-secondary-700 block" />
          <span className="text-secondary-700 text-[11px] font-extrabold uppercase tracking-[0.2em]">
            Photo Story
          </span>
        </div>
        <h3 className="mt-2 text-2xl font-black tracking-tight text-[#082b4d] sm:text-3xl">
          {title}
        </h3>
        <div className="mt-3 flex flex-col gap-0.5 text-xs text-zinc-500 font-medium">
          <p>Fotografer: Claudio Gracia Pramana</p>
          <p>Penulis: Reihan Cahya Kusuma</p>
        </div>
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-10">
        {images.map((image, index) => (
          <StoryCard
            key={image.src}
            image={image}
            index={index}
            total={images.length}
          />
        ))}
      </div>

      {/* Footer */}
      {bottomText && (
        <div className="mt-10 text-center border-t border-zinc-200/80 pt-6">
          <p className="font-sans text-sm text-zinc-500 italic">{bottomText}</p>
        </div>
      )}
    </div>
  );
}
