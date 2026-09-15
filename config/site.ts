export interface SiteConfig {
  name: string;
  brand: string;
  role: string;
  tagline: string;
  description: string;
  email: string;
  whatsapp: string;
  phone: string;
  instagram: string;
  linkedin: string;
  city: string;
  address: string;
  hours: string;
}

export const siteConfig: SiteConfig = {
  name: "Mick Ramos",
  brand: "MICK RAMOS",
  role: "ARQUITETURA · INTERIORES · DESIGN",
  tagline: "ARQUITETURA QUE MOVE",
  description:
    "Projetos autorais que unem estética, funcionalidade e contexto. Espaços não são ocupados, são experimentados.",
  email: "contato@mickramos.com.br",
  whatsapp: "+55 11 98765-4321",
  phone: "+55 11 98765-4321",
  instagram: "@mickramos",
  linkedin: "/mickramos",
  city: "São Paulo, SP",
  address: "São Paulo, SP",
  hours: "Seg – Sex, 9h às 18h. Respondemos em até 1 dia útil.",
};

export const navLinks = [
  { name: "Início", href: "/" },
  { name: "Sobre", href: "/sobre" },
  { name: "Serviços", href: "/servicos" },
  { name: "Projetos", href: "/projetos" },
  { name: "Blog", href: "/blog" },
  { name: "Contato", href: "/contato" },
];
