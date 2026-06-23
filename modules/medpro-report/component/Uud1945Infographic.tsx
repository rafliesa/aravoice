"use client";

const pasalData = [
  {
    id: "28h-2",
    pasal: "PASAL 28H AYAT (2)",
    judul: "Kesetaraan Hukum",
    deskripsi:
      "Setiap individu berhak atas perlakuan khusus dan kemudahan untuk memperoleh kesempatan dan manfaat yang sama demi mencapai keadilan dan persamaan.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6 mx-auto mb-2 text-blue-300">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1M4.22 4.22l.707.707m12.728 12.728.707.707M3 12h1m16 0h1M4.927 19.073l.707-.707M18.364 5.636l.707-.707M12 7a5 5 0 1 0 0 10A5 5 0 0 0 12 7Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h8M10 9.5l-2 2.5 2 2.5M14 9.5l2 2.5-2 2.5" />
      </svg>
    ),
  },
  {
    id: "28i-2",
    pasal: "PASAL 28I AYAT (2)",
    judul: "Hak Asasi yang Melekat",
    deskripsi:
      "Hak-hak dasar dijamin sebagai hak yang melekat dan tidak dapat dikurangi dalam keadaan apa pun. Atlet disabilitas bebas dari segala bentuk diskriminasi.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6 mx-auto mb-2 text-blue-300">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
  {
    id: "27-2",
    pasal: "PASAL 27 AYAT (2)",
    judul: "Hak Ekonomi & Kerja",
    deskripsi:
      "Tiap warga negara berhak atas pekerjaan dan penghidupan yang layak, termasuk jaminan kesejahteraan dan karir yang layak bagi mantan atlet disabilitas pasca-pensiun.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6 mx-auto mb-2 text-blue-300">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0" />
      </svg>
    ),
  },
  {
    id: "31-1",
    pasal: "PASAL 31 AYAT (1)",
    judul: "Hak Pendidikan Inklusif",
    deskripsi:
      "Setiap warga negara berhak mendapat pendidikan, termasuk pendidikan jasmani dan olahraga yang inklusif serta setara sejak usia dini bagi penyandang disabilitas.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6 mx-auto mb-2 text-blue-300">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 3.741-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
  },
];

export default function Uud1945Infographic() {
  return (
    <div className="w-full overflow-hidden rounded-2xl shadow-xl font-sans">
      {/* Header */}
      <div
        className="relative px-6 py-6"
        style={{
          background: "linear-gradient(135deg, #0f2c5c 0%, #1a3f7a 40%, #1e4d96 70%, #1a3f7a 100%)",
        }}
      >
        {/* Subtle decorative circles */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/5" />
          <div className="absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-white/5" />
        </div>

        <div className="relative">
          {/* Kicker badge */}
          <span className="inline-block rounded-full border border-white/25 bg-white/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-white/80 backdrop-blur-sm">
            Dasar Hukum Konstitusional
          </span>

          {/* Title */}
          <h3 className="mt-3 text-2xl font-black text-white tracking-tight">
            UUD 1945
          </h3>
          <p className="mt-0.5 text-sm font-bold text-blue-200 leading-snug">
            Jaminan Konstitusional bagi Penyandang Disabilitas
          </p>

          {/* Description */}
          <p className="mt-2 max-w-xl text-xs leading-relaxed text-white/75">
            Jaminan hak bagi Penyandang Disabilitas tidak hanya diatur dalam kebijakan teknis,
            tetapi juga dipertegas dalam{" "}
            <strong className="font-bold text-white">Undang-Undang Dasar 1945</strong>{" "}
            sebagai dasar konstitusional{" "}
            <strong className="font-bold text-white">kesetaraan, perlindungan, dan keadilan</strong>.
          </p>
        </div>
      </div>

      {/* Cards grid */}
      <div
        className="grid grid-cols-1 gap-3 p-4 sm:grid-cols-2"
        style={{ background: "#f0f4fa" }}
      >
        {pasalData.map((item) => (
          <div
            key={item.id}
            className="rounded-xl p-4 text-center transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md"
            style={{
              background: "linear-gradient(145deg, #162d5e 0%, #1e3f7a 100%)",
            }}
          >
            {/* Pasal badge */}
            <span className="inline-block rounded-full border border-blue-400/30 bg-blue-500/20 px-2 py-0.5 text-[8px] font-bold uppercase tracking-widest text-blue-200 mb-2">
              {item.pasal}
            </span>

            {/* Icon */}
            {item.icon}

            {/* Judul */}
            <h4 className="text-sm font-extrabold text-white leading-tight mb-2">
              {item.judul}
            </h4>

            {/* Deskripsi */}
            <p className="text-xs leading-relaxed text-blue-100/80">
              {item.deskripsi}
            </p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="px-6 py-3" style={{ background: "#0f2c5c" }}>
        <p className="text-[11px] text-white/60">
          <span className="font-bold text-white/80">Sumber:</span>{" "}
          Undang-Undang Dasar Negara Republik Indonesia Tahun 1945
        </p>
      </div>
    </div>
  );
}
