export interface PhoneContact {
  label: string;
  display: string;
  tel: string;
}

export type SiteThemeId = "lar";

export interface SiteConfig {
  name: string;
  brand: string;
  role: string;
  tagline: string;
  description: string;
  theme: SiteThemeId;
  email: string;
  whatsapp: string;
  phone: string;
  phones: PhoneContact[];
  instagram: string;
  instagramUrl: string;
  linkedin: string;
  city: string;
  locations: string[];
  address: string;
  hours: string;
}

/**
 * Canonical public configuration for LaR Arquitetura e Interiores.
 *
 * Only confirmed public information belongs here. Missing information must stay
 * empty instead of being replaced with invented placeholders. Runtime services,
 * secrets, Firebase bootstrap and authorization live outside this file.
 */
export const siteConfig: SiteConfig = {
  name: "LaR",
  brand: "LaR Arquitetura e Interiores",
  role: "ARQUITETURA · INTERIORES",
  tagline: "ARQUITETURA QUE MOVE",
  description:
    "Projetos autorais de arquitetura e interiores que unem estética, funcionalidade e contexto. Espaços não são ocupados, são experimentados.",
  theme: "lar",
  email: "",
  whatsapp: "",
  phone: "(86) 9 9583-1320",
  phones: [
    {
      label: "Contato 01",
      display: "(86) 9 9583-1320",
      tel: "+5586995831320",
    },
    {
      label: "Contato 02",
      display: "(86) 9 8172-9272",
      tel: "+5586981729272",
    },
  ],
  instagram: "@lar.arquitetura_",
  instagramUrl: "https://www.instagram.com/lar.arquitetura_",
  linkedin: "",
  city: "Parnaíba - PI / Luiz Correia - PI",
  locations: ["Parnaíba - PI", "Luiz Correia - PI"],
  address: "",
  hours: "",
};

export const navLinks = [
  { name: "Início", href: "/" },
  { name: "Sobre", href: "/sobre" },
  { name: "Serviços", href: "/servicos" },
  { name: "Projetos", href: "/projetos" },
  { name: "Blog", href: "/blog" },
  { name: "Contato", href: "/contato" },
];
