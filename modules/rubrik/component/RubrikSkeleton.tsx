export const PAGE_SIZE = 14;

export default function RubrikSkeleton() {
  return (
    <div aria-label="Memuat artikel" aria-busy="true">
      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[1.06fr_1fr]">
        <div className="space-y-4">
          <div className="bg-tertiary-200 h-4 w-24 animate-pulse rounded" />
          <div className="bg-tertiary-200 h-12 w-full animate-pulse rounded" />
          <div className="bg-tertiary-200 h-12 w-4/5 animate-pulse rounded" />
          <div className="bg-tertiary-200 h-24 w-full animate-pulse rounded" />
        </div>
        <div className="bg-tertiary-200 aspect-[16/10] animate-pulse rounded-lg" />
      </div>

      <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_22rem]">
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2">
          {Array.from({ length: 6 }, (_, index) => (
            <div
              key={index}
              className="bg-tertiary-200 h-[26rem] animate-pulse rounded-lg"
            />
          ))}
        </div>
        <div className="bg-tertiary-200 h-[42rem] animate-pulse rounded-lg" />
      </div>
    </div>
  );
}
