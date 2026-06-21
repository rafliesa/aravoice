"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import RichTextEditor from "@/components/RichTextEditor";
import {
  type CreateMerchProductPayload,
  type MerchProduct,
  fetchAllMerchProducts,
  getMerchResponseError,
} from "@/lib/merch";
import {
  type CreateNewsPayload,
  type News,
  formatPublishedDate,
  getResponseError,
  slugify,
} from "@/lib/news";
import Field from "./component/Field";

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

type MerchFormState = {
  name: string;
  category: string;
  description: string;
  price: string;
  image: string;
  sortOrder: string;
  isActive: boolean;
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

function createEmptyMerchForm(): MerchFormState {
  return {
    name: "",
    category: "Pakaian",
    description: "",
    price: "",
    image: "",
    sortOrder: "10",
    isActive: true,
  };
}

function createFormFromNews(item: News): FormState {
  return {
    category: item.category,
    title: item.title,
    excerpt: item.excerpt,
    author: item.author,
    date: item.published_at.slice(0, 10),
    readingTime: String(item.reading_time),
    formats: item.formats,
    coverImage: item.cover_image,
    caption: item.caption,
    body: item.body,
    isPublished: item.is_published,
  };
}

function createFormFromMerch(item: MerchProduct): MerchFormState {
  return {
    name: item.name,
    category: item.category,
    description: item.description,
    price: item.price,
    image: item.image,
    sortOrder: String(item.sort_order),
    isActive: item.is_active,
  };
}

function sortNews(items: News[]) {
  return [...items].sort((a, b) => {
    const dateDifference =
      new Date(b.published_at).getTime() - new Date(a.published_at).getTime();
    return dateDifference || b.id - a.id;
  });
}

function sortMerchProducts(items: MerchProduct[]) {
  return [...items].sort((a, b) => a.sort_order - b.sort_order || a.id - b.id);
}

function CoverImageInput({
  value,
  onChange,
}: {
  value: string;
  onChange: (url: string) => void;
}) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleFile(file: File) {
    if (!file.type.startsWith("image/")) {
      setError("File harus berupa gambar.");
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      setError("Ukuran file melebihi batas 10 MB.");
      return;
    }
    setError("");
    setUploading(true);
    try {
      const strategyRes = await fetch("/api/uploads", { cache: "no-store" });
      if (!strategyRes.ok) throw new Error(await getResponseError(strategyRes));
      const strategy = (await strategyRes.json()) as { strategy: string };
      if (strategy.strategy === "unavailable") {
        throw new Error("Penyimpanan media belum dikonfigurasi.");
      }

      let url: string;
      if (strategy.strategy === "blob") {
        const { upload } = await import("@vercel/blob/client");
        const blob = await upload(`news/${file.name}`, file, {
          access: "public",
          contentType: file.type,
          handleUploadUrl: "/api/uploads",
          multipart: true,
          clientPayload: JSON.stringify({ mimeType: file.type, size: file.size }),
        });
        url = blob.url;
      } else {
        const data = new FormData();
        data.append("file", file);
        const res = await fetch("/api/uploads", { method: "POST", body: data });
        if (!res.ok) throw new Error(await getResponseError(res));
        const result = (await res.json()) as { url: string };
        url = result.url;
      }
      onChange(url);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Gagal mengunggah gambar.");
    } finally {
      setUploading(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  }

  return (
    <div className="space-y-2">
      <div className="flex gap-2">
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="https://…"
          className="min-w-0 flex-1 rounded-md border border-zinc-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#F29100]"
        />
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={uploading}
          className="shrink-0 rounded-md border border-zinc-300 bg-white px-3 py-2.5 text-xs font-semibold text-zinc-700 transition-colors hover:border-zinc-400 hover:bg-zinc-50 disabled:cursor-wait disabled:opacity-60"
        >
          {uploading ? "Mengunggah…" : "Pilih Gambar"}
        </button>
      </div>
      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp,image/gif"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleFile(file);
        }}
      />
      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  );
}

export default function AdminDashboard() {
  const [form, setForm] = useState<FormState>(createEmptyForm);
  const [merchForm, setMerchForm] = useState<MerchFormState>(
    createEmptyMerchForm,
  );
  const [news, setNews] = useState<News[]>([]);
  const [merchProducts, setMerchProducts] = useState<MerchProduct[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editingMerchId, setEditingMerchId] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [merchLoading, setMerchLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [submittingMerch, setSubmittingMerch] = useState(false);
  const [deletingId, setDeletingId] = useState<number | null>(null);
  const [deletingMerchId, setDeletingMerchId] = useState<number | null>(null);
  const [editorKey, setEditorKey] = useState(0);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  const [merchMessage, setMerchMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const merchFormRef = useRef<HTMLFormElement>(null);

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

  useEffect(() => {
    const controller = new AbortController();

    async function loadMerchProducts() {
      try {
        setMerchProducts(
          sortMerchProducts(await fetchAllMerchProducts(controller.signal)),
        );
      } catch (error) {
        if ((error as Error).name !== "AbortError") {
          setMerchMessage({
            type: "error",
            text:
              error instanceof Error ? error.message : "Gagal memuat merch",
          });
        }
      } finally {
        setMerchLoading(false);
      }
    }

    loadMerchProducts();
    return () => controller.abort();
  }, []);

  function update<K extends keyof FormState>(key: K, val: FormState[K]) {
    setForm((f) => ({ ...f, [key]: val }));
  }

  function updateMerch<K extends keyof MerchFormState>(
    key: K,
    val: MerchFormState[K],
  ) {
    setMerchForm((f) => ({ ...f, [key]: val }));
  }

  function toggleFormat(fmt: string) {
    setForm((f) => ({
      ...f,
      formats: f.formats.includes(fmt)
        ? f.formats.filter((x) => x !== fmt)
        : [...f.formats, fmt],
    }));
  }

  function resetForm() {
    setEditingId(null);
    setForm(createEmptyForm());
    setEditorKey((key) => key + 1);
  }

  function resetMerchForm() {
    setEditingMerchId(null);
    setMerchForm(createEmptyMerchForm());
  }

  function editNews(item: News) {
    setEditingId(item.id);
    setForm(createFormFromNews(item));
    setEditorKey((key) => key + 1);
    setMessage(null);
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function editMerchProduct(item: MerchProduct) {
    setEditingMerchId(item.id);
    setMerchForm(createFormFromMerch(item));
    setMerchMessage(null);
    merchFormRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
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
      const response = await fetch(
        editingId === null ? "/api/news" : `/api/news/${editingId}`,
        {
          method: editingId === null ? "POST" : "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        },
      );
      if (!response.ok) throw new Error(await getResponseError(response));

      const saved = (await response.json()) as News;
      setNews((current) =>
        sortNews(
          editingId === null
            ? [saved, ...current]
            : current.map((item) => (item.id === saved.id ? saved : item)),
        ),
      );
      resetForm();
      setMessage({
        type: "success",
        text:
          editingId === null
            ? "Berita berhasil disimpan."
            : "Perubahan berita berhasil disimpan.",
      });
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
      if (editingId === id) resetForm();
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

  async function handleMerchSubmit(e: React.FormEvent) {
    e.preventDefault();

    const sortOrder = Number.parseInt(merchForm.sortOrder, 10);
    if (
      !merchForm.name.trim() ||
      !merchForm.category.trim() ||
      !merchForm.description.trim() ||
      !merchForm.price.trim() ||
      !merchForm.image.trim() ||
      Number.isNaN(sortOrder)
    ) {
      setMerchMessage({
        type: "error",
        text: "Nama, kategori, deskripsi, harga, gambar, dan urutan wajib diisi.",
      });
      return;
    }

    const payload: CreateMerchProductPayload = {
      name: merchForm.name,
      category: merchForm.category,
      description: merchForm.description,
      price: merchForm.price,
      image: merchForm.image,
      sort_order: sortOrder,
      is_active: merchForm.isActive,
    };

    setSubmittingMerch(true);
    setMerchMessage(null);
    try {
      const response = await fetch(
        editingMerchId === null
          ? "/api/merch"
          : `/api/merch/${editingMerchId}`,
        {
          method: editingMerchId === null ? "POST" : "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        },
      );
      if (!response.ok) throw new Error(await getMerchResponseError(response));

      const saved = (await response.json()) as MerchProduct;
      setMerchProducts((current) =>
        sortMerchProducts(
          editingMerchId === null
            ? [...current, saved]
            : current.map((item) => (item.id === saved.id ? saved : item)),
        ),
      );
      resetMerchForm();
      setMerchMessage({
        type: "success",
        text:
          editingMerchId === null
            ? "Produk merch berhasil disimpan."
            : "Perubahan produk merch berhasil disimpan.",
      });
    } catch (error) {
      setMerchMessage({
        type: "error",
        text:
          error instanceof Error ? error.message : "Gagal menyimpan produk merch",
      });
    } finally {
      setSubmittingMerch(false);
    }
  }

  async function deleteMerchProduct(id: number) {
    setDeletingMerchId(id);
    setMerchMessage(null);
    try {
      const response = await fetch(`/api/merch/${id}`, { method: "DELETE" });
      if (!response.ok) throw new Error(await getMerchResponseError(response));
      setMerchProducts((current) => current.filter((item) => item.id !== id));
      if (editingMerchId === id) resetMerchForm();
      setMerchMessage({ type: "success", text: "Produk merch berhasil dihapus." });
    } catch (error) {
      setMerchMessage({
        type: "error",
        text:
          error instanceof Error ? error.message : "Gagal menghapus produk merch",
      });
    } finally {
      setDeletingMerchId(null);
    }
  }

  return (
    <div className="flex-1 bg-[#faf8f3] text-[#1a1a1a]">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <header className="border-b border-zinc-200 pb-6">
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm font-bold tracking-wider text-[#F29100]">ADMIN</p>
            <form action="/api/admin/logout" method="post">
              <button
                type="submit"
                className="rounded-md border border-zinc-300 px-4 py-2 text-xs font-semibold text-zinc-700 transition-colors hover:border-zinc-400 hover:bg-white"
              >
                Keluar
              </button>
            </form>
          </div>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight">
            {editingId === null ? "Buat Berita" : "Edit Berita"}
          </h1>
          <p className="mt-2 text-sm text-zinc-500">
            {editingId === null
              ? "Berita disimpan langsung melalui Next.js dan Prisma."
              : "Perbarui isi berita yang sudah tersimpan."}
          </p>
        </header>

        <form ref={formRef} onSubmit={handleSubmit}>
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
                  <CoverImageInput
                    value={form.coverImage}
                    onChange={(url) => update("coverImage", url)}
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
              <p className="mb-3 text-sm font-bold tracking-wider text-zinc-400">
                PRATINJAU KARTU
              </p>
              <article className="overflow-hidden rounded-lg border border-zinc-200 bg-white">
                {form.coverImage ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={form.coverImage}
                    alt=""
                    className="aspect-[16/10] w-full object-cover"
                  />
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
                    <p className="mt-3 text-sm leading-7 text-zinc-600">
                      {form.excerpt}
                    </p>
                  )}
                  <div className="mt-4 flex flex-wrap gap-3 text-xs text-zinc-500">
                    {form.author && <span>Oleh {form.author}</span>}
                    {form.date && <span>• {form.date}</span>}
                    {form.readingTime && <span>• {form.readingTime}</span>}
                  </div>
                  {form.formats.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {form.formats.map((f) => (
                        <span
                          key={f}
                          className="rounded bg-zinc-200 px-2 py-0.5 text-[10px] font-bold text-zinc-700"
                        >
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
            <div>
              <input
                value={form.title}
                onChange={(e) => update("title", e.target.value)}
                placeholder="Judul cerita…"
                required
                className="w-full bg-transparent text-4xl font-bold leading-tight tracking-tight outline-none placeholder:text-zinc-300 sm:text-5xl"
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
              {submitting
                ? "Menyimpan…"
                : editingId === null
                  ? "Simpan Berita"
                  : "Simpan Perubahan"}
            </button>
            {editingId !== null && (
              <button
                type="button"
                onClick={resetForm}
                disabled={submitting}
                className="rounded-md border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-700 transition-colors hover:border-zinc-400 hover:bg-zinc-50 disabled:cursor-not-allowed disabled:opacity-60"
              >
                Batal Edit
              </button>
            )}
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
                <li
                  key={item.id}
                  className="flex flex-col items-start justify-between gap-4 py-4 sm:flex-row sm:items-center"
                >
                  <div>
                    <p className="text-xs font-bold tracking-wider text-[#F29100]">
                      {item.category} · {item.is_published ? "TERBIT" : "DRAFT"}
                    </p>
                    <p className="mt-1 font-semibold">{item.title}</p>
                    <p className="mt-1 text-xs text-zinc-500">
                      {item.author} • {formatPublishedDate(item.published_at)} •{" "}
                      {item.reading_time} menit •{" "}
                      {item.formats.join(", ") || "tanpa format"}
                    </p>
                  </div>
                  <div className="flex shrink-0 flex-wrap items-center gap-2 sm:justify-end">
                    <Link
                      href={`/${item.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-md border border-zinc-300 bg-white px-4 py-2 text-xs font-semibold text-zinc-700 transition-colors hover:border-zinc-400 hover:bg-zinc-50"
                    >
                      Lihat
                    </Link>
                    <button
                      type="button"
                      onClick={() => editNews(item)}
                      className="rounded-md border border-zinc-300 bg-white px-4 py-2 text-xs font-semibold text-zinc-700 transition-colors hover:border-[#F29100] hover:bg-orange-50 hover:text-[#8A5100]"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => deleteNews(item.id)}
                      disabled={deletingId === item.id}
                      className="rounded-md border border-zinc-300 px-4 py-2 text-xs font-semibold text-zinc-700 transition-colors hover:border-red-300 hover:bg-red-50 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {deletingId === item.id ? "Menghapus…" : "Hapus"}
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className="mt-14 border-t border-zinc-200 pt-8">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold tracking-wider text-[#F29100]">
                MERCH
              </p>
              <h2 className="mt-1 text-2xl font-extrabold tracking-tight">
                {editingMerchId === null ? "Tambah Produk" : "Edit Produk"}
              </h2>
              <p className="mt-2 text-sm text-zinc-500">
                Produk aktif akan tampil di halaman merch sesuai urutan.
              </p>
            </div>
            <Link
              href="/merch"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-zinc-300 bg-white px-4 py-2 text-xs font-semibold text-zinc-700 transition-colors hover:border-zinc-400 hover:bg-zinc-50"
            >
              Lihat Halaman Merch
            </Link>
          </div>

          <form ref={merchFormRef} onSubmit={handleMerchSubmit}>
            <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-2">
              <div className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <Field label="Nama Produk">
                    <input
                      value={merchForm.name}
                      onChange={(e) => updateMerch("name", e.target.value)}
                      placeholder='T-Shirt "Suara Setara"'
                      required
                      className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#F29100]"
                    />
                  </Field>
                  <Field label="Kategori">
                    <input
                      value={merchForm.category}
                      onChange={(e) => updateMerch("category", e.target.value)}
                      placeholder="Pakaian"
                      required
                      className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#F29100]"
                    />
                  </Field>
                </div>

                <Field label="Deskripsi">
                  <textarea
                    value={merchForm.description}
                    onChange={(e) =>
                      updateMerch("description", e.target.value)
                    }
                    rows={3}
                    placeholder="Deskripsi singkat produk"
                    required
                    className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#F29100]"
                  />
                </Field>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <Field label="Harga">
                    <input
                      value={merchForm.price}
                      onChange={(e) => updateMerch("price", e.target.value)}
                      placeholder="Rp 189.000"
                      required
                      className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#F29100]"
                    />
                  </Field>
                  <Field label="Urutan">
                    <input
                      type="number"
                      value={merchForm.sortOrder}
                      onChange={(e) => updateMerch("sortOrder", e.target.value)}
                      placeholder="10"
                      required
                      className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#F29100]"
                    />
                  </Field>
                </div>

                <Field label="URL Gambar Produk">
                  <CoverImageInput
                    value={merchForm.image}
                    onChange={(url) => updateMerch("image", url)}
                  />
                </Field>

                <Field label="Status Produk">
                  <div className="flex items-center gap-3 rounded-md border border-zinc-300 bg-white px-3 py-2.5 text-sm">
                    <input
                      type="checkbox"
                      checked={merchForm.isActive}
                      onChange={(e) =>
                        updateMerch("isActive", e.target.checked)
                      }
                      className="h-4 w-4 accent-[#F29100]"
                    />
                    Tampilkan produk di halaman merch
                  </div>
                </Field>
              </div>

              <div className="lg:sticky lg:top-6 lg:self-start">
                <p className="mb-3 text-sm font-bold tracking-wider text-zinc-400">
                  PRATINJAU PRODUK
                </p>
                <article className="rounded-lg border border-zinc-200 bg-white p-5">
                  {merchForm.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={merchForm.image}
                      alt=""
                      className="aspect-square w-full rounded-lg object-cover"
                    />
                  ) : (
                    <div className="aspect-square w-full rounded-lg bg-zinc-200" />
                  )}
                  <p className="mt-5 text-xs font-extrabold uppercase tracking-[0.14em] text-[#9a5a00]">
                    {merchForm.category || "Kategori"}
                  </p>
                  <h3 className="mt-2 text-xl font-extrabold leading-7 text-[#101522]">
                    {merchForm.name || "Nama produk"}
                  </h3>
                  <p className="mt-2 min-h-12 text-sm italic leading-6 text-[#5d6574]">
                    {merchForm.description || "Deskripsi produk akan tampil di sini."}
                  </p>
                  <p className="mt-4 text-lg font-extrabold text-[#070a1d]">
                    {merchForm.price || "Rp 0"}
                  </p>
                </article>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4 border-t border-zinc-200 pt-6">
              <button
                type="submit"
                disabled={submittingMerch}
                className="rounded-md bg-[#1a1a1a] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-black disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submittingMerch
                  ? "Menyimpan…"
                  : editingMerchId === null
                    ? "Simpan Produk"
                    : "Simpan Perubahan"}
              </button>
              {editingMerchId !== null && (
                <button
                  type="button"
                  onClick={resetMerchForm}
                  disabled={submittingMerch}
                  className="rounded-md border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-700 transition-colors hover:border-zinc-400 hover:bg-zinc-50 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  Batal Edit
                </button>
              )}
              {merchMessage && (
                <span
                  className={`text-sm font-medium ${
                    merchMessage.type === "success"
                      ? "text-green-700"
                      : "text-red-600"
                  }`}
                >
                  {merchMessage.text}
                </span>
              )}
            </div>
          </form>

          <div className="mt-10">
            <h3 className="text-xl font-extrabold tracking-tight">
              Produk Merch ({merchProducts.length})
            </h3>
            {merchLoading ? (
              <p className="mt-3 text-sm text-zinc-500">Memuat produk…</p>
            ) : merchProducts.length === 0 ? (
              <p className="mt-3 text-sm text-zinc-500">Belum ada produk.</p>
            ) : (
              <ul className="mt-5 divide-y divide-zinc-200">
                {merchProducts.map((item) => (
                  <li
                    key={item.id}
                    className="flex flex-col items-start justify-between gap-4 py-4 sm:flex-row sm:items-center"
                  >
                    <div className="flex min-w-0 items-center gap-4">
                      {item.image ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={item.image}
                          alt=""
                          className="h-16 w-16 shrink-0 rounded-md object-cover"
                        />
                      ) : (
                        <div className="h-16 w-16 shrink-0 rounded-md bg-zinc-200" />
                      )}
                      <div>
                        <p className="text-xs font-bold tracking-wider text-[#F29100]">
                          {item.category} ·{" "}
                          {item.is_active ? "AKTIF" : "SEMBUNYI"} · URUTAN{" "}
                          {item.sort_order}
                        </p>
                        <p className="mt-1 font-semibold">{item.name}</p>
                        <p className="mt-1 text-xs text-zinc-500">
                          {item.price} · {item.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex shrink-0 flex-wrap items-center gap-2 sm:justify-end">
                      <button
                        type="button"
                        onClick={() => editMerchProduct(item)}
                        className="rounded-md border border-zinc-300 bg-white px-4 py-2 text-xs font-semibold text-zinc-700 transition-colors hover:border-[#F29100] hover:bg-orange-50 hover:text-[#8A5100]"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => deleteMerchProduct(item.id)}
                        disabled={deletingMerchId === item.id}
                        className="rounded-md border border-zinc-300 px-4 py-2 text-xs font-semibold text-zinc-700 transition-colors hover:border-red-300 hover:bg-red-50 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        {deletingMerchId === item.id ? "Menghapus…" : "Hapus"}
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
