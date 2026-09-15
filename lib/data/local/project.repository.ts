import { projects } from "@/data/projects";
import type { ProjectRepository } from "@/lib/data/contracts";
import type { Project } from "@/lib/domain";

const localProjects: readonly Project[] = projects;

export const localProjectRepository: ProjectRepository = {
  async list() {
    return [...localProjects];
  },

  async getBySlug(slug) {
    return localProjects.find((project) => project.slug === slug) ?? null;
  },

  async listSlugs() {
    return localProjects.map((project) => project.slug);
  },
};
