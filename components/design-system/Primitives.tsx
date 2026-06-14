import Image from "next/image";
import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

export const DESIGN_TOKENS = {
  colors: {
    primary: "#001F3F",
    secondary: "#FF8C00",
    tertiary: "#F5F7FA",
    neutral: "#1A1A1A",
    surfaceWarm: "#FAF9F6",
    headlineSurface: "#F5F7FA",
  },
} as const;

export const DESIGN_COLOR_CLASSES = {
  primary: {
    base: "bg-primary",
    levels: [
      "bg-primary-900",
      "bg-primary-800",
      "bg-primary-700",
      "bg-primary-600",
      "bg-primary-500",
      "bg-primary-400",
      "bg-primary-300",
      "bg-primary-200",
      "bg-primary-100",
      "bg-primary-50",
    ],
  },
  secondary: {
    base: "bg-secondary",
    levels: [
      "bg-secondary-900",
      "bg-secondary-800",
      "bg-secondary-700",
      "bg-secondary-600",
      "bg-secondary-500",
      "bg-secondary-400",
      "bg-secondary-300",
      "bg-secondary-200",
      "bg-secondary-100",
      "bg-secondary-50",
    ],
  },
  tertiary: {
    base: "bg-tertiary",
    levels: [
      "bg-tertiary-900",
      "bg-tertiary-800",
      "bg-tertiary-700",
      "bg-tertiary-600",
      "bg-tertiary-500",
      "bg-tertiary-400",
      "bg-tertiary-300",
      "bg-tertiary-200",
      "bg-tertiary-100",
      "bg-tertiary-50",
    ],
  },
  neutral: {
    base: "bg-neutral",
    levels: [
      "bg-neutral-900",
      "bg-neutral-800",
      "bg-neutral-700",
      "bg-neutral-600",
      "bg-neutral-500",
      "bg-neutral-400",
      "bg-neutral-300",
      "bg-neutral-200",
      "bg-neutral-100",
      "bg-neutral-50",
    ],
  },
} as const;

type DesignColorToken = keyof typeof DESIGN_COLOR_CLASSES;

type ColorScaleProps = {
  name: string;
  value: string;
  token: DesignColorToken;
};

const COLOR_LEVELS = [900, 800, 700, 600, 500, 400, 300, 200, 100, 50];

export function ColorScale({ name, value, token }: ColorScaleProps) {
  const colorClasses = DESIGN_COLOR_CLASSES[token];

  return (
    <article className="rounded-xl border border-zinc-200 bg-white p-5">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-primary text-xs font-extrabold uppercase tracking-[0.14em]">
          {name}
        </h3>
        <code className="text-xs font-bold uppercase text-zinc-500">{value}</code>
      </div>
      <div
        className={`mt-5 h-24 rounded-md border border-black/5 ${colorClasses.base}`}
      />
      <div className="mt-3 flex overflow-hidden rounded-sm border border-zinc-100">
        {COLOR_LEVELS.map((level, index) => (
          <span
            key={level}
            title={`${token}-${level}`}
            className={`h-5 flex-1 ${colorClasses.levels[index]}`}
          />
        ))}
      </div>
      <code className="mt-3 block text-[11px] text-zinc-500">
        bg-{token} · bg-{token}-50 … bg-{token}-900
      </code>
    </article>
  );
}

type TypeSpecimenProps = {
  label: string;
  sample: string;
  detail: string;
  variant?: "headline" | "body" | "label";
};

export function TypeSpecimen({
  label,
  sample,
  detail,
  variant = "body",
}: TypeSpecimenProps) {
  const sampleClass = {
    headline: "text-7xl font-bold tracking-tight",
    body: "text-7xl font-normal tracking-tight",
    label: "text-6xl font-medium uppercase tracking-[0.08em]",
  }[variant];

  return (
    <article className="flex min-h-64 flex-col rounded-xl border border-zinc-200 bg-[#faf9f7] p-7">
      <div className="flex items-start justify-between gap-4 text-[11px] font-extrabold uppercase tracking-[0.12em] text-zinc-500">
        <span>{label}</span>
        <span className="text-right">{detail}</span>
      </div>
      <div className={`text-neutral mt-auto text-center ${sampleClass}`}>
        {sample}
      </div>
    </article>
  );
}

type ButtonVariant = "primary" | "secondary" | "inverted" | "next";

type DesignButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

const BUTTON_VARIANTS: Record<ButtonVariant, string> = {
  primary: "border-primary bg-primary text-white hover:bg-primary-800",
  secondary: "border-neutral bg-white text-neutral hover:bg-neutral-100",
  inverted: "border-secondary bg-secondary text-white hover:bg-secondary-600",
  next: "border-primary bg-primary text-white hover:bg-primary-800",
};

const BUTTON_BASE =
  "inline-flex min-h-10 items-center justify-center gap-2 rounded-md border px-5 py-2 text-sm font-bold transition-colors";

export function DesignButton({
  variant = "primary",
  className = "",
  children,
  ...props
}: DesignButtonProps) {
  return (
    <button
      type="button"
      className={`${BUTTON_BASE} ${BUTTON_VARIANTS[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function DesignLink({
  href,
  variant = "primary",
  className = "",
  children,
}: {
  href: string;
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`${BUTTON_BASE} ${BUTTON_VARIANTS[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

type BadgeTone = "verified" | "pending" | "admin" | "new";

export function StatusBadge({
  tone,
  children,
}: {
  tone: BadgeTone;
  children: ReactNode;
}) {
  const tones: Record<BadgeTone, string> = {
    verified: "bg-emerald-100 text-emerald-700",
    pending: "bg-blue-100 text-blue-700",
    admin: "bg-primary text-white",
    new: "bg-secondary text-white",
  };

  return (
    <span
      className={`inline-flex rounded px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wide ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

export function SearchField({
  placeholder = "Search...",
}: {
  placeholder?: string;
}) {
  return (
    <label className="focus-within:border-secondary flex items-center gap-3 rounded-md border border-zinc-300 bg-white px-4 py-3">
      <SearchIcon />
      <input
        type="search"
        placeholder={placeholder}
        aria-label={placeholder}
        className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-400"
      />
    </label>
  );
}

export function TabBar({
  items,
  activeItem,
}: {
  items: string[];
  activeItem: string;
}) {
  return (
    <nav
      aria-label="Contoh tab navigasi"
      className="flex items-center justify-around rounded-xl bg-[#faf9f7] p-2"
    >
      {items.map((item) => {
        const active = item === activeItem;
        return (
          <button
            key={item}
            type="button"
            aria-pressed={active}
            className={`flex h-10 w-12 items-center justify-center rounded-md transition-colors ${
              active
                ? "bg-primary text-white"
                : "hover:text-primary text-zinc-500 hover:bg-white"
            }`}
          >
            {item === "Home" ? (
              <HomeIcon />
            ) : item === "Search" ? (
              <SearchIcon />
            ) : (
              <UserIcon />
            )}
            <span className="sr-only">{item}</span>
          </button>
        );
      })}
    </nav>
  );
}

type IconTileTone = "dark" | "orange" | "cream" | "red" | "navy" | "light";

export function IconTile({
  tone,
  label,
  icon,
}: {
  tone: IconTileTone;
  label: string;
  icon: ReactNode;
}) {
  const tones: Record<IconTileTone, string> = {
    dark: "bg-neutral text-white",
    orange: "bg-secondary text-white",
    cream: "bg-secondary-50 text-secondary",
    red: "bg-[#C91C24] text-white",
    navy: "bg-primary text-white",
    light: "text-primary border border-zinc-300 bg-white",
  };

  return (
    <div className={`flex h-20 w-20 items-center justify-center ${tones[tone]}`}>
      <span aria-hidden="true">{icon}</span>
      <span className="sr-only">{label}</span>
    </div>
  );
}

type LogoCardProps = {
  label: string;
  variant: "primary" | "black" | "white";
};

export function LogoCard({ label, variant }: LogoCardProps) {
  const wrapper =
    variant === "white"
      ? "bg-neutral-900 text-white"
      : "bg-surface-warm text-primary";
  const image =
    variant === "black"
      ? "grayscale brightness-0"
      : variant === "white"
        ? "grayscale brightness-0 invert"
        : "";

  return (
    <article className={`rounded-xl border border-zinc-200 p-7 ${wrapper}`}>
      <p className="text-xs font-extrabold uppercase tracking-[0.14em]">{label}</p>
      <div className="flex min-h-36 items-center justify-center">
        <Image
          src="/header-logo.webp"
          alt={`Logo ParaVoice ${label}`}
          width={240}
          height={134}
          className={`h-auto w-full max-w-64 ${image}`}
        />
      </div>
    </article>
  );
}

export function ShowcasePanel({
  title,
  children,
  className = "",
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <article
      className={`rounded-xl border border-zinc-200 bg-[#faf9f7] p-6 ${className}`}
    >
      <h3 className="text-xs font-extrabold uppercase tracking-[0.14em] text-zinc-500">
        {title}
      </h3>
      {children}
    </article>
  );
}

export function HomeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m3 11 9-8 9 8" />
      <path d="M5 10v10h14V10" />
      <path d="M9 20v-6h6v6" />
    </svg>
  );
}

export function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}

export function UserIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0 1 16 0" />
    </svg>
  );
}

export function EditIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z" />
    </svg>
  );
}

export function ShapesIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="5" r="3" />
      <path d="m5 21 4-7H1Z" />
      <rect x="14" y="14" width="7" height="7" />
    </svg>
  );
}

export function BulbIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M8.5 14.5A7 7 0 1 1 15.5 14.5L14 17h-4Z" />
    </svg>
  );
}

export function TrashIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 6h18" />
      <path d="M8 6V3h8v3" />
      <path d="m6 6 1 15h10l1-15" />
    </svg>
  );
}

export function MagicIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m15 4 5 5L8 21H3v-5Z" />
      <path d="m14 5 5 5" />
      <path d="M5 3v4M3 5h4M19 15v4M17 17h4" />
    </svg>
  );
}

export function TagIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 12 12 20l-8-8V4h8Z" />
      <circle cx="9" cy="9" r="1" />
    </svg>
  );
}
