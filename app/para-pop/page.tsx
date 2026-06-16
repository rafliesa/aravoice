import RubrikPage from "@/modules/rubrik";

export const dynamic = "force-dynamic";

type RubrikRouteProps = {
  searchParams: Promise<{ page?: string }>;
};

function parsePage(value?: string) {
  const page = Number(value);
  return Number.isInteger(page) && page > 0 ? page : 1;
}

export default async function ParaPopPage({ searchParams }: RubrikRouteProps) {
  const { page } = await searchParams;

  return (
    <RubrikPage
      category="Para Pop"
      description="Cerita budaya populer, komunitas, gaya hidup, dan ruang kreatif yang tumbuh bersama gerakan inklusi."
      page={parsePage(page)}
    />
  );
}
