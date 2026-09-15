import { localArticleRepository } from "@/lib/data/local/article.repository";
import { localProjectRepository } from "@/lib/data/local/project.repository";
import { localServiceRepository } from "@/lib/data/local/service.repository";

/**
 * Single repository registry for the application.
 *
 * G6 uses local static content. In the Firebase phase, the implementation behind
 * these contracts can be swapped without changing the domain models or visual
 * components that consume repository-facing functions.
 */
export const repositories = {
  projects: localProjectRepository,
  articles: localArticleRepository,
  services: localServiceRepository,
} as const;

export const dataSource = "local" as const;
