"use client";

import { articleHeadingClass, articleParagraphClass } from "@/modules/medpro-report/component/articleContentClasses";
import JudoAttendanceInfographic from "@/modules/medpro-report/component/JudoAttendanceInfographic";
import LovitaVideoCard from "@/modules/medpro-report/component/LovitaVideoCard";
import FinancialLiteracySteps from "@/modules/medpro-report/component/FinancialLiteracySteps";
import VoiceNoteCard from "@/modules/medpro-report/component/VoiceNoteCard";

export default function SubtitleFourContent() {
  return (
    <>
      <p className={articleParagraphClass} key="quote-0">
        {"“Tahun ini belum ada uang pembinaan yang turun. Katanya sekarang SK baru turun. Tapi dari Januari sampai Juni ini belum ada yang cair, baik untuk atlet angkat berat maupun cabang olahraga lain,” ucap Ono Saipudin, atlet angkat berat NPCI Kota Bandung."}
      </p>

      <p className={articleParagraphClass} key="paragraph-1">
        {"Begitulah nasib atlet disabilitas NPCI Kota Bandung. Dari awal hingga pertengahan tahun 2026 belum menerima uang pembinaan. Padahal, latihan menuju Peparda Jawa Barat 2026 tetap berjalan hampir setiap hari. Kondisi ini membuat berbagai kebutuhan latihan, mulai dari ongkos transportasi hingga kebutuhan sehari-hari, harus ditanggung secara mandiri."}
      </p>

      <p className={articleParagraphClass} key="paragraph-3">
        {"Latihan para atlet tetap berjalan sejak bulan Januari. Dengan uang yang pas-pasan, Ono dan rekan-rekannya tetap semangat hadir latihan di GOR Pajajaran demi medali emas Peparda Jawa Barat 2026. Latihan yang dijadwalkan hampir setiap hari memakan ongkos yang tidak sedikit. Dana yang keluar 700-800 ribu per bulannya baru terhitung untuk transportasi menuju lokasi latihan, belum pengeluaran lainnya untuk memenuhi kebutuhan sehari-hari. Hal ini cukup mencekik dana pribadi yang mereka miliki."}
      </p>

      <p className={articleParagraphClass} key="paragraph-5">
        {"Selain menjadi atlet, Ono juga memiliki usaha pribadi untuk menopang ekonomi keluarganya, yaitu sebagai petani konvensional dan hidroponik di daerah Cibabat serta memiliki usaha pengobatan alternatif di kediamannya. Menurutnya, penghasilan sebagai atlet saja belum cukup untuk memenuhi kebutuhan pribadi dan keluarganya, terutama untuk biaya sekolah anaknya. Bahkan dengan tiga pemasukan tersebut juga belum tentu bisa mencukupi kebutuhan keluarganya karena permintaan pasar yang tidak pasti."}
      </p>

      <p className={articleParagraphClass} key="quote-8">
        {"“(Penghasilan utama) dari usaha itu. Tapi usahakan kadang naik turun. Nah itu yang sering menjadi tekanan. Karena setiap hari ada kebutuhan keluarga, kebutuhan istri, dan terutama biaya sekolah anak,” jelas Ono."}
      </p>

      <h2 className={articleHeadingClass} key="heading-insentif">
        {"TIDAK ADA INSENTIF MENGHAMBAT LATIHAN"}
      </h2>

      <p className={articleParagraphClass} key="paragraph-11">
        {"Ketidakpastian insentif tidak hanya dirasakan sebagai persoalan administrasi. Di ruang latihan, kondisi ekonomi atlet bisa muncul dalam bentuk yang lebih sederhana, yaitu tidak bisa hadir latihan karena tidak punya ongkos, keharusan untuk bekerja, atau memilih antara latihan dan mencari nafkah."}
      </p>

      <p className={articleParagraphClass} key="paragraph-12">
        {"Taofik juga sempat menyebutkan keterlambatan insentif membuat atlet berada dalam situasi tidak pasti. Menurutnya, insentif yang seharusnya diberikan pada Mei belum terealisasi, sehingga berdampak pada kondisi finansial atlet."}
      </p>

      <p className={articleParagraphClass} key="paragraph-13">
        {"Situasi itu terlihat jelas dalam kesaksian Wirya Dharma, Koordinator Pelatih cabang olahraga Blind Judo Kota Bandung. Tidak jarang lebih dari separuh atlet binaannya berhalangan hadir latihan karena persoalan ekonomi."}
      </p>

      {/* Wirya Dharma Highlighted Quote */}
      <div className="my-6 pl-4 border-l-4 border-secondary-500 italic text-base text-zinc-700 bg-zinc-50 py-3.5 pr-4 rounded-r-xl font-sans">
        “Dari 21 atlet yang kami bina, yang hadir latihan biasanya hanya sekitar 10 orang. Sisanya banyak yang terkendala masalah ekonomi. Saya juga tidak bisa memaksa mereka,”
        <span className="block not-italic text-xs font-bold text-zinc-500 mt-2">
          — Wirya Dharma, Koordinator Pelatih Blind Judo
        </span>
      </div>

      {/* Interactive Attendance Infographic with Looping Video Fallback */}
      <JudoAttendanceInfographic />

      <p className={articleParagraphClass} key="paragraph-17">
        {"Bagi Wirya, pelatih tidak selalu dalam posisi untuk menuntut kehadiran atlet. Di satu sisi, atlet harus menjaga konsistensi latihan agar siap bertanding. Di sisi lain, sebagian dari mereka tetap harus memenuhi kebutuhan sehari-hari. Ketika ditanya alasan tidak datang latihan, atlet binaan Wirya menyebut kendala yang kelihatannya sepele, ongkos."}
      </p>

      <p className={articleParagraphClass} key="paragraph-18">
        {"Permasalah kecil ini mengungkapkan bahwa masalah ekonomi atlet tidak selalu hadir dalam angka besar. Terkadang, ia muncul sebagai biaya transportasi harian menuju tempat latihan. Bagi atlet yang belum memiliki penghasilan tetap atau masih menunggu insentif, ongkos latihan bisa menjadi penghalang yang menentukan apakah mereka bisa ikut serta dalam latihan atau tidak."}
      </p>

      <h2 className={articleHeadingClass} key="heading-bonus">
        {"BONUS SEBAGAI SATU-SATUNYA HARAPAN"}
      </h2>

      <p className={articleParagraphClass} key="paragraph-20">
        {"Bagi Lovita Uki Damayanti, goalball tidak langsung hadir sebagai ruang prestasi. Ia mengenal cabang olahraga itu dari klub Goalball Mandiri, tempat ia belajar dari nol sebelum akhirnya lolos seleksi dan mewakili Jawa Barat di Peparnas 2024 di Solo. Dalam perjalanannya, komunitas menjadi salah satu penopang awal bagi atlet disabilitas untuk mengenal olahraga, membangun kemampuan, dan masuk ke jalur kompetisi."}
      </p>

      <p className={articleParagraphClass} key="paragraph-23">
        {"Dari sisi ekonomi, Lovita tidak menggambarkan adanya penghasilan rutin bulanan sebagai atlet. Pemasukan yang ia sebut secara langsung adalah bonus setelah meraih medali perak di Peparnas 2024. Bonus tersebut ia terima dari NPCI Jawa Barat dan Kota Bandung karena ia merupakan salah satu kontingen Jawa Barat atau pengcab Kota Bandung."}
      </p>

      <p className={articleParagraphClass} key="quote-25">
        {"“Bonus dapat, karena sesuai medali kan, waktu itu aku dapat perak, terus penyalurannya aku nggak tahu sih kak, dari itu, pokoknya aku dapat bonus itu dari NPC Jawa Barat sama NPC Kota Bandung,” ujarnya."}
      </p>

      {/* Lovita Video Card player */}
      <LovitaVideoCard />

      <p className={articleParagraphClass} key="paragraph-27">
        {"Dalam pengalaman Lovita, kesejahteraan ekonomi atlet tidak hanya berkaitan dengan ada atau tidaknya bonus. Sebagai atlet yang merantau dari Lampung ke Bandung, ia juga menjalani keseharian tanpa dukungan keluarga secara langsung. Keluarganya tetap mendukung, tetapi bentuknya lebih banyak berubah doa dan komunikasi jarak jauh."}
      </p>

      <p className={articleParagraphClass} key="paragraph-eva">
        {"Di cabang olahraga lain, ada Eva Arianti, seorang atlet panahan yang memanfaatkan bonus pencapaian medali menjadi modal usaha bersama suaminya. Menurutnya, penghasilan dalam menempuh karir atlet belum bisa menjadi penghasilan utama. Honorarium yang turun secara tidak pasti, membuatnya harus mencari penghasilan lain."}
      </p>

      {/* Eva direct statement block with image & VN player */}
      <p className={articleParagraphClass} key="paragraph-eva-quote">
        {"“Kebetulan saya di rumah buka tempat gym. Karena suami saya juga kebetulan atlet, NPCI juga. Dia atlet angkat berat. Sebelum saya kan dia udah mulai duluan. Jadi tiap kita mendapatkan prestasi, bonus itu kita modalkan ke usaha kita. Sama, ada bikin motor roda tiga gitu kayak reseller alat-alat fitness gitu,” cerita Eva."}
      </p>

      <div className="max-w-xs mx-auto my-6">
        <VoiceNoteCard 
          audioSrc="/audio/eva-arianti.mp3"
          speakerName="Eva Arianti"
          speakerRole="Atlet Panahan NPCI Kota Bandung"
          imageSrc="/Eva Ariyanti.jpeg"
        />
      </div>

      <p className={articleParagraphClass} key="paragraph-29">
        {"Di balik konflik kekurangan dana pribadi bagi para atlet, terdapat literasi keuangan yang masih harus ditingkatkan yang juga menjadi permasalahan. Tanpa literasi keuangan yang baik, para atlet akan kesulitan untuk mengelola dan memanfaatkan dana pribadi untuk memenuhi kebutuhan sehari-hari, terlebih lagi ketika mendapatkan bonus saat menjadi juara di suatu pertandingan."}
      </p>

      <h2 className={articleHeadingClass} key="heading-literasi">
        {"LITERASI KEUANGAN SEBAGAI ILUSI JAWABAN KESEJAHTERAAN"}
      </h2>

      <p className={articleParagraphClass} key="paragraph-31">
        {"Bonus sering menjadi bentuk penghargaan paling berkesan dalam karier atlet. Ketika atlet meraih medali, angka bonus dapat muncul sebagai simbol keberhasilan. Namun, uang yang datang dalam jumlah besar tidak selalu diikuti dengan pendampingan untuk mengelolanya."}
      </p>

      <p className={articleParagraphClass} key="paragraph-32">
        {"Di skala nasional, Jonna melihat persoalan ini sebagai bagian dari masalah pascakarier atlet. Menurutnya, banyak atlet mendapat perhatian besar setelah ketika masih berprestasi, tetapi kembali menghadapi kesulitan ekonomi setelah masa produktifnya berakhir. Salah satu hal yang ia soroti adalah literasi keuangan."}
      </p>

      <p className={articleParagraphClass} key="quote-34">
        {"“Selain itu, ada persoalan yang menurut saya sangat penting, yaitu literasi keuangan. Banyak atlet, baik disabilitas maupun non-disabilitas, mendapatkan bonus yang sangat besar ketika berprestasi. Satu medali emas tingkat ASEAN saja bisa bernilai satu miliar rupiah,” ujar Jonna."}
      </p>

      <p className={articleParagraphClass} key="paragraph-36">
        {"NPCI Kota Bandung sendiri masih belum menyediakan pelatihan literasi keuangan yang dapat membantu para atlet untuk mengelola serta memanfaatkan dana pribadi dan bonus yang mereka dapatkan. Komisioner Komisi Nasional Disabilitas (KND) Jonna Aman Damanik menyebutkan bahwa literasi keuangan merupakan hal yang sangat penting untuk dikuasai. Menurutnya, banyak atlet yang mendapatkan bonus besar, tetapi tidak memiliki kemampuan untuk mengelola uang dengan baik."}
      </p>

      <p className={articleParagraphClass} key="quote-37">
        {"“...yang paling penting menurut saya adalah literasi keuangan. Banyak atlet mendapatkan bonus besar, tetapi tidak memiliki kemampuan mengelola keuangan dengan baik. Akhirnya setelah beberapa tahun kondisi ekonominya kembali sulit. Karena itu sekarang Kemenpora bekerja sama dengan OJK untuk memberikan pendidikan literasi keuangan kepada para atlet,” jelas Jonna."}
      </p>

      {/* Jonna Damanik Audio VN card */}
      <div className="max-w-xs mx-auto my-6">
        <VoiceNoteCard 
          audioSrc="/audio/jonna-literasi-keuangan.mp3"
          speakerName="Jonna Aman Damanik"
          speakerRole="Komisioner Komisi Nasional Disabilitas (KND)"
          imageSrc="/uploads/9ee61479be07118e6f3170b0b7197bb1.jpg"
        />
      </div>

      <p className={articleParagraphClass} key="paragraph-39">
        {"Beban pengelolaan keuangan terlihat banyak berada di tangan atlet. Ketika pemasukan tidak datang setiap bulan, atlet harus mengatur uang yang diterima agar cukup sampai pencapaian berikutnya. Dalam situasi seperti ini, literasi keuangan menjadi jawaban sementara saat mereka menerima uang pembinaan yang tidak rutin. Namun tidak cukup untuk menjadi jawaban atas masalah ketidaksejahteraan para atlet yang berakar pada permasalahan struktural dalam dunia olahraga nasional."}
      </p>

      {/* Financial Literacy Steps visual */}
      <FinancialLiteracySteps />
    </>
  );
}
