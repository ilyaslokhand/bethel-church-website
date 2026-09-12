import Image from "next/image";
import Button from "@/components/ui/Button";
import SplitTextReveal from "@/components/motion/SplitTextReveal";
import { footerContent } from "@/content/footer";

function ContactIcon({ src }) {
    return (
        <span
            aria-hidden="true"
            className="mt-0.5 size-5 shrink-0 bg-current"
            style={{
                WebkitMaskImage: `url(${src})`,
                maskImage: `url(${src})`,
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
                maskPosition: "center",
                WebkitMaskSize: "contain",
                maskSize: "contain",
            }}
        />
    );
}

export default function Footer() {
    const { cta, church, services, contact, socials } = footerContent;

    const contactItems = [
        {
            label: contact.address.label,
            href: contact.address.href,
            icon: "/icons/location.svg",
            external: true,
        },
        {
            label: contact.email.label,
            href: contact.email.href,
            icon: "/icons/email.svg",
        },
        {
            label: contact.phone.label,
            href: contact.phone.href,
            icon: "/icons/phone.svg",
        },
    ];

    return (
        <footer className="bg-wine-dark  text-white pt-20 pb-10">
            <div className="site-container flex flex-col gap-16">
                {/* Footer CTA */}
                <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-center">
                    <SplitTextReveal
                        as="h2"
                        className="text-4xl md:text-5xl"
                        fromColor="rgba(255, 255, 255, 0.25)"
                        toColor="#FFFFFF"
                        start="top 100%"
                        end="top 60%"
                        scrub={0.8}
                        stagger={0.1}
                    >
                        {cta.title}
                    </SplitTextReveal>

                    <p className="max-w-xl text-base text-white/80">
                        {cta.description}
                    </p>

                    <div className="grid w-full max-w-[420px] grid-cols-1 gap-3 pt-2 sm:grid-cols-2">
                        {cta.buttons.map((button) => (
                            <Button
                                key={button.href}
                                href={button.href}
                                iconSrc="/icons/arrow-up-right.svg"
                                backgroundColor="transparent"
                                textColor="#FFFFFF"
                                borderColor="#FFFFFF"
                                hoverBackgroundColor="#FBF7EE"
                                hoverTextColor="#1E1E1E"
                                hoverBorderColor="#1E1E1E"
                                className="w-full"
                            >
                                {button.label}
                            </Button>
                        ))}
                    </div>
                </div>

                {/* Footer card */}
                <div className="mx-auto flex w-full max-w-[1220px] flex-col gap-10 rounded-img bg-white px-6 py-8 text-body md:px-10 md:py-10 lg:px-14">
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-[1.25fr_1fr_1fr] lg:gap-16">
                        {/* Church */}
                        <div className="flex flex-col items-start gap-7">
                            <Image
                                src={church.logo}
                                alt={`${church.name} Iglesia`}
                                width={190}
                                height={120}

                            />

                            <p className="max-w-xs text-sm leading-7">
                                {church.description}
                            </p>
                        </div>

                        {/* Services */}
                        <div className="flex flex-col gap-6">
                            <h3 className="text-xl text-ink">
                                Congrégate con nosotros
                            </h3>

                            <div className="flex flex-col gap-5">
                                {services.map((service) => (
                                    <div
                                        key={service.day}
                                        className="flex flex-col gap-1"
                                    >
                                        <p className="font-semibold text-ink">
                                            {service.day} · <time>{service.time}</time>
                                        </p>

                                        <p className="text-sm leading-6">
                                            {service.name}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Contact */}
                        <div className="flex flex-col gap-6">
                            <h3 className="text-xl text-ink">
                                Encuéntranos
                            </h3>

                            <address className="flex flex-col gap-4 not-italic">
                                {contactItems.map((item) => (
                                    <a
                                        key={item.href}
                                        href={item.href}
                                        target={item.external ? "_blank" : undefined}
                                        rel={item.external ? "noopener noreferrer" : undefined}
                                        className="
                      flex items-start gap-3 text-sm leading-6
                      text-body transition-colors duration-300
                      hover:text-crimson
                    "
                                    >
                                        <ContactIcon src={item.icon} />
                                        {item.label}
                                    </a>
                                ))}
                            </address>
                        </div>
                    </div>

                    {/* Footer bottom */}
                    <div className="flex flex-col gap-6 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-sm text-ink">
                            © {new Date().getFullYear()} Bethel. Todos los derechos
                            reservados.
                        </p>

                        <div className="flex items-center gap-3">
                            {socials.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="
                    flex size-10 items-center justify-center rounded-full
                    bg-crimson/10 font-semibold text-crimson
                    transition-colors duration-300
                    hover:bg-crimson hover:text-white
                    focus-visible:outline-none
                    focus-visible:ring-2 focus-visible:ring-crimson
                    focus-visible:ring-offset-2
                  "
                                >
                                    {social.shortLabel}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}