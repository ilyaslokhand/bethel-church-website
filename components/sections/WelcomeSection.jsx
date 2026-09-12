import Image from "next/image";
import Marquee from "@/components/motion/Marquee";
import SplitTextReveal from "@/components/motion/SplitTextReveal";

export default function WelcomeSection({
    marquee,
    title,
    paragraphs,
    quote,
    reference,
    images,
}) {
    return (
        <section className="rounded-t-section bg-paper py-16 md:py-24">
            {/* Full-width marquee */}
            <Marquee
                text={marquee.text}
                separator={marquee.separator}
                direction={marquee.direction}
                duration={marquee.duration}
                repetitions={marquee.repetitions}
                className="
          font-display text-5xl font-semibold
          uppercase text-crimson/30
          md:text-6xl lg:text-7xl
        "
            />

            <div className="site-container pt-16 md:pt-20">
                <div
                    className="
            mx-auto grid w-full 
            items-center gap-14
            lg:grid-cols-2 lg:gap-16
          "
                >
                    {/* Image collage */}
                    <div className="relative min-h-[480px] md:min-h-[620px]">
                        {/* Main vertical image */}
                        <div
                            className="
                absolute right-[5%] top-0
                h-[88%] w-[76%]
                overflow-hidden rounded-img
              "
                        >
                            <Image
                                src={images.main.src}
                                alt={images.main.alt}
                                fill
                                sizes="(max-width: 1024px) 80vw, 500px"
                                className="object-cover"
                            />
                        </div>

                        {/* Left overlapping image */}
                        <div
                            className="
                absolute -left-5 top-[12%]
                h-[34%] w-[58%]
                overflow-hidden rounded-card
              "
                        >
                            <Image
                                src={images.left.src}
                                alt={images.left.alt}
                                fill
                                sizes="(max-width: 1024px) 60vw, 360px"
                                className="object-cover"
                            />
                        </div>

                        {/* Bottom overlapping image */}
                        <div
                            className="
                absolute bottom-0 right-0
                h-[30%] w-[50%]
                overflow-hidden rounded-card
              "
                        >
                            <Image
                                src={images.bottom.src}
                                alt={images.bottom.alt}
                                fill
                                sizes="(max-width: 1024px) 50vw, 310px"
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Text content */}
                    <div className="flex flex-col gap-6">
                        <SplitTextReveal
                            as="h2"
                            className="max-w-2xl text-4xl  lg:text-5xl"
                            fromColor="#C21E384D"
                            toColor="#1E1E1E"
                            start="top 100%"
                            end="top 10%"
                            scrub={1.5}
                            stagger={0.06}
                        >
                            {title}
                        </SplitTextReveal>
                        {/* <h2 className="max-w-2xl text-4xl text-ink lg:text-5xl">
                            {title}
                        </h2> */}

                        <div className="flex flex-col gap-4">
                            {paragraphs.map((paragraph, index) => (
                                <p
                                    key={index}
                                    className="text-base leading-8 text-body"
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
                            <blockquote>
                                <p className="font-display text-lg font-semibold italic text-muted">
                                    “{quote}”
                                </p>
                            </blockquote>

                            <p className="text-sm font-semibold text-crimson">
                                {reference}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}