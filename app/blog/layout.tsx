import type { ReactNode } from "react";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Caderno",
  description:
    "Conteúdos da LaR Arquitetura e Interiores sobre arquitetura, interiores, materiais, luz, conforto e experiência dos espaços.",
  path: "/blog",
  noIndex: true,
});

export default function BlogLayout({ children }: { children: ReactNode }) {
  return children;
}
