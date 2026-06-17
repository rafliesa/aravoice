import type { Metadata } from "next";
import MerchPage from "@/modules/merch";

export const metadata: Metadata = {
  title: "Merch",
  description:
    "Koleksi merchandise Aravoice.id yang mendukung jurnalisme olahraga disabilitas yang inklusif dan independen.",
};

export default function Page() {
  return <MerchPage />;
}
