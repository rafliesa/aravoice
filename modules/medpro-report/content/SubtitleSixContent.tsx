"use client";

import { articleHeadingClass, articleParagraphClass } from "@/modules/medpro-report/component/articleContentClasses";
import TotoVideoCard from "@/modules/medpro-report/component/TotoVideoCard";
import LovitaVideoCard from "@/modules/medpro-report/component/LovitaVideoCard";
import YuliaQuoteCard from "@/modules/medpro-report/component/YuliaQuoteCard";

export default function SubtitleSixContent() {
  return (
    <>
      <p className={articleParagraphClass} key="paragraph-0">
        {"Bagi sebagian atlet, medali tidak hanya berarti prestasi. Di baliknya terdapat bonus, uang pembinaan, hingga peluang untuk kembali dipanggil demi memperkuat daerah dalam kompetisi selanjutnya. Karena itu, setiap pertandingan tidak hanya menjadi ajang pembuktian kemampuan, tetapi juga menghadirkan tekanan psikologis yang berkaitan dengan keberlangsungan hidup mereka."}
      </p>

      <div className="my-6 pl-4 border-l-4 border-secondary-500 italic text-base text-zinc-700 bg-zinc-50 py-3.5 pr-4 rounded-r-xl font-sans">
        “Saat mereka kalah, ini perlu dibesarkan hatinya karena takut mengecewakan tim dan kepikiran bonusnya ga dapet jadi kecewa dan takut gak dipanggil lagi,”
        <span className="block not-italic text-xs font-bold text-zinc-500 mt-2">
          — Yulia Sahaja Dewi Permatasari, Psikolog klinis pendamping atlet disabilitas ASEAN Para Games 2018
        </span>
      </div>

      <p className={articleParagraphClass} key="paragraph-5">
        {"Menurut Yulia, pikiran-pikiran semacam itu kerap muncul setelah pertandingan. Dalam fase tersebut, atlet membutuhkan dukungan psikologis untuk menerima hasil, mengelola emosi, dan membangun kembali motivasi. Ia juga melihat kebutuhan pendampingan muncul sebelum pertandingan, ketika atlet menghadapi tekanan untuk mempertahankan prestasi sebelumnya atau memenuhi ekspektasi tinggi."}
      </p>

      <p className={articleParagraphClass} key="paragraph-6">
        {"Tekanan itu tidak berdiri sendiri. Pada beberapa atlet, beban mental justru datang dari luar arena. Ono juga menyebut tekanan terbesarnya bukan berasal dari latihan, melainkan dari faktor lain."}
      </p>

      <div className="my-6 pl-4 border-l-4 border-secondary-500 italic text-base text-zinc-700 bg-zinc-50 py-3.5 pr-4 rounded-r-xl font-sans">
        “Namanya juga hidup pasti ada tekanan mental. Tapi tekanan saya bukan dari latihan. Justru dari luar latihan. Biasanya masalah ekonomi keluarga,”
        <span className="block not-italic text-xs font-bold text-zinc-500 mt-2">
          — Ono Saipudin, Atlet Angkat Berat
        </span>
      </div>

      <p className={articleParagraphClass} key="paragraph-10">
        {"Untuk mengatasi masalah tersebut, Ono memiliki pekerjaan lain di luar olahraga, yaitu bertani konvensional dan hidroponik serta membuka pengobatan alternatif di rumah. Ia mengaku, penghasilan dari usaha itu tidak selalu stabil, tidak jauh berbeda dari penghasilannya sebagai atlet. Namun dalam waktu yang bersamaan, Ono menyatakan bahwa ketidakstabilan tersebut tetap menjadi beban."}
      </p>

      <p className={articleParagraphClass} key="paragraph-12">
        {"Dari sisi keluarga, Toto, pendamping sekaligus suami atlet Ten Pin Bowling, Asti, melihat kondisi rumah ikut mempengaruhi performa atlet di arena. Menurutnya, kemampuan mengelola emosi tidak bisa dilepaskan dari lingkungan rumah dan dukungan orang terdekat."}
      </p>

      <div className="my-6 pl-4 border-l-4 border-secondary-500 italic text-base text-zinc-700 bg-zinc-50 py-3.5 pr-4 rounded-r-xl font-sans">
        “Ketika emosi Ibu di rumah tidak stabil, dalam artian misalkan mempunyai satu permasalahan, itu terlihat sekali pada waktu Ibu bermain. Kadang dia lemparannya menjadi terlalu cepat, atau kadang-kadang tidak ada semangat. Itu pengaruh sekali,”
        <span className="block not-italic text-xs font-bold text-zinc-500 mt-2">
          — Toto, Suami &amp; Pendamping Asti (Atlet Ten Pin Bowling)
        </span>
      </div>

      <p className={articleParagraphClass} key="paragraph-15">
        {"Toto menyebut dukungan lingkungan terdekat menjadi dasar penting untuk membangun kepercayaan diri atlet. Ia juga mengingatkan agar olahraga tidak menjadi beban berlebihan bagi atlet. Menurut Toto, prestasi itu bukan tujuan utama, tapi tetap bermain dengan baik."}
      </p>

      <p className={articleParagraphClass} key="quote-toto-support">
        {"“Kalau saya, sesuai dengan karena hidup dengan Ibu itu istilahnya betul-betul kita jalankan. Men-support yang paling utama adalah janganlah olahraga itu dijadikan beban. Prestasi itu bukan tujuan utama, tapi bermainlah dengan baik. Pendekatan-pendekatan seperti itulah yang membuat semangat Ibu tidak merasa terabaikan, tidak merasa jauh dengan siapa. Akhirnya bermain pun dia nothing to lose. Dan di situ main akan kelihatan progresif.”"}
      </p>

      {/* Toto Video Interview Card */}
      <TotoVideoCard />

      <p className={articleParagraphClass} key="paragraph-16">
        {"Ketika prestasi menjadi peluang pendapatan lebih, hal ini memberikan tekanan psikologis para atlet untuk terus meraih medali di ajang pertandingan. Tekanan ini sangat mempengaruhi performa atlet saat latihan maupun kompetisi. Menurut Yulia, pengaruh mental terhadap performa atlet saat bertanding bisa mencapai 80 persen. Bahkan saat semua persiapan sudah dilakukan selama latihan, masih ada atlet yang mengkhawatirkan kekalahan yang belum tentu terjadi."}
      </p>

      <h2 className={articleHeadingClass} key="heading-stigma">
        {"BELAS KASIHAN YANG MEMBUNUH MENTAL"}
      </h2>

      <p className={articleParagraphClass} key="paragraph-18">
        {"Selain tekanan ekonomi, tekanan sosial juga menjadi bagian dari beban psikologis atlet disabilitas. Jonna menyebut stigma sebagai tantangan berat dalam isu disabilitas. Menurutnya, stigma lahir dari cara pandang yang keliru terhadap penyandang disabilitas."}
      </p>

      <div className="my-6 pl-4 border-l-4 border-secondary-500 italic text-base text-zinc-700 bg-zinc-50 py-3.5 pr-4 rounded-r-xl font-sans">
        “Advokasi paling berat dalam isu disabilitas adalah stigma. Stigma lahir dari paradigma yang tidak tepat dalam memandang penyandang disabilitas. Selama ini banyak masyarakat melihat disabilitas dengan pendekatan belas kasihan, ketidakmampuan, atau menganggap penyandang disabilitas tidak bisa berprestasi,”
        <span className="block not-italic text-xs font-bold text-zinc-500 mt-2">
          — Jonna Aman Damanik, Komisioner Komisi Nasional Disabilitas (KND)
        </span>
      </div>

      <p className={articleParagraphClass} key="paragraph-22">
        {"Bagi atlet, stigma itu bisa muncul dalam komentar sederhana yang mempertanyakan kemampuan mereka. Randi, atlet bulu tangkis NPCI Kota Bandung, pernah mengalami tekanan semacam itu. Ia menyebut ada orang yang meragukan kemampuannya bermain karena kondisi fisiknya."}
      </p>

      <div className="my-6 pl-4 border-l-4 border-secondary-500 italic text-base text-zinc-700 bg-zinc-50 py-3.5 pr-4 rounded-r-xl font-sans">
        “Kadang ada yang ngomong, “Tangan kamu begitu, memang kamu bisa main bulu tangkis?” Tapi saya nggak masukin ke hati. Biarin saja. Yang penting saya bisa membuktikan kalau kita harus juara,”
        <span className="block not-italic text-xs font-bold text-zinc-500 mt-2">
          — Randi, Atlet Bulu Tangkis NPCI Kota Bandung
        </span>
      </div>

      <p className={articleParagraphClass} key="paragraph-26">
        {"Randi memilih tidak menanggapi komentar tersebut dengan sabar agar tidak mengganggu fokusnya saat bertanding. Namun, ia mengakui bahwa omongan semacam itu tetap bisa muncul sebagai tekanan mental."}
      </p>

      <p className={articleParagraphClass} key="paragraph-27">
        {"Stigma juga dapat hadir dalam bentuk yang sistemik. Lovita menyadari bahwa diskriminasi juga muncul dari ruang kota yang belum sepenuhnya aksesibel. Ia menyebut Bandung belum 100 persen inklusif. Trotoar, guiding block, parkir kendaraan, dan pot besar yang menghalangi jalur bisa menjadi pengalaman harian bagi yang tunanetra. Lovita juga mencontohkan pengalaman ketika tongkatnya tidak sengaja menyenggol kendaraan yang parkir di bahu jalan."}
      </p>

      {/* Lovita Trotoar Video note */}
      <LovitaVideoCard 
        videoSrc="/uploads/VID LOVITA.mp4"
        title="AKSESIBILITAS TROTOAR & GUIDING BLOCK"
        description="Lovita menceritakan tantangan harian tunanetra menavigasi trotoar Bandung yang terhalang pot dan kendaraan"
      />

      <div className="my-6 pl-4 border-l-4 border-secondary-500 italic text-base text-zinc-700 bg-zinc-50 py-3.5 pr-4 rounded-r-xl font-sans">
        “Jadi, inklusi itu kadang orang salah, dianggapnya disabilitas harus inklusi, tapi seharusnya yang normal harus inklusi pada disabilitas. Memahami siapa disabilitas. Karena orang disabilitasnya itu memahami yang normal itu udah banyak. Tapi yang normal bisa memahami yang disabilitas,”
        <span className="block not-italic text-xs font-bold text-zinc-500 mt-2">
          — Pak Toto, Suami &amp; Pendamping Asti
        </span>
      </div>

      <h2 className={articleHeadingClass} key="heading-psikologi">
        {"PSIKOLOGI YANG MASIH DIPANDANG SEBELAH MATA"}
      </h2>

      <p className={articleParagraphClass} key="paragraph-31">
        {"Di setiap cabang olahraga, pasti ada atlet yang menjadi unggulan tim. Ia yang memiliki performa tinggi dan selalu meraih prestasi yang berlimpah. Kebanggaan ini diselimuti dengan tekanan untuk memberikan performa terbaik, khususnya dari pelatih. Terlebih lagi para pelatih yang hanya fokus pada kondisi fisik dan teknik pada performa atlet, namun seringkali tidak menyadari kondisi mental atlet yang bergoyah, apalagi ketika hari pertandingan."}
      </p>

      <p className={articleParagraphClass} key="paragraph-32">
        {"Hal tersebut juga didukung dengan status psikolog olahraga yang masih dipandang sebagai pelengkap, bukan prioritas dalam pemberdayaan atlet.  Keterlibatan psikolog dalam olahraga disabilitas sendiri baru mulai diperhatikan beberapa tahun terakhir. Berdasarkan pengalaman Yulia saat ASEAN Para Games 2022 di Solo, Indonesia, hanya ada sekitar sepuluh psikolog yang turun langsung mendampingi para atlet. Sementara pada saat ASEAN Para Games 2023 di Kamboja, hanya dua psikolog yang diberangkatkan untuk mendampingi para atlet yang bertanding."}
      </p>

      {/* Yulia quote side-by-side card */}
      <YuliaQuoteCard 
        quote="Saat ini pun keterlibatan psikolog masih terbatas pada cabang olahraga tertentu. Ada beberapa cabang yang sudah menggandeng psikolog secara aktif, tetapi belum merata di semua cabang olahraga."
        imageSrc="/yulia.jpg"
      />

      <p className={articleParagraphClass} key="paragraph-34">
        {"Keterbatasan itu juga terlihat dari waktu pendampingan. Pada pengalaman Yulia di ASEAN Para Games 2022, hadirnya psikolog olahraga sebagai pendamping terbilang terlambat karena baru diturunkan empat hari sebelum kegiatan dimulai. Hal ini mempersulit para psikolog untuk membangun rasa kepercayaan dari para atlet, khususnya kepada atlet yang sebetulnya membutuhkan pendampingan psikologis tetapi tidak terbuka dengan psikolog yang hadir karena kurangnya rasa percaya."}
      </p>

      <div className="my-6 pl-4 border-l-4 border-secondary-500 italic text-base text-zinc-700 bg-zinc-50 py-3.5 pr-4 rounded-r-xl font-sans">
        “Meski demikian, pendampingan yang dilakukan sejak masa training center tentu akan lebih ideal. Dengan waktu yang lebih panjang, psikolog dapat memahami karakter atlet secara lebih mendalam, menyusun program yang sesuai, serta membangun kesiapan mental secara bertahap,”
        <span className="block not-italic text-xs font-bold text-zinc-500 mt-2">
          — Yulia Sahaja Dewi Permatasari, Psikolog Klinis
        </span>
      </div>

      <p className={articleParagraphClass} key="paragraph-37">
        {"Menurutnya, hambatan lainnya adalah psikolog olahraga belum memiliki sistem legalitas yang kuat di Indonesia. Ia melihat peran psikolog belum dianggap sebagai kebutuhan utama atau sesuatu yang mendesak."}
      </p>

      <p className={articleParagraphClass} key="paragraph-38">
        {"NPCI Kota Bandung sendiri tidak memiliki psikolog atau layanan psikologis khusus para atlet. Djumono menyebutkan bahwa psikolog biasanya disiapkan saat event besar seperti Peparda melalui kerja sama dengan Dinas Kesehatan dan tim kontingen. Namun, di luar momen event besar, beberapa pelatih dan pendamping menyebut pendampingan khusus belum terlihat rutin."}
      </p>

      <p className={articleParagraphClass} key="paragraph-40">
        {"Bambang juga mengatakan belum ada pendampingan psikologis khusus yang ia lihat secara langsung. Selama ini, atlet lebih banyak saling menguatkan sebagai teman."}
      </p>

      <div className="my-6 pl-4 border-l-4 border-secondary-500 italic text-base text-zinc-700 bg-zinc-50 py-3.5 pr-4 rounded-r-xl font-sans">
        “Belum ada secara khusus. Padahal menurut saya itu penting, misalnya menyediakan psikolog olahraga untuk membantu kondisi mental atlet. Sejauh ini kami lebih banyak saling menguatkan sebagai teman,”
        <span className="block not-italic text-xs font-bold text-zinc-500 mt-2">
          — Bambang Basuki, Pelatih Ten Pin Bowling
        </span>
      </div>

      <p className={articleParagraphClass} key="paragraph-43">
        {"Toto menilai pendampingan idealnya psikologis perlu hadir sejak awal proses latihan, bukan hanya setelah atlet mengalami tekanan atau kegagalan. Menurutnya, tekanan tidak terkelola setelah pertandingan dapat membuat atlet drop, sementara tekanan pertandingannya bisa membuat atlet “kalah duluan” secara mental."}
      </p>

      <div className="my-6 pl-4 border-l-4 border-secondary-500 italic text-base text-zinc-700 bg-zinc-50 py-3.5 pr-4 rounded-r-xl font-sans">
        “Yang berbahaya adalah ketika pressure-nya itu setelah bertanding. Jadi dia tidak ter-manage tuh. Dan di kalangan atlet banyak. Karena apa? Dari awal tidak ada pendampingan. Jadi ketika akhir pertandingan selesai, dia drop. Atau sebelum pertandingan dia sudah kalah duluan mentalnya,”
        <span className="block not-italic text-xs font-bold text-zinc-500 mt-2">
          — Toto, Suami &amp; Pendamping Asti
        </span>
      </div>
    </>
  );
}
