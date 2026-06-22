"use client";

import { useState } from "react";

type ModelData = {
  id: string;
  name: string;
  focus: string;
  viewpoint: string;
  policy: string;
  color: string;
  textColor: string;
  icon: React.ReactNode;
};

const models: ModelData[] = [
  {
    id: "medical",
    name: "Medical / Charity Model",
    focus: "Keterbatasan & Belas Kasihan",
    viewpoint: "Memandang disabilitas sebagai kecacatan biologis atau deficit individu yang perlu disembuhkan, direhabilitasi, atau dibantu melalui skema karitatif (belas kasihan).",
    policy: "Kebijakan bersifat pasif berupa bantuan sosial modal tunai tanpa pemberdayaan berkelanjutan.",
    color: "bg-red-50 border-red-200 text-red-800",
    textColor: "text-red-950",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
      </svg>
    ),
  },
  {
    id: "social",
    name: "Social Model",
    focus: "Hambatan Lingkungan",
    viewpoint: "Memandang disabilitas bukan sebagai masalah medis personal, melainkan kegagalan lingkungan sosial dan infrastruktur untuk mengakomodasi kebutuhan fisik individu.",
    policy: "Fokus pada penyediaan aksesibilitas fisik (ramp, lift, ubin pemandu) dan penghapusan hambatan interaksi sosial.",
    color: "bg-blue-50 border-blue-200 text-blue-800",
    textColor: "text-blue-950",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94-3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    id: "rights",
    name: "Human Rights Model",
    focus: "Kedaulatan & Kesetaraan Hak",
    viewpoint: "Memposisikan disabilitas sebagai subjek hukum yang berdaulat secara setara dengan warga negara lain. Menjamin hak asasi dasar, keadilan, martabat, dan inklusi penuh tanpa stigma.",
    policy: "Pembuatan legislasi afirmatif (seperti UU 8/2016), perlindungan dari diskriminasi, serta partisipasi aktif dalam pemerintahan.",
    color: "bg-emerald-50 border-emerald-200 text-emerald-800",
    textColor: "text-emerald-950",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-.778.099-1.533.284-2.253" />
      </svg>
    ),
  },
];

export default function DisabilityModelsInfographic() {
  const [selectedId, setSelectedId] = useState<string>("rights");

  const activeModel = models.find((m) => m.id === selectedId) || models[2];

  return (
    <article className="mx-auto my-8 max-w-2xl overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm font-sans">
      {/* Header */}
      <div className="border-b border-zinc-200 p-6 bg-zinc-50/30">
        <p className="text-secondary-700 text-xs font-extrabold uppercase tracking-[0.14em]">
          Evolusi Paradigma Disabilitas
        </p>
        <h3 className="mt-2 text-lg font-bold text-[#082b4d]">
          Tiga Model Perspektif Penyandang Disabilitas
        </h3>
        <p className="mt-1 text-xs text-zinc-500">
          Paradigma negara menentukan arah regulasi dan pengalokasian sumber daya bagi difabel.
        </p>
      </div>

      {/* Tabs Switcher */}
      <div className="flex border-b border-zinc-200">
        {models.map((model) => {
          const isActive = model.id === selectedId;
          return (
            <button
              key={model.id}
              onClick={() => setSelectedId(model.id)}
              className={`flex-1 py-3 px-2 text-center text-xs font-bold transition-all border-b-2 cursor-pointer ${
                isActive
                  ? "border-secondary-500 text-secondary-800 bg-secondary-50/10"
                  : "border-transparent text-zinc-400 hover:text-zinc-600 hover:bg-zinc-50"
              }`}
              type="button"
            >
              {model.name}
            </button>
          );
        })}
      </div>

      {/* Selected Model Details */}
      <div className="p-6">
        <div className={`p-5 rounded-2xl border ${activeModel.color} transition-all duration-300`}>
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-full bg-white shadow-sm shrink-0">
              {activeModel.icon}
            </div>
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-zinc-400">
                Fokus Utama
              </span>
              <h4 className="text-sm font-black uppercase tracking-wide mt-0.5">
                {activeModel.focus}
              </h4>
            </div>
          </div>

          <div className="mt-4 space-y-4">
            <div>
              <h5 className={`text-xs font-extrabold uppercase tracking-wide ${activeModel.textColor} opacity-80`}>
                Cara Pandang
              </h5>
              <p className="mt-1 text-xs leading-relaxed text-zinc-700">
                {activeModel.viewpoint}
              </p>
            </div>

            <div className="border-t border-black/10 pt-3">
              <h5 className={`text-xs font-extrabold uppercase tracking-wide ${activeModel.textColor} opacity-80`}>
                Implikasi Kebijakan
              </h5>
              <p className="mt-1 text-xs leading-relaxed text-zinc-700">
                {activeModel.policy}
              </p>
            </div>
          </div>
        </div>

        {/* Narrative Connection to Text */}
        <div className="mt-5 p-4 rounded-xl bg-zinc-50 border border-zinc-150">
          <p className="text-xs leading-relaxed text-zinc-600">
            <strong>Keterkaitan Artikel:</strong> Ratifikasi CRPD pada tahun 2011 mendorong transisi Indonesia dari <em>Medical/Charity Model</em> menuju <em>Human Rights Model</em>, yang memuncak pada disahkannya UU No. 8 Tahun 2016. Namun di lapangan, implementasi hak sering kali masih terhambat karena paradigma di tingkat pelaksana terkadang masih terjebak pada belas kasihan sektoral.
          </p>
        </div>
      </div>
    </article>
  );
}
