import type { ReactNode } from "react";

export const lawReferenceUrls = {
  crpd:
    "https://www.ohchr.org/en/instruments-mechanisms/instruments/convention-rights-persons-disabilities",
  indonesiaConstitution: "https://www.dpr.go.id/jdih/uu1945",
  perdaBandungDisability: "https://jdih.bandung.go.id/",
  uuDisability: "https://peraturan.bpk.go.id/Details/37251/uu-no-8-tahun-2016",
  uuKeolahragaan:
    "https://peraturan.bpk.go.id/Search?keywords=UU%20Nomor%2011%20Tahun%202022%20Keolahragaan",
  uuRatificationCrpd:
    "https://peraturan.bpk.go.id/Search?keywords=UU%20Nomor%2019%20Tahun%202011%20Convention%20Rights%20Persons%20Disabilities",
} as const;

export default function LawReferenceLink({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) {
  return (
    <a
      className="rounded-sm font-bold text-secondary-800 underline decoration-2 underline-offset-4 transition-colors hover:text-secondary-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary"
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
    </a>
  );
}
