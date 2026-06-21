import { DataIntegrityIcon, InclusivityIcon, TransparencyIcon } from "@/modules/about/component/icons";

const values = [
  {
    title: "Transparansi",
    body: "Kami menjunjung tinggi keterbukaan dalam proses jurnalistik. Setiap informasi yang kami sajikan bersumber dari proses peliputan yang dapat dipertanggungjawabkan, didukung data yang valid, serta mematuhi kode etik jurnalistik.",
    icon: <TransparencyIcon />,
  },
  {
    title: "Inklusivitas",
    body: "Kami percaya bahwa setiap individu memiliki hak yang sama untuk didengar dan wakili dirinya sendiri. Karena itu, kami mengedepankan perspektif inklusif dalam setiap liputan, bahasa, dan produk jurnalistik yang kami hasilkan.",
    icon: <InclusivityIcon />,
  },
  {
    title: "Liputan Berbasis Data",
    body: "Kami memadukan kekuatan cerita manusia dengan data yang akurat. Data membantu kami memahami persoalan secara lebih utuh, mengungkap ketimpangan yang terjadi, serta menghasilkan liputan yang lebih mendalam dan berdampak.",
    icon: <DataIntegrityIcon />,
  },
];

export default function AboutValues() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <h2 className="motion-fade-up text-center text-3xl font-bold tracking-tight">Nilai-Nilai Kami</h2>
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        {values.map((v, index) => (
          <div
            key={v.title}
            className="motion-card motion-fade-up rounded-lg border border-zinc-200 bg-white p-8"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#0b1f3a] text-white">
              {v.icon}
            </div>
            <h3 className="mt-6 text-xl font-bold">{v.title}</h3>
            <p className="mt-4 text-sm leading-7 text-zinc-600">{v.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
