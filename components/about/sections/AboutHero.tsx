import Link from "next/link";

export default function AboutHero() {
  return (
    <div className="mx-auto max-w-7xl px-6 pt-8">
      <nav className="flex items-center gap-2 text-sm text-zinc-500">
        <Link href="/" className="hover:text-zinc-800">Home</Link>
        <span>›</span>
        <span className="font-semibold text-[#F29100]">Tentang Kami</span>
      </nav>

      <div className="border-b border-zinc-200 py-10">
        <h1 className="font-caslon text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          Menyuarakan Inklusivitas Melalui
          <br />
          <span className="italic font-normal">Jurnalisme Data</span>
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-7 text-zinc-600">
          Kami hadir untuk Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
}