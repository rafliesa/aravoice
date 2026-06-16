import DonationForm from "@/components/donation/DonationForm";

const stats = [
  { value: "150+", label: "Liputan Khusus" },
  { value: "50+", label: "Atlet Disorot" },
  { value: "100%", label: "Independen" },
];

const allocations = [
  { label: "Liputan Lapangan", value: 60 },
  { label: "Riset Aksesibilitas", value: 25 },
  { label: "Operasional & Teknis", value: 15 },
];

const reports = [2021, 2022, 2023, 2024, 2025];

const values = [
  {
    title: "Kepercayaan & Akurasi",
    description:
      "Setiap laporan melewati verifikasi editorial agar informasi yang diterbitkan tetap akurat dan dapat dipercaya.",
    theme: "light",
    icon: <ShieldIcon />,
  },
  {
    title: "Aksesibilitas",
    description:
      "Kami mengembangkan pengalaman membaca yang dapat digunakan lebih banyak orang dengan kebutuhan yang beragam.",
    theme: "dark",
    icon: <AccessibilityIcon />,
  },
  {
    title: "Komunitas",
    description:
      "Dukungan Anda mempertemukan atlet, penggemar, pemerintah, dan sektor swasta dalam ekosistem yang setara.",
    theme: "orange",
    icon: <CommunityIcon />,
  },
] as const;

export default function DonationPage() {
  return (
    <main className="flex-1 bg-[#f7f7f7] text-[#101522]">
      <section className="bg-[#020718] text-white">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center sm:py-20">
          <h1 className="font-caslon text-4xl font-bold leading-[1.06] tracking-tight sm:text-6xl">
            Dukung Jurnalisme Inklusif
            <br />
            untuk Atlet Disabilitas
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-[#8d98b5]">
            Paravoice adalah media nirlaba independen. Setiap kontribusi Anda
            memastikan cerita tentang perjuangan dan prestasi atlet
            disabilitas tetap terdengar di seluruh penjuru negeri.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 py-4 lg:grid-cols-[1.4fr_1fr]">
        <DonationForm />

        <div className="space-y-5">
          <div className="space-y-3">
            {stats.map((stat) => (
              <article
                key={stat.label}
                className="rounded-lg border-l-4 border-[#F29100] bg-[#142044] px-6 py-5 text-white"
              >
                <p className="text-3xl font-extrabold text-[#ffd4aa]">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs font-bold uppercase tracking-wide text-[#8792b0]">
                  {stat.label}
                </p>
              </article>
            ))}
          </div>

          <article className="rounded-lg border border-zinc-300 bg-white p-7">
            <h2 className="font-caslon text-2xl font-bold">Alokasi Dana</h2>
            <div className="mt-7 space-y-6">
              {allocations.map((allocation) => (
                <div key={allocation.label}>
                  <div className="flex items-center justify-between gap-4 text-sm font-bold">
                    <span>{allocation.label}</span>
                    <span className="text-[#9A5A00]">{allocation.value}%</span>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-zinc-200">
                    <div
                      className="h-full rounded-full bg-[#ff9827]"
                      style={{ width: `${allocation.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 pb-20 pt-4 lg:grid-cols-[1.4fr_1fr]">
        <article
          id="hubungi-kami"
          className="rounded-lg bg-[#020718] p-7 text-white sm:p-9"
        >
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#F29100]">
            Hubungi Kami
          </p>
          <h2 className="mt-3 font-caslon text-3xl font-bold sm:text-4xl">
            Saluran Redaksi & Bisnis
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#8792b0]">
            Punya ide berita atau ingin bermitra? Tim kami siap berdiskusi
            melalui jalur komunikasi resmi berikut.
          </p>

          <address className="mt-7 space-y-5 not-italic">
            <ContactItem
              label="Email Redaksi"
              value="redaksi@paravoice.id"
              href="mailto:redaksi@paravoice.id"
              icon={<MailIcon />}
            />
            <ContactItem
              label="WhatsApp Kemitraan"
              value="+62 812-3456-7890"
              href="https://wa.me/6281234567890"
              icon={<ChatIcon />}
            />
            <ContactItem
              label="Kantor Pusat"
              value="Kuningan City, Level 7, Jakarta Selatan, Indonesia"
              icon={<MapIcon />}
            />
          </address>
        </article>

        <article className="rounded-lg bg-[#020718] p-7 text-white sm:p-9">
          <h2 className="text-center font-caslon text-3xl font-bold">
            Laporan Tahunan
          </h2>
          <p className="mt-2 text-center text-xs text-[#6f7b9b]">
            Transparansi adalah fondasi kepercayaan
          </p>

          <div className="mt-7 space-y-3">
            {reports.map((year) => (
              <a
                key={year}
                href={`mailto:redaksi@paravoice.id?subject=Permintaan%20Laporan%20Tahunan%20${year}`}
                className="flex items-center justify-between gap-4 border border-white/10 bg-[#0d1329] px-4 py-3 text-sm font-bold transition-colors hover:border-[#F29100] hover:bg-[#121b38]"
                title={`Minta laporan tahunan ${year} melalui email`}
              >
                <span>Laporan {year}</span>
                <DownloadIcon />
              </a>
            ))}
          </div>
        </article>
      </section>

      <section className="border-t border-zinc-300 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
          <div className="text-center">
            <h2 className="font-caslon text-3xl font-bold sm:text-4xl">
              Mengapa Dukungan Anda Berharga?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-600">
              Model bisnis nirlaba kami memastikan independensi editorial tanpa
              campur tangan kepentingan politik atau komersial.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {values.map((value) => (
              <article
                key={value.title}
                className={`flex min-h-64 flex-col items-center justify-center rounded-lg border p-7 text-center ${
                  value.theme === "dark"
                    ? "border-[#020718] bg-[#020718] text-white"
                    : value.theme === "orange"
                      ? "border-[#ff9827] bg-[#ff9827] text-[#3f2608]"
                      : "border-zinc-300 bg-white text-zinc-900"
                }`}
              >
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded ${
                    value.theme === "orange"
                      ? "bg-[#e88717] text-[#281500]"
                      : "bg-[#142044] text-[#ffd4aa]"
                  }`}
                >
                  {value.icon}
                </span>
                <h3 className="mt-6 font-caslon text-xl font-bold">
                  {value.title}
                </h3>
                <p
                  className={`mt-4 max-w-xs text-xs leading-6 ${
                    value.theme === "dark"
                      ? "text-[#8792b0]"
                      : value.theme === "orange"
                        ? "text-[#795019]"
                        : "text-zinc-600"
                  }`}
                >
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function ContactItem({
  label,
  value,
  href,
  icon,
}: {
  label: string;
  value: string;
  href?: string;
  icon: React.ReactNode;
}) {
  const content = (
    <>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-[#142044] text-[#F29100]">
        {icon}
      </span>
      <span>
        <span className="block text-xs uppercase tracking-[0.12em] text-[#8792b0]">
          {label}
        </span>
        <span className="mt-1 block text-sm font-semibold text-white">
          {value}
        </span>
      </span>
    </>
  );

  return href ? (
    <a
      href={href}
      className="flex items-center gap-4 transition-opacity hover:opacity-80"
    >
      {content}
    </a>
  ) : (
    <div className="flex items-center gap-4">{content}</div>
  );
}

function ShieldIcon() {
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
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function AccessibilityIcon() {
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
      <circle cx="12" cy="4" r="2" />
      <path d="M6 8h12M12 6v6M9 22l3-10 3 10M8 15l-3 4M16 15l3 4" />
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

function MailIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
      <path d="M8 9h8M8 13h5" />
    </svg>
  );
}

function MapIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0z" />
      <circle cx="12" cy="10" r="2" />
    </svg>
  );
}

function DownloadIcon() {
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
      className="text-[#ffd4aa]"
    >
      <path d="M12 3v12M7 10l5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  );
}
