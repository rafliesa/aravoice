"use client";

import { useState } from "react";

export default function SupportForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div
        id="support-form"
        role="status"
        className="flex min-h-[34rem] scroll-mt-24 flex-col items-center justify-center border border-[#d5d0c9] bg-[#f8f6f3] px-8 py-12 text-center"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#F29100] text-white">
          <CheckIcon />
        </div>
        <h2 className="mt-6 text-3xl font-bold">
          Terima kasih telah bergabung
        </h2>
        <p className="mt-4 max-w-sm text-sm leading-7 text-zinc-600">
          Formulir pendaftaran kamu sudah lengkap dan berhasil diproses pada
          sesi ini.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-8 text-sm font-bold text-[#9A5A00] hover:underline"
        >
          Daftarkan anggota lain
        </button>
      </div>
    );
  }

  return (
    <div
      id="support-form"
      className="scroll-mt-24 border border-[#d5d0c9] bg-[#f8f6f3] px-6 py-8 shadow-[0_1px_0_rgba(0,0,0,0.04)] sm:px-10 sm:py-10"
    >
      <h2 className="text-3xl font-bold sm:text-4xl">
        Mulai Sekarang
      </h2>
      <p className="mt-4 text-sm leading-7 text-zinc-600">
        Daftar secara gratis untuk mendapatkan pembaruan mingguan dan akses
        komunitas.
      </p>

      <form
        className="mt-8 space-y-5"
        onSubmit={(event) => {
          event.preventDefault();
          setSubmitted(true);
        }}
      >
        <FormField
          id="support-name"
          label="Nama lengkap"
          name="name"
          placeholder="Contoh: Maulida Hasna"
          autoComplete="name"
        />
        <FormField
          id="support-email"
          label="Alamat email"
          name="email"
          type="email"
          placeholder="maulida@email.com"
          autoComplete="email"
        />
        <FormField
          id="support-password"
          label="Kata sandi"
          name="password"
          type="password"
          placeholder="Minimal 8 karakter"
          autoComplete="new-password"
          minLength={8}
        />

        <label className="flex cursor-pointer items-start gap-3 pt-1 text-sm leading-6 text-zinc-600">
          <input
            type="checkbox"
            name="privacy"
            required
            className="mt-1 h-5 w-5 shrink-0 accent-[#F29100]"
          />
          <span>
            Saya setuju dengan{" "}
            <a
              href="#kebijakan-privasi"
              className="text-secondary-800 hover:underline"
            >
              Kebijakan Privasi
            </a>{" "}
            Paravoice.id
          </span>
        </label>

        <button
          type="submit"
          className="flex w-full items-center justify-center gap-3 bg-[#052848] px-6 py-4 text-sm font-bold tracking-[0.18em] text-white transition-colors hover:bg-[#031d35]"
        >
          DAFTAR SEKARANG
          <ArrowIcon />
        </button>

        <p className="pt-2 text-center text-sm text-zinc-600">
          Sudah punya akun?{" "}
          <a href="#masuk" className="font-semibold text-zinc-900 hover:underline">
            Masuk di sini
          </a>
        </p>
      </form>
    </div>
  );
}

function FormField({
  id,
  label,
  type = "text",
  ...inputProps
}: {
  id: string;
  label: string;
  type?: "text" | "email" | "password";
  name: string;
  placeholder: string;
  autoComplete: string;
  minLength?: number;
}) {
  return (
    <label htmlFor={id} className="block">
      <span className="mb-2 block text-xs font-extrabold uppercase tracking-[0.12em] text-zinc-900">
        {label}
      </span>
      <input
        id={id}
        type={type}
        required
        {...inputProps}
        className="h-14 w-full border border-zinc-400 bg-white px-4 text-sm text-zinc-900 outline-none transition-colors placeholder:text-zinc-300 focus:border-[#F29100] focus:ring-1 focus:ring-[#F29100]"
      />
    </label>
  );
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
