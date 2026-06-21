import Link from "next/link";

export default function AboutHero() {
  return (
    <div className="motion-fade-up mx-auto max-w-7xl px-6 pt-8">
      <nav className="flex items-center gap-2 text-sm text-zinc-500">
        <Link href="/" className="hover:text-zinc-800">Home</Link>
        <span>›</span>
        <span className="font-semibold text-secondary-800">Tentang Kami</span>
      </nav>

      <div className="border-b border-zinc-200 py-10">
        <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          Menyuarakan Inklusivitas Melalui
          <br />
          <span className="italic font-normal">Jurnalisme Data</span>
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-7 text-zinc-600">
          Paravoice.id hadir untuk mengangkat cerita, prestasi, dan realitas
          kehidupan atlet disabilitas di Indonesia. Kami percaya bahwa olahraga
          disabilitas tidak hanya tentang medali dan kemenangan, tetapi juga
          tentang perjuangan, hak, akses, kesetaraan, serta kemanusiaan.
        </p>
        <p className="mt-5 max-w-3xl text-base leading-7 text-zinc-600">
          Di tengah minimnya ruang pemberitaan yang secara konsisten membahas
          olahraga disabilitas, Paravoice.id berupaya menjadi media yang
          memberikan perhatian khusus pada suara-suara yang sering
          terpinggirkan. Kami menghadirkan liputan mendalam, laporan berbasis
          data, dokumentasi visual, serta cerita human interest yang menempatkan
          atlet disabilitas sebagai subjek utama, bukan sekadar objek
          pemberitaan.
        </p>
        <p className="mt-5 max-w-3xl text-base leading-7 text-zinc-600">
          Melalui karya jurnalistik yang akurat, berimbang, dan berperspektif
          inklusif, kami ingin membangun pemahaman publik yang lebih luas
          mengenai dunia olahraga disabilitas sekaligus mendorong terciptanya
          masyarakat yang lebih setara.
        </p>
      </div>
    </div>
  );
}
