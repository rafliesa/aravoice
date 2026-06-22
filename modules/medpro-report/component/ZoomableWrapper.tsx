"use client";

import { useState, useRef, useEffect, ReactNode } from "react";
import { CloseIcon } from "@/components/design-system/Primitives";

type ZoomableWrapperProps = {
  children: ReactNode;
  title?: string;
};

export default function ZoomableWrapper({ children, title }: ZoomableWrapperProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setScale(1);
      setPosition({ x: 0, y: 0 });
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleZoomIn = () => setScale((s) => Math.min(s + 0.25, 3));
  const handleZoomOut = () => setScale((s) => Math.max(s - 0.25, 0.5));
  const handleReset = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale <= 1) return;
    setIsDragging(true);
    dragStart.current = { x: e.clientX - position.x, y: e.clientY - position.y };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - dragStart.current.x,
      y: e.clientY - dragStart.current.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <>
      <div 
        className="group relative cursor-zoom-in rounded-xl border border-zinc-200 transition-all hover:border-secondary hover:shadow-md"
        onClick={() => setIsOpen(true)}
      >
        <div className="pointer-events-none">
          {children}
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all group-hover:bg-black/5">
          <span className="rounded-full bg-primary/90 px-4 py-2 text-xs font-bold text-white opacity-0 shadow-lg backdrop-blur-sm transition-all group-hover:opacity-100 flex items-center gap-1.5 border border-white/10">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
            </svg>
            Klik untuk memperbesar & zoom
          </span>
        </div>
      </div>

      {isOpen && (
        <div 
          className="fixed inset-0 z-[100] flex flex-col bg-black/90 p-4 sm:p-6 md:p-8 backdrop-blur-md"
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {/* Header controls */}
          <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4 text-white">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-secondary-500">
                ZOOM VIEW
              </span>
              <h4 className="text-base font-bold text-white sm:text-lg">
                {title || "Detail Grafik / Tabel"}
              </h4>
            </div>
            
            <div className="flex items-center gap-3">
              {/* Zoom buttons */}
              <div className="flex items-center gap-1 rounded-lg bg-white/5 p-1 border border-white/10">
                <button
                  type="button"
                  onClick={handleZoomOut}
                  className="flex h-8 w-8 items-center justify-center rounded bg-white/5 text-sm font-bold transition-colors hover:bg-white/20"
                  title="Zoom Out"
                >
                  −
                </button>
                <span className="min-w-16 text-center text-xs font-bold tracking-wider text-white/80">
                  {Math.round(scale * 100)}%
                </span>
                <button
                  type="button"
                  onClick={handleZoomIn}
                  className="flex h-8 w-8 items-center justify-center rounded bg-white/5 text-sm font-bold transition-colors hover:bg-white/20"
                  title="Zoom In"
                >
                  +
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white/60 hover:text-white"
                  title="Reset Zoom"
                >
                  Reset
                </button>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 transition-colors hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-white"
                aria-label="Tutup tampilan zoom"
              >
                <CloseIcon />
              </button>
            </div>
          </div>

          {/* Interactive display area */}
          <div 
            className="relative flex-1 overflow-hidden cursor-grab active:cursor-grabbing flex items-center justify-center mt-4 rounded-xl bg-zinc-950/40 border border-white/5"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
          >
            <div
              ref={contentRef}
              style={{
                transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                transition: isDragging ? "none" : "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                transformOrigin: "center center",
              }}
              className="max-w-full max-h-full p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-white rounded-xl shadow-2xl overflow-auto max-w-[90vw] max-h-[75vh] min-w-[280px]">
                {children}
              </div>
            </div>
          </div>
          
          <div className="mt-3 text-center text-[11px] text-white/40">
            {scale > 1 ? "Seret/drag area gambar untuk menggeser posisi" : "Gunakan tombol + / − untuk memperbesar atau memperkecil"}
          </div>
        </div>
      )}
    </>
  );
}
