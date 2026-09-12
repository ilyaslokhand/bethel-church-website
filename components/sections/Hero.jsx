import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Hero({
    title,
    description,
    backgroundImage,
    imageAlt,
    buttons = [],
    priority = false,
    className = "",
}) {
    return (
        <section
            className={`
        relative isolate flex min-h-[700px]
        items-center overflow-hidden
        md:min-h-[900px]
        ${className}
      `}
        >
            {/* Background image */}
            <Image
                src={backgroundImage}
                alt={imageAlt}
                fill
                priority={priority}
                sizes="100vw"
                className="-z-20 object-cover"
            />

            {/* Dark image overlay */}
            <div
                aria-hidden="true"
                className="
          absolute inset-0 -z-10
          bg-gradient-to-b
          from-ink/20 via-ink/35 to-ink/70
        "
            />

            {/* Hero content */}
            <div className="site-container mt-7">
                <div className="mx-auto flex max-w-[850px] flex-col items-center gap-6 text-center">
                    <h1 className="text-5xl uppercase text-white md:text-6xl lg:text-7xl">
                        {title.map((line) => (
                            <span key={line} className="block">
                                {line}
                            </span>
                        ))}
                    </h1>

                    <p className="max-w-2xl text-base leading-7 text-white md:text-lg">
                        {description}
                    </p>

                    {buttons.length > 0 && (
                        <div className="grid w-full max-w-[420px] grid-cols-1 gap-3 pt-2 sm:grid-cols-2">
                            {buttons.map((button) => (
                                <Button
                                    key={`${button.href}-${button.label}`}
                                    href={button.href}
                                    iconSrc={button.iconSrc}
                                    iconPosition={button.iconPosition}
                                    backgroundColor={button.backgroundColor}
                                    textColor={button.textColor}
                                    borderColor={button.borderColor}
                                    hoverBackgroundColor={button.hoverBackgroundColor}
                                    hoverTextColor={button.hoverTextColor}
                                    hoverBorderColor={button.hoverBorderColor}
                                    className="w-full"
                                >
                                    {button.label}
                                </Button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}