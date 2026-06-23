"use client";

import Image from "next/image";

type QuoteCardProps = {
  quote: string;
  imageSrc: string;
  speakerName: string;
  speakerRole: string;
  reverse?: boolean;
  imageAlt?: string;
};

export default function QuoteCard({
  quote,
  imageSrc,
  speakerName,
  speakerRole,
  reverse = false,
  imageAlt,
}: QuoteCardProps) {
  return (
    <section className="my-8 w-full overflow-hidden rounded-2xl bg-white text-zinc-900 shadow-md border border-zinc-200 font-sans transition-all duration-300 hover:shadow-lg">
      <div className={`flex flex-col ${reverse ? "sm:flex-row-reverse" : "sm:flex-row"} items-stretch`}>

        {/* Photo Container */}
        <div className="sm:w-[30%] shrink-0 relative min-h-[220px] sm:min-h-auto bg-zinc-100">
          <Image
            src={imageSrc}
            alt={imageAlt || `Foto ${speakerName}`}
            fill
            sizes="(min-width: 640px) 25vw, 100vw"
            className="object-cover object-center"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/dukung-kami-hero.png";
            }}
          />
        </div>

        {/* Content Box */}
        <div className="flex-1 p-6 sm:p-8 flex flex-col justify-center relative text-left">
          <div className="absolute left-4 top-4 text-6xl font-serif text-zinc-200 select-none pointer-events-none">
            "
          </div>

          <blockquote className="relative z-10 font-serif text-sm sm:text-base leading-relaxed text-zinc-700 italic">
            "{quote}"
          </blockquote>

          <div className="mt-4 pt-4 border-t border-zinc-200">
            <cite className="not-italic block font-sans text-sm font-extrabold text-secondary-800">
              {speakerName}
            </cite>
            <span className="block font-sans text-[10px] text-zinc-500 mt-1">
              {speakerRole}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
