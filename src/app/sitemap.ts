import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

const routes = [
  "/",
  "/platform",
  "/platform/dsp",
  "/platform/rtb",
  "/platform/analytics",
  "/platform/fraud-prevention",
  "/solutions",
  "/solutions/advertisers",
  "/solutions/agencies",
  "/solutions/publishers",
  "/technology",
  "/developers",
  "/integrations",
  "/payment",
  "/resources",
  "/blog",
  "/case-studies",
  "/about",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.domain}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.split("/").length === 2 ? 0.8 : 0.6,
  }));
}
