import Footer from "@/components/layout/Footer";
import "./globals.css";
import Header from "@/components/layout/header";
import "lenis/dist/lenis.css";
import SmoothScroll from "@/components/motion/SmoothScroll";
import {
    Fraunces,
    Plus_Jakarta_Sans,
} from "next/font/google";


const siteUrl = "https://bethelrva.com";

const siteDescription =
    "Bethel es una comunidad cristiana en Hopewell, Virginia, dedicada a la adoración, la oración, la enseñanza bíblica, el evangelismo y el crecimiento espiritual en Jesucristo.";

const googleMapsUrl =
    "https://www.google.com/maps/search/?api=1&query=401+N+2nd+Avenue%2C+Hopewell%2C+VA+23860";

export const metadata = {
    metadataBase: new URL(siteUrl),

    title: {
        default: "Bethel | Iglesia Cristiana en Hopewell, Virginia",
        template: "%s | Bethel",
    },

    description: siteDescription,

    keywords: [
        "Bethel",
        "iglesia en Hopewell VA",
        "iglesia cristiana en Hopewell",
        "iglesia hispana en Hopewell VA",
        "iglesia en español Hopewell",
        "culto dominical Hopewell",
        "estudio bíblico Hopewell",
        "servicio de oración Hopewell",
        "iglesia cristiana Virginia",
    ],

    alternates: {
        canonical: "/",
    },

    openGraph: {
        type: "website",
        locale: "es_US",
        url: siteUrl,
        siteName: "Bethel",
        title: "Bethel | Iglesia Cristiana en Hopewell, Virginia",
        description: siteDescription,
        images: [
            {
                // Añade la imagen social en esta ubicación.
                url: "/images/bethel-social.png",
                width: 1200,
                height: 630,
                alt: "Bethel, iglesia cristiana en Hopewell, Virginia",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Bethel | Iglesia Cristiana en Hopewell, Virginia",
        description: siteDescription,
        images: ["/images/bethel-social.png"],
    },

    icons: {
        // Añade los archivos de favicon en estas ubicaciones.
        icon: "/icons/favicon.webp",
        shortcut: "/icons/favicon.webp",
        apple: "/icons/favicon.webp",
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    },
};

const churchSchema = {
    "@context": "https://schema.org",
    "@type": "Church",
    "@id": `${siteUrl}/#church`,

    name: "Bethel",
    url: siteUrl,
    inLanguage: "es-US",

    // Reemplaza estas rutas con los archivos finales.
    logo: `${siteUrl}/images/bethel-logo.svg`,
    image: `${siteUrl}/images/bethel-social.png`,

    description: siteDescription,
    telephone: "+1-804-223-1109",
    email: "seniorpastor@bethelrva.com",

    address: {
        "@type": "PostalAddress",
        streetAddress: "401 N 2nd Avenue",
        addressLocality: "Hopewell",
        addressRegion: "VA",
        postalCode: "23860",
        addressCountry: "US",
    },

    hasMap: googleMapsUrl,

    sameAs: [
        "https://www.youtube.com/@BethelRVA",
        "https://facebook.com/bethelrva",
    ],
};

const fraunces = Fraunces({
    subsets: ["latin"],
    weight: "variable",
    style: ["normal", "italic"],
    axes: ["SOFT", "WONK"],
    variable: "--font-fraunces",
    display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
    subsets: ["latin"],
    weight: ["500", "600"],
    variable: "--font-plus-jakarta",
    display: "swap",
});

export default function RootLayout({ children }) {
    return (
        <html
            lang="es"
            className={`${fraunces.variable} ${plusJakartaSans.variable}`}
        >
            <body>
                <script
                    id="bethel-church-schema"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(churchSchema).replace(
                            /</g,
                            "\\u003c"
                        ),
                    }}
                />

                <SmoothScroll />
                <Header />

                {children}

                <Footer />
            </body>
        </html>
    );
}