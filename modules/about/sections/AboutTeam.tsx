import Link from "next/link";

const team = Array.from({ length: 7 }, () => ({
  name: "Lorem Ipsum",
  role: "LOREM IPSUM",
}));

export default function AboutTeam() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-16">
      <div className="mb-2 h-1 w-12 rounded bg-[#F29100]" />
      <div className="flex items-center justify-between">
        <h2 className="font-serif text-3xl font-bold tracking-tight">Tim Editorial</h2>
        <Link href="#" className="text-xs font-bold tracking-wider text-[#F29100] hover:underline">
          LIHAT SEMUA STAF →
        </Link>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
        {team.map((member, i) => (
          <div key={i}>
            <div className="aspect-square w-full bg-zinc-200" />
            <h3 className="mt-4 font-serif text-lg font-bold">{member.name}</h3>
            <p className="text-xs font-bold tracking-wider text-[#F29100]">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}