import Hero from "@/components/sections/Hero";
import ServiceSchedule from "@/components/sections/ServiceSchedule";
import OverlapSection from "@/components/motion/OverlapSection";
import { visitHero, visitSchedule } from "@/content/visit";
import VisitContact from "@/components/sections/VisitContact";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
    title: "Visítanos",
    description: "Horarios de servicio, dirección y qué esperar en tu primera visita a Bethel, 401 N 2nd Avenue, Hopewell, VA.",
    path: "/visit",
});

export default function VisitPage() {
    return (
        <main>
            <OverlapSection
                background={<Hero {...visitHero} priority />}
                overlap={60}
            >
                <div id="horarios">
                    <ServiceSchedule {...visitSchedule} roundedTop />
                </div>
            </OverlapSection >
            <div className="relative z-10 bg-paper">
                <VisitContact />
            </div>
        </main>
    );
}