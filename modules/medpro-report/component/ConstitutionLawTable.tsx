"use client";

const constitutionRows = [
  {
    pasal: "Pasal 28H Ayat (2)",
    bunyi: "Setiap orang berhak mendapat kemudahan dan perlakuan khusus untuk memperoleh kesempatan dan manfaat yang sama guna mencapai persamaan dan keadilan.",
    relevansi: "Menjadi landasan tindakan afirmatif (affirmative action) dan pemenuhan aksesibilitas serta akomodasi yang layak bagi penyandang disabilitas di ranah publik dan fasilitas olahraga.",
  },
  {
    pasal: "Pasal 28I Ayat (2)",
    bunyi: "Setiap orang bebas dari perlakuan yang bersifat diskriminatif atas dasar apa pun dan berhak mendapatkan perlindungan terhadap perlakuan yang bersifat diskriminatif itu.",
    relevansi: "Jaminan hukum mutlak bahwa atlet disabilitas bebas dari segala bentuk diskriminasi, eksklusi, atau pembatasan sarana/prasarana penunjang prestasi.",
  },
  {
    pasal: "Pasal 27 Ayat (2)",
    bunyi: "Tiap-tiap warga negara berhak atas pekerjaan dan penghidupan yang layak bagi kemanusiaan.",
    relevansi: "Memberikan kepastian hak ekonomi, termasuk bagi mantan atlet disabilitas agar mendapatkan hak atas jaminan kesejahteraan sosial dan karir yang layak pasca-pensiun.",
  },
  {
    pasal: "Pasal 31 Ayat (1)",
    bunyi: "Setiap warga negara berhak mendapat pendidikan.",
    relevansi: "Menjamin hak pendidikan jasmani dan olahraga yang inklusif serta setara sejak usia dini bagi penyandang disabilitas.",
  },
];

export default function ConstitutionLawTable() {
  return (
    <div className="w-full bg-white text-[#0a3358]">
      <div className="border-b border-[#e5ded3] bg-[#0a3358] px-5 py-4 text-white">
        <h3 className="font-sans text-base font-extrabold uppercase tracking-[0.16em]">
          Landasan Hak Disabilitas dalam UUD 1945
        </h3>
        <p className="mt-1 text-xs font-normal text-slate-300">
          UUD Negara Republik Indonesia Tahun 1945
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse font-sans text-sm">
          <thead>
            <tr className="bg-[#f5efe5] text-left text-xs font-extrabold uppercase tracking-[0.12em] text-[#6f4a1e] border-b border-[#eadccb]">
              <th className="w-48 px-5 py-4">Pasal</th>
              <th className="min-w-[280px] px-5 py-4">Bunyi Pasal</th>
              <th className="min-w-[280px] px-5 py-4">Relevansi & Hak Disabilitas</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#eadccb]">
            {constitutionRows.map((row) => (
              <tr key={row.pasal} className="align-top hover:bg-zinc-50/50 transition-colors">
                <td className="bg-[#fbf8f3] px-5 py-4 font-bold text-[#0a3358] whitespace-nowrap">
                  {row.pasal}
                </td>
                <td className="px-5 py-4 leading-relaxed font-normal text-zinc-700">
                  “{row.bunyi}”
                </td>
                <td className="px-5 py-4 leading-relaxed font-normal text-zinc-600">
                  {row.relevansi}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
