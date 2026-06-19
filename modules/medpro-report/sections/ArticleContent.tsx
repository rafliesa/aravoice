import type { ReactNode } from "react";
import { DesignLink } from "@/components/design-system/Primitives";

export default function ArticleContent({
  children,
  nextHref,
}: {
  children: ReactNode;
  nextHref: string;
}) {
  return (
    <section className="mt-9 max-w-none text-[#0a3358]">
      <div className="space-y-7">{children}</div>

      <div className="mt-12 flex justify-end">
        <DesignLink href={nextHref} variant="next">
          Halaman Berikutnya <span aria-hidden="true">→</span>
        </DesignLink>
      </div>
    </section>
  );
}
