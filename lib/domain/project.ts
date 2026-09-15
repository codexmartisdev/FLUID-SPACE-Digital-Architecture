export type ProjectCategory = "Residencial" | "Interiores" | "Comercial" | "Corporativo";

export interface ProjectMaterial {
  name: string;
  description: string;
}

export interface ProjectSpecs {
  area: string;
  category: string;
  location: string;
  year: number;
  photography?: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle?: string;
  category: ProjectCategory;
  city: string;
  year: number;
  area: string;
  description: string;
  shortDescription: string;
  cover: string;
  featuredImage: string;
  gallery: string[];
  tags: string[];
  concept: string;
  challenge?: string;
  solution?: string;
  materials: ProjectMaterial[];
  specs: ProjectSpecs;
}
