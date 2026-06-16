import ContactItem from "@/components/donation/ContactItem";
import { ChatIcon, DownloadIcon, MailIcon, MapIcon } from "@/components/donation/icons";

const reports = [2021, 2022, 2023, 2024, 2025];

export default function DonationContactReports() {
  return (
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
  );
}
