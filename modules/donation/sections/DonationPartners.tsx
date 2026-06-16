import {
  BriefcaseIcon,
  CalendarSmallIcon,
  CommunityIcon,
  GraduationIcon,
  MailIcon,
  ShieldIcon,
} from "@/modules/donation/component/icons";

const partners = [
  { label: "Media", icon: <MailIcon /> },
  { label: "Community", icon: <CommunityIcon /> },
  { label: "Academic", icon: <GraduationIcon /> },
  { label: "NGO", icon: <ShieldIcon /> },
  { label: "Corporate", icon: <BriefcaseIcon /> },
  { label: "Event", icon: <CalendarSmallIcon /> },
];

export default function DonationPartners() {
  return (
    <section className="border-t border-[#d4d8e0] bg-[#f7f7f7] px-6 py-20">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="motion-fade-up text-4xl font-extrabold tracking-tight">
          Menjadi Mitra ParaVoice
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-[#5d6574]">
          Kami membuka kolaborasi strategis bagi organisasi yang memiliki visi
          yang sama dalam mewujudkan dunia jurnalisme yang inklusif.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {partners.map((partner, index) => (
            <article
              key={partner.label}
              className="motion-card motion-fade-up flex h-32 flex-col items-center justify-center rounded-lg border border-[#d4d8e0] bg-[#fbf8f3] text-[#101522]"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <span className="text-[#9a5a00]">{partner.icon}</span>
              <h3 className="mt-4 text-sm font-extrabold">{partner.label}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
