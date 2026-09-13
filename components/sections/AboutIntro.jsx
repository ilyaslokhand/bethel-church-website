import Image from "next/image";
import Button from "@/components/ui/Button";
import SplitTextReveal from "@/components/motion/SplitTextReveal";

export default function AboutIntro() {
    return (
        <section className="relative z-10 rounded-t-section bg-paper py-16 md:py-24">
            <div className="site-container">
                <div className="mx-auto grid  items-center gap-10 lg:grid-cols-2 lg:gap-20">
                    <div className="relative aspect-[540/480] overflow-hidden rounded-img">
                        <Image
                            src="/images/about-church.png"
                            alt="Interior de la iglesia Bethel"
                            fill
                            sizes="(max-width: 1023px) calc(100vw - 40px), 540px"
                            className="object-cover"
                        />
                    </div>

                    <div className="flex flex-col items-start gap-6">
                        <div className="flex flex-col gap-3">
                            <p className="font-semibold text-crimson">
                                Quiénes somos
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
                                Una iglesia donde Jesús es el centro de todo lo que somos.
                            </SplitTextReveal>


                        </div>

                        <p className="leading-relaxed text-body">
                            Somos una iglesia donde la Palabra de Dios se predica,
                            se enseña y se vive, guiados por el poder y la
                            dirección del Espíritu Santo.
                        </p>

                        <p className="leading-relaxed text-body">
                            Somos una iglesia activa, viva y compasiva. Reconocemos
                            los tiempos en que vivimos y compartimos con urgencia
                            el Evangelio de Jesucristo mientras esperamos Su regreso.
                        </p>

                        <Button
                            href="/visit"
                            iconSrc="/icons/arrow-up-right.svg"
                            backgroundColor="transparent"
                            textColor="#1E1E1E"
                            borderColor="#1E1E1E"
                            hoverBackgroundColor="#C21E38"
                            hoverTextColor="#FFFFFF"
                            hoverBorderColor="#C21E38"
                        >
                            Planifica tu visita
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}