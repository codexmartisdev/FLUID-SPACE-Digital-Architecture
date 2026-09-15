import type { ReactNode } from "react";
import type { Metadata } from "next";
import { articles } from "@/data/articles";
import { createPageMetadata } from "@/lib/seo";

type ArticleLayoutProps = {
  children: ReactNode;
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: ArticleLayoutProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    return {
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return createPageMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/blog/${article.slug}`,
    noIndex: true,
  });
}

export default function ArticleLayout({ children }: ArticleLayoutProps) {
  return children;
}
