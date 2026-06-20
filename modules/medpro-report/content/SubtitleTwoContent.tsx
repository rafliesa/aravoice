import EditorialNote from "@/modules/medpro-report/component/EditorialNote";
import AccessibilityPrinciplesTable from "@/modules/medpro-report/component/AccessibilityPrinciplesTable";
import ArticleComparisonTable from "@/modules/medpro-report/component/ArticleComparisonTable";
import ArticleRightsList from "@/modules/medpro-report/component/ArticleRightsList";
import ConstitutionHighlightsInfographic from "@/modules/medpro-report/component/ConstitutionHighlightsInfographic";
import EquipmentComparisonTable from "@/modules/medpro-report/component/EquipmentComparisonTable";
import KoniNpciComparisonInfographic from "@/modules/medpro-report/component/KoniNpciComparisonInfographic";
import LawReferenceLink, {
  lawReferenceUrls,
} from "@/modules/medpro-report/component/LawReferenceLink";
import MediaPlaceholder from "@/modules/medpro-report/component/MediaPlaceholder";
import { articleHeadingClass, articleParagraphClass } from "@/modules/medpro-report/component/articleContentClasses";

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

const accessibilityComparisonRows = [
  {
    aspect: "Fasilitas",
    bandung:
      "Belum memiliki fasilitas lapangan khusus disabilitas dan masih bertumpu pada penyesuaian.",
    solo:
      "Memiliki fasilitas kota ramah disabilitas seperti guiding block, area parkir khusus, jalur halte miring, bus low deck, dan Paralympic Training Center di Karanganyar.",
    singapore:
      "Menempatkan aksesibilitas sebagai bagian dari tata kota, termasuk mandat penyediaan toilet aksesibel di pintu masuk bangunan.",
    japan:
      "Menjadi contoh Asia yang lebih matang karena aksesibilitas telah masuk ke transportasi, hotel, toilet, jalur khusus, dan budaya layanan.",
  },
  {
    aspect: "Venue",
    bandung:
      "Venue masih banyak bersifat sementara atau event-based, belum sepenuhnya terintegrasi dengan kebutuhan harian atlet.",
    solo:
      "Paralympic Training Center mencakup area latihan, asrama atlet, fasilitas recovery, serta sejumlah arena olahraga disabilitas.",
    singapore:
      "Tidak dibahas secara khusus sebagai pusat latihan olahraga disabilitas, tetapi aksesibilitas kota mendukung mobilitas harian penyandang disabilitas.",
    japan:
      "Memiliki fasilitas khusus untuk beberapa cabang olahraga disabilitas, termasuk lapangan khusus yang belum tersedia merata di Indonesia.",
  },
  {
    aspect: "Transportasi dan Mobilitas",
    bandung:
      "Kendaraan ramah kursi roda dan fasilitas seperti hydraulic lift belum sepenuhnya menjadi standar aksesibilitas.",
    solo:
      "Memiliki guiding block, area parkir khusus, jalur halte miring, dan uji coba bus low deck pada 2022.",
    singapore:
      "Disebut memiliki lebih dari 95% jalur pejalan kaki, halte taksi, dan halte bus yang dapat diakses pengguna kursi roda, lansia, atau penyandang disabilitas lain.",
    japan:
      "Tokyo memiliki transportasi yang mudah diakses dan indikator tanah taktil yang membantu tunanetra.",
  },
  {
    aspect: "Kebijakan dan Sistem",
    bandung:
      "Pemerintah daerah membantu melalui sewa lapangan, anggaran, honor pelatih, dan dukungan pembinaan, tetapi sarana khusus masih belum tersedia.",
    solo:
      "Pengalaman menyelenggarakan event nasional-internasional dan keberadaan Training Center membuat kebutuhan akomodasi lebih teruji.",
    singapore:
      "Sistem kota yang aksesibel membuat penyelenggaraan kegiatan publik lebih siap secara mobilitas.",
    japan:
      "Memiliki sejarah lebih panjang dalam gerakan hak disabilitas dan kebijakan barrier-free sejak akhir 1960-an.",
  },
  {
    aspect: "Sensitivitas Masyarakat",
    bandung:
      "Awareness belum cukup dan kebutuhan tiap ragam disabilitas masih harus dipelajari.",
    solo:
      "Masyarakat disebut komunikatif dan siap melayani penyandang disabilitas, dari tukang parkir, pengemudi ojek, hingga pedagang warung.",
    singapore:
      "Penyandang disabilitas dipertimbangkan dalam desain ruang publik.",
    japan:
      "Tidak hanya kuat secara fasilitas, tetapi juga budaya layanan. Tokyo disebut lebih perhatian dan masyarakatnya lebih siap menerima kebutuhan aksesibilitas.",
  },
];

export default function SubtitleTwoContent() {
  return (
    <>
      <p className={articleParagraphClass} key="paragraph-0">
        Negara sudah menulis aksesibilitas dalam{" "}
        <LawReferenceLink href={lawReferenceUrls.uuDisability}>
          Undang-Undang Nomor 8 Tahun 2016 tentang Penyandang Disabilitas
        </LawReferenceLink>
        . Tapi di lantai dua gedung dojo (tempat latihan kompetisi) NPCI Kota
        Bandung, seorang atlet blind judo masih harus meraba-raba tangga yang
        tidak pernah dirancang untuknya.
      </p>
      <MediaPlaceholder assetNumber={1} key="media-1" text={"Foto utama: tangga menuju dojo blind judo di lantai dua – satu-satunya akses yang tersedia Foto kedua: Opik, atlet low vision mengendarai motor 2,5 km sendiri ke tempat latihan"} />
      <MediaPlaceholder
        assetNumber={2}
        key="media-3"
        text={
          <>
            Foto ketiga: Mess atlet, berisi beras dan magic com yang disediakan
            organisasi. Lauk beli sendiri Secara hukum, hak-hak penyandang
            disabilitas sebenarnya telah mendapat pengakuan kuat di tingkat
            internasional maupun nasional. Salah satu tonggaknya adalah
            Konvensi tentang Hak-Hak Penyandang Disabilitas atau{" "}
            <LawReferenceLink href={lawReferenceUrls.crpd}>
              Convention on the Rights of Persons with Disabilities/CRPD
            </LawReferenceLink>{" "}
            yang disahkan melalui Resolusi Majelis Umum Perserikatan
            Bangsa-Bangsa pada 13 Desember 2006.
          </>
        }
      />
      <p className={articleParagraphClass} key="paragraph-4">
        Jaminan ini kemudian dipertegas berdasarkan{" "}
        <LawReferenceLink href={lawReferenceUrls.indonesiaConstitution}>
          UUD 1945
        </LawReferenceLink>{" "}
        melalui dua prinsip utama:
      </p>
      <ConstitutionHighlightsInfographic />
      <p className={articleParagraphClass} key="paragraph-7">
        Indonesia kemudian meratifikasi konvensi tersebut melalui{" "}
        <LawReferenceLink href={lawReferenceUrls.uuRatificationCrpd}>
          Undang-Undang Nomor 19 Tahun 2011
        </LawReferenceLink>
        , menjadikannya bagian dari komitmen negara dalam menjamin hak-hak
        penyandang disabilitas yang mengubah paradigma dari model medis yakni
        melihat disabilitas sebagai penyakit, menjadi model hak asasi manusia.
      </p>
      <p className={articleParagraphClass} key="paragraph-8">
        Selanjutnya dalam{" "}
        <LawReferenceLink href={lawReferenceUrls.uuDisability}>
          Undang Undang Nomor 8 Tahun 2016
        </LawReferenceLink>
        , negara memperjelas komitmennya untuk menjamin keberlangsungan hidup
        setiap warga negara tanpa kecuali. Ketentuan ini menegaskan bahwa
        penyandang disabilitas memiliki hak-hak dasar dan perlindungan hukum
        yang sama dengan warga negara lainnya dalam kehidupan berbangsa dan
        bernegara.
      </p>
      <p className={articleParagraphClass} key="paragraph-9">
        Prinsip inklusivitas dan aksesibilitas adalah mandat yang tertuang
        dalam{" "}
        <LawReferenceLink href={lawReferenceUrls.uuDisability}>
          Pasal 5, 83, dan 84 UU No. 8 Tahun 2016
        </LawReferenceLink>{" "}
        di mana negara diwajibkan membangun sistem keolahragaan yang inklusif,
      </p>
      <p className={articleParagraphClass} key="paragraph-10">
        {"mencakup olahraga pendidikan, rekreasi, hingga olahraga prestasi yang disesuaikan dengan jenis disabilitasnya."}
      </p>
      <EditorialNote key="note-11" text={"[LINK KE ISI UNDANG-UNDANG NOMOR 8 TAHUN 2016]"} />
      <EditorialNote key="note-12" text={"[22 Hak Penyandang Disabilitas (Pasal 5 UU No. 8/2016)]"} />
      <p className={articleParagraphClass} key="paragraph-13">
        {"Berdasarkan ketentuan tersebut, terdapat 22 hak dasar yang wajib dipenuhi oleh pemerintah dan masyarakat."}
      </p>
      <ArticleRightsList items={disabilityRights} />
      <p className={articleParagraphClass} key="quote-33">{"\"Sudah lama, jadi sudah pada tahu,\""}</p>
      <p className={articleParagraphClass} key="paragraph-34">
        {"Lanjut Opik saat ditanya apakah tangga itu menjadi masalah baginya."}
      </p>
      <MediaPlaceholder assetNumber={3} key="media-35" text={"Foto tangga menuju dojo blind judo"} />
      <p className={articleParagraphClass} key="paragraph-36">
        {"Setiap sesi latihan blind judo, atlet dengan kondisi low vision itu harus menaiki anak tangga menuju lantai dua gedung latihan yang tidak dilengkapi ramp, tanpa pegangan yang memadai,"}
      </p>
      <p className={articleParagraphClass} key="paragraph-37">
        {"tanpa penanda taktil. Opik bahkan menempuh jarak 2,5 kilometer menuju lokasi latihan dengan sepeda motornya."}
      </p>
      <p className={articleParagraphClass} key="quote-38">{"“Judo masih bergabung menggunakan dojo milik PJSI Jawa Barat. Karena NPCI sendiri belum memiliki fasilitas latihan khusus untuk judo,”"}</p>
      <p className={articleParagraphClass} key="paragraph-39">
        {"Ucap pelatih Judo Wiryadharma terkait dojo"}
      </p>
      <EditorialNote key="note-40" text={"(tempat latihan beladiri) yang masih menyewa."} />
      <p className={articleParagraphClass} key="quote-41">{"“Fasilitas yang benar-benar aksesibel bagi tunanetra sampai sekarang belum tersedia."}</p>
      <p className={articleParagraphClass} key="paragraph-42">
        {"Contohnya tempat latihan kami masih harus naik tangga. Mereka harus beradaptasi sendiri karena belum ada tempat latihan yang sepenuhnya ramah disabilitas,” Lanjut Wiryadharma."}
      </p>
      <p className={articleParagraphClass} key="paragraph-43">
        {"Bagi atlet disabilitas, tantangan tidak dimulai ketika peluit pertandingan dibunyikan atau ketika sesi latihan berlangsung. Hambatan itu sudah muncul sejak mereka meninggalkan rumah. Atlet masih harus berhadapan dengan fasilitas yang belum sepenuhnya ramah disabilitas. Sejumlah gedung olahraga masih didominasi akses bertangga tanpa jalur landai yang memadai. Toilet yang dapat digunakan pengguna kursi roda juga belum tersedia secara merata. Kondisi yang seharusnya menjadi standar dasar aksesibilitas masih menjadi hambatan yang terus berulang."}
      </p>
      <p className={articleParagraphClass} key="paragraph-44">
        {"Sekretaris Umum NPCI Kota Bandung, Djumono, menyebut persoalan transportasi sebagai kebutuhan yang paling mendesak."}
      </p>
      <p className={articleParagraphClass} key="quote-45">{"\"Yang paling penting sekarang adalah sarana transportasi. Atlet, khususnya pengguna kursi roda,"}</p>
      <p className={articleParagraphClass} key="paragraph-46">
        {"masih kesulitan mengakses transportasi yang aman dan nyaman menuju tempat latihan,\" ujarnya."}
      </p>
      <p className={articleParagraphClass} key="paragraph-47">
        {"Menurut Djumono, biaya yang harus dikeluarkan pun tidak setara. Atlet umum bisa datang latihan dengan biaya bensin Rp10.000. Atlet dengan kursi roda harus menyewa kendaraan yang muat untuk kursi rodanya. Atlet tunanetra perlu pendamping selama perjalanan."}
      </p>
      <p className={articleParagraphClass} key="quote-48">{"\"Selain itu, banyak gedung dan fasilitas latihan yang belum aksesibel. Masih banyak bangunan bertangga dan toilet yang tidak ramah disabilitas. Hal-hal seperti itu masih harus terus disampaikan kepada pemerintah dan pemilik kebijakan,\""}</p>
      <p className={articleParagraphClass} key="paragraph-49">
        {"Kata Djumono."}
      </p>
      <MediaPlaceholder assetNumber={4} key="media-50" text={"[FOTO KONDISI ASLI VENUE]"} />
      <MediaPlaceholder assetNumber={5} key="media-51" text={"Foto 1: Tangga menuju dojo blind judo, curam, tanpa ramp, tanpa penanda taktil"} />
      <MediaPlaceholder assetNumber={6} key="media-52" text={"Foto 2: Lapangan tenis indoor UPI, salah satu dari sedikit venue yang relatif aksesibel, tapi statusnya sewa dan harus gantian dengan cabor lain"} />
      <p className={articleParagraphClass} key="paragraph-53">
        {"Pengalaman tinggal di Australia memberi Aden Ahmad Muhammad Rahman yang merupakan atlet sekaligus pria yang aktif mengadvokasi hak disabilitas memberikan gambaran tajam dengan aksesibilitas di Indonesia."}
      </p>
      <p className={articleParagraphClass} key="quote-54">{"“Di sana saya merasa bukan penyandang disabilitas karena semua fasilitas memungkinkan saya mandiri. Naik transportasi sendiri bisa. Pergi ke mana-mana bisa. Sementara di Indonesia sering kali masih harus dibantu atau bahkan digotong,”"}</p>
      <p className={articleParagraphClass} key="paragraph-55">
        {"Ujarnya."}
      </p>
      <p className={articleParagraphClass} key="paragraph-56">
        {"Ia kemudian menjelaskan bahwa aksesibilitas bukan sekadar soal ada atau tidaknya ramp."}
      </p>
      <AccessibilityPrinciplesTable />
      <p className={articleParagraphClass} key="paragraph-61">
        {"Menjelang ajang besar seperti Peparda, para atlet memang ditempatkan di mess sebagai bagian dari persiapan pertandingan. Namun fasilitas yang tersedia belum sepenuhnya menjawab kebutuhan dasar mereka. Opik Jaya, atlet blind judo NPCI Kota Bandung kerap menginap di mess, mengungkapkan bahwa organisasi hanya menyediakan beras dan magic com."}
      </p>
      <p className={articleParagraphClass} key="quote-62">{"\"Disediakan beras dan magic com. Kalau lauk beli sendiri,\""}</p>
      <p className={articleParagraphClass} key="paragraph-63">
        {"Kata Opik."}
      </p>
      <h2 className={articleHeadingClass} key="heading-64">
        {"ALAT IMPOR SEMUA, PERAWATAN DITANGGUNG SENDIRI"}
      </h2>
      <p className={articleParagraphClass} key="paragraph-65">
        {"Kesetaraan di arena pertandingan tidak selalu diikuti kesetaraan biaya. Peralatan catur bagi atlet netra, misalnya, dapat berharga dua hingga tiga kali lebih mahal dibanding catur biasa. \"Kursi roda balap di atletik harganya sangat mahal, bahkan bisa setara mobil,\" ujar Ketua Umum NPCI Kota Bandung, Yadi."}
      </p>
      <p className={articleParagraphClass} key="quote-66">{"\"Yang paling terasa adalah kebutuhan peralatan atlet. Banyak alat olahraga disabilitas yang mahal dan sebagian besar bukan produksi Indonesia... Akhirnya pengadaan alat harus dikurangi sedikit demi sedikit supaya program lain tetap berjalan.\""}</p>
      <p className={articleParagraphClass} key="paragraph-67">
        {"Djumono mengakui bahwa adanya dampak efisiensi pada 2026 yang terasa sangat pada peralatan."}
      </p>
      <p className={articleParagraphClass} key="paragraph-68">
        {"Muslim, atlet catur disabilitas, memberikan contoh konkret. \"Jam yang agak mahal itu kan 7,5 juta. Sekarang kalau kita perlu 12, ya minimal harus punya 6. Sedangkan jam di umum itu lebih murah hanya 2 juta. Tapi yang difabel, untuk tunanetra khususnya, itu 1 jam timer saja 7 juta.\""}
      </p>
      <p className={articleParagraphClass} key="paragraph-69">
        {"Dengan 23 atlet catur dan hanya satu jam tersedia, kekurangan mencapai 10 jam."}
      </p>
      <EquipmentComparisonTable />
      <p className={articleParagraphClass} key="paragraph-81">
        {"Atlet pada umumnya bisa menerima program latihan dan informasi yang dapat dipelajarinya kembali secara mandiri dengan menggunakan braille (alat untuk membaca secara mandiri dengan meraba titik-titik timbul). Namun bagi atlet tunanetra, hal sesederhana itu belum tentu bisa dilakukan."}
      </p>
      <p className={articleParagraphClass} key="quote-82">{"\"Pelatih tidak bisa kasih program tertulis ke atlet tunanetra karena alat untuk itu belum ada.\""}</p>
      <p className={articleParagraphClass} key="paragraph-83">
        {"Ucap Dodi, Sekretaris Umum NPCI Jawa Barat."}
      </p>
      <p className={articleParagraphClass} key="paragraph-84">
        {"Bambang Basuki, pelatih bowling tunanetra yang juga seorang tunanetra, menggambarkan metode yang ia gunakan."}
      </p>
      <p className={articleParagraphClass} key="quote-85">{"\"Karena kami tidak banyak mengandalkan penglihatan, jadi lebih banyak mengandalkan pendengaran dan deskripsi verbal,”"}</p>
      <p className={articleParagraphClass} key="paragraph-86">
        {"Ujar Bambang terkait tidak ada pelatihan khusus yang ia terima untuk melatih atlet tunanetra."}
      </p>
      <p className={articleParagraphClass} key="quote-87">{"\"Secara khusus belum ada. Saya lebih banyak belajar sendiri dari pengalaman sebagai atlet,”"}</p>
      <p className={articleParagraphClass} key="paragraph-88">
        {"jelasnya."}
      </p>
      <EditorialNote key="note-89" text={"[SEJARAH PISAH KONI DENGAN NPCI]"} />
      <p className={articleParagraphClass} key="paragraph-90">
        {"Di atas kertas, olahraga disabilitas dan olahraga umum kini berjalan dalam dua jalur organisasi yang berbeda. KONI mengelola pembinaan olahraga prestasi umum, sementara olahraga disabilitas berada di bawah National Paralympic Committee Indonesia (NPCI). Pemisahan tersebut awalnya dilakukan untuk memberikan ruang yang lebih fokus bagi pembinaan atlet disabilitas, yang memiliki kebutuhan, klasifikasi, serta sistem kompetisi berbeda dengan atlet non-disabilitas."}
      </p>
      <p className={articleParagraphClass} key="paragraph-91">
        {"Sebelum bernama NPCI, organisasi olahraga disabilitas dikenal sebagai Badan Pembina Olahraga Cacat (BPOC). Pada 2010, organisasi tersebut bertransformasi menjadi NPCI dan tidak lagi berada di bawah struktur KONI. Perubahan ini dilakukan agar olahraga disabilitas memiliki kemandirian dalam pembinaan, pengelolaan kompetisi, serta representasi pada ajang paralimpik nasional maupun internasional."}
      </p>
      <p className={articleParagraphClass} key="paragraph-92">
        {"Mulyana, Wakil Ketua KONI Kota Bandung, mengakui perbedaan sejarah tersebut. Menurutnya,"}
      </p>
      <p className={articleParagraphClass} key="paragraph-93">
        {"olahraga disabilitas dan olahraga umum pada awalnya berada dalam satu payung organisasi yang sama."}
      </p>
      <p className={articleParagraphClass} key="quote-94">{"\"Dulu memang kita satu organisasi. NPCI itu dulu badan fungsional di bawah KONI. Dari sisi pendanaan berada di bawah KONI. Jadi dulu dana dari Dispora masuk ke KONI. Kemudian KONI yang menyalurkan ke badan-badan fungsional tadi,\""}</p>
      <p className={articleParagraphClass} key="paragraph-95">
        {"Jelasnya terkait pisahnya kedua lembaga."}
      </p>
      <p className={articleParagraphClass} key="paragraph-96">
        {"Struktur organisasi memang dipisahkan, tetapi aset dan sumber daya yang selama bertahun-tahun terbentuk tidak otomatis ikut terbagi. Fasilitas olahraga, jaringan kelembagaan, ketersediaan pelatih bersertifikasi, hingga ekosistem pembinaan yang lebih matang sebagian besar telah lebih dulu mengakar dalam sistem olahraga umum."}
      </p>
      <p className={articleParagraphClass} key="paragraph-97">
        {"Djumono, yang sudah bergabung dengan organisasi ini sejak 1999 ketika kakinya harus diamputasi, menyaksikan perjalanan ini dari dekat. \"Saya berharap dampaknya tidak hanya pada olahraga, tetapi para pengambil kebijakan juga melihat bahwa penyandang disabilitas punya potensi, jumlahnya banyak, dan masih ada 22 hak lainnya yang harus dipenuhi.\""}
      </p>
      <KoniNpciComparisonInfographic />
      <p className={articleParagraphClass} key="paragraph-99">
        {"Komisioner Komisi Nasional Disabilitas (KND), Jonna Damanik, menjelaskan bahwa penyelenggaraan ajang olahraga disabilitas membutuhkan kesiapan yang jauh lebih kompleks dibanding olahraga umum."}
      </p>
      <p className={articleParagraphClass} key="quote-100">{"\"Menyelenggarakan event olahraga disabilitas tidak sesederhana menyelenggarakan olahraga umum. Venue harus aksesibel. Transportasi harus aksesibel. Kendaraan yang digunakan harus mampu mengakomodasi pengguna kursi roda. Ada kebutuhan hydraulic lift dan berbagai fasilitas lain yang memang menjadi standar. Karena itu, tidak semua daerah siap menjadi tuan rumah event olahraga disabilitas,\""}</p>
      <p className={articleParagraphClass} key="paragraph-101">
        {"Jelasnya mengenai realita penyelenggaraan."}
      </p>
      <p className={articleParagraphClass} key="paragraph-102">
        {"Tri selaku pelatih voli duduk juga menyampaikan bahwa pemenuhan aksesibilitas dalam olahraga disabilitas juga harus berjalan beriringan dengan keterlibatan langsung penyandang disabilitas yang paling memahami apa kebutuhannya."}
      </p>
      <p className={articleParagraphClass} key="paragraph-103">
        {"“Dan mewakili NPCI, ini organisasi disabilitas. Semua yang disabilitas harus muncul. Jangan kita yang istilahnya non-disabilitas ya. Bagi saya kebalik. Yang harus muncul itu adalah teman-teman disabilitas. Kita orang normalnya cuma sebagai penopang, pendamping. Jangan sampai melebihi, kalau bagi saya ya.”"}
      </p>
      <p className={articleParagraphClass} key="paragraph-104">
        {"Pernyataan itu tercermin dalam sejumlah peristiwa beberapa tahun terakhir. Indramayu yang semula ditunjuk sebagai tuan rumah Pekan Paralimpik Daerah (Peparda) 2026 akhirnya mengundurkan diri. Sebelumnya, Aceh dan Sumatera Utara juga batal menjadi tuan rumah Peparnas 2023 sehingga penyelenggaraan dipindahkan ke Solo yang dinilai lebih siap dari sisi infrastruktur dan aksesibilitas."}
      </p>
      <p className={articleParagraphClass} key="paragraph-105">
        {"Solo merupakan pusat National Pralympic Committee Indonesia (NPCI) yang berkembang sebagai pusat pembinaan atlet, penyelenggaraan kejuaraan nasional maupun internasional,"}
      </p>
      <p className={articleParagraphClass} key="paragraph-106">
        {"hingga laboratorium penerapan kota inklusif bagi penyandang disabilitas. Kota ini menjadi tuan rumah dari ASEAN Para Games 2022, Peparnas XVII 2024, hingga dipercaya menjadi kandidat lokasi penyelenggaraan agenda NPC ASEAN pada 2026. Rangkaian penyelenggaraan tersebut memperlihatkan kapasitas Solo dalam mengelola kompetisi olahraga disabilitas berskala besar."}
      </p>
      <p className={articleParagraphClass} key="paragraph-107">
        {"Wali Kota Solo, Respati Ardi dalam wawancaranya dengan Solopos (08/04/2026) menegaskan pemerintah kota terus berupaya memperkuat identitas Solo sebagai kota yang ramah terhadap penyandang disabilitas dan harus beriringan dengan pembangunan budaya masyarakat yang inklusif sehingga atlet maupun masyarakat penyandang disabilitas dapat beraktivitas secara mandiri."}
      </p>
      <p className={articleParagraphClass} key="paragraph-108">
        {"Bahkan paralympic training center juga dibangun di Solo, peresmian 2025 pertama Se-Asia Tenggara, Paralympic Training Center dibangun di Karanganyar SOLO, Paralympic Training Center, menjadi pemusatan atlet paralympic pertama yang dibangun di Asia Tenggara."}
      </p>
      <p className={articleParagraphClass} key="paragraph-109">
        {"Pembangunan di lahan seluas 80.262 meter persegi itu dilakukan oleh Kementerian Pemuda dan Olahraga serta Kementerian Pekerjaan Umum dan Perumahan Rakyat (PUPR) dengan biaya Rp 409,2 miliar."}
      </p>
      <p className={articleParagraphClass} key="paragraph-110">
        {"Jonna Damanik selaku Komisioner Nasional Disabilitas memberikan pandangannya terkait aksesibilitas bagi penyandang disabilitas di Bandung,"}
      </p>
      <p className={articleParagraphClass} key="paragraph-111">
        {"“Jadi untuk aksesibilitas itu jauh, artinya masih belum 100 persen terpikirkan. Masih banyak yang lewat. Contoh di jalan, karena ada jalan khusus, eh malah dipakai tempat jualan, eh dipakai parkir. Nah, itu pemahaman dari orang Indonesia sendiri kayak jadinya juga nanti kan kayak bisa di Arcamanik ya kan, saat ini belum siap.”"}
      </p>
      <p className={articleParagraphClass} key="paragraph-112">
        {"Contoh lainnya karena banyak event internasional disabilitas diselenggarakan di Solo. “Karena di sana bukan hanya infrastrukturnya yang baik, tetapi masyarakatnya juga sudah memiliki sensitivitas yang tinggi. Mulai dari tukang parkir, pengemudi ojek, hingga pedagang warung,"}
      </p>
      <p className={articleParagraphClass} key="paragraph-113">
        {"semuanya sangat komunikatif dan siap melayani penyandang disabilitas dengan baik. Inilah yang saya maksud dengan paradigma. Kita tidak hanya berbicara soal infrastruktur, tetapi juga budaya dan sikap masyarakat,” Lanjut Tri."}
      </p>
      <p className={articleParagraphClass} key="paragraph-114">
        {"Perkembangan infrastruktur olahraga disabilitas di Indonesia dinilai belum sepenuhnya memenuhi standar negara-negara maju seperti Jepang yang masih menjadi acuan dalam penyediaan fasilitas olahraga sekaligus aksesibilitas bagi penyandang disabilitas."}
      </p>
      <p className={articleParagraphClass} key="quote-115">{"“Asian Para Games. Pokoknya yang nomor dunia ya itu di Jepang, karena Jepang sudah pasti ditanya oke ya. Baik di pertandingan, baik di sarananya. Contoh kecil toilet ya kan, tidak semua toilet aksesibilitas. Itu buat kenyamanan. Sampai hotel-hotel. Karena dari segi hak mereka sangat sama. Cuma ya kadang kita sendiri masih kurang. Tidak semua ada, tapi tidak semua ya. Itu harusnya ada jalan khususnya,”"}</p>
      <p className={articleParagraphClass} key="paragraph-116">
        {"Ungkap Tri perihal Jepang yang masih menjadi standar yang baik dari segi fasilitas."}
      </p>
      <p className={articleParagraphClass} key="paragraph-117">
        {"Perbandingan dengan Jepang juga memperlihatkan bahwa Indonesia masih memiliki jarak yang panjang untuk mengejar standar ideal. Tri mencontohkan bahwa di beberapa negara, seperti Jerman, Brasil, Jepang, dan Cina, fasilitas latihan khusus untuk voli duduk sudah tersedia."}
      </p>
      <p className={articleParagraphClass} key="paragraph-118">
        {"Sementara di Indonesia, atlet masih sering harus menyesuaikan diri dengan fasilitas yang belum sepenuhnya dirancang untuk kebutuhan mereka."}
      </p>
      <p className={articleParagraphClass} key="quote-119">{"“Kalau di kita iya (belum ada tempat latihan khusus). Tapi kalau di luar negeri, contoh di Jerman, semua ada. Jadi memang lapangan khusus. Jadi memang latihan di sini terus. Di Brazil ada, Jepang sendiri ada, Cina ada. Kita aja yang belum. Makanya yang saya bilang tadi bahwa kita belum, apa ya, perhatian untuk awareness gitu kan belum. Sekarang gini, kalau kita melihat ya kesetaraan, mereka ada voli duduk ya harus ada dong lapang khusus voli duduk. Lapang khusus indoor voli orang non disabilitas juga ada, kenapa ini nggak ada?”"}</p>
      <p className={articleParagraphClass} key="paragraph-120">
        {"Lanjutnya. Padahal, voli duduk memiliki karakter berbeda dari voli berdiri. Ukuran lapangan, tinggi net, cara bergerak, dan posisi tubuh atlet berbeda. Atlet tidak hanya membutuhkan bola dan net, tetapi juga permukaan lapangan, garis, ruang gerak, dan fasilitas pendukung yang sesuai dengan kebutuhan cabang olahraga tersebut."}
      </p>
      <ArticleComparisonTable rows={accessibilityComparisonRows} />
    </>
  );
}
