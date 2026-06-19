import Link from "next/link";

type ArticleSubnavProps = {
  activeIndex: number;
  items: {
    label: string;
    href: string;
  }[];
};

export default function ArticleSubnav({
  activeIndex,
  items,
}: ArticleSubnavProps) {
  return (
    <nav
      aria-label="Navigasi bagian artikel"
      className="flex gap-7 overflow-x-auto pb-1 text-sm font-semibold text-[#544434]"
    >
      {items.map((item, index) => (
        <Link
          key={item.label}
          href={item.href}
          className={`shrink-0 pb-1 ${
            index === activeIndex
              ? "border-b-2 border-secondary-800 font-bold text-secondary-800"
              : "hover:text-secondary-800"
          }`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
