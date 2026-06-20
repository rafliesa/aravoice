import LawReferenceLink, {
  lawReferenceUrls,
} from "@/modules/medpro-report/component/LawReferenceLink";
import MediaPlaceholder from "@/modules/medpro-report/component/MediaPlaceholder";
import { articleHeadingClass, articleParagraphClass } from "@/modules/medpro-report/component/articleContentClasses";

export default function SubtitleFiveContent() {
  return (
    <>
      <p className={articleParagraphClass} key="paragraph-0">
        {"Olahraga kerap menjadi ruang yang membuat penyandang disabilitas terlihat. Di arena pertandingan, mereka dikenal sebagai atlet, peraih medali, atau pembawa nama daerah. Namun,"}
      </p>
      <p className={articleParagraphClass} key="paragraph-1">
        {"Sekretaris Umum NPCI Kota Bandung, melihat bahwa persoalan penyandang disabilitas tidak bisa berhenti pada pembinaan prestasi saja."}
      </p>
      <p className={articleParagraphClass} key="quote-2">{"“Tapi persoalannya tidak hanya olahraga. Bagaimana pendidikan? Bagaimana aksesibilitas?"}</p>
      <p className={articleParagraphClass} key="paragraph-3">
        {"Bagaimana kesehatan? Bagaimana pekerjaan? Bagaimana fasilitas? Ada 23 hak penyandang disabilitas. Yang baru bagus itu baru olahraga.”"}
      </p>
      <p className={articleParagraphClass} key="paragraph-4">
        {"Pendidikan menjadi salah satu hak yang paling menentukan masa depan atlet disabilitas di luar arena. Sebab, ketika masa bertanding selesai atau event tidak berjalan rutin, ijazah, keterampilan,"}
      </p>
      <p className={articleParagraphClass} key="paragraph-5">
        {"dan akses pendidikan bisa menjadi pintu menuju pekerjaan yang lebih stabil. Namun, bagi sebagian atlet disabilitas, pendidikan justru terhenti bukan karena enggan menimba ilmu,"}
      </p>
      <p className={articleParagraphClass} key="paragraph-6">
        {"melainkan karena lingkungan yang belum cukup ramah untuk mereka belajar dengan mandiri."}
      </p>
      <p className={articleParagraphClass} key="paragraph-7">
        {"Linda Indriani, atlet voli duduk menjadi salah satu contoh. Ia mengaku hanya bersekolah hingga jenjang SMP karena hambatan akses yang membuatnya harus bergantung pada bantuan orang lain."}
      </p>
      <MediaPlaceholder assetNumber={1} key="media-8" text={"Audio Linda Indriani: “Saya hanya sekolah sampai SMP karena keterbatasan akses. Waktu itu saya harus naik becak dan sering digendong sehingga saya merasa malu.”"} />
      <p className={articleParagraphClass} key="paragraph-9">
        {"Cerita Linda membuktikan bahwa akses pendidikan tidak cukup diukur dari ada atau tidaknya sekolah. Selama transportasi, bangunan, dan lingkungan sosial belum ramah terhadap penyandang disabilitas, sekolah bisa menjadi ruang yang melelahkan secara fisik sekaligus emosional. Rasa malu yang muncul bukan lahir dari ketidakmauan untuk belajar, melainkan sistem yang belum memberikan ruang yang cukup agar penyandang disabilitas dapat mengakses pendidikan secara setara dan bermartabat."}
      </p>
      <p className={articleParagraphClass} key="paragraph-10">
        {"Hambatan tersebut tidak berhenti di jenjang sekolah. Di perguruan tinggi, aksesibilitas juga masih menjadi persoalan. Djumono memberikan contoh rekannya F, seorang atlet boccia yang menempuh pendidikan S2 dan mendapat beasiswa, tetapi tetap harus menghadapi ruang kuliah yang tidak ramah disabilitas."}
      </p>
      <p className={articleParagraphClass} key="quote-11">{"“Bagaimana kampus yang aksesibel? Sudah ramah disabilitas atau belum? Teman saya, F, atlet boccia, sekarang sedang S2. Dia dapat beasiswa. Waktu kuliah di Universitas X, ruang kuliahnya di lantai dua. Dia harus ngesot-ngesot ke lantai dua. Bayangkan,”"}</p>
      <p className={articleParagraphClass} key="paragraph-12">
        {"Cerita Djumono."}
      </p>
      <p className={articleParagraphClass} key="paragraph-13">
        {"Kisah Linda dan Fikti memperlihatkan dua sisi masalah yang sama. Di satu sisi, ada atlet yang pendidikannya terhenti karena akses sejak awal tidak mendukung. Di sisi lain, ada atlet yang berhasil menembus pendidikan tinggi, tetapi masih harus berhadapan dengan ruang belajar yang belum sepenuhnya aksesibel."}
      </p>
      <p className={articleParagraphClass} key="paragraph-14">
        {"Ketika akses pendidikan terhambat, peluang untuk masuk ke pekerjaan formal ikut menyempit."}
      </p>
      <p className={articleParagraphClass} key="paragraph-15">
        {"Padahal, bagi atlet disabilitas, pekerjaan di luar olahraga sering kali menjadi kebutuhan, bukan sekadar pilihan tambahan. Pendapatan olahraga yang tidak selalu rutin, sementara kebutuhan hidup terus berjalan. Karena itu, pendidikan menjadi salah satu jalan penting untuk keluar dari ketergantungan pada event, bonus, dan uang pembinaan yang tidak selalu pasti."}
      </p>
      <h2 className={articleHeadingClass} key="heading-16">
        {"SUBBAB UU HUBUNGAN PENDIDIKAN DAN PEKERJAAN FORMAL"}
      </h2>
      <p className={articleParagraphClass} key="paragraph-17">
        {"Keterbatasan pendidikan itu tidak berhenti di ruang kelas. Ketika penyandang disabilitas sulit mengakses pendidikan yang layak, dampaknya ikut terbawa ke dunia kerja. Berbagai macam berkas, seperti ijazah, keterampilan, dan pengalaman menjadi syarat yang sering menentukan apakah seseorang bisa masuk ke pekerjaan formal atau tidak."}
      </p>
      <p className={articleParagraphClass} key="paragraph-18">
        Secara regulasi, negara sebenarnya sudah membuka ruang afirmatif.{" "}
        <LawReferenceLink href={lawReferenceUrls.uuDisability}>
          UU Nomor 8 Tahun 2016 tentang Penyandang Disabilitas Pasal 53
        </LawReferenceLink>{" "}
        telah mengatur kuota yang berhak didapatkan oleh penyandang disabilitas
        untuk menempuh dunia kerja yang formal seperti ruang pemerintahan,
      </p>
      <p className={articleParagraphClass} key="paragraph-19">
        {"BUMN, BUMD, maupun perusahaan swasta. Namun, kuota tersebut tidak otomatis berubah menjadi kesempatan nyata. Aturan memang bisa membuka jalan, tetapi pendidikan,"}
      </p>
      <p className={articleParagraphClass} key="paragraph-20">
        {"keterampilan, sertifikasi, dan akses kerja menentukan apakah penyandang disabilitas benar-benar bisa masuk ke dalamnya."}
      </p>
      <p className={articleParagraphClass} key="paragraph-21">
        {"Jonna melihat masalah tersebut tidak hanya pada perusahan atau pemerintah yang belum menjalankan aturan, tetapi juga pada rendahnya akses pendidikan penyandang disabilitas. Ketika lowongan kerja mensyaratkan pendidikan tertentu, jumlah pelamar penyandang disabilitas yang memenuhi syarat ikut terbatas."}
      </p>
      <p className={articleParagraphClass} key="quote-22">{"“Masalahnya bukan hanya pada perusahaan atau pemerintah yang belum menjalankan aturan,"}</p>
      <p className={articleParagraphClass} key="paragraph-23">
        {"tetapi juga pada akses pendidikan yang masih rendah bagi penyandang disabilitas. Data yang kami miliki menunjukkan bahwa akses pendidikan penyandang disabilitas masih sangat rendah,"}
      </p>
      <p className={articleParagraphClass} key="paragraph-24">
        {"terutama pada jenjang perguruan tinggi. Akibatnya, ketika ada lowongan kerja dengan syarat pendidikan tertentu, jumlah pelamar penyandang disabilitas yang memenuhi syarat juga terbatas.” Bagi atlet disabilitas, persoalan ini menjadi lebih rumit. Selama aktif bertanding, mereka harus membagi waktu antara latihan, kompetisi, dan kebutuhan ekonomi keluarga. Ketika pendidikan tidak tuntas atau keterampilan kerja tidak tersertifikasi, pilihan kerja formal semakin sempit."}
      </p>
      <p className={articleParagraphClass} key="paragraph-25">
        {"Akhirnya, sebagian atlet bertahan dari pekerjaan informal, kerja mandiri, atau menunggu pemasukan dari event olahraga."}
      </p>
      <p className={articleParagraphClass} key="paragraph-26">
        {"Sulitnya akses ruang kerja juga terlihat dari sisi pelatih. Bambang Basuki, pelatih Ten Pin Bowling NPCI Kota Bandung sekaligus penyandang tunanetra, menilai pelatihan dari pemerintah saja tidak cukup jika tidak dibersamai dengan peluang kerja nyata."}
      </p>
      <p className={articleParagraphClass} key="quote-27">{"“Harapannya akses dan kesempatan kerja lebih merata. Pelatihan sebenarnya sudah ada dari pemerintah atau Kemensos, tapi peluang kerjanya masih kurang diperhatikan. Menurut saya,"}</p>
      <p className={articleParagraphClass} key="paragraph-28">
        {"yang paling dibutuhkan teman-teman difabel itu kesempatan kerja nyata,” ungkap Bambang."}
      </p>
      <p className={articleParagraphClass} key="paragraph-29">
        {"Pernyataan Bambang menempatkan masalah kerja bukan hanya pada kesiapan individu penyandang disabilitas, tetapi juga pada kesiapan lingkungan kerja menerima mereka. Dalam konteks atlet disabilitas, pekerjaan di luar olahraga menjadi penting karena tidak semua atlet memiliki pemasukan rutin dari kompetisi. Namun, bagi Bambang, masuk ke dunia kerja di luar olahraga masih bukan perkara mudah."}
      </p>
      <p className={articleParagraphClass} key="quote-30">{"“Masih cukup sulit, kecuali yang sudah berprestasi besar dan mendapat penghargaan khusus dari pemerintah, misalnya kesempatan menjadi ASN,”"}</p>
      <p className={articleParagraphClass} key="paragraph-31">
        {"Lanjut Bambang."}
      </p>
      <p className={articleParagraphClass} key="paragraph-32">
        {"Akses kerja formal bagi atlet disabilitas kerap masih bergantung pada pengakuan prestasi besar."}
      </p>
      <p className={articleParagraphClass} key="paragraph-33">
        {"Mereka yang berhasil meraih prestasi tinggi bisa mendapat perhatian lebih besar, termasuk peluang menjadi ASN. Namun, bagi atlet yang belum berada di level tersebut, jalan menuju pekerjaan formal masih lebih terbatas."}
      </p>
      <p className={articleParagraphClass} key="paragraph-34">
        {"Mengetahui hal tersebut, Jonna juga mendorong penguatan pendidikan vokasional dan sertifikasi kompetensi agar penyandang disabilitas tidak hanya bergantung pada jalur pendidikan formal."}
      </p>
      <p className={articleParagraphClass} key="quote-35">{"“Karena saat ini kami juga mendorong pengembangan jalur vokasional. Kalau akses ke pendidikan formal masih sangat menantang, mengapa tidak memperkuat pendidikan vokasional?"}</p>
      <p className={articleParagraphClass} key="paragraph-36">
        {"Yang penting seseorang memiliki kompetensi yang teruji dan tersertifikasi oleh lembaga yang berwenang.”"}
      </p>
      <p className={articleParagraphClass} key="paragraph-37">
        {"Di sisi lain, Dandan Supardan, atlet panahan NPCI Kota Bandung, menjadi salah satu contoh atlet disabilitas yang memiliki pekerjaan tetap sebagai ASN di Kementerian Sosial. Jalan menuju pekerjaan formal tidak datang dari skema penghargaan atlet, melainkan melalui jalur seleksi CPNS umum pada tahun 2025."}
      </p>
      <p className={articleParagraphClass} key="paragraph-38">
        {"Meski mendapatkan pekerjaan formal, Dandan sempat berada dalam dilema dengan keinginan menjadi atlet sepenuhnya. Namun, keinginan tersebut harus ia kurung karena mempertimbangkan kebutuhan keluarganya. Menurutnya, organisasi olahraga belum bisa menanggung kebutuhan kehidupan keluarganya. Pengalaman Dandan memperlihatkan bahwa pekerjaan formal dapat menjadi penopang penting bagi atlet disabilitas, terutama ketika olahraga belum sepenuhnya mampu menjamin kebutuhan jangka panjang."}
      </p>
      <p className={articleParagraphClass} key="quote-39">{"“Saya sempat bilang, saya mundur dari ASN. Saya mau memundurkan diri dari ASN, saya ingin menjadi atlet ini. Tapi setelah dipikir-pikir dengan kondisi ya, kondisi apa, di organisasinya sendiri, nggak akan bisa meng-cover itu untuk kehidupan saya,”"}</p>
      <p className={articleParagraphClass} key="paragraph-40">
        {"Ungkap Dandan."}
      </p>
      <p className={articleParagraphClass} key="paragraph-41">
        {"Pertimbangan keluarga menjadi bagian penting dari keputusan tersebut. Dandan juga menyebut bahwa dukungan keluarga tetap ada, tetapi kebutuhan anak dan rumah tangga membuat pekerjaan tetap tidak bisa ditinggalkan begitu saja. Hal ini kembali menunjukkan bahwa beban ekonomi menjadi salah satu masalah yang kerap terbawa ke dunia olahraga. Ia menyebut persoalan internal atlet biasanya datang dari keluarga atau ekonomi, dan masalah itu bisa ikut memengaruhi kondisi atlet ketika berlatih atau bertanding."}
      </p>
      <p className={articleParagraphClass} key="quote-42">{"“Biasanya ya kayak ada masalah dengan keluarga di rumah, dengan istri atau apa. Itu biasanya seperti itu. Atau yang paling sering sih biasanya masalah ekonomi ya. Yang saya lihat lah. Yang saya lihat, yang saya alamin juga,”"}</p>
      <p className={articleParagraphClass} key="paragraph-43">
        {"Ucap Dandan."}
      </p>
    </>
  );
}
