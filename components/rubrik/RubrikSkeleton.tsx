export const PAGE_SIZE = 9;

export default function RubrikSkeleton() {
  return (
    <div aria-label="Memuat artikel" aria-busy="true">
      <div className="mt-10 grid grid-cols-1 gap-10 border-y border-zinc-200 py-10 lg:grid-cols-2">
        <div className="space-y-4">
          <div className="bg-tertiary-200 h-4 w-24 animate-pulse rounded" />
          <div className="bg-tertiary-200 h-12 w-full animate-pulse rounded" />
          <div className="bg-tertiary-200 h-12 w-4/5 animate-pulse rounded" />
          <div className="bg-tertiary-200 h-24 w-full animate-pulse rounded" />
        </div>
        <div className="bg-tertiary-200 aspect-[16/10] animate-pulse rounded-lg" />
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: PAGE_SIZE - 1 }, (_, index) => (
          <div
            key={index}
            className="bg-tertiary-200 h-96 animate-pulse rounded-lg"
          />
        ))}
      </div>
    </div>
  );
}