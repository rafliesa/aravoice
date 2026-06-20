const comparisonRows = [
  {
    koni: {
      title: "81 cabang",
      description: "cabang olahraga",
    },
    npci: {
      title: "17 cabang",
      description: "cabang olahraga",
    },
  },
  {
    koni: {
      title: "Dana Hibah APBD",
      description: "",
    },
    npci: {
      title: "Dana Hibah APBD",
      description: "",
    },
  },
  {
    koni: {
      title: "Fasilitas mapan",
      description:
        "Sebagian milik sendiri atau kerja sama jangka panjang yang telah dibangun bertahun-tahun.",
    },
    npci: {
      title: "Mayoritas sewa",
      description:
        "Sebagian besar venue masih berstatus sewa, belum memiliki fasilitas latihan mandiri yang signifikan.",
    },
  },
  {
    koni: {
      title: "Program terstruktur",
      description: "Uji kompetensi dan pelatih bersertifikasi.",
    },
    npci: {
      title: "Otodidak",
      description:
        "Pelatih banyak belajar dari pengalaman sebagai atlet, tanpa jalur sertifikasi formal.",
    },
  },
  {
    koni: {
      title: "Jaringan luas",
      description: "Kerja sama dengan perguruan tinggi dan sektor swasta.",
      highlight: true,
    },
    npci: {
      title: "Masih terbatas",
      description: "Jaringan kerja sama belum berkembang secara signifikan.",
    },
  },
];

export default function KoniNpciComparisonInfographic() {
  return (
    <section className="rounded-[1.75rem] bg-[#eaf3ff] p-5 shadow-2xl shadow-[#9db7d8]/20 sm:p-6">
      <div className="rounded-[1.5rem] bg-[radial-gradient(circle_at_78%_22%,#245ce7_0%,#204989_48%,#1c3d73_100%)] px-5 py-7 sm:px-7">
        <span className="inline-flex rounded-full border border-cyan-200/35 bg-cyan-200/10 px-4 py-1.5 font-sans text-[0.68rem] font-extrabold uppercase tracking-[0.2em] text-cyan-100">
          Perbandingan Organisasi Olahraga Kota Bandung
        </span>
        <h2 className="mt-6 font-sans text-4xl font-extrabold leading-tight text-white sm:text-5xl">
          Perbandingan{" "}
          <span className="text-sky-300">KONI &amp; NPCI</span>
        </h2>
      </div>

      <div className="mt-5 overflow-hidden rounded-2xl border border-[#d7e4f3] bg-white/90 shadow-sm">
        <div className="grid divide-y divide-[#d7e4f3] md:grid-cols-2 md:divide-x md:divide-y-0">
          <OrganizationHeader
            description="Non-Disabilitas"
            label="KONI"
            tone="green"
          />
          <OrganizationHeader
            description="Disabilitas"
            label="NPCI"
            tone="blue"
          />
        </div>
      </div>

      <div className="mt-5 overflow-hidden rounded-2xl border border-[#d7e4f3] bg-white shadow-sm">
        {comparisonRows.map((row) => (
          <div
            className="grid border-t border-[#d7e4f3] first:border-t-0 md:grid-cols-2"
            key={`${row.koni.title}-${row.npci.title}`}
          >
            <ComparisonCell className="md:border-r md:border-[#d7e4f3]" side="koni" {...row.koni} />
            <ComparisonCell side="npci" {...row.npci} />
          </div>
        ))}
      </div>

      <div className="mt-5 rounded-2xl bg-white px-5 py-4 shadow-sm">
        <p className="font-sans text-xs font-normal leading-6 text-[#60738f]">
          Sumber: <strong className="font-extrabold">KONI Kota Bandung</strong>{" "}
          dan <strong className="font-extrabold">NPCI Kota Bandung</strong>,
          2026
        </p>
      </div>
    </section>
  );
}

function OrganizationHeader({
  description,
  label,
  tone,
}: {
  description: string;
  label: string;
  tone: "green" | "blue";
}) {
  const colorClass =
    tone === "green"
      ? "border-emerald-300 bg-emerald-100 text-emerald-700"
      : "border-blue-300 bg-blue-100 text-blue-700";

  return (
    <div className="grid place-items-center px-5 py-6 text-center">
      <span
        className={`grid size-11 place-items-center rounded-2xl border ${colorClass}`}
        aria-hidden="true"
      >
        <TrophyIcon />
      </span>
      <p className="mt-3 font-sans text-lg font-extrabold text-[#102345]">
        {label}
      </p>
      <p className="mt-1 font-sans text-xs font-normal text-[#7185a3]">
        {description}
      </p>
    </div>
  );
}

function ComparisonCell({
  description,
  highlight,
  className = "",
  side,
  title,
}: {
  className?: string;
  description: string;
  highlight?: boolean;
  side: "koni" | "npci";
  title: string;
}) {
  return (
    <div
      className={`min-h-28 px-5 py-5 md:min-h-36 ${
        side === "koni" ? "bg-emerald-50/45" : "bg-rose-50/35"
      } ${className}`}
    >
      <div className="flex items-start gap-2">
        {highlight ? (
          <span className="mt-2 size-2 rounded-full bg-emerald-500" />
        ) : null}
        <div>
          <p className="font-sans text-base font-extrabold leading-6 text-[#102345]">
            {title}
          </p>
          {description ? (
            <p className="mt-2 font-sans text-sm font-normal leading-7 text-[#60738f]">
              {description}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function TrophyIcon() {
  return (
    <svg
      className="size-5"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M8 21h8" />
      <path d="M12 17v4" />
      <path d="M7 4h10v4a5 5 0 0 1-10 0V4Z" />
      <path d="M5 5H3v2a4 4 0 0 0 4 4" />
      <path d="M19 5h2v2a4 4 0 0 1-4 4" />
    </svg>
  );
}
