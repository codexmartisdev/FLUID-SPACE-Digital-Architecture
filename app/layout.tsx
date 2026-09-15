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
    "LaR Arquitetura e Interiores. Projetos que unem função, emoção e movimento. Espaços não são ocupados, são experimentados.",
  openGraph: {
    title: "LaR Arquitetura e Interiores",
    description:
      "Projetos de arquitetura e interiores que unem função, emoção e movimento.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LaR Arquitetura e Interiores",
    description:
      "Projetos de arquitetura e interiores que unem função, emoção e movimento.",
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
