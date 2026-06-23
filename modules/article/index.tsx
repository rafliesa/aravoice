"use client";

import Link from "next/link";
import { use, useEffect, useMemo, useRef, useState } from "react";
import { ARTICLE_PROSE } from "@/components/editor/articleProse";
import { renderChartSvg, type ChartData } from "@/components/editor/chartRender";
import {
  type News,
  fetchNewsBySlug,
  formatPublishedDate,
} from "@/lib/news";

export default function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const [news, setNews] = useState<News | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "notfound" | "error">(
    "loading",
  );
  const [error, setError] = useState("");
  const [isReading, setIsReading] = useState(false);
  const [speechMessage, setSpeechMessage] = useState("");
  const [textScale, setTextScale] = useState(1);
  const [highContrast, setHighContrast] = useState(false);
  const speechTokenRef = useRef(0);
  const speechKeepAliveRef = useRef<number | null>(null);

  const articleText = useMemo(() => {
    if (!news) return "";
    return [news.title, news.excerpt, stripHtml(news.body)]
      .filter(Boolean)
      .join(". ");
  }, [news]);

  useEffect(() => {
    const controller = new AbortController();

    async function load() {
      setStatus("loading");
      try {
        const data = await fetchNewsBySlug(slug, controller.signal);
        if (controller.signal.aborted) return;
        if (!data) {
          setStatus("notfound");
          return;
        }
        setNews(data);
        setStatus("ready");
      } catch (err) {
        if ((err as Error).name === "AbortError") return;
        setError(err instanceof Error ? err.message : "Berita gagal dimuat");
        setStatus("error");
      }
    }

    load();
    return () => controller.abort();
  }, [slug]);

  useEffect(() => {
    return () => {
      speechTokenRef.current += 1;
      clearSpeechKeepAlive(speechKeepAliveRef);
      window.speechSynthesis?.cancel();
    };
  }, []);

  useEffect(() => {
    speechTokenRef.current += 1;
    clearSpeechKeepAlive(speechKeepAliveRef);
    window.speechSynthesis?.cancel();
  }, [slug]);

  async function toggleArticleAudio() {
    if (
      typeof window === "undefined" ||
      !("speechSynthesis" in window) ||
      typeof SpeechSynthesisUtterance === "undefined"
    ) {
      setSpeechMessage("Browser ini belum mendukung pembaca artikel.");
      return;
    }

    if (isReading) {
      stopArticleAudio();
      setSpeechMessage("Pembaca artikel dihentikan.");
      return;
    }

    const chunks = splitSpeechText(articleText);
    if (chunks.length === 0) {
      setSpeechMessage("Tidak ada isi artikel yang dapat dibacakan.");
      return;
    }

    const token = speechTokenRef.current + 1;
    speechTokenRef.current = token;
    clearSpeechKeepAlive(speechKeepAliveRef);
    window.speechSynthesis.cancel();
    window.speechSynthesis.resume();
    setIsReading(true);
    setSpeechMessage("Pembaca artikel mulai membacakan isi artikel.");

    const voices = await getSpeechVoices();
    if (speechTokenRef.current !== token) return;

    const indonesianVoice = voices.find((voice) =>
      voice.lang.toLowerCase().startsWith("id"),
    );

    speechKeepAliveRef.current = window.setInterval(() => {
      if (window.speechSynthesis.paused) window.speechSynthesis.resume();
    }, 1000);

    speakArticleChunks(chunks, {
      token,
      voice: indonesianVoice,
      speechTokenRef,
      speechKeepAliveRef,
      onDone: () => {
        setIsReading(false);
        setSpeechMessage("Pembaca artikel selesai.");
      },
      onError: () => {
        setIsReading(false);
        setSpeechMessage("Pembaca artikel gagal dimulai di browser ini.");
      },
    });
  }

  function stopArticleAudio() {
    speechTokenRef.current += 1;
    clearSpeechKeepAlive(speechKeepAliveRef);
    window.speechSynthesis.cancel();
    setIsReading(false);
  }

  function decreaseTextSize() {
    setTextScale((current) => Math.max(0.9, Number((current - 0.1).toFixed(1))));
  }

  function increaseTextSize() {
    setTextScale((current) => Math.min(1.3, Number((current + 0.1).toFixed(1))));
  }

  return (
    <div
      className={`flex-1 text-[#1a1a1a] ${
        highContrast ? "bg-white" : "bg-[#faf8f3]"
      }`}
    >
      <div className="mx-auto max-w-[67rem] px-6 py-8">
        {status === "loading" && <ArticleSkeleton />}

        {status === "notfound" && (
          <div className="mt-10">
            <h1 className="text-3xl font-extrabold tracking-tight">
              Berita tidak ditemukan
            </h1>
            <p className="mt-3 text-zinc-600">
              Berita yang kamu cari mungkin sudah dihapus atau belum terbit.
            </p>
            <Link
              href="/"
              className="mt-6 inline-block text-sm font-bold text-[#8A5100] hover:underline"
            >
              ← Kembali ke beranda
            </Link>
          </div>
        )}

        {status === "error" && (
          <p className="mt-10 text-sm text-red-600">{error}</p>
        )}

        {status === "ready" && news && (
          <article>
            <ArticleSubnav />
            <section
              className={`mt-8 overflow-hidden rounded-lg border bg-white ${
                highContrast ? "border-black" : "border-[#cfc8bd]"
              }`}
            >
              <div className="relative min-h-[22rem] overflow-hidden sm:min-h-[28rem]">
                {news.cover_image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={news.cover_image}
                    alt={news.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 bg-white" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/28 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 px-8 pb-8 text-white sm:px-9 sm:pb-9">
                  <p className="inline-flex rounded-sm bg-secondary-800 px-3 py-1 text-xs font-extrabold uppercase tracking-[0.08em]">
                    {news.category}
                  </p>
                  <h1 className="mt-7 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
                    {news.title}
                  </h1>
                  {news.excerpt && (
                    <p className="mt-6 max-w-3xl text-sm leading-6 text-white/90">
                      {news.excerpt}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="button"
                  onClick={toggleArticleAudio}
                  aria-pressed={isReading}
                  className="inline-flex w-fit items-center gap-2 rounded-full bg-black px-5 py-2 text-sm font-bold text-white transition-colors hover:bg-zinc-800"
                >
                  {isReading ? <PauseCircleIcon /> : <PlayCircleIcon />}
                  {isReading ? "Berhenti Membaca" : "Dengarkan Artikel"}
                </button>

                <div className="flex flex-wrap items-center gap-3">
                  <div className="inline-flex items-center rounded-full border border-[#cfc8bd] bg-white text-sm text-[#2b2b2b]">
                    <button
                      type="button"
                      onClick={decreaseTextSize}
                      disabled={textScale <= 0.9}
                      aria-label="Perkecil ukuran teks artikel"
                      className="px-3 py-2 font-bold disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      A-
                    </button>
                    <span className="border-x border-[#cfc8bd] px-3 py-2 text-xs text-zinc-500">
                      Ukuran Teks
                    </span>
                    <button
                      type="button"
                      onClick={increaseTextSize}
                      disabled={textScale >= 1.3}
                      aria-label="Perbesar ukuran teks artikel"
                      className="px-3 py-2 font-bold disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      A+
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() => setHighContrast((current) => !current)}
                    aria-pressed={highContrast}
                    className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-bold transition-colors ${
                      highContrast
                        ? "border-black bg-black text-white"
                        : "border-black text-black hover:bg-black hover:text-white"
                    }`}
                  >
                    <ContrastIcon />
                    Kontras Tinggi
                  </button>
                </div>
              </div>
              <p aria-live="polite" className="sr-only">
                {speechMessage}
              </p>
            </section>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[#33445a]">
              <span>Oleh {news.author}</span>
              <span>{formatPublishedDate(news.published_at)}</span>
              <span>{news.reading_time} menit baca</span>
              {news.formats.length > 0 && (
                <span className="flex flex-wrap gap-2">
                  {news.formats.map((f) => (
                    <span
                      key={f}
                      className="rounded bg-secondary-800/10 px-2 py-0.5 text-xs font-bold tracking-wide text-secondary-800"
                    >
                      {f.toUpperCase()}
                    </span>
                  ))}
                </span>
              )}
            </div>

            <ArticleBody
              html={news.body}
              className={`mt-8 max-w-none ${ARTICLE_PROSE} ${
                highContrast
                  ? "[&&]:text-black [&_a]:text-black [&_blockquote]:border-black [&_blockquote]:text-black"
                  : "text-[#082b4d]"
              }`}
              style={{ fontSize: `${textScale}em` }}
            />
          </article>
        )}
      </div>
    </div>
  );
}

function ArticleBody({
  html,
  className,
  style,
}: {
  html: string;
  className: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;
    const nodes = container.querySelectorAll<HTMLElement>("div[data-chart]");
    for (const node of nodes) {
      const raw = node.getAttribute("data-chart") ?? "";
      if (!raw) continue;
      try {
        const data = JSON.parse(decodeURIComponent(raw)) as ChartData;
        node.innerHTML = renderChartSvg(data);
      } catch {
        // leave the div empty if data is malformed
      }
    }
  }, [html]);

  return (
    <div
      ref={ref}
      className={className}
      style={style}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function stripHtml(value: string) {
  if (typeof window === "undefined") return value.replace(/<[^>]*>/g, " ");

  const element = document.createElement("div");
  element.innerHTML = value;
  return element.textContent?.replace(/\s+/g, " ").trim() ?? "";
}

function splitSpeechText(text: string) {
  const normalized = text.replace(/\s+/g, " ").trim().slice(0, 30000);
  if (!normalized) return [];

  const sentences = normalized.match(/[^.!?]+[.!?]+|[^.!?]+$/g) ?? [
    normalized,
  ];
  const chunks: string[] = [];
  let current = "";

  for (const sentence of sentences) {
    const next = `${current} ${sentence}`.trim();
    if (next.length > 220 && current) {
      chunks.push(current.trim());
      current = sentence;
    } else {
      current = next;
    }
  }

  if (current.trim()) chunks.push(current.trim());
  return chunks;
}

function getSpeechVoices() {
  const voices = window.speechSynthesis.getVoices();
  if (voices.length > 0) return Promise.resolve(voices);

  return new Promise<SpeechSynthesisVoice[]>((resolve) => {
    const timer = window.setTimeout(() => {
      window.speechSynthesis.onvoiceschanged = null;
      resolve(window.speechSynthesis.getVoices());
    }, 500);

    window.speechSynthesis.onvoiceschanged = () => {
      window.clearTimeout(timer);
      window.speechSynthesis.onvoiceschanged = null;
      resolve(window.speechSynthesis.getVoices());
    };
  });
}

function speakArticleChunks(
  chunks: string[],
  options: {
    token: number;
    voice?: SpeechSynthesisVoice;
    speechTokenRef: React.MutableRefObject<number>;
    speechKeepAliveRef: React.MutableRefObject<number | null>;
    onDone: () => void;
    onError: () => void;
  },
) {
  let index = 0;

  const speakNext = () => {
    if (options.speechTokenRef.current !== options.token) return;

    if (index >= chunks.length) {
      clearSpeechKeepAlive(options.speechKeepAliveRef);
      options.onDone();
      return;
    }

    const utterance = new SpeechSynthesisUtterance(chunks[index]);
    utterance.lang = "id-ID";
    utterance.rate = 0.92;
    utterance.pitch = 1;
    if (options.voice) utterance.voice = options.voice;

    utterance.onend = () => {
      index += 1;
      speakNext();
    };
    utterance.onerror = (event) => {
      if (options.speechTokenRef.current !== options.token) return;
      if (event.error === "interrupted" || event.error === "canceled") return;
      clearSpeechKeepAlive(options.speechKeepAliveRef);
      options.onError();
    };

    window.speechSynthesis.speak(utterance);
    window.speechSynthesis.resume();
  };

  speakNext();
}

function clearSpeechKeepAlive(ref: React.MutableRefObject<number | null>) {
  if (ref.current === null) return;
  window.clearInterval(ref.current);
  ref.current = null;
}

function ArticleSubnav() {
  const items = [
    "Sub Judul 1",
    "Sub Judul 2",
    "Sub Judul 3",
    "Sub Judul 4",
    "Sub Judul 5",
    "Sub Judul 6",
    "Sub Judul 7",
    "Hak Tertunda",
  ];

  return (
    <nav
      aria-label="Navigasi bagian artikel"
      className="flex gap-7 overflow-x-auto pb-1 text-sm font-semibold text-[#544434]"
    >
      {items.map((item) => (
        <a
          key={item}
          href="#"
          className={
            item === "Hak Tertunda"
              ? "shrink-0 border-b-2 border-secondary-800 pb-1 font-bold text-secondary-800"
              : "shrink-0 pb-1 hover:text-secondary-800"
          }
        >
          {item}
        </a>
      ))}
    </nav>
  );
}

function PlayCircleIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="m10 8 6 4-6 4V8z" fill="currentColor" stroke="none" />
    </svg>
  );
}

function PauseCircleIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M10 8v8M14 8v8" />
    </svg>
  );
}

function ContrastIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3a9 9 0 0 1 0 18V3z" fill="currentColor" stroke="none" />
    </svg>
  );
}

function ArticleSkeleton() {
  return (
    <article aria-busy="true" aria-label="Artikel sedang dimuat" className="motion-fade-up mt-8">
      <div className="skeleton-block h-4 w-32 rounded" />
      <div className="mt-4 space-y-4">
        <div className="skeleton-block h-12 w-full max-w-4xl rounded" />
        <div className="skeleton-block h-12 w-11/12 max-w-4xl rounded" />
        <div className="skeleton-block h-12 w-2/3 max-w-3xl rounded" />
      </div>
      <div className="mt-6 space-y-3">
        <div className="skeleton-block h-5 w-full max-w-2xl rounded" />
        <div className="skeleton-block h-5 w-4/5 max-w-xl rounded" />
      </div>
      <div className="mt-6 flex flex-wrap gap-4 border-y border-zinc-200 py-4">
        <div className="skeleton-block h-4 w-28 rounded" />
        <div className="skeleton-block h-4 w-24 rounded" />
        <div className="skeleton-block h-4 w-24 rounded" />
        <div className="skeleton-block h-4 w-16 rounded" />
      </div>
      <div className="mt-8 skeleton-block aspect-[16/8] w-full rounded-lg" />
      <div className="mt-10 max-w-3xl space-y-4">
        {Array.from({ length: 8 }, (_, index) => (
          <div
            key={index}
            className={`skeleton-block h-5 rounded ${
              index % 3 === 2 ? "w-3/4" : "w-full"
            }`}
          />
        ))}
      </div>
    </article>
  );
}
