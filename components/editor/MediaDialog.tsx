"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import type { EmbedProvider } from "@/components/editor/EmbedNode";
import type { MediaKind } from "@/components/editor/MediaNode";
import { normalizeEmbedUrl } from "@/components/editor/embed";
import { getResponseError } from "@/lib/news";

type DialogMode = "image" | "audio" | "video" | "embed";

type InsertPayload =
  | { type: "image"; src: string }
  | { type: "media"; kind: MediaKind; src: string }
  | { type: "embed"; provider: EmbedProvider; src: string };

type Props = {
  open: boolean;
  onClose: () => void;
  onInsert: (payload: InsertPayload) => void;
};

type UploadResponse = {
  url: string;
  kind: "image" | MediaKind;
  mime_type: string;
  size: number;
};

type UploadStrategy = {
  strategy: "blob" | "local" | "unavailable";
};

const ACCEPT: Record<Exclude<DialogMode, "embed">, string> = {
  image: "image/jpeg,image/png,image/webp,image/gif",
  audio: "audio/mpeg,audio/wav,audio/ogg,audio/mp4,.m4a",
  video: "video/mp4,video/webm,video/ogg,.ogv",
};

const MAX_SIZE: Record<Exclude<DialogMode, "embed">, number> = {
  image: 10 << 20,
  audio: 50 << 20,
  video: 200 << 20,
};

export default function MediaDialog({ open, onClose, onInsert }: Props) {
  const [mode, setMode] = useState<DialogMode>("image");
  const [file, setFile] = useState<File | null>(null);
  const [url, setUrl] = useState("");
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && !uploading) onClose();
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [onClose, open, uploading]);

  if (!open) return null;

  const changeMode = (nextMode: DialogMode) => {
    setMode(nextMode);
    setFile(null);
    setUrl("");
    setError("");
  };

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");

    if (mode === "embed") {
      const embed = normalizeEmbedUrl(url);
      if (!embed) {
        setError("Link harus berasal dari YouTube, Vimeo, Spotify, atau SoundCloud.");
        return;
      }
      onInsert({ type: "embed", ...embed });
      onClose();
      return;
    }

    if (mode === "image" && url.trim()) {
      const imageUrl = safeImageUrl(url);
      if (!imageUrl) {
        setError("URL gambar harus menggunakan http atau https.");
        return;
      }
      onInsert({ type: "image", src: imageUrl });
      onClose();
      return;
    }

    if (!file) {
      setError(`Pilih file ${mode} terlebih dahulu.`);
      return;
    }
    if (file.size > MAX_SIZE[mode]) {
      setError(`Ukuran file melebihi batas ${MAX_SIZE[mode] >> 20} MB.`);
      return;
    }

    setUploading(true);
    try {
      const strategyResponse = await fetch("/api/uploads", {
        cache: "no-store",
      });
      if (!strategyResponse.ok) {
        throw new Error(await getResponseError(strategyResponse));
      }
      const strategy = (await strategyResponse.json()) as UploadStrategy;
      if (strategy.strategy === "unavailable") {
        throw new Error(
          "Penyimpanan media belum dikonfigurasi. Hubungkan Vercel Blob ke project.",
        );
      }

      const uploaded =
        strategy.strategy === "blob"
          ? await uploadToBlob(file, mode)
          : await uploadToLocalStorage(file);
      if (uploaded.kind !== mode) {
        throw new Error(`File yang diterima bukan ${mode}.`);
      }
      if (mode === "image") {
        onInsert({ type: "image", src: uploaded.url });
      } else {
        onInsert({ type: "media", kind: mode, src: uploaded.url });
      }
      onClose();
    } catch (uploadError) {
      setError(
        uploadError instanceof Error ? uploadError.message : "Media gagal diunggah.",
      );
    } finally {
      setUploading(false);
    }
  };

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 p-4"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget && !uploading) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="media-dialog-title"
        className="w-full max-w-lg rounded-xl bg-white p-5 shadow-2xl"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 id="media-dialog-title" className="text-lg font-bold">
              Sisipkan media
            </h2>
            <p className="mt-1 text-sm text-zinc-500">
              Unggah file atau masukkan link dari provider yang didukung.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            disabled={uploading}
            aria-label="Tutup dialog"
            className="rounded px-2 py-1 text-xl leading-none text-zinc-500 hover:bg-zinc-100 disabled:opacity-50"
          >
            ×
          </button>
        </div>

        <div className="mt-5 grid grid-cols-4 gap-1 rounded-lg bg-zinc-100 p-1">
          {(["image", "audio", "video", "embed"] as DialogMode[]).map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => changeMode(item)}
              className={`rounded-md px-2 py-2 text-xs font-semibold capitalize ${
                mode === item ? "bg-white text-zinc-900 shadow-sm" : "text-zinc-500"
              }`}
            >
              {item === "image" ? "Gambar" : item}
            </button>
          ))}
        </div>

        <form onSubmit={submit} className="mt-5 space-y-4">
          {mode === "embed" ? (
            <label className="block">
              <span className="mb-1.5 block text-sm font-semibold">Link embed</span>
              <input
                value={url}
                onChange={(event) => setUrl(event.target.value)}
                placeholder="https://youtube.com/watch?v=..."
                autoFocus
                className="w-full rounded-md border border-zinc-300 px-3 py-2.5 text-sm outline-none focus:border-[#F29100]"
              />
              <span className="mt-1.5 block text-xs text-zinc-500">
                YouTube, Vimeo, Spotify, atau SoundCloud.
              </span>
            </label>
          ) : (
            <>
              <label className="block">
                <span className="mb-1.5 block text-sm font-semibold">
                  File {mode === "image" ? "gambar" : mode}
                </span>
                <input
                  type="file"
                  accept={ACCEPT[mode]}
                  onChange={(event) => {
                    setFile(event.target.files?.[0] ?? null);
                    setError("");
                  }}
                  className="block w-full rounded-md border border-zinc-300 bg-white p-2 text-sm file:mr-3 file:rounded file:border-0 file:bg-zinc-900 file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-white"
                />
                <span className="mt-1.5 block text-xs text-zinc-500">
                  Maksimal {MAX_SIZE[mode] >> 20} MB.
                </span>
              </label>
              {mode === "image" && (
                <label className="block border-t border-zinc-200 pt-4">
                  <span className="mb-1.5 block text-sm font-semibold">
                    Atau URL gambar
                  </span>
                  <input
                    value={url}
                    onChange={(event) => setUrl(event.target.value)}
                    placeholder="https://..."
                    className="w-full rounded-md border border-zinc-300 px-3 py-2.5 text-sm outline-none focus:border-[#F29100]"
                  />
                </label>
              )}
            </>
          )}

          {error && (
            <p role="alert" className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">
              {error}
            </p>
          )}

          <div className="flex justify-end gap-2 border-t border-zinc-200 pt-4">
            <button
              type="button"
              onClick={onClose}
              disabled={uploading}
              className="rounded-md border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 disabled:opacity-50"
            >
              Batal
            </button>
            <button
              type="submit"
              disabled={uploading}
              className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-semibold text-white disabled:cursor-wait disabled:opacity-60"
            >
              {uploading ? "Mengunggah..." : "Sisipkan"}
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body,
  );
}

function safeImageUrl(value: string) {
  try {
    const parsed = new URL(value.trim());
    return parsed.protocol === "http:" || parsed.protocol === "https:"
      ? parsed.toString()
      : null;
  } catch {
    return null;
  }
}

async function uploadToBlob(
  file: File,
  kind: Exclude<DialogMode, "embed">,
): Promise<UploadResponse> {
  const { upload } = await import("@vercel/blob/client");
  const blob = await upload(blobPathname(file.name), file, {
    access: "public",
    contentType: file.type,
    handleUploadUrl: "/api/uploads",
    multipart: true,
    clientPayload: JSON.stringify({
      mimeType: file.type,
      size: file.size,
    }),
  });

  return {
    url: blob.url,
    kind,
    mime_type: file.type,
    size: file.size,
  };
}

async function uploadToLocalStorage(file: File): Promise<UploadResponse> {
  const data = new FormData();
  data.append("file", file);
  const response = await fetch("/api/uploads", { method: "POST", body: data });
  if (!response.ok) throw new Error(await getResponseError(response));
  return (await response.json()) as UploadResponse;
}

function blobPathname(filename: string) {
  const extension =
    filename
      .toLowerCase()
      .match(/\.(?:jpe?g|png|webp|gif|mp3|wav|ogg|oga|m4a|mp4|webm|ogv)$/)?.[0] ??
    "";
  const basename = filename.slice(0, extension ? -extension.length : undefined);
  const normalized = basename
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9._-]+/g, "-")
    .replace(/^[^a-z0-9]+|[^a-z0-9]+$/g, "")
    .slice(0, 130);
  return `news/${normalized || "media"}${extension}`;
}

export type { InsertPayload };
