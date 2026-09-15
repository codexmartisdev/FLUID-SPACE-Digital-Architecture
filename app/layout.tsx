import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MotionShell } from "@/components/motion/MotionShell";
import { CustomCursor } from "@/components/ui/CustomCursor";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "LaR Arquitetura e Interiores",
  description:
    "LaR Arquitetura e Interiores, com atuação em Parnaíba - PI e Luiz Correia - PI. Projetos que unem função, emoção e movimento.",
  openGraph: {
    title: "LaR Arquitetura e Interiores",
    description:
      "Arquitetura e interiores em Parnaíba - PI e Luiz Correia - PI, com projetos que unem função, emoção e movimento.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LaR Arquitetura e Interiores",
    description:
      "Arquitetura e interiores em Parnaíba - PI e Luiz Correia - PI.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={jakarta.variable} data-theme="lar">
      <body
        className="font-sans antialiased min-h-screen flex flex-col"
        suppressHydrationWarning
      >
        <CustomCursor />
        <Header />
        <main className="flex-1 w-full overflow-x-clip">
          <MotionShell>{children}</MotionShell>
        </main>
        <Footer />
      </body>
    </html>
  );
}
