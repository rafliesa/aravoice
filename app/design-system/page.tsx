import type { Metadata } from "next";
import DesignSystemPage from "@/components/design-system/pages/DesignSystemPage";

export const metadata: Metadata = {
  title: "Design System",
  description: "Komponen, token, dan pola antarmuka ParaVoice.",
};

export default function Page() {
  return <DesignSystemPage />;
}
