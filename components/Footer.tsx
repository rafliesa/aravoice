import Image from "next/image";
import Link from "next/link";

const columns = [
  {
    title: "KANAL",
    links: [
      { label: "Para Report", href: "/para-report" },
      { label: "Para Edu", href: "/para-edu" },
      { label: "Para Atlet", href: "/para-atlet" },
      { label: "Para Data", href: "/para-data" },
      { label: "Para Pop", href: "/para-pop" },
    ],
  },
  {
    title: "TENTANG",
    links: [
      { label: "Tentang Kami", href: "/tentang-kami" },
      { label: "Kontak", href: "/kontak" },
      { label: "Donasi", href: "/donasi" },
      { label: "Newsletter", href: "/dukung-kami" },
      { label: "Panduan Kontributor", href: "/panduan-kontributor" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#0b0f1a] text-[#D1D5DB]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-5">
          <Image
            src="/footer-logo.webp"
            alt="ParaVoice.id"
            width={245}
            height={138}
            className="h-14 w-auto"
          />
          <p className="max-w-xs text-sm leading-6 text-[#D1D5DB]">
            Media olahraga disabilitas independen yang berkomitmen pada
            integritas jurnalisme dan inklusivitas tanpa batas.
          </p>
          <div className="flex items-center gap-5 text-[#D1D5DB]">
            <Link href="#" aria-label="Share" className="transition-colors hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="18" cy="5" r="3" />
                <circle cx="6" cy="12" r="3" />
                <circle cx="18" cy="19" r="3" />
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
              </svg>
            </Link>
            <Link href="#" aria-label="Website" className="transition-colors hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </Link>
            <Link href="#" aria-label="Email" className="transition-colors hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4" />
                <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94" />
              </svg>
            </Link>
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title} className="flex flex-col gap-4">
            <h3 className="text-sm font-bold tracking-wider text-[#FFDCBD]">
              {col.title}
            </h3>
            <ul className="flex flex-col gap-3">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#D1D5DB] transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-bold tracking-wider text-[#FFDCBD]">
            KONTRIBUSI
          </h3>
          <p className="max-w-xs text-sm leading-6 text-[#D1D5DB]">
            Kami menerima masukan dan kontribusi dari komunitas untuk menjaga
            kualitas informasi.
          </p>
          <Link
            href="/donasi#manfaat-bermitra"
            className="inline-flex w-fit items-center justify-center border border-zinc-500 px-6 py-3 text-xs font-bold tracking-wider text-white transition-colors hover:bg-white hover:text-[#0b0f1a]"
          >
            HUBUNGI KAMI
          </Link>
        </div>
      </div>
    </footer>
  );
}
