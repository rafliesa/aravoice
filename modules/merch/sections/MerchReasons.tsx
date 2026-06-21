import Image from "next/image";
import {
  BadgeIcon,
  HeartIcon,
  InfinityIcon,
  LeafIcon,
} from "@/modules/merch/component/icons";

const reasons = [
  {
    title: "Desain Eksklusif",
    description:
      "Setiap produk dirancang secara khusus dengan membawa identitas dan misi ParaVoice.",
    icon: BadgeIcon,
  },
  {
    title: "Mendukung Misi Sosial",
    description:
      "Keuntungan digunakan langsung untuk mendukung media olahraga yang inklusif dan independen.",
    icon: HeartIcon,
  },
  {
    title: "Produk Berkualitas",
    description:
      "Kami hanya menggunakan material terbaik yang tahan lama dan ramah lingkungan.",
    icon: LeafIcon,
  },
  {
    title: "Komunitas yang Inklusif",
    description:
      "Menjadi bagian dari gerakan global untuk menyuarakan yang tak terdengar.",
    icon: InfinityIcon,
  },
];

export default function MerchReasons() {
  return (
    <section className="overflow-hidden bg-[#111f42] px-6 py-24 text-white">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="motion-fade-up">
          <h2 className="max-w-xl text-4xl font-extrabold leading-tight md:text-5xl">
            Mengapa Memilih Koleksi Para Merch?
          </h2>

          <div className="mt-10 space-y-8">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;

              return (
                <article
                  key={reason.title}
                  className="motion-fade-up flex gap-5"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-white/16 text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold">{reason.title}</h3>
                    <p className="mt-2 max-w-xl text-base leading-7 text-[#9aa7c2]">
                      {reason.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="motion-slide-in-right relative min-h-[30rem] lg:min-h-[39rem]">
          <div className="absolute left-8 right-[-9rem] top-8 h-[31rem] rotate-3 rounded-3xl border-8 border-[#1e315d] bg-[#13254b] shadow-2xl shadow-black/25" />
          <div className="absolute left-0 right-0 top-0 grid grid-cols-2 gap-5 rounded-2xl p-4 md:grid-cols-3 lg:left-8 lg:right-[-3rem] lg:top-10">
            {[
              "/merch/hoodie-inklusif.png",
              "/merch/tote-bag.png",
              "/merch/topi-para.png",
              "/merch/sticker-sheet.png",
              "/merch/tumbler-orange.png",
              "/merch/mug-jurnalis.png",
            ].map((image, index) => (
              <div
                key={image}
                className={`relative aspect-square overflow-hidden rounded-lg bg-white/8 shadow-xl ${
                  index % 2 === 0 ? "translate-y-6" : ""
                }`}
              >
                <Image
                  src={image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 16vw, 28vw"
                  className="object-cover opacity-90"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
