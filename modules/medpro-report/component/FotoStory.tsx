"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type StoryImage = {
  src: string;
  alt: string;
  caption: string;
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
  const ref = useRef<HTMLElement>(null);
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

  return (
    <figure
      ref={ref}
      className={`overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-md transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      {/* Image */}
      <div
        className={`relative w-full bg-zinc-950 ${
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

      {/* Caption */}
      <div className="p-5 sm:p-7 bg-white">
        <div className="flex flex-col gap-3">
          {paragraphs.map((para, i) => (
            <p
              key={i}
              className={`font-sans leading-relaxed text-zinc-700 ${
                i === 0 ? "text-[15px] font-medium" : "text-sm text-zinc-500"
              }`}
            >
              {para}
            </p>
          ))}
        </div>
      </div>
    </figure>
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
        <p className="text-sm text-zinc-500 mt-1">
          {images.length} foto
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-8">
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
