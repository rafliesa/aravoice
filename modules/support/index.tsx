import SupportHero from "@/modules/support/sections/SupportHero";
import SupportImageSection from "@/modules/support/sections/SupportImageSection";

export default function SupportPage() {
  return (
    <main className="flex-1 bg-[#fdfcf9] text-[#111827]">
      <SupportHero />
      <SupportImageSection />
    </main>
  );
}