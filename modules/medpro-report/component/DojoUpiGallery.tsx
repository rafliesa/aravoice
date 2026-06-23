"use client";

import Image from "next/image";

export default function DojoUpiGallery() {
  return (
    <section className="my-8 w-full">
      <div className="grid gap-6 sm:grid-cols-2">
        {/* Photo 1: Dojo Stairs */}
        <figure className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-md transition-all hover:shadow-lg">
          <div className="relative aspect-[4/3] w-full bg-zinc-950">
            <Image
              src="/2/tangga_2.jpg"
              alt="Tangga menuju dojo blind judo"
              fill
              className="object-cover"
              sizes="(min-width: 640px) 50vw, 100vw"
            />
          </div>
          <figcaption className="p-4 bg-gradient-to-b from-white to-zinc-50 border-t border-zinc-100">
            <span className="text-[10px] font-black uppercase tracking-wider text-secondary-600 block mb-1">
              Fasilitas Latihan
            </span>
            <p className="text-sm font-bold text-zinc-800 leading-snug">
              Tangga Dojo Blind Judo Gor Pajajaran
            </p>
            <p className="text-xs text-zinc-500 mt-1.5 leading-relaxed">
              Tangga menuju dojo blind judo masih curam, tanpa jalur landai maupun penanda taktil yang memadai bagi atlet tunanetra.
            </p>
          </figcaption>
        </figure>

        {/* Photo 2: UPI Tennis Court */}
        <figure className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-md transition-all hover:shadow-lg">
          <div className="relative aspect-[4/3] w-full bg-zinc-950">
            <Image
              src="/2/tenis-indoor.png"
              alt="Lapangan tenis indoor UPI"
              fill
              className="object-cover"
              sizes="(min-width: 640px) 50vw, 100vw"
            />
          </div>
          <figcaption className="p-4 bg-gradient-to-b from-white to-zinc-50 border-t border-zinc-100">
            <span className="text-[10px] font-black uppercase tracking-wider text-secondary-600 block mb-1">
              Venue Sewa
            </span>
            <p className="text-sm font-bold text-zinc-800 leading-snug">
              Lapangan Tenis Indoor UPI Bandung
            </p>
            <p className="text-xs text-zinc-500 mt-1.5 leading-relaxed">
              Lapangan tenis indoor UPI, salah satu venue yang relatif aksesibel bagi atlet disabilitas, masih berstatus sewa dan harus bergantian dengan cabang olahraga lain.
            </p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
