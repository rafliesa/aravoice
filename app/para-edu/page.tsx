import type { Metadata } from "next";
import RubrikPage from "@/modules/rubrik";

const description =
  "Pengetahuan praktis untuk memahami olahraga disabilitas, aksesibilitas, dan bahasa inklusif dengan lebih baik.";

export const metadata: Metadata = {
  title: "Para Edu",
  description,
};

export default function ParaEduPage() {
  return (
    <RubrikPage
      category="Para Edu"
      description={description}
    />
  );
}
