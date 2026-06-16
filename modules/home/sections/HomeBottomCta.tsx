import { DesignLink } from "@/components/design-system/Primitives";

export default function HomeBottomCta() {
  return (
    <section className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
      <div className="border-secondary flex flex-col items-center rounded-lg border-2 bg-white p-8 text-center">
        <h2 className="font-caslon text-3xl font-bold tracking-tight">
          Bergabung Dengan Kami
        </h2>
        <p className="mt-4 max-w-sm text-sm leading-7 text-zinc-600">
          Dapatkan kisah dan kabar terbaru dari kesejahteraan atlet disabilitas
        </p>
        <DesignLink href="/buletin" variant="next" className="mt-6">
          Selanjutnya →
        </DesignLink>
      </div>

      <div className="flex flex-col rounded-lg border border-zinc-200 bg-white p-8">
        <h2 className="font-caslon text-3xl font-bold tracking-tight">
          Kami adalah media nirlaba independen
        </h2>
        <p className="mt-4 text-sm leading-7 text-zinc-600">
          Dukungan Anda membantu kami terus menyuarakan prestasi dan tantangan
          yang dihadapi atlet disabilitas Indonesia.
        </p>
        <DesignLink href="/donasi" variant="next" className="mt-6 w-fit">
          Donasi ♡
        </DesignLink>
      </div>
    </section>
  );
}