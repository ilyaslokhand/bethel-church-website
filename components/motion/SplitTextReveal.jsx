"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

export default function SplitTextReveal({
    children,
    as: Element = "h2",
    className = "",
    fromColor = "rgba(255, 255, 255, 0.25)",
    toColor = "#FFFFFF",
    start = "top 100%",
    end = "top 55%",
    scrub = 1,
    stagger = 0.1,
}) {
    const headingRef = useRef(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (prefersReducedMotion) {
            gsap.set(headingRef.current, {
                color: toColor,
            });

            return;
        }

        let split;

        const context = gsap.context(() => {
            split = new SplitType(headingRef.current, {
                types: "words, chars",
                tagName: "span",
            });

            // Keep words together while allowing the heading to wrap naturally.
            gsap.set(split.words, {
                display: "inline-block",
            });

            gsap.set(split.chars, {
                display: "inline-block",
                color: fromColor,
            });

            // Hide the split characters from screen readers because the
            // complete heading is provided through aria-label.
            split.chars.forEach((character) => {
                character.setAttribute("aria-hidden", "true");
            });

            gsap
                .timeline({
                    scrollTrigger: {
                        trigger: headingRef.current,
                        start,
                        end,
                        scrub,
                        invalidateOnRefresh: true,
                    },
                })
                .to(split.chars, {
                    color: toColor,
                    duration: 1,
                    stagger,
                    ease: "none",
                });
        }, headingRef);

        return () => {
            context.revert();
            split?.revert();
        };
    }, [children, fromColor, toColor, start, end, scrub, stagger]);

    const accessibleLabel =
        typeof children === "string" ? children : undefined;

    return (
        <Element
            ref={headingRef}
            className={className}
            aria-label={accessibleLabel}
            style={{ color: toColor }}
        >
            {children}
        </Element>
    );
}