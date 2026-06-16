export default function AboutJourney() {
  return (
    <section className="bg-zinc-100">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 lg:grid-cols-2">
        <div className="motion-fade-up">
          <div className="mb-5 h-1 w-12 rounded bg-[#F29100]" />
          <h2 className="font-serif text-3xl font-bold tracking-tight">Perjalanan Kami</h2>
          <div className="mt-6 space-y-5 text-sm leading-7 text-zinc-600">
            <p>
              Paravoice.id lahir dari Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
            <p>
              Sejak didirikan, kami berkomitmen untuk Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Misi kami jelas: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </p>
          </div>
        </div>

        <div className="motion-slide-in-right relative">
          <div className="h-full min-h-80 w-full rounded-sm border border-zinc-300 bg-zinc-200" />
          <div className="absolute -bottom-5 left-8 bg-[#F29100] px-5 py-4 text-white shadow-lg">
            <p className="text-2xl font-bold leading-none">120+</p>
            <p className="mt-1 text-xs font-bold leading-tight tracking-wide">LAPORAN DATA<br />TAHUNAN</p>
          </div>
        </div>
      </div>
    </section>
  );
}
