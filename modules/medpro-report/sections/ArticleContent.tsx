import type { ReactNode } from "react";
import { DesignLink } from "@/components/design-system/Primitives";

export default function ArticleContent({
  children,
  nextHref,
  previousHref,
}: {
  children: ReactNode;
  nextHref?: string;
  previousHref?: string;
}) {
  return (
    <section className="mt-9 max-w-none text-[#0a3358]">
      <div className="space-y-7">{children}</div>

      <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        {previousHref ? (
          <DesignLink href={previousHref} variant="secondary">
            <span aria-hidden="true">←</span> Halaman Sebelumnya
          </DesignLink>
        ) : (
          <span aria-hidden="true" />
        )}
        {nextHref ? (
          <DesignLink href={nextHref} variant="next">
            Halaman Berikutnya <span aria-hidden="true">→</span>
          </DesignLink>
        ) : null}
      </div>
    </section>
  );
}
