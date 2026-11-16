import Hero from "@/components/sections/Hero";
import OverlapSection from "@/components/motion/OverlapSection";
import AboutLeadership from "@/components/sections/AboutLeadership";


import {
    aboutHero,
} from "@/content/about";
import AboutIntro from "@/components/sections/AboutIntro";
import MissionVision from "@/components/sections/MissionVision";
import AboutValues from "@/components/sections/AboutValues";
import AboutDoctrine from "@/components/sections/AboutDoctrine";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
    title: "Quiénes Somos",
    description: "Conoce la misión, los valores, la doctrina y el liderazgo de Bethel, iglesia cristiana en Hopewell, Virginia.",
    path: "/about",
});

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
            <AboutDoctrine />
            <AboutLeadership />


        </main>
    );
}