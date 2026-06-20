const equipmentRows = [
  {
    item: "Kursi roda harian",
    nonDisability: "Tidak diperlukan",
    disability: "Rp4 juta (Tiongkok) sampai Rp6,7 juta tiba di Bandung.",
  },
  {
    item: "Kursi roda balap (atletik)",
    nonDisability: "Tidak diperlukan",
    disability:
      "Rp140-210 juta untuk produk Amerika berbahan titanium, atau sekitar Rp100 juta untuk produk Indonesia berbahan baja.",
  },
  {
    item: "Timer catur (standar)",
    nonDisability: "Rp2 juta",
    disability: "Rp7,5 juta per unit untuk edisi Braille atau taktil.",
  },
  {
    item: "Guide rail (bowling tunanetra)",
    nonDisability: "Tidak diperlukan",
    disability: "Tersedia dengan jumlah terbatas dan baru ada sejak 2014.",
  },
  {
    item: "Raket/shuttlecock bulutangkis",
    nonDisability: "Bisa habis 1 slop per hari.",
    disability: "Sama.",
  },
];

export default function EquipmentComparisonTable() {
  return (
    <section className="overflow-hidden rounded-xl border border-[#d9d2c7] bg-white">
      <div className="border-b border-[#e5ded3] bg-[#f7f3ed] px-5 py-4">
        <h3 className="font-sans text-sm font-extrabold uppercase tracking-[0.16em] text-[#a94f00]">
          Peralatan
        </h3>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse font-sans text-sm text-[#0a3358]">
          <thead>
            <tr className="bg-[#0a3358] text-left text-white">
              <th className="min-w-56 px-5 py-4 font-extrabold">Peralatan</th>
              <th className="min-w-52 px-5 py-4 font-extrabold">
                Non Disabilitas
              </th>
              <th className="min-w-72 px-5 py-4 font-extrabold">
                Disabilitas
              </th>
            </tr>
          </thead>
          <tbody>
            {equipmentRows.map((row) => (
              <tr
                className="border-t border-[#e5ded3] odd:bg-white even:bg-[#fbf8f3]"
                key={row.item}
              >
                <td className="px-5 py-4 align-top font-extrabold text-[#0a3358]">
                  {row.item}
                </td>
                <td className="px-5 py-4 align-top font-normal leading-7 text-[#0a3358]">
                  {row.nonDisability}
                </td>
                <td className="px-5 py-4 align-top font-normal leading-7 text-[#0a3358]">
                  {row.disability}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="border-t border-[#e5ded3] bg-[#fbf8f3] px-5 py-4">
        <p className="font-sans text-xs font-normal leading-6 text-[#6e7d8b]">
          Sumber: Aden Ahmad (Atlet Tennis), Muslim (Atlet Catur), Bambang
          Basuki (Atlet Bowling), dan Djumono Sekretaris Umum NPCI Kota
          Bandung.
        </p>
      </div>
    </section>
  );
}
