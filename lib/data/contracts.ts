import type {
  Article,
  BlogTheme,
  ContactMessage,
  DeliverableItem,
  ProcessStep,
  Project,
  ProjectFormat,
  QuoteRequest,
  ServiceItem,
} from "@/lib/domain";

export interface ProjectRepository {
  list(): Promise<Project[]>;
  getBySlug(slug: string): Promise<Project | null>;
  listSlugs(): Promise<string[]>;
}

export interface ArticleRepository {
  list(): Promise<Article[]>;
  getBySlug(slug: string): Promise<Article | null>;
  listSlugs(): Promise<string[]>;
  listThemes(): Promise<BlogTheme[]>;
}

export interface ServiceRepository {
  listServices(): Promise<ServiceItem[]>;
  listDeliverables(): Promise<DeliverableItem[]>;
  listProcessSteps(): Promise<ProcessStep[]>;
  listProjectFormats(): Promise<ProjectFormat[]>;
}

/**
 * Persistence contracts prepared for the future Firebase phase.
 * No implementation is intentionally registered during G6, so the current
 * simulated form cannot accidentally be mistaken for a real persistence flow.
 */
export interface ContactRepository {
  createMessage(message: Omit<ContactMessage, "id">): Promise<ContactMessage>;
  createQuoteRequest(request: Omit<QuoteRequest, "id">): Promise<QuoteRequest>;
}
