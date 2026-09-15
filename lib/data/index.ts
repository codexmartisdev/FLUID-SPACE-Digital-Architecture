import { repositories } from "@/lib/data/repositories";

export const getProjects = () => repositories.projects.list();
export const getProjectBySlug = (slug: string) => repositories.projects.getBySlug(slug);
export const getProjectSlugs = () => repositories.projects.listSlugs();

export const getArticles = () => repositories.articles.list();
export const getArticleBySlug = (slug: string) => repositories.articles.getBySlug(slug);
export const getArticleSlugs = () => repositories.articles.listSlugs();
export const getBlogThemes = () => repositories.articles.listThemes();

export const getServices = () => repositories.services.listServices();
export const getDeliverables = () => repositories.services.listDeliverables();
export const getServiceProcessSteps = () => repositories.services.listProcessSteps();
export const getProjectFormats = () => repositories.services.listProjectFormats();

export { dataSource, repositories } from "@/lib/data/repositories";
export type {
  ArticleRepository,
  ContactRepository,
  ProjectRepository,
  ServiceRepository,
} from "@/lib/data/contracts";
