"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type ArticleSubnavProps = {
  activeIndex: number;
  items: {
    label: string;
    href: string;
  }[];
};

export default function ArticleSubnav({
  activeIndex,
  items,
}: ArticleSubnavProps) {
  const navRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);
  const isDown = useRef(false);

  // Check if content overflows and update arrow states
  const updateArrows = () => {
    const nav = navRef.current;
    if (!nav) return;

    const { scrollLeft, scrollWidth, clientWidth } = nav;
    setShowLeftArrow(scrollLeft > 2);
    // Use a tolerance of 2px to avoid sub-pixel rounding issues
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 2);
  };

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    updateArrows();
    nav.addEventListener("scroll", updateArrows);
    window.addEventListener("resize", updateArrows);

    // Scroll to the active item on mount/active index change
    const activeItem = nav.children[activeIndex] as HTMLElement;
    if (activeItem) {
      const navRect = nav.getBoundingClientRect();
      const itemRect = activeItem.getBoundingClientRect();
      const offsetLeft = itemRect.left - navRect.left + nav.scrollLeft;
      const centerScroll = offsetLeft - (navRect.width - itemRect.width) / 2;
      nav.scrollTo({ left: centerScroll, behavior: "smooth" });
    }

    return () => {
      nav.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, [activeIndex, items.length]);

  const handleScroll = (direction: "left" | "right") => {
    const nav = navRef.current;
    if (!nav) return;

    const scrollAmount = 220;
    const targetScroll =
      direction === "left"
        ? nav.scrollLeft - scrollAmount
        : nav.scrollLeft + scrollAmount;

    nav.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });
  };

  // Mouse Drag to Scroll handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    const nav = navRef.current;
    if (!nav) return;

    isDown.current = true;
    setIsDragging(false);
    startX.current = e.pageX - nav.offsetLeft;
    scrollLeftStart.current = nav.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown.current = false;
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    isDown.current = false;
    // Set a tiny timeout so onClick link navigations can distinguish click from drag
    setTimeout(() => {
      setIsDragging(false);
    }, 50);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current) return;
    e.preventDefault();

    const nav = navRef.current;
    if (!nav) return;

    const x = e.pageX - nav.offsetLeft;
    const walk = (x - startX.current) * 1.5; // Drag speed multiplier
    
    // If we've dragged more than a tiny threshold, mark as dragging to prevent link triggers
    if (Math.abs(x - startX.current) > 5) {
      setIsDragging(true);
    }
    
    nav.scrollLeft = scrollLeftStart.current - walk;
  };

  // Prevent link click when dragging
  const handleLinkClick = (e: React.MouseEvent) => {
    if (isDragging) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <div className="relative mb-6 flex items-center w-full">
      {/* Left scroll button */}
      {showLeftArrow && (
        <button
          aria-label="Geser ke kiri"
          className="absolute left-0 z-20 flex size-9 items-center justify-center rounded-full border border-[#d9d2c7] bg-white/95 text-lg font-bold text-[#082b4d] shadow-md backdrop-blur-sm transition-all hover:scale-105 hover:bg-[#082b4d] hover:text-white cursor-pointer select-none active:scale-95"
          onClick={() => handleScroll("left")}
          type="button"
        >
          ‹
        </button>
      )}

      {/* Main navigation container */}
      <div
        ref={navRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className={`flex w-full gap-7 overflow-x-auto text-sm font-semibold text-[#544434] select-none scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] ${
          isDown.current ? "cursor-grabbing" : "cursor-grab"
        }`}
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {items.map((item, index) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={handleLinkClick}
            className={`shrink-0 pt-2 pb-2 transition-all duration-200 border-b-2 ${
              index === activeIndex
                ? "border-secondary-800 font-bold text-secondary-800"
                : "border-transparent hover:text-secondary-800"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Right scroll button */}
      {showRightArrow && (
        <button
          aria-label="Geser ke kanan"
          className="absolute right-0 z-20 flex size-9 items-center justify-center rounded-full border border-[#d9d2c7] bg-white/95 text-lg font-bold text-[#082b4d] shadow-md backdrop-blur-sm transition-all hover:scale-105 hover:bg-[#082b4d] hover:text-white cursor-pointer select-none active:scale-95"
          onClick={() => handleScroll("right")}
          type="button"
        >
          ›
        </button>
      )}
    </div>
  );
}

