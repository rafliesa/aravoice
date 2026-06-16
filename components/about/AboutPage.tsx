import AboutCta from "@/components/about/sections/AboutCta";
import AboutHero from "@/components/about/sections/AboutHero";
import AboutJourney from "@/components/about/sections/AboutJourney";
import AboutTeam from "@/components/about/sections/AboutTeam";
import AboutValues from "@/components/about/sections/AboutValues";

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