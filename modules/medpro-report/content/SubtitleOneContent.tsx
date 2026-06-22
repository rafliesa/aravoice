"use client";

import EditorialNote from "@/modules/medpro-report/component/EditorialNote";
import ArticleImageCarousel from "@/modules/medpro-report/component/ArticleImageCarousel";
import AthleteNeedsInfographic from "@/modules/medpro-report/component/AthleteNeedsInfographic";
import LawReferenceLink, { lawReferenceUrls } from "@/modules/medpro-report/component/LawReferenceLink";
import Uu82016Link from "@/modules/medpro-report/component/Uu82016Link";
import MediaPlaceholder from "@/modules/medpro-report/component/MediaPlaceholder";
import Pasal53DataCard from "@/modules/medpro-report/component/Pasal53DataCard";
import Pasal53Infographic from "@/modules/medpro-report/component/Pasal53Infographic";
import { articleHeadingClass, articleKickerClass, articleParagraphClass } from "@/modules/medpro-report/component/articleContentClasses";
import FotoStory from "@/modules/medpro-report/component/FotoStory";
import JonnaAudioCard from "@/modules/medpro-report/component/JonnaAudioCard";
import VoiceNoteCard from "@/modules/medpro-report/component/VoiceNoteCard";
import Image from "next/image";
import { konoStoryImages } from "@/modules/medpro-report/data/konoStoryImages";
import QuoteCard from "@/modules/medpro-report/component/QuoteCard";


const blindJudoTransportImages = [
  {
    src: "/1/blindjudo.jpg",
    alt: "Sesi latihan blind judo atlet disabilitas.",
    caption:
      "Blind judo menjadi salah satu cabang yang masih menghadapi tantangan akses fasilitas latihan.",
  },
  {
    src: "/1/transportasi.jpg",
    alt: "Transportasi yang digunakan atlet disabilitas menuju tempat latihan.",
    caption:
      "Transportasi menuju lokasi latihan menjadi beban harian bagi atlet disabilitas yang harus tetap menjaga konsistensi latihan.",
  },
];


export default function SubtitleOneContent() {
  return (
    <>
      <h2 className={articleHeadingClass} key="heading-kondisi-nyata">
        {"KONDISI NYATA"}
      </h2>
      <p className={articleParagraphClass}>
        {"Ketika pertama kali memutuskan menekuni olahraga angkat berat disabilitas, dukungan tidak langsung datang. Orang-orang terdekat justru menyambut pilihannya dengan kekhawatiran. Bagi penyandang tunadaksa, risiko cedera sering dipandang lebih besar, sementara akses terhadap layanan pemulihan dan perlindungan karier atlet tidak selalu tersedia."}
      </p>
      <p className={articleParagraphClass}>
        {"\"Orang tua sempat bilang, 'Kamu kan tunadaksa, jalan saja susah. Nanti kalau cedera bagaimana?'’ Kenang Ono."}
      </p>
      <p className={articleParagraphClass}>
        {"Terjun ke dalam cabang olahraga angkat berat disabilitas di tahun 2018 bukanlah keputusan yang mudah. Salah satu pencapaian yang paling diingatnya datang pada Peparnas 2022 di Kabupaten Bekasi. Medali perunggu yang ia raih saat itu menghasilkan bonus sebesar Rp25 juta, cukup untuk menghidupi beberapa bulan kehidupannya. Sayangnya, bonus hanyalah titik puncak, bukan pondasi."}
      </p>
      <p className={articleParagraphClass}>
        {"Biaya transportasi dan kebutuhan gizi yang harus dijaga agar kondisi tubuh tetap prima terus mengiringi setiap sesi latihan. Sementara itu, kebutuhan hidup sehari-hari tidak bisa menunggu uang pembinaan cair."}
      </p>
      {/* Centered highlighted quote */}
      <div className="mx-auto my-8 max-w-xl border-y border-zinc-200/80 py-5 text-center">
        <p className="font-sans text-lg sm:text-xl font-semibold leading-relaxed text-secondary-800 italic">
          “Ya namanya hidup harus jalan,”
        </p>
        <span className="block not-italic text-xs font-bold text-zinc-500 mt-2.5">
          — Ono Saipudin, Atlet Angkat Berat
        </span>
      </div>
      <p className={articleParagraphClass}>
        {"Baginya, latihan bukan sekadar rutinitas olahraga. Ia mencari cara untuk mempertahankan peluang bertanding dan harapan meraih prestasi. Sebab ketika latihan terhenti, kesempatan tampil di kompetisi, memperoleh bonus, dan mendapatkan insentif juga semakin jauh."}
      </p>
      <p className={articleParagraphClass}>
        {"Bukan karena tidak pernah dijanjikan, Surat Keputusan (SK) baru turun pada pertengahan Juni. Artinya, selama enam bulan pertama 2026, Ono dan atlet lainnya harus menanggung sendiri biaya untuk mempertahankan performa menjelang Peparda. Ongkos perjalanan dari rumah ke tempat latihan menghabiskan sekitar Rp700.000 hingga Rp800.000 setiap bulan. Di luar itu, ada kebutuhan nutrisi, suplemen, serta berbagai pengeluaran tak terduga yang datang seiring rutinitas latihan yang terus berjalan."}
      </p>
      
      <div className="my-10 mx-auto max-w-2xl">
        <figure>
          <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl bg-zinc-100 shadow-md">
            <Image src="/1/1.jpg" alt="Latihan Atlet Disabilitas NPCI" fill className="object-cover" />
          </div>
        </figure>
      </div>
      
      <p className={articleParagraphClass}>
        {"Selain mengangkat beban di arena latihan, Ono juga mengangkat beban kehidupan. Biaya rumah tangga, kebutuhan keluarga, dan pengeluaran rutin tetap harus dipenuhi. Ia juga bertani hidroponik di Cibabat sekaligus membuka praktik pengobatan alternatif sebagai sumber penghasilan tambahan. Bagi Ono, pekerjaan-pekerjaan tersebut bukan sekadar aktivitas sampingan, melainkan cara bertahan hidup di tengah ketidakpastian penghasilan sebagai atlet."}
      </p>
      <p className={articleParagraphClass}>
        {"“Dari usaha itu. Tapi usaha kan kadang naik turun. Nah itu yang sering jadi tekanan,” ujarnya."}
      </p>
      <p className={articleParagraphClass}>
        {"Di tengah tuntutan menjaga performa dan meraih prestasi, mereka masih harus membagi tenaga dan waktu untuk mencari nafkah. Sebab setelah sesi latihan berakhir, perjuangan berikutnya dimulai untuk memastikan dapurnya tetap mengepul."}
      </p>
      <p className={articleParagraphClass}>
        {"Tahun 2026 membuat tekanan tersebut semakin berat. Selain menghadapi ketidakpastian uang pembinaan, Ono juga kehilangan salah satu sumber penghasilannya. Sebelumnya, ia bekerja sebagai instruktur pertanian di lingkungan Dinas Sosial Jawa Barat. Pekerjaan itu menjadi penopang penting di luar aktivitasnya sebagai atlet. Namun, kebijakan efisiensi anggaran membuat posisinya ikut terdampak."}
      </p>
      <p className={articleParagraphClass}>
        {"“Jadi saya juga termasuk korban efisiensi,” ucapnya datar."}
      </p>
      <p className={articleParagraphClass}>
        {"Data NPCI Jawa Barat menunjukkan fenomena tersebut bukanlah kasus yang berdiri sendiri. Dari sekitar 2.500 atlet disabilitas aktif di Jawa Barat, sebagian besar harus mencari sumber penghidupan di luar arena olahraga. Namun, pekerjaan yang mereka geluti umumnya berada di sektor informal dengan tingkat pendapatan yang tidak menentu. Seperti halnya membuka usaha kecil-kecilan, menjadi buruh harian, pekerja lepas, terapis pijat, hingga pekerjaan serabutan yang bergantung pada ada atau tidaknya pelanggan."}
      </p>
      <p className={articleParagraphClass}>
        Secara hukum, hak-hak penyandang disabilitas telah dijamin melalui{" "}
        <Uu82016Link>
          Undang-Undang Nomor 8 Tahun 2016 tentang Penyandang Disabilitas
        </Uu82016Link>
        . Regulasi tersebut mengatur hak atas aksesibilitas, pekerjaan, kesehatan, kesejahteraan sosial, hingga olahraga.
      </p>

      {/* Infografis Tabel Pasal 53 */}
      <div className="my-10">
        <Pasal53Infographic />
      </div>

      {/* Premium Quote Card for Yadi Sopian */}
      <QuoteCard
        quote="Sampai sekarang masih sulit. Banyak atlet kami yang sudah berprestasi internasional, tetapi implementasi aturan di lapangan masih lemah. Padahal regulasi sudah ada, misalnya perusahaan wajib menerima persentase tertentu pekerja disabilitas. Namun kenyataannya masih jarang diterapkan. Saya berharap pemerintah dan pihak terkait benar-benar menjaga regulasi yang sudah dibuat. Kalau ada perusahaan yang tidak menjalankan aturan tersebut, seharusnya ada sanksi yang jelas"
        imageSrc="/1/2.jpg"
        speakerName="Yadi Sopian"
        speakerRole="Ketua NPCI Kota Bandung"
        reverse={false}
      />

      <h2 className={articleHeadingClass}>
        {"PERSOALAN BERSAMA"}
      </h2>
      <p className={articleParagraphClass}>
        {"Bagi mereka yang tidak memiliki pekerjaan tetap, situasinya bahkan lebih rentan. Sebagian menggantungkan kebutuhan hidup pada insentif dan bantuan pembinaan yang pencairannya tidak selalu datang tepat waktu. Ketika dana terlambat turun, ruang gerak mereka ikut menyempit. Kebutuhan rumah tangga tetap berjalan, biaya transportasi menuju tempat latihan tetap harus dibayar, sementara pendapatan alternatif tidak selalu tersedia."}
      </p>
      <p className={articleParagraphClass}>
        {"Sebagai seorang koordinator pelatih berangkat dari seorang atlet blind judo, Wirya Dharma memahami kenyataan dari dua sisi. Perpindahan peran tersebut memberinya pandangan yang lebih utuh tentang kehidupan olahraga disabilitas, mulai dari perjuangan di arena pertandingan hingga tantangan membina atlet dari pinggir matras. Namun, hal ini tidak membuatnya lepas dari persoalan yang selama ini membayangi."}
      </p>
      <p className={articleParagraphClass}>
        {"“Kalau bicara perhatian terhadap atlet disabilitas, menurut saya masih sangat jauh dari cukup. Baik dari segi uang pembinaan, fasilitas, perhatian, maupun peluang pekerjaan untuk atlet disabilitas,” ujarnya."}
      </p>
      <p className={articleParagraphClass}>
        {"Sebagai pelatih, ia menyaksikan langsung bagaimana persoalan ekonomi menjadi hambatan yang lebih nyata dibanding lawan di arena pertandingan."}
      </p>
      <p className={articleParagraphClass}>
        {"“Dari 21 atlet yang kami bina, yang hadir latihan biasanya hanya sekitar 10 orang. Sisanya banyak yang terkendala masalah ekonomi. Saya tidak bisa memaksa mereka,” ujarnya."}
      </p>

      {/* Mini Video Pak Wirya */}
      <div className="my-8 flex justify-center">
        <video 
          src="/1/Pak Wirya 21 Atlet.mp4" 
          controls 
          className="w-full max-w-lg rounded-2xl shadow-md bg-black"
          poster="/video-placeholder.webp"
        />
      </div>

      <p className={articleParagraphClass}>
        {"Hambatan ekonomi telah memengaruhi proses pembinaan sejak tahap paling dasar, kehadiran atlet di tempat latihan. Bagi sebagian atlet disabilitas, tantangan terbesar bukan meningkatkan performa, melainkan memastikan mereka memiliki ongkos untuk datang berlatih."}
      </p>
      <p className={articleParagraphClass}>
        {"Salah satu yang membekas bagi Wirya adalah Opik, atlet blind judo dengan kategori low vision. Hampir setiap kali latihan, Opik datang dengan mengendarai sepeda motor, membonceng istrinya, Petri—yang juga seorang atlet blind judo—dari rumah menuju lokasi latihan. Padahal, penglihatannya terbatas, jarak yang ditempuh tidak dekat, dan tidak ada fasilitas transportasi khusus yang membantunya mencapai venue."}
      </p>
      <p className={articleParagraphClass}>
        {"“Tidak punya ongkos. Mereka harus mencari nafkah sendiri. Contohnya Opik tadi. Dengan kondisi low vision, dia tetap datang latihan sendiri, bahkan mengendarai motor sendiri. Padahal jaraknya cukup jauh. Itu pengorbanan yang luar biasa,” ujar Wirya."}
      </p>

      {/* Grid Foto Blind Judo dan Transportasi */}
      <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-4">
        <figure>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-zinc-100 shadow-md">
            <Image src="/1/blindjudo.jpg" alt="Blind Judo" fill className="object-cover" />
          </div>
        </figure>
        <figure>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-zinc-100 shadow-md">
            <Image src="/1/transportasi.jpg" alt="Transportasi" fill className="object-cover" />
          </div>
        </figure>
      </div>

      <p className={articleParagraphClass}>
        {"Persoalan itu diperparah oleh minimnya perlindungan kesehatan. Menurut Wirya, hingga saat ini atlet masih mengandalkan BPJS pribadi ketika sakit atau mengalami cedera. Padahal risiko cedera dalam olahraga bela diri seperti judo sering membutuhkan terapi maupun fisioterapi yang tidak murah."}
      </p>
      <p className={articleParagraphClass}>
        {"Dalam banyak kasus, peran pelatih akhirnya melampaui tugas teknis di arena latihan. Mereka menjadi pendamping mental, penghubung dengan keluarga atlet, bahkan turut mencari solusi ketika atlet mengalami kesulitan biaya pengobatan."}
      </p>
      <p className={articleParagraphClass}>
        {"“Kalau ada yang harus dibawa ke rumah sakit, kami antar. Kalau belum ada biaya, kadang kami urunan dulu,” kata Wirya."}
      </p>

      {/* Infografis Kebutuhan Atlet */}
      <div className="my-10">
        <AthleteNeedsInfographic />
      </div>

      <h2 className={articleHeadingClass}>
        {"KESEMPATAN YANG DATANG"}
      </h2>
      <p className={articleParagraphClass}>
        {"Persoalan kesejahteraan tidak berhenti pada keterlambatan uang pembinaan. Kekhawatiran yang lebih besar justru muncul saat karir atlet berakhir. Kemampuan fisik mulai menurun dan prestasi tak lagi menjadi sumber penghasilan."}
      </p>
      <p className={articleParagraphClass}>
        {"Pertanyaan itu yang coba dijawab oleh Aditya Nandang Saputra, pengurus bidang pemberdayaan atlet NPCI Kabupaten Bandung. Berbeda dengan pembinaan yang umumnya berfokus pada latihan dan prestasi, Aditya melihat ancaman terbesar justru berada di luar arena pertandingan."}
      </p>

      {/* VN Aditya Nandang */}
      <VoiceNoteCard
        audioSrc="/1/Aditya Nandang - VN Anak dari Atlet Difabel.m4a"
        speakerName="Aditya Nandang Saputra"
        speakerRole="Pengurus Pemberdayaan Atlet NPCI Kab. Bandung"
      />

      <p className={articleParagraphClass}>
        {"Kekhawatiran itu yang mendorong Aditya Nandang Saputra, pengurus pemberdayaan atlet NPCI Kabupaten Bandung, mengembangkan pembinaan di luar aspek olahraga."}
      </p>
      <p className={articleParagraphClass}>
        {"Ia menjelaskan bahwa pembinaan tidak hanya berfokus pada pendidikan formal and olahraga, tetapi juga pengembangan kapasitas diri. Peserta memperoleh pembelajaran literasi keuangan, seperti pengenalan saham, deposito, dan reksa dana, yang disampaikan secara bertahap. Selain itu, kegiatan mengaji dilaksanakan setiap hari, sementara peserta didik penyandang tunagrahita tetap mengikuti pendidikan formal melalui guru SLB yang datang ke lembaga. Setiap Jumat, pembinaan diisi dengan kelas pengembangan diri yang mencakup kepemimpinan, pemahaman dinamika politik, dan keterampilan hidup. Menurutnya, program tersebut dirancang sebagai bekal agar peserta mampu hidup lebih mandiri setelah tidak lagi bergantung pada dunia olahraga."}
      </p>
      <p className={articleParagraphClass}>
        {"“Kita selamanya tidak bisa menjadi atlet, tapi bagaimana caranya uang yang bekerja untuk menjadi atlet tersebut, apalagi atlet tersebut adalah orang yang disabilitas,” ujar Aditya sembari menghela napas."}
      </p>
      <p className={articleParagraphClass}>
        {"Terdapat salah satu dari sedikit yang berhasil keluar dari lingkaran itu. Di sudut lapangan tenis UPI Bandung, ada seorang pria 59 tahun bernama Aden Achmad Muhammad Rahman. Ia pernah menjadi atlet tenis dan meraih tiga medali perunggu di tingkat Jawa Barat. Di usianya sekarang, tubuhnya tidak lagi mampu menanggung intensitas latihan seperti dulu. Pembengkakan jantung yang dipicu riwayat tekanan darah tinggi membuatnya harus membatasi aktivitas fisik."}
      </p>

      {/* Premium Quote Card for Aden Achmad */}
      <QuoteCard
        quote="Saya menjadi bagian dari Perkumpulan Penyandang Disabilitas Indonesia Provinsi Jawa Barat di bidang hukum. Saya juga aktif di Bandung Independent Living Center sebagai program manager. Hampir 90 persen kehidupan saya ada di dunia aktivisme. Sisanya bisnis dan usaha"
        imageSrc="/1/Para Atlet Aden ahmad.jpeg"
        speakerName="Aden Achmad Muhammad Rahman"
        speakerRole="Atlet Tenis Disabilitas & Program Manager Bandung Independent Living Center"
        reverse={true}
      />

      <p className={articleParagraphClass}>
        {"Aden membangun kehidupan yang tidak bergantung pada prestasi. Ia berhasil mengubah pengalaman pribadinya sebagai penyandang disabilitas menjadi modal untuk memperjuangkan kehidupan orang lain. Ketika banyak kursi roda berkualitas masih harus diimpor dengan harga mahal, Aden memilih terlibat dalam usaha yang mendekatkan kebutuhan penyandang disabilitas dengan akses yang lebih terjangkau."}
      </p>

      {/* Grid Foto Kursi Roda */}
      <div className="my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <figure>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-zinc-100 shadow-md">
              <Image src="/1/kursi-roda-atlet.jpg" alt="Kursi Roda Atletik" fill className="object-cover" />
            </div>
            <figcaption className="mt-3 font-sans text-sm text-zinc-600">
              <strong className="text-zinc-800 font-bold">Gambar kiri:</strong> kursi roda atletik yang memiliki camber (roda miring) untuk memberikan keseimbangan, posisi duduk aerodinamis meminimalisir hambatan angin.
            </figcaption>
          </figure>
          <figure>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-zinc-100 shadow-md">
              <Image src="/1/kursi-roda-disabilitas.jpg" alt="Kursi Roda Biasa" fill className="object-cover" />
            </div>
            <figcaption className="mt-3 font-sans text-sm text-zinc-600">
              <strong className="text-zinc-800 font-bold">Gambar kanan:</strong> kursi roda disabilitas biasa menggunakan roda tangan, roda tidak dibuat miring dan memiliki sandaran tangan serta pijakan kaki.
            </figcaption>
          </figure>
        </div>
      </div>
    </>
  );
}
