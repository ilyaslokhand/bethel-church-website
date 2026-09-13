import Image from "next/image";
import SplitTextReveal from "@/components/motion/SplitTextReveal";

const values = [
    {
        title: "Predicación",
        description:
            "Predicamos y enseñamos con la Biblia abierta, confiando en el poder de Su Palabra.",
        icon: "/icons/prayer.svg",
    },
    {
        title: "Poder",
        description:
            "Vivimos transformados y llenos del poder del Espíritu Santo.",
        icon: "/icons/churchicon.svg",
    },
    {
        title: "Oración",
        description:
            "Hacemos de la oración una prioridad y buscamos a Dios en todo momento.",
        icon: "/icons/praying.svg",
    },
    {
        title: "Adoración",
        description:
            "Adoramos a Dios con pasión y celebramos Su presencia entre nosotros.",
        icon: "/icons/worship.svg",
    },
    {
        title: "Amor",
        description:
            "Amamos a los demás porque Dios nos amó primero.",
        icon: "/icons/hearticon.svg",
    },
    {
        title: "Generosidad",
        description:
            "Compartimos con manos abiertas para apoyar la visión y la misión.",
        icon: "/icons/plant.svg",
    },
    {
        title: "Servicio",
        description:
            "Servimos como las manos y los pies de Jesucristo, usando nuestros dones para Su gloria.",
        icon: "/icons/family.svg",
    },
    {
        title: "Excelencia",
        description:
            "Damos lo mejor en todo lo que hacemos para honrar a Dios.",
        icon: "/icons/stars.svg",
    },
];

export default function AboutValues() {
    return (
        <section className="relative z-10 bg-white py-20 md:py-24">
            <div className="site-container">
                <div className="mx-auto ">
                    <div className="mx-auto flex max-w-[700px] flex-col items-center gap-3 text-center">
                        <p className="font-semibold text-crimson">
                            Nuestros valores
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
                            Lo que nos define
                        </SplitTextReveal>



                        <p className="leading-relaxed text-body">
                            Ocho compromisos que guían nuestra adoración,
                            nuestro servicio y nuestra vida en comunidad.
                        </p>
                    </div>

                    <ul className="mt-12 grid gap-4 md:grid-cols-2 md:gap-x-8 md:gap-y-14 lg:grid-cols-4 lg:gap-x-0">
                        {values.map((value, index) => (
                            <li
                                key={value.title}
                                className={`
                                    sticky flex min-h-[240px] flex-col gap-5
                                    rounded-card border border-line  p-7
                                    md:min-h-0 md:rounded-none
                                    md:border-0 md:bg-transparent md:p-0
                                    lg:px-10
                                    ${index % 4 === 0 ? "lg:pl-0" : "lg:border-l lg:border-line"}
                                `}
                                
                            >
                                <Image
                                    src={value.icon}
                                    alt=""
                                    width={52}
                                    height={52}
                                    className="size-12 object-contain"
                                />

                                <h3 className="text-2xl text-ink">
                                    {value.title}
                                </h3>

                                <p className="leading-7 text-body">
                                    {value.description}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}