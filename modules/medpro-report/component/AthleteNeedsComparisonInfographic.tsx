"use client";

import React from "react";
import Image from "next/image";

export default function AthleteNeedsComparisonInfographic() {
  return (
    <div className="my-8 font-sans w-full max-w-5xl mx-auto px-4">
      {/* ── Title ── */}
      <h3 className="text-center text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-[0.06em] text-[#2d323b] mb-6">
        Kebutuhan Atlet
      </h3>

      {/* ── Main Card ── */}
      <div className="overflow-hidden rounded-[20px] sm:rounded-[30px] shadow-xl bg-[#001f3f] w-full border border-white/5">
        
        {/* Header row */}
        <div className="grid grid-cols-[1.3fr_0.8fr_1.3fr] sm:grid-cols-[1.4fr_0.9fr_1.4fr] md:grid-cols-[1.5fr_1fr_1.5fr] items-stretch">
          {/* DISABILITAS Header */}
          <div className="bg-[#001f3f] text-white flex flex-col justify-center items-center px-4 py-5 md:py-6 border-b-2 border-white">
            <span className="text-xs sm:text-base md:text-lg font-black uppercase tracking-[0.08em] text-center">
              Disabilitas
            </span>
          </div>

          {/* VS Header */}
          <div className="bg-white text-[#001f3f] flex flex-col justify-center items-center px-2 py-5 md:py-6 border-x border-[#2f465e] border-b-2 border-[#2d323b]">
            <span className="text-[10px] sm:text-xs md:text-sm font-black tracking-widest text-center text-[#2d323b]">
              VS
            </span>
          </div>

          {/* NON DISABILITAS Header */}
          <div className="bg-[#001f3f] text-white flex flex-col justify-center items-center px-4 py-5 md:py-6 border-b-2 border-white">
            <span className="text-xs sm:text-base md:text-lg font-black uppercase tracking-[0.08em] text-center">
              Non Disabilitas
            </span>
          </div>
        </div>

        {/* Row 1: Kursi Roda Harian */}
        <div className="grid grid-cols-[1.3fr_0.8fr_1.3fr] sm:grid-cols-[1.4fr_0.9fr_1.4fr] md:grid-cols-[1.5fr_1fr_1.5fr] items-stretch">
          {/* Left: Disabilitas */}
          <div className="bg-[#001f3f] text-white flex items-center justify-start pl-4 sm:pl-6 md:pl-10 pr-2 py-5 border-b border-dashed border-[#374f68]">
            <div className="flex flex-col gap-1 text-[11px] sm:text-[13px] md:text-[15px] leading-relaxed">
              <div>
                <span className="font-extrabold text-white">Rp4 juta</span>{" "}
                <span className="text-white/80 text-[10px] sm:text-xs md:text-sm">(Tiongkok)</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-white/60">→</span>{" "}
                <span className="font-extrabold text-white">Rp6,7 juta</span>{" "}
                <span className="text-white/80 text-[10px] sm:text-xs md:text-sm">(Tiba di Bandung)</span>
              </div>
            </div>
          </div>
          {/* Center: Illustration & Title */}
          <div className="bg-white flex items-center justify-between px-2 sm:px-4 py-4 border-x border-[#2f465e] border-b border-dashed border-[#b7babc]">
            <div className="flex items-center justify-between w-full gap-1.5 sm:gap-2">
              <div className="relative w-10 sm:w-14 md:w-16 aspect-square flex-shrink-0 flex items-center justify-center">
                <Image
                  src="/2/kursi_roda_harian.png"
                  alt="Kursi Roda Harian"
                  width={193}
                  height={177}
                  className="object-contain max-h-full max-w-full"
                />
              </div>
              <span className="font-black text-[8px] sm:text-[10px] md:text-[11px] tracking-wider text-[#001f3f] leading-tight text-right uppercase flex-grow">
                Kursi Roda Harian
              </span>
            </div>
          </div>
          {/* Right: Non Disabilitas */}
          <div className="bg-[#001f3f] text-white flex items-center justify-center px-4 py-5 border-b border-dashed border-[#374f68]">
            <div className="text-[11px] sm:text-[13px] md:text-[15px] font-normal text-white/80 text-center">
              Tidak Diperlukan
            </div>
          </div>
        </div>

        {/* Row 2: Kursi Roda Balap */}
        <div className="grid grid-cols-[1.3fr_0.8fr_1.3fr] sm:grid-cols-[1.4fr_0.9fr_1.4fr] md:grid-cols-[1.5fr_1fr_1.5fr] items-stretch">
          {/* Left: Disabilitas */}
          <div className="bg-[#001f3f] text-white flex items-center justify-start pl-4 sm:pl-6 md:pl-10 pr-2 py-5 border-b border-dashed border-[#374f68]">
            <div className="flex flex-col gap-1 text-[11px] sm:text-[13px] md:text-[15px] leading-relaxed">
              <div>
                <span className="font-extrabold text-white">Rp140–210 juta</span>{" "}
                <span className="text-white/80 text-[10px] sm:text-xs md:text-sm">(Amerika, Titanium)</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-white/60">→</span>{" "}
                <span className="font-extrabold text-white">Rp100 juta</span>{" "}
                <span className="text-white/80 text-[10px] sm:text-xs md:text-sm">(Indonesia, baja)</span>
              </div>
            </div>
          </div>
          {/* Center: Illustration & Title */}
          <div className="bg-white flex items-center justify-between px-2 sm:px-4 py-4 border-x border-[#2f465e] border-b border-dashed border-[#b7babc]">
            <div className="flex items-center justify-between w-full gap-1.5 sm:gap-2">
              <div className="relative w-10 sm:w-14 md:w-16 aspect-square flex-shrink-0 flex items-center justify-center">
                <Image
                  src="/2/kursi_roda_balap.png"
                  alt="Kursi Roda Balap"
                  width={193}
                  height={170}
                  className="object-contain max-h-full max-w-full"
                />
              </div>
              <span className="font-black text-[8px] sm:text-[10px] md:text-[11px] tracking-wider text-[#001f3f] leading-tight text-right uppercase flex-grow">
                Kursi Roda Balap
              </span>
            </div>
          </div>
          {/* Right: Non Disabilitas */}
          <div className="bg-[#001f3f] text-white flex items-center justify-center px-4 py-5 border-b border-dashed border-[#374f68]">
            <div className="text-[11px] sm:text-[13px] md:text-[15px] font-normal text-white/80 text-center">
              Tidak Diperlukan
            </div>
          </div>
        </div>

        {/* Row 3: Catur */}
        <div className="grid grid-cols-[1.3fr_0.8fr_1.3fr] sm:grid-cols-[1.4fr_0.9fr_1.4fr] md:grid-cols-[1.5fr_1fr_1.5fr] items-stretch">
          {/* Left: Disabilitas */}
          <div className="bg-[#001f3f] text-white flex items-center justify-start pl-4 sm:pl-6 md:pl-10 pr-2 py-5 border-b border-dashed border-[#374f68]">
            <div className="text-[11px] sm:text-[13px] md:text-[15px] leading-relaxed text-white">
              <span className="font-extrabold text-white">Rp7,5 juta</span>
              <span className="text-white/80 text-[10px] sm:text-xs md:text-sm">/unit (edisi Braille/Taktil)</span>
            </div>
          </div>
          {/* Center: Title & Illustration */}
          <div className="bg-white flex items-center justify-between px-2 sm:px-4 py-4 border-x border-[#2f465e] border-b border-dashed border-[#b7babc]">
            <div className="flex items-center justify-between w-full gap-1.5 sm:gap-2">
              <span className="font-black text-[8px] sm:text-[10px] md:text-[11px] tracking-wider text-[#001f3f] leading-tight text-left uppercase flex-grow">
                Catur
              </span>
              <div className="relative w-10 sm:w-14 md:w-16 aspect-square flex-shrink-0 flex items-center justify-center">
                <Image
                  src="/2/catur.png"
                  alt="Catur"
                  width={202}
                  height={166}
                  className="object-contain max-h-full max-w-full"
                />
              </div>
            </div>
          </div>
          {/* Right: Non Disabilitas */}
          <div className="bg-[#001f3f] text-white flex items-center justify-center px-4 py-5 border-b border-dashed border-[#374f68]">
            <div className="text-[11px] sm:text-[13px] md:text-[15px] font-extrabold text-white text-center">
              Rp2 juta
            </div>
          </div>
        </div>

        {/* Row 4: Guide Rail */}
        <div className="grid grid-cols-[1.3fr_0.8fr_1.3fr] sm:grid-cols-[1.4fr_0.9fr_1.4fr] md:grid-cols-[1.5fr_1fr_1.5fr] items-stretch">
          {/* Left: Disabilitas */}
          <div className="bg-[#001f3f] text-white flex items-center justify-start pl-4 sm:pl-6 md:pl-10 pr-2 py-5 border-b border-dashed border-[#374f68]">
            <div className="flex flex-col gap-1 text-[11px] sm:text-[13px] md:text-[15px] leading-relaxed text-white">
              <div className="font-normal text-white/90">
                Tersedia dengan jumlah terbatas
              </div>
              <div className="flex items-center gap-1">
                <span className="text-white/60">→</span>{" "}
                <span className="font-extrabold text-white">baru ada sejak 2014</span>
              </div>
            </div>
          </div>
          {/* Center: Title & Illustration */}
          <div className="bg-white flex items-center justify-between px-2 sm:px-4 py-4 border-x border-[#2f465e] border-b border-dashed border-[#b7babc]">
            <div className="flex items-center justify-between w-full gap-1.5 sm:gap-2">
              <span className="font-black text-[8px] sm:text-[10px] md:text-[11px] tracking-wider text-[#001f3f] leading-tight text-left uppercase flex-grow">
                Guide Rail
              </span>
              <div className="relative w-10 sm:w-14 md:w-16 aspect-square flex-shrink-0 flex items-center justify-center">
                <Image
                  src="/2/guide_rail.png"
                  alt="Guide Rail"
                  width={187}
                  height={164}
                  className="object-contain max-h-full max-w-full"
                />
              </div>
            </div>
          </div>
          {/* Right: Non Disabilitas */}
          <div className="bg-[#001f3f] text-white flex items-center justify-center px-4 py-5 border-b border-dashed border-[#374f68]">
            <div className="text-[11px] sm:text-[13px] md:text-[15px] font-normal text-white/80 text-center">
              Tidak Diperlukan
            </div>
          </div>
        </div>

        {/* Row 5: Shuttlecock */}
        <div className="grid grid-cols-[1.3fr_0.8fr_1.3fr] sm:grid-cols-[1.4fr_0.9fr_1.4fr] md:grid-cols-[1.5fr_1fr_1.5fr] items-stretch">
          {/* Left: Disabilitas */}
          <div className="bg-[#001f3f] text-white flex items-center justify-start pl-4 sm:pl-6 md:pl-10 pr-2 py-5">
            <div className="text-[11px] sm:text-[13px] md:text-[15px] leading-relaxed text-white">
              Bisa habis <span className="font-extrabold text-white">1 slop/hari</span>
            </div>
          </div>
          {/* Center: Illustrations & Title */}
          <div className="bg-white flex items-center justify-between px-1.5 sm:px-3 py-4 border-x border-[#2f465e]">
            <div className="flex items-center justify-between w-full gap-1">
              <div className="relative w-7 sm:w-10 md:w-12 aspect-square flex-shrink-0 flex items-center justify-center">
                <Image
                  src="/2/shuttlecock_left.png"
                  alt="Shuttlecock Left"
                  width={86}
                  height={107}
                  className="object-contain max-h-full max-w-full"
                />
              </div>
              <span className="font-black text-[8px] sm:text-[10px] md:text-[11px] tracking-wider text-[#001f3f] leading-tight text-center uppercase flex-grow">
                Shuttlecock
              </span>
              <div className="relative w-7 sm:w-10 md:w-12 aspect-square flex-shrink-0 flex items-center justify-center">
                <Image
                  src="/2/shuttlecock_right.png"
                  alt="Shuttlecock Right"
                  width={108}
                  height={134}
                  className="object-contain max-h-full max-w-full"
                />
              </div>
            </div>
          </div>
          {/* Right: Non Disabilitas */}
          <div className="bg-[#001f3f] text-white flex items-center justify-center px-4 py-5">
            <div className="text-[11px] sm:text-[13px] md:text-[15px] leading-relaxed text-white text-center">
              Bisa habis <span className="font-extrabold text-white">1 slop/hari</span>
            </div>
          </div>
        </div>

      </div>

      {/* ── Source footer ── */}
      <p className="mt-3 text-[10px] sm:text-[11px] text-[#2d323b]/70 leading-relaxed font-medium">
        <strong>*Sumber:</strong> Aden Ahmad (Atlet Tennis), Muslim (Atlet Catur), Bambang Basuki (Atlet Bowling), Djumono Sekretaris Umum NPCI Kota Bandung.
      </p>
    </div>
  );
}
