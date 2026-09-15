import type { Metadata } from "next";
import { siteConfig } from "@/config/client.config";
import { absoluteUrl, seoConfig } from "@/config/seo.config";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path,
  noIndex = false,
}: PageMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: seoConfig.siteName,
      locale: seoConfig.locale,
      type: "website",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: `${siteConfig.brand} — Arquitetura e Interiores`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image"],
    },
    robots: noIndex
      ? {
          index: false,
          follow: true,
          googleBot: {
            index: false,
            follow: true,
          },
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  };
}

export function buildRootJsonLd() {
  const founders = ["Laise Brito", "Rita Fontenele"].map((name) => ({
    "@type": "Person",
    name,
  }));

  const areaServed = siteConfig.locations.map((name) => ({
    "@type": "City",
    name,
  }));

  const sameAs = [siteConfig.instagramUrl].filter(Boolean);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${seoConfig.siteUrl}/#organization`,
        name: siteConfig.brand,
        url: seoConfig.siteUrl,
        logo: absoluteUrl("/icon.svg"),
        description: siteConfig.description,
        telephone: siteConfig.phones.map((phone) => phone.tel),
        areaServed,
        founder: founders,
        sameAs,
        serviceType: ["Arquitetura", "Design de Interiores"],
      },
      {
        "@type": "WebSite",
        "@id": `${seoConfig.siteUrl}/#website`,
        url: seoConfig.siteUrl,
        name: siteConfig.brand,
        description: seoConfig.defaultDescription,
        inLanguage: seoConfig.language,
        publisher: {
          "@id": `${seoConfig.siteUrl}/#organization`,
        },
      },
    ],
  };
}

export function serializeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
