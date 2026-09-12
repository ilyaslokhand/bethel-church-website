import Image from "next/image";
import Button from "@/components/ui/Button";
import SplitTextReveal from "@/components/motion/SplitTextReveal";

export default function ConnectWelcome({
    eyebrow,
    title,
    description,
    image,
    imageAlt,
    opportunities,
    button,
}) {
    return (
        <section className="relative z-10 rounded-t-section bg-paper py-20 md:py-24">
            <div className="site-container">
                <div
                    className="
                        mx-auto grid w-full 
                         gap-12
                        lg:grid-cols-[480px_1fr] lg:gap-10
                    "
                >
                    {/* Section image */}
                    <div
                        className="
                            relative min-h-[420px] overflow-hidden rounded-img
                            sm:min-h-[520px]
                            lg:min-h-[514px]
                        "
                    >
                        <Image
                            src={image}
                            alt={imageAlt}
                            fill
                            sizes="(max-width: 1023px) 100vw, 480px"
                            className="object-cover"
                        />
                    </div>

                    {/* Section content */}
                    <div className="flex flex-col gap-7">
                        <div className="flex flex-col gap-3">
                            <p className="font-semibold text-crimson">
                                {eyebrow}
                            </p>

                            <SplitTextReveal
                                as="h2"
                                className=" text-4xl  lg:text-5xl"
                                fromColor="#C21E384D"
                                toColor="#1E1E1E"
                                start="top 100%"
                                end="top 10%"
                                scrub={1.5}
                                stagger={0.06}
                            >
                                {title}
                            </SplitTextReveal>

                            <p className="text-body">
                                {description}
                            </p>
                        </div>

                        <ul className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
                            {opportunities.map((item) => (
                                <li
                                    key={item.title}
                                    className="grid grid-cols-[48px_1fr] items-start gap-3"
                                >
                                    <div
                                        className="
                                            flex size-12  items-center justify-center
                                            
                                        "
                                    >
                                        <Image
                                            src={item.icon}
                                            alt=""
                                            width={48}
                                            height={48}

                                        />
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <h3 className="text-lg text-ink">
                                            {item.title}
                                        </h3>

                                        <p className="text-sm leading-6 text-body">
                                            {item.description}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div>
                            <Button
                                href={button.href}
                                iconSrc="/icons/arrow-up-right.svg"
                                backgroundColor="transparent"
                                textColor="#1E1E1E"
                                borderColor="#1E1E1E"
                                hoverBackgroundColor="#C21E38"
                                hoverTextColor="#FFFFFF"
                                hoverBorderColor="#C21E38"
                            >
                                {button.label}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}