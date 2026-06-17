import type { Metadata } from "next";
import RubrikPage from "@/modules/rubrik";

const description =
  "Angka, riset, dan visualisasi yang membantu membaca perkembangan olahraga disabilitas secara lebih utuh.";

export const metadata: Metadata = {
  title: "Para Data",
  description,
};

export default function ParaDataPage() {
  return (
    <RubrikPage
      category="Para Data"
      description={description}
    />
  );
}
