import type { MetadataRoute } from "next";

const routes = [
  "",
  "/app-development",
  "/web-development",
  "/ux-ui-design",
  "/portfolio",
  "/blogs",
  "/about",
  "/contact-us",
  "/faqs",
  "/privacy-policy",
  "/terms-conditions"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const modified = new Date();
  return routes.map((route) => ({
    url: `https://opusgeeks.com${route}`,
    lastModified: modified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/portfolio" ? 0.9 : 0.7
  }));
}
