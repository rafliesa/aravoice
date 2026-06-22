"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

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

export default function FotoStory({ images, title, bottomText }: FotoStoryProps) {
  if (images.length === 0) return null;

  return (
    <div className="mb-10 w-full">
      {/* Title block */}
      <div className="mb-8">
        <span className="text-secondary-700 text-xs font-extrabold uppercase tracking-[0.16em]">
          PHOTO STORY
        </span>
        <h3 className="mt-1 text-2xl font-black tracking-tight text-[#082b4d] sm:text-3xl">
          {title}
        </h3>
      </div>

      {/* Main photo stack */}
      <div className="flex flex-col gap-10">
        {images.map((image, index) => (
          <figure
            key={image.src}
            className="overflow-hidden rounded-2xl border border-[#d9d2c7] bg-white shadow-md transition-all hover:shadow-lg"
          >
            <div className="relative aspect-[16/10] w-full bg-zinc-950">
              <Image
                alt={image.alt}
                className="object-cover"
                fill
                priority={index === 0}
                sizes="(min-width: 1024px) 67rem, 100vw"
                src={image.src}
              />
            </div>

            {/* Caption */}
            <div className="p-5 sm:p-6 bg-gradient-to-b from-white to-[#faf8f3]">
              <div className="whitespace-pre-line font-sans text-[15px] leading-relaxed text-zinc-700">
                {image.caption}
              </div>
            </div>
          </figure>
        ))}
      </div>

      {/* Optional bottom text */}
      {bottomText && (
        <div className="mt-8 text-center border-t border-zinc-200/80 pt-6">
          <p className="font-sans text-sm text-zinc-600 italic">
            {bottomText}
          </p>
        </div>
      )}
    </div>
  );
}
