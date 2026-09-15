import type { ReactNode } from "react";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Contato",
  description:
    "Entre em contato com a LaR Arquitetura e Interiores pelo WhatsApp para conversar sobre seu projeto em Parnaíba, Luiz Correia e região.",
  path: "/contato",
});

export default function ContatoLayout({ children }: { children: ReactNode }) {
  return children;
}
