"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const lenis = new Lenis({
            duration: 1.2,

            easing: (value) =>
                Math.min(1, 1.001 - Math.pow(2, -10 * value)),

            smoothWheel: true,
            wheelMultiplier: 0.9,

            // Keep the browser's optimized native touch scrolling.
            syncTouch: true,
            touchMultiplier: 0.85,
           

            anchors: true,
            autoToggle: true,
            stopInertiaOnNavigate: true,
            respectReducedMotion: true,
        });

        function updateScrollTrigger() {
            ScrollTrigger.update();
        }

        function updateLenis(time) {
            lenis.raf(time * 1000);
        }

        lenis.on("scroll", updateScrollTrigger);
        gsap.ticker.add(updateLenis);
        gsap.ticker.lagSmoothing(0);

        ScrollTrigger.refresh();

        return () => {
            lenis.off("scroll", updateScrollTrigger);
            gsap.ticker.remove(updateLenis);
            lenis.destroy();
        };
    }, []);

    return null;
}