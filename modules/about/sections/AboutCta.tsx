import Link from "next/link";

const partners = ["PARTNER_1", "PARTNER_2", "PARTNER_3", "PARTNER_4"];

export default function AboutCta() {
  return (
    <section className="bg-[#0b1020] text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-2">
        <div className="motion-fade-up">
          <h2 className="font-serif text-4xl font-bold leading-tight tracking-tight">
            Berkolaborasi<br />Membangun Inklusi
          </h2>
          <p className="mt-6 max-w-lg text-sm leading-7 text-zinc-300">
            Kami percaya bahwa perubahan besar membutuhkan kolaborasi. Paravoice.id
            membuka pintu seluas-luasnya bagi komunitas, institusi riset, dan mitra
            korporasi yang memiliki visi yang sama dalam memperjuangkan hak-hak difabel
            melalui data.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#"
              className="inline-flex items-center gap-2 bg-[#F29100] px-6 py-3 text-xs font-bold tracking-wider text-white transition-colors hover:bg-[#d97f00]"
            >
              AJUKAN KERJASAMA →
            </Link>
            <Link
              href="#"
              className="inline-flex items-center gap-2 border border-[#F29100] px-6 py-3 text-xs font-bold tracking-wider text-[#F29100] transition-colors hover:bg-[#F29100]/10"
            >
              DONASI UNTUK RISET
            </Link>
          </div>
        </div>

        <div className="motion-slide-in-right rounded-lg bg-[#111935] p-8">
          <div className="grid grid-cols-2 gap-5">
            {partners.map((p, index) => (
              <div
                key={p}
                className="motion-fade-up flex h-20 items-center justify-center rounded-md border border-white/10 bg-[#0b1020] text-sm font-bold tracking-wider text-zinc-400"
                style={{ animationDelay: `${index * 70}ms` }}
              >
                {p}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
