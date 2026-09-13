import Hero from "@/components/sections/Hero";
import ServiceSchedule from "@/components/sections/ServiceSchedule";
import OverlapSection from "@/components/motion/OverlapSection";
import { visitHero, visitSchedule } from "@/content/visit";
import VisitContact from "@/components/sections/VisitContact";

export default function VisitPage() {
    return (
        <main>
            <OverlapSection
                background={<Hero {...visitHero} priority />}
                overlap={60}
            >
                <div id="horarios">
                    <ServiceSchedule {...visitSchedule} roundedTop  />
                </div>
            </OverlapSection >
            <div className="relative z-10 bg-paper">
            <VisitContact/>
            </div>
        </main>
    );
}