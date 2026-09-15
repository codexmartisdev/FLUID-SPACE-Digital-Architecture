"use client";

import { motion, useReducedMotion } from "motion/react";
import { FluidReveal } from "@/components/motion/FluidReveal";

interface TimelineStep {
  number: string;
  title: string;
  description: string;
}

interface ProcessTimelineProps {
  sectionNumber?: string;
  sectionTag?: string;
  title?: string;
  subtitle?: string;
  steps?: TimelineStep[];
}

const fluidEase = [0.22, 1, 0.36, 1] as const;

export function ProcessTimeline({
  sectionNumber = "04",
  sectionTag = "PROCESSO",
  title = "Da ideia ao espaço real.",
  subtitle = "Um processo colaborativo, transparente e focado em resultados que superam expectativas.",
  steps = [
    {
      number: "01",
      title: "Escuta",
      description: "Entendemos suas necessidades, referências e sonhos.",
    },
    {
      number: "02",
      title: "Conceito",
      description: "Transformamos ideias em possibilidades reais.",
    },
    {
      number: "03",
      title: "Desenvolvimento",
      description: "Detalhamos, alinhamos e evoluímos juntos.",
    },
    {
      number: "04",
      title: "Execução",
      description: "Acompanhamos de perto para garantir a excelência.",
    },
  ],
}: ProcessTimelineProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="processo-timeline-section"
      className="overflow-hidden border-t border-black/5 bg-[#faf9f7] py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-16 grid grid-cols-1 items-baseline gap-6 md:mb-20 lg:grid-cols-12 lg:gap-12">
          <FluidReveal className="flex items-baseline gap-3 lg:col-span-2" y={14}>
            <span className="font-mono text-xs tracking-widest text-neutral-400">{sectionNumber}</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
              {sectionTag}
            </span>
          </FluidReveal>

          <FluidReveal delay={0.05} className="lg:col-span-6">
            <h2 className="text-2xl font-light tracking-tight text-neutral-900 sm:text-3xl md:text-4xl">
              {title}
            </h2>
          </FluidReveal>

          <FluidReveal delay={0.1} y={14} className="lg:col-span-4 lg:text-right">
            <p className="font-mono text-xs uppercase leading-relaxed tracking-wide text-neutral-500">
              {subtitle}
            </p>
          </FluidReveal>
        </div>

        <div className="relative pb-2 pt-6">
          <div className="pointer-events-none absolute left-0 right-0 top-8 hidden h-10 opacity-50 md:block">
            <svg className="h-full w-full" viewBox="0 0 1000 40" fill="none" preserveAspectRatio="none" aria-hidden="true">
              <motion.path
                d="M 50,20 Q 250,5 450,22 T 850,18 T 980,24"
                stroke="#a3a3a3"
                strokeWidth="1"
                strokeDasharray="2 3"
                initial={prefersReducedMotion ? false : { pathLength: 0, opacity: 0 }}
                whileInView={prefersReducedMotion ? undefined : { pathLength: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.25, ease: fluidEase }}
              />
            </svg>
          </div>

          <div className="relative z-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.65, delay: prefersReducedMotion ? 0 : index * 0.08, ease: fluidEase }}
                className="group flex flex-col"
              >
                <div className="mb-5 flex items-center gap-3">
                  <motion.div
                    className="h-2.5 w-2.5 rounded-full bg-black ring-4 ring-[#faf9f7] shadow-xs"
                    whileHover={prefersReducedMotion ? undefined : { scale: 1.3 }}
                    transition={{ duration: 0.25, ease: fluidEase }}
                  />
                  <span className="font-mono text-xs tracking-wider text-neutral-400">
                    {step.number}
                  </span>
                </div>

                <h3 className="mb-2 text-lg font-medium text-neutral-900 md:text-xl">
                  {step.title}
                </h3>
                <p className="text-xs font-light leading-relaxed text-neutral-600 md:text-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
