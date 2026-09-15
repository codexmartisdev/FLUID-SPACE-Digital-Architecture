import type { ReactNode } from "react";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Serviços",
  description:
    "Serviços de arquitetura e design de interiores da LaR Arquitetura e Interiores para projetos em Parnaíba, Luiz Correia e região.",
  path: "/servicos",
});

export default function ServicosLayout({ children }: { children: ReactNode }) {
  return children;
}
