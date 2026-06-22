"use client";

import EditorialNote from "@/modules/medpro-report/component/EditorialNote";
import AccessibilityPrinciplesTable from "@/modules/medpro-report/component/AccessibilityPrinciplesTable";
import AccessibilityPrinciplesInfographic from "@/modules/medpro-report/component/AccessibilityPrinciplesInfographic";
import ArticleRightsList from "@/modules/medpro-report/component/ArticleRightsList";
import KoniNpciComparisonInfographic from "@/modules/medpro-report/component/KoniNpciComparisonInfographic";
import LawReferenceLink, {
  lawReferenceUrls,
} from "@/modules/medpro-report/component/LawReferenceLink";
import { articleHeadingClass, articleParagraphClass } from "@/modules/medpro-report/component/articleContentClasses";

import ArticleImageCarousel from "@/modules/medpro-report/component/ArticleImageCarousel";
import Uu82016Link from "@/modules/medpro-report/component/Uu82016Link";
import Uu192011Link from "@/modules/medpro-report/component/Uu192011Link";
import ZoomableWrapper from "@/modules/medpro-report/component/ZoomableWrapper";
import ConstitutionLawTable from "@/modules/medpro-report/component/ConstitutionLawTable";
import DojoUpiGallery from "@/modules/medpro-report/component/DojoUpiGallery";
import AthleteNeedsComparisonInfographic from "@/modules/medpro-report/component/AthleteNeedsComparisonInfographic";
import InteractiveBrailleSimulator from "@/modules/medpro-report/component/InteractiveBrailleSimulator";
import NpciHistoryGame from "@/modules/medpro-report/component/NpciHistoryGame";
import QuoteCard from "@/modules/medpro-report/component/QuoteCard";

const disabilityRights = [
  {
    title: "Hak Hidup",
    description: "Hak untuk mempertahankan hidup dan kehidupan.",
  },
  {
    title: "Hak Bebas dari Stigma",
    description: "Hak untuk tidak mendapatkan label negatif dari masyarakat.",
  },
  {
    title: "Hak Privasi",
    description: "Perlindungan atas kehidupan pribadi.",
  },
  {
    title: "Hak Keadilan dan Perlindungan Hukum",
    description: "Kesamaan di depan hukum.",
  },
  {
    title: "Hak Pendidikan",
    description: "Akses pada pendidikan yang inklusif di semua jenjang.",
  },
  {
    title: "Hak Pekerjaan, Kewirausahaan, dan Koperasi",
    description: "Hak untuk bekerja dan mandiri secara ekonomi.",
  },
  {
    title: "Hak Kesehatan",
    description: "Akses pelayanan kesehatan yang setara.",
  },
  {
    title: "Hak Politik",
    description: "Hak memilih dan dipilih.",
  },
  {
    title: "Hak Keagamaan",
    description: "Menjalankan ibadah sesuai keyakinan.",
  },
  {
    title: "Hak Keolahragaan",
    description:
      "Hak untuk berprestasi dan mendapatkan fasilitas olahraga yang layak.",
  },
  {
    title: "Hak Kebudayaan dan Pariwisata",
    description: "Akses pada hiburan dan pelestarian budaya.",
  },
  {
    title: "Hak Kesejahteraan Sosial",
    description: "Jaminan sosial dari negara.",
  },
  {
    title: "Hak Aksesibilitas",
    description:
      "Ketersediaan fasilitas publik yang mudah digunakan secara mandiri.",
  },
  {
    title: "Hak Pelayanan Publik",
    description: "Pelayanan yang ramah disabilitas.",
  },
  {
    title: "Hak Perlindungan dari Bencana",
    description: "Prioritas penyelamatan saat situasi darurat.",
  },
  {
    title: "Hak untuk Habilitasi dan Rehabilitasi",
    description: "Pemulihan fungsi fisik dan sosial.",
  },
  {
    title: "Hak Konsesi",
    description: "Keringanan biaya untuk layanan tertentu.",
  },
  {
    title: "Hak Pendataan",
    description:
      "Tercatat secara resmi sebagai warga negara dan penyandang disabilitas.",
  },
  {
    title: "Hak Hidup secara Mandiri dan Dilibatkan dalam Masyarakat",
    description: "Tidak diisolasi.",
  },
  {
    title: "Hak Berekspresi, Berkomunikasi, dan Memperoleh Informasi",
    description:
      "Akses pada media komunikasi yang sesuai, seperti Braille.",
  },
  {
    title: "Hak Berpindah Tempat dan Kewarganegaraan",
    description: "Kebebasan mobilitas.",
  },
  {
    title:
      "Hak Bebas dari Diskriminasi, Penelantaran, Penyiksaan, dan Eksploitasi",
    description: "Perlindungan dari segala bentuk kekerasan fisik dan mental.",
  },
];

const opikStoryImages = [
  {
    src: "/photo-story/1.jpeg",
    alt: "Tangga dojo",
    caption: "Tangga menuju dojo blind judo di lantai 2 Gor Pajajaran Kota Bandung",
  },
  {
    src: "/photo-story/2.jpeg",
    alt: "Opik Jaya",
    caption: "Opik Jaya, atlet blind judo low vision",
  },
  {
    src: "/photo-story/3.jpeg",
    alt: "Kendaraan Opik",
    caption: "Kendaraan Opik atlet judo low vision yang dimodifikasi untuk dikendarai sejauh 2.5 km ke tempat latihan",
  },
  {
    src: "/photo-story/4.jpeg",
    alt: "Mess atlet",
    caption: "Mess atlet blind judo",
  },
  {
    src: "/photo-story/5.jpeg",
    alt: "Magic com di mess",
    caption: "Alat masak di mess atlet yang disediakan NPCI Kota Bandung, berisi beras dan lauk beli sendiri",
  },
];



export default function SubtitleTwoContent() {
  return (
    <>
      <div className={articleParagraphClass} key="paragraph-0">
        Negara sudah menulis aksesibilitas dalam{" "}
        <Uu82016Link>
          Undang-Undang Nomor 8 Tahun 2016 tentang Penyandang Disabilitas
        </Uu82016Link>
        . Tapi di lantai dua gedung dojo (tempat latihan kompetisi) NPCI Kota
        Bandung, seorang atlet blind judo masih harus meraba-raba tangga yang
        tidak pernah dirancang untuknya.
      </div>

      {/* 5 Slide Photo Carousel */}
      <div className="my-8">
        <ArticleImageCarousel 
          images={opikStoryImages} 
          title="Kehidupan & Perjuangan Atlet Blind Judo" 
        />
      </div>

      <p className={articleParagraphClass} key="paragraph-2">
        Secara hukum, hak-hak penyandang disabilitas sebenarnya telah mendapat pengakuan kuat di tingkat internasional maupun nasional. Salah satu tonggaknya adalah Konvensi tentang Hak-Hak Penyandang Disabilitas atau{" "}
        <LawReferenceLink href={lawReferenceUrls.crpd}>
          Convention on the Rights of Persons with Disabilities/CRPD
        </LawReferenceLink>{" "}
        yang disahkan melalui Resolusi Majelis Umum Perserikatan Bangsa-Bangsa pada 13 Desember 2006.
      </p>

      <p className={articleParagraphClass} key="paragraph-4">
        Jaminan ini kemudian dipertegas berdasarkan{" "}
        <LawReferenceLink href={lawReferenceUrls.indonesiaConstitution}>
          UUD 1945
        </LawReferenceLink>{" "}
        melalui landasan konstitusional:
      </p>

      {/* Compact Zoomable UUD 1945 Table */}
      <div className="my-8">
        <ZoomableWrapper title="Tabel Landasan Hak Disabilitas dalam UUD 1945">
          <ConstitutionLawTable />
        </ZoomableWrapper>
      </div>

      <div className={articleParagraphClass} key="paragraph-7">
        Indonesia kemudian meratifikasi konvensi tersebut melalui{" "}
        <Uu192011Link>
          Undang-Undang Nomor 19 Tahun 2011
        </Uu192011Link>
        , menjadikannya bagian dari komitmen negara dalam menjamin hak-hak penyandang disabilitas yang mengubah paradigma dari model medis yakni melihat disabilitas sebagai penyakit, menjadi model hak asasi manusia.
      </div>

      <div className={articleParagraphClass} key="paragraph-8">
        Selanjutnya dalam{" "}
        <Uu82016Link>
          Undang Undang Nomor 8 Tahun 2016
        </Uu82016Link>
        , negara memperjelas komitmennya untuk menjamin keberlangsungan hidup setiap warga negara tanpa kecuali. Ketentuan ini menegaskan bahwa penyandang disabilitas memiliki hak-hak dasar dan perlindungan hukum yang sama dengan warga negara lainnya dalam kehidupan berbangsa dan bernegara.
      </div>

      <div className={articleParagraphClass} key="paragraph-9">
        Prinsip inklusivitas dan aksesibilitas adalah mandat yang tertuang dalam{" "}
        <Uu82016Link>
          Pasal 5, 83, dan 84 UU No. 8 Tahun 2016
        </Uu82016Link>{" "}
        di mana negara diwajibkan membangun sistem keolahragaan yang inklusif, mencakup olahraga pendidikan, rekreasi, hingga olahraga prestasi yang disesuaikan dengan jenis disabilitasnya. Berdasarkan ketentuan tersebut, terdapat 22 hak dasar yang wajib dipenuhi oleh pemerintah dan masyarakat.
      </div>

      {/* Tangga Photo — full width */}
      <figure className="my-8 overflow-hidden rounded-2xl border border-zinc-200 shadow-md bg-zinc-950">
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/9]">
          <img
            src="/2/tangga.jpg"
            alt="Tangga menuju dojo NPCI Kota Bandung"
            className="w-full h-full object-cover"
          />
        </div>
        <figcaption className="px-5 py-3 bg-white border-t border-zinc-100 text-xs text-zinc-500 italic leading-relaxed">
          Tangga menuju dojo NPCI Kota Bandung yang curam menjadi makanan sehari-hari atlet judo disabilitas.
        </figcaption>
      </figure>
      <blockquote className="my-6 pl-5 border-l-4 border-secondary/40">
        <p className="text-xl sm:text-2xl font-semibold italic leading-snug text-[#0a3358]">
          "Sudah lama, jadi sudah pada tahu,"
        </p>
        <cite className="mt-2 block text-sm not-italic text-zinc-400">
          — Opik, saat ditanya apakah tangga itu menjadi masalah baginya
        </cite>
      </blockquote>

      <p className={articleParagraphClass} key="paragraph-36">
        {"Setiap sesi latihan blind judo, atlet dengan kondisi low vision itu harus menaiki anak tangga menuju lantai dua gedung latihan yang tidak dilengkapi ramp, tanpa pegangan yang memadai, tanpa penanda taktil. Opik bahkan menempuh jarak 2,5 kilometer menuju lokasi latihan dengan sepeda motornya."}
      </p>

      <p className={articleParagraphClass} key="quote-38">
        {"“Judo masih bergabung menggunakan dojo milik PJSI Jawa Barat. Karena NPCI sendiri belum memiliki fasilitas latihan khusus untuk judo,” ucap pelatih Judo Wirya, terkait dojo (tempat latihan bela diri) yang masih menyewa."}
      </p>

      <p className={articleParagraphClass} key="quote-41">{"“Fasilitas yang benar-benar aksesibel bagi tunanetra sampai sekarang belum tersedia. Contohnya tempat latihan kami masih harus naik tangga. Mereka harus beradaptasi sendiri karena belum ada tempat latihan yang sepenuhnya ramah disabilitas,” Lanjut Wirya."}
      </p>

      <p className={articleParagraphClass} key="paragraph-43">
        {"Bagi atlet disabilitas, tantangan tidak dimulai ketika sesi latihan berlangsung. Hambatan itu sudah muncul sejak mereka meninggalkan rumah. Atlet masih harus berhadapan dengan fasilitas yang belum sepenuhnya ramah disabilitas. Sejumlah gedung olahraga masih didominasi akses bertangga tanpa jalur landai yang memadai. Toilet yang dapat digunakan pengguna kursi roda juga belum tersedia secara merata. Kondisi yang seharusnya menjadi standar dasar aksesibilitas masih menjadi hambatan yang terus berulang."}
      </p>

      <p className={articleParagraphClass} key="paragraph-44">
        {"Djumono, Sekretaris Umum NPCI Kota Bandung, menyebut persoalan transportasi sebagai kebutuhan yang paling mendesak."}
      </p>

      <QuoteCard
        quote="Yang paling penting sekarang adalah sarana transportasi. Atlet, khususnya pengguna kursi roda, masih kesulitan mengakses transportasi yang aman dan nyaman menuju tempat latihan."
        imageSrc="/2/djumono.jpg"
        speakerName="Djumono"
        speakerRole="Sekretaris Umum NPCI Kota Bandung"
      />

      <p className={articleParagraphClass} key="paragraph-47">
        {"Menurut Djumono, biaya yang harus dikeluarkan pun tidak setara. Atlet umum bisa datang latihan dengan biaya bensin Rp10.000. Atlet dengan kursi roda harus menyewa kendaraan yang muat untuk kursi rodanya. Atlet tunanetra perlu pendamping selama perjalanan."}
      </p>

      <p className={articleParagraphClass} key="quote-48">{"\"Selain itu, banyak gedung dan fasilitas latihan yang belum aksesibel. Masih banyak bangunan bertangga dan toilet yang tidak ramah disabilitas. Hal-hal seperti itu masih harus terus disampaikan kepada pemerintah dan pemilik kebijakan,\" kata Djumono."}</p>

      {/* Side-by-side Dojo and UPI Gallery — after Djumono quotes */}
      <DojoUpiGallery />

      {/* Guiding Block Photo */}
      <figure className="my-8 overflow-hidden rounded-2xl border border-zinc-200 shadow-md bg-zinc-950">
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/9]">
          <img
            src="/2/guilding-block.jpg"
            alt="Guiding block tertutup sampah di luar GOR Pajajaran"
            className="w-full h-full object-cover"
          />
        </div>
        <figcaption className="px-5 py-3 bg-white border-t border-zinc-100 text-xs text-zinc-500 italic leading-relaxed">
          Guiding block tertutup sampah di luar GOR Pajajaran, Kota Bandung
        </figcaption>
      </figure>

      <p className={articleParagraphClass} key="paragraph-53">
        {"Pengalaman tinggal di Australia memberi Aden Achmad Muhammad Rahman yang merupakan atlet sekaligus pria yang aktif mengadvokasi hak disabilitas memberikan gambaran tajam dengan aksesibilitas di Indonesia."}
      </p>

      <QuoteCard
        quote="Di sana saya merasa bukan penyandang disabilitas karena semua fasilitas memungkinkan saya mandiri. Naik transportasi sendiri bisa. Pergi ke mana-mana bisa. Sementara di Indonesia sering kali masih harus dibantu atau bahkan digotong."
        imageSrc="/1/Para%20Atlet%20Aden%20ahmad.jpeg"
        speakerName="Aden Achmad Muhammad Rahman"
        speakerRole="Atlet Tenis Kursi Roda · Aktivis Advokasi Hak Disabilitas"
        reverse
      />

      <p className={articleParagraphClass} key="paragraph-56">
        {"Ia kemudian menjelaskan bahwa aksesibilitas bukan sekadar soal ada atau tidaknya ramp. Aksesibilitas harus memenuhi empat asas yang saling berkaitan:"}
      </p>

      {/* 4 Asas Aksesibilitas Infographic */}
      <AccessibilityPrinciplesInfographic />

      <p className={articleParagraphClass} key="paragraph-61">
        {"Menjelang ajang besar seperti Peparda, para atlet memang ditempatkan di mess sebagai bagian dari persiapan pertandingan. Namun, fasilitas yang tersedia belum sepenuhnya menjawab kebutuhan dasar mereka. Opik Jaya, atlet blind judo NPCI Kota Bandung kerap menginap di mess, mengungkapkan bahwa organisasi hanya menyediakan beras dan magic com."}
      </p>

      <p className={articleParagraphClass} key="quote-62">{"\"Disediakan beras dan magic com. Kalau lauk beli sendiri,\" kata Opik."}</p>

      <h2 className={articleHeadingClass} key="heading-64">
        {"MAHALNYA PERALATAN, TAK SELALU TERLIHAT"}
      </h2>

      <p className={articleParagraphClass} key="paragraph-65">
        {"Kesetaraan di arena pertandingan tidak selalu diikuti kesetaraan biaya. Peralatan catur bagi atlet netra, misalnya, dapat berharga dua hingga tiga kali lebih mahal dibanding catur biasa. “Kursi roda balap di atletik harganya sangat mahal, bahkan bisa setara mobil,” ujar Yadi, Ketua Umum NPCI Kota Bandung."}
      </p>

      <p className={articleParagraphClass} key="quote-66">{"Djumono mengakui bahwa dampak efisiensi pada 2026 sangat terasa pada pengadaan peralatan, “yang paling terasa adalah kebutuhan peralatan atlet. Banyak alat olahraga disabilitas yang mahal dan sebagian besar bukan produksi Indonesia. Akhirnya pengadaan alat harus dikurangi sedikit demi sedikit supaya program lain tetap berjalan.”"}</p>

      <p className={articleParagraphClass} key="paragraph-68">
        {"Muslim, atlet catur disabilitas, turut memberikan contoh konkret. “Jam yang agak mahal itu kan 7,5 juta. Sekarang kalau kita perlu 12, ya minimal harus punya 6 (juta). Sedangkan jam di umum itu lebih murah hanya 2 juta. Tapi yang difabel, untuk tunanetra khususnya, itu 1 jam timer saja 7 juta.” Dengan 23 atlet catur dan hanya satu jam tersedia, kekurangan mencapai 10 jam."}
      </p>

      {/* Athlete Needs & Equipment Comparison & Braille Simulator Section */}
      <div className="space-y-8 my-10">
        <AthleteNeedsComparisonInfographic />
        <InteractiveBrailleSimulator />
      </div>

      <p className={articleParagraphClass} key="paragraph-81">
        {"Atlet pada umumnya bisa menerima program latihan dan informasi yang dapat dipelajarinya kembali secara mandiri. Namun, bagi atlet tunanetra, hal sesederhana itu belum tentu bisa dilakukan. Braille (alat untuk membaca secara mandiri dengan meraba titik-titik timbul) belum tersedia di NPCI Jawa Barat maupun Kota Bandung."}
      </p>

      <p className={articleParagraphClass} key="quote-82">{"“Pelatih tidak bisa kasih program tertulis ke atlet tunanetra karena alat untuk itu belum ada,” ucap Dodi, Sekretaris Umum NPCI Jawa Barat."}</p>

      <p className={articleParagraphClass} key="paragraph-84">
        {"Bambang Basuki, pelatih ten pin bowling yang merupakan seorang tunanetra, menggambarkan metode yang ia gunakan akibat absennya pelatihan khusus tunanetra."}
      </p>

      <p className={articleParagraphClass} key="quote-85">{"“Karena kami (saya) tidak banyak mengandalkan penglihatan, jadi lebih banyak mengandalkan pendengaran dan deskripsi verbal,” ujar Bambang. Ia kemudian menekankan, “(pelatihan) secara khusus belum ada. Saya lebih banyak belajar sendiri dari pengalaman sebagai atlet.”"}</p>

      <h2 className={articleHeadingClass} key="heading-88">
        {"SEJARAH TERBENTUKNYA NPCI"}
      </h2>

      <p className={articleParagraphClass} key="paragraph-90">
        {"Di atas kertas, olahraga disabilitas dan olahraga umum kini berjalan dalam dua jalur organisasi yang berbeda. Komite Olahraga Nasional Indonesia (Koni) mengelola pembinaan olahraga prestasi umum, sementara olahraga disabilitas berada di bawah National Paralympic Committee Indonesia (NPCI). Pemisahan tersebut awalnya dilakukan untuk memberikan ruang yang lebih fokus bagi pembinaan atlet disabilitas, yang memiliki kebutuhan, klasifikasi, serta sistem kompetisi berbeda dengan atlet non-disabilitas."}
      </p>

      <p className={articleParagraphClass} key="paragraph-91">
        {"Sebelum bernama NPCI, organisasi olahraga disabilitas dikenal sebagai Badan Pembina Olahraga Cacat (BPOC). Pada 2010, organisasi tersebut bertransformasi menjadi NPCI dan tidak lagi berada di bawah struktur KONI. Perubahan ini dilakukan agar olahraga disabilitas memiliki kemandirian dalam pembinaan, pengelolaan kompetisi, serta representasi pada ajang paralimpik nasional maupun internasional."}
      </p>

      {/* Interactive History Game / Timeline */}
      <NpciHistoryGame />

      <p className={articleParagraphClass} key="paragraph-92">
        {"Mulyana, Wakil Ketua KONI Kota Bandung, mengakui perbedaan sejarah tersebut. Menurutnya, olahraga disabilitas dan olahraga umum pada awalnya berada dalam satu payung organisasi yang sama."}
      </p>

      <p className={articleParagraphClass} key="quote-94">{"“Dulu memang kita satu organisasi. NPCI itu dulu badan fungsional di bawah KONI. Dari sisi pendanaan berada di bawah KONI. Jadi dulu dana dari Dispora masuk ke KONI. Kemudian KONI yang menyalurkan ke badan-badan fungsional tadi,\" jelasnya."}</p>

      <p className={articleParagraphClass} key="paragraph-96">
        {"Struktur organisasi memang dipisahkan, tetapi aset dan sumber daya yang selama bertahun-tahun terbentuk tidak otomatis terbagi. Fasilitas olahraga, jaringan kelembagaan, ketersediaan pelatih bersertifikasi, hingga ekosistem pembinaan yang lebih matang sebagian besar telah lebih dulu mengakar dalam sistem olahraga umum."}
      </p>

      <p className={articleParagraphClass} key="paragraph-97">
        {"Djumono, yang sudah bergabung dengan organisasi ini sejak 1999 ketika kakinya harus diamputasi, menyaksikan perjalanan ini lebih dekat. “Saya berharap dampaknya tidak hanya pada olahraga, tetapi para pengambil kebijakan juga melihat bahwa penyandang disabilitas punya potensi, jumlahnya banyak, dan masih ada 22 hak lainnya yang harus dipenuhi.”"}
      </p>

      {/* Centered & Downscaled KONI-NPCI Comparison Infographic */}
      <div className="max-w-2xl mx-auto my-10 border border-zinc-200 rounded-3xl overflow-hidden shadow-lg bg-white">
        <KoniNpciComparisonInfographic />
      </div>

      <p className={articleParagraphClass} key="paragraph-99">
        {"Komisioner Komisi Nasional Disabilitas (KND), Jonna Aman Damanik, menjelaskan bahwa penyelenggaraan ajang olahraga disabilitas membutuhkan kesiapan yang lebih kompleks dibanding olahraga umum. “Menyelenggarakan event olahraga disabilitas tidak sesederhana menyelenggarakan olahraga umum. Venue harus aksesibel. Transportasi harus aksesibel. Kendaraan yang digunakan harus mampu mengakomodasi pengguna kursi roda. Ada kebutuhan hydraulic lift dan berbagai fasilitas lain yang memang menjadi standar. Karena itu, tidak semua daerah siap menjadi tuan rumah event olahraga disabilitas,” jelasnya mengenai realita penyelenggaraan."}
      </p>

      <p className={articleParagraphClass} key="paragraph-102">
        {"Tri selaku pelatih voli duduk juga menyampaikan bahwa pemenuhan aksesibilitas dalam olahraga disabilitas juga harus berjalan beriringan dengan keterlibatan langsung penyandang disabilitas yang paling memahami apa kebutuhannya. “Dan mewakili NPCI, ini organisasi disabilitas. Semua yang disabilitas harus muncul. Jangan kita yang istilahnya non-disabilitas ya. Bagi saya kebalik. Yang harus muncul itu adalah teman-teman disabilitas. Kita orang normalnya cuma sebagai penopang, pendamping. Jangan sampai melebihi, kalau bagi saya ya.”"}
      </p>

      <p className={articleParagraphClass} key="paragraph-104">
        {"Pernyataan itu tercermin dalam peristiwa beberapa tahun terakhir saat Indramayu yang semula ditunjuk sebagai tuan rumah Pekan Paralimpik Daerah (Peparda) 2026 akhirnya mengundurkan diri. Sebelumnya, Aceh dan Sumatera Utara juga batal menjadi tuan rumah Peparnas 2023 sehingga penyelenggaraan dipindahkan ke Solo yang dinilai lebih siap dari sisi infrastruktur dan aksesibilitas."}
      </p>

      <p className={articleParagraphClass} key="paragraph-105">
        {"Solo merupakan pusat National Paralympic Committee Indonesia (NPCI) yang berkembang sebagai pusat pembinaan atlet, penyelenggaraan kejuaraan nasional maupun internasional, hingga laboratorium penerapan kota inklusif bagi penyandang disabilitas. Kota ini menjadi tuan rumah dari ASEAN Para Games 2022, Peparnas XVII 2024, hingga dipercaya menjadi kandidat lokasi penyelenggaraan agenda NPC ASEAN pada 2026. Rangkaian penyelenggaraan tersebut memperlihatkan kapasitas Solo dalam mengelola kompetisi olahraga disabilitas berskala besar."}
      </p>

      <p className={articleParagraphClass} key="paragraph-107">
        {"Wali Kota Solo, Respati Ardi dalam wawancaranya dengan Solopos (08/04/2026) menegaskan pemerintah kota terus berupaya memperkuat identitas Solo sebagai kota yang ramah terhadap penyandang disabilitas dan harus beriringan dengan pembangunan budaya masyarakat yang inklusif sehingga atlet maupun masyarakat penyandang disabilitas dapat beraktivitas secara mandiri."}
      </p>

      <p className={articleParagraphClass} key="paragraph-108">
        {"Bahkan Paralympic Training Center juga resmi dibangun di Karanganyar, Solo pada 2025, menjadi pusat pelatihan paralimpik pertama se-Asia Tenggara. Pembangunan di lahan seluas 80.262 meter persegi itu dilakukan oleh Kementerian Pemuda dan Olahraga serta Kementerian Pekerjaan Umum dan Perumahan Rakyat (PUPR) dengan biaya Rp409,2 miliar."}
      </p>

      {/* Tri Direct Quote Component */}
      <QuoteCard 
        quote="Jadi untuk aksesibilitas itu jauh, artinya masih belum 100 persen terpikirkan. Masih banyak yang lewat. Contoh di jalan, karena ada jalan khusus, eh malah dipakai tempat jualan, eh dipakai parkir. Nah, itu pemahaman dari orang Indonesia sendiri kayak jadinya juga nanti kan kayak bisa di Arcamanik ya kan, saat ini belum siap."
        speakerName="Tri"
        speakerRole="Pelatih Voli Duduk"
        imageSrc="/2/tri.jpg"
      />

      <p className={articleParagraphClass} key="paragraph-110">
        {"Jonna Aman Damanik selaku Komisioner Nasional Disabilitas juga mendukung pernyataan tersebut. Sebagai contoh, banyak event internasional disabilitas lebih dipilih diselenggarakan di Solo, “karena di sana bukan hanya infrastrukturnya yang baik, tetapi masyarakatnya juga sudah memiliki sensitivitas yang tinggi. Mulai dari tukang parkir, pengemudi ojek, hingga pedagang warung, semuanya sangat komunikatif dan siap melayani penyandang disabilitas dengan baik. Inilah yang saya maksud dengan paradigma. Kita tidak hanya berbicara soal infrastruktur, tetapi juga budaya dan sikap masyarakat,” Lanjut Jonna."}
      </p>

      <p className={articleParagraphClass} key="paragraph-114">
        {"Perkembangan infrastruktur olahraga disabilitas di Indonesia dinilai belum sepenuhnya memenuhi standar negara-negara maju seperti Jepang yang masih menjadi acuan dalam penyediaan fasilitas olahraga sekaligus aksesibilitas bagi penyandang disabilitas."}
      </p>

      <p className={articleParagraphClass} key="quote-115">{"“Asian Para Games. Pokoknya yang nomor dunia ya itu di Jepang, karena Jepang sudah pasti ditanya oke ya. Baik di pertandingan, baik di sarananya. Contoh kecil toilet ya kan, tidak semua toilet aksesibilitas. Itu buat kenyamanan. Sampai hotel-hotel. Karena dari segi hak mereka sangat sama. Cuma ya kadang kita sendiri masih kurang. Tidak semua ada, tapi tidak semua ya. Itu harusnya ada jalan khususnya,” ungkap Tri perihal Jepang yang masih menjadi standar yang baik dari segi fasilitas."}</p>

      <p className={articleParagraphClass} key="paragraph-117">
        {"Perbandingan dengan Jepang juga memperlihatkan bahwa Indonesia masih memiliki jarak yang panjang untuk mengejar standar ideal. Ia kemudian melanjutkan, “kalau di kita iya (belum ada tempat latihan khusus). Tapi kalau di luar negeri, contoh di Jerman, semua ada. Jadi memang lapangan khusus. Jadi memang latihan di sini terus. Di Brazil ada, Jepang sendiri ada, Cina ada. Kita aja yang belum. Makanya yang saya bilang tadi bahwa kita belum, apa ya, perhatian untuk awareness gitu kan belum. Sekarang gini, kalau kita melihat ya kesetaraan, mereka ada voli duduk ya harus ada dong lapang khusus voli duduk. Lapang khusus indoor voli orang non-disabilitas juga ada, kenapa ini nggak ada?”"}</p>

      <p className={articleParagraphClass} key="paragraph-120">
        {"Padahal, voli duduk memiliki karakter berbeda dari voli berdiri. Ukuran lapangan, tinggi net, cara bergerak, dan posisi tubuh atlet berbeda. Atlet tidak hanya membutuhkan bola dan net, tetapi juga permukaan lapangan, garis, ruang gerak, dan fasilitas pendukung yang sesuai dengan kebutuhan cabang olahraga tersebut."}
      </p>

      <iframe
        src="https://uploads.knightlab.com/storymapjs/624b48ba902db5f52c77609bbc693d20/standar-infrastruktur-untuk-atlet-disabilitas/index.html"
        frameBorder="0"
        width="100%"
        height="800"
        className="w-full my-8 rounded-2xl border border-slate-200 shadow-md"
        title="Standar Infrastruktur untuk Atlet Disabilitas"
      />

    </>
  );
}
