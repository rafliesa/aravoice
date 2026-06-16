import AboutCta from "@/modules/about/sections/AboutCta";
import AboutHero from "@/modules/about/sections/AboutHero";
import AboutJourney from "@/modules/about/sections/AboutJourney";
import AboutTeam from "@/modules/about/sections/AboutTeam";
import AboutValues from "@/modules/about/sections/AboutValues";

export default function AboutPage() {
  return (
    <div className="flex-1 bg-white text-[#1a1a1a]">
      <AboutHero />
      <AboutJourney />
      <AboutValues />
      <AboutTeam />
      <AboutCta />
    </div>
  );
}