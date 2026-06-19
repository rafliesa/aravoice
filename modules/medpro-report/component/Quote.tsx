import type { ReactNode } from "react";

export default function Quote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="my-10 ml-auto max-w-4xl text-right font-caslon text-3xl font-bold leading-tight text-[#111827] sm:text-4xl">
      {children}
    </blockquote>
  );
}
