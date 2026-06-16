import { ChartIcon, FlagIcon, PersonIcon } from "@/modules/donation/component/icons";

const values = [
  {
    title: "Lorem ipsum dolor sit amet",
    description:
      "Memberikan panggung yang layak bagi atlet disabilitas melalui liputan profesional dan mendalam di kancah nasional maupun internasional.",
    icon: <FlagIcon />,
  },
  {
    title: "Lorem ipsum dolor sit amet",
    description:
      "Mengembangkan panduan pemberitaan yang sensitif dan edukatif untuk menciptakan masyarakat yang lebih inklusif dan memahami keberagaman.",
    icon: <PersonIcon />,
  },
  {
    title: "Lorem ipsum dolor sit amet",
    description:
      "Menghasilkan laporan investigasi dan berbasis data mengenai infrastruktur serta kebijakan publik bagi penyandang disabilitas di Indonesia.",
    icon: <ChartIcon />,
  },
] as const;

export default function DonationValues() {
  return (
    <section className="bg-[#f7f7f7] px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="motion-fade-up text-center text-4xl font-extrabold tracking-tight">
          Mengapa Dukungan Anda Penting
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {values.map((value, index) => (
            <article
              key={value.description}
              className="motion-card motion-fade-up rounded-lg border border-[#d4d8e0] bg-[#fbf8f3] p-8"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <span className="text-[#9a5a00]">
                {value.icon}
              </span>
              <h3 className="mt-8 text-xl font-extrabold leading-7">
                {value.title}
              </h3>
              <p className="mt-5 text-sm leading-7 text-[#5d6574]">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
