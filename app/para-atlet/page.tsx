import RubrikPage from "@/modules/rubrik";

export const dynamic = "force-dynamic";

type RubrikRouteProps = {
  searchParams: Promise<{ page?: string }>;
};

function parsePage(value?: string) {
  const page = Number(value);
  return Number.isInteger(page) && page > 0 ? page : 1;
}

export default async function ParaAtletPage({ searchParams }: RubrikRouteProps) {
  const { page } = await searchParams;

  return (
    <RubrikPage
      category="Para Atlet"
      description="Kisah perjuangan, prestasi, dan kehidupan para atlet disabilitas Indonesia di dalam maupun di luar arena."
      page={parsePage(page)}
    />
  );
}
