"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function Marquee({
    text,
    separator = "•",
    direction = "right",
    duration = 25,
    repetitions = 4,
    className = "",
}) {
    const marqueeRef = useRef(null);
    const trackRef = useRef(null);

    const items = Array.from(
        { length: repetitions },
        (_, index) => index
    );

    useLayoutEffect(() => {
        const track = trackRef.current;

        if (!track) {
            return;
        }

        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (prefersReducedMotion) {
            gsap.set(track, { xPercent: 0 });
            return;
        }

        const context = gsap.context(() => {
            const movesRight = direction === "right";

            gsap.set(track, {
                xPercent: movesRight ? -50 : 0,
            });

            gsap.to(track, {
                xPercent: movesRight ? 0 : -50,
                duration,
                repeat: -1,
                ease: "none",
            });
        }, marqueeRef);

        return () => {
            context.revert();
        };
    }, [direction, duration]);

    return (
        <div
            ref={marqueeRef}
            role="marquee"
            aria-label={text}
            className={`w-full overflow-hidden ${className}`}
        >
            <div
                ref={trackRef}
                aria-hidden="true"
                className="flex w-max will-change-transform"
            >
                {[0, 1].map((group) => (
                    <div
                        key={group}
                        className="flex shrink-0 items-center"
                    >
                        {items.map((item) => (
                            <div
                                key={`${group}-${item}`}
                                className="flex shrink-0 items-center gap-10 pr-10"
                            >
                                <span className="whitespace-nowrap">
                                    {text}
                                </span>

                                <span aria-hidden="true">
                                    {separator}
                                </span>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}