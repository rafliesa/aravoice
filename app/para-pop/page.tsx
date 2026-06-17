import type { Metadata } from "next";
import RubrikPage from "@/modules/rubrik";

const description =
  "Cerita budaya populer, komunitas, gaya hidup, dan ruang kreatif yang tumbuh bersama gerakan inklusi.";

export const metadata: Metadata = {
  title: "Para Pop",
  description,
};

export default function ParaPopPage() {
  return (
    <RubrikPage
      category="Para Pop"
      description={description}
    />
  );
}
