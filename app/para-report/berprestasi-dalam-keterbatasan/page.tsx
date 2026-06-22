import type { Metadata } from "next";
import MedproReportPage from "@/modules/medpro-report";
import {
  medproArticleDescription,
} from "@/modules/medpro-report/data";
import {
  konoStoryImages,
} from "@/modules/medpro-report/content/SubtitleOneContent";
import FotoStory from "@/modules/medpro-report/component/FotoStory";
import JonnaAudioCard from "@/modules/medpro-report/component/JonnaAudioCard";
import {
  articleKickerClass,
  articleParagraphClass,
} from "@/modules/medpro-report/component/articleContentClasses";

const title = "DI KOTA YANG MENUNTUT JUARA, ATLET DISABILITAS MASIH MENCARI KATA SEJAHTERA ";

export const metadata: Metadata = {
  title,
  description: medproArticleDescription,
};

export default function MedproArticlePage() {
  return (
    <MedproReportPage
      activeIndex={0}
      currentLabel="Foto Story"
      heroTitle={title}
      nextHref="/para-report/berprestasi-dalam-keterbatasan/sub-judul-1"
      coverImageSrc="/hero/photo-story.webp"
    >
      {/* Kicker & Text Narrative */}
      <p className={articleParagraphClass}>
        <span className="float-left text-6xl font-black text-secondary-800 mr-2 mt-1 leading-[0.8]">S</span>
        {"orak-sorai di podium menggema kencang, menggetarkan semangat para atlet disabilitas di lapangan. Di balik semangat itu, ada peluh yang jatuh senyap, menyisakan jejak keringat pion penting negara yang nyaris terlihat. Senyum terus terukir lebar di muka, meskipun kesejahteraan yang dijanjikan negara justru tertatih jauh di belakang prestasi mereka. Bagi atlet disabilitas, pertandingan tidak hanya selesai ketika peluit berbunyi. Di luar lapangan, mereka masih harus berhadapan dengan serentetan pertandingan melawan kehidupan. Kelayakan sosial menjadi kemewahan, dan kepastian masa depan terasa lebih jauh daripada garis finish yang mereka kejar."}
      </p>

      <p className={articleParagraphClass}>
        {"Terdengar hela napas berat, seiring barbell yang terangkat pelan dari lantai. Otot-otot di lengan Ono Saipudin menegang, sementara peluh mulai membasahi wajahnya. Napas itu membawa kisah panjang lelaki 49 tahun yang menyimpan keterbatasan pada kakinya. Sejak 2018, kecintaannya pada olahraga membuatnya menekuni angkat beban yang mengantarnya ke berbagai arena prestasi dan menemukan ruang untuk menyalurkan kemampuannya."}
      </p>

      {/* Centered highlighted quote */}
      <div className="mx-auto my-8 max-w-lg border-y border-zinc-200/80 py-5 text-center">
        <p className="font-sans text-xl sm:text-xl font-semibold leading-relaxed text-secondary-800 italic">
          {"“Ya namanya hidup harus jalan,”"}
        </p>
      </div>

      <p className={articleParagraphClass}>
        {"Ucap Ono pelan sambil tersenyum sukar. Ekspresinya seakan damai dengan keadaan sekalipun kenyataannya pahit. Besi yang ia angkat memang berat, tetapi beban kehidupan di luar arena jauh lebih berat untuk dipikul."}
      </p>

      <p className={articleParagraphClass}>
        {"Di depan matanya, waktu semakin menyempit. Terbentang Pekan Paralimpik Daerah (Peparda) yang menjadikan Kota Bandung panggung tuan rumah pada November 2026 setelah Indramayu mengundurkan diri. Keterbatasan venue yang inklusif bagi atlet disabilitas menjadi alasan utamanya. Dalam waktu yang relatif singkat, tanggung jawab penyelenggaraan kini beralih ke Kota Bandung."}
      </p>

      <p className={articleParagraphClass}>
        {"Perubahan itu tidak hanya memindahkan lokasi pertandingan, tetapi juga menambah beban persiapan bagi daerah yang kini berstatus tuan rumah. Bersamaan dengan tuntutan menyukseskan penyelenggaraan, atlet-atlet Kota Bandung juga dibebani ekspektasi untuk mempertahankan prestasi dan membawa pulang medali di kandang sendiri."}
      </p>

      <p className={articleParagraphClass}>
        {"Kompleksitas penyelenggaraan olahraga disabilitas tidak dapat disamakan dengan ajang olahraga pada umumnya. Setiap kompetisi membutuhkan lapisan persiapan tambahan yang berkaitan langsung dengan kebutuhan aksesibilitas para atlet. Mulai dari kesiapan venue, akomodasi, transportasi, hingga ketersediaan peralatan khusus harus dipastikan dapat digunakan oleh berbagai ragam disabilitas secara aman dan setara."}
      </p>

      <p className={articleParagraphClass}>
        {"Komisioner Komisi Nasional Disabilitas (KND), Jonna Aman Damanik menjelaskan terkait kondisi olahraga disabilitas,"}
      </p>

      {/* Jonna Aman Contextual Audio Card */}
      <JonnaAudioCard />

      <p className={articleParagraphClass}>
        {"Di tengah persiapan menuju Peparda ini, National Paralympic Committee of Indonesia (NPCI) Jawa Barat terpaksa melakukan penyesuaian di berbagai sektor agar program pembinaan tetap berjalan di tengah keterbatasan sumber daya."}
      </p>

      <p className={articleParagraphClass}>
        {"“Terjadi juga di NPCI. Dalam rangka persiapan Pekan Paralimpik Daerah (Peparda) November 2026, kami harus melakukan pengetatan anggaran supaya semua kebutuhan tetap bisa diakomodasi. Baik pembinaan 17 cabang olahraga, kebutuhan organisasi, maupun kebutuhan lainnya semuanya harus diefisiensikan,” ujar Djumono, Ketua NPCI Kota Bandung."}
      </p>

      <p className={articleParagraphClass}>
        {"Pengetatan tersebut tidak hanya menyentuh aspek administratif organisasi, tetapi juga berdampak langsung pada proses pembinaan atlet. Sejumlah program harus disesuaikan dengan kemampuan anggaran yang tersedia, mulai dari pemusatan latihan, pengadaan peralatan, hingga dukungan operasional yang menunjang persiapan atlet menuju Peparda."}
      </p>

      <p className={articleParagraphClass}>
        {"Bagi atlet, jadwal latihan tidak mengenal penundaan sebagaimana proses administrasi. Ketika pencairan dana masih menunggu keputusan dan anggaran, tuntutan untuk menjaga performa tetap berlangsung setiap hari."}
      </p>

      <p className={articleParagraphClass}>
        {"“Karena dari Januari sampai Juni belum ada uang pembinaan yang turun. Padahal banyak atlet disabilitas yang tidak bekerja tetap. Ada yang tinggal di kontrakan dan harus membayar biaya hidup setiap bulan,” ujar Kono, memastikan persiapan menuju Peparda tetap berjalan."}
      </p>

      <p className={articleParagraphClass}>
        {"“Kalau dulu, meskipun SK belum turun, uang pembinaan sudah bisa cair. Sekarang mungkin karena Kota Bandung menjadi tuan rumah Peparda, jadi anggarannya berbeda. Tapi saya juga tidak tahu pasti,” lanjutnya."}
      </p>

      <p className={articleParagraphClass}>
        {"Di tengah tuntutan prestasi yang meninggi menjelang Peparda 2026, para atlet disabilitas berlari dalam lintasan yang tidak selalu setara. Sebab pengorbanan biaya hidup harus dibagi dengan kebutuhan olahraga dan kegigihan para atlet dalam menjaga mimpi ketika kesejahteraan mereka sendiri masih menjadi tanda tanya."}
      </p>

      {/* Photo Story Component moved to the very bottom */}
      <div className="mt-10 pt-10 border-t border-zinc-200/80">
        <FotoStory
          images={konoStoryImages}
          title="Melihat Podium dari Sepetak Kebun"
          bottomText="Kono Saipudin dalam rangkaian sesi latihan angkat berat di Gedung NPCI Kota Bandung."
        />
      </div>
    </MedproReportPage>
  );
}

