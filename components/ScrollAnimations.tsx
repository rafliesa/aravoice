"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const MOTION_SELECTOR =
  ".motion-fade-up, .motion-slide-in-right, .motion-scale-in, .motion-bar-fill";
const VISIBLE_CLASS = "motion-in-view";

export default function ScrollAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      document
        .querySelectorAll<HTMLElement>(MOTION_SELECTOR)
        .forEach((element) => element.classList.add(VISIBLE_CLASS));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add(VISIBLE_CLASS);
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.12,
      },
    );

    const observeElement = (element: Element) => {
      if (element.classList.contains(VISIBLE_CLASS)) return;
      observer.observe(element);
    };

    const observeTree = (root: ParentNode) => {
      root
        .querySelectorAll<HTMLElement>(MOTION_SELECTOR)
        .forEach(observeElement);
    };

    observeTree(document);

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) return;
          if (node.matches(MOTION_SELECTOR)) observeElement(node);
          node.querySelectorAll<HTMLElement>(MOTION_SELECTOR).forEach(observeElement);
        });
      });
    });

    mutationObserver.observe(document.getElementById("site-shell") ?? document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      mutationObserver.disconnect();
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
