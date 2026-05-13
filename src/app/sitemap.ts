import type { MetadataRoute } from "next";

import { portfolioItems } from "@/lib/data/portfolio";
import { services } from "@/lib/data/services";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = ["", "/services", "/work", "/packages", "/contact", "/case-study"];

  const serviceRoutes = services.map((service) => `/services/${service.slug}`);

  const workRoutes = portfolioItems.map((item) => `/work/${item.slug}`);

  return [...staticRoutes, ...serviceRoutes, ...workRoutes].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.includes("/services") || route.includes("/work") ? 0.8 : 0.7,
  }));
}
