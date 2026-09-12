import Link from "next/link";

const arrowIcons = {
    right: "→",
    "up-right": "↗",
    down: "↓",
};

function ArrowShape({ iconSrc, arrow }) {
    if (!iconSrc) {
        return (
            <span className="flex size-5 items-center justify-center">
                {arrowIcons[arrow] ?? arrow}
            </span>
        );
    }

    return (
        <span
            className="size-5 bg-current"
            style={{
                WebkitMaskImage: `url(${iconSrc})`,
                maskImage: `url(${iconSrc})`,
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

export default function Button({
    children,
    href,
    iconPosition = "right",

    type = "button",
    backgroundColor = "#C21E38",
    textColor = "#FFFFFF",
    borderColor = "#C21E38",
    hoverBackgroundColor = "#FBF7EE",
    hoverTextColor = "#1E1E1E",
    hoverBorderColor = "#FBF7EE",
    arrow = "right",
    iconSrc,
    showArrow = true,
    external = false,
    disabled = false,
    className = "",
    onClick,
    ...props
}) {
    const styles = {
        "--button-bg": backgroundColor,
        "--button-text": textColor,
        "--button-border": borderColor,
        "--button-hover-bg": hoverBackgroundColor,
        "--button-hover-text": hoverTextColor,
        "--button-hover-border": hoverBorderColor,
    };

    const classes = `
    group relative inline-flex min-h-11 items-center justify-center
    overflow-hidden rounded-pill border px-6 py-3
    bg-[var(--button-bg)] text-sm font-semibold
    border-[var(--button-border)]
    transition-colors duration-300
    hover:border-[var(--button-hover-border)]
    focus-visible:outline-none
    focus-visible:ring-2 focus-visible:ring-crimson
    focus-visible:ring-offset-2 focus-visible:ring-offset-paper
    disabled:pointer-events-none disabled:opacity-50
    ${className}
  `;

    const animatedIcon = showArrow && (
        <span
            aria-hidden="true"
            className="relative size-5 shrink-0 overflow-hidden"
        >
            <span
                className="
        absolute left-0 top-0 flex flex-col
        transition-transform duration-500
        ease-[cubic-bezier(0.22,1,0.36,1)]
        group-hover:-translate-y-1/2
      "
            >
                {/* Initially visible icon */}
                <span className="flex size-5 shrink-0 items-center justify-center">
                    <ArrowShape iconSrc={iconSrc} arrow={arrow} />
                </span>

                {/* Icon that enters from below */}
                <span className="flex size-5 shrink-0 items-center justify-center">
                    <ArrowShape iconSrc={iconSrc} arrow={arrow} />
                </span>
            </span>
        </span>
    );

    const content = (
        <>
            {/* Background fill that moves from left to right */}
            <span
                aria-hidden="true"
                className="
        absolute inset-0 origin-left scale-x-0
        bg-[var(--button-hover-bg)]
        transition-transform duration-500
        ease-[cubic-bezier(0.22,1,0.36,1)]
        group-hover:scale-x-100
      "
            />

            {/* Button content */}
            <span
                className="
        relative z-10 flex items-center gap-2.5
        text-[var(--button-text)]
        transition-colors duration-300
        group-hover:text-[var(--button-hover-text)]
      "
            >
                {iconPosition === "left" && animatedIcon}

                <span>{children}</span>

                {iconPosition === "right" && animatedIcon}
            </span>
        </>
    );

    if (href) {
        const isWebExternal =
            external ||
            href.startsWith("http://") ||
            href.startsWith("https://");

        if (isWebExternal) {
            return (
                <a
                    href={href}
                    className={classes}
                    style={styles}
                    target="_blank"
                    rel="noopener noreferrer"
                    {...props}
                >
                    {content}
                </a>
            );
        }

        if (href.startsWith("mailto:") || href.startsWith("tel:")) {
            return (
                <a href={href} className={classes} style={styles} {...props}>
                    {content}
                </a>
            );
        }

        return (
            <Link href={href} className={classes} style={styles} {...props}>
                {content}
            </Link>
        );
    }

    return (
        <button
            type={type}
            className={classes}
            style={styles}
            disabled={disabled}
            onClick={onClick}
            {...props}
        >
            {content}
        </button>
    );
}