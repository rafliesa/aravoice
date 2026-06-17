import { CheckDotIcon } from "@/modules/donation/component/icons";

const benefits = [
  {
    title: "Kolaborasi Konten",
    description:
      "Akses prioritas untuk sindikasi berita dan konten eksklusif atlet disabilitas.",
  },
  {
    title: "Eksposur Media",
    description:
      "Pencantuman logo mitra di platform ParaVoice dan jaringan media kami.",
  },
  {
    title: "Kampanye Sosial",
    description:
      "Kerjasama kampanye inklusi dan keberagaman yang disesuaikan.",
  },
  {
    title: "Akses Komunitas",
    description:
      "Jaringan langsung ke atlet, pelatih, dan penggerak isu disabilitas.",
  },
  {
    title: "Workshop Eksklusif",
    description:
      "Pelatihan aksesibilitas digital dan komunikasi inklusif untuk tim Anda.",
  },
  {
    title: "Event Co-hosting",
    description:
      "Peluang menjadi partner resmi di acara-acara olahraga disabilitas.",
  },
];

export default function DonationPartnershipForm() {
  return (
    <section
      id="manfaat-bermitra"
      className="scroll-mt-24 border-t border-[#d4d8e0] bg-white px-6 py-20"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-start">
        <div>
          <h2 className="text-4xl font-extrabold tracking-tight">
            Manfaat Bermitra
          </h2>

          <div className="mt-10 grid gap-x-12 gap-y-8 md:grid-cols-2">
            {benefits.map((benefit, index) => (
              <article
                key={benefit.title}
                className="motion-fade-up flex gap-4"
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <span className="mt-0.5 shrink-0 text-[#062747]">
                  <CheckDotIcon />
                </span>
                <div>
                  <h3 className="text-base font-extrabold">{benefit.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#5d6574]">
                    {benefit.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <form className="motion-slide-in-right rounded-2xl bg-[#f4f4f4] p-9 shadow-[0_24px_60px_rgba(15,23,42,0.14)]">
          <h2 className="text-center text-2xl font-extrabold">
            Kirim Permohonan Kemitraan
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm font-semibold">
                Nama Organisasi
              </span>
              <input className="h-12 w-full border border-[#cdd2dc] bg-white px-3 outline-none focus:border-[#062747]" />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-semibold">
                Tipe Kemitraan
              </span>
              <select className="h-12 w-full border border-[#cdd2dc] bg-white px-3 outline-none focus:border-[#062747]">
                <option>Media Partner</option>
                <option>Community Partner</option>
                <option>Corporate Partner</option>
                <option>Event Partner</option>
              </select>
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-semibold">
                Nama Kontak
              </span>
              <input className="h-12 w-full border border-[#cdd2dc] bg-white px-3 outline-none focus:border-[#062747]" />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-semibold">Email</span>
              <input
                type="email"
                className="h-12 w-full border border-[#cdd2dc] bg-white px-3 outline-none focus:border-[#062747]"
              />
            </label>
          </div>

          <label className="mt-5 block">
            <span className="mb-2 block text-sm font-semibold">
              Pesan / Rencana Kolaborasi
            </span>
            <textarea className="min-h-40 w-full resize-y border border-[#cdd2dc] bg-white p-3 outline-none focus:border-[#062747]" />
          </label>

          <button
            type="button"
            className="mt-7 h-14 w-full rounded-md bg-[#062747] text-base font-extrabold text-white transition-colors hover:bg-[#0b355f]"
          >
            Ajukan Kerjasama
          </button>
        </form>
      </div>
    </section>
  );
}
