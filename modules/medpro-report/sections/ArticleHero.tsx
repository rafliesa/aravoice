import Image from "next/image";
import { StatusBadge } from "@/components/design-system/Primitives";
import ArticleControls from "@/modules/medpro-report/component/ArticleControls";

type ArticleHeroProps = {
  title: string;
  description: string;
  coverImageSrc?: string;
  coverImageCaption?: string;
};

export default function ArticleHero({
  title,
  description,
  coverImageSrc = "/1/hero.jpg",
  coverImageCaption = "Atlet angkat beban National Paralympic Committee of Indonesia (NPCI) Kota Bandung, Ono, beristirahat di rumahnya di Kota Bandung, Jawa Barat, pada 19 Juni, 2026. ",
}: ArticleHeroProps) {
  return (
    <section className="mt-8 overflow-hidden rounded-lg border border-[#cfc8bd] bg-white">
      <div className="relative min-h-[22rem] overflow-hidden sm:min-h-[30rem]">
        <Image
          alt={coverImageCaption}
          className="object-cover"
          fill
          priority
          sizes="(min-width: 1024px) 67rem, 100vw"
          src={coverImageSrc}
        />
        <div className="absolute inset-0 bg-[#061426]/20" />
        <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-[#061426]/95 via-[#061426]/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-7 pb-7 text-white sm:px-9 sm:pb-9">
          <StatusBadge tone="new">Liputan Khusus</StatusBadge>
          <h1 className="mt-5 max-w-5xl text-3xl font-extrabold uppercase leading-tight tracking-wide sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-white/90">
            {description}
          </p>
        </div>
      </div>

      {coverImageCaption && (
        <div className="px-7 pt-4 pb-1 border-b border-[#cfc8bd]/40 bg-zinc-50/20">
          <p className="font-sans text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
            {coverImageCaption}
          </p>
        </div>
      )}

      <ArticleControls />
    </section>
  );
}
