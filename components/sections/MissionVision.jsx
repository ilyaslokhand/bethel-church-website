import SplitTextReveal from "@/components/motion/SplitTextReveal";

export default function MissionVision() {
    return (
        <section className="relative z-10 bg-[linear-gradient(110deg,#262323_0%,#711120_100%)] py-20 text-white md:py-28">
            <div className="site-container">
                <div className="mx-auto grid  gap-12 md:grid-cols-2 md:gap-16">
                    <div className="flex flex-col gap-6 md:border-r md:border-white/40 md:pr-16">
                        <div className="flex flex-col gap-5">
                            <p className="font-semibold uppercase text-white/85">
                                Nuestra misión
                            </p>

                            <SplitTextReveal
                                as="h2"
                                className="text-4xl  md:text-5xl "
                                fromColor="rgba(255, 255, 255, 0.25)"
                                toColor="#fff"
                                start="top 100%"
                                end="top 10%"
                                scrub={1.5}
                                stagger={0.06}

                            >
                                Cumplir la Gran Comisión.
                            </SplitTextReveal>

                            
                        </div>

                        <p className="leading-8 text-white/90">
                            Nuestra misión es cumplir la Gran Comisión que nos
                            dio nuestro Señor Jesucristo: compartir el Evangelio,
                            ver vidas transformadas y formar discípulos maduros,
                            llenos del poder del Espíritu Santo.
                        </p>

                        <blockquote className="flex flex-col gap-3">
                            <p className="font-display text-xl font-semibold italic leading-relaxed text-white">
                                “Vayan y hagan discípulos de todas las naciones…”
                            </p>

                            <cite className="not-italic text-white/85">
                                Mateo 28:19
                            </cite>
                        </blockquote>
                    </div>

                    <div className="flex flex-col gap-6 border-t border-white/40 pt-12 md:border-0 md:pt-0">
                        <div className="flex flex-col gap-5">
                            <p className="font-semibold uppercase text-white/85">
                                Nuestra visión
                            </p>

                            <SplitTextReveal
                                as="h2"
                                className="text-4xl  md:text-5xl "
                                fromColor="rgba(255, 255, 255, 0.25)"
                                toColor="#fff"
                                start="top 100%"
                                end="top 10%"
                                scrub={1.5}
                                stagger={0.06}

                            >
                                Que nuestra comunidad conozca a Jesús.
                            </SplitTextReveal>


                        </div>

                        <p className="leading-8 text-white/90">
                            A medida que Bethel crece y fortalece sus bases,
                            deseamos desarrollar ministerios que sirvan a la
                            iglesia y compartan el Evangelio en Hopewell y el
                            área de Richmond.
                        </p>

                        <p className="leading-8 text-white/90">
                            Trabajamos y oramos con la esperanza de que más
                            personas conozcan el amor de Dios y sus vidas sean
                            transformadas por el poder de Jesucristo.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}