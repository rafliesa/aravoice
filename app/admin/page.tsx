"use client";

import { useEffect, useState } from "react";
import RichTextEditor from "@/components/RichTextEditor";
import {
  type CreateNewsPayload,
  type News,
  formatPublishedDate,
  getResponseError,
  slugify,
} from "@/lib/news";

const CATEGORIES = [
  "Liputan Khusus",
  "Para Report",
  "Para Edu",
  "Para Atlet",
  "Para Data",
  "Para Pop",
];

const FORMATS = ["TEKS", "AUDIO", "VIDEO"] as const;

type FormState = {
  category: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readingTime: string;
  formats: string[];
  coverImage: string;
  caption: string;
  body: string;
  isPublished: boolean;
};

function createEmptyForm(): FormState {
  return {
    category: CATEGORIES[0],
    title: "",
    excerpt: "",
    author: "Tim Paravoice",
    date: "",
    readingTime: "",
    formats: ["TEKS"],
    coverImage: "",
    caption: "",
    body: "",
    isPublished: true,
  };
}

export default function AdminPage() {
  const [form, setForm] = useState<FormState>(createEmptyForm);
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [deletingId, setDeletingId] = useState<number | null>(null);
  const [editorKey, setEditorKey] = useState(0);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function loadNews() {
      try {
        const response = await fetch("/api/news", {
          cache: "no-store",
          signal: controller.signal,
        });
        if (!response.ok) throw new Error(await getResponseError(response));
        setNews((await response.json()) as News[]);
      } catch (error) {
        if ((error as Error).name !== "AbortError") {
          setMessage({
            type: "error",
            text: error instanceof Error ? error.message : "Gagal memuat berita",
          });
        }
      } finally {
        setLoading(false);
      }
    }

    loadNews();
    return () => controller.abort();
  }, []);

  function update<K extends keyof FormState>(key: K, val: FormState[K]) {
    setForm((f) => ({ ...f, [key]: val }));
  }

  function toggleFormat(fmt: string) {
    setForm((f) => ({
      ...f,
      formats: f.formats.includes(fmt)
        ? f.formats.filter((x) => x !== fmt)
        : [...f.formats, fmt],
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const slug = slugify(form.title);
    const readingTime = Number.parseInt(form.readingTime, 10);
    if (!slug || !form.body.trim() || Number.isNaN(readingTime)) {
      setMessage({
        type: "error",
        text: "Judul, isi berita, dan durasi baca wajib diisi.",
      });
      return;
    }

    const payload: CreateNewsPayload = {
      slug,
      category: form.category,
      title: form.title,
      excerpt: form.excerpt,
      body: form.body,
      author: form.author,
      reading_time: readingTime,
      cover_image: form.coverImage,
      caption: form.caption,
      formats: form.formats,
      published_at: new Date(`${form.date}T12:00:00`).toISOString(),
      is_published: form.isPublished,
    };

    setSubmitting(true);
    setMessage(null);
    try {
      const response = await fetch("/api/news", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error(await getResponseError(response));

      const created = (await response.json()) as News;
      setNews((current) => [created, ...current]);
      setForm(createEmptyForm());
      setEditorKey((key) => key + 1);
      setMessage({ type: "success", text: "Berita tersimpan ke backend." });
    } catch (error) {
      setMessage({
        type: "error",
        text: error instanceof Error ? error.message : "Gagal menyimpan berita",
      });
    } finally {
      setSubmitting(false);
    }
  }

  async function deleteNews(id: number) {
    setDeletingId(id);
    setMessage(null);
    try {
      const response = await fetch(`/api/news/${id}`, { method: "DELETE" });
      if (!response.ok) throw new Error(await getResponseError(response));
      setNews((current) => current.filter((item) => item.id !== id));
      setMessage({ type: "success", text: "Berita berhasil dihapus." });
    } catch (error) {
      setMessage({
        type: "error",
        text: error instanceof Error ? error.message : "Gagal menghapus berita",
      });
    } finally {
      setDeletingId(null);
    }
  }

  return (
    <div className="flex-1 bg-[#faf8f3] text-[#1a1a1a]">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <header className="border-b border-zinc-200 pb-6">
          <p className="text-sm font-bold tracking-wider text-[#F29100]">ADMIN</p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight">Buat Berita</h1>
          <p className="mt-2 text-sm text-zinc-500">
            Berita disimpan langsung ke API Aravoice.
          </p>
        </header>

        <form onSubmit={handleSubmit}>
          {/* Metadata + cover preview */}
          <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div className="space-y-6">
              <Field label="Kategori">
                <select
                  value={form.category}
                  onChange={(e) => update("category", e.target.value)}
                  className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#F29100]"
                >
                  {CATEGORIES.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </Field>

              <Field label="Ringkasan / Deskripsi">
                <textarea
                  value={form.excerpt}
                  onChange={(e) => update("excerpt", e.target.value)}
                  rows={3}
                  placeholder="Deskripsi singkat berita"
                  className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#F29100]"
                />
              </Field>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                <Field label="Penulis">
                  <input
                    value={form.author}
                    onChange={(e) => update("author", e.target.value)}
                    className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#F29100]"
                  />
                </Field>
                <Field label="Tanggal">
                  <input
                    type="date"
                    value={form.date}
                    onChange={(e) => update("date", e.target.value)}
                    required
                    className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#F29100]"
                  />
                </Field>
                <Field label="Durasi Baca (menit)">
                  <input
                    type="number"
                    min="0"
                    value={form.readingTime}
                    onChange={(e) => update("readingTime", e.target.value)}
                    placeholder="12"
                    required
                    className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#F29100]"
                  />
                </Field>
              </div>

              <Field label="Format Tersedia">
                <div className="flex flex-wrap gap-2">
                  {FORMATS.map((fmt) => {
                    const isActive = form.formats.includes(fmt);
                    return (
                      <button
                        key={fmt}
                        type="button"
                        onClick={() => toggleFormat(fmt)}
                        className={`rounded px-3 py-1.5 text-xs font-bold tracking-wide transition-colors ${
                          isActive
                            ? "bg-[#F29100] text-white"
                            : "bg-zinc-200 text-zinc-600 hover:bg-zinc-300"
                        }`}
                      >
                        {fmt}
                      </button>
                    );
                  })}
                </div>
              </Field>

              <Field label="Status Publikasi">
                <div className="flex items-center gap-3 rounded-md border border-zinc-300 bg-white px-3 py-2.5 text-sm">
                  <input
                    type="checkbox"
                    checked={form.isPublished}
                    onChange={(e) => update("isPublished", e.target.checked)}
                    className="h-4 w-4 accent-[#F29100]"
                  />
                  Tampilkan berita di halaman utama
                </div>
              </Field>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <Field label="URL Gambar Sampul">
                  <input
                    value={form.coverImage}
                    onChange={(e) => update("coverImage", e.target.value)}
                    placeholder="https://…"
                    className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#F29100]"
                  />
                </Field>
                <Field label="Caption Gambar">
                  <input
                    value={form.caption}
                    onChange={(e) => update("caption", e.target.value)}
                    placeholder="Keterangan foto"
                    className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#F29100]"
                  />
                </Field>
              </div>
            </div>

            {/* Cover preview */}
            <div className="lg:sticky lg:top-6 lg:self-start">
              <p className="mb-3 text-sm font-bold tracking-wider text-zinc-400">PRATINJAU KARTU</p>
              <article className="overflow-hidden rounded-lg border border-zinc-200 bg-white">
                {form.coverImage ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={form.coverImage} alt="" className="aspect-[16/10] w-full object-cover" />
                ) : (
                  <div className="aspect-[16/10] w-full bg-black" />
                )}
                <div className="p-6">
                  <p className="text-xs font-bold tracking-wider text-[#F29100]">
                    {form.category.toUpperCase()}
                  </p>
                  <h2 className="mt-3 text-2xl font-extrabold leading-tight">
                    {form.title || "Judul berita akan tampil di sini"}
                  </h2>
                  {form.excerpt && (
                    <p className="mt-3 text-sm leading-7 text-zinc-600">{form.excerpt}</p>
                  )}
                  <div className="mt-4 flex flex-wrap gap-3 text-xs text-zinc-500">
                    {form.author && <span>Oleh {form.author}</span>}
                    {form.date && <span>• {form.date}</span>}
                    {form.readingTime && <span>• {form.readingTime}</span>}
                  </div>
                  {form.formats.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {form.formats.map((f) => (
                        <span key={f} className="rounded bg-zinc-200 px-2 py-0.5 text-[10px] font-bold text-zinc-700">
                          {f}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            </div>
          </div>

          {/* Medium-style writing canvas */}
          <div className="mt-12 border-t border-zinc-200 pt-10">
            <div className="mx-auto max-w-3xl px-6">
              <input
                value={form.title}
                onChange={(e) => update("title", e.target.value)}
                placeholder="Judul cerita…"
                required
                className="w-full bg-transparent font-serif text-4xl font-bold leading-tight tracking-tight outline-none placeholder:text-zinc-300 sm:text-5xl"
              />
              <div className="mt-6">
                <RichTextEditor
                  key={editorKey}
                  value={form.body}
                  onChange={(html) => update("body", html)}
                  placeholder="Ceritakan kisahmu…"
                />
              </div>
            </div>
          </div>

          <div className="mt-10 flex items-center gap-4 border-t border-zinc-200 pt-6">
            <button
              type="submit"
              disabled={submitting}
              className="rounded-md bg-[#1a1a1a] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-black disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting ? "Menyimpan…" : "Simpan Berita"}
            </button>
            {message && (
              <span
                className={`text-sm font-medium ${
                  message.type === "success" ? "text-green-700" : "text-red-600"
                }`}
              >
                {message.text}
              </span>
            )}
          </div>
        </form>

        {/* Saved news */}
        <section className="mt-14 border-t border-zinc-200 pt-8">
          <h2 className="text-xl font-extrabold tracking-tight">
            Berita Tersimpan ({news.length})
          </h2>
          {loading ? (
            <p className="mt-3 text-sm text-zinc-500">Memuat berita…</p>
          ) : news.length === 0 ? (
            <p className="mt-3 text-sm text-zinc-500">Belum ada berita.</p>
          ) : (
            <ul className="mt-5 divide-y divide-zinc-200">
              {news.map((item) => (
                <li key={item.id} className="flex items-center justify-between gap-4 py-4">
                  <div>
                    <p className="text-xs font-bold tracking-wider text-[#F29100]">
                      {item.category} · {item.is_published ? "TERBIT" : "DRAFT"}
                    </p>
                    <p className="mt-1 font-semibold">{item.title}</p>
                    <p className="mt-1 text-xs text-zinc-500">
                      {item.author} • {formatPublishedDate(item.published_at)} •{" "}
                      {item.reading_time} menit • {item.formats.join(", ") || "tanpa format"}
                    </p>
                  </div>
                  <button
                    onClick={() => deleteNews(item.id)}
                    disabled={deletingId === item.id}
                    className="shrink-0 rounded-md border border-zinc-300 px-4 py-2 text-xs font-semibold text-zinc-700 transition-colors hover:border-red-300 hover:bg-red-50 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {deletingId === item.id ? "Menghapus…" : "Hapus"}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-zinc-700">{label}</span>
      {children}
    </label>
  );
}
