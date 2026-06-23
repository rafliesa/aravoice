"use client";

import Image from "next/image";

type YuliaQuoteCardProps = {
  quote?: string;
  imageSrc?: string;
};

export default function YuliaQuoteCard({
  quote = "Saat ini pun keterlibatan psikolog masih terbatas pada cabang olahraga tertentu. Ada beberapa cabang yang sudah menggandeng psikolog secara aktif, tetapi belum merata di semua cabang olahraga.",
  imageSrc = "/yulia.jpg",
}: YuliaQuoteCardProps) {
  return (
    <section className="my-8 w-full overflow-hidden rounded-3xl bg-gradient-to-br from-[#0c1a30] to-[#061023] text-white shadow-2xl border border-blue-900/40">
      <div className="flex flex-col sm:flex-row items-stretch">
        
        {/* Photo Block (Left) */}
        <div className="sm:w-[35%] shrink-0 relative min-h-[240px] sm:min-h-auto bg-zinc-950">
          <Image
            src={imageSrc}
            alt="Yulia Sahaja Dewi Permatasari"
            fill
            className="object-cover object-top"
            sizes="(min-width: 640px) 25vw, 100vw"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/uploads/9ee61479be07118e6f3170b0b7197bb1.jpg";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-l from-[#0c1a30]/90 via-transparent to-transparent sm:from-[#0c1a30]/80" />
        </div>

        {/* Quote Block (Right) */}
        <div className="flex-1 p-6 sm:p-8 flex flex-col justify-center relative">
          <div className="absolute left-4 top-4 text-6xl font-serif text-secondary-500/25 select-none pointer-events-none">
            “
          </div>
          
          <blockquote className="relative z-10 font-serif text-sm sm:text-base md:text-lg leading-relaxed text-slate-100 italic">
            “{quote}”
          </blockquote>
          
          <div className="mt-4 pt-4 border-t border-white/10">
            <cite className="not-italic block font-sans text-sm font-extrabold text-secondary-400">
              Yulia Sahaja Dewi Permatasari
            </cite>
            <span className="block font-sans text-[10px] text-slate-400 mt-1">
              Psikolog Klinis Pendamping Atlet Disabilitas
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
