import type { Metadata } from "next";
import HomePage from "@/modules/home";

export const metadata: Metadata = {
  title: {
    absolute: "Paravoice.id",
  },
  description:
    "Berita, data, dan cerita terbaru seputar olahraga disabilitas dari Paravoice.id.",
};

export default function Page() {
  return <HomePage />;
}
