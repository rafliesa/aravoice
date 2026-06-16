import RubrikPage from "@/modules/rubrik";

export const dynamic = "force-dynamic";

type RubrikRouteProps = {
  searchParams: Promise<{ page?: string }>;
};

function parsePage(value?: string) {
  const page = Number(value);
  return Number.isInteger(page) && page > 0 ? page : 1;
}

export default async function ParaReportPage({ searchParams }: RubrikRouteProps) {
  const { page } = await searchParams;

  return (
    <RubrikPage
      category="Para Report"
      description="Laporan mendalam dari lapangan tentang kebijakan, fasilitas, pembinaan, dan kesejahteraan atlet disabilitas."
      page={parsePage(page)}
    />
  );
}
