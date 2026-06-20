const needRows = [
  {
    icon: "bus",
    need: "Transportasi latihan rutin",
    reality: "Biaya Rp700-Rp800 ribu per bulan ditanggung sendiri oleh atlet.",
    tone: "cyan",
  },
  {
    icon: "wallet",
    need: "Insentif latihan yang rutin",
    reality:
      "Insentif Jan-Jun 2026: Rp0. SK baru turun Juni. Enam bulan latihan dari kantong sendiri.",
    tone: "amber",
  },
  {
    icon: "heart",
    need: "Biaya pengobatan & pemulihan cedera",
    reality:
      "Fisioterapi, pijat, cedera pergelangan, sebagian besar tidak diklaim karena tidak ada anggaran khusus.",
    tone: "rose",
  },
  {
    icon: "flask",
    need: "Suplemen latihan",
    reality:
      "Tergantung pelatih. Tidak semua atlet menerima bantuan suplemen.",
    tone: "violet",
  },
  {
    icon: "shield",
    need: "Jaminan kesehatan atlet",
    reality:
      "BPJS masih pribadi, bukan dari NPCI. Fasilitas medis hanya tersedia saat event besar.",
    tone: "emerald",
  },
];

export default function AthleteNeedsInfographic() {
  return (
    <section className="overflow-hidden rounded-[1.75rem] bg-[#071126] p-5 shadow-2xl shadow-[#07102d]/20 sm:p-6">
      <div className="rounded-[1.5rem] bg-[radial-gradient(circle_at_24%_10%,#203d97_0%,#0d2359_46%,#0a1836_100%)] px-5 py-7 sm:px-7">
        <span className="inline-flex rounded-full border border-orange-300/30 bg-orange-500/10 px-4 py-1.5 font-sans text-[0.68rem] font-extrabold uppercase tracking-[0.22em] text-orange-200">
          Infografis Kebutuhan Atlet Disabilitas
        </span>
        <h2 className="mt-6 max-w-2xl font-sans text-4xl font-extrabold leading-none text-white sm:text-5xl">
          Kebutuhan Atlet Disabilitas
        </h2>
        <p className="mt-3 font-sans text-2xl font-extrabold text-sky-300">
          Kebutuhan <span className="text-slate-500">vs</span>{" "}
          <span className="text-orange-400">Realita</span>
        </p>
        <p className="mt-6 max-w-4xl font-sans text-base font-normal leading-8 text-slate-300">
          Sejumlah kebutuhan dasar latihan masih banyak ditanggung sendiri oleh
          atlet disabilitas. Visual ini menyoroti{" "}
          <strong className="font-extrabold text-orange-300">
            kesenjangan antara kebutuhan latihan
          </strong>{" "}
          dan{" "}
          <strong className="font-extrabold text-rose-300">
            realita dukungan yang diterima.
          </strong>
        </p>
      </div>

      <div className="mt-5 rounded-2xl border border-white/8 bg-white/[0.025] p-4 sm:p-5">
        <div className="space-y-3">
          {needRows.map((row) => (
            <NeedRow key={row.need} {...row} />
          ))}
        </div>
      </div>

      <div className="mt-5 rounded-2xl border border-white/8 bg-white/[0.025] px-5 py-4">
        <p className="font-sans text-xs font-normal leading-6 text-slate-400">
          Sumber: Wawancara Kono Saipudin, Wiryadharma, NPCI Kota Bandung pada
          Juni 2026.
        </p>
      </div>
    </section>
  );
}

function NeedRow({
  icon,
  need,
  reality,
  tone,
}: {
  icon: string;
  need: string;
  reality: string;
  tone: string;
}) {
  return (
    <article className="grid overflow-hidden rounded-2xl border border-white/7 bg-[#0b142b] md:grid-cols-[1fr_3rem_1fr]">
      <div className="flex gap-4 bg-teal-950/40 p-4">
        <IconBadge icon={icon} tone={tone} />
        <div>
          <p className="font-sans text-[0.68rem] font-extrabold uppercase tracking-[0.12em] text-emerald-300">
            Kebutuhan
          </p>
          <p className="mt-1 font-sans text-sm font-bold leading-6 text-white sm:text-base">
            {need}
          </p>
        </div>
      </div>
      <div className="grid place-items-center bg-[#111a33] px-3 py-2 font-sans text-xs font-bold uppercase tracking-wide text-slate-500">
        vs
      </div>
      <div className="bg-[#1b1b2b] p-4">
        <p className="font-sans text-[0.68rem] font-extrabold uppercase tracking-[0.12em] text-orange-400">
          Realita
        </p>
        <p className="mt-1 font-sans text-sm font-normal leading-6 text-slate-300 sm:text-base">
          {reality}
        </p>
      </div>
    </article>
  );
}

function IconBadge({ icon, tone }: { icon: string; tone: string }) {
  const toneClass =
    {
      amber: "border-orange-300/20 bg-orange-400/10 text-orange-300",
      cyan: "border-cyan-300/20 bg-cyan-400/10 text-cyan-300",
      emerald: "border-emerald-300/20 bg-emerald-400/10 text-emerald-300",
      rose: "border-rose-300/20 bg-rose-400/10 text-rose-300",
      violet: "border-violet-300/20 bg-violet-400/10 text-violet-300",
    }[tone] ?? "border-cyan-300/20 bg-cyan-400/10 text-cyan-300";

  return (
    <span
      className={`grid size-11 shrink-0 place-items-center rounded-2xl border ${toneClass}`}
      aria-hidden="true"
    >
      <InfographicIcon name={icon} />
    </span>
  );
}

function InfographicIcon({ name }: { name: string }) {
  if (name === "bus") {
    return (
      <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="5" width="16" height="11" rx="2" />
        <path d="M7 16v2M17 16v2M7 9h10M8 13h.01M16 13h.01" />
      </svg>
    );
  }

  if (name === "wallet") {
    return (
      <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 7h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a3 3 0 0 1 3-3h12" />
        <path d="M16 12h4v4h-4a2 2 0 0 1 0-4Z" />
      </svg>
    );
  }

  if (name === "heart") {
    return (
      <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 21s-7-4.4-9-8a5 5 0 0 1 8-5 5 5 0 0 1 8 5c-2 3.6-9 8-9 8Z" />
        <path d="M8 13h2l1-3 2 6 1-3h2" />
      </svg>
    );
  }

  if (name === "flask") {
    return (
      <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 3h6M10 3v6l-4 8a3 3 0 0 0 2.7 4h6.6A3 3 0 0 0 18 17l-4-8V3" />
        <path d="M8 16h8" />
      </svg>
    );
  }

  return (
    <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 3 5 6v5c0 5 3 8 7 10 4-2 7-5 7-10V6l-7-3Z" />
      <path d="m9 12 2 2 4-5" />
    </svg>
  );
}
