const allocations = [
  { label: "Produksi Berita & Liputan Khusus", value: 40, wide: true },
  { label: "Web Development & Aksesibilitas", value: 25 },
  { label: "Program Edukasi Komunitas", value: 15 },
  { label: "Pelatihan Jurnalis Disabilitas", value: 10 },
  { label: "Operasional & Administrasi", value: 10 },
];

export default function DonationMain() {
  return (
    <section className="bg-[#062747] px-6 py-16 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="motion-fade-up flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="text-4xl font-extrabold tracking-tight">
              Alokasi Dana Donasi
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-[#8aa4c1]">
              Transparansi adalah kunci. Setiap rupiah yang Anda berikan
              dikelola secara profesional untuk memaksimalkan dampak sosial
              bagi komunitas disabilitas.
            </p>
          </div>
          <div className="text-left md:text-right">
            <p className="text-sm font-extrabold">Target 2024</p>
            <p className="mt-1 text-base text-[#8aa4c1]">Rp 2.500.000.000</p>
          </div>
        </div>

        <div className="mt-14 grid gap-x-12 gap-y-8 md:grid-cols-2">
          {allocations.map((allocation, index) => (
            <div
              key={allocation.label}
              className={`motion-fade-up ${allocation.wide ? "md:col-span-2" : ""}`}
              style={{ animationDelay: `${120 + index * 80}ms` }}
            >
              <div className="flex items-center justify-between gap-4 text-sm font-semibold uppercase tracking-[0.14em]">
                <span>{allocation.label} ({allocation.value}%)</span>
                <span>{allocation.value}%</span>
              </div>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/14">
                <div
                  className="motion-bar-fill h-full rounded-full bg-white"
                  style={{ width: `${allocation.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
