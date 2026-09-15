"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { projects } from "@/data/projects";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { FluidReveal } from "@/components/motion/FluidReveal";
import { ImageReveal } from "@/components/motion/ImageReveal";
import { ParallaxLayer } from "@/components/motion/ParallaxLayer";
import { FluidLink } from "@/components/motion/FluidLink";

export default function ProjetosPage() {
  const [selectedFilter, setSelectedFilter] = useState<string>("Todos");

  const filterCategories = ["Todos", "Residencial", "Interiores", "Comercial", "Corporativo"];

  const filteredProjects =
    selectedFilter === "Todos"
      ? projects
      : projects.filter(
          (project) =>
            project.category === selectedFilter ||
            (selectedFilter === "Corporativo" && project.tags.includes("Corporativo"))
        );

  const featuredProject = projects[0];

  return (
    <div className="w-full">
      <section
        id="projetos-hero"
        className="relative flex min-h-[90vh] flex-col justify-between overflow-hidden bg-[#faf9f7] pb-16 pt-32 md:pb-24 md:pt-40"
      >
        <div className="pointer-events-none absolute right-0 top-0 z-0 h-[60vh] w-full lg:h-full lg:w-[58%]">
          <div className="relative h-full w-full overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=85"
              alt="Projeto arquitetônico monumental com piscina de borda infinita e vista para o oceano"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#faf9f7] via-[#faf9f7]/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#faf9f7] via-transparent to-transparent lg:hidden" />
          </div>
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-between px-6 md:px-12">
          <div className="max-w-2xl pt-6 md:pt-10">
            <FluidReveal y={16}>
              <span className="mb-4 inline-block font-mono text-[11px] uppercase tracking-[0.25em] text-neutral-500 md:text-xs">
                Projetos
              </span>
            </FluidReveal>

            <FluidReveal delay={0.04} y={18}>
              <span className="mb-2 block text-2xl font-light text-neutral-500 sm:text-3xl">
                Projetos
              </span>
            </FluidReveal>

            <FluidReveal delay={0.08} y={28}>
              <h1 className="mb-6 text-4xl font-light leading-[1.1] tracking-tight text-neutral-900 sm:text-5xl md:text-6xl">
                Arquitetura para <br />
                <span className="font-normal text-black">ser vivida.</span>
              </h1>
            </FluidReveal>

            <FluidReveal delay={0.14} y={20}>
              <p className="mb-8 max-w-lg text-base font-light leading-relaxed text-neutral-600 sm:text-lg">
                Uma seleção de obras que traduzem ideias em espaços reais. Arquitetura e interiores com sensibilidade, função, luz e materialidade, criados para pessoas e suas histórias.
              </p>
            </FluidReveal>

            <FluidReveal delay={0.2} y={16}>
              <div className="max-w-md border-l-2 border-black/20 py-1 pl-4">
                <p className="text-xs font-light italic text-neutral-700 md:text-sm">
                  &ldquo;Cada projeto é uma oportunidade de transformar a rotina em algo extraordinário.&rdquo;
                </p>
                <span className="mt-1 block font-mono text-[10px] uppercase tracking-widest text-neutral-400">
                  Mick Ramos
                </span>
              </div>
            </FluidReveal>
          </div>

          <FluidReveal delay={0.22} y={12} className="mt-12 flex items-end justify-between border-t border-black/5 pt-16">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-400">
              Portfólio Selecionado
            </div>
            <div className="text-right font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-400">
              Projetos que traduzem visões
            </div>
          </FluidReveal>
        </div>
      </section>

      <section id="projetos-curadoria" className="border-t border-black/5 bg-[#faf9f7] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="mb-12 grid grid-cols-1 items-baseline gap-8 lg:grid-cols-12 lg:gap-12">
            <FluidReveal className="flex flex-col lg:col-span-2" y={16}>
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-xs tracking-widest text-neutral-400">01</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                  CURADORIA
                </span>
              </div>
              <p className="mt-8 hidden max-w-[130px] font-mono text-[9px] uppercase leading-relaxed tracking-[0.15em] text-neutral-400 lg:block">
                Espaços reais. Histórias únicas. Vidas mais plenas.
              </p>
            </FluidReveal>

            <FluidReveal delay={0.05} className="space-y-4 lg:col-span-6">
              <h2 className="text-2xl font-light leading-tight tracking-tight text-neutral-900 sm:text-3xl md:text-4xl">
                Obras, interiores e espaços <br />
                pensados para durar.
              </h2>
              <p className="text-xs font-light leading-relaxed text-neutral-600 sm:text-sm">
                Uma curadoria de projetos que expressa nossa forma de pensar, projetar e construir experiências. Cada obra reflete um equilíbrio entre estética, funcionalidade e o modo de viver de cada cliente.
              </p>
            </FluidReveal>

            <FluidReveal delay={0.1} className="lg:col-span-4 lg:text-right" y={14}>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-400 md:text-xs">
                Arquitetura que conecta pessoas e lugares.
              </span>
            </FluidReveal>
          </div>

          <FluidReveal delay={0.08} y={12} className="flex flex-wrap items-center gap-3 border-b border-black/10 pb-8 pt-4">
            {filterCategories.map((category) => {
              const isActive = selectedFilter === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedFilter(category)}
                  aria-pressed={isActive}
                  className={`relative isolate overflow-hidden rounded-full border px-6 py-2 font-mono text-xs uppercase tracking-wider transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-black ${
                    isActive
                      ? "border-neutral-900 text-white"
                      : "border-black/10 bg-white text-neutral-700 hover:border-black/30"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="project-filter-active"
                      className="absolute inset-0 -z-10 bg-neutral-900"
                      transition={{ type: "spring", stiffness: 360, damping: 32, mass: 0.7 }}
                    />
                  )}
                  {category}
                </button>
              );
            })}
          </FluidReveal>
        </div>
      </section>

      <section id="projetos-grid-section" className="bg-[#faf9f7] py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <FluidReveal y={14} className="mb-8 flex items-center justify-between pb-4">
            <div className="flex items-baseline gap-2">
              <span className="font-mono text-xs tracking-widest text-neutral-400">02</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                PROJETOS
              </span>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400">
              Ideias em espaços. Projetos que inspiram.
            </span>
          </FluidReveal>

          <motion.div layout className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      <section id="projetos-destaque" className="border-t border-black/5 bg-[#faf9f7] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="mb-8 grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
            <FluidReveal className="flex flex-col lg:col-span-2" y={16}>
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-xs tracking-widest text-neutral-400">03</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                  DESTAQUE
                </span>
              </div>
              <p className="mt-8 hidden max-w-[130px] font-mono text-[9px] uppercase leading-relaxed tracking-[0.15em] text-neutral-400 lg:block">
                Mais que arquitetura, uma forma de viver.
              </p>
            </FluidReveal>

            <FluidReveal delay={0.06} className="lg:col-span-10">
              <h2 className="mb-2 text-3xl font-light text-neutral-900 sm:text-4xl md:text-5xl">
                {featuredProject.title}
              </h2>
              <p className="mb-8 text-sm font-light text-neutral-600 sm:text-base">
                {featuredProject.subtitle}
              </p>
            </FluidReveal>
          </div>

          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-start-3 lg:col-span-6">
              <ImageReveal className="aspect-[16/10] w-full rounded-2xl bg-neutral-200 shadow-sm">
                <ParallaxLayer className="h-full w-full" distance={18}>
                  <div className="relative h-[calc(100%+36px)] w-full -translate-y-[18px]">
                    <Image
                      src={featuredProject.featuredImage}
                      alt={featuredProject.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </ParallaxLayer>
              </ImageReveal>
            </div>

            <FluidReveal delay={0.1} className="space-y-6 lg:col-span-4" y={18}>
              <p className="text-xs font-light leading-relaxed text-neutral-600 sm:text-sm">
                {featuredProject.description}
              </p>

              <div className="grid grid-cols-2 gap-4 border-y border-black/10 py-4 text-xs">
                <div>
                  <span className="block font-mono text-[10px] uppercase tracking-wider text-neutral-400">Área</span>
                  <span className="font-medium text-neutral-900">{featuredProject.area}</span>
                </div>
                <div>
                  <span className="block font-mono text-[10px] uppercase tracking-wider text-neutral-400">Categoria</span>
                  <span className="font-medium text-neutral-900">{featuredProject.category}</span>
                </div>
                <div>
                  <span className="block font-mono text-[10px] uppercase tracking-wider text-neutral-400">Localização</span>
                  <span className="font-medium text-neutral-900">{featuredProject.city}</span>
                </div>
                <div>
                  <span className="block font-mono text-[10px] uppercase tracking-wider text-neutral-400">Ano</span>
                  <span className="font-medium text-neutral-900">{featuredProject.year}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {featuredProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-black/10 bg-white px-3 py-1 font-mono text-[10px] uppercase text-neutral-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="pt-2">
                <FluidLink href={`/projetos/${featuredProject.slug}`} variant="text">
                  Ver projeto completo
                </FluidLink>
              </div>
            </FluidReveal>
          </div>
        </div>
      </section>

      <ProcessTimeline
        sectionNumber="04"
        sectionTag="ABORDAGEM"
        title="Cada projeto nasce de escuta, conceito e precisão."
        subtitle="Processo que gera resultados extraordinários."
        steps={[
          {
            number: "01",
            title: "Escuta",
            description: "Compreender histórias, necessidades e o contexto de cada projeto.",
          },
          {
            number: "02",
            title: "Conceito",
            description: "Transformar ideias em soluções com identidade e propósito.",
          },
          {
            number: "03",
            title: "Desenvolvimento",
            description: "Detalhamento técnico com rigor, estética e viabilidade.",
          },
          {
            number: "04",
            title: "Acompanhamento",
            description: "Presença em todas as etapas para garantir a excelência na execução.",
          },
        ]}
      />

      <ContactCTA
        sectionNumber="05"
        title="Vamos criar o próximo projeto juntos?"
        subtitle="Conte sua ideia. Estamos prontos para transformar seus planos em espaços reais."
        buttonText="ENTRAR EM CONTATO"
        buttonHref="/contato"
      />
    </div>
  );
}
