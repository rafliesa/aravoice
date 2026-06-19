export default function ArticleControls() {
  return (
    <div className="flex flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
      <button
        type="button"
        className="inline-flex w-fit items-center gap-2 rounded-full bg-black px-5 py-2 text-sm font-bold text-white"
      >
        <span className="grid size-4 place-items-center rounded-full border border-white/70 text-[9px]">
          ▶
        </span>
        Dengarkan Artikel
      </button>

      <div className="flex flex-wrap items-center gap-3">
        <div className="inline-flex items-center rounded-full border border-[#cfc8bd] bg-white text-sm text-[#2b2b2b]">
          <span className="px-3 py-2 font-bold">A-</span>
          <span className="border-x border-[#cfc8bd] px-3 py-2 text-xs text-zinc-500">
            Ukuran Teks
          </span>
          <span className="px-3 py-2 font-bold">A+</span>
        </div>
        <span className="inline-flex items-center gap-2 rounded-full border border-black px-4 py-2 text-sm font-bold text-black">
          ◐ Kontras Tinggi
        </span>
      </div>
    </div>
  );
}
