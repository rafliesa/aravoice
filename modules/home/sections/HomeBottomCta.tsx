import Image from "next/image";
import Link from "next/link";
import {
  CheckCircleIcon,
  HandHeartIcon,
} from "@/modules/home/component/icons";

const memberBenefits = [
  "Laporan Mendalam Eksklusif",
  "Tanpa Iklan (Ad-Free Experience)",
  "Undangan Event Komunitas",
];

const merchImages = [
  "/merch/sticker-sheet.png",
  "/merch/hoodie-inklusif.png",
  "/merch/tote-bag.png",
  "/merch/tumbler-orange.png",
];

export default function HomeBottomCta() {
  return (
    <>
      <section className="mx-auto mt-20 grid max-w-7xl grid-cols-1 gap-12 px-6 pb-16 md:grid-cols-2">
        <article className="rounded-2xl border border-[#d7dbe4] bg-[#fbf8f1] px-12 py-12 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#182036]">
            Jadi Anggota ParaVoice
          </h2>
          <p className="mx-auto mt-8 max-w-md text-left text-base leading-8 text-[#4f5564]">
            Dapatkan akses eksklusif ke laporan mendalam, podcast khusus atlet,
            dan newsletter mingguan yang dikurasi khusus untuk komunitas
            disabilitas.
          </p>

          <ul className="mx-auto mt-7 max-w-md space-y-4 text-left text-sm font-semibold text-[#202020]">
            {memberBenefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-3">
                <span className="text-[#9a5a00]">
                  <CheckCircleIcon />
                </span>
                {benefit}
              </li>
            ))}
          </ul>

          <Link
            href="/buletin"
            className="mx-auto mt-16 flex h-14 max-w-md items-center justify-center rounded-md bg-[#9a5a00] px-8 text-base font-extrabold text-white transition-colors hover:bg-[#7c4800]"
          >
            Daftar Sekarang
          </Link>
          <p className="mt-6 text-sm text-[#686868]">
            Sudah punya akun?{" "}
            <Link href="/admin/login" className="font-semibold text-[#9a5a00] hover:underline">
              Masuk di sini.
            </Link>
          </p>
        </article>

        <Link
          href="/merch"
          aria-label="Lihat Official ParaMerch"
          className="rounded-2xl border border-[#d7dbe4] bg-[#f4f4f3] px-8 py-12 transition-colors hover:border-[#9a5a00]"
        >
          <article>
            <h2 className="text-center text-3xl font-extrabold tracking-tight text-[#182036]">
              Official ParaMerch
            </h2>

            <div className="mt-8 grid gap-8 md:grid-cols-[0.7fr_1fr] md:items-center">
              <div>
                <p className="text-base leading-8 text-[#4f5564]">
                  Dapatkan Merchandise eksklusif dari ParaVoice secara langsung
                </p>
                <p className="mt-8 text-base leading-8 text-[#4f5564]">
                  Jadilah bagian dari kami dan miliki koleksi eksklusifnya sekarang!
                </p>
                <p className="mt-8 text-base font-extrabold text-[#182036]">
                  Grab Yours Now!
                </p>
              </div>

              <div className="grid aspect-[4/5] grid-cols-2 gap-3 overflow-hidden rounded-2xl border border-[#cfd3db] bg-white p-4 shadow-lg shadow-black/10">
                {merchImages.map((image) => (
                  <div key={image} className="relative overflow-hidden rounded-lg bg-[#f8f8f8]">
                    <Image
                      src={image}
                      alt=""
                      fill
                      sizes="(min-width: 768px) 12vw, 35vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </article>
        </Link>
      </section>

      <section className="bg-[#062747] px-6 py-18 text-center text-white">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto flex w-fit text-white">
            <HandHeartIcon />
          </div>
          <h2 className="mt-6 text-4xl font-extrabold leading-tight md:text-5xl">
            Dukung Jurnalisme Inklusif untuk Atlet Disabilitas
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[#d6e1ef]">
            Setiap donasi Anda membantu tim redaksi kami untuk terus meliput
            kisah-kisah prestasi yang seringkali luput dari media mainstream.
            Wujudkan ruang media yang benar-benar mewakili semua.
          </p>
          <Link
            href="/donasi"
            className="mx-auto mt-12 flex h-14 w-fit min-w-56 items-center justify-center rounded-md bg-[#9a5a00] px-10 text-base font-extrabold text-white transition-colors hover:bg-[#7c4800]"
          >
            Donasi Sekarang
          </Link>
        </div>
      </section>
    </>
  );
}
