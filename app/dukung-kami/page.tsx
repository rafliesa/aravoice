import type { Metadata } from "next";
import Image from "next/image";
import SupportForm from "@/components/support/SupportForm";

export const metadata: Metadata = {
  title: "Dukung Kami | Paravoice.id",
  description:
    "Bergabung dengan komunitas Paravoice.id dan dukung jurnalisme olahraga disabilitas yang independen dan inklusif.",
};

const benefits = [
  {
    title: "Data Eksklusif Para-Sports",
    description:
      "Dapatkan akses ke basis data performa atlet, statistik kompetisi, dan analisis mendalam yang tidak tersedia di media arus utama.",
    icon: <DatabaseIcon />,
  },
  {
    title: "Laporan Jurnalistik Mendalam",
    description:
      "Laporan investigasi dan feature khusus yang ditulis oleh para ahli di bidang olahraga disabilitas secara berkala.",
    icon: <ReportIcon />,
  },
  {
    title: "Jejaring Komunitas",
    description:
      "Terhubung langsung dengan atlet, pelatih, aktivis, dan sesama pendukung inklusivitas di seluruh Indonesia.",
    icon: <CommunityIcon />,
  },
  {
    title: "Dukung Jurnalisme Inklusif",
    description:
      "Keanggotaan Anda mendanai liputan bagi atlet disabilitas yang sering kali luput dari perhatian media nasional.",
    icon: <MegaphoneIcon />,
  },
];

export default function DukungKamiPage() {
  return (
    <main className="flex-1 bg-[#fdfcf9] text-[#111827]">
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-14 lg:grid-cols-[1.35fr_0.95fr] lg:gap-16 lg:py-20">
        <div>
          <p className="text-xs font-extrabold tracking-[0.18em] text-[#F29100]">
            COMMUNITY HUB
          </p>
          <h1 className="mt-3 font-caslon text-5xl font-bold leading-[1.04] tracking-tight sm:text-6xl">
            Bergabung Dengan Kami
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-600 sm:text-lg">
            Jadilah bagian dari suara yang menginspirasi. Dukung jurnalisme
            inklusif yang mengangkat prestasi dan perjuangan para atlet
            disabilitas Indonesia.
          </p>

          <div className="mt-12 space-y-8">
            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="grid grid-cols-[1.5rem_1fr] gap-3"
              >
                <span className="mt-1 text-[#F29100]">{benefit.icon}</span>
                <div>
                  <h2 className="font-caslon text-xl font-bold sm:text-2xl">
                    {benefit.title}
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm leading-7 text-zinc-600 sm:text-base">
                    {benefit.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <SupportForm />
      </section>

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
          <div className="max-w-3xl">
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
            className="inline-flex w-fit items-center gap-3 border border-white/50 bg-black/20 px-5 py-3 text-xs font-bold tracking-[0.16em] backdrop-blur-sm transition-colors hover:bg-white hover:text-zinc-950"
          >
            GABUNG SEKARANG
            <ArrowIcon />
          </a>
        </div>
      </section>

      <div className="h-28 bg-[#fdfcf9] sm:h-40" aria-hidden="true" />
    </main>
  );
}

function DatabaseIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
      <path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
    </svg>
  );
}

function ReportIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 3h14v18H5z" />
      <path d="M8 7h8M8 11h8M8 15h5" />
    </svg>
  );
}

function CommunityIcon() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="9" r="2" />
      <path d="M3 19v-1a5 5 0 0 1 10 0v1" />
      <path d="M14 15a4 4 0 0 1 7 3v1" />
    </svg>
  );
}

function MegaphoneIcon() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m3 11 14-5v12L3 13z" />
      <path d="M11 15v4a2 2 0 0 1-4 0v-5" />
      <path d="M21 10v4" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}
