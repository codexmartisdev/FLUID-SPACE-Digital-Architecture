import type { ReactNode } from "react";
import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { createPageMetadata } from "@/lib/seo";

type ProjectLayoutProps = {
  children: ReactNode;
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: ProjectLayoutProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return createPageMetadata({
    title: project.title,
    description: project.shortDescription,
    path: `/projetos/${project.slug}`,
    noIndex: true,
  });
}

export default function ProjectLayout({ children }: ProjectLayoutProps) {
  return children;
}
