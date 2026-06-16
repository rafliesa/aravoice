import type { Metadata } from "next";
import SupportPage from "@/components/support/SupportPage";

export const metadata: Metadata = {
  title: "Dukung Kami | Paravoice.id",
  description:
    "Bergabung dengan komunitas Paravoice.id dan dukung jurnalisme olahraga disabilitas yang independen dan inklusif.",
};

export default function Page() {
  return <SupportPage />;
}
