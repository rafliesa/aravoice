import type { Metadata } from "next";
import AboutPage from "@/modules/about";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "Kenali Aravoice.id, media olahraga disabilitas independen yang mengangkat jurnalisme data dan inklusivitas.",
};

export default function Page() {
  return <AboutPage />;
}
