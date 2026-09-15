"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Project } from "@/data/projects";
import { ImageReveal } from "@/components/motion/ImageReveal";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const fluidEase = [0.22, 1, 0.36, 1] as const;

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.article
      layout
      initial={prefersReducedMotion ? false : { opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: Math.min(index, 5) * 0.045, ease: fluidEase }}
      className="min-w-0"
    >
      <Link
        href={`/projetos/${project.slug}`}
        data-cursor="project"
        className="group block rounded-[1.1rem] focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-4"
      >
        <motion.div
          whileHover={prefersReducedMotion ? undefined : { y: -4 }}
          transition={{ duration: 0.45, ease: fluidEase }}
        >
          <ImageReveal className="mb-4 aspect-[4/3] w-full rounded-[1.1rem] bg-neutral-200">
            <div className="relative h-full w-full overflow-hidden rounded-[1.1rem]">
              <Image
                src={project.cover}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 translate-y-full px-5 pb-4 pt-12 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0">
                <div className="flex items-center justify-between border-t border-white/40 pt-3 text-[10px] font-mono uppercase tracking-[0.16em] text-white">
                  <span>{project.category}</span>
                  <span>{project.year}</span>
                </div>
              </div>
            </div>
          </ImageReveal>

          <div className="flex items-start justify-between gap-4 pt-1">
            <div className="min-w-0">
              <h3 className="text-lg font-normal tracking-[-0.02em] text-neutral-900 transition-colors group-hover:text-black md:text-xl">
                {project.title}
              </h3>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-500">
                {project.category} · {project.city} · {project.year}
              </p>
            </div>
            <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-black/10 transition-all duration-500 group-hover:border-black group-hover:bg-black group-hover:text-white">
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-0.5" />
            </span>
          </div>

          <p className="mt-2 line-clamp-2 text-xs font-light leading-relaxed text-neutral-600">
            {project.shortDescription}
          </p>

          <div className="mt-4 h-px w-full overflow-hidden bg-black/[0.07]">
            <span className="block h-full w-full origin-left scale-x-0 bg-black transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />
          </div>
        </motion.div>
      </Link>
    </motion.article>
  );
}
