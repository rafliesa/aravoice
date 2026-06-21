export default function AboutJourney() {
  return (
    <section className="bg-zinc-100">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 lg:grid-cols-2">
        <div className="motion-fade-up">

          <h2 className="text-3xl font-bold tracking-tight">Perjalanan Kami</h2>
          <div className="mt-6 space-y-5 text-sm leading-7 text-zinc-600">
            <p>
              Paravoice.id lahir dari kegelisahan atas masih terbatasnya
              pemberitaan mengenai atlet disabilitas dan ekosistem olahraga
              paralimpik di Indonesia. Banyak prestasi yang berhasil diraih di
              tingkat daerah, nasional, hingga internasional, namun belum
              mendapatkan ruang yang setara dalam arus utama media.
            </p>
            <p>
              Berangkat dari kesadaran tersebut, Paravoice.id dibangun sebagai
              ruang independen yang secara khusus mendokumentasikan perjalanan
              para atlet disabilitas. Kami melihat bahwa setiap atlet memiliki
              cerita yang layak didengar. Cerita tentang latihan, pengorbanan,
              keluarga, pekerjaan, pendidikan, hingga perjuangan menghadapi
              berbagai hambatan sosial dan ekonomi.
            </p>
            <p>
              Sejak awal berdiri, kami berkomitmen untuk menghasilkan
              jurnalisme yang berpihak pada nilai kemanusiaan, kesetaraan, dan
              aksesibilitas informasi. Kami percaya bahwa pemberitaan yang
              berkualitas dapat menjadi alat untuk mengubah cara pandang
              masyarakat terhadap disabilitas.
            </p>
            <p>
              Misi kami adalah menghadirkan informasi yang kredibel, memperluas
              representasi atlet disabilitas dalam ruang publik, serta menjadi
              jembatan antara komunitas olahraga disabilitas dan masyarakat
              luas.
            </p>
          </div>
        </div>

        <div className="motion-slide-in-right relative">
          <div className="h-full min-h-80 w-full rounded-sm border border-zinc-300 bg-zinc-200" />
          <div className="absolute -bottom-5 left-8 bg-secondary-800 rounded-lg px-5 py-4 text-white shadow-lg">
            <p className="text-2xl font-bold leading-none">120+</p>
            <p className="mt-1 text-xs font-bold leading-tight tracking-wide">LAPORAN DATA<br />TAHUNAN</p>
          </div>
        </div>
      </div>
    </section>
  );
}
