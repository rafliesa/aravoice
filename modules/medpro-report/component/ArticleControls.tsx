"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "aravoice:a11y-settings";
const TEXT_SCALE_LABELS = ["100%", "112%", "125%", "137%"];
const CONTRAST_LABELS = ["Normal", "Sedang", "Tinggi"];

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

export default function ArticleControls() {
  const [textScale, setTextScale] = useState(0);
  const [contrast, setContrast] = useState(0);

  // Sync from localStorage on mount
  useEffect(() => {
    const s = readA11ySettings();
    setTextScale(s.textScale ?? 0);
    setContrast(s.contrast ?? 0);
  }, []);

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
        className="inline-flex w-fit items-center gap-2 rounded-full bg-black px-5 py-2 text-sm font-bold text-white transition-colors hover:bg-zinc-800 active:scale-95"
      >
        <span className="grid size-4 place-items-center rounded-full border border-white/70 text-[9px]">
          ▶
        </span>
        Dengarkan Artikel
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
          ◐ Kontras Tinggi
        </button>
      </div>
    </div>
  );
}
