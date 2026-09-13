import Button from "@/components/ui/Button";
import SplitTextReveal from "@/components/motion/SplitTextReveal";

const steps = [
    {
        title: "Asiste a un servicio",
        description:
            "Ven tal como eres el domingo, martes o viernes y adora con nosotros.",
        position: "lg:left-[10%] lg:top-[400px]",
    },
    {
        title: "Conecta con nosotros",
        description:
            "Salúdanos después del servicio o contáctanos. Nos encantará conocerte.",
        position: "lg:left-[48%] lg:top-[262px]",
    },
    {
        title: "Encuentra tu lugar",
        description:
            "Descubre cómo tus dones pueden servir a la iglesia y a la ciudad.",
        position: "lg:left-[77%] lg:top-[16px]",
    },
];

export default function NextSteps() {
    return (
        <section className="relative z-10 bg-paper py-16 md:py-24">
            <div className="site-container">
                <div className="relative mx-auto  lg:min-h-[620px]">
                    {/* Section introduction */}
                    <div className="flex max-w-[560px] flex-col items-start gap-6">
                        <div className="flex flex-col gap-3">
                            <p className="font-semibold text-crimson">
                                Tu próximo paso
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
                                Dar el siguiente paso es sencillo
                            </SplitTextReveal>

                            
                        </div>

                        <Button
                            href="/visit"
                            iconSrc="/icons/arrow-up-right.svg"
                            iconPosition="right"
                            backgroundColor="transparent"
                            textColor="#1E1E1E"
                            borderColor="#1E1E1E"
                            hoverBackgroundColor="#C21E38"
                            hoverTextColor="#FFFFFF"
                            hoverBorderColor="#C21E38"
                            // showArrow={false}
                        >
                            Planifica tu visita
                        </Button>
                    </div>

                    {/* Decorative desktop curve */}
                    <svg
                        aria-hidden="true"
                        viewBox="0 0 1220 520"
                        fill="none"
                        className="
                            pointer-events-none absolute inset-x-0 top-0
                            hidden h-[520px] w-full lg:block
                        "
                    >
                        <path
                            d="
                                M 0 345
                                C 65 390, 110 425, 155 432
                                S 235 455, 300 395
                                S 420 245, 530 280
                                S 705 320, 770 250
                                S 900 65, 971 48
                                S 1050 18, 1080 25
                            "
                            stroke="#1E1E1E"
                            strokeOpacity="0.08"
                            strokeWidth="18"
                            strokeLinecap="round"
                            transform="translate(0 8)"
                        />

                        <path
                            d="
                                M 0 345
                                C 65 390, 110 425, 155 432
                                S 235 455, 300 395
                                S 420 245, 530 280
                                S 705 320, 770 250
                                S 900 65, 971 48
                                S 1050 18, 1080 25
                            "
                            stroke="#C21E38"
                            strokeWidth="4"
                            strokeLinecap="round"
                        />
                    </svg>

                    <ol className="relative mt-12 lg:static lg:mt-0">
                        {steps.map((step, index) => (
                            <li
                                key={step.title}
                                className={`
                                    relative grid grid-cols-[48px_minmax(0,1fr)]
                                    gap-x-5 pb-10 last:pb-0
                                    lg:absolute lg:flex lg:w-[23%]
                                    lg:flex-col lg:gap-5 lg:pb-0
                                    ${step.position}
                                `}
                            >
                                {/* Mobile timeline connector */}
                                {index < steps.length - 1 && (
                                    <span
                                        aria-hidden="true"
                                        className="
                                            absolute bottom-0 left-[23px]
                                            top-12 w-0.5 bg-crimson/30
                                            lg:hidden
                                        "
                                    />
                                )}

                                {/* Step marker */}
                                <span
                                    aria-hidden="true"
                                    className="
                                        relative z-10 flex size-12
                                        items-center justify-center
                                        rounded-img bg-white
                                        lg:size-16
                                    "
                                >
                                    <span className="size-5 rounded-full bg-line lg:size-6" />
                                </span>

                                <div className="relative flex min-w-0 flex-col gap-3">
                                    {/* Decorative step number */}
                                    <span
                                        aria-hidden="true"
                                        className="
                                            pointer-events-none absolute
                                            -top-6 right-0 select-none
                                            font-body text-[100px]
                                            font-semibold leading-none text-ink/5
                                            lg:-top-24 lg:text-[180px]
                                        "
                                    >
                                        {index + 1}
                                    </span>

                                    <h3 className="relative text-2xl text-ink">
                                        {step.title}
                                    </h3>

                                    <p className="relative leading-relaxed text-body">
                                        {step.description}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </section>
    );
}