import { siteConfig } from "@/config/client.config";

function normalizeUrl(value: string) {
  return value.trim().replace(/\/+$/, "");
}

function resolveSiteUrl() {
  const explicitUrl = process.env.SITE_URL || process.env.NEXT_PUBLIC_SITE_URL;
  if (explicitUrl) {
    return normalizeUrl(explicitUrl);
  }

  const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (productionHost) {
    return `https://${normalizeUrl(productionHost)}`;
  }

  const deploymentHost = process.env.VERCEL_URL;
  if (deploymentHost) {
    return `https://${normalizeUrl(deploymentHost)}`;
  }

  return "http://localhost:3000";
}

export const seoConfig = {
  siteUrl: resolveSiteUrl(),
  siteName: siteConfig.brand,
  locale: "pt_BR",
  language: "pt-BR",
  defaultTitle: "LaR Arquitetura e Interiores | Parnaíba e Luiz Correia",
  defaultDescription:
    "LaR Arquitetura e Interiores, com atuação em Parnaíba - PI e Luiz Correia - PI. Projetos autorais que unem estética, funcionalidade e contexto.",
  keywords: [
    "arquitetura em Parnaíba",
    "arquitetura em Luiz Correia",
    "arquitetura no Piauí",
    "design de interiores em Parnaíba",
    "design de interiores em Luiz Correia",
    "LaR Arquitetura e Interiores",
  ],
} as const;

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${seoConfig.siteUrl}${normalizedPath}`;
}
