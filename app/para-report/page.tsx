import type { Metadata } from "next";
import RubrikPage from "@/modules/rubrik";

const description =
  "Laporan mendalam dari lapangan tentang kebijakan, fasilitas, pembinaan, dan kesejahteraan atlet disabilitas.";

export const metadata: Metadata = {
  title: "Para Report",
  description,
};

export default function ParaReportPage() {
  return (
    <RubrikPage
      category="Para Report"
      description={description}
    />
  );
}
