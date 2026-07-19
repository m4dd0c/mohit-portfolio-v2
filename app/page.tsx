import HeroSection from "./HeroSection";
import SkillsSection from "./SkillsSection";
import FeaturedWorkSection from "./FeaturedWorkSection";
import TechStackSection from "./TechStackSection";
import FooterSection from "./FooterSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center">
      <HeroSection />
      <div className="w-full pt-10">
        <SkillsSection />
        <FeaturedWorkSection />
        <TechStackSection />
      </div>
      <FooterSection />
    </main>
  );
}
