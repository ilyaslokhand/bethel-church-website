import Image from "next/image";
import Button from "@/components/ui/Button";
import SplitTextReveal from "@/components/motion/SplitTextReveal";


export default function ServiceSchedule({
    eyebrow,
    title,
    description,
    services,
    image,
    button,
    imagePosition = "right",
    backgroundColor = "#FFFFFF",
    rowBackgroundColor = "#FBF7EE",
}) {
    const imageOrder =
        imagePosition === "left"
            ? "lg:order-first"
            : "lg:order-last";

    return (
        <section
            className="py-20 md:py-24"
            style={{ backgroundColor }}
        >
            <div className="site-container">
                <div
                    className="
            mx-auto grid w-full 
            items-center gap-12
            lg:grid-cols-2 lg:gap-20
          "
                >
                    {/* Schedule content */}
                    <div className="flex flex-col items-start gap-6">
                        <div className="flex flex-col gap-3">
                            {eyebrow && (
                                <p className="text-sm font-semibold text-crimson">
                                    {eyebrow}
                                </p>
                            )}

                            <SplitTextReveal
                                as="h2"
                                className="text-4xl  md:text-5xl "
                                fromColor="#C21E384D"
                                toColor="#1E1E1E"
                                start="top 100%"
                                end="top 60%"
                                scrub={0.8}
                                stagger={0.1}

                            >
                                {title}
                            </SplitTextReveal>



                            <p className="text-base leading-7 text-body">
                                {description}
                            </p>
                        </div>

                        {/* Service schedule */}
                        <ul className="flex w-full flex-col gap-3">
                            {services.map((service) => (
                                <li
                                    key={`${service.day}-${service.time}`}
                                    className="
                    grid items-center gap-x-4 gap-y-1
                    rounded-card px-5 py-4
                    sm:grid-cols-[100px_1fr_auto]
                  "
                                    style={{
                                        backgroundColor: rowBackgroundColor,
                                    }}
                                >
                                    <p className="font-display text-lg font-semibold italic text-crimson">
                                        {service.day}
                                    </p>

                                    <p className="col-span-2 text-sm text-body sm:col-span-1 md:text-base">
                                        {service.name}
                                    </p>

                                    <time
                                        dateTime={service.dateTime}
                                        className="
                      col-start-2 row-start-1 whitespace-nowrap
                      text-sm font-semibold text-ink
                      sm:col-auto sm:row-auto md:text-base
                    "
                                    >
                                        {service.time}
                                    </time>
                                </li>
                            ))}
                        </ul>

                        {/* CTA button */}
                        {button && (
                            <div className="pt-3">
                                <Button
                                    href={button.href}
                                    iconSrc={button.iconSrc}
                                    iconPosition="right"
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
                        )}
                    </div>

                    {/* Section image */}
                    <div
                        className={`
              relative aspect-[540/455] w-full
              overflow-hidden rounded-img
              ${imageOrder}
            `}
                    >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            sizes="(max-width: 1024px) 100vw, 540px"
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}