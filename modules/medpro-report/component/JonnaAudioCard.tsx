"use client";

import Image from "next/image";

export default function JonnaAudioCard() {
  return (
    <article className="mx-auto my-8 max-w-2xl overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
      <div className="grid md:grid-cols-[200px_minmax(0,1fr)]">
        {/* Left Side: Photo */}
        <div className="relative min-h-[220px] md:min-h-full bg-zinc-900">
          <Image
            src="/jonna.jpg"
            alt="Foto Jonna Aman Damanik"
            fill
            sizes="(min-width: 768px) 200px, 100vw"
            className="object-cover"
            onError={(e) => {
              const img = e.target as HTMLImageElement;
              img.src = "/dukung-kami-hero.png";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
          <p className="absolute inset-x-4 bottom-4 text-xs font-bold uppercase tracking-[0.12em] text-white">
            Jonna Aman Damanik
          </p>
        </div>

        {/* Right Side: Playback & Details */}
        <div className="p-6 flex flex-col justify-center">
          <p className="text-secondary-700 text-xs font-extrabold uppercase tracking-[0.14em]">
            Audio Statement
          </p>
          <h3 className="mt-1.5 text-lg font-bold text-[#082b4d]">
            KND Terkait Kondisi Olahraga Disabilitas
          </h3>
          <p className="mt-2 text-xs leading-relaxed text-zinc-600">
            Komisioner Komisi Nasional Disabilitas (KND) memberikan tanggapan resmi mengenai kondisi pembinaan dan realita kesejahteraan para atlet.
          </p>

          <audio
            controls
            preload="metadata"
            className="mt-5 w-full accent-secondary-700"
            aria-label="Putar cuplikan audio Jonna Aman Damanik"
          >
            <source src="/VN/KND Jonna Aman 1 (PBM).m4a" type="audio/mpeg" />
            <source src="/design-system/sample-audio" type="audio/wav" />
            Browser Anda belum mendukung pemutar audio HTML.
          </audio>
        </div>
      </div>
    </article>
  );
}
