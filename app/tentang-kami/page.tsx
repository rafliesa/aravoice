import Link from "next/link";

const values = [
  {
    title: "Transparency",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="7" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <line x1="11" y1="8" x2="11" y2="14" />
        <line x1="8" y1="11" x2="14" y2="11" />
      </svg>
    ),
  },
  {
    title: "Inclusivity",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Data-Driven Integrity",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
  },
];

const team = Array.from({ length: 7 }, () => ({
  name: "Lorem Ipsum",
  role: "LOREM IPSUM",
}));

const partners = ["PARTNER_1", "PARTNER_2", "PARTNER_3", "PARTNER_4"];

export default function TentangKami() {
  return (
    <div className="flex-1 bg-white text-[#1a1a1a]">
      {/* Header */}
      <div className="mx-auto max-w-7xl px-6 pt-8">
        <nav className="flex items-center gap-2 text-sm text-zinc-500">
          <Link href="/" className="hover:text-zinc-800">Home</Link>
          <span>›</span>
          <span className="font-semibold text-[#F29100]">Tentang Kami</span>
        </nav>

        <div className="border-b border-zinc-200 py-10">
          <h1 className="font-caslon text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Menyuarakan Inklusivitas Melalui
            <br />
            <span className="italic font-normal">Jurnalisme Data</span>
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-zinc-600">
            Kami hadir untuk Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            ex ea commodo consequat.
          </p>
        </div>
      </div>

      {/* Perjalanan Kami */}
      <section className="bg-zinc-100">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 lg:grid-cols-2">
          <div>
            <div className="mb-5 h-1 w-12 rounded bg-[#F29100]" />
            <h2 className="font-serif text-3xl font-bold tracking-tight">Perjalanan Kami</h2>
            <div className="mt-6 space-y-5 text-sm leading-7 text-zinc-600">
              <p>
                Paravoice.id lahir dari Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </p>
              <p>
                Sejak didirikan, kami berkomitmen untuk Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Misi kami jelas: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="h-full min-h-80 w-full rounded-sm border border-zinc-300 bg-zinc-200" />
            <div className="absolute -bottom-5 left-8 bg-[#F29100] px-5 py-4 text-white shadow-lg">
              <p className="text-2xl font-bold leading-none">120+</p>
              <p className="mt-1 text-xs font-bold leading-tight tracking-wide">LAPORAN DATA<br />TAHUNAN</p>
            </div>
          </div>
        </div>
      </section>

      {/* Nilai-Nilai Kami */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-center font-serif text-3xl font-bold tracking-tight">Nilai-Nilai Kami</h2>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="rounded-lg border border-zinc-200 bg-white p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#0b1f3a] text-white">
                {v.icon}
              </div>
              <h3 className="mt-6 font-serif text-xl font-bold">{v.title}</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-600">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tim Editorial */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="mb-2 h-1 w-12 rounded bg-[#F29100]" />
        <div className="flex items-center justify-between">
          <h2 className="font-serif text-3xl font-bold tracking-tight">Tim Editorial</h2>
          <Link href="#" className="text-xs font-bold tracking-wider text-[#F29100] hover:underline">
            LIHAT SEMUA STAF →
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {team.map((member, i) => (
            <div key={i}>
              <div className="aspect-square w-full bg-zinc-200" />
              <h3 className="mt-4 font-serif text-lg font-bold">{member.name}</h3>
              <p className="text-xs font-bold tracking-wider text-[#F29100]">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0b1020] text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-2">
          <div>
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

          <div className="rounded-lg bg-[#111935] p-8">
            <div className="grid grid-cols-2 gap-5">
              {partners.map((p) => (
                <div
                  key={p}
                  className="flex h-20 items-center justify-center rounded-md border border-white/10 bg-[#0b1020] text-sm font-bold tracking-wider text-zinc-400"
                >
                  {p}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
