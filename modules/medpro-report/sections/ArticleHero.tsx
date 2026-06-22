import Image from "next/image";
import { StatusBadge } from "@/components/design-system/Primitives";
import ArticleControls from "@/modules/medpro-report/component/ArticleControls";

type ArticleHeroProps = {
  title: string;
  description: string;
  coverImageSrc?: string;
};

export default function ArticleHero({
  title,
  description,
  coverImageSrc = "/hero/pak-ono.webp",
}: ArticleHeroProps) {
  return (
    <section className="mt-8 overflow-hidden rounded-lg border border-[#cfc8bd] bg-white">
      <div className="relative min-h-[22rem] overflow-hidden sm:min-h-[30rem]">
        <Image
          alt="Kono Saipudin saat sesi latihan angkat berat di NPCI Kota Bandung"
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

      <ArticleControls />
    </section>
  );
}
