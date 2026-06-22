"use client";

import { articleHeadingClass, articleParagraphClass } from "@/modules/medpro-report/component/articleContentClasses";
import JudoAttendanceInfographic from "@/modules/medpro-report/component/JudoAttendanceInfographic";
import LovitaVideoCard from "@/modules/medpro-report/component/LovitaVideoCard";
import FinancialLiteracySteps from "@/modules/medpro-report/component/FinancialLiteracySteps";
import VoiceNoteCard from "@/modules/medpro-report/component/VoiceNoteCard";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function SubtitleFourContent() {
  const evaAudioRef = useRef<HTMLAudioElement>(null);
  const [isEvaPlaying, setIsEvaPlaying] = useState(false);
  const [evaDuration, setEvaDuration] = useState(0);
  const [evaCurrentTime, setEvaCurrentTime] = useState(0);

  useEffect(() => {
    const audio = evaAudioRef.current;
    if (!audio) return;

    const updateTime = () => setEvaCurrentTime(audio.currentTime);
    const updateDuration = () => setEvaDuration(audio.duration || 0);
    const handleEnded = () => setIsEvaPlaying(false);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  const toggleEvaPlay = () => {
    const audio = evaAudioRef.current;
    if (!audio) return;

    if (isEvaPlaying) {
      audio.pause();
      setIsEvaPlaying(false);
    } else {
      audio.play().then(() => {
        setIsEvaPlaying(true);
      }).catch((err) => {
        console.error("Playback failed", err);
      });
    }
  };

  const handleEvaSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = evaAudioRef.current;
    if (!audio) return;
    const value = parseFloat(e.target.value);
    audio.currentTime = value;
    setEvaCurrentTime(value);
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

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

      {/* Centered highlighted quote */}
      <div className="mx-auto my-8 max-w-xl border-y border-zinc-200/80 py-5 text-center">
        <p className="font-sans text-lg sm:text-xl font-semibold leading-relaxed text-secondary-800 italic">
          “Dari 21 atlet yang kami bina, yang hadir latihan biasanya hanya sekitar 10 orang. Sisanya banyak yang terkendala masalah ekonomi. Saya juga tidak bisa memaksa mereka,”
        </p>
        <span className="block not-italic text-xs font-bold text-zinc-500 mt-2.5">
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

      <article className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm my-8">
        <div className="grid md:grid-cols-[220px_minmax(0,1fr)]">
          <div className="relative min-h-64 md:min-h-full bg-zinc-900">
            <Image
              src="/4/Eva Ariyanti.jpeg"
              alt="Foto narasumber Eva Ariyanti"
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
              Kesaksian Eva Ariyanti: Usaha Mandiri dari Hasil Bonus Prestasi
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600">
              Eva Ariyanti, atlet panahan disabilitas Jawa Barat, membagikan kisahnya memanfaatkan bonus medali yang ia peroleh untuk membangun modal usaha gym dan alat fitness bersama suaminya yang juga seorang atlet angkat berat.
            </p>

            <audio ref={evaAudioRef} src="/4/eva-vn.mp3" preload="metadata" />

            {/* Custom Audio Player Controls */}
            <div className="mt-5 mb-4 flex items-center gap-3">
              {/* Play/Pause Button */}
              <button
                onClick={toggleEvaPlay}
                className="flex size-10 items-center justify-center rounded-full bg-[#082b4d] text-white hover:bg-[#061f38] transition-colors shadow-sm cursor-pointer flex-shrink-0"
                aria-label={isEvaPlaying ? "Jeda" : "Putar"}
                type="button"
              >
                {isEvaPlaying ? (
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
                  max={evaDuration || 100}
                  value={evaCurrentTime}
                  onChange={handleEvaSeek}
                  className="h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-zinc-200 accent-[#082b4d] outline-none [&::-webkit-slider-runnable-track]:bg-zinc-200 [&::-webkit-slider-thumb]:size-3 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#082b4d]"
                  aria-label="Timeline voice note"
                />
                <div className="mt-1 flex justify-between text-[10px] font-medium text-zinc-500">
                  <span>{formatTime(evaCurrentTime)}</span>
                  <span>{formatTime(evaDuration)}</span>
                </div>
              </div>
            </div>

            <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-4 text-xs sm:text-sm leading-6 text-amber-950 font-medium">
              “Kebetulan saya di rumah buka tempat gym. Karena suami saya juga kebetulan atlet, NPCI juga. Dia atlet angkat berat. Sebelum saya kan dia udah mulai duluan. Jadi tiap kita mendapatkan prestasi, bonus itu kita modalkan ke usaha kita. Sama, ada bikin motor roda tiga gitu kayak reseller alat-alat fitness gitu,”
            </div>
          </div>
        </div>
      </article>

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
          audioSrc="/4/jonna-vn.MP3"
          speakerName="Jonna Aman Damanik"
          speakerRole="Komisioner Komisi Nasional Disabilitas (KND)"
          imageSrc="/jonna.jpg"
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
