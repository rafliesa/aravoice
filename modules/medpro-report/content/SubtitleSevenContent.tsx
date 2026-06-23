"use client";

import { articleHeadingClass, articleParagraphClass } from "@/modules/medpro-report/component/articleContentClasses";
import LawReferenceLink, { lawReferenceUrls } from "@/modules/medpro-report/component/LawReferenceLink";
import VoiceNoteCard from "@/modules/medpro-report/component/VoiceNoteCard";
import VideoNoteCard from "@/modules/medpro-report/component/VideoNoteCard";
import LegalHierarchyInfographic from "@/modules/medpro-report/component/LegalHierarchyInfographic";
import KoniNpciScaleComparison from "@/modules/medpro-report/component/KoniNpciScaleComparison";
import BandungDemographicsChart from "@/modules/medpro-report/component/BandungDemographicsChart";
import PerdaInteractiveReader from "@/modules/medpro-report/component/PerdaInteractiveReader";
import ZoomableWrapper from "@/modules/medpro-report/component/ZoomableWrapper";
import QuoteCard from "@/modules/medpro-report/component/QuoteCard";
import Image from "next/image";
import DisabilityParadigmTimeline from "@/modules/medpro-report/component/DisabilityParadigmTimeline";

// ==========================================
// EDITABLE TEXT CONTENT DICTIONARY
// Feel free to modify any text inside this block.
// ==========================================
const textContent = {
  paragraphIntro: 
    "",

  paragraphJonnaRatifikasi: 
    "Di atas kertas Indonesia memiliki regulasi yang tertuju kepada hak-hak atlet disabilitas. Jonna Aman Damanik, Komisioner Komisi Nasional Disabilitas (KND), menjelaskan bahwa perubahan besar dalam kebijakan disabilitas di Indonesia berawal dari perubahan cara pandang negara terhadap penyandang disabilitas. Sebelum Indonesia meratifikasi Convention on the Rights of Persons with Disabilities (CRPD) pada 2011, penyandang disabilitas cenderung diposisikan sebagai objek bantuan sosial yang harus dikasihani. Setelah ratifikasi tersebut, paradigma itu berubah. Penyandang disabilitas mulai dipandang sebagai subjek hukum yang memiliki hak setara dengan warga negara lainnya.",

  paragraphKnd143: 
    "KND juga membuka kanal pengaduan Disabilitas Tanah Air 143 yang menerima laporan dari berbagai sektor, mulai dari pendidikan, ketenagakerjaan, layanan publik, hingga ruang digital.",

  quoteJonna: 
    "“Kalau dari sisi regulasi sebenarnya sudah ada. Undang-undangnya juga sudah ada. Tetapi implementasinya secara keseluruhan masih belum memenuhi kebutuhan,”",

  paragraphDodiIntro: 
    "Dodi selaku Wakil Sekretaris Umum NPCI justru mengakui adanya dilema hukum di NPCI:",

  quoteDodiDilemma: 
    "“Undang-undangnya ada pergubnya (Peraturan Gubernur) ada, permennya (Peraturan Menteri) ada. Tapi kenyataannya masih banyak yang tidak menjalankan.”",

  paragraphDodiNPCl: 
    "Di sisi lain, banyak atlet masih berhadapan dengan persoalan yang seharusnya telah dilindungi oleh regulasi yang ada. Dodi, Wakil Sekretaris Umum NPCI Jawa Barat mengungkap bahwa NPCI yang menjadi rumah pembinaan atlet disabilitas justru belum memiliki perangkat hukum untuk membela hak-hak atlet.",

  quoteDodiAdvocacy: 
    "“Otomatis karena kita juga gak ada bidang hukum kan. Dan advokasi itu mereka juga dapat pembinaan dari provinsi. Ada bidang satu yang membidanginya, melakukan kunjungan kerja ke tiap daerah. Di bidang hukum, yang dibahas itu masalah klasifikasi kelas-kelas ketunaan. S1, S2, S3, tunadaksa tangan, tunadaksa kaki. Itu bidang hukum yang bisa mengadvokasi,”",

  paragraphExplainDodi: 
    "Keberadaan “bidang hukum” dalam struktur tersebut belum berfungsi sebagai ruang advokasi bagi atlet. Alih-alih menangani persoalan hak, kesejahteraan, perlindungan kerja, atau jaminan masa depan atlet disabilitas, bidang ini lebih banyak berkaitan dengan urusan klasifikasi disabilitas dalam sistem pertandingan. Akibatnya, fungsi hukum yang seharusnya dapat menjadi pintu perlindungan hak-hak atlet masih belum hadir secara nyata.",

  quoteDodiReady: 
    "“Sementara ini belum ada ya masalah itu. Belum ada masalah itu. Karena pembinaan kesejahteraan itu langsung ada di Pengcab-pengcab (Pengurus Cabang). Tetapi seandainya mereka membutuhkan itu, tim Jawa Barat siap,”",

  paragraphKoniTransition: 
    "Kondisi ini berbeda dengan mekanisme yang berlaku di Komite Olahraga Nasional Indonesia (KONI) Kota Bandung. Wakil Ketua II KONI Kota Bandung, Mulyana, menjelaskan bahwa terdapat alur penanganan yang lebih jelas ketika atlet menghadapi permasalahan.",

  quoteMulyanaGor: 
    "“Yang pertama bertanggung jawab adalah cabang olahraganya. Kalau misalnya cabang olahraga tidak bisa mengatasi, biasanya datang ke KONI. Contohnya ada kasus kecelakaan, cabang olahraga tidak bisa mem-backup, ya datang ke KONI. Kalau KONI bisa mem-backup, ya kita bantu,”",

  paragraphKoniExplanation: 
    "Pernyataan tersebut menunjukkan adanya struktur eskalasi yang dapat digunakan atlet ketika menghadapi masalah. Cabang olahraga menjadi pintu pertama penyelesaian, sementara KONI berfungsi sebagai lapisan dukungan berikutnya apabila persoalan tidak dapat ditangani di tingkat organisasi.",

  paragraphAcepIntro: 
    "Sedangkan menurut Acep Wahyu Ramdan sebagai Sub Olahraga Pendidikan Dispora Bandung, menunjukan posisinya sebagai mitra dengan NPCI dan KONI,",

  quoteAcepCard: 
    "“NPCI adalah mitra kami. Sama seperti KONI. Kami tidak mengurus teknis kesejahteraan atlet secara langsung. Kami memberikan dana hibah, lalu organisasi yang mengelola dan bertanggung jawab terhadap penggunaannya. Peran kami lebih kepada pendampingan, monitoring, dan evaluasi.”",

  paragraphHerlindaIntro: 
    "Herlinda Safitri, selaku pelatih bowling disabilitas Jawa Barat, ia tidak memiliki gelar konseling namun ia mengakui bahwa masalah yang muncul di dalam tim umumnya diselesaikan melalui komunikasi internal. Ilmu itu ia bawa ke lapangan disabilitas. Atlet didorong untuk berbicara langsung satu sama lain, sementara pelatih berperan sebagai mediator agar persoalan tidak berkembang menjadi konflik yang lebih besar.",

  quoteHerlinda1: 
    "“Jadi saya nggak mau keluar dari tim. Saya jaga dasarnya, pengalaman Peparnas saya ya. Kalau misalnya ada masalah, ngobrol di dalam. Jangan keluar dari tim. Jadi diselesaikan,”",

  paragraphHerlindaTot: 
    "Ia paham keterbatasan itu. Ia pernah mengikuti Training of Trainers (ToT) dan seminar psikologi melalui jalur Pekan Olahraga Nasional (PON) sebagai pelatih umum.",

  herlindaVnText: 
    "Iya, bagusnya ada psikolog. Jadi misalnya NPC Kota Bandung atau Jabar, disebar. Kalau kita yang non-disabilitas gitu, disebar. Saya juga punya kan. Jadi atlet memang bagusnya begitu. Psikolog kan ada ilmunya. Bagusnya ada. Iya, saya dari kemarin juga di NPC nggak ada psikolog. Enaknya begitu, jadi lebih enak mereka curhat satu-satu.",

  paragraphStigmaExplain: 
    "Pola yang memperlihatkan bagaimana masalah masih bertumpu pada hubungan personal, bukan pada payung advokasi untuk memastikan persoalan dapat terdokumentasi dan dievaluasi. Hal ini mengakibatkan persoalan atlet berhenti sebagai keluhan yang diselesaikan secara informal.",

  paragraphAdvocacyExplain: 
    "Sistem advokasi memungkinkan atlet untuk melaporkan masalah dengan mendapatkan pendampingan profesional dan memperoleh penyelesaian terdokumentasi. Sistem ini sudah berjalan di olahraga non-disabilitas, seperti KONI yang memiliki bidang hukum.",

  quoteMulyanaCard: 
    "“Yang pertama bertanggung jawab adalah cabang olahraganya. Pengurus cabang olahraga. Kalau misalnya cabang olahraga itu tidak bisa mengatasi, biasanya datang ke KONI. Contohnya ada kasus kecelakaan. Cabang olahraga tidak bisa membackup. Ya datang ke KONI. Kalau KONI bisa membackup, ya kita bantu. Sejauh mungkin kita memberikan layanan-layanan yang bisa membantu. Baik karier sekolahnya maupun karier pekerjaannya. Jadi kita bantu dari sisi itu. Pernah ada kasus hukum juga, kasus hukum juga kita berikan advokasi karena kita punya struktur dan ada tim berbentuk bidang,”",

  paragraphYuliaIntro: 
    "Pendampingan juga diperlukan untuk mental bertanding, layaknya peran Yulia Sahaja Dewi sebagai psikolog klinis yang mendampingi tim Indonesia di ASEAN Para Games 2022. Ia menjelaskan bagaimana ketiadaan psikolog dalam proses pembinaan jangka panjang menciptakan kerentanan yang tidak terlihat.",

  quoteYuliaCard: 
    "“Kendala utamanya adalah psikolog olahraga masih sering dianggap sebagai pelengkap. Saat ASEAN Para Games 2022, kami tidak mendampingi atlet sejak masa latihan atau training center. Kami baru dilibatkan sekitar tiga atau empat hari sebelum pertandingan. Dalam waktu yang sangat singkat, kami harus membangun kedekatan dengan atlet dan membantu mereka mencapai performa terbaik.”",

  paragraphEvaAnxiety: 
    "Sementara di sisi lain, Eva Arianti, atlet panahan, mengalami gejala kecemasan somatik menjelang Peparnas Papua yang tidak pernah ia ceritakan ke siapa pun, “tiba-tiba sakit, yang mengalami sakit perut lah, mendadak, tiap mau tanding itu pasti sakit perut.” Tidak ada psikolog. Ia meregulasi dirinya sendiri dengan tarik napas dan berdoa.",

  paragraphDandanPressure: 
    "Dandan Supardan, atlet panahan yang kini ASN Kementerian Sosial, mengungkap bahwa tekanan terbesar selama kompetisi tidak datang dari lawan di lapangan, melainkan dari beban yang ia bawa dari rumah, “biasanya masalah internal yang terbawa ke dalam organisasi. Biasanya ya kayak ada masalah dengan keluarga di rumah, dengan istri atau apa. Itu biasanya seperti itu, atau yang paling sering sih biasanya masalah ekonomi,” jelas Dandan Supardan, atlet panahan & ASN Kementerian Sosial.",

  paragraphImanIntro: 
    "Iman juga mengungkap dimensi yang bahkan lebih mendasar terkait kebutuhan akan pendamping yang merupakan profesi tersendiri, berbeda dari pelatih.",

  quoteImanHighlight: 
    "“Seharusnya dana atlet disabilitas agak lebih besar daripada dana ke atlet olahraga lain. Kenapa? Satu atlet butuh pelatih, butuh pendamping. Pendamping inilah yang harus memahami atlet, entah itu psikologis dan kebutuhannya, sehingga, dana kita selain untuk menggaji honor pelatih, ya juga untuk honor pendamping. Satu atlet satu pendamping,”",

  quoteDjumonoCard: 
    "“Kita mesti akui bahwa NPCI belum bisa sepenuhnya menjadi sandaran kesejahteraan atlet. Organisasi ini bergantung pada dana hibah pemerintah, dan ketika dana itu dipotong, seluruh ekosistem pembinaan ikut terdampak,”",

  paragraphDisporaOfficial: 
    "Dispora sendiri dalam pernyataan resminya memposisikan diri sebagai pihak yang memberikan dana dan menyerahkan tanggung jawab pengelolaan kepada organisasi penerima.",

  quoteAcepOfficial: 
    "“Kami memberikan dana hibah, lalu organisasi yang mengelola dan bertanggung jawab terhadap penggunaannya. Peran kami lebih kepada pendampingan, monitoring, dan evaluasi,”",

  paragraphWelfareGap: 
    "Pembagian peran ini menunjukkan bahwa tanggung jawab kesejahteraan atlet pada praktiknya berada di tingkat organisasi olahraga. Namun, di lapangan, tanggung jawab tersebut tidak selalu berbanding lurus dengan ketersediaan perlindungan yang diterima atlet. Kesenjangan itu tampak paling nyata dalam aspek kesehatan, terutama ketika atlet mengalami cedera di luar masa kompetisi. Pada situasi seperti ini, perlindungan yang seharusnya menjadi jaring pengaman justru tidak selalu tersedia.",

  paragraphMuslimBpjsIntro: 
    "Muslim, atlet catur tunanetra menjelaskan mekanisme BPJS atlet disabilitas NPCI Kota Bandung hanya aktif menjelang kompetisi. Di luar periode itu, tidak ada perlindungan kesehatan yang aktif.",

  quoteMuslimBpjsDetails: 
    "“BPJS itu tidak selalu aktif. Jadi nanti kalau misalnya pas kejadian, baru dibikin sama organisasi, itu baru aktif. Kalau sebelum itu enggak aktif. Harusnya sudah, harusnya sudah. Sudah pernah ngajukan. Cuma berbagai alasan, harus bayar. Jadi memang masalahnya adalah tidak ada pemasukan rutin,”",

  headingRegeneration: 
    "REGENERASI MANDEK",

  paragraphRegenerationExplain1: 
    "Proses pencarian atlet sering kali tidak terhambat oleh kurangnya potensi, melainkan oleh ketidaknampakan. Banyak penyandang disabilitas hidup dalam ruang yang tertutup, dibatasi oleh keluarga dan lingkungan yang masih memelihara stigma. Akibatnya, mereka tidak hanya kehilangan akses terhadap olahraga, tetapi juga kesempatan untuk dikenali dan berkembang sebagai atlet.",

  paragraphRegenerationExplain2: 
    "Ketidaknampakan penyandang disabilitas tidak terlepas dari demografi Kota Bandung yang terus berkembang. Di tengah jumlah penduduk yang terus bertambah dari tahun ke tahun, tersimpan kelompok masyarakat yang masih berisiko luput dari jangkauan sistem pembinaan olahraga.",

  paragraphRegenerationGap: 
    "Data tersebut memperlihatkan adanya jarak yang cukup lebar antara potensi dan realitas pembinaan. Di tengah ribuan penyandang disabilitas yang tercatat tinggal di Kota Bandung, Komarudin, Bendahara NPCI Kota Bandung menyebut saat ini NPCI membiayai pembinaan 17 cabang olahraga dan menyeleksi 516 atlet menjadi 250 atlet kontingen untuk Peparda Jawa Barat 2026.",

  paragraphImanStatsIntro: 
    "Iman, Bidang Pembinaan Prestasi NPCI Jawa Barat menyebut angka yang seharusnya membuat semua pemangku kepentingan bangkit dari kursi mereka.",

  quoteImanStats: 
    "“Saya selalu bermain data. 347 atlet. Peparnas Jawa Barat itu 57% di atas 40 tahun. Jadi ini pekerjaan kami untuk menghadapi Peparnas 2028 harus mempersiapkan apakah menggunakan atlet yang dulu atau regenerasi atlet. Kami kekurangan. Kami kurang bahan, sehingga atlet-atlet kami di atas 40 tahun, 50 tahun. Yang namanya olahragawan itu kan adu raga. Kalau raga sudah tua, ya nggak akan mampu sebetulnya. Tapi karena susah mencarinya, yaudah yang ada dulu,”",

  paragraphStigmaSilent: 
    "Persoalan sunyi pada regenerasi atlet disabilitas yang harus tumbuh dalam stigma yang membuat tumbuh dalam ruang yang tertutup dari potensi yang harus mengalahkan stigma sosial membuat keberadaannya sembunyi.",

  paragraphDodiStigmaExplain: 
    "Dodi, Wakil Sekretariat Umum NPCI Jawa Barat menjelaskan terkait celah yang cukup besar ini:",

  quoteDodiStigmaDetails: 
    "“Seakan-akan anak disabilitas itu seperti sesuatu yang memalukan. Itu oleh masyarakat, oleh keluarga, sehingga disembunyikan. Padahal kami butuh itu. Kalau kita lihat di berbagai daerah, di pedesaan-pedesaan, mereka terkendala biasanya memang kalau yang disabel itu bersembunyi. Satu mungkin faktor dari malunya keluarga atau fasilitas,”",

  paragraphAdityaIntro: 
    "Aditya Nandang Saputra, anak dari seorang atlet disabilitas, mengisahkan bagaimana stigma terhadap disabilitas masih terjadi di tingkat keluarga dan lingkungan terdekat.",

  adityaVnTranscript: 
    "“Yang awalnya anak yang ditanya cuma perengah-perengih, senyam-senyum. Ya tahu sendiri lah ketika anak disabilitas tidak masuk SD biasa, dia masuknya di SLB... Sekarang atlet Pelatnas.”",

  paragraphOnoParentsStigma: 
    "Ono Saipudin sebagai atlet angkat beban disabilitas mengingat kembali bahwa ia pernah mendapat peringatan dari orang tuanya terkait kondisinya. Kata mereka, ‘jalan saja susah, bagaimana kalau cedera?’ Namun, ia tetap melanjutkan olahraga hingga berhasil tampil di kompetisi nasional. Pengalaman ini menunjukkan bahwa keputusan penyandang disabilitas untuk berolahraga sering dipengaruhi oleh dukungan atau kekhawatiran dari lingkungan terdekat.",

  paragraphAcepStigmaIntro: 
    "Acep Wahyu Ramdan selaku Sub Olahraga Pendidikan Dispora Kota Bandung menjelaskan tantangannya terkait sosialisasi disabilitas.",

  quoteAcepStigmaDetails: 
    "“Masih ada orang tua yang menyembunyikan anak disabilitas karena merasa malu. Padahal sekarang tidak boleh seperti itu. Justru organisasi seperti NPCI harus aktif melakukan sosialisasi agar anak-anak disabilitas memiliki kesempatan berkembang melalui olahraga.”",

  paragraphOpportunityExplain: 
    "Persoalan tersebut berakar dari stigma yang masih hidup di masyarakat, akibatnya banyak anak disabilitas yang tidak pernah mengenal dunia olahraga prestasi. Bukan karena minim potensi, melainkan karena tidak pernah mendapatkan kesempatan.",

  paragraphImanDinsosIntro: 
    "Di sisi lain, NPCI Jawa Barat mengakui masih bergantung pada data Dinas Sosial untuk menjangkau calon atlet disabilitas. Hal itu disampaikan oleh Iman, Bidang Pembinaan Prestasi NPCI Jawa Barat.",

  quoteImanDinsosDetails: 
    "“Kami harus kerja sama dengan Dinas Sosial karena mereka punya data yang lebih lengkap jumlah disabilitas di setiap daerah. Sehingga kami minta bantuan teman-teman untuk menggemburkan bahwa ada NPCI yang mengatur olahraga disabilitas. Jangan malu kalau punya anak yang punya keterbatasan,”",

  headingPension: 
    "PENSIUN TANPA PAYUNG",

  paragraphAdenIntro: 
    "Aden Achmad Muhammad Rahman, aktivis hak disabilitas sekaligus atlet tenis yang kembali bertanding pada usia 59 tahun, menilai belum ada sistem yang secara khusus menjamin keberlangsungan hidup atlet disabilitas setelah mereka tidak lagi berkompetisi.",

  quoteAdenRetirementDetails: 
    "“Nah, itu yang belum ada. Saat masih menjadi atlet biasanya ada uang pembinaan bulanan. Misalnya atlet yang sedang dipersiapkan untuk Peparda akan mendapat bantuan selama masa persiapan. Tetapi setelah pensiun, belum ada regulasi yang menjamin kehidupan mereka. Belum ada santunan pensiun atlet,”",

  paragraphAcepPension: 
    "Acep saat di Kantor Dispora Bandung juga menjelaskan terkait program setelah atlet pensiun yang belum terlaksana, “kalau program khusus belum ada yang benar-benar berjalan. Namun di Perda (Peraturan Daerah) sudah tercantum bahwa atlet berprestasi bisa mendapatkan penghargaan. Penghargaan itu bisa berupa uang pembinaan, kesempatan kerja dan bentuk penghargaan lainnya. Tetapi untuk penyaluran pekerjaan harus melibatkan instansi lain seperti Disnaker, BKD, atau lembaga terkait lainnya. Jadi prosesnya cukup panjang.”",

  paragraphPensionAnalysis: 
    "Pernyataan yang menunjukkan bahwa pembinaan atlet disabilitas di Indonesia masih berorientasi pada pencapaian prestasi, bukan pada keberlanjutan kesejahteraan atlet sebagai individu. Menurut Aden, peluang memperoleh pekerjaan melalui jalur prestasi memang tersedia bagi sebagian atlet disabilitas. Ia mencontohkan sejumlah atlet peraih medali pada Peparnas 2018 yang kemudian diangkat menjadi Aparatur Sipil Negara (ASN), salah satunya Dandan Supardan. Namun kesempatan tersebut umumnya hanya dapat diakses oleh atlet yang berhasil mencapai prestasi pada level nasional. Bagi atlet yang tidak mencapai jenjang tersebut, belum ada jaminan khusus terkait keberlanjutan penghasilan setelah karier olahraga berakhir.",

  quoteDandanHighlightedLarge: 
    "“Saya sempat bilang, saya mau mundur dari ASN, saya ingin menjadi atlet ini. Tapi setelah dipikir-pikir dengan kondisi, di organisasinya sendiri tidak akan bisa meng-cover itu untuk kehidupan saya. Kita punya anak, harus sekolah,”",

  headingPerdaDocuments: 
    "ATURAN HUKUM: PERDA KOTA BANDUNG NOMOR 15 TAHUN 2019",

  headingSummary: 
    "Hak Tertunda",

  paragraphSummaryOno: 
    "Dalam ketidakpastian ekonomi saat ini, kisah Ono menjadi refleksi nyata bagaimana atlet disabilitas Kota Bandung berlatih dan berjuang tidak hanya untuk meraih prestasi, tetapi juga keberlangsungan hidup mereka.",

  paragraphSummaryWiryaIntro: 
    "Disisi lain, Wirya Dharma, seorang koordinator sekaligus asisten pelatih pada cabang olahraga blind judo membagikan kisah bagaimana dedikasi dan kekhawatiran dari sudut pandang seorang pelatih dalam keterbatasan kondisi saat ini.",
};

export default function SubtitleSevenContent() {
  return (
    <>
      <p className={articleParagraphClass} key="paragraph-0">
        {textContent.paragraphIntro}
      </p>

      <p className={articleParagraphClass} key="paragraph-1">
        {textContent.paragraphJonnaRatifikasi}
        {" "}
        <LawReferenceLink href={lawReferenceUrls.crpd}>
          Convention on the Rights of Persons with Disabilities (CRPD)
        </LawReferenceLink>{" "}
        {"pada 2011, penyandang disabilitas cenderung diposisikan sebagai objek bantuan sosial yang harus dikasihani. Setelah ratifikasi tersebut, paradigma itu berubah. Penyandang disabilitas mulai dipandang sebagai subjek hukum yang memiliki hak setara dengan warga negara lainnya."}
      </p>

      {/* Infografis KND Paradigm Shift - Interactive Component */}
      <DisabilityParadigmTimeline key="knd-paradigm-infographic" />

      <p className={articleParagraphClass} key="paragraph-3">
        {textContent.paragraphKnd143}
      </p>

      <p className={articleParagraphClass} key="quote-jonna">
        {textContent.quoteJonna} ujar Jonna.
      </p>

      <p className={articleParagraphClass} key="paragraph-6">
        {textContent.paragraphDodiIntro}
      </p>

      <p className={articleParagraphClass} key="quote-dodi-dilemma">
        {textContent.quoteDodiDilemma} — Dodi, Wakil Sekretaris Umum NPCI
      </p>

      <p className={articleParagraphClass} key="paragraph-9">
        {textContent.paragraphDodiNPCl}
      </p>

      <p className={articleParagraphClass} key="quote-dodi-authority">
        {textContent.quoteDodiAdvocacy} jelasnya.
      </p>

      <p className={articleParagraphClass} key="paragraph-explain-dodi">
        {textContent.paragraphExplainDodi}
      </p>

      {/* Hak dalam Regulasi - Realita Atlet (Infografis Nami) - Static */}
      <div className="my-8 max-w-xl mx-auto overflow-hidden rounded-2xl border border-zinc-200 bg-white p-2 shadow-sm" key="rights-vs-reality-infographic-container">
        <div className="relative aspect-[1200/2545] w-full">
          <Image
            src="/7/infografis-nami.webp"
            alt="Hak dalam Regulasi vs Realita Atlet"
            fill
            className="object-contain rounded-xl"
            sizes="(min-width: 768px) 576px, 100vw"
          />
        </div>
      </div>

      <p className={articleParagraphClass} key="quote-dodi-ready">
        {textContent.quoteDodiReady} ungkap Dodi saat menjawab laporan dari atlet terkait pemberdayaan atlet disabilitas.
      </p>

      <p className={articleParagraphClass} key="paragraph-koni-transition">
        {textContent.paragraphKoniTransition}
      </p>

      <p className={articleParagraphClass} key="quote-mulyana-gor">
        {textContent.quoteMulyanaGor} ungkap Mulyana di KONI GOR Bandung.
      </p>

      <p className={articleParagraphClass} key="paragraph-koni-explanation">
        {textContent.paragraphKoniExplanation}
      </p>

      <p className={articleParagraphClass} key="paragraph-acep-intro">
        {textContent.paragraphAcepIntro}
      </p>

      {/* Acep Wahyu Ramdan Quote Card */}
      <QuoteCard
        quote={textContent.quoteAcepCard}
        imageSrc="/7/acep.webp"
        speakerName="Acep Wahyu Ramdan"
        speakerRole="Sub Olahraga Pendidikan Dispora Bandung"
      />

      {/* Timbangan Perbandingan KONI vs NPCI */}
      <div className="my-8" key="koni-npci-timbangan-scale">
        <KoniNpciScaleComparison />
      </div>

      <p className={articleParagraphClass} key="paragraph-herlinda-intro">
        {textContent.paragraphHerlindaIntro}
      </p>

      <p className={articleParagraphClass} key="quote-herlinda-1">
        {textContent.quoteHerlinda1} ujar Herlinda.
      </p>

      <p className={articleParagraphClass} key="paragraph-herlinda-tot">
        {textContent.paragraphHerlindaTot}
      </p>

      {/* Herlinda Savitri Video Note */}
      <div className="my-8 flex justify-center" key="herlinda-video-container">
        <VideoNoteCard
          videoSrc="/uploads/pak toto perasaan ibu.mov"
          title="VN VIDEO HERLINDA"
          description={textContent.herlindaVnText}
          speakerName="Herlinda Savitri"
          speakerRole="Pelatih Bowling Disabilitas Jawa Barat"
          imageSrc="/uploads/9ee61479be07118e6f3170b0b7197bb1.jpg"
        />
      </div>

      <p className={articleParagraphClass} key="paragraph-stigma-explain">
        {textContent.paragraphStigmaExplain}
      </p>

      <p className={articleParagraphClass} key="paragraph-advocacy-explain">
        {textContent.paragraphAdvocacyExplain}
      </p>

      {/* Mulyana Quote Card (Ratio 1:1, Larger Photo) */}
      <div className="my-8 flex flex-col items-center text-center p-6 bg-zinc-50 border border-zinc-200 rounded-2xl max-w-2xl mx-auto font-sans" key="mulyana-quote-card">
        <blockquote className="text-sm italic text-zinc-700 font-medium leading-relaxed max-w-lg mb-6">
          {textContent.quoteMulyanaCard}
        </blockquote>
        <div className="relative size-24 rounded-2xl overflow-hidden border border-zinc-300 bg-zinc-200 shadow-sm mb-3 shrink-0">
          <Image
            src="/7/mulyana.webp"
            alt="Foto Mulyana"
            fill
            sizes="96px"
            className="object-cover"
          />
        </div>
        <cite className="not-italic block font-sans text-xs font-extrabold text-[#082b4d]">
          Mulyana
        </cite>
        <span className="block font-sans text-[10px] text-zinc-500 mt-1">
          Wakil Ketua II KONI Kota Bandung
        </span>
      </div>

      <p className={articleParagraphClass} key="paragraph-yulia-intro">
        {textContent.paragraphYuliaIntro}
      </p>

      {/* Yulia Quote Card */}
      <QuoteCard
        quote={textContent.quoteYuliaCard}
        imageSrc="/6/yulia.webp"
        speakerName="Yulia Sahaja Dewi Permatasari"
        speakerRole="Psikolog Klinis & Pendamping Atlet Paralimpik"
        imagePosition="object-top"
      />

      <p className={articleParagraphClass} key="paragraph-eva-anxiety">
        {textContent.paragraphEvaAnxiety}
      </p>

      <p className={articleParagraphClass} key="paragraph-dandan-pressure">
        {textContent.paragraphDandanPressure}
      </p>

      {/* Iman Pembina Prestasi Quote - Highlighted */}
      <blockquote className="mx-auto my-8 max-w-xl border-y border-zinc-200/80 py-5 text-center leading-relaxed" key="quote-iman-highlight">
        <p className="font-sans text-lg sm:text-xl font-semibold leading-relaxed text-secondary-800 italic">
          {textContent.quoteImanHighlight}
        </p>
        <cite className="block not-italic text-xs font-bold text-[#082b4d] mt-2.5">
          — Iman, Bidang Pembinaan Prestasi NPCI Jawa Barat
        </cite>
      </blockquote>

      {/* Djumono Quote Card */}
      <QuoteCard
        quote={textContent.quoteDjumonoCard}
        imageSrc="/7/djumono.webp"
        speakerName="Djumono"
        speakerRole="Sekretaris Umum NPCI Kota Bandung"
      />

      <p className={articleParagraphClass} key="paragraph-dispora-official">
        {textContent.paragraphDisporaOfficial}
      </p>

      <p className={articleParagraphClass} key="quote-acep-official">
        {textContent.quoteAcepOfficial} ucap Acep sebagai Sub Olahraga Pendidikan kepada tim Paravoice.id di Dispora Kota Bandung.
      </p>

      <p className={articleParagraphClass} key="paragraph-welfare-gap">
        {textContent.paragraphWelfareGap}
      </p>

      <p className={articleParagraphClass} key="paragraph-muslim-bpjs-intro">
        {textContent.paragraphMuslimBpjsIntro}
      </p>

      <p className={articleParagraphClass} key="quote-muslim-bpjs-details">
        {textContent.quoteMuslimBpjsDetails} jelasnya.
      </p>

      {/* Heading: REGENERASI MANDEK */}
      <h2 className={articleHeadingClass} key="heading-regeneration">
        {textContent.headingRegeneration}
      </h2>

      <p className={articleParagraphClass} key="paragraph-regeneration-explain-1">
        {textContent.paragraphRegenerationExplain1}
      </p>

      <p className={articleParagraphClass} key="paragraph-regeneration-explain-2">
        {textContent.paragraphRegenerationExplain2}
      </p>

      {/* Interactive Demographics Chart (Population & Disability 2017-2025) */}
      <div className="my-8" key="bandung-demographics-chart-container">
        <BandungDemographicsChart />
      </div>

      <p className={articleParagraphClass} key="paragraph-regeneration-gap">
        {textContent.paragraphRegenerationGap}
      </p>

      <p className={articleParagraphClass} key="paragraph-iman-stats-intro">
        {textContent.paragraphImanStatsIntro}
      </p>

      <p className={articleParagraphClass} key="quote-iman-stats">
        {textContent.quoteImanStats} ucapnya.
      </p>

      <p className={articleParagraphClass} key="paragraph-stigma-silent">
        {textContent.paragraphStigmaSilent}
      </p>

      <p className={articleParagraphClass} key="paragraph-dodi-stigma-explain">
        {textContent.paragraphDodiStigmaExplain}
      </p>

      <p className={articleParagraphClass} key="quote-dodi-stigma-details">
        {textContent.quoteDodiStigmaDetails} tekannya.
      </p>

      <p className={articleParagraphClass} key="paragraph-aditya-intro">
        {textContent.paragraphAdityaIntro}
      </p>

      {/* Aditya Nandang Saputra Voice Note Card */}
      <div className="my-8" key="aditya-vn-container">
        <VoiceNoteCard
          audioSrc="/7/28 Apr_Aditya Nandang.m4a"
          speakerName="Aditya Nandang Saputra"
          speakerRole="Bidang Pemberdayaan Atlet NPCI Kabupaten Bandung"
        />
        <p className="text-zinc-500 text-xs italic text-center -mt-4 max-w-md mx-auto leading-relaxed">
          {textContent.adityaVnTranscript}
        </p>
      </div>

      <p className={articleParagraphClass} key="paragraph-ono-parents-stigma">
        {textContent.paragraphOnoParentsStigma}
      </p>

      <p className={articleParagraphClass} key="paragraph-acep-stigma-intro">
        {textContent.paragraphAcepStigmaIntro}
      </p>

      <p className={articleParagraphClass} key="quote-acep-stigma-details">
        {textContent.quoteAcepStigmaDetails}
      </p>

      <p className={articleParagraphClass} key="paragraph-opportunity-explain">
        {textContent.paragraphOpportunityExplain}
      </p>

      <p className={articleParagraphClass} key="paragraph-iman-dinsos-intro">
        {textContent.paragraphImanDinsosIntro}
      </p>

      <p className={articleParagraphClass} key="quote-iman-dinsos-details">
        {textContent.quoteImanDinsosDetails} ungkap Iman, Bidang Pembinaan Prestasi NPCI Jawa Barat.
      </p>

      {/* Heading: PENSIUN TANPA PAYUNG */}
      <h2 className={articleHeadingClass} key="heading-pension">
        {textContent.headingPension}
      </h2>

      <p className={articleParagraphClass} key="paragraph-aden-intro">
        {textContent.paragraphAdenIntro}
      </p>

      <p className={articleParagraphClass} key="quote-aden-retirement-details">
        {textContent.quoteAdenRetirementDetails} jelas Aden.
      </p>

      <p className={articleParagraphClass} key="paragraph-acep-pension">
        {textContent.paragraphAcepPension}
      </p>

      <p className={articleParagraphClass} key="paragraph-pension-analysis">
        {textContent.paragraphPensionAnalysis}
      </p>

      <blockquote className="mx-auto my-8 max-w-xl border-y border-zinc-200/80 py-5 text-center leading-relaxed" key="quote-dandan-highlighted-large-7">
        <p className="font-sans text-lg sm:text-xl font-semibold leading-relaxed text-secondary-800 italic">
          {textContent.quoteDandanHighlightedLarge}
        </p>
        <cite className="block not-italic text-xs font-bold text-[#082b4d] mt-2.5">
          — Dandan Supardan, Atlet Panahan & ASN Kementerian Sosial
        </cite>
      </blockquote>

      {/* Heading: PERATURAN PERUNDANG-UNDANGAN DAERAH */}
      <h2 className={articleHeadingClass} key="heading-perda-documents">
        {textContent.headingPerdaDocuments}
      </h2>

      {/* Perda Interactive Deck Slider - Replacing all static articles */}
      <div className="my-8" key="perda-interactive-reader-container">
        <PerdaInteractiveReader />
      </div>


    </>
  );
}
