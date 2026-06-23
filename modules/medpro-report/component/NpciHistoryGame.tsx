"use client";

import React, { useRef, useState, useEffect } from "react";

const totalFrames = 19;
const startFrame = 2;

type Milestone = {
  year: string;
  title: string;
  desc: string;
  style: React.CSSProperties;
  triggerFrame: number;
  trackX: number;
};

const milestones: Milestone[] = [
  {
    year: "1962",
    title: "Pendirian YPOC",
    desc: "Yayasan Pembina Olahraga Cacat (YPOC) didirikan di Solo pada 31 Oktober 1962. Secara struktural berada di bawah naungan KONI, dana dan fasilitas disalurkan melalui induk organisasi tersebut.",
    style: { top: "20.45%", left: "105%", width: "260px" },
    triggerFrame: 3,
    trackX: 47.81,
  },
  {
    year: "1993",
    title: "Menjadi BPOC, Posisi Tetap",
    desc: "YPOC bertransformasi menjadi Badan Pembina Olahraga Cacat (BPOC) dalam Musyawarah Olahraga Nasional (Musornas) YPOC ke-VII pada 31 Oktober - 1 November 1993 di Yogyakarta. Birokrasi dan alur pendanaan masih mengalir melalui ekosistem KONI.",
    style: { top: "33.92%", right: "105%", width: "260px" },
    triggerFrame: 7,
    trackX: 61.50,
  },
  {
    year: "2010",
    title: "Menjadi NPC Indonesia",
    desc: "Musyawarah Nasional Luar Biasa (Munaslub) 28 Juli 2010 di Surakarta, BPOC resmi menjadi National Paralympic Committee (NPC) Indonesia. Sesuai IPC, federasi olahraga disabilitas harus berdiri terpisah dari Komite Olimpiade. Di Kota Bandung, nama berubah menjadi NPCI Kota Bandung.",
    style: { top: "49.88%", left: "105%", width: "260px" },
    triggerFrame: 10,
    trackX: 65.70,
  },
  {
    year: "2014",
    title: "NPCI Kota Bandung Resmi Berpisah dari KONI Kota Bandung",
    desc: "Dana hibah dari pemerintah kini langsung ke NPCI, tidak melalui KONI. Ekosistem fasilitas yang dibangun KONI tidak ikut berpindah melainkan menjadi mitra dengan KONI.",
    style: { top: "65.88%", right: "105%", width: "260px" },
    triggerFrame: 13,
    trackX: 61.00,
  },
  {
    year: "2015",
    title: "Keputusan KONI Pusat No. 08/RA/2015",
    desc: "NPC Indonesia secara resmi mandiri dan tidak lagi menjadi anggota KONI pusat, kini NPCI dan KONI menjadi mitra yang setara.",
    style: { top: "87.95%", left: "105%", width: "260px" },
    triggerFrame: 17,
    trackX: 43.46,
  },
];

// Centerline coordinate path of the red track mapped as percentages of the 800x1666 canvas
const trackPath = [
  { x: 16.00, y: 3.96 },
  { x: 26.26, y: 7.98 },
  { x: 34.63, y: 11.94 },
  { x: 41.70, y: 15.97 },
  { x: 47.81, y: 19.99 },
  { x: 52.69, y: 23.95 },
  { x: 57.04, y: 27.97 },
  { x: 60.25, y: 31.93 },
  { x: 62.51, y: 35.95 },
  { x: 64.09, y: 39.98 },
  { x: 65.12, y: 43.94 },
  { x: 65.66, y: 47.96 },
  { x: 65.78, y: 51.92 },
  { x: 65.13, y: 55.94 },
  { x: 63.93, y: 59.96 },
  { x: 62.16, y: 63.93 },
  { x: 59.64, y: 67.95 },
  { x: 56.56, y: 71.91 },
  { x: 52.79, y: 75.93 },
  { x: 48.27, y: 79.95 },
  { x: 44.49, y: 83.91 },
  { x: 43.46, y: 87.94 },
  { x: 42.48, y: 91.90 },
  { x: 41.34, y: 95.92 }
];

export default function NpciHistoryGame() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return;

      const scrollRect = scrollRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // The scroll container has height = 500vh for a balanced scroll pacing
      const totalScrollable = scrollRect.height - viewportHeight;
      if (totalScrollable <= 0) return;

      // Scroll progress inside the container (0 when container top is at viewport top, 1 when bottom reaches viewport bottom)
      const progress = -scrollRect.top / totalScrollable;
      const clampedProgress = Math.max(0, Math.min(1, progress));
      setScrollProgress(clampedProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    // Initial call
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Preload background layers and mascot sprite on mount
  useEffect(() => {
    const assets = [
      "/2/sejarah-npci/webp/20.webp",
      "/2/sejarah-npci/webp/21.webp",
      "/2/sejarah-npci/22.png"
    ];
    assets.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Interpolate mascot position, rotation angle, and perspective scale along the track path based on progress
  const getMascotState = (progress: number) => {
    const index = progress * (trackPath.length - 1);
    const low = Math.floor(index);
    const high = Math.ceil(index);
    const ratio = index - low;

    // Interpolate positions
    const x = trackPath[low].x + ratio * (trackPath[high].x - trackPath[low].x);
    const y = trackPath[low].y + ratio * (trackPath[high].y - trackPath[low].y);

    // Calculate tangent slope for orientation/rotation (ensuring we don't divide by zero when low === high)
    let dx = 0;
    let dy = 0;
    if (high === low) {
      if (low < trackPath.length - 1) {
        dx = trackPath[low + 1].x - trackPath[low].x;
        dy = trackPath[low + 1].y - trackPath[low].y;
      } else {
        dx = trackPath[low].x - trackPath[low - 1].x;
        dy = trackPath[low].y - trackPath[low - 1].y;
      }
    } else {
      dx = trackPath[high].x - trackPath[low].x;
      dy = trackPath[high].y - trackPath[low].y;
    }
    
    // Scale dy by 2.0833 to account for the 1920x4000 image stretching aspect ratio (0.48)
    const realDx = dx * 1;
    const realDy = dy * 2.0833;
    const angleRad = Math.atan2(realDy, realDx);
    
    // Adjust tangent angle: upright stands facing down (90 degrees in trig), so subtract 95 for running lean forward
    let angleDeg = (angleRad * 180) / Math.PI - 95;

    // Running bounce bobbing (sine wave) and body roll/wobble to simulate a run
    const bobbing = Math.sin(progress * 150) * 0.35; // 0.35% vertical bounce
    const bodyRoll = Math.sin(progress * 150) * 4.5; // 4.5 degree left/right wobble

    // Perspective scale: starts larger at the top (1.0x) and grows even larger towards the bottom (2.2x)
    const scale = 1.0 + progress * 1.2;

    return {
      x,
      y: y + bobbing,
      angle: angleDeg + bodyRoll,
      scale,
      // Map progress to virtual active milestones frame (from 2 to 19)
      frame: Math.floor(progress * (19 - 2)) + 2
    };
  };

  const mascotState = getMascotState(scrollProgress);

  // Determine the active milestone for mobile/tablet viewports
  const activeMilestone = [...milestones]
    .reverse()
    .find((m) => mascotState.frame >= m.triggerFrame);

  // Sizing calculated to preserve the 1.64 aspect ratio of the mascot inside the stretched container
  const mascotWidth = 40;
  const mascotHeight = 31.48; // 40% width * 1.64 / 2.0833 vertical stretch ratio = 31.48%

  return (
    <section className="w-full my-12 font-sans select-none">
      {/* Main scroll track (controls the speed via height) */}
      <div ref={scrollRef} className="relative w-full h-[500vh]">
        
        {/* Pinned viewport screen - Transparent background, locks screen and centers content vertically */}
        <div
          className="sticky top-0 w-full h-screen flex items-center justify-center"
        >
          {/* Animating image container - Static size, transparent bg */}
          <div
            className="relative h-[80vh] max-h-[720px] aspect-[1920/4000] flex-shrink-0 scale-90 sm:scale-95 md:scale-100 lg:scale-105 transition-transform"
          >
            {/* 1. Static Clean Background Track (21.webp - contains red track, years, lines, but NO description boxes) */}
            <img
              src="/2/sejarah-npci/webp/21.webp"
              alt="NPCI History Track"
              className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none z-0"
              loading="eager"
            />

            {/* 2. Static Header Text (20.webp - contains the 'SEJARAH NPCI' title) */}
            <img
              src="/2/sejarah-npci/webp/20.webp"
              alt="NPCI History Header"
              className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none z-10"
              loading="eager"
            />

            {/* 3. Programmatically Positioned, Oriented & Perspective Scaled Mascot Sprite */}
            <img
              src="/2/sejarah-npci/22.png"
              alt="Running Mascot"
              className="absolute pointer-events-none select-none z-25 transition-all duration-75 ease-out"
              style={{
                width: `${mascotWidth}%`,
                height: `${mascotHeight}%`,
                left: `${mascotState.x - mascotWidth / 2}%`,
                top: `${mascotState.y - mascotHeight / 2}%`,
                transform: `rotate(${mascotState.angle}deg) scale(${mascotState.scale})`,
              }}
            />

            {/* Desktop Overlays: Render clean React cards positioned completely OUTSIDE the image frame */}
            {milestones.map((m) => {
              const isVisible = activeMilestone?.year === m.year;
              const isLeftCard = m.style.hasOwnProperty("right");
              const lineLeft = isLeftCard ? 0 : m.trackX;
              const lineWidth = isLeftCard ? m.trackX : (105 - m.trackX);

              return (
                <React.Fragment key={m.year}>
                  {/* Indicator Dot on the track */}
                  <div
                    style={{
                      top: m.style.top,
                      left: `${m.trackX}%`,
                    }}
                    className={`absolute hidden lg:block w-2.5 h-2.5 rounded-full bg-cyan-400 border-2 border-white shadow-[0_0_8px_#22d3ee] -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                      isVisible
                        ? "opacity-100 scale-100 z-15"
                        : "opacity-0 scale-50 z-0 pointer-events-none"
                    }`}
                  />

                  {/* Horizontal connecting line from dot to card */}
                  <div
                    style={{
                      top: m.style.top,
                      left: `${lineLeft}%`,
                      width: `${lineWidth}%`,
                    }}
                    className={`absolute hidden lg:block border-t-2 border-dashed border-cyan-400/40 h-0 -translate-y-1/2 transition-all duration-300 ${
                      isVisible ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                    }`}
                  />

                  {/* Description Card */}
                  <div
                    style={m.style}
                    className={`absolute hidden lg:block bg-[#0c2b5c]/95 border border-blue-400/25 rounded-xl p-3 shadow-xl text-left select-text transition-all duration-300 ${
                      isVisible
                        ? "opacity-100 scale-100 z-30"
                        : "opacity-0 scale-95 z-0 pointer-events-none"
                    }`}
                  >
                    <div className="flex justify-between items-center border-b border-white/10 pb-1 mb-1.5">
                      <span className="text-[10px] font-black text-cyan-400 tracking-wider">
                        MILESTONE
                      </span>
                      <span className="text-xs font-black text-amber-300">
                        {m.year}
                      </span>
                    </div>
                    <h4 className="text-[11px] lg:text-xs font-extrabold text-amber-300 leading-tight">
                      {m.title}
                    </h4>
                    <p className="text-[9.5px] lg:text-[10.5px] text-slate-100 mt-1 leading-relaxed font-medium">
                      {m.desc}
                    </p>
                  </div>
                </React.Fragment>
              );
            })}
          </div>

          {/* Mobile Overlay Card (hidden on desktop): Displays the active year description below the animation container */}
          <div className="absolute bottom-20 left-4 right-4 lg:hidden z-20 flex flex-col items-center">
            <div className="w-full max-w-[340px] bg-[#0c2b5c]/95 border border-blue-400/25 backdrop-blur-md rounded-2xl p-4 shadow-xl text-left transition-all duration-300">
              {activeMilestone ? (
                <div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-1.5 mb-2">
                    <span className="text-[9px] font-black uppercase tracking-[0.1em] text-cyan-400">
                      Milestone Sejarah
                    </span>
                    <span className="text-sm font-black text-amber-300">
                      {activeMilestone.year}
                    </span>
                  </div>
                  <h4 className="text-xs font-bold text-amber-300 leading-tight">
                    {activeMilestone.title}
                  </h4>
                  <p className="text-[11px] text-slate-200 mt-1.5 leading-relaxed font-medium">
                    {activeMilestone.desc}
                  </p>
                </div>
              ) : (
                <div className="text-center py-2">
                  <p className="text-xs text-slate-300 font-medium">
                    Scroll ke bawah untuk memulai perjalanan sejarah NPCI...
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Visual Indicator of scroll progress at bottom of screen - Light Glassmorphism styled */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-20 bg-white/80 border border-slate-200/80 px-4 py-2.5 rounded-full backdrop-blur-sm shadow-md">
            <span className="text-[9px] font-black uppercase tracking-[0.18em] text-[#001f3f]">
              Scroll to Move Mascot & Timeline
            </span>
            <div className="w-36 sm:w-44 bg-slate-200 h-1 rounded-full overflow-hidden">
              <div
                className="h-full bg-cyan-500 transition-all duration-75 ease-out"
                style={{
                  width: `${scrollProgress * 100}%`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
