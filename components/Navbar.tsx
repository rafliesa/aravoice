"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  SearchField,
  SearchIcon,
} from "@/components/design-system/Primitives";
import {
  type NewsCardData,
  formatPublishedDate,
  searchNewsByTitle,
} from "@/lib/news";

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
  const router = useRouter();
  const isSupportActive = pathname === "/dukung-kami";
  const navItemsRef = useRef<HTMLDivElement>(null);
  const activeUnderlineRef = useRef<HTMLSpanElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<NewsCardData[]>([]);
  const [searchStatus, setSearchStatus] = useState<
    "idle" | "loading" | "ready" | "error"
  >("idle");

  const closeSearch = useCallback(() => {
    setSearchOpen(false);
    setQuery("");
    setResults([]);
    setSearchStatus("idle");
  }, []);

  useEffect(() => {
    if (!searchOpen) return;

    const focusTimer = window.setTimeout(() => searchInputRef.current?.focus(), 50);
    const closeOnOutsideClick = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        closeSearch();
      }
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeSearch();
    };

    document.addEventListener("mousedown", closeOnOutsideClick);
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener("mousedown", closeOnOutsideClick);
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [closeSearch, searchOpen]);

  useEffect(() => {
    if (!searchOpen || query.trim().length < 2) return;

    const controller = new AbortController();
    const searchTimer = window.setTimeout(async () => {
      try {
        const data = await searchNewsByTitle(query.trim(), controller.signal);
        if (controller.signal.aborted) return;
        setResults(data);
        setSearchStatus("ready");
      } catch (error) {
        if ((error as Error).name === "AbortError") return;
        setResults([]);
        setSearchStatus("error");
      }
    }, 250);

    return () => {
      window.clearTimeout(searchTimer);
      controller.abort();
    };
  }, [query, searchOpen]);

  useEffect(() => {
    const navItems = navItemsRef.current;
    const underline = activeUnderlineRef.current;
    if (!navItems || !underline) return;

    const updateUnderline = () => {
      const activeLink = navItems.querySelector<HTMLElement>(
        "[data-navbar-active='true']",
      );

      if (!activeLink) {
        underline.style.opacity = "0";
        underline.style.width = "0px";
        return;
      }

      const navRect = navItems.getBoundingClientRect();
      const linkRect = activeLink.getBoundingClientRect();

      underline.style.opacity = "1";
      underline.style.width = `${linkRect.width}px`;
      underline.style.transform = `translateX(${linkRect.left - navRect.left}px)`;
    };

    const animationFrame = window.requestAnimationFrame(updateUnderline);
    window.addEventListener("resize", updateUnderline);
    document.fonts?.ready.then(updateUnderline);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", updateUnderline);
    };
  }, [pathname]);

  const submitSearch = (event: React.FormEvent) => {
    event.preventDefault();
    if (!results[0]) return;
    router.push(`/${results[0].slug}`);
    closeSearch();
  };

  const updateSearchQuery = (value: string) => {
    setQuery(value);
    setResults([]);
    setSearchStatus(value.trim().length >= 2 ? "loading" : "idle");
  };

  return (
    <header className="relative z-50 w-full border-b border-zinc-200 bg-zinc-50">
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

        <div ref={navItemsRef} className="relative hidden lg:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    data-navbar-active={isActive ? "true" : undefined}
                    className={`relative z-10 font-sans text-base transition-colors ${
                      isActive ? "font-bold" : "font-semibold"
                    }`}
                    style={{ color: isActive ? "#8A5100" : "#544434" }}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <span
            ref={activeUnderlineRef}
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-2 left-0 h-0.5 rounded-full bg-[#8A5100] opacity-0 transition-[transform,width,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none"
            style={{ width: 0, transform: "translateX(0)" }}
          />
        </div>

        <div className="flex items-center gap-5">
          <div ref={searchContainerRef} className="relative flex h-11 w-5 items-center">
            <button
              type="button"
              aria-label="Buka pencarian"
              aria-expanded={searchOpen}
              onClick={() => setSearchOpen(true)}
              className={`text-[#544434] transition-opacity hover:opacity-70 ${
                searchOpen ? "pointer-events-none opacity-0" : "opacity-100"
              }`}
            >
              <SearchIcon />
            </button>

            <div
              className={`fixed left-4 right-4 top-4 z-50 origin-right transition-all duration-200 sm:absolute sm:left-auto sm:right-0 sm:top-1/2 sm:w-80 sm:-translate-y-1/2 ${
                searchOpen
                  ? "visible scale-x-100 opacity-100"
                  : "invisible scale-x-0 opacity-0"
              }`}
            >
              <form role="search" onSubmit={submitSearch}>
                <SearchField
                  inputRef={searchInputRef}
                  value={query}
                  onChange={(event) => updateSearchQuery(event.target.value)}
                  placeholder="Cari berita..."
                  aria-label="Cari berita"
                  aria-expanded={searchOpen}
                  aria-controls="navbar-search-results"
                  autoComplete="off"
                  containerClassName="h-12 py-0 pr-2"
                  endAdornment={
                    <button
                      type="button"
                      onClick={closeSearch}
                      aria-label="Tutup pencarian"
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded text-xl text-zinc-500 hover:bg-zinc-100 hover:text-neutral"
                    >
                      ×
                    </button>
                  }
                />
              </form>

              {searchOpen && query.trim().length >= 2 && (
                <div
                  id="navbar-search-results"
                  className="absolute right-0 top-[calc(100%+0.5rem)] max-h-[min(28rem,70vh)] w-full overflow-y-auto rounded-lg border border-tertiary-200 bg-white p-2"
                >
                  {searchStatus === "loading" && (
                    <p className="px-3 py-4 text-sm text-zinc-500">
                      Mencari berita...
                    </p>
                  )}

                  {searchStatus === "error" && (
                    <p className="px-3 py-4 text-sm text-red-600">
                      Pencarian gagal. Silakan coba lagi.
                    </p>
                  )}

                  {searchStatus === "ready" && results.length === 0 && (
                    <p className="px-3 py-4 text-sm text-zinc-500">
                      Tidak ada berita yang cocok.
                    </p>
                  )}

                  {results.map((item) => (
                    <Link
                      key={item.id}
                      href={`/${item.slug}`}
                      onClick={closeSearch}
                      className="block rounded-md px-3 py-3 transition-colors hover:bg-secondary-50"
                    >
                      <p className="text-secondary-700 text-[10px] font-extrabold uppercase tracking-[0.12em]">
                        {item.category}
                      </p>
                      <p className="mt-1 text-sm font-bold leading-6 text-neutral">
                        {item.title}
                      </p>
                      <p className="mt-1 text-xs text-zinc-500">
                        {formatPublishedDate(item.published_at)} •{" "}
                        {item.reading_time} menit baca
                      </p>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          <Link
            href="/dukung-kami"
            aria-current={isSupportActive ? "page" : undefined}
            className={`rounded-md px-5 py-1.5 text-sm font-semibold transition-colors ${
              isSupportActive
                ? "bg-secondary-800 text-tertiary"
                : "bg-secondary-800 text-tertiary"
            }`}
          >
            Dukung Kami
          </Link>
        </div>
      </nav>
    </header>
  );
}
