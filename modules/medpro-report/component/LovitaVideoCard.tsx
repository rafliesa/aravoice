"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { CloseIcon } from "@/components/design-system/Primitives";

type LovitaVideoCardProps = {
  videoSrc?: string;
  title?: string;
  description?: string;
};

export default function LovitaVideoCard({
  videoSrc = "/4/lovita.mp4",
  title = "VIDEO KESAKSIAN LOVITA",
  description = "Kisah bonus medali perak Lovita Uki Damayanti di Peparnas 2024",
}: LovitaVideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [srcError, setSrcError] = useState(false);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.error("Video playback failed", err);
      });
    }
  };

  return (
    <div className="mx-auto my-8 max-w-md overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-md transition-all duration-300 hover:shadow-lg font-sans">
      {/* Video Display Container */}
      <div className="relative aspect-[16/9] bg-zinc-950 flex items-center justify-center">
        <video
          ref={videoRef}
          src={videoSrc}
          className="w-full h-full object-cover"
          preload="metadata"
          onClick={togglePlay}
          onEnded={() => setIsPlaying(false)}
          onError={() => setSrcError(true)}
        />

        {/* Overlay controls when paused or on error */}
        {(!isPlaying || srcError) && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 p-4 text-center">
            {srcError ? (
              <>
                <div className="size-12 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center mb-2">
                  <span className="text-red-400 text-lg">⚠️</span>
                </div>
                <span className="text-[10px] font-bold text-red-400 uppercase tracking-widest block">
                  {title}
                </span>
                <p className="text-xs text-zinc-300 mt-1 max-w-xs leading-normal">
                  {description}
                </p>
              </>
            ) : (
              <button
                type="button"
                onClick={togglePlay}
                className="flex size-14 items-center justify-center rounded-full bg-secondary-700 hover:bg-secondary-800 transition-all text-white shadow-lg cursor-pointer transform hover:scale-105"
                aria-label="Putar Video"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ml-1">
                  <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                </svg>
              </button>
            )}
          </div>
        )}
      </div>

      {/* Speaker Information */}
      <div className="p-4 bg-zinc-50 border-t border-zinc-150 flex items-center gap-3">
        <div className="relative size-10 overflow-hidden rounded-full border border-zinc-200 bg-zinc-150 flex items-center justify-center shrink-0 text-zinc-400 select-none">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        </div>
        <div className="min-w-0 flex-1">
          <h4 className="text-xs font-black text-zinc-800 truncate">
            Lovita Uki Damayanti
          </h4>
          <p className="text-[10px] text-zinc-500 truncate">
            Atlet Goalball Kontingen Jawa Barat
          </p>
        </div>
        <span className="text-[9px] font-black uppercase tracking-wider text-secondary-600 bg-secondary-100/50 px-2 py-0.5 rounded border border-secondary-200">
          VIDEO NOTE
        </span>
      </div>
    </div>
  );
}
