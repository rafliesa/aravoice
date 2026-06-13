"use client";

import { useEffect, useState } from "react";
import RichTextEditor from "@/components/RichTextEditor";

const CATEGORIES = [
  "Liputan Khusus",
  "Para Report",
  "Para Edu",
  "Para Atlet",
  "Para Data",
  "Para Pop",
];

const FORMATS = ["TEKS", "AUDIO", "VIDEO"] as const;

type Draft = {
  id: number;
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
  createdAt: string;
};

const STORAGE_KEY = "aravoice_drafts";

const EMPTY = {
  category: CATEGORIES[0],
  title: "",
  excerpt: "",
  author: "Tim Paravoice",
  date: "",
  readingTime: "",
  formats: ["TEKS"] as string[],
  coverImage: "",
  caption: "",
  body: "",
};

export default function AdminPage() {
  const [form, setForm] = useState(EMPTY);
  const [drafts, setDrafts] = useState<Draft[]>([]);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setDrafts(JSON.parse(raw));
    } catch {
      // ignore malformed storage
    }
  }, []);

  function persist(next: Draft[]) {
    setDrafts(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  }

  function update<K extends keyof typeof EMPTY>(key: K, val: (typeof EMPTY)[K]) {
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

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const draft: Draft = {
      id: Date.now(),
      ...form,
      createdAt: new Date().toISOString(),
    };
    persist([draft, ...drafts]);
    setForm(EMPTY);
    setSaved(true);
    window.setTimeout(() => setSaved(false), 3000);
  }

  function deleteDraft(id: number) {
    persist(drafts.filter((d) => d.id !== id));
  }

  return (
    <div className="flex-1 bg-[#faf8f3] text-[#1a1a1a]">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <header className="border-b border-zinc-200 pb-6">
          <p className="text-sm font-bold tracking-wider text-[#F29100]">ADMIN</p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight">Buat Berita</h1>
          <p className="mt-2 text-sm text-zinc-500">
            Backend belum tersedia — draft disimpan sementara di browser (localStorage).
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
                    className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#F29100]"
                  />
                </Field>
                <Field label="Durasi Baca">
                  <input
                    value={form.readingTime}
                    onChange={(e) => update("readingTime", e.target.value)}
                    placeholder="12 menit baca"
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
            <div className="mx-auto max-w-2xl pl-14">
              <input
                value={form.title}
                onChange={(e) => update("title", e.target.value)}
                placeholder="Judul cerita…"
                required
                className="w-full bg-transparent font-serif text-4xl font-bold leading-tight tracking-tight outline-none placeholder:text-zinc-300"
              />
              <div className="mt-6">
                <RichTextEditor
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
              className="rounded-md bg-[#1a1a1a] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-black"
            >
              Simpan Berita
            </button>
            {saved && <span className="text-sm font-medium text-green-600">✓ Tersimpan</span>}
          </div>
        </form>

        {/* Saved drafts */}
        <section className="mt-14 border-t border-zinc-200 pt-8">
          <h2 className="text-xl font-extrabold tracking-tight">
            Draft Tersimpan ({drafts.length})
          </h2>
          {drafts.length === 0 ? (
            <p className="mt-3 text-sm text-zinc-500">Belum ada draft.</p>
          ) : (
            <ul className="mt-5 divide-y divide-zinc-200">
              {drafts.map((d) => (
                <li key={d.id} className="flex items-center justify-between gap-4 py-4">
                  <div>
                    <p className="text-xs font-bold tracking-wider text-[#F29100]">{d.category}</p>
                    <p className="mt-1 font-semibold">{d.title || "(Tanpa judul)"}</p>
                    <p className="mt-1 text-xs text-zinc-500">
                      {d.author} • {d.date || "tanpa tanggal"} • {d.formats.join(", ")}
                    </p>
                  </div>
                  <button
                    onClick={() => deleteDraft(d.id)}
                    className="shrink-0 rounded-md border border-zinc-300 px-4 py-2 text-xs font-semibold text-zinc-700 transition-colors hover:border-red-300 hover:bg-red-50 hover:text-red-600"
                  >
                    Hapus
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
