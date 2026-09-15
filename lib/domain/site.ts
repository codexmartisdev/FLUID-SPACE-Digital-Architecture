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
