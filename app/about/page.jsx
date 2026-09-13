import Hero from "@/components/sections/Hero";
import OverlapSection from "@/components/motion/OverlapSection";


import {
    aboutHero,
} from "@/content/about";
import AboutIntro from "@/components/sections/AboutIntro";
import MissionVision from "@/components/sections/MissionVision";
import AboutValues from "@/components/sections/AboutValues";

export default function AboutPage() {
    return (
        <main>
            <OverlapSection
                background={<Hero {...aboutHero} priority />}
                overlap={60}
            >
                <AboutIntro />
            </OverlapSection>
            <MissionVision />
            <AboutValues />

            {/* <div className="relative z-10 bg-paper">
                <ImageStatement {...connectStatement} />
            </div>
             <ConnectMinistries {...connectMinistries} />
             <NextSteps /> */}
        </main>
    );
}