import DonationContactReports from "@/modules/donation/sections/DonationContactReports";
import DonationHero from "@/modules/donation/sections/DonationHero";
import DonationMain from "@/modules/donation/sections/DonationMain";
import DonationValues from "@/modules/donation/sections/DonationValues";

export default function DonationPage() {
  return (
    <main className="flex-1 bg-[#f7f7f7] text-[#101522]">
      <DonationHero />
      <DonationMain />
      <DonationContactReports />
      <DonationValues />
    </main>
  );
}
