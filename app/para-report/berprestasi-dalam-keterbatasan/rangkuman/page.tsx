import type { Metadata } from "next";
import MedproReportPage from "@/modules/medpro-report";
import { medproArticleDescription } from "@/modules/medpro-report/data";
import { articleParagraphClass } from "@/modules/medpro-report/component/articleContentClasses";
import VoiceNoteCard from "@/modules/medpro-report/component/VoiceNoteCard";

const title = "Hak Tertunda";

export const metadata: Metadata = {
  title,
  description: medproArticleDescription,
};

export default function SummaryPage() {
  return (
    <MedproReportPage
      activeIndex={8}
      currentLabel="Hak Tertunda"
      heroTitle={title}
      coverImageSrc="/hero-rangkuman.jpg"
      coverImageCaption="Atlet angkat beban National Paralympic Committee of Indonesia (NPCI) Kota Bandung, Ono, berlatih untuk persiapan Peparda di GOR Pajajaran, Kota Bandung, Jawa Barat pada 19 Juli 2026."
      previousHref="/para-report/berprestasi-dalam-keterbatasan/sub-judul-7"
      nextHref=""
    >
      <p className={`${articleParagraphClass} mb-6`}>
        Derit pelat beban perlahan berhenti di sudut gym GOR Pajajaran. Ono Saefudin perlahan menurunkan barbel ke lantai, dengan napas yang masih memburu. Hari itu, sesi latihan angkat beratnya telah usai. Namun, baginya pertandingan yang sebenarnya baru saja dimulai.
      </p>

      <p className={`${articleParagraphClass} mb-6`}>
        Sorak-sorai euforia kemenangan yang selama ini dielu-elukan nyatanya hanya tertinggal di dalam gelanggang. Begitu Ono melangkah keluar dari pintu ruang latihan, barbel kehidupan yang jauh lebih berat sudah menanti untuk dipikul. Ia harus segera kembali ke rutinitasnya, memastikan dapur keluarganya tetap mengepul. Selain sebagai sumber penghidupan, kebun hidroponiknya di Cibabat menjadi ruang kecil baginya untuk bernapas di tengah tekanan hidup yang saling berkelindan.
      </p>

      {/* Voice Note Ono Closing */}
      <div className="my-8" key="ono-closing-vn">
        <VoiceNoteCard
          audioSrc="/7/Pak Ono Closing.m4a"
          imageSrc="/pak-ono/DIO_4957.webp"
          speakerName="Ono Saefudin"
          speakerRole="Atlet Angkat Berat NPCI Kota Bandung"
          imageAlt="Atlet angkat beban National Paralympic Committee of Indonesia (NPCI) Kota Bandung, Ono, beristirahat di rumahnya di Kota Bandung, Jawa Barat, pada 19 Juni, 2026."
        />
        <p className="text-zinc-500 text-xs italic text-center -mt-4 max-w-md mx-auto leading-relaxed">
          “Jadi disabilitas itu harus bisa mandiri. Kalau kita gak punya keahlian. Terlantar. Ngemis,” ujar Ono.
        </p>
      </div>

      <p className={`${articleParagraphClass} mb-6`}>
        Di depan matanya, Peparda Jawa Barat 2026 semakin dekat. Namun, fokusnya harus rela terpecah belah. Ia masih harus menghitung ongkos perjalanan dari rumah ke tempat latihan, mencapai Rp700-800 ribu/bulan. Biaya itu keluar dari kantong pribadinya, sementara uang pembinaannya belum kunjung turun.
      </p>

      <p className={`${articleParagraphClass} mb-6`}>
        Dalam ketidakpastian ekonomi saat ini, kisah Ono menjadi refleksi nyata bagaimana atlet disabilitas Kota Bandung berlatih dan berjuang tidak hanya untuk meraih prestasi, tetapi juga keberlangsungan hidup mereka.
      </p>

      <p className={`${articleParagraphClass} mb-6`}>
        Di tingkat organisasi, National Paralympic Committee of Indonesia (NPCI) Kota Bandung menjadi rumah pembinaan bagi para atlet. Namun, organisasi ini belum sepenuhnya memiliki kemandirian finansial yang cukup untuk menopang kesejahteraan harian atlet ketika kebijakan anggaran berubah atau dana hibah dipotong.
      </p>

      <p className={`${articleParagraphClass} mb-6`}>
        “Kita mesti akui bahwa NPCI belum bisa sepenuhnya menjadi sandaran kesejahteraan atlet. Organisasi ini bergantung pada dana hibah pemerintah, dan ketika dana itu dipotong, seluruh ekosistem pembinaan ikut terdampak,” — Djumono, Sekretaris Umum NPCI Kota Bandung
      </p>

      <p className={`${articleParagraphClass} mb-6`}>
        Kondisi itu memperlihatkan ruang kosong dalam sistem pembinaan atlet disabilitas. Berbagai upaya tetap dilakukan agar ekosistem olahraga disabilitas berjalan, mulai dari mempertahankan program latihan, mengusahakan bantuan transportasi, hingga mendorong pembinaan di luar arena seperti literasi keuangan, pengembangan keterampilan hidup, dan pemberdayaan atlet setelah karier olahraga berakhir.
      </p>

      <p className={`${articleParagraphClass} mb-6`}>
        Namun, di sisi lain, pemerintah daerah menempatkan dirinya dalam posisi administratif sebagai pemberi dan pengawas dana. Acep Wahyu Ramdan, Sub Koordinator Olahraga Pendidikan Dispora Kota Bandung, menjelaskan bahwa Dispora tidak menangani langsung kesejahteraan atlet di lapangan.
      </p>

      <p className={`${articleParagraphClass} mb-6`}>
        “NPCI adalah mitra kami. Sama seperti KONI. Kami tidak mengurus teknis kesejahteraan atlet secara langsung. Kami memberikan dana hibah, lalu organisasi yang mengelola dan bertanggung jawab terhadap penggunaannya. Peran kami lebih kepada pendampingan, monitoring, dan evaluasi,” — Acep Wahyu Ramdan, Sub Koordinator Olahraga Pendidikan Dispora Kota Bandung
      </p>

      <p className={`${articleParagraphClass} mb-6`}>
        Ketika anggaran menyempit akibat efisiensi, ruang penyelesaian kembali diarahkan kepada organisasi. Acep menyebut NPCI dapat mencari sumber dukungan lain, seperti dana Corporate Social Responsibility (CSR) or sponsor, untuk menutupi kebutuhan yang belum dapat dipenuhi melalui anggaran pemerintah.
      </p>

      <p className={`${articleParagraphClass} mb-6`}>
        Di tengah kewenangan yang saling berbatas itu, persoalan atlet disabilitas menjadi lebih rumit. Jonna Aman Damanik, Komisioner Komisi Nasional Disabilitas, melihat bahwa persoalan utama bukan terletak pada ketiadaan aturan, melainkan pada pelaksanaan kebijakan yang belum sepenuhnya menjawab kebutuhan penyandang disabilitas di lapangan.
      </p>

      <p className={`${articleParagraphClass} mb-6`}>
        “Kalau dari sisi regulasi sebenarnya sudah ada. Undang-undangnya juga sudah ada. Tetapi implementasinya secara keseluruhan masih belum memenuhi kebutuhan,” — Jonna Aman Damanik, Komisioner Komisi Nasional Disabilitas
      </p>

      <p className={`${articleParagraphClass} mb-6`}>
        Jarak antara regulasi dan praktik itu semakin terasa ketika dibandingkan dengan ekosistem olahraga umum di bawah Komite Olahraga Nasional Indonesia (KONI). Wakil Ketua II KONI Kota Bandung, Mulyana, menyebut lembaganya memiliki struktur bidang yang dapat membantu atlet ketika cabang olahraga tidak mampu menyelesaikan persoalan sendiri, termasuk dalam kasus kecelakaan maupun advokasi hukum.
      </p>

      <p className={`${articleParagraphClass} mb-6`}>
        “Kalau misalnya cabang olahraga itu tidak bisa mengatasi, biasanya datang ke KONI. Contohnya ada kasus kecelakaan... Pernah ada kasus hukum juga kita berikan advokasi karena kita punya struktur dan ada tim berbentuk bidang,” — Mulyana, Wakil Ketua II KONI Kota Bandung
      </p>

      <p className={`${articleParagraphClass} mb-6`}>
        Perbedaan dukungan kelembagaan itu menunjukkan bahwa persoalan atlet disabilitas tidak hanya berada di arena latihan. Ia juga berkaitan dengan desain organisasi, keberpihakan anggaran, dan kesiapan sistem dalam melindungi atlet ketika mereka menghadapi risiko di luar pertandingan.
      </p>

      <p className={`${articleParagraphClass} mb-6`}>
        Karena itu, pembinaan tidak bisa hanya bertumpu pada bonus atau prestasi. Aditya Nandang Saputra, pengurus bidang pemberdayaan atlet NPCI Kabupaten Bandung, mulai mendorong literasi keuangan, investasi dasar, pengembangan diri, hingga keterampilan hidup sebagai bekal setelah karier olahraga berakhir. “Kita selamanya tidak bisa menjadi atlet,” ujarnya. Kalimat itu menjadi pengingat bahwa medali punya masa terang, sementara hidup atlet terus berjalan setelah sorak arena padam.
      </p>

      <p className={`${articleParagraphClass} mb-6`}>
        Di tingkat organisasi kota, Komarudin menjelaskan bahwa NPCI Kota Bandung tetap berusaha mempertahankan bantuan transportasi dan memastikan latihan berjalan meski anggaran semakin terbatas. “Karena paling terasa buat atlet itu transport. Kalau bonus kan nanti setelah pertandingan,” katanya.
      </p>

      <p className={`${articleParagraphClass} mb-6`}>
        Sementara itu, Yadi Sopian, Ketua NPCI Kota Bandung menilai tantangan berikutnya terletak pada implementasi aturan yang sudah tersedia. Menurutnya, berbagai regulasi mengenai hak penyandang disabilitas sebenarnya telah ada, termasuk kewajiban membuka ruang kerja yang lebih inklusif.
      </p>

      <p className={`${articleParagraphClass} mb-6`}>
        “Saya berharap pemerintah dan pihak terkait benar-benar menjaga regulasi yang sudah dibuat. Kalau ada perusahaan yang tidak menjalankan aturan tersebut, seharusnya ada sanksi yang jelas.” — Yadi Sopian, Ketua NPCI Kota Bandung
      </p>

      <p className={`${articleParagraphClass} mb-6`}>
        Pada akhirnya, kebijakan yang bergerak di tingkat atas bermuara pada ruang latihan. Di cabang blind judo Kota Bandung, Wirya Dharma, koordinator pelatih sekaligus mantan atlet, menyaksikan langsung bagaimana keterbatasan dukungan memengaruhi kehadiran anak asuhnya. Dari pinggir matras, ia tidak hanya melatih teknik, tetapi juga melihat bagaimana atlet berjuang agar tetap bisa datang.
      </p>

      <p className={`${articleParagraphClass} mb-6`}>
        Hari itu, matras dojo tampak lebih lengang dari seharusnya. Bagi Wirya, lawan terbesar anak asuhnya tidak selalu datang dalam bentuk bantingan dari lawan tanding. Sering kali, hambatan itu hadir lebih awal sebagai ongkos transportasi, pekerjaan harian, dan kebutuhan ekonomi yang tidak bisa ditunda.
      </p>

      <p className={`${articleParagraphClass} mb-6`}>
        “Dari 21 atlet yang kami bina, yang hadir latihan biasanya hanya sekitar 10 orang. Sisanya banyak yang terkendala masalah ekonomi. Saya tidak bisa memaksa mereka,” — Wirya Dharma, Koordinator Pelatih Blind Judo Kota Bandung
      </p>

      {/* Video Feature Section */}
      <div className="my-10 mx-auto max-w-2xl overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-lg transition-all duration-300 hover:shadow-xl font-sans">
        <div className="bg-zinc-900 p-3 text-center border-b border-zinc-800">
          <span className="text-[10px] font-black text-secondary-400 uppercase tracking-widest block">
            VIDEO FEATURE
          </span>
          <h3 className="text-xs font-bold text-zinc-300 mt-1">
            WIRYA DHARMA: DEDIKASI DAN KETERBATASAN ATLET BLIND JUDO
          </h3>
        </div>
        <div className="relative aspect-[16/9] bg-black">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/pdYVc8IvHjE?si=1wIjLGdzip563aCl"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
        <div className="p-4 bg-zinc-50 flex items-center gap-3">
          <div className="min-w-0 flex-1">
            <h4 className="text-xs font-black text-zinc-800">
              Wirya Dharma
            </h4>
            <p className="text-[10px] text-zinc-500">
              Koordinator Pelatih Blind Judo NPCI Kota Bandung
            </p>
          </div>
        </div>
      </div>
    </MedproReportPage>
  );
}

