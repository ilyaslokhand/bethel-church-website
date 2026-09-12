import Hero from "@/components/sections/Hero";
import ImageStatement from "@/components/sections/ImageStatement";
import { homeHero,homeStatement,homeWelcome } from "@/content/home";
import OverlapSection from "@/components/motion/OverlapSection";
import WelcomeSection from "@/components/sections/WelcomeSection";


export default function HomePage() {
  return (
    <main>
      <OverlapSection
        background={<Hero {...homeHero} priority />}
        overlap={60}
      >
        <WelcomeSection {...homeWelcome} />
      </OverlapSection>

      {/* The third section is completely outside the pin animation */}
      <ImageStatement {...homeStatement} />
    </main>
  );
}