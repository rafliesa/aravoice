import Link from "next/link";

export default function RubrikMembershipCta() {
  return (
    <section className="motion-fade-up mt-14 border-t border-[#d8d0c2] px-6 py-20 text-center">
      <h2 className="text-4xl font-extrabold tracking-tight text-[#182036]">
        Bergabung dengan&nbsp; ParaVoice
      </h2>
      <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[#5d6574]">
        Dapatkan akses eksklusif ke laporan mendalam, webinar bulanan, dan
        dukung pertumbuhan ekosistem inklusi di Indonesia.
      </p>
      <div className="mt-12 flex flex-wrap justify-center gap-5">
        <Link
          href="/buletin"
          className="flex h-14 min-w-56 items-center justify-center rounded-md bg-[#9a5a00] px-8 text-base font-extrabold text-white transition-colors hover:bg-[#7c4800]"
        >
          Daftar Membership
        </Link>
        <Link
          href="/admin/login"
          className="flex h-14 min-w-32 items-center justify-center rounded-md border-2 border-[#9a5a00] px-8 text-base font-extrabold text-[#9a5a00] transition-colors hover:bg-[#9a5a00] hover:text-white"
        >
          Masuk
        </Link>
      </div>
    </section>
  );
}
