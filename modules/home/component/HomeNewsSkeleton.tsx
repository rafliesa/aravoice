export default function HomeNewsSkeleton() {
  return (
    <div aria-busy="true" aria-label="Konten berita sedang dimuat">
      <section className="motion-fade-up pt-8">
        <div className="skeleton-block h-4 w-20 rounded" />

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[1.06fr_1fr] lg:items-start">
          <div>
            <div className="skeleton-block h-4 w-36 rounded" />
            <div className="mt-6 space-y-4">
              <div className="skeleton-block h-14 w-full max-w-2xl rounded" />
              <div className="skeleton-block h-14 w-11/12 max-w-2xl rounded" />
              <div className="skeleton-block h-14 w-3/5 max-w-xl rounded" />
            </div>
            <div className="mt-6 space-y-3">
              <div className="skeleton-block h-5 w-full max-w-xl rounded" />
              <div className="skeleton-block h-5 w-4/5 max-w-xl rounded" />
              <div className="skeleton-block h-5 w-3/5 max-w-lg rounded" />
            </div>
            <div className="mt-9 border-t border-[#d8d0c2] pt-6">
              <div className="flex flex-wrap gap-4">
                <div className="skeleton-block h-4 w-28 rounded" />
                <div className="skeleton-block h-4 w-24 rounded" />
                <div className="skeleton-block h-4 w-24 rounded" />
              </div>
              <div className="mt-7 flex justify-start gap-3 lg:justify-end">
                <div className="skeleton-block h-5 w-24 rounded" />
                <div className="skeleton-block h-5 w-12 rounded" />
                <div className="skeleton-block h-5 w-14 rounded" />
                <div className="skeleton-block h-5 w-12 rounded" />
              </div>
            </div>
          </div>

          <div className="motion-slide-in-right overflow-hidden rounded-lg border border-[#d0b894] bg-white">
            <div className="skeleton-block aspect-[16/10] w-full" />
            <div className="px-4 py-3">
              <div className="skeleton-block h-3 w-5/6 rounded" />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_22rem]">
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2">
          {Array.from({ length: 6 }, (_, index) => (
            <ArticleCardSkeleton key={index} delay={index * 70} />
          ))}
        </div>
        <aside className="motion-slide-in-right rounded-lg border border-[#d9dce2] bg-white p-6">
          <div className="skeleton-block h-8 w-44 rounded" />
          <div className="mt-3 h-1 w-36 bg-[#d9d1c4]" />
          <div className="mt-5 space-y-7">
            {Array.from({ length: 6 }, (_, index) => (
              <div key={index} className="border-b border-[#e2ded8] pb-5">
                <div className="skeleton-block h-3 w-16 rounded" />
                <div className="mt-3 space-y-2">
                  <div className="skeleton-block h-5 w-full rounded" />
                  <div className="skeleton-block h-5 w-4/5 rounded" />
                </div>
                <div className="mt-3 skeleton-block h-3 w-36 rounded" />
              </div>
            ))}
          </div>
          <div className="mt-4 skeleton-block h-12 w-full rounded-md" />
        </aside>
      </section>
    </div>
  );
}

function ArticleCardSkeleton({ delay }: { delay: number }) {
  return (
    <article
      className="motion-fade-up overflow-hidden rounded-lg border border-[#ecd7bd] bg-white"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="skeleton-block aspect-[16/9] w-full" />
      <div className="p-6">
        <div className="skeleton-block h-3 w-24 rounded" />
        <div className="mt-4 space-y-3">
          <div className="skeleton-block h-6 w-full rounded" />
          <div className="skeleton-block h-6 w-4/5 rounded" />
        </div>
        <div className="mt-4 space-y-2">
          <div className="skeleton-block h-4 w-full rounded" />
          <div className="skeleton-block h-4 w-2/3 rounded" />
        </div>
        <div className="mt-7 flex justify-between">
          <div className="skeleton-block h-4 w-32 rounded" />
          <div className="skeleton-block h-4 w-6 rounded" />
        </div>
      </div>
    </article>
  );
}
