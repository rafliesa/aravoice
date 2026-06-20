import EditorialNote from "@/modules/medpro-report/component/EditorialNote";
import LawReferenceLink, {
  lawReferenceUrls,
} from "@/modules/medpro-report/component/LawReferenceLink";
import MediaPlaceholder from "@/modules/medpro-report/component/MediaPlaceholder";
import SourceLink from "@/modules/medpro-report/component/SourceLink";
import { articleHeadingClass, articleParagraphClass } from "@/modules/medpro-report/component/articleContentClasses";

export default function SubtitleSevenContent() {
  return (
    <>
      <p className={articleParagraphClass} key="paragraph-0">
        {"Di atas kertas Indonesia memiliki regulasi yang tertuju kepada hak-hak atlet disabilitas."}
      </p>
      <p className={articleParagraphClass} key="paragraph-1">
        Komisioner Komisi Nasional Disabilitas (KND), Jonna Damanik,
        menjelaskan bahwa perubahan besar dalam kebijakan disabilitas di
        Indonesia berawal dari perubahan cara pandang negara terhadap penyandang
        disabilitas. Sebelum Indonesia meratifikasi{" "}
        <LawReferenceLink href={lawReferenceUrls.crpd}>
          Convention on the Rights of Persons with Disabilities (CRPD)
        </LawReferenceLink>{" "}
        pada 2011, penyandang disabilitas cenderung diposisikan sebagai objek
        bantuan sosial yang harus dikasihani. Setelah ratifikasi tersebut,
        paradigma itu berubah. Penyandang disabilitas mulai dipandang sebagai
        subjek hukum yang memiliki hak setara dengan warga negara lainnya.
      </p>
      <EditorialNote key="note-2" text={"[INFOGRAFIS PERGANTIAN MEDICAL MODEL - SOCIAL MODEL - HUMAN RIGHTS MODEL]"} />
      <p className={articleParagraphClass} key="paragraph-3">
        {"KND juga membuka kanal pengaduan Disabilitas Tanah Air 143 yang menerima laporan dari berbagai sektor, mulai dari pendidikan, ketenagakerjaan, layanan publik, hingga ruang digital."}
      </p>
      <p className={articleParagraphClass} key="quote-4">{"“Kalau dari sisi regulasi sebenarnya sudah ada. Undang-undangnya juga sudah ada. Tetapi implementasinya secara keseluruhan masih belum memenuhi kebutuhan,\""}</p>
      <p className={articleParagraphClass} key="paragraph-5">
        {"Ujar Jona."}
      </p>
      <p className={articleParagraphClass} key="paragraph-6">
        {"Dodi selaku Wakil Sekretaris Umum NPCI justru mengakui adanya dilema hukum di NPCI “Undang-undangnya ada, pergubnya (Peraturan Gubernur) ada, permennya (Peraturan Menteri)"}
      </p>
      <p className={articleParagraphClass} key="paragraph-7">
        {"ada. Tapi kenyataannya masih banyak yang tidak menjalankan,”"}
      </p>
      <EditorialNote key="note-8" text={"[INFOGRAFIS UU, PERGUB, PERMEN]"} />
      <p className={articleParagraphClass} key="paragraph-9">
        {"Di sisi lain, banyak atlet masih berhadapan dengan persoalan yang seharusnya telah dilindungi oleh regulasi yang ada. Dodi, Wakil Sekretaris Umum NPCI Jawa Barat mengungkap bahwa NPCI merupakan rumah pembinaan atlet disabilitas belum memiliki perangkat hukum untuk membela hak-hak atlet."}
      </p>
      <p className={articleParagraphClass} key="paragraph-10">
        {"“Otomatis karena kita juga gak ada bidang hukum kan. Dan advokasi itu mereka juga dapat pembinaan dari provinsi. Ada bidang satu yang membidanginya, melakukan kunjungan kerja ke tiap daerah. Di bidang hukum, yang dibahas itu masalah klasifikasi kelas-kelas ketunaan. S1, S2,"}
      </p>
      <p className={articleParagraphClass} key="paragraph-11">
        {"S3, tunadaksa tangan, tunadaksa kaki. Itu bidang hukum yang bisa mengadvokasi,” jelasnya."}
      </p>
      <p className={articleParagraphClass} key="paragraph-12">
        {"Ketika NPCI menyebut keberadaan \"bidang hukum\", yang dimaksud bukanlah lembaga yang menangani persoalan hak, kesejahteraan, atau perlindungan atlet. Bidang tersebut lebih berfungsi untuk mengurus klasifikasi ketunaan dalam sistem pertandingan olahraga disabilitas. Dengan kata lain, mekanisme yang menentukan apakah seorang atlet masuk kategori S1 atau S2 memang tersedia."}
      </p>
      <EditorialNote key="note-13" text={"[INFOGRAFIS Hak dalam Regulasi — Realita Atlet]"} />
      <p className={articleParagraphClass} key="quote-14">{"“Sementara ini belum ada ya masalah itu. Belum ada masalah itu. Karena pembinaan kesejahteraan itu langsung ada di pengcab-pengcab. Tetapi seandainya mereka membutuhkan itu,"}</p>
      <p className={articleParagraphClass} key="paragraph-15">
        {"tim Jawa Barat siap,” ungkap Dodi saat menjawab laporan dari atlet terkait pemberdayaan atlet disabilitas."}
      </p>
      <p className={articleParagraphClass} key="paragraph-16">
        {"Kondisi ini berbeda dengan mekanisme yang berlaku di Komite Olahraga Nasional Indonesia"}
      </p>
      <EditorialNote key="note-17" text={"(KONI) Kota Bandung. Wakil Ketua II KONI Kota Bandung, Mulyana, menjelaskan bahwa terdapat alur penanganan yang lebih jelas ketika atlet menghadapi permasalahan."} />
      <p className={articleParagraphClass} key="quote-18">{"“Yang pertama bertanggung jawab adalah cabang olahraganya. Kalau misalnya cabang olahraga tidak bisa mengatasi, biasanya datang ke KONI. Contohnya ada kasus kecelakaan, cabang olahraga tidak bisa membackup, ya datang ke KONI. Kalau KONI bisa membackup, ya kita bantu,”"}</p>
      <p className={articleParagraphClass} key="paragraph-19">
        {"Ungkap Mulyana di KONI GOR Bandung."}
      </p>
      <p className={articleParagraphClass} key="paragraph-20">
        {"Sedangkan menurut Acep sebagai Sub Olahraga Pendidikan Dispora Bandung, menunjukan posisinya sebagai mitra dengan NPCI dan KONI, “NPCI adalah mitra kami. Sama seperti KONI."}
      </p>
      <p className={articleParagraphClass} key="paragraph-21">
        {"Kami tidak mengurus teknis kesejahteraan atlet secara langsung. Kami memberikan dana hibah,"}
      </p>
      <p className={articleParagraphClass} key="paragraph-22">
        {"lalu organisasi yang mengelola dan bertanggung jawab terhadap penggunaannya. Peran kami lebih kepada pendampingan, monitoring, dan evaluasi. Payung Hukum untuk Atlet dan Organisasi Olahraga,” Pernyataan tersebut menunjukkan adanya struktur eskalasi yang dapat digunakan atlet ketika menghadapi masalah. Cabang olahraga menjadi pintu pertama penyelesaian, sementara KONI berfungsi sebagai lapisan dukungan berikutnya apabila persoalan tidak dapat ditangani di tingkat organisasi."}
      </p>
      <MediaPlaceholder assetNumber={1} key="media-23" text={"Dispora foto dan VN"} />
      <p className={articleParagraphClass} key="paragraph-23">
        {"Linda Savitri selaku pelatih bowling disabilitas Jawa Barat, ia tidak memiliki gelar konseling namun ia mengakui bahwa masalah yang muncul di dalam tim umumnya diselesaikan melalui komunikasi internal. Ilmu itu ia bawa ke lapangan disabilitas Atlet didorong untuk berbicara langsung satu sama lain, sementara pelatih berperan sebagai mediator agar persoalan tidak berkembang menjadi konflik yang lebih besar."}
      </p>
      <MediaPlaceholder assetNumber={2} key="media-24" text={"VN statement Linda Savitri"} />
      <p className={articleParagraphClass} key="paragraph-25">
        {"pengalaman Peparnas saya ya. Kalau misalnya ada masalah, ngobrol di dalam. Jangan keluar dari tim. Jadi diselesaikan,”"}
      </p>
      <p className={articleParagraphClass} key="paragraph-26">
        {"Ia paham keterbatasan itu. Ia pernah mengikuti TOT dan seminar psikologi melalui jalur Pekan Olahraga Nasional (PON) sebagai pelatih umum. “Iya, bagusnya ada psikolog. Jadi misalnya NPC Kota Bandung atau Jabar, disebar. Kalau kita yang non-disabilitas gitu, disebar. Saya juga punya kan. Jadi atlet memang bagusnya begitu. Psikolog kan ada ilmunya. Bagusnya ada. Iya,"}
      </p>
      <p className={articleParagraphClass} key="paragraph-27">
        {"saya dari kemarin juga di NPC nggak ada psikolog. Enaknya begitu, jadi lebih enak mereka satu-satu.” Ucap Linda."}
      </p>
      <p className={articleParagraphClass} key="paragraph-28">
        {"Pola yang memperlihatkan bagaimana masalah masih bertumpu pada hubungan personal, bukan mekanisme advokasi untuk memastikan persoalan terdokumentasi dan dapat dievaluasi yang mengakibatkan persoalan atlet berhenti sebagai keluhan yang diselesaikan secara informal."}
      </p>
      <p className={articleParagraphClass} key="paragraph-29">
        {"Sistem advokasi memungkinkan atlet untuk melaporkan masalah dengan mendapatkan pendampingan profesional dan memperoleh penyelesaian terdokumentasi. Sistem ini sudah berjalan di olahraga non-disabilitas, seperti KONI yang memiliki bidang hukum."}
      </p>
      <MediaPlaceholder assetNumber={3} key="media-30" text={"VN dan foto penjelasan alur advokasi KONI Bandung"} />
      <p className={articleParagraphClass} key="paragraph-31">
        {"Pernah ada kasus hukum juga, kasus hukum juga kita berikan advokasi karena kita punya struktur dan ada tim berbentuk bidang,”]MULYANA KONI BANDUNG Pendampingan juga diperlukan untuk mental bertanding, seperti Yulia Sahaja Dewi yang merupakan Psikolog klinis yang mendampingi Tim Indonesia di ASEAN Para Games 2022,"}
      </p>
      <p className={articleParagraphClass} key="paragraph-32">
        {"menjelaskan bagaimana ketiadaan psikolog dalam proses pembinaan jangka panjang menciptakan kerentanan yang tidak terlihat “Kendala utamanya adalah psikolog olahraga masih sering dianggap sebagai pelengkap. Saat ASEAN Para Games 2022, kami tidak mendampingi atlet sejak masa latihan atau training center."}
      </p>
      <p className={articleParagraphClass} key="paragraph-33">
        {"Kami baru dilibatkan sekitar tiga atau empat hari sebelum pertandingan. Dalam waktu yang sangat singkat, kami harus membangun kedekatan dengan atlet dan membantu mereka mencapai performa terbaik.” Yulia Sahaja Dewi Permatasari, Psikolog Klinis & Pendamping Atlet Paralimpik Sementara di sisi lain, Eva Arianti, atlet panahan, mengalami gejala kecemasan somatik menjelang Peparnas Papua yang tidak pernah ia bawa ke siapa pun, \"Tiba-tiba sakit, yang mengalami sakit perut lah, mendadak, tiap mau tanding itu pasti sakit perut.\" Tidak ada psikolog."}
      </p>
      <p className={articleParagraphClass} key="paragraph-34">
        {"Ia meregulasi dirinya sendiri dengan tarik napas dan berdoa."}
      </p>
      <p className={articleParagraphClass} key="paragraph-35">
        {"Dandan Supardan, atlet panahan yang kini ASN Kementerian Sosial, mengungkap bahwa tekanan terbesar selama kompetisi tidak datang dari lawan di lapangan, melainkan dari beban yang ia bawa dari rumah, “Biasanya masalah internal yang terbawa ke dalam organisasi."}
      </p>
      <p className={articleParagraphClass} key="paragraph-36">
        {"Biasanya ya kayak ada masalah dengan keluarga di rumah, dengan istri atau apa. Itu biasanya seperti itu. Atau yang paling sering sih biasanya masalah ekonomi,” jelas Dandan Supardan,"}
      </p>
      <p className={articleParagraphClass} key="paragraph-37">
        {"Atlet Panahan & ASN Kementerian Sosial."}
      </p>
      <p className={articleParagraphClass} key="paragraph-38">
        {"Pak Iman dari bidang pembinaan prestasi NPCI Jawa Barat mengungkap dimensi yang bahkan lebih mendasar terkait kebutuhan akan pendamping yang merupakan profesi tersendiri, berbeda dari pelatih,"}
      </p>
      <p className={articleParagraphClass} key="quote-39">{"“Seharusnya dana atlet disabilitas agak lebih besar daripada dana ke atlet olahraga lain. Kenapa?"}</p>
      <p className={articleParagraphClass} key="paragraph-40">
        {"Satu atlet butuh pelatih, butuh pendamping. Pendamping inilah yang harus memahami atlet,"}
      </p>
      <p className={articleParagraphClass} key="paragraph-41">
        {"entah itu psikologis dan kebutuhannya. Sehingga dana kita selain untuk menggaji honor pelatih,"}
      </p>
      <p className={articleParagraphClass} key="paragraph-42">
        {"ya juga untuk honor pendamping. Satu atlet satu pendamping,” ucap Iman, Bidang Pembinaan Prestasi NPCI Jawa Barat Djumono, Sekretaris Umum NPCI Kota Bandung, memberikan jawaban yang paling jujur tentang kondisi ini, “Kita mesti akui bahwa NPCI belum bisa sepenuhnya menjadi sandaran kesejahteraan atlet. Organisasi ini bergantung pada dana hibah pemerintah, dan ketika dana itu dipotong, seluruh ekosistem pembinaan ikut terdampak,” jelasnya."}
      </p>
      <p className={articleParagraphClass} key="paragraph-43">
        {"Dispora sendiri dalam pernyataan resminya memposisikan diri sebagai pihak yang memberikan dana dan menyerahkan tanggung jawab pengelolaan kepada organisasi penerima “Kami memberikan dana hibah, lalu organisasi yang mengelola dan bertanggung jawab terhadap penggunaannya. Peran kami lebih kepada pendampingan, monitoring, dan evaluasi.” Ucap Acep sebagai Sub Olahraga Pendidikan kepada tim Paravoice.id di Dispora Kota Bandung."}
      </p>
      <p className={articleParagraphClass} key="paragraph-44">
        {"Pembagian peran ini menunjukkan bahwa tanggung jawab kesejahteraan atlet pada praktiknya berada di tingkat organisasi olahraga. Namun, di lapangan, tanggung jawab tersebut tidak selalu berbanding lurus dengan ketersediaan perlindungan yang diterima atlet. Kesenjangan itu tampak paling nyata dalam aspek kesehatan, terutama ketika atlet mengalami cedera di luar masa kompetisi. Pada situasi seperti ini, perlindungan yang seharusnya menjadi jaring pengaman justru tidak selalu tersedia."}
      </p>
      <p className={articleParagraphClass} key="paragraph-45">
        {"Muslim, atlet catur tunanetra menjelaskan mekanisme BPJS atlet disabilitas NPCI Kota Bandung hanya aktif menjelang kompetisi. Di luar periode itu, tidak ada perlindungan kesehatan yang aktif."}
      </p>
      <p className={articleParagraphClass} key="quote-46">{"“BPJS itu tidak selalu aktif. Jadi nanti kalau misalnya pas kejadian, baru dibikin sama organisasi,"}</p>
      <p className={articleParagraphClass} key="paragraph-47">
        {"itu baru aktif. Kalau sebelum itu enggak aktif. Harusnya sudah, harusnya sudah. Sudah pernah ngajukan. Cuma berbagai alasan, harus bayar. Jadi memang masalahnya adalah tidak ada pemasukan rutin,” jelasnya."}
      </p>
      <h2 className={articleHeadingClass} key="heading-48">
        {"REGENERASI MANDEK"}
      </h2>
      <p className={articleParagraphClass} key="paragraph-49">
        {"Iman menyebut angka yang seharusnya membuat semua pemangku kepentingan bangkit dari kursi mereka: 57 persen dari 347 atlet kontingen Peparnas Jawa Barat terakhir berusia di atas 40 tahun."}
      </p>
      <p className={articleParagraphClass} key="quote-50">{"“Saya selalu bermain data. 347 atlet. Peparnas Jawa Barat itu 57% di atas 40 tahun. Jadi ini pekerjaan kami untuk menghadapi Peparnas 2028 — harus mempersiapkan apakah menggunakan atlet yang dulu atau regenerasi atlet. Kami kekurangan. Kami kurang bahan."}</p>
      <p className={articleParagraphClass} key="paragraph-51">
        {"Sehingga atlet-atlet kami di atas 40 tahun, 50 tahun. Yang namanya olahragawan itu kan adu raga. Kalau raga sudah tua, ya nggak akan mampu sebetulnya. Tapi karena susah mencarinya,"}
      </p>
      <p className={articleParagraphClass} key="paragraph-52">
        {"yaudah yang ada dulu.”Ucap Iman, Bidang Pembinaan Prestasi NPCI Jawa Barat Proses pencarian atlet sering kali tidak terhambat oleh kurangnya potensi, melainkan oleh ketidaknampakan. Banyak penyandang disabilitas hidup dalam ruang yang tertutup, dibatasi oleh keluarga dan lingkungan yang masih memelihara stigma. Akibatnya, mereka tidak hanya kehilangan akses terhadap olahraga, tetapi juga kesempatan untuk dikenali dan berkembang sebagai atlet."}
      </p>
      <p className={articleParagraphClass} key="paragraph-53">
        {"Dodi menjelaskan terkait gap yang cukup besar ini, “Seakan-akan anak disabilitas itu seperti sesuatu yang memalukan. Itu oleh masyarakat, oleh keluarga, sehingga disembunyikan. Padahal kami butuh itu. Kalau kita lihat di berbagai daerah, di pedesaan-pedesaan, mereka terkendala biasanya memang kalau yang disabel itu bersembunyi. Satu mungkin faktor dari malunya keluarga atau fasilitas.” Dodi, Wakil Sekretariat Umum NPCI Jawa Barat."}
      </p>
      <p className={articleParagraphClass} key="paragraph-54">
        {"Aditya Nandang Saputra, anak dari seorang atlet disabilitas, mengisahkan bagaimana stigma terhadap disabilitas masih terjadi di tingkat keluarga dan lingkungan terdekat."}
      </p>
      <p className={articleParagraphClass} key="quote-55">{"“Yang awalnya anak yang ditanya cuma perengah-perengih, senyam-senyum. Ya tahu sendiri lah ketika anak disabilitas tidak masuk SD biasa, dia masuknya di SLB. Itu yang jadi permasalahan."}</p>
      <p className={articleParagraphClass} key="paragraph-56">
        {"Akibat orang tuanya ketakutan. Anaknya ini nanti di SD dibully. Padahal ya itu peluangnya sebenarnya di situ. Sekarang nih, wah siapa yang enggak tahu Ridho? Ridho Wijana. Coba lihat TikToknya. Se-PD itu nanti ya. Kemarin di Jakarta emas. Rizki Mulyana, CV juga. Sekarang atlet pelatnas.”Ucap Aditya Nandang Saputra, Bidang Pemberdayaan Prestasi Atlet NPCI Kabupaten Bandung."}
      </p>
      <p className={articleParagraphClass} key="paragraph-57">
        {"Kono Saipudin sebagai atlet angkat beban disabilitas mengingat kembali bahwa ia pernah mendapat peringatan dari orang tuanya, “kamu kan tunadaksa, jalan saja susah, nanti kalau cedera bagaimana.” Namun ia tetap melanjutkan olahraga hingga berhasil tampil di kompetisi nasional. Pengalaman ini menunjukkan bahwa keputusan penyandang disabilitas untuk berolahraga sering dipengaruhi oleh dukungan atau kekhawatiran dari lingkungan terdekat."}
      </p>
      <p className={articleParagraphClass} key="paragraph-58">
        {"Acep Wahyu Ramdan selaku Sub Olahraga Pendidikan Dispora Kota Bandung menjelaskan tantangannya terkait sosialisasi disabilitas."}
      </p>
      <p className={articleParagraphClass} key="quote-59">{"“Masih ada orang tua yang menyembunyikan anak disabilitas karena merasa malu."}</p>
      <p className={articleParagraphClass} key="paragraph-60">
        {"Padahal sekarang tidak boleh seperti itu.Justru organisasi seperti NPCI harus aktif melakukan sosialisasi agar anak-anak disabilitas memiliki kesempatan berkembang melalui olahraga.”"}
      </p>
      <p className={articleParagraphClass} key="paragraph-61">
        {"Acep juga mengatakan Dispora tidak terlibat langsung dalam pelaksanaan sosialisasi teknis kepada penyandang disabilitas. Tugas tersebut diserahkan kepada NPCI yang dinilai lebih memahami kebutuhan atlet dan komunitas disabilitas. Dalam posisi tersebut, Dispora berperan sebagai mitra yang mendukung pembinaan melalui penyediaan anggaran dan fasilitas."}
      </p>
      <p className={articleParagraphClass} key="quote-62">{"“Masih ada orang tua yang menyembunyikan anak disabilitas karena merasa malu. Padahal sekarang tidak boleh seperti itu. Justru organisasi seperti NPCI harus aktif melakukan sosialisasi agar anak-anak disabilitas memiliki kesempatan berkembang melalui olahraga,”"}</p>
      <p className={articleParagraphClass} key="paragraph-63">
        {"Lanjut Acep Melihat persoalan tersebut berakar dari stigma yang masih hidup di lingkungan, akibatnya bannyak anak disabilitas yang tidak pernah mengenal dunia olahraga prestasi bukan karena potensi, melainkan karena tidak pernah mendapatkan kesempatan untuk mengaksesnya."}
      </p>
      <p className={articleParagraphClass} key="paragraph-64">
        {"Di sisi lain, NPCI Jawa Barat mengakui masih bergantung pada data Dinas Sosial untuk menjangkau calon atlet disabilitas. Hal itu disampaikan oleh Iman dari Bidang Pembinaan Prestasi NPCI Jawa Barat “Kami harus kerja sama dengan Dinas Sosial karena mereka punya data yang lebih lengkap jumlah disabilitas di setiap daerah. Sehingga kami minta bantuan teman-teman untuk menggemburkan bahwa ada NPCI yang mengatur olahraga disabilitas."}
      </p>
      <p className={articleParagraphClass} key="paragraph-65">
        {"Jangan malu kalau punya anak yang punya keterbatasan.” Jelas Iman, Bidang Pembinaan Prestasi NPCI Jawa Barat"}
      </p>
      <h2 className={articleHeadingClass} key="heading-66">
        {"PENSIUN TANPA PAYUNG"}
      </h2>
      <p className={articleParagraphClass} key="paragraph-67">
        {"Aden Ahmad Muhammad Rahman, aktivis hak disabilitas sekaligus atlet tenis yang kembali bertanding pada usia 59 tahun, menilai belum ada sistem yang secara khusus menjamin keberlangsungan hidup atlet disabilitas setelah mereka tidak lagi berkompetisi."}
      </p>
      <p className={articleParagraphClass} key="quote-68">{"“Nah, itu yang belum ada. Saat masih menjadi atlet biasanya ada uang pembinaan bulanan."}</p>
      <p className={articleParagraphClass} key="paragraph-69">
        {"Misalnya atlet yang sedang dipersiapkan untuk Peparda akan mendapat bantuan selama masa persiapan. Tetapi setelah pensiun, belum ada regulasi yang menjamin kehidupan mereka. Belum ada santunan pensiun atlet.” Ucap Aden."}
      </p>
      <p className={articleParagraphClass} key="paragraph-70">
        {"Acep saat di Kantor Dispora Bandung juga menjelaskan terkait program setelah atlet pensiun yang belum terlaksana,"}
      </p>
      <p className={articleParagraphClass} key="paragraph-71">
        “Kalau program khusus belum ada yang benar-benar berjalan. Namun di{" "}
        <LawReferenceLink href={lawReferenceUrls.perdaBandungDisability}>
          Perda (Peraturan Daerah)
        </LawReferenceLink>{" "}
        sudah tercantum bahwa atlet berprestasi bisa mendapatkan penghargaan.
        Penghargaan itu bisa berupa:Uang pembinaan, Kesempatan kerja dan Bentuk
        penghargaan lainnya. Tetapi untuk penyaluran pekerjaan harus melibatkan
        instansi lain seperti Disnaker, BKD, atau lembaga terkait lainnya. Jadi
        prosesnya cukup panjang.”
      </p>
      <p className={articleParagraphClass} key="paragraph-72">
        {"Pernyataan yang menunjukkan bahwa pembinaan atlet disabilitas di Indonesia masih berorientasi pada pencapaian prestasi, bukan pada keberlanjutan kesejahteraan atlet sebagai individu."}
      </p>
      <p className={articleParagraphClass} key="paragraph-73">
        {"Menurut Aden, peluang memperoleh pekerjaan melalui jalur prestasi memang tersedia bagi sebagian atlet disabilitas. Ia mencontohkan sejumlah atlet peraih medali pada Peparnas 2018 yang kemudian diangkat menjadi Aparatur Sipil Negara (ASN), salah satunya Dandan Supardan."}
      </p>
      <p className={articleParagraphClass} key="paragraph-74">
        {"Namun kesempatan tersebut umumnya hanya dapat diakses oleh atlet yang berhasil mencapai prestasi pada level nasional. Bagi atlet yang tidak mencapai jenjang tersebut, tidak terdapat skema khusus yang menjamin keberlanjutan penghasilan setelah karier olahraga berakhir."}
      </p>
      <p className={articleParagraphClass} key="paragraph-75">
        {"“Saya sempat bilang, saya mau mundur dari ASN, saya ingin menjadi atlet ini. Tapi setelah dipikir-pikir dengan kondisi, di organisasinya sendiri tidak akan bisa meng-cover itu untuk kehidupan saya. Kita punya anak, harus sekolah.”Ucap Dandan Supardan, Atlet Panahan & ASN Kementerian Sosial"}
      </p>
      <h2 className={articleHeadingClass} key="heading-76">
        {"DIBAWAH INI ADA PERDA TENTANG ATLET DISABILITAS"}
      </h2>
      <SourceLink href={"https://jdih.bandung.go.id/home/produk-hukum/peraturan-perundang-undangan-daerah/22115#"} key="url-77" />
      <p className={articleParagraphClass} key="paragraph-78">
        {"INI SEMUA PDFNYA SANGAT RELATED JADIKAN POP UP dan DAPAT DIGESER"}
      </p>
      <EditorialNote key="note-79" text={"(interaktf)"} />
      <p className={articleParagraphClass} key="paragraph-80">
        Bagian Kedelapan Keolahragaan{" "}
        <LawReferenceLink href={lawReferenceUrls.perdaBandungDisability}>
          Pasal 18
        </LawReferenceLink>{" "}
        Pemerintah Daerah Kota dalam Penghormatan, Pelindungan dan Pemenuhan
        hak keolahragaan wajib menjamin Penyandang Disabilitas, dalam: a.​
        melakukan kegiatan keolahragaan; b.​ mendapatkan penghargaan yang sama
        dalam kegiatan keolahragaan; c.​ memperoleh pelayanan dalam kegiatan
        keolahragaan; d.​ memperoleh sarana dan prasarana keolahragaan yang
        mudah diakses; e.​ memilih dan mengikuti jenis atau cabang olahraga; f.​
        memperoleh pengarahan, dukungan, bimbingan, pembinaan, dan pengembangan
        dalam keolahragaan; g.​ menjadi pelaku keolahragaan; h.​ engembangkan
        industri keolahragaan; i.​ meningkatkan prestasi dan mengikuti kejuaraan
        di semua tingkatan.
      </p>
      <p className={articleParagraphClass} key="paragraph-81">
        <LawReferenceLink href={lawReferenceUrls.perdaBandungDisability}>
          Pasal 19
        </LawReferenceLink>{" "}
        1)​ Pemerintah Daerah Kota wajib membina dan mengembangkan keolahragaan
        bagi Penyandang Disabilitas, yang dilaksanakan dan diarahkan untuk
        meningkatkan kesehatan, rasa percaya diri, dan prestasi dalam olahraga.
      </p>
      <p className={articleParagraphClass} key="paragraph-82">
        {"2)​ Pemerintah Daerah Kota menyediakan peralatan dan perlengkapan cabang olahraga sesuai dengan pilihan dan potensi Penyandang Disabilitas."}
      </p>
      <p className={articleParagraphClass} key="paragraph-83">
        {"3)​ Kewajiban Pemerintah Daerah Kota sebagaimana dimaksud pada ayat (1), membentuk,"}
      </p>
      <p className={articleParagraphClass} key="paragraph-84">
        {"membina, dan mengembangkan organisasi olahraga Penyandang Disabilitas melalui pusat pembinaan pengembangan olahraga Penyandang Disabilitas."}
      </p>
      <p className={articleParagraphClass} key="paragraph-85">
        {"4)​ Pembinaan dan pengembangan olahraga penyandang disabilitas sebagaimana dimaksud pada ayat (1) dan ayat (2), dilaksanakan sesuai dengan ragam dan derajat kedisabilitasannya."}
      </p>
      <p className={articleParagraphClass} key="paragraph-86">
        Bagian Kesepuluh Kesejahteraan Sosial Paragraf 1 Umum{" "}
        <LawReferenceLink href={lawReferenceUrls.perdaBandungDisability}>
          Pasal 22
        </LawReferenceLink>{" "}
        Pemerintah Daerah Kota dalam Penghormatan, Pelindungan dan Pemenuhan
        hak kesejahteraan sosial wajib menjamin akses bagi Penyandang
        Disabilitas untuk mendapatkan: a.​ Rehabilitasi Sosial b.​ Jaminan
        Sosial c.​ Pemberdayaan Sosial d.​ Perlindungan Sosial Paragraf 2
        Rehabilitasi Sosial{" "}
        <LawReferenceLink href={lawReferenceUrls.perdaBandungDisability}>
          Pasal 23
        </LawReferenceLink>{" "}
        1)​ Rehabilitasi Sosial sebagaimana dimaksud dalam Pasal 22 huruf a
        dimaksudkan untuk memulihkan dan mengembangkan kemampuan Penyandang
        Disabilitas yang mengalami disfungsi sosial agar dapat melaksanakan
        fungsi sosialnya secara wajar.
      </p>
      <p className={articleParagraphClass} key="paragraph-87">
        {"2)​ Rehabilitasi Sosial dilakukan dengan pemberian pelayanan sosial secara utuh dan terpadu paling sedikit melalui kegiatan: a.​ motivasi dan diagnosis psikososial; b.​ perawatan dan pengasuhan; c.​ pelatihan vokasional kewirausahaan; d.​ bimbingan mental spiritual; e.​ bimbingan fisik; f.​ pembinaan bimbingan sosial dan konseling psikososial; g.​ pelayanan Aksesibilitas; h.​ bantuan dan asistensi sosial; i.​ bimbingan resosialisasi; j.​ bimbingan lanjut; dan/atau k.​ rujukan."}
      </p>
      <p className={articleParagraphClass} key="paragraph-88">
        {"3)​ Rehabilitasi Sosial sebagaimana dimaksud pada ayat (1) dilaksanakan secara persuasif,"}
      </p>
      <p className={articleParagraphClass} key="paragraph-89">
        {"motivatif, dan koersif oleh keluarga, masyarakat, dan institusi sosial."}
      </p>
      <p className={articleParagraphClass} key="paragraph-90">
        {"4)​ Pelaksanaan Rehabilitasi Sosial bagi Penyandang Disabilitas berpedoman pada ketentuan peraturan perundang-undangan."}
      </p>
      <p className={articleParagraphClass} key="paragraph-91">
        Paragraf 3 Jaminan Sosial{" "}
        <LawReferenceLink href={lawReferenceUrls.perdaBandungDisability}>
          Pasal 24
        </LawReferenceLink>{" "}
        1)​ Jaminan Sosial sebagaimana dimaksud dalam Pasal 22 huruf b, untuk
        menjamin Penyandang Disabilitas yang mengalami masalah ketidakmampuan
        sosial dan ekonomi agar kebutuhan dasarnya terpenuhi.
      </p>
      <p className={articleParagraphClass} key="paragraph-92">
        {"2)​ Jaminan Sosial sebagaimana dimaksud pada ayat (1) ditujukan kepada Penyandang Disabilitas miskin atau yang tidak memiliki penghasilan."}
      </p>
      <p className={articleParagraphClass} key="paragraph-93">
        {"3)​ Jaminan Sosial diberikan dalam bentuk asuransi kesejahteraan sosial, bantuan langsung berkelanjutan, dan bantuan khusus."}
      </p>
      <p className={articleParagraphClass} key="paragraph-94">
        {"4)​ Pelaksanaan Jaminan Sosial sebagaimana dimaksud pada ayat (3) berpedoman pada ketentuan peraturan perundang-undangan."}
      </p>
      <p className={articleParagraphClass} key="paragraph-95">
        Paragraf 4 Pemberdayaan Sosial{" "}
        <LawReferenceLink href={lawReferenceUrls.perdaBandungDisability}>
          Pasal 25
        </LawReferenceLink>{" "}
        Pemberdayaan Sosial bagi Penyandang Disabilitas sebagaimana dimaksud
        dalam Pasal 22 huruf c untuk: a.​ memberdayakan Penyandang Disabilitas
        agar mampu memenuhi kebutuhannya secara mandiri; b.​ meningkatkan
        partisipasi lembaga dan/atau sumber daya penyelenggaraan kesetaraan
        Pemberdayaan Penyandang Disabilitas.
      </p>
      <p className={articleParagraphClass} key="paragraph-96">
        Paragraf 5 Perlindungan Sosial{" "}
        <LawReferenceLink href={lawReferenceUrls.perdaBandungDisability}>
          Pasal 27
        </LawReferenceLink>{" "}
        Perlindungan Sosial sebagaimana dimaksud dalam Pasal 22 huruf d
        dilaksanakan paling sedikit melalui: a.​ bantuan Sosial; b.​ advokasi
        sosial; c.​ dan/atau bantuan hukum.
      </p>
      <p className={articleParagraphClass} key="paragraph-97">
        <LawReferenceLink href={lawReferenceUrls.perdaBandungDisability}>
          Pasal 28
        </LawReferenceLink>{" "}
        1)​ Bantuan Sosial sebagaimana dimaksud dalam Pasal 27 huruf a diberikan
        kepada Penyandang Disabilitas, keluarga Penyandang Penyandang
        Disabilitas, Disabilitas,
      </p>
      <p className={articleParagraphClass} key="paragraph-98">
        {"dan/atau kelompok komunitas Penyandang Disabilitas yang mengalami risiko sosial agar dapat tetap hidup secara wajar."}
      </p>
      <p className={articleParagraphClass} key="paragraph-99">
        {"2)​ Bantuan Sosial sebagaimana dimaksud pada ayat (1) bersifat sementara dan/atau berkelanjutan dalam bentuk: a.​ bantuan langsung; b.​ bantuan Aksesibilitas; c.​ dan penguatan kelembagaan."}
      </p>
      <p className={articleParagraphClass} key="paragraph-100">
        {"3)​ Pemberian Bantuan Sosial sebagaimana dimaksud pada ayat (2) berpedoman pada ketentuan peraturan perundang-undangan."}
      </p>
      <p className={articleParagraphClass} key="paragraph-101">
        <LawReferenceLink href={lawReferenceUrls.perdaBandungDisability}>
          Pasal 29
        </LawReferenceLink>{" "}
        1)​ Advokasi sosial sebagaimana dimaksud dalam Pasal 27 huruf b
        dimaksudkan untuk melindungi dan membela Penyandang Disabilitas,
        Disabilitas, kelompok keluarga Penyandang Penyandang Disabilitas,
        dan/atau komunitas Penyandang Disabilitas yang dilanggar haknya.
      </p>
      <p className={articleParagraphClass} key="paragraph-102">
        {"2)​ Advokasi sosial sebagaimana dimaksud pada ayat (1) diberikan dalam bentuk penyadaran hak dan kewajiban, pembelaan dan pemenuhan hak."}
      </p>
      <p className={articleParagraphClass} key="paragraph-103">
        {"3)​ Pemberian advokasi sosial sebagaimana dimaksud pada ayat (2) berpedoman pada ketentuan peraturan perundang-undangan."}
      </p>
    </>
  );
}
