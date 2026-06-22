"use client";

import { articleHeadingClass, articleParagraphClass } from "@/modules/medpro-report/component/articleContentClasses";
import LovitaVideoCard from "@/modules/medpro-report/component/LovitaVideoCard";
import QuoteCard from "@/modules/medpro-report/component/QuoteCard";
import Image from "next/image";
import { useRef, useState } from "react";

export default function SubtitleSixContent() {
  const totoVideoRef = useRef<HTMLVideoElement>(null);
  const [isTotoPlaying, setIsTotoPlaying] = useState(false);

  const toggleTotoPlay = () => {
    const video = totoVideoRef.current;
    if (!video) return;

    if (isTotoPlaying) {
      video.pause();
      setIsTotoPlaying(false);
    } else {
      video.play().then(() => {
        setIsTotoPlaying(true);
      }).catch((err) => {
        console.error("Video playback failed", err);
      });
    }
  };
  return (
    <>
      <p className={articleParagraphClass} key="paragraph-0">
        {"Bagi sebagian atlet, medali tidak hanya berarti prestasi. Di baliknya terdapat bonus, uang pembinaan, hingga peluang untuk kembali dipanggil demi memperkuat daerah dalam kompetisi selanjutnya. Karena itu, setiap pertandingan tidak hanya menjadi ajang pembuktian kemampuan, tetapi juga menghadirkan tekanan psikologis yang berkaitan dengan keberlangsungan hidup mereka."}
      </p>

      <div className="mx-auto my-8 max-w-xl border-y border-zinc-200/80 py-5 text-center">
        <p className="font-sans text-lg sm:text-xl font-semibold leading-relaxed text-secondary-800 italic">
          “Saat mereka kalah, ini perlu dibesarkan hatinya karena takut mengecewakan tim dan kepikiran bonusnya ga dapet jadi kecewa dan takut gak dipanggil lagi,”
        </p>
        <span className="block not-italic text-xs font-bold text-zinc-500 mt-2.5">
          — Yulia Sahaja Dewi Permatasari, Psikolog klinis pendamping atlet disabilitas ASEAN Para Games 2018
        </span>
      </div>

      <p className={articleParagraphClass} key="paragraph-5">
        {"Menurut Yulia, pikiran-pikiran semacam itu kerap muncul setelah pertandingan. Dalam fase tersebut, atlet membutuhkan dukungan psikologis untuk menerima hasil, mengelola emosi, dan membangun kembali motivasi. Ia juga melihat kebutuhan pendampingan muncul sebelum pertandingan, ketika atlet menghadapi tekanan untuk mempertahankan prestasi sebelumnya atau memenuhi ekspektasi tinggi."}
      </p>

      <p className={articleParagraphClass} key="paragraph-6">
        {"Tekanan itu tidak berdiri sendiri. Pada beberapa atlet, beban mental justru datang dari luar arena. Ono juga menyebut tekanan terbesarnya bukan berasal dari latihan, melainkan dari faktor lain."}
      </p>

      <div className="mx-auto my-8 max-w-xl border-y border-zinc-200/80 py-5 text-center">
        <p className="font-sans text-lg sm:text-xl font-semibold leading-relaxed text-secondary-800 italic">
          “Namanya juga hidup pasti ada tekanan mental. Tapi tekanan saya bukan dari latihan. Justru dari luar latihan. Biasanya masalah ekonomi keluarga,”
        </p>
        <span className="block not-italic text-xs font-bold text-zinc-500 mt-2.5">
          — Ono Saipudin, Atlet Angkat Berat
        </span>
      </div>

      <p className={articleParagraphClass} key="paragraph-10">
        {"Untuk mengatasi masalah tersebut, Ono memiliki pekerjaan lain di luar olahraga, yaitu bertani konvensional dan hidroponik serta membuka pengobatan alternatif di rumah. Ia mengaku, penghasilan dari usaha itu tidak selalu stabil, tidak jauh berbeda dari penghasilannya sebagai atlet. Namun dalam waktu yang bersamaan, Ono menyatakan bahwa ketidakstabilan tersebut tetap menjadi beban."}
      </p>

      <p className={articleParagraphClass} key="paragraph-12">
        {"Dari sisi keluarga, Toto, pendamping sekaligus suami atlet Ten Pin Bowling, Asti, melihat kondisi rumah ikut mempengaruhi performa atlet di arena. Menurutnya, kemampuan mengelola emosi tidak bisa dilepaskan dari lingkungan rumah dan dukungan orang terdekat."}
      </p>

      <div className="mx-auto my-8 max-w-xl border-y border-zinc-200/80 py-5 text-center">
        <p className="font-sans text-lg sm:text-xl font-semibold leading-relaxed text-secondary-800 italic">
          “Ketika emosi Ibu di rumah tidak stabil, dalam artian misalkan mempunyai satu permasalahan, itu terlihat sekali pada waktu Ibu bermain. Kadang dia lemparannya menjadi terlalu cepat, atau kadang-kadang tidak ada semangat. Itu pengaruh sekali,”
        </p>
        <span className="block not-italic text-xs font-bold text-zinc-500 mt-2.5">
          — Toto, Suami &amp; Pendamping Asti (Atlet Ten Pin Bowling)
        </span>
      </div>

      <p className={articleParagraphClass} key="paragraph-15">
        {"Toto menyebut dukungan lingkungan terdekat menjadi dasar penting untuk membangun kepercayaan diri atlet. Ia juga mengingatkan agar olahraga tidak menjadi beban berlebihan bagi atlet. Menurut Toto, prestasi itu bukan tujuan utama, tapi tetap bermain dengan baik."}
      </p>

      {/* Toto Video Interview Card - Integrated Side-by-Side */}
      <article className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm my-8" key="toto-card">
        <div className="grid md:grid-cols-[220px_minmax(0,1fr)]">
          {/* Left Side: Photo of Pak Toto */}
          <div className="relative min-h-64 md:min-h-full bg-zinc-900">
            <Image
              src="/6/pak-toto-wwc.webp"
              alt="Foto Pak Toto"
              fill
              sizes="(min-width: 768px) 220px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
            <p className="absolute inset-x-5 bottom-5 text-[10px] font-extrabold uppercase tracking-[0.12em] text-white">
              Profil narasumber
            </p>
          </div>

          {/* Right Side: Video Note and Info */}
          <div className="p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-2.5 py-0.5 text-[10px] font-bold text-amber-700 uppercase tracking-wider border border-amber-200">
                <span>⚠️</span> KESAKSIAN PAK TOTO
              </div>
              <h3 className="mt-3 text-xl font-bold text-zinc-900 leading-snug">
                Dukungan psikologis dari rumah sangat menentukan kestabilan performa atlet
              </h3>
              
              <div className="mt-3 text-sm leading-relaxed text-zinc-600 font-medium italic border-l-2 border-zinc-300 pl-3">
                “Kalau saya, sesuai dengan karena hidup dengan Ibu itu istilahnya betul-betul kita jalankan. Men-support yang paling utama adalah janganlah olahraga itu dijadikan beban. Prestasi itu bukan tujuan utama, tapi bermainlah dengan baik. Pendekatan-pendekatan seperti itulah yang membuat semangat Ibu tidak merasa terabaikan, tidak merasa jauh dengan siapa. Akhirnya bermain pun dia nothing to lose. Dan di situ main akan kelihatan progresif.”
              </div>
            </div>

            {/* Video Player */}
            <div className="mt-6 relative aspect-[16/9] w-full max-w-lg overflow-hidden rounded-xl bg-zinc-950 shadow-inner group">
              <video
                ref={totoVideoRef}
                src="/6/pak-toto-wwc-vid.mp4"
                className="w-full h-full object-cover"
                preload="metadata"
                onClick={toggleTotoPlay}
                onEnded={() => setIsTotoPlaying(false)}
              />

              {/* Play Overlay */}
              {!isTotoPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <button
                    type="button"
                    onClick={toggleTotoPlay}
                    className="flex size-14 items-center justify-center rounded-full bg-[#082b4d] text-white hover:bg-[#061f38] transition-all shadow-md cursor-pointer transform group-hover:scale-105"
                    aria-label="Putar Video"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ml-1">
                      <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              )}
            </div>

            {/* Subtitle/Context under player */}
            <div className="mt-6 text-xs sm:text-sm leading-6 text-zinc-500 font-medium">
              Ketika prestasi menjadi peluang pendapatan lebih, hal ini memberikan tekanan psikologis para atlet untuk terus meraih medali di ajang pertandingan. Tekanan ini sangat mempengaruhi performa atlet saat latihan maupun kompetisi. Menurut Yulia, pengaruh mental terhadap performa atlet saat bertanding bisa mencapai 80 persen. Bahkan saat semua persiapan sudah dilakukan selama latihan, masih ada atlet yang mengkhawatirkan kekalahan yang belum tentu terjadi.
            </div>

            {/* Speaker name metadata at the bottom */}
            <div className="mt-4 flex items-center gap-2 text-[10px] text-zinc-400 font-bold uppercase tracking-wider">
              <span>Pak Toto</span>
              <span>•</span>
              <span>Pendamping &amp; Suami Asti (Atlet Ten Pin Bowling)</span>
              <span>•</span>
              <span className="text-secondary-600">Video Note</span>
            </div>
          </div>
        </div>
      </article>

      <h2 className={articleHeadingClass} key="heading-stigma">
        {"BELAS KASIHAN YANG MEMBUNUH MENTAL"}
      </h2>

      <p className={articleParagraphClass} key="paragraph-18">
        {"Selain tekanan ekonomi, tekanan sosial juga menjadi bagian dari beban psikologis atlet disabilitas. Jonna menyebut stigma sebagai tantangan berat dalam isu disabilitas. Menurutnya, stigma lahir dari cara pandang yang keliru terhadap penyandang disabilitas."}
      </p>

      <div className="mx-auto my-8 max-w-xl border-y border-zinc-200/80 py-5 text-center">
        <p className="font-sans text-lg sm:text-xl font-semibold leading-relaxed text-secondary-800 italic">
          “Advokasi paling berat dalam isu disabilitas adalah stigma. Stigma lahir dari paradigma yang tidak tepat dalam memandang penyandang disabilitas. Selama ini banyak masyarakat melihat disabilitas dengan pendekatan belas kasihan, ketidakmampuan, atau menganggap penyandang disabilitas tidak bisa berprestasi,”
        </p>
        <span className="block not-italic text-xs font-bold text-zinc-500 mt-2.5">
          — Jonna Aman Damanik, Komisioner Komisi Nasional Disabilitas (KND)
        </span>
      </div>

      <p className={articleParagraphClass} key="paragraph-22">
        {"Bagi atlet, stigma itu bisa muncul dalam komentar sederhana yang mempertanyakan kemampuan mereka. Randi, atlet bulu tangkis NPCI Kota Bandung, pernah mengalami tekanan semacam itu. Ia menyebut ada orang yang meragukan kemampuannya bermain karena kondisi fisiknya."}
      </p>

      <div className="mx-auto my-8 max-w-xl border-y border-zinc-200/80 py-5 text-center">
        <p className="font-sans text-lg sm:text-xl font-semibold leading-relaxed text-secondary-800 italic">
          “Kadang ada yang ngomong, “Tangan kamu begitu, memang kamu bisa main bulu tangkis?” Tapi saya nggak masukin ke hati. Biarin saja. Yang penting saya bisa membuktikan kalau kita harus juara,”
        </p>
        <span className="block not-italic text-xs font-bold text-zinc-500 mt-2.5">
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

      <div className="mx-auto my-8 max-w-xl border-y border-zinc-200/80 py-5 text-center">
        <p className="font-sans text-lg sm:text-xl font-semibold leading-relaxed text-secondary-800 italic">
          “Jadi, inklusi itu kadang orang salah, dianggapnya disabilitas harus inklusi, tapi seharusnya yang normal harus inklusi pada disabilitas. Memahami siapa disabilitas. Karena orang disabilitasnya itu memahami yang normal itu udah banyak. Tapi yang normal bisa memahami yang disabilitas,”
        </p>
        <span className="block not-italic text-xs font-bold text-zinc-500 mt-2.5">
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
      <QuoteCard 
        quote="Saat ini pun keterlibatan psikolog masih terbatas pada cabang olahraga tertentu. Ada beberapa cabang yang sudah menggandeng psikolog secara aktif, tetapi belum merata di semua cabang olahraga."
        imageSrc="/6/yulia.webp"
        speakerName="Yulia Sahaja Dewi Permatasari"
        speakerRole="Psikolog Klinis Pendamping Atlet Disabilitas"
      />

      <p className={articleParagraphClass} key="paragraph-34">
        {"Keterbatasan itu juga terlihat dari waktu pendampingan. Pada pengalaman Yulia di ASEAN Para Games 2022, hadirnya psikolog olahraga sebagai pendamping terbilang terlambat karena baru diturunkan empat hari sebelum kegiatan dimulai. Hal ini mempersulit para psikolog untuk membangun rasa kepercayaan dari para atlet, khususnya kepada atlet yang sebetulnya membutuhkan pendampingan psikologis tetapi tidak terbuka dengan psikolog yang hadir karena kurangnya rasa percaya."}
      </p>

      <div className="mx-auto my-8 max-w-xl border-y border-zinc-200/80 py-5 text-center">
        <p className="font-sans text-lg sm:text-xl font-semibold leading-relaxed text-secondary-800 italic">
          “Meski demikian, pendampingan yang dilakukan sejak masa training center tentu akan lebih ideal. Dengan waktu yang lebih panjang, psikolog dapat memahami karakter atlet secara lebih mendalam, menyusun program yang sesuai, serta membangun kesiapan mental secara bertahap,”
        </p>
        <span className="block not-italic text-xs font-bold text-zinc-500 mt-2.5">
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

      <div className="mx-auto my-8 max-w-xl border-y border-zinc-200/80 py-5 text-center">
        <p className="font-sans text-lg sm:text-xl font-semibold leading-relaxed text-secondary-800 italic">
          “Belum ada secara khusus. Padahal menurut saya itu penting, misalnya menyediakan psikolog olahraga untuk membantu kondisi mental atlet. Sejauh ini kami lebih banyak saling menguatkan sebagai teman,”
        </p>
        <span className="block not-italic text-xs font-bold text-zinc-500 mt-2.5">
          — Bambang Basuki, Pelatih Ten Pin Bowling
        </span>
      </div>

      <p className={articleParagraphClass} key="paragraph-43">
        {"Toto menilai pendampingan idealnya psikologis perlu hadir sejak awal proses latihan, bukan hanya setelah atlet mengalami tekanan atau kegagalan. Menurutnya, tekanan tidak terkelola setelah pertandingan dapat membuat atlet drop, sementara tekanan pertandingannya bisa membuat atlet “kalah duluan” secara mental."}
      </p>

      <div className="mx-auto my-8 max-w-xl border-y border-zinc-200/80 py-5 text-center">
        <p className="font-sans text-lg sm:text-xl font-semibold leading-relaxed text-secondary-800 italic">
          “Yang berbahaya adalah ketika pressure-nya itu setelah bertanding. Jadi dia tidak ter-manage tuh. Dan di kalangan atlet banyak. Karena apa? Dari awal tidak ada pendampingan. Jadi ketika akhir pertandingan selesai, dia drop. Atau sebelum pertandingan dia sudah kalah duluan mentalnya,”
        </p>
        <span className="block not-italic text-xs font-bold text-zinc-500 mt-2.5">
          — Toto, Suami &amp; Pendamping Asti
        </span>
      </div>
    </>
  );
}
