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
import Image from "next/image";

export const konoStoryImages = [
  {
    src: "/photo-story/1.jpeg",
    alt: "Foto Ono Saipudin di gym",
    caption:
      "Aroma mint menyengat khas counterpain menyelimuti seluruh ruangan gym pagi itu. Ono dan 12 atlet angkat beban paralimpik lainnya tengah mempersiapkan diri untuk mengikuti Pekan Paralimpik Daerah Jawa Barat 2026 Desember mendatang. Segala sisi ruangan tegang dengan erangan kerahan tenaga dan suara peraduan besi dari peralatan yang digunakan.\n\nHelaan nafas nyiur mengalir di sela-sela latihan angkat beban tersebut. Ono, seorang atlet paralimpik berumur 49 tahun penyandang kondisi polio di kedua kakinya tetap menatap tajam status juara tahun ini.",
  },
  {
    src: "/photo-story/2.jpeg",
    alt: "Foto Ono Saipudin berlatih angkat beban",
    caption:
      "Meski ia menyadari bahwa umurnya sudah tidak muda dan tubuhnya kian menua, baginya angkat beban bukan lah perihal mudah untuk ditinggalkan. Pertemuannya dengan cabang olahraga ini berawal pada 9 tahun lalu. Ono memang sudah aktif berolahraga sejak muda.\n“Perjalanan saya menjadi atlet angkat berat itu karena sebelumnya saya memang senang fitness. Tahun 2018 saya baru tahu bahwa ada olahraga angkat berat khusus disabilitas di NPCI Kota Bandung. Dari situ saya masuk ke cabang olahraga angkat berat.” ungkapnya.\n“Saya memang senang fitness dan olahraga ini juga bagus untuk kesehatan. Sebagai penyandang tunadaksa, saya memang harus berolahraga. Kebetulan itu juga hobi saya, jadi dilanjutkan sampai sekarang.”\nDalam dunia barunya inilah, Ono menemukan kembali sepenggal lain bagian hidupnya. Baginya angkat berat bukan sekedar olahraga kompetitif, melainkan arena refleksi diri untuk terus menatap masa depan.\n“Tantangannya banyak (pada cabang olahraga ini). Yang paling besar itu mengalahkan diri sendiri.”\n“Misalnya ketika melihat beban yang berat, muncul pikiran, ‘Apa saya bisa mengangkat beban segini?’ Nah, mengalahkan rasa takut itu yang paling sulit.”",
  },
  {
    src: "/photo-story/3.jpeg",
    alt: "Foto perjalanan pulang",
    caption:
      "Meskipun pertemuan dengan cabang olahraga angkat beban memberinya jalan hidup baru sebagai seorang atlet paralimpik. Ono tidak sepenuhnya meninggalkan dunia lamanya. Ono kecil, dibesarkan di Bumiayu, sebuah kecamatan di daerah selatan Kabupaten Brebes, Jawa Tengah. Ia tinggal bersama Kakek dan Neneknya ketika kedua orang tuanya harus pergi merantau ke daerah yang kelak juga ia wakili sebagai atlet saat ini.\n\nPerjalanan menuju dunia masa kecilnya akan ia lakukan sehabis pulang berlatih. Berdua bersama istrinya, Ono menyusuri jalanan kota Bandung menuju Cimahi untuk menjemput sepenggal kehidupannya yang lain.",
  },
  {
    src: "/photo-story/4.jpeg",
    alt: "Foto Ono Saipudin di kebun",
    caption:
      "\"Pagi-pagi saya latihan, kadang setelah dzuhur saya ke kebun.\"\n\nPerjalanan kiloan meter itu tidak lain ia lakukan untuk menuju ke kebun. Tempat yang paling dicintai di tengah percepatan pembangunan kota tempat tinggalnya saat ini. Ono selalu merasa pulang ketika ia sampai di kebun. Perasaan lelah tersapu dengan siraman pemandangan oase kecilnya tersebut.\n\n\"Kalau ingin fresh otak itu, ya saya ke kebun.\"\n\nOno kecil dibesarkan oleh Kakeknya sebagai seorang petani. Ajaran dan filosofi tani selalu ada dalam dirinya, meskipun ia sudah berada jauh dari kampung halamannya.",
  },
  {
    src: "/photo-story/5.jpeg",
    alt: "Foto Ono di kebun hidroponik",
    caption:
      "“Saya backgroundnya anak petani. Kalau saya tujuannya, ini karena saya senang menanam.\"\n\nSaat ini Ono tengah menjalankan pertanian Hidroponik. Namun sebelum menjalani pertanian hidroponik ini, Ono terlebih dahulu menjalankan pertanian konvensional dengan memanfaatkan lahan kosong dibelakang Sekretariat Tunanetra di komplek Dinas Sosial yang ada di daerah Cibabat, Kota Cimahi.\n\nIa memulai ide pertaniannya itu bersama 5 kawannya yang juga merupakan atlet disabilitas pada tahun 2018. Pada masa tersebut, Sekretariat Tunanetra memang dijadikan tempat berkumpul kelompok disabilitas.\n“Kamu bisa tani? Bisa kata saya. Nah udah saya mintain izin ke Kepala Dinas, tapi kamu harus bikin kelompok tani.\"\n\"Itu akhirnya terbentuk dan jalan lah, dan ini kebetulan kelompok tani disabilitas pertama yang ada di Jawa Barat.\"",
  },
  {
    src: "/photo-story/6.jpeg",
    alt: "Foto Ono sebagai instruktur pertanian",
    caption:
      "Pada tahun 2024 angin segar berhembus ke arah Ono dan kelompok taninya. Tawaran untuk menjadi instruktur pelatihan sektor pertanian difabel datang dari Unit Pelaksana Teknis Daerah  (UPTD) Pusat Pelayanan Sosial Griya Harapan Difabel. Namun angin segar tersebut tidak berhembus lama. Pada awal tahun ini, Ono menjadi korban dari dampak efisiensi Anggaran Pendapatan dan Belanja Negara (APBN) dan Anggaran Pendapatan dan Belanja Daerah (APBD) yang digencarkan pemerintah saat ini.\n“Dulu saya ngedidik disabilitas biar bisa bertani, saya tanamkan bahwa untuk bertahan hidup itu ya kita harus bisa nanem, karena tanpa ada petani kita gak akan bisa makan”",
  },
  {
    src: "/photo-story/7.jpeg",
    alt: "Foto hasil panen",
    caption:
      "Ono selalu menegaskan pentingnya ketahanan pangan dari lingkup terkecil. Menanam bukan hanya soal menunai, tapi tentang menghidupi.\n\n\"Kita menanam, singkong, enam bulan tujuh bulan, ada makanan untuk bertahan hidup.\"\n\"Itu juga untuk menutupi kekurangan dalam ekonomi.\"\n\"Untuk mengurangi itu gimana caranya kita sebagai orang yang harus berpikir, dan ya kita bertani.\"\n\nSelain internalisasi nilai-nilai tani yang ia terapkan di keluarganya, Ono juga kerap menginternalisasikan filosofi pertanian dalam kariernya sebagai seorang atlet. Ono menganggap bahwa manusia tidak berbeda dengan tanaman. Baginya  hasil tidak lahir dari ruang hampa, namun dari berbagai perawatan, perhatian, dan usaha yang rutin dikerahkan setiap harinya.",
  },
  {
    src: "/photo-story/8.jpeg",
    alt: "Foto Ono merawat tanaman",
    caption:
      "\"Orang petani itu ternyata luar biasa, bisa ngasih kehidupan buat orang lain. Kita menanam, orang bisa makan. Jangan lihat hasilnya, kita berhasil panen saja, bisa tumbuh, dan berkembang saja, sudah luar biasa.”\n\n“Untuk kuat itu akarnya yang harus bagus. Manusia juga butuh akar yang kuat seperti mentalnya untuk bertumbuh.\"",
  },
];

const blindJudoTransportImages = [
  {
    src: "/1/blindjudo.webp",
    alt: "Sesi latihan blind judo atlet disabilitas.",
    caption:
      "Blind judo menjadi salah satu cabang yang masih menghadapi tantangan akses fasilitas latihan.",
  },
  {
    src: "/1/transportasi.webp",
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
        {"\"Orang tua sempat bilang, 'Kamu kan tunadaksa, jalan saja susah. Nanti kalau cedera bagaimana?'’ Kenang Kono."}
      </p>
      <p className={articleParagraphClass}>
        {"Terjun ke dalam cabang olahraga angkat berat disabilitas di tahun 2018 bukanlah keputusan yang mudah. Salah satu pencapaian yang paling diingatnya datang pada Peparnas 2022 di Kabupaten Bekasi. Medali perunggu yang ia raih saat itu menghasilkan bonus sebesar Rp25 juta, cukup untuk menghidupi beberapa bulan kehidupannya. Sayangnya, bonus hanyalah titik puncak, bukan pondasi."}
      </p>
      <p className={articleParagraphClass}>
        {"Biaya transportasi dan kebutuhan gizi yang harus dijaga agar kondisi tubuh tetap prima terus mengiringi setiap sesi latihan. Sementara itu, kebutuhan hidup sehari-hari tidak bisa menunggu uang pembinaan cair."}
      </p>
      <div className="mx-auto my-8 max-w-lg border-y border-zinc-200/80 py-5 text-center">
        <p className="font-sans text-xl sm:text-2xl font-bold leading-relaxed text-secondary-800 italic">
          {"“Ya kita mah latihan terus. Mau ada uang atau enggak, latihan harus jalan,” ujar Kono."}
        </p>
      </div>
      <p className={articleParagraphClass}>
        {"Baginya, latihan bukan sekadar rutinitas olahraga. Ia mencari cara untuk mempertahankan peluang bertanding dan harapan meraih prestasi. Sebab ketika latihan terhenti, kesempatan tampil di kompetisi, memperoleh bonus, dan mendapatkan insentif juga semakin jauh."}
      </p>
      <p className={articleParagraphClass}>
        {"Bukan karena tidak pernah dijanjikan, Surat Keputusan (SK) baru turun pada pertengahan Juni. Artinya, selama enam bulan pertama 2026, Kono dan atlet lainnya harus menanggung sendiri biaya untuk mempertahankan performa menjelang Peparda. Ongkos perjalanan dari rumah ke tempat latihan menghabiskan sekitar Rp700.000 hingga Rp800.000 setiap bulan. Di luar itu, ada kebutuhan nutrisi, suplemen, serta berbagai pengeluaran tak terduga yang datang seiring rutinitas latihan yang terus berjalan."}
      </p>
      
      <MediaPlaceholder assetNumber={1} text="[Insert Media Image Nanti Saya Yang Ngisi]" />
      
      <p className={articleParagraphClass}>
        {"Selain mengangkat beban di arena latihan, Kono juga mengangkat beban kehidupan. Biaya rumah tangga, kebutuhan keluarga, dan pengeluaran rutin tetap harus dipenuhi. Ia juga bertani hidroponik di Cibabat sekaligus membuka praktik pengobatan alternatif sebagai sumber penghasilan tambahan. Bagi Kono, pekerjaan-pekerjaan tersebut bukan sekadar aktivitas sampingan, melainkan cara bertahan hidup di tengah ketidakpastian penghasilan sebagai atlet."}
      </p>
      <p className={articleParagraphClass}>
        {"“Dari usaha itu. Tapi usaha kan kadang naik turun. Nah itu yang sering jadi tekanan,” ujarnya."}
      </p>
      <p className={articleParagraphClass}>
        {"Di tengah tuntutan menjaga performa dan meraih prestasi, mereka masih harus membagi tenaga dan waktu untuk mencari nafkah. Sebab setelah sesi latihan berakhir, perjuangan berikutnya dimulai untuk memastikan dapurnya tetap mengepul."}
      </p>
      <p className={articleParagraphClass}>
        {"Tahun 2026 membuat tekanan tersebut semakin berat. Selain menghadapi ketidakpastian uang pembinaan, Kono juga kehilangan salah satu sumber penghasilannya. Sebelumnya, ia bekerja sebagai instruktur pertanian di lingkungan Dinas Sosial Jawa Barat. Pekerjaan itu menjadi penopang penting di luar aktivitasnya sebagai atlet. Namun, kebijakan efisiensi anggaran membuat posisinya ikut terdampak."}
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
      <div className="my-10 mx-auto max-w-2xl transform transition-transform duration-300 hover:scale-[1.02] active:scale-[1.05] cursor-zoom-in">
        <Pasal53Infographic />
      </div>

      <div className="my-8 flex flex-col md:flex-row gap-6 items-start bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
        <div className="w-full md:w-1/3 flex-shrink-0">
          <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-zinc-200">
            {/* Foto Yadi IMG_2011.jpg placeholder */}
            <Image src="/IMG_2011.jpg" alt="Yadi Sopian" fill className="object-cover" />
            <div className="absolute inset-0 flex items-center justify-center text-xs text-zinc-500 font-bold bg-zinc-200/50">IMG_2011.jpg</div>
          </div>
          <p className="mt-3 text-center text-sm font-bold text-zinc-800">Yadi Sopian, Ketua NPCI Kota Bandung</p>
        </div>
        <div className="w-full md:w-2/3">
          <p className="font-sans text-base leading-relaxed text-zinc-700 italic">
            “Sampai sekarang masih sulit. Banyak atlet kami yang sudah berprestasi internasional, tetapi implementasi aturan di lapangan masih lemah. Padahal regulasi sudah ada, misalnya perusahaan wajib menerima persentase tertentu pekerja disabilitas. Namun kenyataannya masih jarang diterapkan. Saya berharap pemerintah dan pihak terkait benar-benar menjaga regulasi yang sudah dibuat. Kalau ada perusahaan yang tidak menjalankan aturan tersebut, seharusnya ada sanksi yang jelas,” jelasnya.
          </p>
        </div>
      </div>

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
          src="/Pak Wirya 21 Atlet.mp4" 
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
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-zinc-200">
            <Image src="/blindjudo.webp" alt="Blind Judo" fill className="object-cover" />
          </div>
        </figure>
        <figure>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-zinc-200">
            <Image src="/transportasi.webp" alt="Transportasi" fill className="object-cover" />
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
      <div className="my-10 mx-auto max-w-2xl transform transition-transform duration-300 hover:scale-[1.02] active:scale-[1.05] cursor-zoom-in">
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
      <div className="my-8 mx-auto max-w-md bg-[#082b4d] rounded-2xl p-6 shadow-lg text-white">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center shrink-0">
            <span className="text-xl">🎙️</span>
          </div>
          <div>
            <h4 className="font-bold text-sm">Aditya Nandang Saputra</h4>
            <p className="text-xs text-white/70">Pengurus Pemberdayaan Atlet</p>
          </div>
        </div>
        <audio src="/Aditya Nandang - VN Anak dari Atlet Difabel.m4a" controls className="w-full h-10" />
      </div>

      <p className={articleParagraphClass}>
        {"Kekhawatiran itu yang mendorong Aditya Nandang Saputra, pengurus pemberdayaan atlet NPCI Kabupaten Bandung, mengembangkan pembinaan di luar aspek olahraga."}
      </p>
      <p className={articleParagraphClass}>
        {"Ia menjelaskan bahwa pembinaan tidak hanya berfokus pada pendidikan formal dan olahraga, tetapi juga pengembangan kapasitas diri. Peserta memperoleh pembelajaran literasi keuangan, seperti pengenalan saham, deposito, dan reksa dana, yang disampaikan secara bertahap. Selain itu, kegiatan mengaji dilaksanakan setiap hari, sementara peserta didik penyandang tunagrahita tetap mengikuti pendidikan formal melalui guru SLB yang datang ke lembaga. Setiap Jumat, pembinaan diisi dengan kelas pengembangan diri yang mencakup kepemimpinan, pemahaman dinamika politik, dan keterampilan hidup. Menurutnya, program tersebut dirancang sebagai bekal agar peserta mampu hidup lebih mandiri setelah tidak lagi bergantung pada dunia olahraga."}
      </p>
      <p className={articleParagraphClass}>
        {"“Kita selamanya tidak bisa menjadi atlet, tapi bagaimana caranya uang yang bekerja untuk menjadi atlet tersebut, apalagi atlet tersebut adalah orang yang disabilitas,” ujar Aditya sembari menghela napas."}
      </p>
      <p className={articleParagraphClass}>
        {"Terdapat salah satu dari sedikit yang berhasil keluar dari lingkaran itu. Di sudut lapangan tenis UPI Bandung, ada seorang pria 59 tahun bernama Aden Achmad Muhammad Rahman. Ia pernah menjadi atlet tenis dan meraih tiga medali perunggu di tingkat Jawa Barat. Di usianya sekarang, tubuhnya tidak lagi mampu menanggung intensitas latihan seperti dulu. Pembengkakan jantung yang dipicu riwayat tekanan darah tinggi membuatnya harus membatasi aktivitas fisik."}
      </p>

      <div className="my-8 flex flex-col md:flex-row-reverse gap-6 items-start bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
        <div className="w-full md:w-1/3 flex-shrink-0">
          <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-zinc-200">
            {/* Foto Aden FOTO Aden Achmad placeholder */}
            <Image src="/FOTO Aden Achmad.jpg" alt="Aden Achmad" fill className="object-cover" />
            <div className="absolute inset-0 flex items-center justify-center text-xs text-zinc-500 font-bold bg-zinc-200/50">Foto Aden</div>
          </div>
          <p className="mt-3 text-center text-sm font-bold text-zinc-800">Aden Achmad Muhammad Rahman, atlet tennis disabilitas</p>
        </div>
        <div className="w-full md:w-2/3">
          <p className="font-sans text-base leading-relaxed text-zinc-700 italic">
            “Saya menjadi bagian dari Perkumpulan Penyandang Disabilitas Indonesia Provinsi Jawa Barat di bidang hukum. Saya juga aktif di Bandung Independent Living Center sebagai program manager. Hampir 90 persen kehidupan saya ada di dunia aktivisme. Sisanya bisnis dan usaha,” ujarnya.
          </p>
        </div>
      </div>

      <p className={articleParagraphClass}>
        {"Aden membangun kehidupan yang tidak bergantung pada prestasi. Ia berhasil mengubah pengalaman pribadinya sebagai penyandang disabilitas menjadi modal untuk memperjuangkan kehidupan orang lain. Ketika banyak kursi roda berkualitas masih harus diimpor dengan harga mahal, Aden memilih terlibat dalam usaha yang mendekatkan kebutuhan penyandang disabilitas dengan akses yang lebih terjangkau."}
      </p>

      {/* Grid Foto Kursi Roda */}
      <div className="my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <figure>
            <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-zinc-200">
              <Image src="/20260606_075512(0).jpg" alt="Kursi Roda Atletik" fill className="object-cover" />
              <div className="absolute inset-0 flex items-center justify-center text-xs text-zinc-500 font-bold bg-zinc-200/50">20260606_075512(0).jpg</div>
            </div>
            <figcaption className="mt-3 font-sans text-sm text-zinc-600">
              <strong className="text-zinc-800 font-bold">Gambar kiri:</strong> kursi roda atletik yang memiliki camber (roda miring) untuk memberikan keseimbangan, posisi duduk aerodinamis meminimalisir hambatan angin.
            </figcaption>
          </figure>
          <figure>
            <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-zinc-200">
              <Image src="/foto kursi roda biasa.jpg" alt="Kursi Roda Biasa" fill className="object-cover" />
              <div className="absolute inset-0 flex items-center justify-center text-xs text-zinc-500 font-bold bg-zinc-200/50">foto kursi roda biasa</div>
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
