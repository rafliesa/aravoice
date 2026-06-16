export default function ContactItem({
  label,
  value,
  href,
  icon,
}: {
  label: string;
  value: string;
  href?: string;
  icon: React.ReactNode;
}) {
  const content = (
    <>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-[#142044] text-[#F29100]">
        {icon}
      </span>
      <span>
        <span className="block text-xs uppercase tracking-[0.12em] text-[#8792b0]">
          {label}
        </span>
        <span className="mt-1 block text-sm font-semibold text-white">
          {value}
        </span>
      </span>
    </>
  );

  return href ? (
    <a
      href={href}
      className="flex items-center gap-4 transition-opacity hover:opacity-80"
    >
      {content}
    </a>
  ) : (
    <div className="flex items-center gap-4">{content}</div>
  );
}
