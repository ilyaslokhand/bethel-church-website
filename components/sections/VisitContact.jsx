"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";

const mapsUrl =
    "https://www.google.com/maps/search/?api=1&query=401+N+2nd+Avenue%2C+Hopewell%2C+VA+23860";

export default function VisitContact() {
    const [submitting, setSubmitting] = useState(false);
    const [result, setResult] = useState(null);

    async function handleSubmit(event) {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);

        setSubmitting(true);
        setResult(null);

        try {
            const response = await fetch(
                "https://api.web3forms.com/submit",
                {
                    method: "POST",
                    body: formData,
                }
            );

            const data = await response.json();

            if (!response.ok || !data.success) {
                throw new Error(data.message || "No se pudo enviar el mensaje.");
            }

            form.reset();
            setResult({
                type: "success",
                message: "¡Gracias! Tu mensaje se ha enviado correctamente.",
            });
        } catch {
            setResult({
                type: "error",
                message:
                    "No pudimos enviar tu mensaje. Inténtalo de nuevo o llámanos al (804) 223-1109.",
            });
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <section
            id="planifica-tu-visita"
            className="relative z-10  bg-white py-16 md:py-24"
        >
            <div className="site-container">
                <div className="mx-auto grid  overflow-hidden rounded-img border border-line bg-paper lg:grid-cols-2">
                    <a
                        href={mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Abrir la ubicación de Bethel en Google Maps"
                        className="group relative block min-h-[300px] overflow-hidden sm:min-h-[400px] lg:min-h-full"
                    >
                        <Image
                            src="/images/bethel-map.png"
                            alt="Mapa de la ubicación de Bethel en Hopewell, Virginia"
                            fill
                            sizes="(max-width: 1023px) calc(100vw - 40px), 600px"
                            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        />

                        <span className="absolute bottom-5 left-5 rounded-pill bg-white px-5 py-3 text-sm font-semibold text-ink shadow-sm">
                            Ver ubicación en Google Maps ↗
                        </span>
                    </a>

                    <div className="flex flex-col gap-6 p-6 sm:p-10 lg:p-12">
                        <div className="flex flex-col gap-3">
                            <p className="font-semibold text-crimson">
                                Contáctanos
                            </p>

                            <h2 className="text-ink">
                                Envíanos un mensaje
                            </h2>
                        </div>

                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-5"
                        >
                            <input
                                type="hidden"
                                name="access_key"
                                value="5f47b903-be3c-423a-9fd0-6eb54dca1bce"
                            />

                            <input
                                type="hidden"
                                name="subject"
                                value="Nuevo mensaje desde Bethel"
                            />

                            {/* Invisible spam trap; visitors never see this field. */}
                            <input
                                type="checkbox"
                                name="botcheck"
                                className="hidden"
                                tabIndex={-1}
                                autoComplete="off"
                            />

                            <div className="flex flex-col gap-2">
                                <label htmlFor="visit-name" className="font-medium text-body">
                                    Nombre <span className="text-crimson">*</span>
                                </label>

                                <input
                                    id="visit-name"
                                    name="name"
                                    type="text"
                                    autoComplete="given-name"
                                    placeholder="Escribe tu nombre"
                                    required
                                    className="min-h-12 w-full rounded-card border border-line bg-white px-4 text-ink outline-none focus:border-crimson"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="visit-email" className="font-medium text-body">
                                    Correo electrónico <span className="text-crimson">*</span>
                                </label>

                                <input
                                    id="visit-email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    placeholder="Escribe tu correo electrónico"
                                    required
                                    className="min-h-12 w-full rounded-card border border-line bg-white px-4 text-ink outline-none focus:border-crimson"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="visit-message" className="font-medium text-body">
                                    Mensaje <span className="text-crimson">*</span>
                                </label>

                                <textarea
                                    id="visit-message"
                                    name="message"
                                    rows={5}
                                    placeholder="Escribe tu mensaje..."
                                    required
                                    className="w-full resize-y rounded-card border border-line bg-white px-4 py-3 text-ink outline-none focus:border-crimson"
                                />
                            </div>

                            <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                                <p aria-live="polite" className={`text-sm ${result?.type === "error"
                                        ? "text-crimson"
                                        : "text-body"
                                    }`}>
                                    {result?.message}
                                </p>

                                <Button type="submit" disabled={submitting} showArrow={false} className="cursor-pointer">
                                    {submitting ? "Enviando..." : "Enviar mensaje"}
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}