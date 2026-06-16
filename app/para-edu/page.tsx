import RubrikPage from "@/modules/rubrik";

export const dynamic = "force-dynamic";

type RubrikRouteProps = {
  searchParams: Promise<{ page?: string }>;
};

function parsePage(value?: string) {
  const page = Number(value);
  return Number.isInteger(page) && page > 0 ? page : 1;
}

export default async function ParaEduPage({ searchParams }: RubrikRouteProps) {
  const { page } = await searchParams;

  return (
    <RubrikPage
      category="Para Edu"
      description="Pengetahuan praktis untuk memahami olahraga disabilitas, aksesibilitas, dan bahasa inklusif dengan lebih baik."
      page={parsePage(page)}
    />
  );
}
