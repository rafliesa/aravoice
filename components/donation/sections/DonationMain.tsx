import DonationForm from "@/components/donation/DonationForm";

const stats = [
  { value: "150+", label: "Liputan Khusus" },
  { value: "50+", label: "Atlet Disorot" },
  { value: "100%", label: "Independen" },
];

const allocations = [
  { label: "Liputan Lapangan", value: 60 },
  { label: "Riset Aksesibilitas", value: 25 },
  { label: "Operasional & Teknis", value: 15 },
];

export default function DonationMain() {
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 py-4 lg:grid-cols-[1.4fr_1fr]">
      <DonationForm />

      <div className="space-y-5">
        <div className="space-y-3">
          {stats.map((stat) => (
            <article
              key={stat.label}
              className="rounded-lg border-l-4 border-[#F29100] bg-[#142044] px-6 py-5 text-white"
            >
              <p className="text-3xl font-extrabold text-[#ffd4aa]">
                {stat.value}
              </p>
              <p className="mt-1 text-xs font-bold uppercase tracking-wide text-[#8792b0]">
                {stat.label}
              </p>
            </article>
          ))}
        </div>

        <article className="rounded-lg border border-zinc-300 bg-white p-7">
          <h2 className="font-caslon text-2xl font-bold">Alokasi Dana</h2>
          <div className="mt-7 space-y-6">
            {allocations.map((allocation) => (
              <div key={allocation.label}>
                <div className="flex items-center justify-between gap-4 text-sm font-bold">
                  <span>{allocation.label}</span>
                  <span className="text-[#9A5A00]">{allocation.value}%</span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-zinc-200">
                  <div
                    className="h-full rounded-full bg-[#ff9827]"
                    style={{ width: `${allocation.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
