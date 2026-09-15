import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/config/seo.config";

const publicRoutes = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/sobre", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/servicos", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/projetos", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/blog", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/contato", priority: 0.8, changeFrequency: "monthly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.map((route) => ({
    url: absoluteUrl(route.path),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
