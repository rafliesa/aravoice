import type { Metadata } from "next";
import RubrikPage from "@/modules/rubrik";

const description =
  "Kisah perjuangan, prestasi, dan kehidupan para atlet disabilitas Indonesia di dalam maupun di luar arena.";

export const metadata: Metadata = {
  title: "Para Atlet",
  description,
};

export default function ParaAtletPage() {
  return (
    <RubrikPage
      category="Para Atlet"
      description={description}
    />
  );
}
