import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MotionShell } from "@/components/motion/MotionShell";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { seoConfig } from "@/config/seo.config";
import { buildRootJsonLd, serializeJsonLd } from "@/lib/seo";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(seoConfig.siteUrl),
  title: {
    default: seoConfig.defaultTitle,
    template: "%s | LaR Arquitetura e Interiores",
  },
  description: seoConfig.defaultDescription,
  applicationName: seoConfig.siteName,
  keywords: [...seoConfig.keywords],
  category: "Arquitetura e Interiores",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: seoConfig.defaultTitle,
    description: seoConfig.defaultDescription,
    url: "/",
    siteName: seoConfig.siteName,
    locale: seoConfig.locale,
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "LaR Arquitetura e Interiores",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seoConfig.defaultTitle,
    description: seoConfig.defaultDescription,
    images: ["/opengraph-image"],
  },
  robots: {
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const rootJsonLd = buildRootJsonLd();

  return (
    <html lang="pt-BR" className={jakarta.variable} data-theme="lar">
      <body
        className="font-sans antialiased min-h-screen flex flex-col"
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(rootJsonLd) }}
        />
        <a
          href="#conteudo-principal"
          className="fixed left-4 top-4 z-[200] -translate-y-24 rounded-full bg-black px-4 py-2 text-sm font-medium text-white shadow-lg transition-transform focus:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        >
          Pular para o conteúdo principal
        </a>
        <CustomCursor />
        <Header />
        <main
          id="conteudo-principal"
          tabIndex={-1}
          className="flex-1 w-full overflow-x-clip outline-none"
        >
          <MotionShell>{children}</MotionShell>
        </main>
        <Footer />
      </body>
    </html>
  );
}
