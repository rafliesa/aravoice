import DonationForm from "@/modules/donation/component/DonationForm";

export default function DonationHero() {
  return (
    <section className="bg-[#f7f7f7] px-6 py-14 sm:py-16">
      <div className="mx-auto max-w-7xl">
        <DonationForm />
      </div>
    </section>
  );
}
