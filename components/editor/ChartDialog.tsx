"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import { renderChartSvg, type ChartData, type ChartType, type ChartSeries } from "./chartRender";

type Props = {
  initial?: ChartData | null;
  onClose: () => void;
  onSave: (data: ChartData) => void;
};

function emptyData(): ChartData {
  return {
    type: "bar",
    title: "",
    labels: ["Jan", "Feb", "Mar", "Apr"],
    series: [{ label: "Seri 1", values: [10, 20, 15, 30] }],
    source: "",
  };
}

export default function ChartDialog({ initial, onClose, onSave }: Props) {
  const [data, setData] = useState<ChartData>(() => initial ?? emptyData());
  const [rawLabels, setRawLabels] = useState(() => data.labels.join(", "));
  const [error, setError] = useState("");

  function setField<K extends keyof ChartData>(key: K, value: ChartData[K]) {
    setData((prev) => ({ ...prev, [key]: value }));
  }

  function updateSeriesLabel(si: number, label: string) {
    setData((prev) => {
      const series = prev.series.map((s, i) => (i === si ? { ...s, label } : s));
      return { ...prev, series };
    });
  }

  function updateSeriesValues(si: number, raw: string) {
    const values = raw
      .split(",")
      .map((v) => parseFloat(v.trim()))
      .filter((v) => !Number.isNaN(v));
    setData((prev) => {
      const series = prev.series.map((s, i) => (i === si ? { ...s, values } : s));
      return { ...prev, series };
    });
  }

  function addSeries() {
    const n = data.labels.length || 1;
    setData((prev) => ({
      ...prev,
      series: [...prev.series, { label: `Seri ${prev.series.length + 1}`, values: Array(n).fill(0) }],
    }));
  }

  function removeSeries(si: number) {
    setData((prev) => ({ ...prev, series: prev.series.filter((_, i) => i !== si) }));
  }

  function applyLabels(raw: string) {
    setRawLabels(raw);
    const labels = raw.split(",").map((l) => l.trim()).filter(Boolean);
    setData((prev) => ({ ...prev, labels }));
  }

  function handleSave() {
    if (!data.labels.length) {
      setError("Label sumbu X wajib diisi.");
      return;
    }
    if (!data.series.length || data.series.every((s) => !s.values.length)) {
      setError("Minimal satu seri data wajib diisi.");
      return;
    }
    setError("");
    onSave(data);
  }

  const preview = (() => {
    try {
      return renderChartSvg(data);
    } catch {
      return "";
    }
  })();

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="chart-dialog-title"
        className="flex w-full max-w-3xl flex-col gap-5 rounded-xl bg-white p-6 shadow-2xl"
        style={{ maxHeight: "90vh", overflowY: "auto" }}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 id="chart-dialog-title" className="text-lg font-bold">
              {initial ? "Edit Grafik" : "Sisipkan Grafik"}
            </h2>
            <p className="mt-0.5 text-sm text-zinc-500">
              Isi data lalu lihat pratinjau di bawah.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup dialog"
            className="rounded px-2 py-1 text-xl leading-none text-zinc-500 hover:bg-zinc-100"
          >
            ×
          </button>
        </div>

        {/* Type selector */}
        <div>
          <label className="mb-1.5 block text-sm font-semibold">Jenis grafik</label>
          <div className="grid grid-cols-3 gap-2">
            {(["bar", "line", "pie"] as ChartType[]).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setField("type", t)}
                className={`rounded-lg border py-2.5 text-sm font-semibold capitalize transition-colors ${
                  data.type === t
                    ? "border-[#F29100] bg-orange-50 text-[#c47800]"
                    : "border-zinc-200 text-zinc-600 hover:bg-zinc-50"
                }`}
              >
                {t === "bar" ? "Batang" : t === "line" ? "Garis" : "Lingkaran"}
              </button>
            ))}
          </div>
        </div>

        {/* Title + source */}
        <div className="grid grid-cols-2 gap-4">
          <label className="block">
            <span className="mb-1.5 block text-sm font-semibold">Judul grafik</span>
            <input
              value={data.title}
              onChange={(e) => setField("title", e.target.value)}
              placeholder="Judul grafik…"
              className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm outline-none focus:border-[#F29100]"
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-sm font-semibold">Sumber data</span>
            <input
              value={data.source ?? ""}
              onChange={(e) => setField("source", e.target.value)}
              placeholder="BPS, Kemenkes, dll."
              className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm outline-none focus:border-[#F29100]"
            />
          </label>
        </div>

        {/* Labels */}
        {data.type !== "pie" && (
          <label className="block">
            <span className="mb-1.5 block text-sm font-semibold">
              Label sumbu X <span className="font-normal text-zinc-400">(pisah dengan koma)</span>
            </span>
            <input
              value={rawLabels}
              onChange={(e) => applyLabels(e.target.value)}
              placeholder="Jan, Feb, Mar, Apr"
              className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm outline-none focus:border-[#F29100]"
            />
          </label>
        )}

        {data.type === "pie" && (
          <label className="block">
            <span className="mb-1.5 block text-sm font-semibold">
              Label tiap irisan <span className="font-normal text-zinc-400">(pisah dengan koma)</span>
            </span>
            <input
              value={rawLabels}
              onChange={(e) => applyLabels(e.target.value)}
              placeholder="Kategori A, Kategori B, Kategori C"
              className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm outline-none focus:border-[#F29100]"
            />
          </label>
        )}

        {/* Series */}
        <div>
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm font-semibold">
              {data.type === "pie" ? "Nilai tiap irisan" : "Seri data"}
            </span>
            {data.type !== "pie" && (
              <button
                type="button"
                onClick={addSeries}
                className="rounded-md border border-zinc-300 px-3 py-1.5 text-xs font-semibold text-zinc-700 hover:bg-zinc-50"
              >
                + Tambah seri
              </button>
            )}
          </div>
          <div className="space-y-3">
            {data.series.map((s, si) => (
              <div key={si} className="flex gap-2">
                {data.type !== "pie" && (
                  <input
                    value={s.label}
                    onChange={(e) => updateSeriesLabel(si, e.target.value)}
                    placeholder={`Nama seri ${si + 1}`}
                    className="w-28 shrink-0 rounded-md border border-zinc-300 px-2 py-2 text-sm outline-none focus:border-[#F29100]"
                  />
                )}
                <input
                  value={s.values.join(", ")}
                  onChange={(e) => updateSeriesValues(si, e.target.value)}
                  placeholder="10, 20, 15, 30"
                  className="min-w-0 flex-1 rounded-md border border-zinc-300 px-2 py-2 text-sm outline-none focus:border-[#F29100]"
                />
                {data.series.length > 1 && data.type !== "pie" && (
                  <button
                    type="button"
                    onClick={() => removeSeries(si)}
                    className="rounded-md border border-zinc-200 px-2 py-2 text-xs text-zinc-500 hover:border-red-300 hover:text-red-500"
                  >
                    ×
                  </button>
                )}
              </div>
            ))}
          </div>
          <p className="mt-1.5 text-xs text-zinc-400">
            {data.type === "pie"
              ? "Satu angka per irisan, pisah dengan koma."
              : "Angka per titik data, pisah dengan koma."}
          </p>
        </div>

        {/* Preview */}
        {preview && (
          <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-3 overflow-x-auto">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Pratinjau
            </p>
            <div dangerouslySetInnerHTML={{ __html: preview }} />
          </div>
        )}

        {error && (
          <p role="alert" className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">
            {error}
          </p>
        )}

        {/* Actions */}
        <div className="flex justify-end gap-2 border-t border-zinc-200 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="rounded-md border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700"
          >
            Batal
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-semibold text-white"
          >
            {initial ? "Simpan Perubahan" : "Sisipkan Grafik"}
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
}
