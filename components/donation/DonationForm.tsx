"use client";

import { useMemo, useState } from "react";

const amounts = [50_000, 100_000, 250_000, 500_000, 1_000_000] as const;
const paymentMethods = [
  "GoPay",
  "OVO",
  "DANA",
  "ShopeePay",
  "QRIS",
  "Transfer",
] as const;

type Frequency = "once" | "monthly";

export default function DonationForm() {
  const [frequency, setFrequency] = useState<Frequency>("once");
  const [selectedAmount, setSelectedAmount] = useState<number | "custom">(
    50_000,
  );
  const [customAmount, setCustomAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<
    (typeof paymentMethods)[number]
  >("GoPay");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const donationAmount = useMemo(() => {
    if (selectedAmount !== "custom") return selectedAmount;
    return Number(customAmount.replace(/\D/g, ""));
  }, [customAmount, selectedAmount]);

  if (submitted) {
    return (
      <div className="flex min-h-[34rem] flex-col justify-center rounded-lg border border-zinc-300 bg-white p-8 shadow-[0_18px_45px_rgba(15,23,42,0.10)] sm:p-10">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#ff9827] text-[#07112c]">
          <CheckIcon />
        </div>
        <p className="mt-6 text-xs font-extrabold uppercase tracking-[0.18em] text-[#F29100]">
          Ringkasan Donasi
        </p>
        <h2 className="mt-2 font-caslon text-3xl font-bold">
          Pilihan dukunganmu sudah siap
        </h2>
        <dl className="mt-7 divide-y divide-zinc-200 border-y border-zinc-200 text-sm">
          <SummaryRow
            label="Frekuensi"
            value={frequency === "once" ? "Sekali" : "Bulanan"}
          />
          <SummaryRow
            label="Nominal"
            value={formatRupiah(donationAmount)}
          />
          <SummaryRow label="Metode" value={paymentMethod} />
        </dl>
        <p className="mt-6 text-sm leading-7 text-zinc-600">
          Belum ada transaksi yang dilakukan. Integrasi payment gateway
          diperlukan sebelum pembayaran dapat diproses.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-7 inline-flex w-fit items-center gap-2 bg-[#07112c] px-5 py-3 text-sm font-bold text-white hover:bg-[#101d42]"
        >
          Ubah pilihan
          <ArrowIcon />
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-zinc-300 bg-white p-7 shadow-[0_18px_45px_rgba(15,23,42,0.10)] sm:p-10">
      <h2 className="font-caslon text-3xl font-bold">
        Pilih Nominal Kontribusi
      </h2>
      <p className="mt-2 text-sm text-zinc-600">
        Pilih frekuensi dan jumlah dukungan yang sesuai bagi Anda.
      </p>

      <div className="mt-8 inline-grid grid-cols-2 rounded-xl bg-zinc-100 p-1">
        <FrequencyButton
          active={frequency === "once"}
          onClick={() => setFrequency("once")}
        >
          Sekali
        </FrequencyButton>
        <FrequencyButton
          active={frequency === "monthly"}
          onClick={() => setFrequency("monthly")}
        >
          Bulanan
        </FrequencyButton>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {amounts.map((amount) => (
          <button
            key={amount}
            type="button"
            aria-pressed={selectedAmount === amount}
            onClick={() => {
              setSelectedAmount(amount);
              setError("");
            }}
            className={`min-h-14 rounded border px-3 text-sm font-bold transition-colors ${
              selectedAmount === amount
                ? "border-[#ff9827] bg-[#ff9827] text-[#19120b]"
                : "border-zinc-300 bg-white text-zinc-800 hover:border-[#ff9827]"
            }`}
          >
            {formatRupiah(amount)}
          </button>
        ))}
        <button
          type="button"
          aria-pressed={selectedAmount === "custom"}
          onClick={() => {
            setSelectedAmount("custom");
            setError("");
          }}
          className={`min-h-14 rounded border px-3 text-left text-sm font-bold transition-colors ${
            selectedAmount === "custom"
              ? "border-[#ff9827] bg-[#fff3e4] text-zinc-900"
              : "border-zinc-300 bg-white text-zinc-500 hover:border-[#ff9827]"
          }`}
        >
          Custom
        </button>
      </div>

      {selectedAmount === "custom" && (
        <label className="mt-4 block">
          <span className="mb-2 block text-xs font-extrabold uppercase tracking-[0.14em] text-zinc-700">
            Nominal custom
          </span>
          <div className="flex h-14 items-center rounded border border-zinc-300 bg-white px-4 focus-within:border-[#ff9827] focus-within:ring-1 focus-within:ring-[#ff9827]">
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
              placeholder="Masukkan nominal"
              className="h-full min-w-0 flex-1 bg-transparent px-2 text-sm font-semibold outline-none placeholder:text-zinc-300"
            />
          </div>
        </label>
      )}

      <fieldset className="mt-8">
        <legend className="text-xs font-extrabold uppercase tracking-[0.14em] text-zinc-700">
          Metode pembayaran
        </legend>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {paymentMethods.map((method) => (
            <button
              key={method}
              type="button"
              aria-pressed={paymentMethod === method}
              onClick={() => setPaymentMethod(method)}
              className={`min-h-11 rounded border px-2 text-xs font-extrabold uppercase transition-colors ${
                paymentMethod === method
                  ? "border-[#07112c] bg-[#07112c] text-white"
                  : "border-zinc-300 bg-white text-zinc-700 hover:border-[#ff9827]"
              }`}
            >
              {method}
            </button>
          ))}
        </div>
      </fieldset>

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
        className="mt-8 flex w-full items-center justify-center gap-3 rounded bg-[#ff9827] px-6 py-4 text-base font-extrabold text-[#4b2a00] transition-colors hover:bg-[#eb8615]"
      >
        Donasi Sekarang
        <ArrowIcon />
      </button>

      <p className="mt-5 text-center text-xs leading-6 text-zinc-500">
        Transaksi akan diproses setelah layanan pembayaran resmi
        diintegrasikan.
      </p>
    </div>
  );
}

function FrequencyButton({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`rounded-lg px-7 py-2.5 text-xs font-extrabold transition-colors ${
        active
          ? "bg-[#03081c] text-white shadow-sm"
          : "text-zinc-600 hover:text-zinc-950"
      }`}
    >
      {children}
    </button>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 py-4">
      <dt className="text-zinc-500">{label}</dt>
      <dd className="font-bold text-zinc-900">{value}</dd>
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

function ArrowIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
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
