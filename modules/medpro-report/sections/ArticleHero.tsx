import { StatusBadge } from "@/components/design-system/Primitives";
import ArticleControls from "@/modules/medpro-report/component/ArticleControls";

type ArticleHeroProps = {
  subtitleLabel?: string;
  title: string;
  description: string;
};

export default function ArticleHero({
  subtitleLabel,
  title,
  description,
}: ArticleHeroProps) {
  return (
    <section className="mt-8 overflow-hidden rounded-lg border border-[#cfc8bd] bg-white">
      <div className="relative min-h-[22rem] overflow-hidden sm:min-h-[30rem]">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#f4f1e9_0%,#d8e0df_42%,#6d7681_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#061426]/90 via-[#061426]/38 to-transparent" />
        {subtitleLabel ? (
          <div className="absolute left-7 right-7 top-7 text-xs font-bold uppercase leading-5 tracking-wide text-[#082b4d] sm:left-9 sm:right-9 sm:top-9">
            {subtitleLabel}
          </div>
        ) : null}
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
