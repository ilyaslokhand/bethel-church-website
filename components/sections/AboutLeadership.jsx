import Image from "next/image";
import Button from "@/components/ui/Button";
import SplitTextReveal from "@/components/motion/SplitTextReveal";


export default function AboutLeadership() {
    return (
        <section className="relative z-10 bg-white py-20 md:py-24">
            <div className="site-container">
                <div className="mx-auto grid  items-center gap-10 lg:grid-cols-2 lg:gap-20">
                    <div className="relative aspect-[540/480] overflow-hidden rounded-img">
                        <Image
                            src="/images/about-leadership.png"
                            alt="Liderazgo de la iglesia Bethel"
                            fill
                            sizes="(max-width: 1023px) calc(100vw - 40px), 540px"
                            className="object-cover"
                        />
                    </div>

                    <div className="flex flex-col items-start gap-6">
                        <div className="flex flex-col gap-3">
                            <p className="font-semibold text-crimson">
                                Nuestro liderazgo
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
                                Conoce a nuestro pastor
                            </SplitTextReveal>


                        </div>

                        <p className="max-w-[600px] leading-8 text-body">
                            Nuestro liderazgo está aquí para acompañar,
                            enseñar y cuidar a nuestra familia de fe mientras
                            crecemos juntos en Cristo.
                        </p>

                        <Button
                            iconSrc="/icons/arrow-up-right.svg"
                            iconPosition="right"
                            href="tel:+18042231109"
                            backgroundColor="transparent"
                            textColor="#1E1E1E"
                            borderColor="#1E1E1E"
                            hoverBackgroundColor="#C21E38"
                            hoverTextColor="#FFFFFF"
                            hoverBorderColor="#C21E38"

                        >
                            Llámanos para conocernos
                        </Button>
                    </div>
                </div>
            </div>
        </section >
    );
}