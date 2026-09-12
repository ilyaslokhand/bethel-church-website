import Image from "next/image";
import SplitTextReveal from "@/components/motion/SplitTextReveal";


export default function ConnectMinistries({
    eyebrow,
    title,
    description,
    items,
}) {
    return (
        <section
            id="ministerios"
            className="relative z-10 bg-white py-20 md:py-24"
        >
            <div className="site-container">
                <div className="mx-auto w-full ">
                    <div className="flex max-w-[700px] flex-col gap-3">
                        <p className="font-semibold text-crimson">
                            {eyebrow}
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
                                                    {title}
                                                </SplitTextReveal>

                        <p className="leading-7 text-body">
                            {description}
                        </p>
                    </div>

                    <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {items.map((item, index) => (
                            <li
                                key={item.title}
                                className="
                                    sticky flex min-h-[255px] flex-col
                                    rounded-card border border-line
                                    bg-paper p-7
                                    md:static
                                "
                                style={{
                                    top: `${96 + index * 14}px`,
                                    zIndex: index + 1,
                                }}
                            >
                                <div className="flex items-start justify-between gap-5">
                                    <Image
                                        src={item.icon}
                                        alt=""
                                        width={48}
                                        height={48}
                                        className="size-12 object-contain"
                                    />

                                    <span
                                        className="
                                            rounded-card bg-crimson/10
                                            px-3 py-1 text-xs
                                            font-medium text-crimson
                                        "
                                    >
                                        {item.status}
                                    </span>
                                </div>

                                <h3 className="mt-6 text-2xl text-ink">
                                    {item.title}
                                </h3>

                                <p className="mt-auto pt-6 leading-7 text-body">
                                    {item.description}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}