import type { ReactNode } from "react";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Projetos",
  description:
    "Portfólio da LaR Arquitetura e Interiores. Arquitetura e interiores com foco em estética, funcionalidade, contexto e experiência.",
  path: "/projetos",
  noIndex: true,
});

export default function ProjetosLayout({ children }: { children: ReactNode }) {
  return children;
}
