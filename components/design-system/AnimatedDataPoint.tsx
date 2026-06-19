"use client";

import { useEffect, useRef, useState } from "react";

type AnimatedDataPointProps = {
  label: string;
  value: number;
  tone?: "primary" | "muted";
};

export default function AnimatedDataPoint({
  label,
  value,
  tone,
}: AnimatedDataPointProps) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const node = rowRef.current;
    if (!node) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      const animationFrame = requestAnimationFrame(() => {
        setDisplayValue(value);
        setHasAnimated(true);
      });
      return () => cancelAnimationFrame(animationFrame);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setHasAnimated(true);
        observer.disconnect();

        const startedAt = performance.now();
        const duration = 900;

        const tick = (now: number) => {
          const progress = Math.min((now - startedAt) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);

          setDisplayValue(Math.round(value * eased));
          if (progress < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
      },
      { threshold: 0.45 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={rowRef}>
      <div className="flex justify-between gap-4 text-sm">
        <span>{label}</span>
        <strong aria-label={`${value}%`}>{displayValue}%</strong>
      </div>
      <div className="mt-2 h-3 overflow-hidden rounded-full bg-zinc-200">
        <div
          className={`h-full rounded-full transition-[width] duration-[900ms] ease-out ${
            tone === "primary" ? "bg-secondary-700" : "bg-tertiary-600"
          }`}
          style={{ width: hasAnimated ? `${value}%` : "0%" }}
        />
      </div>
    </div>
  );
}
