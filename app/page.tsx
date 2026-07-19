import HeroSection from "./HeroSection";
import SkillsSection from "./SkillsSection";
import FeaturedWorkSection from "./FeaturedWorkSection";
import TechStackSection from "./TechStackSection";
import FooterSection from "./FooterSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center">
      <div id="about" className="w-full">
        <HeroSection />
      </div>
      <div className="w-full pt-10">
        <div id="skills">
          <SkillsSection />
        </div>
        <div id="projects">
          <FeaturedWorkSection />
        </div>
        <TechStackSection />
      </div>
      <div id="contact" className="w-full">
        <FooterSection />
      </div>
    </main>
  );
}
