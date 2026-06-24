"use client";

import { useMemo, useState } from "react";

const amounts = [25_000, 50_000, 100_000, 250_000, 500_000] as const;

const impactCopy = {
  25_000: "Dukunganmu membantu kami mengangkat cerita, data, dan suara atlet disabilitas ke ruang publik.",
  50_000: "Dukunganmu membantu kami mengangkat cerita, data, dan suara atlet disabilitas ke ruang publik.",
  100_000: "Dukunganmu membantu kami mengangkat cerita, data, dan suara atlet disabilitas ke ruang publik.",
  250_000: "Dukunganmu membantu kami mengangkat cerita, data, dan suara atlet disabilitas ke ruang publik.",
  500_000: "Dukunganmu membantu kami mengangkat cerita, data, dan suara atlet disabilitas ke ruang publik.",
} as const;

export default function DonationForm() {
  const [selectedAmount, setSelectedAmount] = useState<number | "custom">(
    100_000,
  );
  const [customAmount, setCustomAmount] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const donationAmount = useMemo(() => {
    if (selectedAmount !== "custom") return selectedAmount;
    return Number(customAmount.replace(/\D/g, ""));
  }, [customAmount, selectedAmount]);

  const selectedImpact =
    selectedAmount === "custom"
      ? "Dukunganmu membantu kami mengangkat cerita, data, dan suara atlet disabilitas ke ruang publik."
      : impactCopy[selectedAmount as keyof typeof impactCopy];

  if (submitted) {
    return (
      <div className="mx-auto max-w-3xl rounded-2xl border border-[#d7dbe4] bg-white p-8 text-center shadow-[0_22px_55px_rgba(15,23,42,0.10)]">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#9a5a00] text-white">
          <CheckIcon />
        </div>
        <h2 className="mt-5 text-3xl font-extrabold">
          Dukungan {formatRupiah(donationAmount)} sudah siap
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-zinc-600">
          Belum ada transaksi yang diproses. Tahap berikutnya membutuhkan
          integrasi payment gateway resmi.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-7 inline-flex h-12 items-center justify-center rounded-md border border-[#07112c] px-6 text-sm font-extrabold text-[#07112c] hover:bg-[#07112c] hover:text-white"
        >
          Ubah nominal
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
      <div className="motion-fade-up">
        <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#9a5a00]">
          Donasi
        </p>
        <h1 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
          Pilih Nominal Donasi
        </h1>
        <p className="mt-4 max-w-xl text-base leading-7 text-[#5d6574]">
          Dukung redaksi Paravoice.id! Langkah kecil kamu, perubahan besar
          bagi jurnalisme berkualitas.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {amounts.map((amount) => (
            <button
              key={amount}
              type="button"
              aria-pressed={selectedAmount === amount}
              onClick={() => {
                setSelectedAmount(amount);
                setError("");
              }}
              className={`h-20 rounded-lg border px-3 text-lg font-extrabold transition-all hover:-translate-y-0.5 ${
                selectedAmount === amount
                  ? "border-[#9a5a00] bg-[#9a5a00] text-white shadow-lg shadow-[#9a5a00]/20"
                  : "border-[#c8ccd5] bg-white text-[#101522] hover:border-[#9a5a00] hover:bg-[#fff8ef]"
              }`}
            >
              {formatCompactRupiah(amount)}
            </button>
          ))}
          <button
            type="button"
            aria-pressed={selectedAmount === "custom"}
            onClick={() => {
              setSelectedAmount("custom");
              setError("");
            }}
            className={`h-20 rounded-lg border px-3 text-lg font-extrabold transition-all hover:-translate-y-0.5 ${
              selectedAmount === "custom"
                ? "border-[#9a5a00] bg-[#9a5a00] text-white shadow-lg shadow-[#9a5a00]/20"
                : "border-[#c8ccd5] bg-white text-[#101522] hover:border-[#9a5a00] hover:bg-[#fff8ef]"
            }`}
          >
            Nominal lain
          </button>
        </div>

        <div
          className={`mt-5 overflow-hidden rounded-xl border bg-white transition-colors ${
            selectedAmount === "custom"
              ? "border-[#9a5a00] shadow-lg shadow-[#9a5a00]/10"
              : "border-[#d7dbe4]"
          }`}
        >
          <button
            type="button"
            aria-pressed={selectedAmount === "custom"}
            onClick={() => {
              setSelectedAmount("custom");
              setError("");
            }}
            className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
          >
            <span>
              <span className="block text-sm font-extrabold text-[#101522]">
                Mau isi nominal sendiri?
              </span>
              <span className="mt-1 block text-sm leading-6 text-[#5d6574]">
                Pilih nominal dukungan yang paling sesuai untukmu.
              </span>
            </span>
            <span
              className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                selectedAmount === "custom"
                  ? "border-[#9a5a00] bg-[#9a5a00]"
                  : "border-[#a7adba]"
              }`}
              aria-hidden="true"
            >
              {selectedAmount === "custom" && (
                <span className="h-2 w-2 rounded-full bg-white" />
              )}
            </span>
          </button>

          {selectedAmount === "custom" && (
            <label className="block border-t border-[#ece0d1] bg-[#fff8ef] px-5 py-4">
              <span className="mb-2 block text-xs font-extrabold uppercase tracking-[0.14em] text-zinc-700">
                Nominal donasi
              </span>
              <div className="flex h-14 items-center rounded-lg border border-[#d2b98f] bg-white px-4 focus-within:border-[#9a5a00] focus-within:ring-1 focus-within:ring-[#9a5a00]">
                <span className="text-sm font-bold text-zinc-500">Rp</span>
              <input
                type="text"
                inputMode="numeric"
                value={customAmount}
                onChange={(event) => {
                  setCustomAmount(
                    event.target.value.replace(/\D/g, "").slice(0, 10),
                  );
                  setError("");
                }}
                  placeholder="Contoh: 75000"
                className="h-full min-w-0 flex-1 bg-transparent px-2 text-sm font-semibold outline-none placeholder:text-zinc-300"
              />
            </div>
              <span className="mt-2 block text-xs font-semibold text-[#7a8190]">
                Minimal Rp 10.000.
              </span>
            </label>
          )}
        </div>

        {error && (
          <p role="alert" className="mt-5 text-sm font-semibold text-red-700">
            {error}
          </p>
        )}

        <button
          type="button"
          onClick={() => {
            if (!Number.isFinite(donationAmount) || donationAmount < 10_000) {
              setError("Nominal donasi minimal Rp 10.000.");
              return;
            }
            setError("");
            setSubmitted(true);
          }}
          className="mt-8 flex h-14 w-full max-w-md items-center justify-center rounded-md bg-[#9a5a00] px-8 text-base font-extrabold text-white shadow-lg shadow-[#9a5a00]/20 transition-all hover:-translate-y-0.5 hover:bg-[#7c4800]"
        >
          Ya, saya mau mendukung
        </button>
      </div>

      <aside className="motion-slide-in-right rounded-3xl border border-[#d7dbe4] bg-white p-7 shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
        <div className="rounded-2xl bg-[#f6f0e7] p-6">
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#9a5a00]">
            Dampak Kamu Nyata!
          </p>
          <p className="mt-4 text-4xl font-extrabold text-[#101522]">
            {formatRupiah(donationAmount || 0)}
          </p>
          <p className="mt-4 min-h-14 text-base leading-7 text-[#5d6574]">
            {selectedImpact}
          </p>
        </div>
        <div className="mt-5 grid grid-cols-3 gap-3 text-center">
          {[
            ["150+", "Liputan"],
            ["50+", "Atlet"],
            ["100%", "Independen"],
          ].map(([value, label]) => (
            <div key={label} className="rounded-xl border border-[#e2e4ea] p-4">
              <p className="text-2xl font-extrabold text-[#101522]">{value}</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-wide text-[#7a8190]">
                {label}
              </p>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}

function formatRupiah(value: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
}

function formatCompactRupiah(value: number) {
  return `Rp ${value / 1000}k`;
}

function CheckIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}
