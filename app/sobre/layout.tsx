import type { ReactNode } from "react";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Sobre",
  description:
    "Conheça a LaR Arquitetura e Interiores, fundada por Laise Brito e Rita Fontenele, e a visão que orienta seus projetos em Parnaíba e Luiz Correia.",
  path: "/sobre",
});

export default function SobreLayout({ children }: { children: ReactNode }) {
  return children;
}
