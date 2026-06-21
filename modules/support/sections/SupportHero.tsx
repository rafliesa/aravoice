import { CommunityIcon, DatabaseIcon, MegaphoneIcon, ReportIcon } from "@/modules/support/component/icons";
import SupportForm from "@/modules/support/component/SupportForm";

const benefits = [
  {
    title: "Data Eksklusif Para-Sports",
    description:
      "Dapatkan akses ke data performa atlet, statistik kompetisi, dan liputan mendalam olahraga disabilitas eksklusif kami.",
    icon: <DatabaseIcon />,
  },
  {
    title: "Laporan Jurnalistik Mendalam",
    description:
      "Baca laporan investigasi, feature, dan liputan berbasis data eksklusif tentang isu olahraga disabilitas secara berkala.",
    icon: <ReportIcon />,
  },
  {
    title: "Jejaring Komunitas",
    description:
      "Terhubung langsung dengan atlet, pelatih, aktivis, dan sesama pendukung inklusivitas di seluruh Indonesia.",
    icon: <CommunityIcon />,
  },
  {
    title: "Dukung Jurnalisme Inklusif",
    description:
      "Paravox membantu Paravoice.id memproduksi liputan yang memberi ruang lebih adil bagi atlet disabilitas.",
    icon: <MegaphoneIcon />,
  },
];

export default function SupportHero() {
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-14 lg:grid-cols-[1.35fr_0.95fr] lg:gap-16 lg:py-20">
      <div className="motion-fade-up">
        <h1 className="mt-3 text-5xl font-bold leading-[1.04] tracking-tight sm:text-5xl">
          Jadilah Bagian dari Paravox!
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-600 sm:text-lg">
          Dengan menjadi bagian dari Paravox, kamu ikut menyuarakan isu atlet
          disabilitas melalui liputan, edukasi, kampanye, dan komunitas yang
          inklusif.
        </p>

        <div className="mt-12 space-y-8">
          {benefits.map((benefit, index) => (
            <article
              key={benefit.title}
              className="motion-fade-up grid grid-cols-[1.5rem_1fr] gap-3"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <span className="mt-1 text-secondary-800">{benefit.icon}</span>
              <div>
                <h2 className="text-xl font-bold sm:text-2xl">
                  {benefit.title}
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-7 text-zinc-600 sm:text-base">
                  {benefit.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="motion-slide-in-right">
        <SupportForm />
      </div>
    </section>
  );
}
