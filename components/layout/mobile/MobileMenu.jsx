"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Button from "@/components/ui/Button";
import { navigationLinks } from "@/content/navigation";

export default function MobileMenu() {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        function handleEscape(event) {
            if (event.key === "Escape") {
                setMenuOpen(false);
            }
        }

        document.body.style.overflow = menuOpen ? "hidden" : "";

        window.addEventListener("keydown", handleEscape);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleEscape);
        };
    }, [menuOpen]);

    function closeMenu() {
        setMenuOpen(false);
    }

    return (
        <div className="lg:hidden">
            {/* Hamburger button */}
            <button
                type="button"
                aria-label="Abrir menú"
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                onClick={() => setMenuOpen(true)}
                className="
          flex size-11 flex-col items-center justify-center
          gap-1.5 rounded-full border border-ink text-ink
          transition-colors duration-300
          hover:border-crimson hover:bg-crimson hover:text-white
          focus-visible:outline-none focus-visible:ring-2
          focus-visible:ring-crimson
        "
            >
                <span className="h-px w-5 bg-current" />
                <span className="h-px w-5 bg-current" />
                <span className="h-px w-5 bg-current" />
            </button>

            {/* Dark overlay */}
            <button
                type="button"
                aria-label="Cerrar menú"
                onClick={closeMenu}
                className={`
          fixed inset-0 z-[90] bg-ink/70
          transition-opacity duration-500
          ${menuOpen
                        ? "pointer-events-auto opacity-100"
                        : "pointer-events-none opacity-0"
                    }
        `}
            />

            {/* Sliding menu */}
            <aside
                id="mobile-menu"
                aria-hidden={!menuOpen}
                className={`
          fixed right-0 top-0 z-[100]
          flex h-dvh w-[min(88%,420px)] flex-col
          overflow-y-auto bg-paper px-6 py-6
          shadow-2xl
          transition-transform duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]
          ${menuOpen
                        ? "translate-x-0"
                        : "translate-x-full"
                    }
        `}
            >
                {/* Mobile menu header */}
                <div className="flex items-center justify-between border-b border-line pb-6">
                    <Link
                        href="/"
                        aria-label="Ir a la página de inicio"
                        onClick={closeMenu}
                    >
                        <Image
                            src="/images/bethel-logo.svg"
                            alt="Bethel Iglesia"
                            width={106}
                            height={68}
                            className="h-[56px] w-auto lg:h-[68px]"
                        />
                    </Link>

                    {/* Close button */}
                    <button
                        type="button"
                        aria-label="Cerrar menú"
                        onClick={closeMenu}
                        className="
              relative flex size-11 items-center justify-center
              rounded-full border border-line text-ink
              transition-colors duration-300
              hover:border-crimson hover:bg-crimson hover:text-white
              focus-visible:outline-none focus-visible:ring-2
              focus-visible:ring-crimson
            "
                    >
                        <span className="absolute h-px w-5 rotate-45 bg-current" />
                        <span className="absolute h-px w-5 -rotate-45 bg-current" />
                    </button>
                </div>

                {/* Navigation */}
                <nav aria-label="Navegación móvil">
                    <ul className="flex flex-col">
                        {navigationLinks.map((item) => (
                            <li key={item.href} className="border-b border-line">
                                <Link
                                    href={item.href}
                                    onClick={closeMenu}
                                    className="
                    block py-5 font-display text-2xl
                    font-semibold text-ink
                    transition-colors duration-300
                    hover:text-crimson
                  "
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Contact section */}
                <div className="mt-auto flex flex-col gap-5 pt-10">
                    <p className="text-sm leading-6 text-body">
                        ¿Tienes alguna pregunta? Estamos aquí para ayudarte.
                    </p>

                    <Button
                        href="tel:+18042231109"
                        iconSrc="/icons/phone.svg"
                        iconPosition="left"
                        backgroundColor="#C21E38"
                        textColor="#FFFFFF"
                        borderColor="#C21E38"
                        hoverBackgroundColor="#fff"
                        hoverTextColor="#1e1e1e"
                        hoverBorderColor="#1e1e1e"
                        className="w-full"
                    >
                        Contáctanos
                    </Button>


                </div>
            </aside>
        </div>
    );
}