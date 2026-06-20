import LawReferenceLink, {
  lawReferenceUrls,
} from "@/modules/medpro-report/component/LawReferenceLink";
import type { ReactNode } from "react";

export default function ConstitutionHighlightsInfographic() {
  return (
    <section className="overflow-hidden rounded-[1.75rem] bg-[#061025] p-5 shadow-2xl shadow-[#07102d]/20 sm:p-6">
      <div className="rounded-[1.5rem] bg-[radial-gradient(circle_at_22%_8%,#1d3e99_0%,#10295f_42%,#0a1836_100%)] px-5 py-7 sm:px-7">
        <span className="inline-flex rounded-full border border-yellow-300/30 bg-yellow-400/10 px-4 py-1.5 font-sans text-[0.68rem] font-extrabold uppercase tracking-[0.22em] text-yellow-300">
          Dasar Hukum Konstitusional
        </span>
        <p className="mt-6 font-sans text-xs font-extrabold uppercase tracking-[0.2em] text-slate-400 sm:text-sm">
          Jaminan Konstitusional bagi Penyandang Disabilitas
        </p>
        <h2 className="mt-3 font-sans text-5xl font-extrabold leading-none text-white sm:text-6xl">
          Highlights
          <span className="block text-sky-400">
            UUD <span className="text-yellow-300">1945</span>
          </span>
        </h2>
        <p className="mt-6 max-w-4xl font-sans text-base font-normal leading-8 text-slate-300 sm:text-lg">
          Jaminan hak bagi Penyandang Disabilitas tidak hanya diatur dalam
          kebijakan teknis, tetapi juga dipertegas dalam{" "}
          <strong className="font-extrabold text-yellow-300">
            <LawReferenceLink href={lawReferenceUrls.indonesiaConstitution}>
              Undang-Undang Dasar 1945
            </LawReferenceLink>
          </strong>{" "}
          sebagai dasar konstitusional{" "}
          <strong className="font-extrabold text-sky-300">
            kesetaraan, perlindungan, dan keadilan.
          </strong>
        </p>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <ConstitutionCard
          badge={
            <LawReferenceLink href={lawReferenceUrls.indonesiaConstitution}>
              Pasal 28H Ayat (2)
            </LawReferenceLink>
          }
          description="Setiap individu berhak atas perlakuan khusus dan kemudahan untuk memperoleh kesempatan dan manfaat yang sama demi mencapai keadilan dan persamaan."
          icon="scale"
          title="Kesetaraan Hukum"
          tone="blue"
        />
        <ConstitutionCard
          badge={
            <LawReferenceLink href={lawReferenceUrls.indonesiaConstitution}>
              Pasal 28I Ayat (1)
            </LawReferenceLink>
          }
          description="Hak-hak dasar dijamin sebagai hak yang melekat dan tidak dapat dikurangi dalam keadaan apa pun."
          footnote="Termasuk perlindungan terhadap hak-hak fundamental, seperti kebebasan beragama dan hak untuk bebas dari perlakuan yang merendahkan martabat manusia."
          icon="shield"
          title="Hak Asasi yang Melekat"
          tone="yellow"
        />
      </div>

      <div className="mt-5 rounded-2xl border border-white/8 bg-white/[0.025] px-5 py-4">
        <p className="font-sans text-xs font-normal leading-6 text-slate-400">
          Sumber:{" "}
          <LawReferenceLink href={lawReferenceUrls.indonesiaConstitution}>
            Undang-Undang Dasar Negara Republik Indonesia Tahun 1945
          </LawReferenceLink>
        </p>
      </div>
    </section>
  );
}

function ConstitutionCard({
  badge,
  description,
  footnote,
  icon,
  title,
  tone,
}: {
  badge: ReactNode;
  description: string;
  footnote?: string;
  icon: "scale" | "shield";
  title: string;
  tone: "blue" | "yellow";
}) {
  const isBlue = tone === "blue";

  return (
    <article className="rounded-2xl border border-white/8 bg-[radial-gradient(circle_at_28%_8%,#163878_0%,#10275c_44%,#0b1d45_100%)] p-5 text-white sm:p-6">
      <div className="flex items-center justify-between gap-4">
        <span
          className={`grid size-12 place-items-center rounded-2xl border ${
            isBlue
              ? "border-sky-300/20 bg-sky-400/10 text-sky-300"
              : "border-yellow-300/20 bg-yellow-400/10 text-yellow-300"
          }`}
          aria-hidden="true"
        >
          <ConstitutionIcon name={icon} />
        </span>
        <span
          className={`rounded-full border px-4 py-1.5 font-sans text-[0.65rem] font-extrabold uppercase tracking-[0.16em] ${
            isBlue
              ? "border-sky-300/20 bg-sky-400/10 text-sky-200"
              : "border-yellow-300/20 bg-yellow-400/10 text-yellow-300"
          }`}
        >
          {badge}
        </span>
      </div>

      <h3 className="mt-7 font-sans text-2xl font-extrabold leading-tight text-white">
        {title}
      </h3>
      <p className="mt-5 font-sans text-sm font-normal leading-7 text-slate-300 sm:text-base">
        {description}
      </p>
      {footnote ? (
        <p className="mt-4 font-sans text-xs italic leading-6 text-slate-400 sm:text-sm">
          {footnote}
        </p>
      ) : null}
    </article>
  );
}

function ConstitutionIcon({ name }: { name: "scale" | "shield" }) {
  if (name === "scale") {
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
        <path d="m16 16 3-8 3 8c-.9 1.2-2 2-3 2s-2.1-.8-3-2Z" />
        <path d="m2 16 3-8 3 8c-.9 1.2-2 2-3 2s-2.1-.8-3-2Z" />
        <path d="M7 21h10" />
        <path d="M12 3v18" />
        <path d="M3 7h18" />
      </svg>
    );
  }

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
      <path d="M12 3 5 6v5c0 5 3 8 7 10 4-2 7-5 7-10V6l-7-3Z" />
      <path d="m9 12 2 2 4-5" />
    </svg>
  );
}
