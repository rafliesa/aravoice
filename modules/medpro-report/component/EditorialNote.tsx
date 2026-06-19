export default function EditorialNote({ text }: { text: string }) {
  return (
    <aside className="rounded-lg border-l-4 border-secondary-800 bg-white px-5 py-4 text-sm font-semibold leading-7 text-[#33445a]">
      {text}
    </aside>
  );
}
