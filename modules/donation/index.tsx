import DonationHero from "@/modules/donation/sections/DonationHero";
import DonationMain from "@/modules/donation/sections/DonationMain";
import DonationPartners from "@/modules/donation/sections/DonationPartners";
import DonationPartnershipForm from "@/modules/donation/sections/DonationPartnershipForm";
import DonationTransparency from "@/modules/donation/sections/DonationTransparency";
import DonationValues from "@/modules/donation/sections/DonationValues";

export default function DonationPage() {
  return (
    <main className="flex-1 bg-[#f7f7f7] text-[#101522]">
      <DonationHero />
      <DonationMain />
      <DonationValues />
      <DonationTransparency />
      <DonationPartners />
      <DonationPartnershipForm />
    </main>
  );
}
