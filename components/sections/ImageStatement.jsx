import Image from "next/image";
import SplitTextReveal from "@/components/motion/SplitTextReveal";


export default function ImageStatement({
    eyebrow,
    title,
    quote,
    reference,
    backgroundImage,
    imageAlt,
    priority = false,
    className = "",
}) {
    return (
        <section
            className={`bg-paper pb-16 md:pb-24 ${className}`}
        >
            <div className="site-container">
                <div
                    className="
            relative mx-auto min-h-[520px] w-full
            overflow-hidden rounded-img
          "
                >
                    {/* Background image */}
                    <Image
                        src={backgroundImage}
                        alt={imageAlt}
                        fill
                        priority={priority}
                        sizes="(max-width: 1240px) 100vw, 1220px"
                        className="object-cover"
                    />

                    {/* Dark and crimson overlay */}
                    <div
                        aria-hidden="true"
                        className="
              absolute inset-0
              bg-gradient-to-b
              from-ink/5 via-wine-dark/20 to-wine-dark/90
            "
                    />

                    {/* Content */}
                    <div
                        className="
              relative z-10 grid min-h-[520px]
              items-end gap-10 px-6 py-10
              md:grid-cols-2 md:px-12 md:py-14
              lg:gap-20
            "
                    >
                        {/* Left content */}
                        <div className="flex flex-col gap-4">
                            {eyebrow && (
                                <p className="text-sm font-semibold text-white">
                                    {eyebrow}
                                </p>
                            )}



                            <h2 className="max-w-xl text-4xl text-white md:text-5xl">
                                {title}
                            </h2>
                        </div>

                        {/* Quote */}
                        <blockquote className="flex max-w-xl flex-col gap-4">
                            <SplitTextReveal
                                as="p"
                                className="font-display text-xl font-semibold italic leading-relaxed text-white "
                                fromColor="rgba(255, 255, 255, 0.25)"
                                toColor="#FFFFFF"
                                start="top 100%"
                                end="top 60%"
                                scrub={0.8}
                                stagger={0.1}

                            >
                                “{quote}”
                            </SplitTextReveal>
                            {/* <p className="font-display text-xl font-semibold italic leading-relaxed text-white md:text-2xl">
                                “{quote}”
                            </p> */}

                            {reference && (
                                <cite className="text-sm font-semibold not-italic text-white">
                                    {reference}
                                </cite>
                            )}
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
    );
}