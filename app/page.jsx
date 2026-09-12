import Hero from "@/components/sections/Hero";
import ImageStatement from "@/components/sections/ImageStatement";
import { homeHero,homeStatement,homeWelcome,homeSchedule } from "@/content/home";
import OverlapSection from "@/components/motion/OverlapSection";
import WelcomeSection from "@/components/sections/WelcomeSection";
import ServiceSchedule from "@/components/sections/ServiceSchedule";
import MinistriesSection from "@/components/sections/MinistriesSection";


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
      <ServiceSchedule {...homeSchedule} />
      <MinistriesSection/>
    </main>
  );
}