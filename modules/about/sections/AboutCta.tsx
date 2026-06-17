import Link from "next/link";

export default function AboutCta() {
  return (
    <section className="bg-[#062342] text-white">
      <div className="motion-fade-up mx-auto flex max-w-7xl flex-col items-center px-6 py-14 text-center sm:py-16 lg:py-[3.9rem]">
        <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-[2.5rem]">
          Berkolaborasi Membangun Inklusi
        </h2>
        <p className="mt-7 max-w-xl text-sm leading-6 text-white/78 sm:text-[0.95rem] sm:leading-7">
          Kami percaya bahwa perubahan besar membutuhkan kolaborasi.
          Paravoice.id membuka pintu seluas-luasnya bagi komunitas,
          institusi riset, dan mitra korporasi yang memiliki visi yang sama
          dalam memperjuangkan hak-hak difabel melalui data.
        </p>
        <Link
          href="#"
          className="mt-7 inline-flex min-h-10 items-center justify-center rounded-md bg-secondary-800 px-6 text-sm font-bold text-white transition-colors hover:bg-[#b26a00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Ajukan Kerjasama
        </Link>
      </div>
    </section>
  );
}
