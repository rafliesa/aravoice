import type { Metadata } from "next";
import {
  BulbIcon,
  ColorScale,
  DESIGN_TOKENS,
  DesignButton,
  EditIcon,
  IconTile,
  LogoCard,
  MagicIcon,
  SearchField,
  ShapesIcon,
  ShowcasePanel,
  StatusBadge,
  TabBar,
  TagIcon,
  TrashIcon,
  TypeSpecimen,
} from "@/components/design-system/Primitives";
import {
  EditorialCard,
  InfographicCard,
  LatestArticles,
  SolutionCard,
} from "@/components/design-system/Editorial";

export const metadata: Metadata = {
  title: "Design System | ParaVoice",
  description: "Komponen, token, dan pola antarmuka ParaVoice.",
};

const latestArticles = [
  {
    category: "Para Data",
    title: "NPCI Kota Bandung: Event Melimpah, Anggaran 2026 Menciut",
    meta: "10 Mei 2026 • 5 menit baca",
  },
  {
    category: "Para Atlet",
    title: "Maulida Aulia: Melampaui Batas dengan Lompatan Harapan",
    meta: "08 Mei 2026 • 8 menit baca",
  },
  {
    category: "Para Edu",
    title: "Panduan Etika Jurnalistik dalam Liputan Disabilitas",
    meta: "05 Mei 2026 • 12 menit baca",
  },
];

const navigation = [
  ["foundations", "Foundations"],
  ["typography", "Typography"],
  ["elements", "UI Elements"],
  ["logos", "Logo"],
  ["content", "Content Cards"],
  ["infographics", "Infographics"],
] as const;

export default function DesignSystemPage() {
  return (
    <main className="bg-tertiary text-neutral flex-1">
      <div className="mx-auto max-w-[1440px] px-6 py-10">
        <header className="border-b border-zinc-300 pb-10">
          <p className="text-secondary-700 text-xs font-extrabold uppercase tracking-[0.2em]">
            ParaVoice
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Visual Guidelines
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600">
            Token dan komponen reusable untuk menjaga tampilan produk ParaVoice
            tetap konsisten di seluruh halaman.
          </p>
        </header>

        <div className="mt-10 grid gap-10 xl:grid-cols-[220px_minmax(0,1fr)]">
          <aside className="hidden xl:block">
            <nav className="sticky top-6 space-y-1 rounded-xl border border-zinc-200 bg-white p-3">
              {navigation.map(([href, label]) => (
                <a
                  key={href}
                  href={`#${href}`}
                  className="hover:bg-secondary-50 hover:text-secondary-800 block rounded-lg px-4 py-3 text-sm font-semibold text-zinc-600 transition-colors"
                >
                  {label}
                </a>
              ))}
            </nav>
          </aside>

          <div className="min-w-0 space-y-16">
            <section id="foundations" className="scroll-mt-8">
              <SectionHeading
                eyebrow="Foundations"
                title="Color palette"
                description="Warna inti yang menjadi fondasi tampilan editorial dan produk."
              />
              <div className="mt-7 grid gap-5 md:grid-cols-2">
                <ColorScale
                  name="Primary"
                  value={DESIGN_TOKENS.colors.primary}
                  token="primary"
                />
                <ColorScale
                  name="Secondary"
                  value={DESIGN_TOKENS.colors.secondary}
                  token="secondary"
                />
                <ColorScale
                  name="Tertiary"
                  value={DESIGN_TOKENS.colors.tertiary}
                  token="tertiary"
                />
                <ColorScale
                  name="Neutral"
                  value={DESIGN_TOKENS.colors.neutral}
                  token="neutral"
                />
              </div>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <TokenCard
                  label="Surface warm"
                  value={DESIGN_TOKENS.colors.surfaceWarm}
                  className="bg-surface-warm"
                />
                <TokenCard
                  label="Headline surface"
                  value={DESIGN_TOKENS.colors.headlineSurface}
                  className="bg-headline-surface"
                />
              </div>
            </section>

            <section id="typography" className="scroll-mt-8">
              <SectionHeading
                eyebrow="Typography"
                title="Plus Jakarta Sans"
                description="Satu keluarga font dengan hirarki yang jelas untuk headline, body, dan label."
              />
              <div className="mt-7 grid gap-5 lg:grid-cols-3">
                <TypeSpecimen
                  label="Headline"
                  sample="Aa"
                  detail="Plus Jakarta Sans / Bold"
                  variant="headline"
                />
                <TypeSpecimen
                  label="Body"
                  sample="Aa"
                  detail="Plus Jakarta Sans / Regular"
                />
                <TypeSpecimen
                  label="Label"
                  sample="AA"
                  detail="Plus Jakarta Sans / Capslock"
                  variant="label"
                />
              </div>
            </section>

            <section id="elements" className="scroll-mt-8">
              <SectionHeading
                eyebrow="Components"
                title="UI elements"
                description="Primitives dasar untuk aksi, status, pencarian, navigasi, dan sistem ikon."
              />
              <div className="mt-7 grid gap-5 lg:grid-cols-3">
                <ShowcasePanel title="Button states">
                  <div className="mt-6 flex flex-wrap gap-3">
                    <DesignButton>Primary</DesignButton>
                    <DesignButton variant="secondary">
                      Secondary <span aria-hidden="true">→</span>
                    </DesignButton>
                    <DesignButton variant="inverted">Inverted</DesignButton>
                    <DesignButton variant="next">
                      Next page <span aria-hidden="true">→</span>
                    </DesignButton>
                  </div>
                  <p className="mt-8 text-xs font-extrabold uppercase tracking-[0.14em] text-zinc-500">
                    Status & badges
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <StatusBadge tone="verified">Verified</StatusBadge>
                    <StatusBadge tone="pending">Pending</StatusBadge>
                    <StatusBadge tone="admin">Admin</StatusBadge>
                    <StatusBadge tone="new">New</StatusBadge>
                  </div>
                </ShowcasePanel>

                <ShowcasePanel title="Search & tabs">
                  <div className="mt-6">
                    <SearchField />
                  </div>
                  <p className="mt-8 text-xs font-extrabold uppercase tracking-[0.14em] text-zinc-500">
                    Tab bar styles
                  </p>
                  <div className="mt-4">
                    <TabBar
                      items={["Home", "Search", "Profile"]}
                      activeItem="Home"
                    />
                  </div>
                </ShowcasePanel>

                <ShowcasePanel title="Icon system">
                  <div className="mt-6 grid grid-cols-3 gap-2">
                    <IconTile tone="dark" label="Edit" icon={<EditIcon />} />
                    <IconTile tone="orange" label="Shapes" icon={<ShapesIcon />} />
                    <IconTile tone="cream" label="Idea" icon={<BulbIcon />} />
                    <IconTile tone="red" label="Delete" icon={<TrashIcon />} />
                    <IconTile tone="navy" label="Magic" icon={<MagicIcon />} />
                    <IconTile tone="light" label="Label" icon={<TagIcon />} />
                  </div>
                  <div className="bg-primary mt-3 inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white">
                    <TagIcon /> Label
                  </div>
                </ShowcasePanel>
              </div>

              <div className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 rounded-xl border border-zinc-200 bg-[#faf9f7] px-6 py-4 text-sm font-semibold text-[#544434]">
                {["Home", "Tentang Kami", "Para Edu", "Para Atlet", "Para Report", "Para Data", "Para Pop"].map(
                  (item, index) => (
                    <span
                      key={item}
                      className={
                        index === 0
                          ? "border-secondary text-secondary border-b-2 pb-1"
                          : ""
                      }
                    >
                      {item}
                    </span>
                  ),
                )}
              </div>
            </section>

            <section id="logos" className="scroll-mt-8">
              <SectionHeading
                eyebrow="Brand"
                title="Logo variants"
                description="Varian logo untuk latar terang, monokrom, dan latar gelap."
              />
              <div className="mt-7 grid gap-5 lg:grid-cols-3">
                <LogoCard label="Primary" variant="primary" />
                <LogoCard label="Black" variant="black" />
                <LogoCard label="White" variant="white" />
              </div>
            </section>

            <section id="content" className="scroll-mt-8">
              <SectionHeading
                eyebrow="Editorial"
                title="Content cards"
                description="Pola kartu utama, daftar berita terbaru, dan kartu solusi."
              />
              <div className="mt-7 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="grid gap-5">
                  <EditorialCard
                    category="Para Pop"
                    title="Medali Emas ASEAN Para Games 2026"
                    excerpt="Kebanggaan Indonesia dari cabang para-powerlifting yang berhasil memecahkan rekor."
                  />
                  <SolutionCard title="Apa Solusinya?">
                    Informasi harus mudah dipahami, berbasis data, dan tetap
                    berpihak pada pengalaman penyandang disabilitas.
                  </SolutionCard>
                </div>
                <LatestArticles
                  title="Terbaru di ParaVoice.id"
                  items={latestArticles}
                  allArticlesHref="/para-report"
                />
              </div>
            </section>

            <section id="infographics" className="scroll-mt-8">
              <SectionHeading
                eyebrow="Data visualization"
                title="Infographics"
                description="Komponen ringkas untuk menyampaikan perbandingan data dan insight utama."
              />
              <div className="mt-7">
                <InfographicCard
                  title="Infografis"
                  eyebrow="Survei pembaca 2026"
                  data={[
                    { label: "Artikel data", value: 78, tone: "primary" },
                    { label: "Liputan atlet", value: 42, tone: "muted" },
                    { label: "Konten edukasi", value: 28, tone: "muted" },
                  ]}
                  insight="Konten berbasis data membantu pembaca memahami isu olahraga disabilitas dengan konteks yang lebih kuat."
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div>
      <p className="text-secondary-700 text-xs font-extrabold uppercase tracking-[0.18em]">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-3xl font-extrabold tracking-tight">{title}</h2>
      <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-600">{description}</p>
    </div>
  );
}

function TokenCard({
  label,
  value,
  className,
}: {
  label: string;
  value: string;
  className: string;
}) {
  return (
    <article className="flex items-center gap-4 rounded-xl border border-zinc-200 bg-white p-3">
      <span className={`h-16 w-32 rounded-md border border-zinc-200 ${className}`} />
      <div>
        <p className="text-sm font-bold">{label}</p>
        <code className="mt-1 block text-xs text-zinc-500">{value}</code>
      </div>
    </article>
  );
}
