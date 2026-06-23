"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type AudioStoryCardProps = {
  imageSrc: string;
  imageAlt: string;
  label?: string;
  title: string;
  description: string;
  audioSrc: string;
  transcript: string;
};

export default function AudioStoryCard({
  imageSrc,
  imageAlt,
  label = "Audio story",
  title,
  description,
  audioSrc,
  transcript,
}: AudioStoryCardProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration || 0);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

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
    <article className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm mt-8">
      <div className="grid md:grid-cols-[220px_minmax(0,1fr)]">
        <div className="relative min-h-64 md:min-h-full bg-zinc-900">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(min-width: 768px) 220px, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
          <p className="absolute inset-x-5 bottom-5 text-[10px] font-extrabold uppercase tracking-[0.12em] text-white">
            Profil narasumber
          </p>
        </div>

        <div className="p-6 sm:p-8">
          <p className="text-secondary-700 text-[10px] font-black uppercase tracking-[0.14em]">
            {label}
          </p>
          <h3 className="mt-2 text-xl font-bold text-zinc-900 leading-snug">
            {title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600">
            {description}
          </p>

          <audio ref={audioRef} src={audioSrc} preload="metadata" />

          {/* Custom Audio Player Controls */}
          <div className="mt-5 mb-4 flex items-center gap-3">
            {/* Play/Pause Button */}
            <button
              onClick={togglePlay}
              className="flex size-10 items-center justify-center rounded-full bg-[#082b4d] text-white hover:bg-[#061f38] transition-colors shadow-sm cursor-pointer flex-shrink-0"
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
                className="h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-zinc-200 accent-[#082b4d] outline-none [&::-webkit-slider-runnable-track]:bg-zinc-200 [&::-webkit-slider-thumb]:size-3 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#082b4d]"
                aria-label="Timeline voice note"
              />
              <div className="mt-1 flex justify-between text-[10px] font-medium text-zinc-500">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>
          </div>

          <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-4 text-xs sm:text-sm leading-6 text-amber-950 font-medium">
            {transcript}
          </div>
        </div>
      </div>
    </article>
  );
}
