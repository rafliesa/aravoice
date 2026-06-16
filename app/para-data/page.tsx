import RubrikPage from "@/modules/rubrik";

export const dynamic = "force-dynamic";

type RubrikRouteProps = {
  searchParams: Promise<{ page?: string }>;
};

function parsePage(value?: string) {
  const page = Number(value);
  return Number.isInteger(page) && page > 0 ? page : 1;
}

export default async function ParaDataPage({ searchParams }: RubrikRouteProps) {
  const { page } = await searchParams;

  return (
    <RubrikPage
      category="Para Data"
      description="Angka, riset, dan visualisasi yang membantu membaca perkembangan olahraga disabilitas secara lebih utuh."
      page={parsePage(page)}
    />
  );
}
