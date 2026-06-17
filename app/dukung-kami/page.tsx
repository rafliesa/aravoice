import type { Metadata } from "next";
import SupportPage from "@/modules/support";

export const metadata: Metadata = {
  title: "Dukung Kami",
  description:
    "Bergabung dengan komunitas Aravoice.id dan dukung jurnalisme olahraga disabilitas yang independen dan inklusif.",
};

export default function Page() {
  return <SupportPage />;
}
