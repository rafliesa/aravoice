"use client";

import { usePathname } from "next/navigation";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type FormEvent,
} from "react";

type Settings = {
  smartContrast: boolean;
  pauseAnimations: boolean;
  contrast: number;
  highlightLinks: boolean;
  textScale: number;
  textSpacing: number;
  hideImages: boolean;
  dyslexiaFriendly: boolean;
  lineHeight: number;
  textAlign: number;
  saturation: number;
};

type StructureItem = {
  id: string;
  kind: string;
  label: string;
  level: number;
};

type DictionaryResult = {
  title: string;
  extract: string;
  url: string;
};

const STORAGE_KEY = "aravoice:a11y-settings";

const DEFAULT_SETTINGS: Settings = {
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

const TEXT_SCALE_LABELS = ["100%", "112%", "125%", "137%"];
const TEXT_SPACING_LABELS = ["Normal", "Ringan", "Lega"];
const CONTRAST_LABELS = ["Normal", "Sedang", "Tinggi"];
const LINE_HEIGHT_LABELS = ["Normal", "1.6", "1.9", "2.2"];
const TEXT_ALIGN_LABELS = ["Default", "Kiri", "Tengah", "Kanan", "Rata"];
const SATURATION_LABELS = ["Normal", "Rendah", "Tinggi", "Abu-abu"];

export default function AccessibilityWidget() {
  const pathname = usePathname();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState<Settings>(DEFAULT_SETTINGS);
  const [announcement, setAnnouncement] = useState("");
  const [screenReaderActive, setScreenReaderActive] = useState(false);
  const [structureOpen, setStructureOpen] = useState(false);
  const [structure, setStructure] = useState<StructureItem[]>([]);
  const [dictionaryOpen, setDictionaryOpen] = useState(false);
  const [dictionaryTerm, setDictionaryTerm] = useState("");
  const [dictionaryStatus, setDictionaryStatus] = useState<
    "idle" | "loading" | "ready" | "error"
  >("idle");
  const [dictionaryResult, setDictionaryResult] =
    useState<DictionaryResult | null>(null);

  const commitSettings = useCallback((next: Settings) => {
    setSettings(next);
    applySettings(next);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  }, []);

  useEffect(() => {
    const persisted = readSettings();
    queueMicrotask(() => {
      setSettings(persisted);
      applySettings(persisted);
    });
  }, []);

  useEffect(() => {
    if (!open) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      triggerRef.current?.focus();
    };
    const closeOnOutsideClick = (event: MouseEvent) => {
      if (
        panelRef.current &&
        triggerRef.current &&
        !panelRef.current.contains(event.target as Node) &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    document.addEventListener("mousedown", closeOnOutsideClick);
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("mousedown", closeOnOutsideClick);
    };
  }, [open]);

  useEffect(() => {
    if (!structureOpen) return;
    const timer = window.setTimeout(() => setStructure(collectPageStructure()), 0);
    return () => window.clearTimeout(timer);
  }, [pathname, structureOpen]);

  useEffect(() => {
    return () => window.speechSynthesis?.cancel();
  }, []);

  const updateSetting = <K extends keyof Settings>(
    key: K,
    value: Settings[K],
    message: string,
  ) => {
    commitSettings({ ...settings, [key]: value });
    setAnnouncement(message);
  };

  const toggleSetting = (
    key:
      | "smartContrast"
      | "pauseAnimations"
      | "highlightLinks"
      | "hideImages"
      | "dyslexiaFriendly",
    label: string,
  ) => {
    const enabled = !settings[key];
    updateSetting(key, enabled, `${label} ${enabled ? "aktif" : "nonaktif"}.`);
  };

  const resetSettings = () => {
    window.speechSynthesis?.cancel();
    setScreenReaderActive(false);
    setStructureOpen(false);
    setDictionaryOpen(false);
    setDictionaryTerm("");
    setDictionaryResult(null);
    setDictionaryStatus("idle");
    commitSettings(DEFAULT_SETTINGS);
    setAnnouncement("Semua pengaturan aksesibilitas direset.");
  };

  const toggleScreenReader = () => {
    if (
      typeof window === "undefined" ||
      !("speechSynthesis" in window) ||
      typeof SpeechSynthesisUtterance === "undefined"
    ) {
      setAnnouncement("Pembaca layar suara tidak didukung browser ini.");
      return;
    }

    if (screenReaderActive) {
      window.speechSynthesis.cancel();
      setScreenReaderActive(false);
      setAnnouncement("Pembaca layar suara dihentikan.");
      return;
    }

    const content = document.getElementById("main-content")?.innerText.trim();
    if (!content) {
      setAnnouncement("Tidak ada konten utama yang dapat dibacakan.");
      return;
    }

    window.speechSynthesis.cancel();
    const chunks = splitSpeechText(content);
    const voices = window.speechSynthesis.getVoices();
    const indonesianVoice = voices.find((voice) =>
      voice.lang.toLowerCase().startsWith("id"),
    );

    chunks.forEach((chunk, index) => {
      const utterance = new SpeechSynthesisUtterance(chunk);
      utterance.lang = "id-ID";
      utterance.rate = 0.92;
      utterance.pitch = 1;
      if (indonesianVoice) utterance.voice = indonesianVoice;
      if (index === chunks.length - 1) {
        utterance.onend = () => setScreenReaderActive(false);
        utterance.onerror = () => setScreenReaderActive(false);
      }
      window.speechSynthesis.speak(utterance);
    });

    setScreenReaderActive(true);
    setAnnouncement("Pembaca layar suara mulai membacakan konten utama.");
  };

  const toggleStructure = () => {
    const nextOpen = !structureOpen;
    setStructureOpen(nextOpen);
    setDictionaryOpen(false);
    if (nextOpen) setStructure(collectPageStructure());
    setAnnouncement(
      nextOpen ? "Struktur halaman ditampilkan." : "Struktur halaman ditutup.",
    );
  };

  const toggleDictionary = () => {
    const nextOpen = !dictionaryOpen;
    setDictionaryOpen(nextOpen);
    setStructureOpen(false);
    if (nextOpen && !dictionaryTerm) {
      const selection = window.getSelection()?.toString().trim() ?? "";
      setDictionaryTerm(selection.split(/\s+/).slice(0, 3).join(" "));
    }
    setAnnouncement(nextOpen ? "Kamus dibuka." : "Kamus ditutup.");
  };

  const searchDictionary = async (event: FormEvent) => {
    event.preventDefault();
    const term = dictionaryTerm.trim();
    if (!term) return;

    setDictionaryStatus("loading");
    setDictionaryResult(null);
    try {
      const params = new URLSearchParams({
        action: "parse",
        format: "json",
        origin: "*",
        redirects: "1",
        prop: "text",
        page: term,
      });
      const response = await fetch(
        `https://id.wiktionary.org/w/api.php?${params}`,
      );
      if (!response.ok) throw new Error("dictionary request failed");

      const data = (await response.json()) as {
        parse?: {
          title: string;
          text?: { "*": string };
        };
        error?: { info?: string };
      };
      const html = data.parse?.text?.["*"];
      if (!data.parse || !html) {
        setDictionaryStatus("error");
        setAnnouncement(`Definisi untuk ${term} tidak ditemukan.`);
        return;
      }

      const parsedDocument = new DOMParser().parseFromString(html, "text/html");
      parsedDocument
        .querySelectorAll("script, style, table, .mw-editsection")
        .forEach((element) => element.remove());
      const extract = parsedDocument.body.innerText
        .replace(/\n{3,}/g, "\n\n")
        .trim()
        .slice(0, 4000);
      if (!extract) {
        setDictionaryStatus("error");
        setAnnouncement(`Definisi untuk ${term} tidak ditemukan.`);
        return;
      }

      setDictionaryResult({
        title: data.parse.title,
        extract,
        url: `https://id.wiktionary.org/wiki/${encodeURIComponent(data.parse.title)}`,
      });
      setDictionaryStatus("ready");
      setAnnouncement(`Definisi ${data.parse.title} ditemukan.`);
    } catch {
      setDictionaryStatus("error");
      setAnnouncement("Kamus tidak dapat diakses saat ini.");
    }
  };

  return (
    <div className="a11y-widget">
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[120] -translate-y-24 rounded-md bg-primary px-4 py-3 text-sm font-bold text-white transition-transform focus:translate-y-0"
      >
        Lewati ke konten utama
      </a>

      {open && (
        <div
          ref={panelRef}
          role="dialog"
          aria-modal="false"
          aria-labelledby="a11y-panel-title"
          className="fixed bottom-24 right-4 z-[110] max-h-[calc(100vh-7rem)] w-[min(28rem,calc(100vw-2rem))] overflow-y-auto rounded-xl border border-tertiary-200 bg-white shadow-2xl"
        >
          <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-tertiary-200 bg-white px-5 py-4">
            <div>
              <p className="text-secondary-700 text-xs font-extrabold uppercase tracking-[0.14em]">
                ParaVoice
              </p>
              <h2 id="a11y-panel-title" className="mt-1 text-xl font-bold">
                Aksesibilitas
              </h2>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Tutup panel aksesibilitas"
              className="flex h-10 w-10 items-center justify-center rounded-md border border-tertiary-200 text-2xl text-zinc-500 hover:bg-tertiary"
            >
              ×
            </button>
          </div>

          <div className="p-4">
            <div className="grid grid-cols-2 gap-2">
              <FeatureButton
                code="SC"
                label="Smart Contrast"
                active={settings.smartContrast}
                onClick={() => toggleSetting("smartContrast", "Smart contrast")}
              />
              <FeatureButton
                code="II"
                label="Pause Animation"
                active={settings.pauseAnimations}
                onClick={() =>
                  toggleSetting("pauseAnimations", "Pause animation")
                }
              />
              <FeatureButton
                code="SR"
                label="Screen Reader"
                active={screenReaderActive}
                value={screenReaderActive ? "Membaca" : "Siap"}
                onClick={toggleScreenReader}
              />
              <FeatureButton
                code="C+"
                label="Contrast +"
                active={settings.contrast > 0}
                value={CONTRAST_LABELS[settings.contrast]}
                onClick={() => {
                  const value = cycle(settings.contrast, CONTRAST_LABELS.length);
                  updateSetting(
                    "contrast",
                    value,
                    `Contrast ${CONTRAST_LABELS[value]}.`,
                  );
                }}
              />
              <FeatureButton
                code="L"
                label="Highlight Links"
                active={settings.highlightLinks}
                onClick={() =>
                  toggleSetting("highlightLinks", "Highlight links")
                }
              />
              <FeatureButton
                code="A+"
                label="Bigger Text"
                active={settings.textScale > 0}
                value={TEXT_SCALE_LABELS[settings.textScale]}
                onClick={() => {
                  const value = cycle(settings.textScale, TEXT_SCALE_LABELS.length);
                  updateSetting(
                    "textScale",
                    value,
                    `Ukuran teks ${TEXT_SCALE_LABELS[value]}.`,
                  );
                }}
              />
              <FeatureButton
                code="TS"
                label="Text Spacing"
                active={settings.textSpacing > 0}
                value={TEXT_SPACING_LABELS[settings.textSpacing]}
                onClick={() => {
                  const value = cycle(
                    settings.textSpacing,
                    TEXT_SPACING_LABELS.length,
                  );
                  updateSetting(
                    "textSpacing",
                    value,
                    `Jarak teks ${TEXT_SPACING_LABELS[value]}.`,
                  );
                }}
              />
              <FeatureButton
                code="IMG"
                label="Hide Images"
                active={settings.hideImages}
                onClick={() => toggleSetting("hideImages", "Hide images")}
              />
              <FeatureButton
                code="DX"
                label="Dyslexia Friendly"
                active={settings.dyslexiaFriendly}
                onClick={() =>
                  toggleSetting("dyslexiaFriendly", "Dyslexia friendly")
                }
              />
              <FeatureButton
                code="H"
                label="Page Structure"
                active={structureOpen}
                value={structureOpen ? `${structure.length} item` : undefined}
                onClick={toggleStructure}
              />
              <FeatureButton
                code="LH"
                label="Line Height"
                active={settings.lineHeight > 0}
                value={LINE_HEIGHT_LABELS[settings.lineHeight]}
                onClick={() => {
                  const value = cycle(
                    settings.lineHeight,
                    LINE_HEIGHT_LABELS.length,
                  );
                  updateSetting(
                    "lineHeight",
                    value,
                    `Tinggi baris ${LINE_HEIGHT_LABELS[value]}.`,
                  );
                }}
              />
              <FeatureButton
                code="TA"
                label="Text Align"
                active={settings.textAlign > 0}
                value={TEXT_ALIGN_LABELS[settings.textAlign]}
                onClick={() => {
                  const value = cycle(
                    settings.textAlign,
                    TEXT_ALIGN_LABELS.length,
                  );
                  updateSetting(
                    "textAlign",
                    value,
                    `Perataan teks ${TEXT_ALIGN_LABELS[value]}.`,
                  );
                }}
              />
              <FeatureButton
                code="DICT"
                label="Dictionary"
                active={dictionaryOpen}
                onClick={toggleDictionary}
              />
              <FeatureButton
                code="SAT"
                label="Saturation"
                active={settings.saturation > 0}
                value={SATURATION_LABELS[settings.saturation]}
                onClick={() => {
                  const value = cycle(
                    settings.saturation,
                    SATURATION_LABELS.length,
                  );
                  updateSetting(
                    "saturation",
                    value,
                    `Saturasi ${SATURATION_LABELS[value]}.`,
                  );
                }}
              />
            </div>

            {structureOpen && (
              <section className="mt-4 rounded-lg border border-tertiary-200 bg-headline-surface p-3">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-bold">Struktur halaman</h3>
                  <button
                    type="button"
                    onClick={() => setStructure(collectPageStructure())}
                    className="text-secondary-800 text-xs font-bold hover:underline"
                  >
                    Muat ulang
                  </button>
                </div>
                <div className="mt-3 max-h-64 space-y-1 overflow-y-auto">
                  {structure.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => focusStructureItem(item.id)}
                      className="block w-full rounded px-3 py-2 text-left text-sm hover:bg-white"
                      style={{ paddingLeft: `${0.75 + item.level * 0.75}rem` }}
                    >
                      <span className="text-secondary-700 mr-2 text-[10px] font-extrabold uppercase">
                        {item.kind}
                      </span>
                      {item.label}
                    </button>
                  ))}
                  {structure.length === 0 && (
                    <p className="px-3 py-2 text-sm text-zinc-500">
                      Struktur halaman belum tersedia.
                    </p>
                  )}
                </div>
              </section>
            )}

            {dictionaryOpen && (
              <section className="mt-4 rounded-lg border border-tertiary-200 bg-headline-surface p-3">
                <h3 className="font-bold">Dictionary</h3>
                <form onSubmit={searchDictionary} className="mt-3 flex gap-2">
                  <input
                    value={dictionaryTerm}
                    onChange={(event) => setDictionaryTerm(event.target.value)}
                    placeholder="Masukkan kata..."
                    aria-label="Kata yang dicari"
                    className="min-w-0 flex-1 rounded-md border border-tertiary-300 bg-white px-3 py-2 text-sm outline-none focus:border-secondary text-[#0f2c5c] placeholder:text-zinc-500 font-medium"
                  />
                  <button
                    type="submit"
                    disabled={dictionaryStatus === "loading"}
                    className="rounded-md bg-primary px-4 py-2 text-sm font-bold text-white disabled:opacity-60"
                  >
                    Cari
                  </button>
                </form>

                {dictionaryStatus === "loading" && (
                  <p className="mt-3 text-sm text-zinc-500">Mencari definisi...</p>
                )}
                {dictionaryStatus === "error" && (
                  <p className="mt-3 text-sm text-red-700">
                    Definisi tidak ditemukan atau layanan sedang tidak tersedia.
                  </p>
                )}
                {dictionaryResult && (
                  <div className="mt-3 rounded-md bg-white p-3">
                    <h4 className="font-bold">{dictionaryResult.title}</h4>
                    <p className="mt-2 max-h-48 overflow-y-auto whitespace-pre-line text-sm leading-6 text-zinc-700">
                      {dictionaryResult.extract}
                    </p>
                    <a
                      href={dictionaryResult.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary-800 mt-3 inline-block text-xs font-bold hover:underline"
                    >
                      Buka di Wiktionary
                    </a>
                  </div>
                )}
              </section>
            )}

            <button
              type="button"
              onClick={resetSettings}
              className="mt-4 w-full rounded-md border border-tertiary-300 px-4 py-3 text-sm font-bold text-zinc-700 hover:bg-tertiary"
            >
              Reset semua pengaturan
            </button>
          </div>
        </div>
      )}

      <button
        ref={triggerRef}
        type="button"
        aria-label="Buka pengaturan aksesibilitas"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="fixed bottom-4 right-4 z-[110] flex h-14 w-14 items-center justify-center rounded-full border-2 border-white bg-primary text-white shadow-xl transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-secondary-200"
      >
        <AccessibilityIcon />
      </button>

      <p aria-live="polite" className="sr-only">
        {announcement}
      </p>
    </div>
  );
}

function FeatureButton({
  code,
  label,
  active,
  value,
  onClick,
}: {
  code: string;
  label: string;
  active: boolean;
  value?: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`flex min-h-24 flex-col items-start rounded-lg border p-3 text-left transition-colors ${
        active
          ? "border-secondary bg-secondary-50 text-secondary-900"
          : "border-tertiary-200 bg-white text-neutral hover:border-secondary-300"
      }`}
    >
      <span
        aria-hidden="true"
        className={`flex h-8 min-w-8 items-center justify-center rounded px-1.5 text-[11px] font-extrabold ${
          active ? "bg-secondary text-white" : "bg-primary text-white"
        }`}
      >
        {code}
      </span>
      <span className="mt-2 text-sm font-bold leading-5">{label}</span>
      <span className="mt-1 text-xs text-zinc-500">
        {value ?? (active ? "Aktif" : "Nonaktif")}
      </span>
    </button>
  );
}

function AccessibilityIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="4" r="2" />
      <path d="M5 8h14" />
      <path d="m9 8 3 4 3-4" />
      <path d="m12 12-3 8" />
      <path d="m12 12 3 8" />
    </svg>
  );
}

function cycle(value: number, length: number) {
  return (value + 1) % length;
}

function readSettings(): Settings {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) return DEFAULT_SETTINGS;
    const parsed = JSON.parse(stored) as Partial<Settings>;
    return { ...DEFAULT_SETTINGS, ...parsed };
  } catch {
    return DEFAULT_SETTINGS;
  }
}

function applySettings(settings: Settings) {
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

function collectPageStructure(): StructureItem[] {
  const shell = document.getElementById("site-shell");
  if (!shell) return [];

  const elements = Array.from(
    shell.querySelectorAll<HTMLElement>(
      "header, nav, main, aside, footer, h1, h2, h3, h4, h5, h6",
    ),
  );

  return elements
    .map((element, index) => {
      const tag = element.tagName.toLowerCase();
      const isHeading = /^h[1-6]$/.test(tag);
      const label = isHeading
        ? element.innerText.trim()
        : element.getAttribute("aria-label") ||
          {
            header: "Header",
            nav: "Navigasi",
            main: "Konten utama",
            aside: "Konten pelengkap",
            footer: "Footer",
          }[tag] ||
          tag;
      if (!label) return null;

      if (!element.id) element.id = `a11y-structure-${index}`;
      return {
        id: element.id,
        kind: isHeading ? tag.toUpperCase() : tag,
        label: label.slice(0, 100),
        level: isHeading ? Number(tag.slice(1)) - 1 : 0,
      };
    })
    .filter((item): item is StructureItem => item !== null);
}

function focusStructureItem(id: string) {
  const element = document.getElementById(id);
  if (!element) return;
  element.scrollIntoView({
    behavior:
      document.documentElement.dataset.a11yPauseAnimations === "true"
        ? "auto"
        : "smooth",
    block: "center",
  });
  if (!element.hasAttribute("tabindex")) element.setAttribute("tabindex", "-1");
  element.focus({ preventScroll: true });
}
