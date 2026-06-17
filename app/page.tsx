import type { Metadata } from "next";
import HomePage from "@/modules/home";

export const metadata: Metadata = {
  title: {
    absolute: "Aravoice.id",
  },
  description:
    "Berita, data, dan cerita terbaru seputar olahraga disabilitas dari Aravoice.id.",
};

export default function Page() {
  return <HomePage />;
}
