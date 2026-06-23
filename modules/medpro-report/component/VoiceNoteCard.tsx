"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type VoiceNoteCardProps = {
  audioSrc: string;
  imageSrc?: string;
  speakerName: string;
  speakerRole: string;
  imageAlt?: string;
};

export default function VoiceNoteCard({
  audioSrc = "/KND Jonna Aman 1 (PBM).m4a",
  imageSrc,
  speakerName = "Jonna Aman Damanik",
  speakerRole = "Komisioner Komisi Nasional Disabilitas (KND)",
  imageAlt,
}: Partial<VoiceNoteCardProps>) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [imgError, setImgError] = useState(false);

  const showImage = imageSrc && !imgError;

  const finalAudioSrc = audioSrc ?? "/KND Jonna Aman 1 (PBM).m4a";

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration || 0);
    const handleEnded = () => setIsPlaying(false);
    const handleError = () => {
      console.warn(`Audio source ${audioSrc} not found.`);
    };

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("error", handleError);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("error", handleError);
    };
  }, [audioSrc, finalAudioSrc]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.error("Playback failed", err);
      });
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    const value = parseFloat(e.target.value);
    audio.currentTime = value;
    setCurrentTime(value);
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="mx-auto my-8 max-w-sm rounded-2xl border border-zinc-200 bg-white p-4 shadow-md transition-all duration-300 hover:shadow-lg">
      <audio ref={audioRef} src={finalAudioSrc} preload="metadata" />
      
      {/* Speaker Profile Header */}
      <div className="flex items-center gap-3">
        <div className="relative size-12 overflow-hidden rounded-full border border-zinc-200 bg-zinc-100 flex-shrink-0">
          {showImage ? (
            <Image
              src={imageSrc!}
              alt={imageAlt || `Foto ${speakerName}`}
              fill
              sizes="48px"
              className="object-cover"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="flex size-full items-center justify-center bg-zinc-150 text-zinc-400 select-none">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
          )}
        </div>
        <div className="min-w-0 flex-1">
          <h4 className="truncate text-sm font-bold text-zinc-900">
            {speakerName}
          </h4>
          <p className="truncate text-[11px] text-zinc-500 font-medium">
            {speakerRole}
          </p>
        </div>
        <div className="rounded-full bg-red-50 px-2 py-0.5 text-[10px] font-bold text-red-600 uppercase tracking-wide flex items-center gap-1">
          <span className="size-1.5 rounded-full bg-red-500 animate-pulse"></span>
          VN
        </div>
      </div>

      {/* Audio Controls */}
      <div className="mt-4 flex items-center gap-3">
        {/* Play/Pause Button */}
        <button
          onClick={togglePlay}
          className="flex size-10 items-center justify-center rounded-full bg-secondary-700 text-white hover:bg-secondary-800 transition-colors shadow-sm cursor-pointer flex-shrink-0"
          aria-label={isPlaying ? "Jeda" : "Putar"}
          type="button"
        >
          {isPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-0.5">
              <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
            </svg>
          )}
        </button>

        {/* Progress & Waveform Slider */}
        <div className="flex flex-1 flex-col">
          <input
            type="range"
            min={0}
            max={duration || 100}
            value={currentTime}
            onChange={handleSeek}
            className="h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-zinc-200 accent-secondary-700 outline-none [&::-webkit-slider-runnable-track]:bg-zinc-200 [&::-webkit-slider-thumb]:size-3 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-secondary-700"
            aria-label="Timeline voice note"
          />
          <div className="mt-1 flex justify-between text-[10px] font-medium text-zinc-500">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
