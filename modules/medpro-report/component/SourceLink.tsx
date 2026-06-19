export default function SourceLink({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="block break-all rounded-lg border border-[#d9d2c7] bg-white px-5 py-4 text-sm font-bold leading-6 text-secondary-800 hover:underline"
    >
      {href}
    </a>
  );
}
