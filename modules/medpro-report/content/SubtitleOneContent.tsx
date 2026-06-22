import EditorialNote from "@/modules/medpro-report/component/EditorialNote";
import ArticleImageCarousel from "@/modules/medpro-report/component/ArticleImageCarousel";
import AthleteNeedsInfographic from "@/modules/medpro-report/component/AthleteNeedsInfographic";
import LawReferenceLink, {
  lawReferenceUrls,
} from "@/modules/medpro-report/component/LawReferenceLink";
import MediaPlaceholder from "@/modules/medpro-report/component/MediaPlaceholder";
import Pasal53DataCard from "@/modules/medpro-report/component/Pasal53DataCard";
import { articleHeadingClass, articleKickerClass, articleParagraphClass } from "@/modules/medpro-report/component/articleContentClasses";
import FotoStory from "@/modules/medpro-report/component/FotoStory";
import JonnaAudioCard from "@/modules/medpro-report/component/JonnaAudioCard";

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


      
      <p className={articleParagraphClass} key="paragraph-0">
        {"Sorak-sorai di podium menggema kencang, menggetarkan semangat para atlet disabilitas di lapangan. Di balik semangat itu, ada peluh yang jatuh senyap, menyisakan jejak keringat pion penting negara yang nyaris terlihat. Senyum terus terukir lebar di muka, meskipun kesejahteraan yang dijanjikan negara justru tertatih jauh di belakang prestasi mereka. Bagi atlet disabilitas, pertandingan tidak hanya selesai ketika peluit berbunyi. Di luar lapangan, mereka masih harus berhadapan dengan serentetan pertandingan melawan kehidupan. Kelayakan sosial menjadi kemewahan, dan kepastian masa depan terasa lebih jauh daripada garis finish yang mereka kejar."}
      </p>
      
      <p className={articleParagraphClass} key="paragraph-4">
        {"Terdengar hela napas berat, seiring barbell yang terangkat pelan dari lantai. Otot-otot di lengan Ono Saipudin menegang, sementara peluh mulai membasahi wajahnya. Napas itu membawa kisah panjang lelaki 49 tahun yang menyimpan keterbatasan pada kakinya. Sejak 2018, kecintaannya pada olahraga membuatnya menekuni angkat beban yang mengantarnya ke berbagai arena prestasi dan menemukan ruang untuk menyalurkan kemampuannya."}
      </p>
      
      <div className="mx-auto my-8 max-w-lg border-y border-zinc-200/80 py-5 text-center" key="quote-6">
        <p className="font-sans text-[15px] sm:text-base font-semibold leading-relaxed text-secondary-800 italic">
          {"“Ya namanya hidup harus jalan,”"}
        </p>
      </div>

      <p className={articleParagraphClass} key="paragraph-7">
        {"ucap Ono Saipudin pelan sambil tersenyum sukar. Ekspresinya seakan damai dengan keadaan sekalipun kenyataannya pahit. Besi yang ia angkat memang berat, tetapi beban kehidupan di luar arena jauh lebih berat untuk dipikul."}
      </p>

      <p className={articleParagraphClass} key="paragraph-8">
        {"Di depan matanya, waktu semakin menyempit. Terbentang Pekan Paralimpik Daerah (Peparda) yang menjadikan Kota Bandung panggung tuan rumah pada November 2026 setelah Indramayu mengundurkan diri. Keterbatasan venue yang inklusif bagi atlet disabilitas menjadi alasan utamanya. Dalam waktu yang relatif singkat, tanggung jawab penyelenggaraan kini beralih ke Kota Bandung."}
      </p>
      
      <p className={articleParagraphClass} key="paragraph-9">
        {"Perubahan itu tidak hanya memindahkan lokasi pertandingan, tetapi juga menambah beban persiapan bagi daerah yang kini berstatus tuan rumah. Bersamaan dengan tuntutan menyukseskan penyelenggaraan, atlet-atlet Kota Bandung juga dibebani ekspektasi untuk mempertahankan prestasi dan membawa pulang medali di kandang sendiri."}
      </p>
      <p className={articleParagraphClass} key="paragraph-10">
        {"Kompleksitas penyelenggaraan olahraga disabilitas tidak dapat disamakan dengan ajang olahraga pada umumnya. Setiap kompetisi membutuhkan lapisan persiapan tambahan yang berkaitan langsung dengan kebutuhan aksesibilitas para atlet. Mulai dari kesiapan venue, akomodasi, transportasi, hingga ketersediaan peralatan khusus harus dipastikan dapat digunakan oleh berbagai ragam disabilitas secara aman dan setara."}
      </p>
      
      <p className={articleParagraphClass} key="paragraph-12">
        {"Komisioner Komisi Nasional Disabilitas (KND), Jonna Aman Damanik menjelaskan terkait kondisi olahraga disabilitas,"}
      </p>

      {/* Voice Note player and Jonna's photo */}
      <JonnaAudioCard key="voice-note-jonna" />

      <p className={articleParagraphClass} key="paragraph-14">
        {"Di tengah persiapan menuju Peparda ini, National Paralympic Committee of Indonesia (NPCI) Jawa Barat terpaksa melakukan penyesuaian di berbagai sektor agar program pembinaan tetap berjalan di tengah keterbatasan sumber daya."}
      </p>
      
      <p className={articleParagraphClass} key="quote-16">
        {"“Terjadi juga di NPCI. Dalam rangka persiapan Pekan Paralimpik Daerah (Peparda) November 2026, kami harus melakukan pengetatan anggaran supaya semua kebutuhan tetap bisa diakomodasi. Baik pembinaan 17 cabang olahraga, kebutuhan organisasi, maupun kebutuhan lainnya semuanya harus diefisiensikan,” ujar Djumono, Ketua NPCI Kota Bandung."}
      </p>
      
      <p className={articleParagraphClass} key="paragraph-18">
        {"Pengetatan tersebut tidak hanya menyentuh aspek administratif organisasi, tetapi juga berdampak langsung pada proses pembinaan atlet. Sejumlah program harus disesuaikan dengan kemampuan anggaran yang tersedia, mulai dari pemusatan latihan, pengadaan peralatan, hingga dukungan operasional yang menunjang persiapan atlet menuju Peparda."}
      </p>
      
      <p className={articleParagraphClass} key="paragraph-19">
        {"Bagi atlet, jadwal latihan tidak mengenal penundaan sebagaimana proses administrasi. Ketika pencairan dana masih menunggu keputusan dan anggaran, tuntutan untuk menjaga performa tetap berlangsung setiap hari."}
      </p>
      
      <p className={articleParagraphClass} key="quote-20">
        {"“Karena dari Januari sampai Juni belum ada uang pembinaan yang turun. Padahal banyak atlet disabilitas yang tidak bekerja tetap. Ada yang tinggal di kontrakan dan harus membayar biaya hidup setiap bulan,” ujar Kono, memastikan persiapan menuju Peparda tetap berjalan."}
      </p>
      
      <p className={articleParagraphClass} key="quote-22">
        {"“Kalau dulu, meskipun SK belum turun, uang pembinaan sudah bisa cair. Sekarang mungkin karena Kota Bandung menjadi tuan rumah Peparda, jadi anggarannya berbeda. Tapi saya juga tidak tahu pasti,” lanjutnya."}
      </p>
      
      <p className={articleParagraphClass} key="paragraph-24">
        {"Di tengah tuntutan prestasi yang meninggi menjelang Peparda 2026, para atlet disabilitas berlari dalam lintasan yang tidak selalu setara. Sebab pengorbanan biaya hidup harus dibagi dengan kebutuhan olahraga dan kegigihan para atlet dalam menjaga mimpi ketika kesejahteraan mereka sendiri masih menjadi tanda tanya."}
      </p>

      <h2 className={articleHeadingClass} key="heading-25">
        {"KEMBALI KE KEHIDUPAN KONO"}
      </h2>
      <h2 className={articleHeadingClass} key="heading-26">
        {"REALITA ATLET"}
      </h2>
      <p className={articleParagraphClass} key="paragraph-30">
        {"Ketika pertama kali memutuskan menekuni olahraga angkat berat, dukungan tidak langsung datang. Orang-orang terdekat justru menyambut pilihannya dengan kekhawatiran. Bagi penyandang tunadaksa, risiko cedera sering dipandang lebih besar, sementara akses terhadap layanan pemulihan dan perlindungan karir atlet tidak selalu tersedia."}
      </p>
      <p className={articleParagraphClass} key="quote-31">{"\"Orang tua sempat bilang, 'Kamu kan tunadaksa, jalan saja susah. Nanti kalau cedera bagaimana?'’ Kenang Kono."}</p>
      <p className={articleParagraphClass} key="paragraph-32">
        {"Tahun 2018 yang membuatnya terjun ke dalam cabang olahraga angkat berat khusus disabilitas ini bukan keputusan yang mudah dan perlu keyakinan untuk bisa bertanding sesuai dengan kemampuannya. Salah satu pencapaian yang paling diingatnya datang pada Peparnas 2022 di Kabupaten Bekasi. Medali perunggu yang ia raih saat itu menghasilkan bonus sebesar Rp25 juta,"}
      </p>
      <p className={articleParagraphClass} key="paragraph-33">
        {"cukup untuk bernapas beberapa bulan. Tapi bonus adalah titik puncak, bukan pondasi."}
      </p>
      <p className={articleParagraphClass} key="paragraph-34">
        {"Biaya transportasi dan kebutuhan gizi yang harus dijaga agar kondisi tubuh tetap prima terus mengiringi setiap sesi latihan. Di saat yang sama, kebutuhan hidup sehari-hari tidak ikut berhenti menunggu uang pembinaan cair."}
      </p>
      <p className={articleParagraphClass} key="quote-35">{"\"Ya kita mah latihan terus. Mau ada uang atau enggak, latihan harus jalan,\""}</p>
      <p className={articleParagraphClass} key="paragraph-36">
        {"Ujar Kono."}
      </p>
      <p className={articleParagraphClass} key="paragraph-37">
        {"Baginya, latihan bukan sekadar rutinitas olahraga. Ia menjadi cara untuk mempertahankan peluang bertanding dan menjaga harapan meraih prestasi. Sebab ketika latihan terhenti,"}
      </p>
      <p className={articleParagraphClass} key="paragraph-38">
        {"kesempatan tampil di kompetisi, memperoleh bonus, dan mendapatkan insentif juga semakin menjauh."}
      </p>
      <p className={articleParagraphClass} key="paragraph-39">
        {"Bukan pula karena tidak pernah dijanjikan. Surat Keputusan (SK) baru turun pada pertengahan Juni. Artinya, selama enam bulan pertama 2026, Kono dan atlet lainnya harus menanggung sendiri biaya untuk mempertahankan performa menjelang Peparda. Ongkos perjalanan dari rumah ke tempat latihan menghabiskan sekitar Rp700.000 hingga Rp800.000 setiap bulan. Di luar itu, ada kebutuhan nutrisi, suplemen, serta berbagai pengeluaran tak terduga yang datang seiring rutinitas latihan yang terus berjalan."}
      </p>
      <MediaPlaceholder assetNumber={2} key="media-40" text={"[FOTO KONO LAGI DI CIBABAT]"} />
      <p className={articleParagraphClass} key="paragraph-41">
        {"Selain mengangkat beban di arena latihan, Kono juga mengangkat beban kehidupan. Biaya rumah tangga, kebutuhan keluarga, dan pengeluaran rutin tetap harus dipenuhi, atlet angkat berat asal Kota Bandung itu bertani hidroponik di Cibabat sekaligus membuka praktik pengobatan alternatif sebagai sumber penghasilan tambahan. Bagi Kono, pekerjaan-pekerjaan tersebut bukan sekadar aktivitas sampingan, melainkan cara bertahan hidup di tengah ketidakpastian penghasilan sebagai atlet."}
      </p>
      <p className={articleParagraphClass} key="quote-42">{"\"Dari usaha itu. Tapi usaha kan kadang naik turun. Nah itu yang sering jadi tekanan,\""}</p>
      <p className={articleParagraphClass} key="paragraph-43">
        {"Ujarnya."}
      </p>
      <p className={articleParagraphClass} key="paragraph-44">
        {"Di tengah tuntutan menjaga performa dan meraih prestasi, mereka masih harus membagi tenaga dan waktu untuk mencari nafkah. Sebab setelah sesi latihan berakhir, perjuangan berikutnya dimulai untuk memastikan dapurnya tetap mengepul."}
      </p>
      <p className={articleParagraphClass} key="paragraph-45">
        {"Tahun 2026 membuat tekanan tersebut semakin berat. Selain menghadapi ketidakpastian uang pembinaan, Kono juga kehilangan salah satu sumber penghasilannya. Sebelumnya, ia bekerja sebagai instruktur pertanian di lingkungan Dinas Sosial Jawa Barat. Pekerjaan itu menjadi penopang penting di luar aktivitasnya sebagai atlet. Namun kebijakan efisiensi anggaran membuat posisinya ikut terdampak."}
      </p>
      <p className={articleParagraphClass} key="quote-46">{"\"Jadi saya juga termasuk korban efisiensi,\""}</p>
      <p className={articleParagraphClass} key="paragraph-47">
        {"Katanya datar."}
      </p>
      <p className={articleParagraphClass} key="paragraph-48">
        {"Data NPCI Jawa Barat menunjukkan fenomena tersebut bukanlah kasus yang berdiri sendiri."}
      </p>
      <p className={articleParagraphClass} key="paragraph-49">
        {"Dari sekitar 2.500 atlet disabilitas aktif di Jawa Barat, sebagian besar harus mencari sumber penghidupan di luar arena olahraga. Namun pekerjaan yang mereka geluti umumnya berada di sektor informal dengan tingkat pendapatan yang tidak menentu seperti membuka usaha kecil-kecilan, menjadi buruh harian, pekerja lepas, terapis pijat, hingga pekerjaan serabutan yang bergantung pada ada atau tidaknya pelanggan."}
      </p>
      <p className={articleParagraphClass} key="paragraph-50">
        Secara hukum, hak-hak penyandang disabilitas sebenarnya telah dijamin
        melalui{" "}
        <LawReferenceLink href={lawReferenceUrls.uuDisability}>
          Undang-Undang Nomor 8 Tahun 2016 tentang Penyandang Disabilitas
        </LawReferenceLink>
        . Regulasi tersebut mengatur hak atas aksesibilitas, pekerjaan,
        kesehatan, kesejahteraan sosial, hingga olahraga.
      </p>
      <Pasal53DataCard key="pasal53-51" />
      <p className={articleParagraphClass} key="paragraph-53">
        {"Yadi, Ketua NPCI menjelaskan terkait realita yang dihadapi atlet disabilitas “Sampai sekarang masih sulit. Banyak atlet kami yang sudah berprestasi internasional, tetapi implementasi aturan di lapangan masih lemah. Padahal regulasi sudah ada, misalnya perusahaan wajib menerima persentase tertentu pekerja disabilitas. Namun kenyataannya masih jarang diterapkan.Saya berharap pemerintah dan pihak terkait benar-benar menjaga regulasi yang sudah dibuat. Kalau ada perusahaan yang tidak menjalankan aturan tersebut, seharusnya ada sanksi yang jelas,”"}
      </p>
      <h2 className={articleHeadingClass} key="heading-54">
        {"PERSOALAN BERSAMA"}
      </h2>
      <p className={articleParagraphClass} key="paragraph-55">
        {"Bagi mereka yang tidak memiliki pekerjaan tetap, situasinya bahkan lebih rentan. Sebagian menggantungkan kebutuhan hidup pada insentif dan bantuan pembinaan yang pencairannya tidak selalu datang tepat waktu. Ketika dana terlambat turun, ruang gerak mereka ikut menyempit."}
      </p>
      <p className={articleParagraphClass} key="paragraph-56">
        {"Kebutuhan rumah tangga tetap berjalan, biaya transportasi menuju tempat latihan tetap harus dibayar, sementara penghasilan alternatif tidak selalu tersedia."}
      </p>
      <p className={articleParagraphClass} key="paragraph-57">
        {"Ketika pelatih pun adalah mantan atlet yang sama lelahnya. Wiryadharma, 41 tahun yang memahami kenyataan dari dua sisi sekaligus. Ia pernah berdiri sebagai atlet, lalu beralih menjadi koordinator pelatih blind judo NPCI Kota Bandung dalam dua hingga tiga tahun terakhir."}
      </p>
      <p className={articleParagraphClass} key="paragraph-58">
        {"Perpindahan peran tersebut memberinya pandangan yang lebih utuh tentang kehidupan olahraga disabilitas, mulai dari perjuangan di arena pertandingan hingga tantangan membina atlet dari pinggir matras."}
      </p>
      <p className={articleParagraphClass} key="paragraph-59">
        {"Namun berpindah dari arena pertandingan ke bangku pelatih tidak membuatnya lepas dari persoalan yang selama ini membayangi olahraga disabilitas. Menurut Wiryadharma, perhatian terhadap atlet disabilitas masih jauh dari memadai, mulai dari uang pembinaan, fasilitas latihan,"}
      </p>
      <p className={articleParagraphClass} key="paragraph-60">
        {"hingga peluang kerja setelah atau di luar karier olahraga."}
      </p>
      <p className={articleParagraphClass} key="quote-61">{"\"Kalau bicara perhatian terhadap atlet disabilitas, menurut saya masih sangat jauh dari cukup."}</p>
      <p className={articleParagraphClass} key="paragraph-62">
        {"Baik dari segi uang pembinaan, fasilitas, perhatian, maupun peluang pekerjaan untuk atlet disabilitas,\" ujarnya."}
      </p>
      <p className={articleParagraphClass} key="paragraph-63">
        {"Sebagai pelatih, ia menyaksikan langsung bagaimana persoalan ekonomi menjadi hambatan yang lebih nyata dibanding lawan di arena pertandingan."}
      </p>
      <p className={articleParagraphClass} key="quote-64">{"“Dari 21 atlet yang kami bina, yang hadir latihan biasanya hanya sekitar 10 orang. Sisanya banyak yang terkendala masalah ekonomi. Saya tidak bisa memaksa mereka ,”"}</p>
      <p className={articleParagraphClass} key="paragraph-65">
        {"Ujarnya."}
      </p>
      <p className={articleParagraphClass} key="paragraph-66">
        {"Hambatan ekonomi telah memengaruhi proses pembinaan sejak tahap paling dasar: kehadiran atlet di tempat latihan. Bagi sebagian atlet disabilitas, tantangan terbesar bukan meningkatkan performa, melainkan memastikan mereka memiliki ongkos untuk datang berlatih."}
      </p>
      <p className={articleParagraphClass} key="paragraph-67">
        {"Salah satu yang membekas bagi Wiryadharma adalah Opik, atlet blind judo dengan kategori low vision. Hampir setiap kali latihan, Opik datang seorang diri dengan mengendarai sepeda motor dari rumah menuju lokasi latihan. Perjalanan itu bukan tanpa risiko. Penglihatannya terbatas,"}
      </p>
      <p className={articleParagraphClass} key="paragraph-68">
        {"jarak yang ditempuh tidak dekat, dan tidak ada fasilitas transportasi khusus yang membantunya mencapai venue."}
      </p>
      <p className={articleParagraphClass} key="quote-69">{"“Tidak punya ongkos. Mereka harus mencari nafkah sendiri.Contohnya Opik tadi. Dengan kondisi low vision, dia tetap datang latihan sendiri, bahkan mengendarai motor sendiri.Padahal jaraknya cukup jauh. Itu pengorbanan yang luar biasa”"}</p>
      <p className={articleParagraphClass} key="paragraph-70">
        {"Ujar Opik."}
      </p>
      <ArticleImageCarousel
        images={blindJudoTransportImages}
        title="Blind Judo dan Transportasi"
      />
      <p className={articleParagraphClass} key="paragraph-74">
        {"Persoalan itu diperparah oleh minimnya perlindungan kesehatan. Menurut Wiryadharma, hingga saat ini atlet masih mengandalkan BPJS pribadi ketika sakit atau mengalami cedera. Padahal risiko cedera dalam olahraga bela diri seperti judo sering membutuhkan terapi maupun fisioterapi yang biayanya tidak murah."}
      </p>
      <p className={articleParagraphClass} key="paragraph-75">
        {"Dalam banyak kasus, peran pelatih akhirnya melampaui tugas teknis di arena latihan. Mereka menjadi pendamping mental, penghubung dengan keluarga atlet, bahkan turut mencari solusi ketika atlet mengalami kesulitan biaya pengobatan."}
      </p>
      <p className={articleParagraphClass} key="quote-76">{"\"Kalau ada yang harus dibawa ke rumah sakit, kami antar. Kalau belum ada biaya, kadang kami urunan dulu,\""}</p>
      <p className={articleParagraphClass} key="paragraph-77">
        {"Kata Wiryadharma."}
      </p>
      <AthleteNeedsInfographic />
      <h2 className={articleHeadingClass} key="heading-80">
        {"KESEMPATAN YANG DATANG"}
      </h2>
      <p className={articleParagraphClass} key="paragraph-81">
        {"Persoalan kesejahteraan tidak berhenti pada keterlambatan uang pembinaan. Kekhawatiran yang lebih besar justru muncul saat karir kompetitif berakhir, ketika kemampuan bertanding menurun dan sumber penghasilan dari prestasi tak lagi tersedia."}
      </p>
      <p className={articleParagraphClass} key="paragraph-82">
        {"Pertanyaan itu yang coba dijawab oleh Aditya Nandang Saputra, pengurus bidang pemberdayaan atlet NPCI Kabupaten Bandung. Berbeda dengan pembinaan yang umumnya berfokus pada latihan dan prestasi, Aditya melihat ancaman terbesar justru berada di luar arena pertandingan."}
      </p>
      <EditorialNote key="note-83" text={"[Kebetulan saya anak dari atlet disabilitas. Saya tahu lah bagaimana perjuangan atlet-atlet saya yang sekarang ya. Karena saya juga mengawal almarhum bapak saya, atlet itu sama bareng sama Agus Bagja, yang dari tahun 2010. Saya tahu gitu bagaimana pandangan orang di luar sana yang memandang sebelah mata disabilitas tersebut gitu. Perjuangan bapak saya itu sama dari tahun 2010 sampai tahun 2020, dua minggu sebelum berangkat Peparnas Papua itu meninggal]."} />
      <p className={articleParagraphClass} key="paragraph-84">
        {"Kekhawatiran itu yang mendorong Aditya Nandang Saputra, pengurus pemberdayaan atlet NPCI Kabupaten Bandung, mengembangkan pembinaan di luar aspek olahraga."}
      </p>
      <EditorialNote key="note-85" text={"[Kalau kita tuh ada kelas, Alhamdulillah kelas yang di luar dari pembelajaran pendidikan. Jadi kita jelasin tuh bahwa ada di luar sana itu ada saham, ada deposito, ada reksadana. Nah ini kita bongkar sedikit demi sedikit. Jadi di setiap hari Senin sampai Minggu itu kita ada sebenarnya ada kelas ngaji. Terus kalau yang dari SLB yang tuna grahita itu ada guru SLB yang datang ke sini untuk ngasih pembelajaran tetap belajar sekolah. Terus ada, nah ini yang setiap hari Jumat ini ada kelas pembelajaran yang di luar dari pembelajaran pendidikan. Nah itu ya kita. Dari pembelajaran pendidikan. Nah itu ya kita ada pengembangan diri, bagaimana caranya menjadi seorang pemimpin, bagaimana caranya melihat peta politik di luar sana, terus bagaimana caranya dia mendapatkan ya itu tadi, pembelajaran saham, reksadana, yang ya kita mengajarkan dari hal kecil lah y]"} />
      <p className={articleParagraphClass} key="quote-86">{"“Kita selamanya tidak bisa menjadi atlet, tapi bagaimana caranya uang yang bekerja untuk menjadi atlet tersebut, apalagi atlet tersebut adalah orang yang disabilitas,”"}</p>
      <p className={articleParagraphClass} key="paragraph-87">
        {"Ujar Aditya."}
      </p>
      <MediaPlaceholder assetNumber={3} key="media-88" text={"FOTO ADEN AHMAD Satu dari sedikit yang berhasil keluar dari lingkaran itu. Di sudut lapangan tenis UPI Bandung,"} />
      <p className={articleParagraphClass} key="paragraph-89">
        {"seorang pria 59 tahun bernama Aden Ahmad Muhammad Rahman. Ia pernah menjadi atlet tennis dan meraih tiga medali perunggu tingkat Jawa Barat. Di usianya sekarang, tubuhnya tidak lagi mampu menanggung intensitas latihan seperti dulu. Pembengkakan jantung yang dipicu riwayat tekanan darah tinggi membuatnya harus membatasi aktivitas fisik."}
      </p>
      <p className={articleParagraphClass} key="paragraph-90">
        {"\"Saya menjadi bagian dari Perkumpulan Penyandang Disabilitas Indonesia Provinsi Jawa Barat di bidang hukum. Saya juga aktif di Bandung Independent Living Center sebagai program manager. Hampir 90 persen kehidupan saya ada di dunia aktivisme. Sisanya bisnis dan usaha,\""}
      </p>
      <p className={articleParagraphClass} key="paragraph-91">
        {"ujarnya."}
      </p>
      <p className={articleParagraphClass} key="paragraph-92">
        {"Aden membangun kehidupan yang tidak bergantung pada prestasi. Ia berhasil mengubah pengalaman pribadinya sebagai penyandang disabilitas menjadi modal untuk memperjuangkan kehidupan orang lain. Ketika banyak kursi roda berkualitas masih harus diimpor dengan harga mahal, Aden memilih terlibat dalam usaha yang mendekatkan kebutuhan penyandang disabilitas dengan akses yang lebih terjangkau."}
      </p>
      <MediaPlaceholder assetNumber={4} key="media-93" text={"FOTO/VIDEO WAWANCARA ADEN AHMAD DI KURSI RODA"} />
    </>
  );
}
