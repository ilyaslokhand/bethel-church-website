const siteUrl = "https://bethelrva.com";
const socialImage = {
  url: "/images/bethel-social.png",
  width: 1200,
  height: 630,
  alt: "Bethel, iglesia cristiana en Hopewell, Virginia",
};

export function pageMetadata({ title, description, path }) {
  const fullTitle = title
    ? `${title} | Bethel`
    : "Bethel | Iglesia Cristiana en Hopewell, Virginia";

  return {
    ...(title && { title }),
    ...(description && { description }),
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "es_US",
      siteName: "Bethel",
      url: `${siteUrl}${path === "/" ? "" : path}`,
      title: fullTitle,
      ...(description && { description }),
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      ...(description && { description }),
      images: [socialImage.url],
    },
  };
}
