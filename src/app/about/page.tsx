import { AboutNavigation } from "@/components/about/AboutNavigation";
import { AboutProfile } from "@/components/about/AboutProfile";
import { AboutIntroduction } from "@/components/about/AboutIntroduction";
import { AboutExperience } from "@/components/about/AboutExperience";
import { AboutEducation } from "@/components/about/AboutEducation";
import { AboutCodingStats } from "@/components/about/AboutCodingStats";
import TechStack from "@/components/TechStack";

export default function AboutPage() {
  return (
    <div className="w-full flex flex-col lg:flex-row gap-1 relative animate-in fade-in slide-in-from-bottom-8 duration-700 pb-16">
      <AboutNavigation />
      
      <AboutProfile />

      <main className="flex-1 min-w-0 w-full mx-auto lg:mx-0 flex flex-col gap-16">
        <AboutIntroduction />
        <AboutExperience />
        <AboutEducation />
        <TechStack />
        <AboutCodingStats />
      </main>
    </div>
  );
}
