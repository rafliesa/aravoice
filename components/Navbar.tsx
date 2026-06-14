"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Tentang Kami", href: "/tentang-kami" },
  { label: "Para Report", href: "/para-report" },
  { label: "Para Edu", href: "/para-edu" },
  { label: "Para Atlet", href: "/para-atlet" },
  { label: "Para Data", href: "/para-data" },
  { label: "Para Pop", href: "/para-pop" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isSupportActive = pathname === "/dukung-kami";

  return (
    <header className="w-full border-b border-zinc-200 bg-zinc-50">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-6">
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/header-logo.webp"
            alt="ParaVoice.id"
            width={200}
            height={112}
            className="h-20 w-auto"
            priority
          />
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`font-sans text-base transition-colors ${
                    isActive ? "font-bold" : "font-semibold"
                  }`}
                  style={{ color: isActive ? "#8A5100" : "#544434" }}
                >
                  <span className={isActive ? "underline underline-offset-8" : undefined}>
                    {link.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-5">
          <button
            type="button"
            aria-label="Search"
            className="transition-opacity hover:opacity-70"
            style={{ color: "#544434" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </button>

          <Link
            href="/dukung-kami"
            aria-current={isSupportActive ? "page" : undefined}
            className={`rounded-md px-5 py-2.5 text-base font-semibold transition-colors ${
              isSupportActive
                ? "bg-[#9A5A00] text-white"
                : "bg-[#F29100] text-[#5B3400] hover:bg-[#dc8500]"
            }`}
          >
            Dukung Kami
          </Link>
        </div>
      </nav>
    </header>
  );
}
