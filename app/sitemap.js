export const dynamic = "force-static";

const baseUrl = "https://bethelrva.com";

export default function sitemap() {
  const lastModified = new Date();

  return [
    { url: baseUrl, lastModified, changeFrequency: "weekly", priority: 1 },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/connect`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/visit`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
