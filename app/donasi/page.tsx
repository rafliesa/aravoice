import type { Metadata } from "next";
import DonationPage from "@/modules/donation";

export const metadata: Metadata = {
  title: "Donasi",
  description:
    "Dukung jurnalisme olahraga disabilitas yang independen, akurat, dan inklusif bersama Paravoice.id.",
};

export default function Page() {
  return <DonationPage />;
}
