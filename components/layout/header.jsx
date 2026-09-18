"use client";
import Image from "next/image";
import Link from "next/link";

import { navigationLinks } from "@/content/navigation";
import Button from "@/components/ui/Button";
import MobileMenu from "@/components/layout/mobile/MobileMenu";
import { usePathname } from "next/navigation";

export default function Header() {

    const pathname = usePathname();
    return (
        <header className="fixed inset-x-0 top-5 z-50 w-full">
            <div className="site-container">
                <div
                    className="
            mx-auto flex h-[68px] w-full max-w-[1080px]
            items-center justify-between rounded-section
            border-b border-line/50 bg-white
            px-5 py-2
            lg:h-[84px] lg:px-10
          "
                >
                    {/* Logo */}
                    <Link href="/" aria-label="Ir a la página de inicio">
                        <Image
                            src="/images/bethel-logo.svg"
                            alt="Bethel Iglesia"
                            width={106}
                            height={68}
                            className="h-[56px] w-auto lg:h-[68px]"
                        />
                    </Link>

                    {/* Desktop navigation */}
                    <nav
                        aria-label="Navegación principal"
                        className="hidden lg:block"
                    >
                        <ul className="flex items-center gap-10">
                            {navigationLinks.map((item) => {
                                const isActive =
                                    item.href === "/"
                                        ? pathname === "/"
                                        : pathname.startsWith(item.href);

                                return (
                                    <li key={item.href}>
                                        <Link
                                            href={item.href}
                                            aria-current={isActive ? "page" : undefined}
                                            className={`
                            text-sm font-semibold
                            transition-colors duration-300
                            hover:text-crimson
                            ${isActive ? "text-crimson" : "text-ink"}
                        `}
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>

                    {/* Desktop contact button */}
                    <div className="hidden lg:block">
                        <Button
                            href="tel:+18042231109"
                            iconSrc="/icons/phone.svg"
                            iconPosition="left"
                            backgroundColor="transparent"
                            textColor="#1E1E1E"
                            borderColor="#1E1E1E"
                            hoverBackgroundColor="#C21E38"
                            hoverTextColor="#FFFFFF"
                            hoverBorderColor="#C21E38"
                        >
                            Contáctanos
                        </Button>
                    </div>

                    {/* Mobile menu */}
                    <MobileMenu />
                </div>
            </div>
        </header>
    );
}