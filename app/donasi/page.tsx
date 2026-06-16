import type { Metadata } from "next";
import DonationPage from "@/components/donation/DonationPage";

export const metadata: Metadata = {
  title: "Donasi | Paravoice.id",
  description:
    "Dukung jurnalisme olahraga disabilitas yang independen, akurat, dan inklusif bersama Paravoice.id.",
};

export default function Page() {
  return <DonationPage />;
}
