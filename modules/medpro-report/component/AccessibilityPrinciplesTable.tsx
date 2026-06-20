const accessibilityPrinciples = [
  {
    principle: "Kegunaan",
    description:
      "Fasilitas bisa benar-benar digunakan oleh penyandang disabilitas, bukan sekadar ada secara fisik.",
  },
  {
    principle: "Keselamatan",
    description: "Tidak menimbulkan risiko bagi pengguna.",
  },
  {
    principle: "Kenyamanan",
    description:
      "Fasilitas membuat atlet tidak harus berjuang keras hanya untuk masuk ke gedung latihan.",
  },
  {
    principle: "Kemandirian",
    description:
      'Penyandang disabilitas bisa mengakses tanpa harus selalu dibantu atau "digotong" orang lain.',
  },
];

export default function AccessibilityPrinciplesTable() {
  return (
    <section className="overflow-hidden rounded-xl border border-[#d9d2c7] bg-white">
      <div className="border-b border-[#e5ded3] bg-[#f7f3ed] px-5 py-4">
        <h3 className="font-sans text-sm font-extrabold uppercase tracking-[0.16em] text-[#a94f00]">
          Empat Asas Aksesibilitas
        </h3>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse font-sans text-sm text-[#0a3358]">
          <thead>
            <tr className="bg-[#0a3358] text-left text-white">
              <th className="w-16 px-5 py-4 font-extrabold">No.</th>
              <th className="min-w-48 px-5 py-4 font-extrabold">Asas</th>
              <th className="min-w-80 px-5 py-4 font-extrabold">Makna</th>
            </tr>
          </thead>
          <tbody>
            {accessibilityPrinciples.map((item, index) => (
              <tr
                className="border-t border-[#e5ded3] odd:bg-white even:bg-[#fbf8f3]"
                key={item.principle}
              >
                <td className="px-5 py-4 align-top font-extrabold text-[#a94f00]">
                  {index + 1}
                </td>
                <td className="px-5 py-4 align-top font-extrabold uppercase tracking-[0.08em] text-[#0a3358]">
                  {item.principle}
                </td>
                <td className="px-5 py-4 align-top font-normal leading-7 text-[#0a3358]">
                  {item.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
