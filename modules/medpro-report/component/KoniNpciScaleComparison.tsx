"use client";

import { useEffect, useRef, useState } from "react";
import { CloseIcon } from "@/components/design-system/Primitives";

type OrganizationData = {
  name: string;
  grant: string;
  cabsCount: string;
  facilities: string;
  extraInfo: string;
  aspects: {
    advocacy: { title: string; desc: string; status: "success" | "warning" };
    psychologist: { title: string; desc: string; status: "success" | "warning" };
    problemSolving: { title: string; desc: string; status: "success" | "warning" };
    support: { title: string; desc: string; status: "success" | "warning" };
    bpjs: { title: string; desc: string; status: "success" | "warning" };
  };
};

const npciData: OrganizationData = {
  name: "NPCI (National Paralympic Committee of Indonesia) Kota Bandung",
  grant: "Rp5 Miliar (APBD 2026)",
  cabsCount: "17 Cabang Olahraga",
  facilities: "Mayoritas sewa. Belum memiliki fasilitas latihan mandiri yang ramah disabilitas secara permanen di Kota Bandung.",
  extraInfo: "NPCI Kota Bandung memikul beban operasional ganda dengan anggaran yang jauh lebih minim. Dana hibah Rp5 Miliar tidak mencukupi untuk memenuhi beban operasional disabilitas, sehingga terpaksa memotong anggaran pembinaan atlet.",
  aspects: {
    advocacy: {
      title: "Bidang Advokasi",
      desc: "Tidak ada: bidang hukum yang ada hanya sebatas mengurusi klasifikasi ketunaan untuk pertandingan, bukan membela hak atlet.",
      status: "warning",
    },
    psychologist: {
      title: "Psikolog Atlet",
      desc: "Hanya disediakan saat menjelang pertandingan (kejuaraan besar) dan distribusinya tidak merata bagi seluruh atlet disabilitas.",
      status: "warning",
    },
    problemSolving: {
      title: "Penanganan Masalah",
      desc: "Diselesaikan secara informal/personal (pelatih bertindak sebagai mediator dadakan) dan tidak terdokumentasi secara organisasi.",
      status: "warning",
    },
    support: {
      title: "Pendampingan Atlet",
      desc: "Honor pendamping khusus tidak dianggarkan, padahal satu atlet disabilitas membutuhkan honor pelatih + honor pendamping khusus.",
      status: "warning",
    },
    bpjs: {
      title: "BPJS Kesehatan Atlet",
      desc: "BPJS Kesehatan hanya aktif menjelang kompetisi/pelatda. Di luar periode kompetisi, jaminan kesehatan dinonaktifkan.",
      status: "warning",
    },
  },
};

const koniData: OrganizationData = {
  name: "KONI (Komite Olahraga Nasional Indonesia) Kota Bandung",
  grant: "Rp35 Miliar (APBD 2026)",
  cabsCount: "80-81 Cabang Olahraga",
  facilities: "Sudah relatif mapan dan mandiri, memiliki kemitraan jangka panjang dan prasarana yang mapan selama bertahun-tahun.",
  extraInfo: "Meskipun sempat menghadapi pemotongan dari usulan awal, dana operasional KONI sangat memadai untuk menopang seluruh program kerja daerah dan pembinaan prestasi jangka panjang.",
  aspects: {
    advocacy: {
      title: "Bidang Advokasi",
      desc: "Ada: memiliki struktur hukum formal dan bidang advokasi yang jelas dalam organisasi untuk membela hak-hak atlet secara hukum.",
      status: "success",
    },
    psychologist: {
      title: "Psikolog Atlet",
      desc: "Rutin hadir sejak tahun 2023 untuk mendampingi kondisi mental dan psikologi atlet secara reguler di masa latihan.",
      status: "success",
    },
    problemSolving: {
      title: "Penanganan Masalah",
      desc: "Berjenjang dan formal: diawali di tingkat cabang olahraga (cabor), dan jika tidak selesai akan langsung di-backup oleh KONI daerah.",
      status: "success",
    },
    support: {
      title: "Pendampingan Atlet",
      desc: "Mekanisme pendampingan mapan. Atlet hanya membutuhkan pelatih umum tanpa pendampingan personal khusus tingkat tinggi.",
      status: "success",
    },
    bpjs: {
      title: "BPJS Kesehatan Atlet",
      desc: "Dibayar penuh secara rutin dan berkelanjutan, menjamin kesehatan atlet baik di dalam maupun di luar masa kejuaraan.",
      status: "success",
    },
  },
};

export default function KoniNpciScaleComparison() {
  const [activeModal, setActiveModal] = useState<"koni" | "npci" | null>(null);
  const [hoveredWeight, setHoveredWeight] = useState<"koni" | "npci" | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLElement>(null);
  const [tilted, setTilted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-trigger tilt animation when component enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !tilted) {
          setIsAnimating(true);
          setTilted(true);
          setTimeout(() => setIsAnimating(false), 1200);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!activeModal) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    const focusTimer = window.setTimeout(
      () => closeButtonRef.current?.focus(),
      0,
    );

    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveModal(null);
        return;
      }

      if (event.key !== "Tab") return;

      const dialog = closeButtonRef.current?.closest('[role="dialog"]');
      const focusable = dialog?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, [activeModal]);

  // Plays the tilting animation and then opens the modal
  function handleHotspotClick(target: "koni" | "npci") {
    if (isAnimating) return;

    if (tilted) {
      // Already tilted, just open modal
      setActiveModal(target);
      return;
    }

    // Play animation first
    setIsAnimating(true);
    setTilted(true);
    
    // Open modal after animation completes
    setTimeout(() => {
      setIsAnimating(false);
      setActiveModal(target);
    }, 1200); // matches the transform transition duration
  }

  function handleKeyDown(event: React.KeyboardEvent, target: "koni" | "npci") {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleHotspotClick(target);
    }
  }

  function restartAnimation() {
    if (isAnimating) return;
    setTilted(false);
  }

  const modalData = activeModal === "koni" ? koniData : npciData;
  
  // Rotating -12 degrees tilts the left side (NPCI) DOWN and the right side (KONI) UP
  const angle = tilted ? -12 : 0; 

  return (
    <article ref={containerRef} className="mx-auto my-8 max-w-3xl overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-md font-sans">
      {/* Header Info (Matching page layout style) */}
      <div className="border-b border-zinc-200 p-6 bg-zinc-50/30">
        <p className="text-secondary-700 text-xs font-extrabold uppercase tracking-[0.14em]">
          Analisis Beban Olahraga Disabilitas
        </p>
        <h3 className="mt-1 text-base font-bold text-[#082b4d]">
          Timbangan Beban Organisasi: NPCI vs KONI
        </h3>
        <p className="mt-1 text-xs text-zinc-500 leading-relaxed">
          NPCI memikul beban operasional ganda dengan anggaran yang jauh lebih minim. Klik bagian beban timbangan di bawah untuk melihat rincian datanya.
        </p>
      </div>

      {/* Vector Scale Interactive Visualization */}
      <div className="p-6">
        <div 
          className="relative w-full bg-zinc-50 rounded-2xl border border-zinc-150 p-4 flex flex-col items-center justify-center overflow-hidden"
        >
          <div className="w-full aspect-[60/34]">
            <svg
              viewBox="0 0 600 340"
              className="w-full h-full select-none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Gradients and Filters Definition */}
              <defs>
                {/* Shiny Gold/Bronze gradient for scale beam and details */}
                <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fef08a" />
                  <stop offset="35%" stopColor="#eab308" />
                  <stop offset="70%" stopColor="#ca8a04" />
                  <stop offset="100%" stopColor="#854d0e" />
                </linearGradient>
                <linearGradient id="gold-column-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#a16207" />
                  <stop offset="25%" stopColor="#fef08a" />
                  <stop offset="50%" stopColor="#eab308" />
                  <stop offset="75%" stopColor="#ca8a04" />
                  <stop offset="100%" stopColor="#854d0e" />
                </linearGradient>
                
                {/* Bronze/Metallic gradient for pans */}
                <linearGradient id="bronze-pan-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#b45309" />
                  <stop offset="40%" stopColor="#78350f" />
                  <stop offset="100%" stopColor="#451a03" />
                </linearGradient>

                {/* Stone/Marble base gradient */}
                <linearGradient id="base-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1e293b" />
                  <stop offset="50%" stopColor="#334155" />
                  <stop offset="100%" stopColor="#0f172a" />
                </linearGradient>
                <linearGradient id="base-top-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#475569" />
                  <stop offset="100%" stopColor="#1e293b" />
                </linearGradient>

                {/* Weights Gradients */}
                <linearGradient id="weight-npc-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#64748b" />
                  <stop offset="40%" stopColor="#334155" />
                  <stop offset="70%" stopColor="#1e293b" />
                  <stop offset="100%" stopColor="#0f172a" />
                </linearGradient>
                <linearGradient id="weight-koni-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#64748b" />
                  <stop offset="40%" stopColor="#334155" />
                  <stop offset="70%" stopColor="#1e293b" />
                  <stop offset="100%" stopColor="#0f172a" />
                </linearGradient>
                <linearGradient id="weight-knob-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fef08a" />
                  <stop offset="50%" stopColor="#eab308" />
                  <stop offset="100%" stopColor="#a16207" />
                </linearGradient>

                {/* Drop Shadows */}
                <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="5" stdDeviation="4" floodColor="#000" floodOpacity="0.18" />
                </filter>
                <filter id="glow-npc" x="-25%" y="-25%" width="150%" height="150%">
                  <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#ef4444" floodOpacity="0.45" />
                </filter>
                <filter id="glow-koni" x="-25%" y="-25%" width="150%" height="150%">
                  <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#10b981" floodOpacity="0.45" />
                </filter>
              </defs>

              {/* Base Stand & Column of the Scale (Static background) */}
              {/* Ground shadow */}
              <ellipse cx="300" cy="328" rx="150" ry="10" fill="rgba(0,0,0,0.08)" />

              {/* Marble Base Pedestal */}
              <rect x="200" y="300" width="200" height="22" rx="4" fill="url(#base-grad)" filter="url(#shadow)" />
              <polygon points="200,300 212,288 388,288 400,300" fill="url(#base-top-grad)" />
              <rect x="200" y="318" width="200" height="4" fill="#a16207" /> {/* Gold trim at base bottom */}

              {/* Flared Pedestal Foot */}
              <path d="M 270 288 C 270 262, 330 262, 330 288 Z" fill="url(#gold-grad)" filter="url(#shadow)" />
              <rect x="285" y="258" width="30" height="6" rx="2" fill="url(#gold-grad)" />

              {/* Main Central Stem/Column */}
              <rect x="293" y="110" width="14" height="150" fill="url(#gold-column-grad)" />
              <rect x="298" y="110" width="3" height="150" fill="#ffffff" opacity="0.25" />
              
              {/* Ornate Stem Collars */}
              <rect x="287" y="155" width="26" height="5" rx="1.5" fill="url(#gold-grad)" />
              <rect x="287" y="205" width="26" height="5" rx="1.5" fill="url(#gold-grad)" />

              {/* Dial Scale plate (behind needle) */}
              <path d="M 265 60 A 45 45 0 0 1 335 60" fill="none" stroke="#cbd5e1" strokeWidth="2.5" strokeDasharray="3,3" />
              
              {/* Central Pivot Joint Cap (Static Base) */}
              <circle cx="300" cy="110" r="12" fill="url(#gold-grad)" filter="url(#shadow)" />
              <circle cx="300" cy="110" r="4" fill="#451a03" />

              {/* Rotatable Beam & Hanger Group */}
              <g style={{ 
                transform: `rotate(${angle}deg)`, 
                transformOrigin: "300px 110px", 
                transition: "transform 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)" 
              }}>
                {/* Central Needle indicator (pointing up, rotates with beam) */}
                <path d="M 300 110 L 300 35 L 297 45 L 303 45 Z" fill="url(#gold-grad)" />

                {/* Main horizontal sculpted beam */}
                <path d="M 130 110 Q 300 90 470 110 Q 300 122 130 110 Z" fill="url(#gold-grad)" filter="url(#shadow)" />
                
                {/* Ornate details inside the beam */}
                <circle cx="200" cy="106" r="3" fill="#451a03" opacity="0.3" />
                <circle cx="250" cy="104" r="4" fill="#451a03" opacity="0.3" />
                <circle cx="350" cy="104" r="4" fill="#451a03" opacity="0.3" />
                <circle cx="400" cy="106" r="3" fill="#451a03" opacity="0.3" />
                
                {/* Hanging Loop Joints at ends */}
                <circle cx="130" cy="110" r="6" fill="none" stroke="url(#gold-grad)" strokeWidth="2.5" />
                <circle cx="470" cy="110" r="6" fill="none" stroke="url(#gold-grad)" strokeWidth="2.5" />

                {/* LEFT PAN GROUP (NPCI - Red theme) - Counter-rotates to stay vertical */}
                <g 
                  tabIndex={0}
                  role="button"
                  aria-label="Rincian NPCI"
                  onClick={() => handleHotspotClick("npci")}
                  onKeyDown={(e) => handleKeyDown(e, "npci")}
                  onMouseEnter={() => setHoveredWeight("npci")}
                  onMouseLeave={() => setHoveredWeight(null)}
                  className="cursor-pointer group/pan outline-none rounded"
                  style={{
                    transform: `rotate(${-angle}deg)`,
                    transformOrigin: "130px 110px",
                    transition: "transform 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)"
                  }}
                >
                  {/* 3D Hanging Beaded Chains */}
                  <line x1="130" y1="110" x2="75" y2="230" stroke="url(#gold-grad)" strokeWidth="1.5" strokeDasharray="3,3" />
                  <line x1="130" y1="110" x2="185" y2="230" stroke="url(#gold-grad)" strokeWidth="1.5" strokeDasharray="3,3" />
                  <line x1="130" y1="110" x2="130" y2="227" stroke="url(#gold-grad)" strokeWidth="1.2" strokeDasharray="2,2" opacity="0.6" /> {/* Back chain */}

                  {/* Pan Plate Dish (3D Curved) */}
                  <ellipse cx="130" cy="235" rx="55" ry="8" fill="rgba(0,0,0,0.15)" />
                  <path d="M 70 230 C 70 252, 190 252, 190 230 Z" fill="url(#bronze-pan-grad)" stroke="#451a03" strokeWidth="1" />
                  <ellipse cx="130" cy="230" rx="60" ry="6" fill="url(#gold-grad)" stroke="#451a03" strokeWidth="1" />

                  {/* Heavy Antique Weight (NPCI) */}
                  <g 
                    filter={hoveredWeight === "npci" ? "url(#glow-npc)" : "url(#shadow)"}
                    className="transition-all duration-300 group-hover/pan:scale-105"
                    style={{ transformOrigin: "130px 228px" }}
                  >
                    {/* Bell-shaped metal weight body */}
                    <path d="M 105 228 L 155 228 C 155 208, 148 200, 146 185 L 148 178 C 148 173, 144 170, 140 170 L 120 170 C 116 170, 112 173, 112 178 L 114 185 C 112 200, 105 208, 105 228 Z" fill="url(#weight-npc-grad)" stroke="#1e293b" strokeWidth="1" />
                    
                    {/* Top grip rings */}
                    <rect x="123" y="166" width="14" height="4" rx="1" fill="url(#gold-grad)" />
                    <circle cx="130" cy="161" r="8" fill="url(#weight-knob-grad)" />
                    <circle cx="130" cy="151" r="7" fill="none" stroke="url(#gold-grad)" strokeWidth="2.5" />
                    
                    {/* Brass Engraved Tag Label */}
                    <rect x="108" y="184" width="44" height="28" rx="3" fill="url(#gold-grad)" stroke="#854d0e" strokeWidth="1" />
                    <text x="130" y="196" fill="#111827" fontSize="9.5" fontWeight="900" textAnchor="middle" letterSpacing="0.2">NPCI</text>
                    <text x="130" y="206" fill="#111827" fontSize="6" fontWeight="900" textAnchor="middle" letterSpacing="0.1">KOTA BANDUNG</text>
                  </g>

                  {/* Floating Budget Badge */}
                  <g className="transition-transform duration-200 group-hover/pan:-translate-y-1">
                    <rect x="75" y="65" width="110" height="35" rx="8" fill="#FCE8E6" stroke="#EF4444" strokeWidth="1.5" className="filter drop-shadow-sm" />
                    <text x="130" y="78" fill="#B91C1C" fontSize="8" fontWeight="bold" textAnchor="middle">Anggaran NPCI</text>
                    <text x="130" y="91" fill="#991B1B" fontSize="9" fontWeight="extrabold" textAnchor="middle">Rp5 Miliar</text>
                  </g>

                  {/* Click Here Beacon */}
                  <g className="transition-transform duration-200 group-hover/pan:scale-105" style={{ transformOrigin: "130px 256px" }}>
                    <rect x="85" y="245" width="90" height="22" rx="11" fill="#FFFFFF" stroke="#EF4444" strokeWidth="1" className="filter drop-shadow-sm" />
                    <circle cx="102" cy="256" r="3" fill="#EF4444" className="animate-ping" />
                    <circle cx="102" cy="256" r="2" fill="#EF4444" />
                    <text x="138" y="259" fill="#991B1B" fontSize="7" fontWeight="black" textAnchor="middle" letterSpacing="0.5">KLIK DI SINI</text>
                  </g>
                </g>

                {/* RIGHT PAN GROUP (KONI - Green theme) - Counter-rotates to stay vertical */}
                <g 
                  tabIndex={0}
                  role="button"
                  aria-label="Rincian KONI"
                  onClick={() => handleHotspotClick("koni")}
                  onKeyDown={(e) => handleKeyDown(e, "koni")}
                  onMouseEnter={() => setHoveredWeight("koni")}
                  onMouseLeave={() => setHoveredWeight(null)}
                  className="cursor-pointer group/pan outline-none rounded"
                  style={{
                    transform: `rotate(${-angle}deg)`,
                    transformOrigin: "470px 110px",
                    transition: "transform 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)"
                  }}
                >
                  {/* 3D Hanging Beaded Chains */}
                  <line x1="470" y1="110" x2="415" y2="230" stroke="url(#gold-grad)" strokeWidth="1.5" strokeDasharray="3,3" />
                  <line x1="470" y1="110" x2="525" y2="230" stroke="url(#gold-grad)" strokeWidth="1.5" strokeDasharray="3,3" />
                  <line x1="470" y1="110" x2="470" y2="227" stroke="url(#gold-grad)" strokeWidth="1.2" strokeDasharray="2,2" opacity="0.6" /> {/* Back chain */}

                  {/* Pan Plate Dish (3D Curved) */}
                  <ellipse cx="470" cy="235" rx="55" ry="8" fill="rgba(0,0,0,0.15)" />
                  <path d="M 410 230 C 410 252, 530 252, 530 230 Z" fill="url(#bronze-pan-grad)" stroke="#451a03" strokeWidth="1" />
                  <ellipse cx="470" cy="230" rx="60" ry="6" fill="url(#gold-grad)" stroke="#451a03" strokeWidth="1" />

                  {/* Antique Weight (KONI) */}
                  <g 
                    filter={hoveredWeight === "koni" ? "url(#glow-koni)" : "url(#shadow)"}
                    className="transition-all duration-300 group-hover/pan:scale-105"
                    style={{ transformOrigin: "470px 228px" }}
                  >
                    {/* Bell-shaped metal weight body */}
                    <path d="M 445 228 L 495 228 C 495 208, 488 200, 486 185 L 488 178 C 488 173, 484 170, 480 170 L 460 170 C 456 170, 452 173, 452 178 L 454 185 C 452 200, 445 208, 445 228 Z" fill="url(#weight-koni-grad)" stroke="#1e293b" strokeWidth="1" />
                    
                    {/* Top grip rings */}
                    <rect x="463" y="166" width="14" height="4" rx="1" fill="url(#gold-grad)" />
                    <circle cx="470" cy="161" r="8" fill="url(#weight-knob-grad)" />
                    <circle cx="470" cy="151" r="7" fill="none" stroke="url(#gold-grad)" strokeWidth="2.5" />
                    
                    {/* Brass Engraved Tag Label */}
                    <rect x="448" y="184" width="44" height="28" rx="3" fill="url(#gold-grad)" stroke="#854d0e" strokeWidth="1" />
                    <text x="470" y="196" fill="#111827" fontSize="9.5" fontWeight="900" textAnchor="middle" letterSpacing="0.2">KONI</text>
                    <text x="470" y="206" fill="#111827" fontSize="6" fontWeight="900" textAnchor="middle" letterSpacing="0.1">KOTA BANDUNG</text>
                  </g>

                  {/* Floating Budget Badge */}
                  <g className="transition-transform duration-200 group-hover/pan:-translate-y-1">
                    <rect x="415" y="65" width="110" height="35" rx="8" fill="#E6F4EA" stroke="#10B981" strokeWidth="1.5" className="filter drop-shadow-sm" />
                    <text x="470" y="78" fill="#047857" fontSize="8" fontWeight="bold" textAnchor="middle">Anggaran KONI</text>
                    <text x="470" y="91" fill="#065f46" fontSize="9" fontWeight="extrabold" textAnchor="middle">Rp35 Miliar</text>
                  </g>

                  {/* Click Here Beacon */}
                  <g className="transition-transform duration-200 group-hover/pan:scale-105" style={{ transformOrigin: "470px 256px" }}>
                    <rect x="425" y="245" width="90" height="22" rx="11" fill="#FFFFFF" stroke="#10B981" strokeWidth="1" className="filter drop-shadow-sm" />
                    <circle cx="442" cy="256" r="3" fill="#10B981" className="animate-ping" />
                    <circle cx="442" cy="256" r="2" fill="#10B981" />
                    <text x="478" y="259" fill="#047857" fontSize="7" fontWeight="black" textAnchor="middle" letterSpacing="0.5">KLIK DI SINI</text>
                  </g>
                </g>
              </g>
            </svg>
          </div>

          {/* Reset Control Button */}
          {tilted && (
            <div className="absolute bottom-3 right-3 flex gap-2">
              <button
                type="button"
                disabled={isAnimating}
                onClick={restartAnimation}
                className="rounded-full bg-white/90 backdrop-blur-sm border border-zinc-200 p-2.5 text-zinc-600 hover:text-[#F29100] hover:bg-white hover:border-zinc-300 shadow-sm transition-all duration-200 flex items-center gap-1 text-[9px] font-black uppercase tracking-wider cursor-pointer"
                title="Reset Timbangan"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
                Reset Timbangan
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Footer Notes (Matching demographics source / footer styles) */}
      <div className="border-t border-zinc-200 bg-zinc-50 px-6 py-4">
        <p className="text-[10px] text-zinc-500 font-medium leading-relaxed">
          *Timbangan miring ke arah NPCI menandakan beban operasional dan hak yang harus diperjuangkan jauh lebih berat dengan alokasi dana yang minim. Klik bagian beban timbangan untuk melihat rincian aspek pembinaan.
        </p>
      </div>

      {/* Modal Dialog */}
      {activeModal && (
        <div
          className="fixed inset-0 z-[80] flex items-end justify-center bg-black/60 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setActiveModal(null);
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="scale-dialog-title"
            className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-t-2xl bg-white shadow-2xl sm:rounded-2xl flex flex-col font-sans border border-zinc-150"
          >
            {/* Modal Header */}
            <div className={`flex items-start justify-between gap-6 px-6 py-5 text-white shrink-0 ${
              activeModal === "koni" ? "bg-emerald-600" : "bg-[#0a3358]"
            }`}>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/80">
                  Rincian Anggaran & Aspek Pembinaan
                </p>
                <h2 id="scale-dialog-title" className="mt-1 text-lg font-bold">
                  {modalData.name}
                </h2>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setActiveModal(null)}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/20 transition-colors hover:bg-white/10"
                aria-label="Tutup detail organisasi"
              >
                <CloseIcon />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-5 text-[#0a3358] text-xs overflow-y-auto flex-1">
              <div>
                <span className="block text-[10px] font-extrabold uppercase text-zinc-400 tracking-wider">
                  Besaran Anggaran Hibah (APBD 2026)
                </span>
                <strong className={`text-lg font-black mt-0.5 block ${
                  activeModal === "koni" ? "text-emerald-700" : "text-red-600"
                }`}>
                  {modalData.grant}
                </strong>
              </div>

              <div>
                <span className="block text-[10px] font-extrabold uppercase text-zinc-400 tracking-wider">
                  Cakupan Cabang Olahraga
                </span>
                <p className="mt-1 font-bold text-zinc-800 text-sm">
                  {modalData.cabsCount}
                </p>
              </div>

              <div className="border-t border-zinc-150 pt-3">
                <span className="block text-[10px] font-extrabold uppercase text-zinc-400 tracking-wider">
                  Ketersediaan Fasilitas & Venue Latihan
                </span>
                <p className="mt-1 leading-relaxed text-zinc-600 text-xs">
                  {modalData.facilities}
                </p>
              </div>

              {/* Five Core Aspects Comparison List */}
              <div className="border-t border-zinc-150 pt-4 space-y-3">
                <span className="block text-[10px] font-extrabold uppercase text-zinc-400 tracking-wider mb-2">
                  Aspek Advokasi & Fasilitas Lapangan
                </span>
                
                {Object.entries(modalData.aspects).map(([key, aspect]) => {
                  const isSuccess = aspect.status === "success";
                  return (
                    <div key={key} className={`p-3 rounded-xl border flex gap-3 items-start transition-all duration-200 ${
                      isSuccess 
                        ? "bg-emerald-50/40 border-emerald-100/80 text-emerald-950" 
                        : "bg-red-50/40 border-red-100/80 text-red-950"
                    }`}>
                      {/* Status Icon */}
                      <span className={`flex size-5 shrink-0 items-center justify-center rounded-full text-[10px] font-extrabold ${
                        isSuccess ? "bg-emerald-100 text-emerald-800" : "bg-red-100 text-red-800"
                      }`}>
                        {isSuccess ? "✓" : "✗"}
                      </span>
                      <div>
                        <strong className="block text-[11px] font-black uppercase tracking-wide">
                          {aspect.title}
                        </strong>
                        <p className="mt-0.5 text-[11px] leading-relaxed opacity-95">
                          {aspect.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className={`mt-4 p-4 rounded-xl border italic text-[11px] leading-relaxed ${
                activeModal === "koni" 
                  ? "bg-emerald-50/20 border-emerald-100 text-emerald-800" 
                  : "bg-red-50/20 border-red-100 text-red-800"
              }`}>
                {modalData.extraInfo}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-zinc-200 bg-zinc-50 shrink-0 flex justify-end">
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="rounded-lg border border-zinc-300 px-4 py-2 text-xs font-bold transition-colors hover:bg-zinc-100 bg-white text-zinc-700 cursor-pointer"
              >
                Tutup Rincian
              </button>
            </div>
          </section>
        </div>
      )}
    </article>
  );
}
