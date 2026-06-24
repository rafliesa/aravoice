"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const STORAGE_KEY = "aravoice:a11y-settings";
const TEXT_SCALE_LABELS = ["100%", "112%", "125%", "137%"];
const CONTRAST_LABELS = ["Normal", "Negatif"];

/**
 * Reads the persisted accessibility settings from localStorage.
 * Returns the full settings object (or defaults).
 */
function readA11ySettings() {
  const defaults = {
    smartContrast: false,
    pauseAnimations: false,
    contrast: 0,
    highlightLinks: false,
    textScale: 0,
    textSpacing: 0,
    hideImages: false,
    dyslexiaFriendly: false,
    lineHeight: 0,
    textAlign: 0,
    saturation: 0,
  };

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) return defaults;
    return { ...defaults, ...JSON.parse(stored) };
  } catch {
    return defaults;
  }
}

/**
 * Writes settings to localStorage **and** syncs every data-attribute on <html>
 * so the CSS rules in globals.css take effect immediately.
 */
function commitA11ySettings(settings: Record<string, unknown>) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));

  const root = document.documentElement;
  root.dataset.a11ySmartContrast = String(settings.smartContrast);
  root.dataset.a11yPauseAnimations = String(settings.pauseAnimations);
  root.dataset.a11yContrast = String(settings.contrast);
  root.dataset.a11yHighlightLinks = String(settings.highlightLinks);
  root.dataset.a11yTextScale = String(settings.textScale);
  root.dataset.a11yTextSpacing = String(settings.textSpacing);
  root.dataset.a11yHideImages = String(settings.hideImages);
  root.dataset.a11yDyslexia = String(settings.dyslexiaFriendly);
  root.dataset.a11yLineHeight = String(settings.lineHeight);
  root.dataset.a11yTextAlign = String(settings.textAlign);
  root.dataset.a11ySaturation = String(settings.saturation);
}

function splitSpeechText(text: string) {
  const normalized = text.replace(/\s+/g, " ").trim().slice(0, 30000);
  if (!normalized) return [];
  const sentences = normalized.match(/[^.!?]+[.!?]+|[^.!?]+$/g) ?? [normalized];
  const chunks: string[] = [];
  let current = "";

  for (const sentence of sentences) {
    if (`${current} ${sentence}`.trim().length > 220 && current) {
      chunks.push(current.trim());
      current = sentence;
    } else {
      current = `${current} ${sentence}`;
    }
  }
  if (current.trim()) chunks.push(current.trim());
  return chunks;
}

export default function ArticleControls() {
  const [textScale, setTextScale] = useState(0);
  const [contrast, setContrast] = useState(0);
  const [isReading, setIsReading] = useState(false);
  const keepAliveRef = useRef<number | null>(null);

  // Sync from localStorage on mount
  useEffect(() => {
    const s = readA11ySettings();
    setTextScale(s.textScale ?? 0);
    setContrast(s.contrast ?? 0);
  }, []);

  // Cleanup speech on unmount
  useEffect(() => {
    return () => {
      window.speechSynthesis?.cancel();
      if (keepAliveRef.current !== null) {
        window.clearInterval(keepAliveRef.current);
        keepAliveRef.current = null;
      }
    };
  }, []);

  const toggleScreenReader = useCallback(() => {
    if (
      typeof window === "undefined" ||
      !("speechSynthesis" in window) ||
      typeof SpeechSynthesisUtterance === "undefined"
    ) {
      return;
    }

    // If already reading → stop
    if (isReading) {
      window.speechSynthesis.cancel();
      if (keepAliveRef.current !== null) {
        window.clearInterval(keepAliveRef.current);
        keepAliveRef.current = null;
      }
      setIsReading(false);
      return;
    }

    // Get article text from #main-content
    const content = document.getElementById("main-content")?.innerText?.trim();
    if (!content) return;

    window.speechSynthesis.cancel();
    const chunks = splitSpeechText(content);
    if (chunks.length === 0) return;

    const voices = window.speechSynthesis.getVoices();
    const indonesianVoice = voices.find((v) =>
      v.lang.toLowerCase().startsWith("id")
    );

    // Keep-alive interval to prevent browser from pausing
    keepAliveRef.current = window.setInterval(() => {
      if (window.speechSynthesis.paused) window.speechSynthesis.resume();
    }, 1000);

    chunks.forEach((chunk, index) => {
      const utterance = new SpeechSynthesisUtterance(chunk);
      utterance.lang = "id-ID";
      utterance.rate = 0.92;
      utterance.pitch = 1;
      if (indonesianVoice) utterance.voice = indonesianVoice;

      if (index === chunks.length - 1) {
        utterance.onend = () => {
          if (keepAliveRef.current !== null) {
            window.clearInterval(keepAliveRef.current);
            keepAliveRef.current = null;
          }
          setIsReading(false);
        };
        utterance.onerror = () => {
          if (keepAliveRef.current !== null) {
            window.clearInterval(keepAliveRef.current);
            keepAliveRef.current = null;
          }
          setIsReading(false);
        };
      }

      window.speechSynthesis.speak(utterance);
    });

    setIsReading(true);
  }, [isReading]);

  function decreaseTextSize() {
    const next = Math.max(0, textScale - 1);
    setTextScale(next);
    const s = readA11ySettings();
    s.textScale = next;
    commitA11ySettings(s);
  }

  function increaseTextSize() {
    const next = Math.min(TEXT_SCALE_LABELS.length - 1, textScale + 1);
    setTextScale(next);
    const s = readA11ySettings();
    s.textScale = next;
    commitA11ySettings(s);
  }

  function cycleContrast() {
    const next = (contrast + 1) % CONTRAST_LABELS.length;
    setContrast(next);
    const s = readA11ySettings();
    s.contrast = next;
    commitA11ySettings(s);
  }

  return (
    <div className="flex flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
      <button
        type="button"
        onClick={toggleScreenReader}
        aria-pressed={isReading}
        className={`inline-flex w-fit items-center gap-2 rounded-full px-5 py-2 text-sm font-bold transition-colors active:scale-95 ${
          isReading
            ? "bg-red-600 text-white hover:bg-red-700"
            : "bg-black text-white hover:bg-zinc-800"
        }`}
      >
        <span className="grid size-4 place-items-center rounded-full border border-white/70 text-[9px]">
          {isReading ? "■" : "▶"}
        </span>
        {isReading ? "Berhenti Membaca" : "Dengarkan Artikel"}
      </button>

      <div className="flex flex-wrap items-center gap-3">
        <div className="inline-flex items-center rounded-full border border-[#cfc8bd] bg-white text-sm text-[#2b2b2b]">
          <button
            type="button"
            onClick={decreaseTextSize}
            disabled={textScale <= 0}
            aria-label="Perkecil ukuran teks"
            className="px-3 py-2 font-bold transition-opacity disabled:cursor-not-allowed disabled:opacity-40 hover:text-zinc-600 active:scale-95"
          >
            A-
          </button>
          <span className="border-x border-[#cfc8bd] px-3 py-2 text-xs text-zinc-500 select-none">
            Ukuran Teks
          </span>
          <button
            type="button"
            onClick={increaseTextSize}
            disabled={textScale >= TEXT_SCALE_LABELS.length - 1}
            aria-label="Perbesar ukuran teks"
            className="px-3 py-2 font-bold transition-opacity disabled:cursor-not-allowed disabled:opacity-40 hover:text-zinc-600 active:scale-95"
          >
            A+
          </button>
        </div>
        <button
          type="button"
          onClick={cycleContrast}
          aria-pressed={contrast > 0}
          className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-bold transition-colors active:scale-95 ${
            contrast > 0
              ? "border-black bg-black text-white"
              : "border-black text-black hover:bg-zinc-100"
          }`}
        >
          ◐ Kontras: {CONTRAST_LABELS[contrast]}
        </button>
      </div>
    </div>
  );
}

