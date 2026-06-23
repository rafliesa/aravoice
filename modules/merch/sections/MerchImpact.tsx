import {
  AthletesIcon,
  CommunityIcon,
  JournalismIcon,
} from "@/modules/merch/component/icons";

const impactItems = [
  {
    title: "Mendukung Liputan Atlet Disabilitas",
    description:
      "Hasil penjualan mendanai reporter kami untuk meliput cerita, prestasi, dan realitas kehidupan atlet disabilitas di Indonesia.",
    icon: AthletesIcon,
  },
  {
    title: "Mendukung Jurnalisme Inklusif",
    description:
      "Kami memastikan setiap narasi ditulis dengan rasa hormat, dan integritas jurnalisme yang tinggi.",
    icon: JournalismIcon,
  },
  {
    title: "Memperkuat Komunitas ParaVoice",
    description:
      "Menyediakan platform bagi penyandang disabilitas untuk berbagi suara dan pengalaman mereka.",
    icon: CommunityIcon,
  },
];

export default function MerchImpact() {
  return (
    <section className="border-b border-[#d8dbe2] bg-[#f7f7f7] px-6 py-18">
      <div className="mx-auto max-w-7xl">
        <h1 className="motion-fade-up text-center text-4xl font-extrabold leading-tight text-[#070a1d] md:text-5xl">
          Setiap Pembelian Membawa Dampak
        </h1>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {impactItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="motion-card motion-fade-up rounded-2xl border border-[#d7dbe4] bg-white p-8 shadow-sm hover:shadow-md transition-all duration-300"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#9a5a00]/10 text-[#9a5a00]">
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="mt-6 text-xl font-extrabold leading-8 text-[#182036]">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-[#5d6574]">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
