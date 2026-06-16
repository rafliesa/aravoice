import Image from "next/image";
import { ArrowIcon } from "@/modules/support/component/icons";

export default function SupportImageSection() {
  return (
    <section className="relative min-h-[32rem] overflow-hidden lg:min-h-[38rem]">
      <Image
        src="/dukung-kami-hero.png"
        alt="Atlet balap kursi roda bersiap di lintasan stadion"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-black/5" />

      <div className="absolute inset-x-0 bottom-0 mx-auto flex max-w-7xl flex-col gap-8 px-6 pb-10 text-white sm:pb-14 lg:flex-row lg:items-end lg:justify-between">
        <div className="motion-fade-up max-w-3xl">
          <p className="inline-flex bg-[#5a3108]/85 px-3 py-1 text-[0.68rem] font-extrabold tracking-[0.18em] text-[#ffe7cb]">
            MOMEN INSPIRASI
          </p>
          <h2 className="mt-4 font-caslon text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Suara Dari Lapangan: Perjuangan Tanpa Batas
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-200 sm:text-base">
            Melihat lebih dekat dedikasi atlet para nasional saat menjalani
            sesi latihan intensif menuju panggung kompetisi.
          </p>
        </div>

        <a
          href="#support-form"
          className="motion-slide-in-right inline-flex w-fit items-center gap-3 border border-white/50 bg-black/20 px-5 py-3 text-xs font-bold tracking-[0.16em] backdrop-blur-sm transition-colors hover:bg-white hover:text-zinc-950"
        >
          GABUNG SEKARANG
          <ArrowIcon />
        </a>
      </div>
    </section>
  );
}
