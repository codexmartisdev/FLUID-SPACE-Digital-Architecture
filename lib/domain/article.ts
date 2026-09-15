export type ArticleCategory =
  | "Arquitetura"
  | "Interiores"
  | "Materiais"
  | "Processos"
  | "Tendências";

export interface Article {
  slug: string;
  title: string;
  category: ArticleCategory;
  date: string;
  readTime: string;
  excerpt: string;
  cover: string;
  content: string[];
  quotes?: string[];
  keyPoints?: string[];
}

export interface BlogTheme {
  id: string;
  title: string;
  description: string;
  image: string;
}
