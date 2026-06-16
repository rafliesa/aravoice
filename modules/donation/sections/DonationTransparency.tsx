import {
  AuditIcon,
  ImpactIcon,
  ReportIcon,
} from "@/modules/donation/component/icons";

const transparencyItems = [
  {
    title: "Laporan Dana",
    description:
      "Akses rincian pemasukan dan pengeluaran setiap bulan secara terbuka.",
    action: "Unduh Laporan",
    icon: <ReportIcon />,
  },
  {
    title: "Dampak Program",
    description:
      "Lihat metrik keberhasilan dari donasi yang telah disalurkan kepada penerima.",
    action: "Lihat Dampak",
    icon: <ImpactIcon />,
  },
  {
    title: "Evaluasi Tahunan",
    description:
      "Laporan tahunan yang telah diaudit oleh pihak ketiga independen.",
    action: "Buka Arsip",
    icon: <AuditIcon />,
  },
];

export default function DonationTransparency() {
  return (
    <section className="border-t border-[#d4d8e0] bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-4xl font-extrabold tracking-tight">
          Komitmen Transparansi
        </h2>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {transparencyItems.map((item) => (
            <article
              key={item.title}
              className="flex gap-5 rounded-lg border border-[#cdd2dc] bg-white p-6"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-[#f1e9dd] text-[#9a5a00]">
                {item.icon}
              </span>
              <div>
                <h3 className="text-base font-extrabold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#5d6574]">
                  {item.description}
                </p>
                <a
                  href="mailto:redaksi@paravoice.id?subject=Permintaan%20Laporan%20Transparansi"
                  className="mt-4 inline-flex text-sm font-extrabold underline underline-offset-4"
                >
                  {item.action}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
