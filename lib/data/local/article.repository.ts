import { articles, blogThemes } from "@/data/articles";
import type { ArticleRepository } from "@/lib/data/contracts";
import type { Article, BlogTheme } from "@/lib/domain";

const localArticles: readonly Article[] = articles;
const localBlogThemes: readonly BlogTheme[] = blogThemes;

export const localArticleRepository: ArticleRepository = {
  async list() {
    return [...localArticles];
  },

  async getBySlug(slug) {
    return localArticles.find((article) => article.slug === slug) ?? null;
  },

  async listSlugs() {
    return localArticles.map((article) => article.slug);
  },

  async listThemes() {
    return [...localBlogThemes];
  },
};
