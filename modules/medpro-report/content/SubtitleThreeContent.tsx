"use client";

import GrantFlowInfographic from "@/modules/medpro-report/component/GrantFlowInfographic";
import GrantTrendChart from "@/modules/medpro-report/component/GrantTrendChart";
import LawReferenceLink, {
  lawReferenceUrls,
} from "@/modules/medpro-report/component/LawReferenceLink";
import { articleHeadingClass, articleParagraphClass } from "@/modules/medpro-report/component/articleContentClasses";

import Uu112022Pasal79Link from "@/modules/medpro-report/component/Uu112022Pasal79Link";
import Uu112022Pasal60Link from "@/modules/medpro-report/component/Uu112022Pasal60Link";
import KoniNpciCardComparison from "@/modules/medpro-report/component/KoniNpciCardComparison";
import PreviewableCollage from "@/modules/medpro-report/component/PreviewableCollage";
import VoiceNoteCard from "@/modules/medpro-report/component/VoiceNoteCard";

export default function SubtitleThreeContent() {
  return (
    <>
      <p className={articleParagraphClass} key="paragraph-0">
        {"Keterbatasan fasilitas yang dihadapi atlet disabilitas tidak dapat dilepaskan dari persoalan pendanaan. Meski NPCI Kota Bandung setiap tahun mendapatkan anggaran dari Dispora Kota Bandung, dana tersebut harus dibagi ke berbagai kebutuhan organisasi, mulai dari pembinaan atlet, penyelenggaraan kompetisi, operasional lembaga, hingga pengadaan sarana pendukung. Kondisi ini membuat pemenuhan kebutuhan atlet kerap bergantung pada skala prioritas yang ditetapkan setiap tahun."}
      </p>

      <p className={articleParagraphClass} key="paragraph-2">
        {"Di Kota Bandung, pendanaan olahraga disabilitas melibatkan sejumlah lembaga yang memiliki fungsi yang berbeda. Dispora berperan sebagai perangkat daerah yang mengelola dan menyalurkan anggaran pembinaan olahraga melalui mekanisme hibah. Sementara itu, NPCI Kota Bandung bertindak sebagai organisasi yang menjalankan program pembinaan atlet disabilitas, mulai dari latihan rutin, pengiriman atlet ke kompetisi, hingga pengembangan cabang olahraga."}
      </p>

      <p className={articleParagraphClass} key="paragraph-4">
        {"Meski sama-sama bergerak di bidang olahraga, hubungan antara Dispora dan NPCI bukanlah hubungan hirarkis. Dispora menempatkan NPCI sebagai mitra yang menerima hibah untuk menjalankan program kerja organisasi. Selain NPCI, organisasi olahraga lain seperti KONI juga menerima dukungan serupa sesuai bidang dan kebutuhan masing-masing."}
      </p>

      {/* Grant Flow Infographic */}
      <GrantFlowInfographic />

      <div className={articleParagraphClass} key="paragraph-8">
        {"Penyaluran dana hibah telah ditetapkan dalam "}
        <Uu112022Pasal79Link>
          UU Nomor 11 Tahun 2022 tentang Keolahragaan Pasal 79
        </Uu112022Pasal79Link>
        {" yang menjelaskan bahwa alokasi hibah yang diberikan harus sesuai dengan kemampuan keuangan daerah dan mempertimbangkan target capaian. Pada proses pengalokasian dana hibah tersebut, berbagai kebutuhan organisasi mulai diseleksi berdasarkan skala prioritas. Tidak seluruh usulan dapat diakomodasi secara penuh karena besaran hibah yang diberikan harus disesuaikan dengan kondisi keuangan daerah serta kebutuhan sektor lain yang juga dibiayai melalui APBD."}
      </div>

      <p className={articleParagraphClass} key="paragraph-9">
        {"Meski besaran hibah 2026 telah ditetapkan pada nominal Rp5 miliar, dana tersebut tidak langsung diterima secara penuh dan akan diturunkan secara bertahap. Hingga bulan Maret 2026 lalu, NPCI Kota Bandung baru menerima pencairan tahap pertama sebesar 55 persen atau sekitar Rp2,61 miliar. Sisa anggaran baru dapat dicairkan setelah organisasi menyelesaikan laporan pertanggungjawaban dan melalui proses verifikasi dari Dispora Kota Bandung."}
      </p>

      <p className={articleParagraphClass} key="paragraph-10">
        {"Skema pencairan bertahap ini memaksa NPCI harus menyesuaikan kembali prioritas penggunaan anggaran. Penyesuaian dana hibah ini diperburuk oleh kebijakan efisiensi anggaran yang diberlakukan pada tahun 2026. Bagi ekosistem olahraga disabilitas, kebijakan tersebut menjalar sampai ke ruang-ruang latihan, mempengaruhi kualitas pembinaan, memangkas waktu latihan, hingga menjadi panitia teknis Peparda Jawa Barat 2026 yang akan terlaksana di Kota Bandung."}
      </p>

      {/* Interactive Trend Chart with Full Rupiah Tooltips */}
      <div className="my-8">
        <GrantTrendChart />
      </div>

      <p className={articleParagraphClass} key="paragraph-12">
        {"Seiring tahun berganti, dana hibah NPCI Kota Bandung bergerak dalam ruang yang terbatas. Ketika nominal hibah akhirnya meningkat, kebutuhan organisasi juga bertambah. Dana yang diterima tidak hanya digunakan untuk pembinaan atlet, tetapi juga harus dibagi untuk kebutuhan operasional, penyelenggaraan kegiatan, pengadaan sarana, hingga persiapan menghadapi Pekan Paralimpik Daerah (Peparda) Jawa Barat 2026."}
      </p>

      <p className={articleParagraphClass} key="paragraph-14">
        {"Dana hibah yang didapatkan NPCI Kota Bandung menunjukkan adanya penyesuaian yang cukup signifikan pada tahun ini. Bendahara NPCI Kota Bandung, Komarudin, menyebut lembaganya sempat mengajukan anggaran sekitar Rp15 miliar. Namun, setelah adanya efisiensi tingkat nasional dan evaluasi pemerintah provinsi, besaran hibah yang diterima menyusut menjadi Rp5 miliar."}
      </p>

      {/* Highlighted Quote Komarudin */}
      <div className="my-6 pl-4 border-l-4 border-secondary-500 italic text-base text-zinc-700 bg-zinc-50 py-3.5 pr-4 rounded-r-xl font-sans">
        “Bahwa angka awal masih dulu itu 15 (miliar). Tapi kalau efisiensi tingkat nasional itu dipotong jadi 9,5 (miliar). 9,5 (miliar) kena evaluasi gubernur. Karena harus ngurus sama Pak Gubernur. Karena dia yang meloloskan, yang menandatangani. Kalau tidak ada pemotongan itu, kalau tidak ada efisiensi lagi, kalau kita masih Alhamdulillah gitu kan. Belum sampai 5 miliar.”
        <span className="block not-italic text-xs font-bold text-zinc-500 mt-2">
          — Komarudin, Bendahara NPCI Kota Bandung
        </span>
      </div>

      <p className={articleParagraphClass} key="paragraph-17">
        {"Sekretaris Umum NPCI Kota Bandung, Djumono, juga mengakui bahwa lembaganya ikut merasakan dampak dari kebijakan tersebut. Terlebih lagi relokasi kegiatan Peparda 2026 yang ditetapkan secara mendadak dari Kabupaten Indramayu ke Kota Bandung. Permasalahan tersebut, membuat NPCI Kota Bandung terpaksa melakukan pengetatan anggaran agar seluruh kebutuhan dasar pembinaan tetap dapat berjalan."}
      </p>

      <h2 className={articleHeadingClass} key="heading-peparda">
        {"MENUJU PEPARDA"}
      </h2>

      <p className={articleParagraphClass} key="paragraph-peparda-1">
        {"Peparda Jawa Barat 2026 menjadi titik yang memperlihatkan bagaimana kebutuhan anggaran bergerak melampaui pembinaan rutin. Ketika Kota Bandung ditetapkan sebagai tuan rumah menggantikan Kabupaten Indramayu, beban pendanaan tidak lagi berhenti pada latihan atlet, operasional organisasi, atau pengiriman kontingen. Kota Bandung juga harus masuk ke dalam panitia penyelenggara."}
      </p>

      <p className={articleParagraphClass} key="paragraph-peparda-2">
        <a 
          href="https://sumedang.pikiran-rakyat.com/olahraga/pr-569972488/peparda-2026-pindah-ke-bandung-usai-indramayu-mundur"
          target="_blank" 
          rel="noopener noreferrer"
          className="font-bold text-secondary-800 underline hover:text-secondary-600"
        >
          Perpindahan tuan rumah dari Indramayu ke Kota Bandung
        </a>
        {" tidak dapat dilepaskan dari persoalan kesiapan anggaran. Indramayu sebelumnya telah ditetapkan sebagai lokasi penyelenggaraan, tetapi rencana tersebut dihadapkan pada keterbatasan dana dan kesiapan fasilitas. Kebutuhan penyelenggaraan Peparda yang mencapai belasan miliar rupiah membuat pelaksanaan di Indramayu sulit dipertahankan."}
      </p>

      <p className={articleParagraphClass} key="paragraph-peparda-3">
        {"Bagi Komarudin, penetapan Kota Bandung sebagai tuan rumah membawa dua tanggungan sekaligus. Di satu sisi, Kota Bandung tetap harus menyiapkan kontingen atlet untuk bertanding. Di sisi lain, kota ini juga harus menjalankan fungsi sebagai tuan rumah yang terlibat dalam kepanitiaan teknis penyelenggaraan."}
      </p>

      <p className={articleParagraphClass} key="paragraph-peparda-4">
        {"Dalam struktur panitia, NPCI Kota Bandung berkolaborasi dengan pemerintah daerah dan masyarakat untuk mendukung keberlangsungan Peparda Jawa Barat 2026. Posisi ini membuat NPCI Kota Bandung tidak hanya memikirkan kesiapan atlet, tetapi juga ikut masuk dalam kebutuhan teknis penyelenggaraan sebagai tuan rumah."}
      </p>

      <p className={articleParagraphClass} key="paragraph-peparda-5">
        {"“Provinsi kurang lebih menyediakan anggaran 7 miliar dan kita kurang lebih 14 miliar,” lanjut Komarudin."}
      </p>

      <p className={articleParagraphClass} key="paragraph-peparda-6">
        {"Perhitungan kebutuhan anggaran Peparda Jawa Barat 2026 diperkirakan mencapai sekitar Rp21 miliar. Dari jumlah tersebut, pemerintah provinsi disebut menyiapkan sekitar Rp7 miliar, sedangkan Pemerintah Kota Bandung diharapkan menanggung sekitar Rp14 miliar. Namun, angka itu belum sepenuhnya final karena masih harus melewati proses pembahasan dan persetujuan di tingkat daerah."}
      </p>

      <h2 className={articleHeadingClass} key="heading-inklusif">
        {"MENUJU DUNIA OLAHRAGA YANG LEBIH INKLUSIF?"}
      </h2>

      <div className={articleParagraphClass} key="paragraph-inklusif-1">
        {"Di atas kertas, kesetaraan atlet disabilitas dan non-disabilitas kerap dibaca dari besaran bonus medali. Hal ini tertulis pada "}
        <Uu112022Pasal60Link>
          UU No 11 Tahun 2022 tentang Keolahragaan Pasal 60 ayat 2e
        </Uu112022Pasal60Link>
        {" yang menyebutkan bahwa setiap olahragawan berhak mendapatkan hak yang sama untuk memperoleh penghargaan sesuai prestasi yang dicapai. Dalam praktiknya, "}
        <a 
          href="https://www.kemenpora.go.id/detail/5566/atlet-disabilitas-punya-hak-yang-sama-kemenpora-ri-tegaskan-komi" 
          target="_blank" 
          rel="noopener noreferrer"
          className="font-bold text-secondary-800 underline hover:text-secondary-600"
        >
          Kemenpora juga menyatakan bonus atlet
        </a>
        {" penyandang disabilitas berprestasi telah disetarakan dengan atlet non-disabilitas. Namun, kesetaraan bonus tidak berarti kesetaraan dalam proses pembinaan sehari-hari. Di titik inilah perbedaan dana antara KONI dan NPCI menjadi benang merah ketimpangan."}
      </div>

      <p className={articleParagraphClass} key="paragraph-inklusif-2">
        {"Wakil Ketua 2 KONI Kota Bandung, Mulyana, menyebutkan bahwa organisasinya memiliki sekitar 81 cabang olahraga. Ia juga menyebutkan dana yang diterima pada untuk tahun 2026 berada berkisar Rp35 miIiar setelah adanya efisiensi. Dana tersebut digunakan untuk pembinaan termasuk dukungan BPJS, beasiswa, uang saku, serta program tunjangan prestasi dan pelatihan cabor (pelatcab) bagi atlet yang berprestasi. Meski begitu, pihak KONI tetap menilai pemotongan anggaran memberi tekanan besar karena pembinaan atlet membutuhkan biaya rutin untuk latihan, tempat, transportasi, hingga akomodasi."}
      </p>

      <p className={articleParagraphClass} key="paragraph-inklusif-3">
        {"Di sisi lain, NPCI Kota Bandung menerima dana yang jauh lebih kecil. Komarudin, Bendahara NPCI Kota Bandung, menyebut lembaganya hanya mendapatkan dana sebesar Rp5 miliar setelah efisiensi. Dengan dana tersebut, NPCI Kota Bandung tetap harus membiayai pembinaan 17 cabang olahraga dan menyeleksi 516 atlet menjadi 250 atlet kontingen untuk Peparda Jawa Barat 2026. Tidak hanya itu, peralatan tambahan yang dibutuhkan atlet disabilitas tentu saja lebih beragam jika dibandingkan dengan atlet non-disabilitas, seperti kursi roda, alat penyangga, dan lain sebagainya."}
      </p>

      {/* Iman Jabar Statement & Audio VN */}
      <div className="my-6 pl-4 border-l-4 border-secondary-500 italic text-base text-zinc-700 bg-zinc-50 py-3.5 pr-4 rounded-r-xl font-sans">
        “Ternyata seharusnya, seharusnya. Jadi dana atlet disabilitas agak lebih besar daripada dana ke atlet olahraga lain (atlet non-disabilitas). Kenapa? Satu atlet butuh pelatih, butuh pendamping. Pendamping inilah yang harus memahami atlet. Entah itu psikologis dan kebutuhan. Sehingga, dana kita selain untuk menggaji honor pelatih, ya juga untuk honor pendamping,”
        <span className="block not-italic text-xs font-bold text-zinc-500 mt-2">
          — Iman Imanudin, Kepala Bidang Pembinaan Prestasi NPCI Jawa Barat
        </span>
      </div>

      <div className="max-w-xs mx-auto my-6">
        <VoiceNoteCard 
          audioSrc="/3/Iman - NPCI Jabar.mp3"
          speakerName="Iman Imanudin"
          speakerRole="Kabid Binpres NPCI Jawa Barat"
          imageSrc="/uploads/9ee61479be07118e6f3170b0b7197bb1.jpg"
        />
      </div>

      <p className={articleParagraphClass} key="paragraph-inklusif-4">
        {"Perbandingan ini menunjukkan bahwa masalahnya tidak terletak pada besaran nominal, tetapi kebutuhan pembinaan atlet disabilitas yang lebih kompleks. Jika dilihat secara sekilas, 17 cabang olahraga dengan dana Rp5 miliar mungkin terlihat proporsional dibanding KONI yang menaungi 80 cabang olahraga dengan dana sekitar Rp35 miliar. Namun perbandingan itu tidak sepenuhnya setara. Seperti yang disebutkan oleh Iman, dalam olahraga disabilitas memiliki kebutuhan yang lebih kompleks dibandingkan olahraga non-disabilitas."}
      </p>

      {/* KONI vs NPCI Card Comparison component */}
      <KoniNpciCardComparison />

      <p className={articleParagraphClass} key="paragraph-inklusif-5">
        {"Ketimpangan tersebut semakin terasa ketika efisiensi anggaran masuk ke ruang latihan. Bagi NPCI Kota Bandung, pemangkasan bukan hanya angka di atas berkas, melainkan jadwal latihan yang berkurang, alat yang perawatannya mahal, dan ketidakpastian insentif menunggu program berjalan."}
      </p>

      <h2 className={articleHeadingClass} key="heading-efisiensi">
        {"EFISIENSI DAN KONTRADIKSI MENUJU PEPARDA"}
      </h2>

      <p className={articleParagraphClass} key="paragraph-efisiensi-1">
        {"Efisiensi anggaran tidak hanya mempengaruhi perencanaan organisasi, tetapi juga mengubah ritme pembinaan atlet sehari-hari. Salah satu dampak yang paling terasa adalah berkurangnya intensitas latihan yang selama ini menjadi fondasi pembinaan olahraga disabilitas. Kontras dengan adanya Peparda Jawa Barat 2026 yang kian mendekat, intensitas latihan dan pembinaan atlet NPCI Kota Bandung justru harus dipangkas."}
      </p>

      <p className={articleParagraphClass} key="paragraph-efisiensi-2">
        {"“Dampaknya (efisiensi anggaran) cukup besar. Biasanya pemusatan latihan dilakukan selama delapan sampai sepuluh bulan, tetapi karena efisiensi sekarang hanya sekitar empat sampai lima bulan,” jelas Yadi, Ketua Umum NPCI Kota Bandung."}
      </p>

      <p className={articleParagraphClass} key="paragraph-efisiensi-3">
        {"Pernyataan Yadi terkait pemusatan latihan juga didukung oleh Taofik Hidayat yang merupakan Bina Prestasi NPCI Kota Bandung yang menyatakan bahwa sebelumnya dalam satu minggu bisa melaksanakan latihan sebanyak empat sampai lima kali, namun dengan adanya efisiensi anggaran dan kebutuhan Peparda Jawa Barat 2026, dalam satu minggu hanya bisa melaksanakan latihan sebanyak dua sampai tiga kali. Hal tersebut berdampak pada perkembangan performa atlet yang menjadi monoton karena jeda yang terlalu lama."}
      </p>

      <p className={articleParagraphClass} key="paragraph-efisiensi-4">
        {"Meski latihan dipangkas, NPCI Kota Bandung tetap berupaya agar pembinaan tidak berhenti sepenuhnya. Bagi pengurus, latihan merupakan hal yang paling mendasar karena berhentinya pembinaan akan berdampak langsung pada performa atlet dan tingkat prestasi yang didapatkan bersama organisasi."}
      </p>

      <p className={articleParagraphClass} key="paragraph-efisiensi-5">
        {"“Karena kalau latihan berhenti ya selesai. Prestasi juga berhenti. Jadi yang kita jaga dulu itu latihan. Minimal atlet tetap datang latihan,” ucap Komarudin."}
      </p>

      <p className={articleParagraphClass} key="paragraph-efisiensi-6">
        {"Di tengah konflik anggaran, atlet pun juga terkena dampaknya. Insentif bagi atlet belum disalurkan oleh pihak organisasi. Hingga wawancara dilakukan, NPCI Kota Bandung masih harus menyelesaikan laporan pertanggungjawaban untuk diberikan ke Dispora Kota Bandung agar dapat menentukan besaran dan waktu pencairan tunjangan para atlet serta dana hibah di paruh tahun 2026, khususnya kepada mereka yang menjadi kontingen Peparda Jawa Barat 2026."}
      </p>

      {/* Komarudin statement and Audio VN */}
      <p className={articleParagraphClass} key="paragraph-efisiensi-7">
        {"“Rencana kita di bulan Juli. Rencana. Jadi kita harus berubah dulu. Menurut saya rapat dengan Dispora itu ada beberapa item yang harus kita ubah. Karena di Dispora istilahnya cara anggaran belum pasti. Ya anggaran belum pasti. Besaran ini berapa. Dispora itu belum tahu,” jelas Komarudin."}
      </p>

      <div className="max-w-xs mx-auto my-6">
        <VoiceNoteCard 
          audioSrc="/3/Komarudin ANGGARAN.wav"
          speakerName="Komarudin"
          speakerRole="Bendahara NPCI Kota Bandung"
          imageSrc="/uploads/9ee61479be07118e6f3170b0b7197bb1.jpg"
        />
      </div>

      <p className={articleParagraphClass} key="paragraph-efisiensi-8">
        {"Guna mengatasi permasalahan ini, NPCI Kota Bandung selalu berupaya memberikan fasilitas terbaik untuk para atlet. Salah satunya bantuan uang transportasi selama periode latihan. Ketika jadwal latihan padat, justru bukan stamina atlet yang menjadi permasalahan utama. Tetapi ongkos perjalanan menuju pusat latihan yang memberatkan bagi para atlet."}
      </p>

      <p className={articleParagraphClass} key="paragraph-efisiensi-9">
        {"“Karena paling terasa buat atlet. Kalau bonus kan nanti setelah pertandingan. Kalau ini kan mereka latihan tiap minggu. Jadi yang dirasakan sekarang ya transport itu. Makanya kita usahakan tetap ada. Walaupun jumlahnya belum besar,” jelas Komarudin."}
      </p>

      <p className={articleParagraphClass} key="paragraph-efisiensi-10">
        {"Hingga saat ini, pemasukan utama NPCI Kota Bandung masih bergantung pada dana hibah yang disalurkan oleh Dispora Kota Bandung. Hal ini membuat organisasi cukup sulit untuk mengalokasikan dana yang bisa dibilang masih kurang untuk memenuhi kebutuhan organisasi dan para atlet. Untuk mengatasi permasalahan tersebut, Dispora Kota Bandung menyarankan NPCI Kota Bandung agar tidak hanya bergantung pada dana hibah yang diberikan pemerintah daerah, tetapi juga mencari dukungan dana lain dan menggunakan kreativitas untuk mendapatkan solusi dalam menghadapi keterbatasan anggaran."}
      </p>

      <p className={articleParagraphClass} key="paragraph-efisiensi-11">
        {"“Sebenarnya organisasi juga bisa mencari dukungan lain. Misalnya sponsor, CSR perusahaan, dan sumber pendanaan lainnya. Kalau kebutuhan mereka sepuluh, lalu pemerintah hanya bisa memenuhi tujuh, masih ada kekurangan tiga yang bisa dicari melalui sponsor atau CSR… kami berharap organisasi tidak hanya bergantung kepada dana dari pemerintah,” jelas Acep."}
      </p>

      <p className={articleParagraphClass} key="paragraph-efisiensi-12">
        {"Efisiensi anggaran tentu saja berdampak banyak terhadap produktivitas organisasi maupun atlet naungannya. Tapi hal tersebut tidak menjadi alasan bagi NPCI Kota Bandung untuk tidak memberdayakan atlet-atletnya. Di antara dana yang ketat dan penuh ketidakpastian, NPCI Kota Bandung tetap berupaya untuk memfasilitasi para atlet disabilitas untuk mendorong potensi mereka hingga menjunjung prestasi."}
      </p>

      <p className={articleParagraphClass} key="paragraph-efisiensi-13">
        {"“Kalau untuk akses sarana latihan, insya Allah kita tanggung. Kita perjuangkan supaya atlet nyaman latihan, tidak terlalu memikirkan alat dan segala macamnya. Bahkan saya juga punya harapan nanti transportasi atlet ada dari pihak NPCI supaya atlet tidak terlalu terbebani transportasi,” ungkap Taufik terkait pengadaan fasilitas atlet."}
      </p>

      {/* Previewable Collage Grid (Lightbox) */}
      <PreviewableCollage />

      <p className={articleParagraphClass} key="paragraph-efisiensi-14">
        {"Ketidakpastian pencairan dana dan persetujuan anggaran membuat penyelenggara harus menyiapkan beberapa skenario. Komarudin menyebut adanya rencana alternatif apabila dana yang tersedia tidak sesuai dengan kebutuhan awal. Dengan demikian, pelaksanaan Peparda Jawa Barat 2026 bergantung pada kemampuan pemerintah menutup kebutuhan minimum penyelenggaraan, mulai dari akomodasi, transportasi, perangkat pertandingan, hingga kebutuhan teknis lainnya."}
      </p>
    </>
  );
}
