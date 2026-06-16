import SupportHero from "@/components/support/sections/SupportHero";
import SupportImageSection from "@/components/support/sections/SupportImageSection";

export default function SupportPage() {
  return (
    <main className="flex-1 bg-[#fdfcf9] text-[#111827]">
      <SupportHero />
      <SupportImageSection />
      <div className="h-28 bg-[#fdfcf9] sm:h-40" aria-hidden="true" />
    </main>
  );
}