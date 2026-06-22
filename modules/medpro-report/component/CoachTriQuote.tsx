"use client";

import Image from "next/image";

type CoachTriQuoteProps = {
  quote: string;
  author: string;
  role: string;
  imageSrc?: string;
};

export default function CoachTriQuote({
  quote = "Jadi untuk aksesibilitas itu jauh, artinya masih belum 100 persen terpikirkan. Masih banyak yang lewat. Contoh di jalan, karena ada jalan khusus, eh malah dipakai tempat jualan, eh dipakai parkir. Nah, itu pemahaman dari orang Indonesia sendiri kayak jadinya juga nanti kan kayak bisa di Arcamanik ya kan, saat ini belum siap.",
  author = "Tri",
  role = "Pelatih Voli Duduk",
  imageSrc = "/DIO_3236_1.jpg",
}: CoachTriQuoteProps) {
  // Use user's requested image, fallback to the uploads image if needed
  const src = imageSrc || "/uploads/d42c798d9c02a41627330f928b3c33c2.jpg";

  return (
    <section className="my-12 w-full overflow-hidden rounded-3xl bg-gradient-to-br from-[#0c1a30] to-[#061023] text-white shadow-2xl border border-blue-900/40">
      <div className="flex flex-col md:flex-row items-stretch">
        
        {/* Quote Block (Left) */}
        <div className="flex-1 p-8 sm:p-10 md:p-12 flex flex-col justify-center relative">
          {/* Large decorative quotation mark */}
          <div className="absolute left-6 top-6 text-7xl font-serif text-secondary-500/20 select-none pointer-events-none">
            “
          </div>
          
          <blockquote className="relative z-10 font-serif text-lg sm:text-xl md:text-2xl leading-relaxed text-slate-100 italic">
            “{quote}”
          </blockquote>
          
          <div className="mt-6 pt-6 border-t border-white/10">
            <cite className="not-italic block font-sans text-base font-extrabold text-secondary-400">
              {author}
            </cite>
            <span className="block font-sans text-xs text-slate-400 mt-1">
              {role}
            </span>
          </div>
        </div>

        {/* Large Image Block (Right) */}
        <div className="md:w-[45%] shrink-0 relative min-h-[320px] md:min-h-auto bg-zinc-950">
          {/* Profile photo of Tri facing left/towards the quote */}
          <Image
            src={src}
            alt={`Foto ${author}, ${role}`}
            fill
            className="object-cover object-center md:object-right"
            sizes="(min-width: 768px) 30vw, 100vw"
            priority
            onError={(e) => {
              // If the image fails to load (e.g. 404), fallback to the hash image
              const target = e.target as HTMLImageElement;
              if (target.src.includes("DIO_3236_1.jpg")) {
                target.src = "/uploads/d42c798d9c02a41627330f928b3c33c2.jpg";
              }
            }}
          />
          {/* Subtle gradient overlay to blend into the quote block on mobile/desktop */}
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0c1a30]/90 via-transparent to-transparent md:from-[#0c1a30]/80" />
        </div>

      </div>
    </section>
  );
}
