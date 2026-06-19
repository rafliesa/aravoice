export default function MediaPlaceholder({
  assetNumber,
  text,
}: {
  assetNumber?: number;
  text: string;
}) {
  return (
    <aside className="overflow-hidden rounded-lg border border-[#d9d2c7] bg-white">
      <div className="relative min-h-48 bg-[linear-gradient(180deg,#ffffff_0%,#f6f4ef_52%,#263b4d_100%)]">
        <div className="absolute bottom-5 left-5 right-5">
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-secondary-800">
            Media Asset{assetNumber ? ` ${assetNumber}` : ""}
          </p>
          <p className="mt-2 font-sans text-sm font-normal leading-6 text-white">
            {text}
          </p>
        </div>
      </div>
    </aside>
  );
}
