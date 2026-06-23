"use client";

import { articleHeadingClass, articleParagraphClass } from "@/modules/medpro-report/component/articleContentClasses";
import UuDisabilityTypeLink from "@/modules/medpro-report/component/UuDisabilityTypeLink";
import Uu82016Pasal53Link from "@/modules/medpro-report/component/Uu82016Pasal53Link";
import VoiceNoteCard from "@/modules/medpro-report/component/VoiceNoteCard";
import DandanSupardanGallery from "@/modules/medpro-report/component/DandanSupardanGallery";
import DisabilityEducationChart from "@/modules/medpro-report/component/DisabilityEducationChart";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// ==========================================
// EDITABLE TEXT CONTENT DICTIONARY
// Feel free to modify any text inside this block.
// ==========================================
const textContent = {
  paragraphIntro: 
    "Olahraga kerap menjadi ruang yang membuat penyandang disabilitas terlihat. Di arena pertandingan, mereka dikenal sebagai atlet, peraih medali, atau pembawa nama daerah. Namun, Djumono melihat bahwa persoalan penyandang disabilitas tidak bisa berhenti pada pembinaan prestasi saja.",

  quoteDjumonoImportant: 
    "“Tapi persoalannya tidak hanya olahraga. Bagaimana pendidikan? Bagaimana aksesibilitas? Bagaimana kesehatan? Bagaimana pekerjaan? Bagaimana fasilitas? Ada 22 hak penyandang disabilitas. Yang baru bagus itu baru olahraga.”",

  paragraphEducationImportance: 
    "Pendidikan menjadi salah satu hak yang paling menentukan masa depan atlet disabilitas di luar arena. Sebab, ketika masa bertanding selesai atau event tidak berjalan rutin, ijazah, keterampilan, dan akses pendidikan bisa menjadi pintu menuju pekerjaan yang lebih stabil. Namun, bagi sebagian atlet disabilitas, pendidikan justru terhenti bukan karena enggan menimba ilmu, melainkan karena lingkungan yang belum cukup ramah untuk mereka belajar dengan mandiri.",

  paragraphLindaIntro: 
    "Linda Indriani, atlet voli duduk menjadi salah satu contoh. Ia mengaku hanya bersekolah hingga jenjang SMP karena hambatan akses yang membuatnya harus bergantung pada bantuan orang lain.",

  lindaVnTranscript: 
    "“Saya hanya sekolah sampai SMP karena keterbatasan akses. Waktu itu saya harus naik becak dan sering digendong sehingga saya merasa malu.”",

  paragraphLindaStruggleAnalysis: 
    "Cerita Linda membuktikan bahwa akses pendidikan tidak cukup diukur dari ada atau tidaknya sekolah. Selama transportasi, bangunan, dan lingkungan sosial belum ramah terhadap penyandang disabilitas, sekolah bisa menjadi ruang yang melelahkan secara fisik sekaligus emosional. Rasa malu yang muncul bukan lahir dari ketidakmauan untuk belajar, melainkan sistem yang belum memberikan ruang yang cukup agar penyandang disabilitas dapat mengakses pendidikan secara setara dan bermartabat.",

  paragraphCollegeBarrier: 
    "Hambatan tersebut tidak berhenti di jenjang sekolah. Di perguruan tinggi, aksesibilitas juga masih menjadi persoalan. Djumono memberikan contoh rekannya F, seorang atlet boccia yang menempuh pendidikan S2 dan mendapat beasiswa, tetapi tetap harus menghadapi ruang kuliah yang tidak ramah disabilitas.",

  quoteDjumonoF: 
    "“Bagaimana kampus yang aksesibel? Sudah ramah disabilitas atau belum? Teman saya, F, atlet boccia, sekarang sedang S2. Dia dapat beasiswa. Waktu kuliah di Universitas X, ruang kuliahnya di lantai dua. Dia harus ngesot-ngesot ke lantai dua. Bayangkan,”",

  paragraphLindaFComparison: 
    "Kisah Linda and F memperlihatkan dua sisi masalah yang sama. Di satu sisi, ada atlet yang pendidikannya terhenti karena akses sejak awal tidak mendukung. Di sisi lain, ada atlet yang berhasil menembus pendidikan tinggi, tetapi masih harus berhadapan dengan ruang belajar yang belum sepenuhnya aksesibel.",

  paragraphDisabilityDataPrefix: 
    "Keterbatasan akses pendidikan penyandang disabilitas tidak hanya muncul dalam cerita personal atlet, tetapi juga terlihat dalam data. Berdasarkan data Long Form SP2020 yang ditampilkan dalam ",

  paragraphDisabilityDataSuffix: 
    ", penduduk usia 15 tahun ke atas dengan disabilitas tipe 1 masih lebih banyak terkonsentrasi pada jenjang pendidikan rendah dibanding penduduk non-disabilitas.",

  paragraphGapDetails: 
    "Kesenjangan mulai terlihat jelas pada jenjang pendidikan menengah dan tinggi. Penduduk disabilitas tipe 1 yang tamat SMP tercatat 11,12 persen, sementara kelompok non-disabilitas mencapai 22,36 persen. Pada jenjang SMA, penduduk disabilitas tipe 1 berada di angka 14,42 persen, sedangkan non-disabilitas mencapai 9,50 persen.",

  paragraphGapImplication: 
    "Data tersebut memperlihatkan semakin tinggi jenjang pendidikan, semakin kecil proporsi penyandang disabilitas yang berhasil mencapainya. Dalam konteks atlet disabilitas, kondisi ini ikut mempengaruhi peluang mereka di luar arena olahraga. Ketika pekerjaan formal masih mensyaratkan ijazah, sertifikasi, dan keterampilan tertentu, rendahnya akses pendidikan membuat peluang untuk masuk ke dunia kerja semakin terbatas.",

  paragraphDataLimitation: 
    "Meski begitu, hingga tulisan ini disusun belum tersedia data terbaru yang setara dan langsung membandingkan pendidikan terakhir penduduk disabilitas tipe 1 dan non-disabilitas dengan rincian yang sama. Data yang disajikan tetap penting untuk menunjukkan pola ketimpangan, tetapi belum cukup untuk membaca perubahan kondisi pendidikan penyandang disabilitas dalam beberapa tahun terakhir.",

  paragraphEduJobsLink: 
    "Ketika akses pendidikan terhambat, peluang untuk masuk ke pekerjaan formal ikut menyempit. Padahal, bagi atlet disabilitas, pekerjaan di luar olahraga sering kali menjadi kebutuhan, bukan sekadar pilihan tambahan. Pendapatan olahraga yang tidak selalu rutin, sementara kebutuhan hidup terus berjalan. Karena itu, pendidikan menjadi salah satu jalan penting untuk keluar dari ketergantungan pada event, bonus, dan uang pembinaan yang tidak selalu pasti.",

  headingEmployment: 
    "DIPINGGIRKAN PENDIDIKAN, DILAHAP EKSPEKTASI LAPANGAN PEKERJAAN",

  paragraphEmploymentBarrier: 
    "Keterbatasan pendidikan itu tidak berhenti di ruang kelas. Ketika penyandang disabilitas sulit mengakses pendidikan yang layak, dampaknya ikut terbawa ke dunia kerja. Berbagai macam berkas, seperti ijazah, keterampilan, dan pengalaman menjadi syarat yang sering menentukan apakah seseorang bisa masuk ke pekerjaan formal atau tidak.",

  paragraphAffirmativePrefix: 
    "Secara regulasi, negara sebenarnya sudah membuka ruang afirmatif. ",

  paragraphAffirmativeSuffix: 
    " telah mengatur kuota yang berhak didapatkan oleh penyandang disabilitas untuk menempuh dunia kerja yang formal seperti ruang pemerintahan, BUMN, BUMD, maupun perusahaan swasta. Namun, kuota tersebut tidak otomatis berubah menjadi kesempatan nyata. Aturan memang bisa membuka jalan, tetapi pendidikan, keterampilan, sertifikasi, dan akses kerja menentukan apakah penyandang disabilitas benar-benar bisa masuk ke dalamnya.",

  paragraphJonnaAnalysis: 
    "Jonna melihat masalah tersebut tidak hanya pada perusahaan atau pemerintah yang belum menjalankan aturan, tetapi juga pada rendahnya akses pendidikan penyandang disabilitas. Ketika lowongan kerja mensyaratkan pendidikan tertentu, jumlah pelamar penyandang disabilitas yang memenuhi syarat ikut terbatas.",

  jonnaVnTranscript: 
    "“Masalahnya bukan hanya pada perusahaan atau pemerintah yang belum menjalankan aturan, tetapi juga pada akses pendidikan yang masih rendah bagi penyandang disabilitas. Data yang kami miliki menunjukkan bahwa akses pendidikan penyandang disabilitas masih sangat rendah, terutama pada jenjang perguruan tinggi. Akibatnya, ketika ada lowongan kerja dengan syarat pendidikan tertentu, jumlah pelamar penyandang disabilitas yang memenuhi syarat juga terbatas.”",

  paragraphAthleteStruggleEconomics: 
    "Bagi atlet disabilitas, persoalan ini menjadi lebih rumit. Selama aktif bertanding, mereka harus membagi waktu antara latihan, kompetisi, dan kebutuhan ekonomi keluarga. Ketika pendidikan tidak tuntas atau keterampilan kerja tidak tersertifikasi, pilihan kerja formal semakin sempit. Akhirnya, sebagian atlet bertahan dari pekerjaan informal, kerja mandiri, atau menunggu pemasukan dari event olahraga.",

  paragraphCoachBambangIntro: 
    "Sulitnya akses ruang kerja juga terlihat dari sisi pelatih. Bambang Basuki, pelatih Ten Pin Bowling NPCI Kota Bandung sekaligus penyandang tunanetra, menilai pelatihan dari pemerintah saja tidak cukup jika tidak dibersamai dengan peluang kerja nyata.",

  quoteBambang1: 
    "“Harapannya akses dan kesempatan kerja lebih merata. Pelatihan sebenarnya sudah ada dari pemerintah atau Kemensos, tapi peluang kerjanya masih kurang diperhatikan. Menurut saya, yang paling dibutuhkan teman-teman difabel itu kesempatan kerja nyata,”",

  paragraphCoachBambangAnalysis: 
    "Pernyataan Bambang menempatkan masalah kerja bukan hanya pada kesiapan individu penyandang disabilitas, tetapi juga pada kesiapan lingkungan kerja menerima mereka. Dalam konteks atlet disabilitas, pekerjaan di luar olahraga menjadi penting karena tidak semua atlet memiliki pemasukan rutin dari kompetisi. Namun, bagi Bambang, masuk ke dunia kerja di luar olahraga masih bukan perkara mudah.",

  quoteBambang2: 
    "“Masih cukup sulit, kecuali yang sudah berprestasi besar dan mendapat penghargaan khusus dari pemerintah, misalnya kesempatan menjadi ASN,”",

  paragraphWelfarePrestasiASN: 
    "Akses kerja formal bagi atlet disabilitas kerap masih bergantung pada pengakuan prestasi besar. Mereka yang berhasil meraih prestasi tinggi bisa mendapat perhatian lebih besar, termasuk peluang menjadi ASN. Namun, bagi atlet yang belum berada di level tersebut, jalan menuju pekerjaan formal masih lebih terbatas.",

  paragraphJonnaVocationalExplain: 
    "Mengetahui hal tersebut, Jonna juga mendorong penguatan pendidikan vokasional dan sertifikasi kompetensi agar penyandang disabilitas tidak hanya bergantung pada jalur pendidikan formal.",

  quoteJonnaVocational: 
    "“Karena saat ini kami juga mendorong pengembangan jalur vokasional. Kalau akses ke pendidikan formal masih sangat menantang, mengapa tidak memperkuat pendidikan vokasional? Yang penting seseorang memiliki kompetensi yang teruji dan tersertifikasi oleh lembaga yang berwenang,”",

  paragraphDandanASN: 
    "Di sisi lain, Dandan Supardan, atlet panahan NPCI Kota Bandung, menjadi salah satu contoh atlet disabilitas yang memiliki pekerjaan tetap sebagai ASN di Kementerian Sosial. Jalan menuju pekerjaan formal tidak datang dari skema penghargaan atlet, melainkan melalui jalur seleksi CPNS umum pada tahun 2025.",

  paragraphDandanDilemma: 
    "Meski mendapatkan pekerjaan formal, Dandan sempat berada dalam dilema dengan keinginan menjadi atlet sepenuhnya. Namun, keinginan tersebut harus ia kurung karena mempertimbangkan kebutuhan keluarganya. Menurutnya, organisasi olahraga belum bisa menanggung kebutuhan kehidupan keluarganya. Pengalaman Dandan memperlihatkan bahwa pekerjaan formal dapat menjadi penopang penting bagi atlet disabilitas, terutama ketika olahraga belum sepenuhnya mampu menjamin kebutuhan jangka panjang.",

  quoteDandan1: 
    "“Saya sempat bilang, saya mundur dari ASN. Saya mau memundurkan diri dari ASN, saya ingin menjadi atlet ini. Tapi setelah dipikir-pikir dengan kondisi ya, kondisi apa, di organisasinya sendiri, nggak akan bisa meng-cover itu untuk kehidupan saya,”",

  paragraphDandanFamilyEconomy: 
    "Pertimbangan keluarga menjadi bagian penting dari keputusan tersebut. Dandan juga menyebut bahwa dukungan keluarga tetap ada, tetapi kebutuhan anak dan rumah tangga membuat pekerjaan tetap tidak bisa ditinggalkan begitu saja. Hal ini kembali menunjukkan bahwa beban ekonomi menjadi salah satu masalah yang kerap terbawa ke dunia olahraga. Ia menyebut persoalan internal atlet biasanya datang dari keluarga atau ekonomi, dan masalah itu bisa ikut mempengaruhi kondisi atlet ketika berlatih atau bertanding.",

  dandanVnTranscript: 
    "“Biasanya ya kayak ada masalah dengan keluarga di rumah, dengan istri atau apa. Itu biasanya seperti itu. Atau yang paling sering sih biasanya masalah ekonomi ya. Yang saya lihat lah. Yang saya lihat, yang saya alamin juga.”",
};

export default function SubtitleFiveContent() {
  const lindaAudioRef = useRef<HTMLAudioElement>(null);
  const [isLindaPlaying, setIsLindaPlaying] = useState(false);
  const [lindaDuration, setLindaDuration] = useState(0);
  const [lindaCurrentTime, setLindaCurrentTime] = useState(0);

  useEffect(() => {
    const audio = lindaAudioRef.current;
    if (!audio) return;

    const updateTime = () => setLindaCurrentTime(audio.currentTime);
    const updateDuration = () => setLindaDuration(audio.duration || 0);
    const handleEnded = () => setIsLindaPlaying(false);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  const toggleLindaPlay = () => {
    const audio = lindaAudioRef.current;
    if (!audio) return;

    if (isLindaPlaying) {
      audio.pause();
      setIsLindaPlaying(false);
    } else {
      audio.play().then(() => {
        setIsLindaPlaying(true);
      }).catch((err) => {
        console.error("Playback failed", err);
      });
    }
  };

  const handleLindaSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = lindaAudioRef.current;
    if (!audio) return;
    const value = parseFloat(e.target.value);
    audio.currentTime = value;
    setLindaCurrentTime(value);
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <>
      <p className={articleParagraphClass} key="paragraph-0">
        {textContent.paragraphIntro}
      </p>

      {/* Djumono's Main Quote - KUTIPAN PENTING */}
      <blockquote className="mx-auto my-8 max-w-xl border-y border-zinc-200/80 py-5 text-center leading-relaxed" key="quote-djumono-important">
        <p className="font-sans text-lg sm:text-xl font-semibold leading-relaxed text-secondary-800 italic">
          {textContent.quoteDjumonoImportant}
        </p>
        <cite className="block not-italic text-xs font-bold text-[#082b4d] mt-2.5">
          — Djumono, Ketua/Sekretaris NPCI Kota Bandung
        </cite>
      </blockquote>

      <p className={articleParagraphClass} key="paragraph-4">
        {textContent.paragraphEducationImportance}
      </p>

      <p className={articleParagraphClass} key="paragraph-7">
        {textContent.paragraphLindaIntro}
      </p>

      {/* Linda Indriani Custom Audio Story Card */}
      <article className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm mt-8" key="linda-vn-container">
        <div className="grid md:grid-cols-[220px_minmax(0,1fr)]">
          <div className="relative min-h-64 md:min-h-full bg-zinc-900">
            <Image
              src="/5/linda.webp"
              alt="Atlet voli duduk dan tembak National Paralympic Committee of Indonesia (NPCI) Kota Bandung, Linda Indriani, berpose di depan warungnya di GOR Pajajaran, Kota Bandung."
              fill
              sizes="(min-width: 768px) 220px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
            <p className="absolute inset-x-5 bottom-5 text-[10px] font-extrabold uppercase tracking-[0.12em] text-white">
              Profil narasumber
            </p>
          </div>

          <div className="p-6 sm:p-8">
            <p className="text-secondary-700 text-[10px] font-black uppercase tracking-[0.14em]">
              Audio story
            </p>
            <h3 className="mt-2 text-xl font-bold text-zinc-900 leading-snug">
              Kesaksian Linda Indriani: Hambatan Akses Pendidikan Menengah
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600">
              Linda Indriani, atlet voli duduk NPCI Kota Bandung, menceritakan kendala mobilitas dan lingkungan sosial yang membatasi akses pendidikannya hingga jenjang SMP.
            </p>

            <audio ref={lindaAudioRef} src="/5/linda-vn.mp3" preload="metadata" />

            {/* Custom Audio Player Controls */}
            <div className="mt-5 mb-4 flex items-center gap-3">
              {/* Play/Pause Button */}
              <button
                onClick={toggleLindaPlay}
                className="flex size-10 items-center justify-center rounded-full bg-[#082b4d] text-white hover:bg-[#061f38] transition-colors shadow-sm cursor-pointer flex-shrink-0"
                aria-label={isLindaPlaying ? "Jeda" : "Putar"}
                type="button"
              >
                {isLindaPlaying ? (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-0.5">
                    <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                  </svg>
                )}
              </button>

              {/* Progress & Waveform Slider */}
              <div className="flex flex-1 flex-col">
                <input
                  type="range"
                  min={0}
                  max={lindaDuration || 100}
                  value={lindaCurrentTime}
                  onChange={handleLindaSeek}
                  className="h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-zinc-200 accent-[#082b4d] outline-none [&::-webkit-slider-runnable-track]:bg-zinc-200 [&::-webkit-slider-thumb]:size-3 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#082b4d]"
                  aria-label="Timeline voice note"
                />
                <div className="mt-1 flex justify-between text-[10px] font-medium text-zinc-500">
                  <span>{formatTime(lindaCurrentTime)}</span>
                  <span>{formatTime(lindaDuration)}</span>
                </div>
              </div>
            </div>

            <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-4 text-xs sm:text-sm leading-6 text-amber-950 font-medium">
              {textContent.lindaVnTranscript}
            </div>
          </div>
        </div>
      </article>

      {/* Visible Alt Text Caption for Linda's Photo */}
      <p className="font-sans text-xs sm:text-sm text-zinc-400 font-light leading-relaxed -mt-4 mb-8 px-1">
        Foto: Atlet voli duduk dan tembak National Paralympic Committee of Indonesia (NPCI) Kota Bandung, Linda Indriani, berpose di depan warungnya di GOR Pajajaran, Kota Bandung.
      </p>

      <p className={articleParagraphClass} key="paragraph-9">
        {textContent.paragraphLindaStruggleAnalysis}
      </p>

      <p className={articleParagraphClass} key="paragraph-10">
        {textContent.paragraphCollegeBarrier}
      </p>

      {/* Djumono F Story Quote */}
      <blockquote className="mx-auto my-8 max-w-xl border-y border-zinc-200/80 py-5 text-center leading-relaxed" key="quote-djumono-f">
        <p className="font-sans text-lg sm:text-xl font-semibold leading-relaxed text-secondary-800 italic">
          {textContent.quoteDjumonoF}
        </p>
        <cite className="block not-italic text-xs font-bold text-[#082b4d] mt-2.5">
          cerita Djumono.
        </cite>
      </blockquote>

      <p className={articleParagraphClass} key="paragraph-13">
        {textContent.paragraphLindaFComparison}
      </p>

      <div className={articleParagraphClass} key="paragraph-disability-data">
        {textContent.paragraphDisabilityDataPrefix}
        <a
          href="http://indonesia.unfpa.org/sites/default/files/pub-pdf/2025-07/Potret%20Penyandang%20Disabilitas%20di%20Indonesia%20Hasil%20Long%20Form%20Sensus%20Penduduk%202020.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary-800 underline decoration-2 underline-offset-4 transition-colors hover:text-secondary-600 font-semibold"
        >
          Potret Penyandang Disabilitas di Indonesia
        </a>
        {textContent.paragraphDisabilityDataSuffix}
        {" "}
        <UuDisabilityTypeLink>disabilitas tipe 1</UuDisabilityTypeLink>
        {" masih lebih banyak terkonsentrasi pada jenjang pendidikan rendah dibanding penduduk non-disabilitas."}
      </div>

      {/* BPS Education Inequality Chart - Component implementation */}
      <DisabilityEducationChart />

      <p className={articleParagraphClass} key="paragraph-gap-details">
        {textContent.paragraphGapDetails}
      </p>

      <p className={articleParagraphClass} key="paragraph-gap-implication">
        {textContent.paragraphGapImplication}
      </p>

      <p className={articleParagraphClass} key="paragraph-data-limitation">
        {textContent.paragraphDataLimitation}
      </p>

      <p className={articleParagraphClass} key="paragraph-edu-jobs-link">
        {textContent.paragraphEduJobsLink}
      </p>

      {/* Heading 2 */}
      <h2 className={articleHeadingClass} key="heading-employment">
        {textContent.headingEmployment}
      </h2>

      <p className={articleParagraphClass} key="paragraph-17">
        {textContent.paragraphEmploymentBarrier}
      </p>

      <div className={articleParagraphClass} key="paragraph-18">
        {textContent.paragraphAffirmativePrefix}
        <Uu82016Pasal53Link>
          UU Nomor 8 Tahun 2016 tentang Penyandang Disabilitas Pasal 53
        </Uu82016Pasal53Link>
        {textContent.paragraphAffirmativeSuffix}
      </div>

      <p className={articleParagraphClass} key="paragraph-21">
        {textContent.paragraphJonnaAnalysis}
      </p>

      <p className={articleParagraphClass} key="paragraph-24">
        {textContent.paragraphAthleteStruggleEconomics}
      </p>

      <p className={articleParagraphClass} key="paragraph-26">
        {textContent.paragraphCoachBambangIntro}
      </p>

      {/* Bambang Basuki Quote 1 */}
      <blockquote className="mx-auto my-8 max-w-xl border-y border-zinc-200/80 py-5 text-center leading-relaxed" key="quote-bambang-1">
        <p className="font-sans text-lg sm:text-xl font-semibold leading-relaxed text-secondary-800 italic">
          {textContent.quoteBambang1}
        </p>
        <cite className="block not-italic text-xs font-bold text-[#082b4d] mt-2.5">
          ungkap Bambang.
        </cite>
      </blockquote>

      <p className={articleParagraphClass} key="paragraph-29">
        {textContent.paragraphCoachBambangAnalysis}
      </p>

      {/* Bambang Basuki Quote 2 */}
      <blockquote className="mx-auto my-8 max-w-xl border-y border-zinc-200/80 py-5 text-center leading-relaxed" key="quote-bambang-2">
        <p className="font-sans text-lg sm:text-xl font-semibold leading-relaxed text-secondary-800 italic">
          {textContent.quoteBambang2}
        </p>
        <cite className="block not-italic text-xs font-bold text-[#082b4d] mt-2.5">
          lanjut Bambang.
        </cite>
      </blockquote>

      <p className={articleParagraphClass} key="paragraph-32">
        {textContent.paragraphWelfarePrestasiASN}
      </p>

      <p className={articleParagraphClass} key="paragraph-34">
        {textContent.paragraphJonnaVocationalExplain}
      </p>

      {/* Jonna Vocational Quote */}
      <blockquote className="mx-auto my-8 max-w-xl border-y border-zinc-200/80 py-5 text-center leading-relaxed" key="quote-jonna-vokasional">
        <p className="font-sans text-lg sm:text-xl font-semibold leading-relaxed text-secondary-800 italic">
          {textContent.quoteJonnaVocational}
        </p>
        <cite className="block not-italic text-xs font-bold text-[#082b4d] mt-2.5">
          ujar Jonna
        </cite>
      </blockquote>

      <p className={articleParagraphClass} key="paragraph-37">
        {textContent.paragraphDandanASN}
      </p>

      <p className={articleParagraphClass} key="paragraph-38">
        {textContent.paragraphDandanDilemma}
      </p>



      {/* Dandan Quote 1 */}
      <blockquote className="mx-auto my-8 max-w-xl border-y border-zinc-200/80 py-5 text-center leading-relaxed" key="quote-dandan-1">
        <p className="font-sans text-lg sm:text-xl font-semibold leading-relaxed text-secondary-800 italic">
          {textContent.quoteDandan1}
        </p>
        <cite className="block not-italic text-xs font-bold text-[#082b4d] mt-2.5">
          ungkap Dandan.
        </cite>
      </blockquote>

      <p className={articleParagraphClass} key="paragraph-41">
        {textContent.paragraphDandanFamilyEconomy}
      </p>

      {/* Dandan Supardan Interview Voice Note */}
      <div className="my-8" key="dandan-vn-container">
        <VoiceNoteCard
          audioSrc="/5/Dandan Supardan - Atlet Panahan.m4a"
          imageSrc="/uploads/d42c798d9c02a41627330f928b3c33c2.jpg"
          speakerName="Dandan Supardan"
          speakerRole="Atlet Panahan NPCI Kota Bandung & ASN Kemensos"
        />
        <p className="text-zinc-500 text-xs italic text-center -mt-4 max-w-md mx-auto leading-relaxed">
          {textContent.dandanVnTranscript}
        </p>
      </div>
    </>
  );
}
