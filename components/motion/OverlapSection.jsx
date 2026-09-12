"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function PinnedOverlap({
    background,
    children,
    overlap = 60,
    moveBackground = 8,
    scaleBackground = 0.98,
}) {
    const wrapperRef = useRef(null);
    const backgroundRef = useRef(null);
    const backgroundVisualRef = useRef(null);
    const foregroundRef = useRef(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (prefersReducedMotion) {
            return;
        }

        const context = gsap.context(() => {
            // Pin the Hero only until the second section reaches the top.
            ScrollTrigger.create({
                trigger: backgroundRef.current,
                start: "top top",
                endTrigger: foregroundRef.current,
                end: "top top",
                pin: backgroundRef.current,
                pinSpacing: false,
                anticipatePin: 1,
                invalidateOnRefresh: true,
            });

            // Add subtle depth while the second section covers the Hero.
            gsap.to(backgroundVisualRef.current, {
                yPercent: moveBackground,
                scale: scaleBackground,
                transformOrigin: "center top",
                ease: "none",

                scrollTrigger: {
                    trigger: backgroundRef.current,
                    start: "top top",
                    endTrigger: foregroundRef.current,
                    end: "top top",
                    scrub: 1,
                    invalidateOnRefresh: true,
                },
            });
        }, wrapperRef);

        return () => {
            context.revert();
        };
    }, [moveBackground, scaleBackground]);

    return (
        <div ref={wrapperRef} className="relative">
            {/* Hero layer */}
            <div ref={backgroundRef} className="relative z-0">
                <div ref={backgroundVisualRef}>
                    {background}
                </div>
            </div>

            {/* Second section */}
            <div
                ref={foregroundRef}
                className="relative z-10"
                style={{
                    marginTop: `-${overlap}px`,
                }}
            >
                {children}
            </div>
        </div>
    );
}