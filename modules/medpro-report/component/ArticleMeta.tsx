export default function ArticleMeta({
  currentLabel,
}: {
  currentLabel: string;
}) {
  return (
    <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[#33445a]">
      <span>Oleh Redaksi ParaVoice</span>
      <span>20 Juni 2026</span>
      <span>{currentLabel}</span>
    </div>
  );
}
