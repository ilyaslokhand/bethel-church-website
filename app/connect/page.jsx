import Hero from "@/components/sections/Hero";
import ConnectWelcome from "@/components/sections/ConnectWelcome";
import ImageStatement from "@/components/sections/ImageStatement";
import OverlapSection from "@/components/motion/OverlapSection";
import ConnectMinistries from "@/components/sections/ConnectMinistries";
import NextSteps from "@/components/sections/NextSteps";

import {
    connectHero,
    connectWelcome,
    connectStatement,
    connectMinistries,
} from "@/content/connect";

export default function ConnectPage() {
    return (
        <main>
            <OverlapSection
                background={<Hero {...connectHero} priority />}
                overlap={60}
            >
                <ConnectWelcome {...connectWelcome} />
            </OverlapSection>

             <div className="relative z-10 bg-paper">
                <ImageStatement {...connectStatement} />
            </div>
             <ConnectMinistries {...connectMinistries} />
             <NextSteps />
        </main>
    );
}