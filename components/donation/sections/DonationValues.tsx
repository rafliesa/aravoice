import { AccessibilityIcon, CommunityIcon, ShieldIcon } from "@/components/donation/icons";

const values = [
  {
    title: "Kepercayaan & Akurasi",
    description:
      "Setiap laporan melewati verifikasi editorial agar informasi yang diterbitkan tetap akurat dan dapat dipercaya.",
    theme: "light" as const,
    icon: <ShieldIcon />,
  },
  {
    title: "Aksesibilitas",
    description:
      "Kami mengembangkan pengalaman membaca yang dapat digunakan lebih banyak orang dengan kebutuhan yang beragam.",
    theme: "dark" as const,
    icon: <AccessibilityIcon />,
  },
  {
    title: "Komunitas",
    description:
      "Dukungan Anda mempertemukan atlet, penggemar, pemerintah, dan sektor swasta dalam ekosistem yang setara.",
    theme: "orange" as const,
    icon: <CommunityIcon />,
  },
] as const;

export default function DonationValues() {
  return (
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
  );
}
