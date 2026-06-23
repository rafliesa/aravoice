import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function AboutTeam() {
  const dbMembers = prisma.editorialMember
    ? await prisma.editorialMember.findMany({
        orderBy: [
          { sortOrder: "asc" },
          { id: "asc" },
        ],
      })
    : [];

  // Fallback to mock data if database is empty
  const team = dbMembers.length > 0 
    ? dbMembers 
    : Array.from({ length: 7 }, () => ({
        id: 0,
        name: "Lorem Ipsum",
        role: "LOREM IPSUM",
        image: "",
      }));

  return (
    <section className="mx-auto max-w-7xl px-6 pb-16">
      <div className="motion-fade-up flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Tim Editorial</h2>
        <Link href="#" className="text-xs font-bold tracking-wider text-secondary-800 hover:underline">
          LIHAT SEMUA STAF →
        </Link>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
        {team.map((member, i) => (
          <div
            key={member.id || i}
            className="motion-fade-up group"
            style={{ animationDelay: `${i * 55}ms` }}
          >
            <div className="overflow-hidden rounded-md bg-zinc-200">
              {member.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={member.image}
                  alt={member.name}
                  className="aspect-square w-full object-cover transition-transform duration-350 ease-out group-hover:scale-105"
                />
              ) : (
                <div className="aspect-square w-full bg-zinc-200 flex items-center justify-center text-zinc-400 text-3xl font-bold tracking-widest transition-colors duration-300 group-hover:bg-zinc-300">
                  {member.name ? member.name.slice(0, 2).toUpperCase() : "?"}
                </div>
              )}
            </div>
            <h3 className="mt-4 text-lg font-bold group-hover:text-[#F29100] transition-colors duration-250">{member.name}</h3>
            <p className="text-xs font-bold tracking-wider text-secondary-800">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

