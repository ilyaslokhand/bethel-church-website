import Image from "next/image";
import SplitTextReveal from "@/components/motion/SplitTextReveal";

const doctrines = [
    {
        title: "Jesús salva",
        description:
            "Recibimos la salvación al arrepentirnos y poner nuestra fe en Jesucristo.",
    },
    {
        title: "Jesús sana",
        description:
            "Creemos que Dios escucha nuestras oraciones y tiene poder para sanar.",
    },
    {
        title: "Jesús viene",
        description:
            "Esperamos el regreso de Jesucristo, nuestra esperanza.",
    },
];

function DoctrineIcon({ light = false }) {
    return (
        <span
            aria-hidden="true"
        >
            <Image
                src="/icons/cross.svg"
                alt=""
                width={60}
                height={60}
                
            />
        </span>
    );
}

function DoctrineCard({ title, description }) {
    return (
        <div className="flex min-h-[280px] flex-col items-start gap-5 rounded-img bg-white p-7 md:min-h-[320px] md:p-8">
            <DoctrineIcon />

            <h3 className="text-2xl text-ink">
                {title}
            </h3>

            <p className="leading-7 text-body">
                {description}
            </p>
        </div>
    );
}

export default function AboutDoctrine() {
    return (
        <section className="relative z-10 bg-paper py-20 md:py-24">
            <div className="site-container">
                <div className="mx-auto grid gap-5 lg:grid-cols-3 lg:gap-6">
                    <div className="flex flex-col gap-5  lg:pr-10">
                        <p className="font-semibold text-crimson">
                            Lo que creemos
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
                            Nuestra doctrina
                        </SplitTextReveal>



                        <p className="leading-7 text-body">
                            Nuestra fe está centrada en Jesucristo, en la
                            autoridad de la Palabra de Dios y en el poder
                            del Espíritu Santo.
                        </p>
                    </div>

                    <DoctrineCard {...doctrines[0]} />
                    <DoctrineCard {...doctrines[1]} />

                    <div className="relative isolate flex min-h-[320px] flex-col items-start justify-end gap-5 overflow-hidden rounded-img p-7 text-white md:p-8 lg:col-span-2">
                        <Image
                            src="/images/about-doctrine.png"
                            alt="Edificio de una iglesia bajo el cielo"
                            fill
                            sizes="(max-width: 1023px) calc(100vw - 40px), 800px"
                            className="-z-20 object-cover"
                        />

                        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-wine-dark/90 via-wine-dark/55 to-transparent" />

                        

                        <h3 className="text-2xl text-white">
                            Jesús bautiza en el Espíritu Santo
                        </h3>

                        <p className="max-w-[360px] leading-7 text-white">
                            El Espíritu Santo nos llena y nos da poder para
                            vivir y compartir el Evangelio.
                        </p>
                    </div>

                    <DoctrineCard {...doctrines[2]} />
                </div>
            </div>
        </section>
    );
}