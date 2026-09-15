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
  title: "Mick Ramos Arquitetura — Arquitetura · Interiores · Design",
  description:
    "Website oficial de Mick Ramos. Projetos que unem função, emoção e movimento. Espaços não são ocupados, são experimentados.",
  openGraph: {
    title: "Mick Ramos Arquitetura — Arquitetura · Interiores · Design",
    description:
      "Website oficial de Mick Ramos. Projetos que unem função, emoção e movimento. Espaços não são ocupados, são experimentados.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mick Ramos Arquitetura — Arquitetura · Interiores · Design",
    description:
      "Website oficial de Mick Ramos. Projetos que unem função, emoção e movimento. Espaços não são ocupados, são experimentados.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={jakarta.variable}>
      <body className="font-sans antialiased bg-[#faf9f7] text-[#191a1d] min-h-screen flex flex-col selection:bg-black selection:text-white" suppressHydrationWarning>
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
