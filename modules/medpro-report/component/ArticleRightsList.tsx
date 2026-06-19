type RightItem = {
  description: string;
  title: string;
};

export default function ArticleRightsList({ items }: { items: RightItem[] }) {
  return (
    <div className="rounded-lg border border-[#d9d2c7] bg-white p-5">
      <ol className="grid gap-x-6 gap-y-4 sm:grid-cols-2">
        {items.map((item, index) => (
          <li className="flex gap-3" key={item.title}>
            <span className="mt-1 flex size-7 shrink-0 items-center justify-center rounded-full bg-secondary-800 text-xs font-bold text-white">
              {index + 1}
            </span>
            <div>
              <h3 className="font-sans text-sm font-bold leading-6 text-[#0a3358]">
                {item.title}
              </h3>
              <p className="font-sans text-sm font-normal leading-6 text-[#33445a]">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
