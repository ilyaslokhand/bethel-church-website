import Image from "next/image";
import Button from "@/components/ui/Button";
import SplitTextReveal from "@/components/motion/SplitTextReveal";

const ministries = [
    {
        title: "Adoración y Alabanza",
        description:
            "Exaltamos el nombre de Jesús mediante una adoración guiada por el Espíritu en cada servicio.",
        status: "Reunión",
        icon: "/icons/worship.svg",
    },
    {
        title: "Oración y Estudio Bíblico",
        description:
            "Buscamos a Dios juntos en oración y crecemos profundamente en Su Palabra.",
        status: "Semanal",
        icon: "/icons/prayer.svg",
    },
    {
        title: "Evangelismo y Alcance",
        description:
            "Alcanzamos a las almas perdidas y compartimos el Evangelio en nuestra comunidad.",
        status: "Mensual",
        icon: "/icons/evangelism.svg",
    },
    {
        title: "Niños y Familia",
        description:
            "Formamos a la próxima generación para que viva con valentía para Cristo.",
        status: "Reunión",
        icon: "/icons/family.svg",
    },
];

export default function MinistriesSection() {
    return (
        <section className="bg-paper py-20 md:py-24">
            <div className="site-container">
                <div className="mx-auto flex w-full  flex-col gap-12">
                    {/* Section heading */}
                    <div className="flex max-w-2xl flex-col gap-3">


                        <p className="text-sm font-semibold text-crimson">
                            Ministerios en Bethel
                        </p>

                        <SplitTextReveal
                            as="h2"
                            className="text-4xl  md:text-5xl "
                            fromColor="#C21E384D"
                            toColor="#1E1E1E"
                            start="top 100%"
                            end="top 10%"
                            scrub={1.5}
                            stagger={0.06}

                        >
                            Donde puedes conectarte
                        </SplitTextReveal>

                        {/* <h2 className="text-4xl text-ink md:text-5xl">
                            Donde puedes conectarte
                        </h2> */}

                        <p className="text-base leading-7 text-body">
                            A medida que la iglesia crece, estas son las áreas que
                            estamos desarrollando. Algunas ya se reúnen y otras
                            comenzarán próximamente.
                        </p>
                    </div>

                    {/* Ministry cards */}
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
                        {ministries.map((ministry, index) => (
                            <article
                                key={ministry.title}
                                className="
                  sticky flex min-h-[310px] flex-col
                  rounded-card border border-line
                  bg-white p-6 shadow-sm
                  md:static
                "
                                style={{
                                    top: `${100 + index * 16}px`,
                                    zIndex: index + 1,
                                }}
                            >
                                {/* Card top */}
                                <div className="flex items-start justify-between gap-4">
                                    <Image
                                        src={ministry.icon}
                                        alt=""
                                        width={52}
                                        height={52}
                                        className="size-[52px]"
                                    />

                                    <span className="rounded-md bg-crimson/10 px-2.5 py-1 text-xs font-semibold text-crimson">
                                        {ministry.status}
                                    </span>
                                </div>

                                <h3 className="mt-7 text-2xl text-ink">
                                    {ministry.title}
                                </h3>

                                <p className="mt-auto pt-8 text-base leading-7 text-body">
                                    {ministry.description}
                                </p>
                            </article>
                        ))}
                    </div>

                    {/* Section button */}
                    <div>
                        <Button
                            href="/connect"
                            iconSrc="/icons/arrow-up-right.svg"
                            iconPosition="right"
                            backgroundColor="transparent"
                            textColor="#1E1E1E"
                            borderColor="#1E1E1E"
                            hoverBackgroundColor="#C21E38"
                            hoverTextColor="#FFFFFF"
                            hoverBorderColor="#C21E38"
                        >
                            Ver todos los ministerios
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}