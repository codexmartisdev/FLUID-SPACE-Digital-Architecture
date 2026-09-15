"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects, Project } from "@/data/projects";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function ProjetosPage() {
  const [selectedFilter, setSelectedFilter] = useState<string>("Todos");

  const filterCategories = ["Todos", "Residencial", "Interiores", "Comercial", "Corporativo"];

  const filteredProjects =
    selectedFilter === "Todos"
      ? projects
      : projects.filter(
          (p) =>
            p.category === selectedFilter ||
            (selectedFilter === "Corporativo" && p.tags.includes("Corporativo"))
        );

  const featuredProject = projects[0]; // Casa Horizon

  return (
    <div className="w-full">
      {/* =========================================================================
          HERO SECTION (4. Projetos.png)
      ========================================================================= */}
      <section
        id="projetos-hero"
        className="relative min-h-[90vh] pt-32 pb-16 md:pt-40 md:pb-24 flex flex-col justify-between overflow-hidden bg-[#faf9f7]"
      >
        <div className="absolute top-0 right-0 w-full lg:w-[58%] h-[60vh] lg:h-full pointer-events-none z-0">
          <div className="relative w-full h-full">
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

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex-1 flex flex-col justify-between">
          <div className="max-w-2xl pt-6 md:pt-10">
            <span className="inline-block font-mono text-[11px] md:text-xs tracking-[0.25em] text-neutral-500 uppercase mb-4">
              Projetos
            </span>

            <span className="block font-light text-2xl sm:text-3xl text-neutral-500 mb-2">
              Projetos
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-neutral-900 leading-[1.1] mb-6">
              Arquitetura para <br />
              <span className="font-normal text-black">ser vivida.</span>
            </h1>

            <p className="text-base sm:text-lg text-neutral-600 font-light leading-relaxed max-w-lg mb-8">
              Uma seleção de obras que traduzem ideias em espaços reais. Arquitetura e interiores com sensibilidade, função, luz e materialidade, criados para pessoas e suas histórias.
            </p>

            <div className="border-l-2 border-black/20 pl-4 py-1 max-w-md">
              <p className="text-xs md:text-sm font-light text-neutral-700 italic">
                &ldquo;Cada projeto é uma oportunidade de transformar a rotina em algo extraordinário.&rdquo;
              </p>
              <span className="block text-[10px] font-mono tracking-widest uppercase text-neutral-400 mt-1">
                Mick Ramos
              </span>
            </div>
          </div>

          <div className="pt-16 flex justify-between items-end border-t border-black/5 mt-12">
            <div className="text-[10px] font-mono tracking-[0.2em] uppercase text-neutral-400">
              Portfólio Selecionado
            </div>
            <div className="text-right text-[10px] font-mono tracking-[0.2em] uppercase text-neutral-400">
              Projetos que traduzem visões
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          01 — CURADORIA & FILTERS (4. Projetos.png)
      ========================================================================= */}
      <section id="projetos-curadoria" className="py-20 md:py-28 bg-[#faf9f7] border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-baseline mb-12">
            <div className="lg:col-span-2 flex flex-col">
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-xs tracking-widest text-neutral-400">01</span>
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-neutral-500">
                  CURADORIA
                </span>
              </div>
              <p className="font-mono text-[9px] tracking-[0.15em] text-neutral-400 uppercase mt-8 hidden lg:block max-w-[130px] leading-relaxed">
                Espaços reais. Histórias únicas. Vidas mais plenas.
              </p>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-neutral-900 leading-tight">
                Obras, interiores e espaços <br />
                pensados para durar.
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                Uma curadoria de projetos que expressa nossa forma de pensar, projetar e construir experiências. Cada obra reflete um equilíbrio entre estética, funcionalidade e o modo de viver de cada cliente.
              </p>
            </div>

            <div className="lg:col-span-4 lg:text-right">
              <span className="text-[10px] md:text-xs font-mono tracking-[0.2em] uppercase text-neutral-400">
                Arquitetura que conecta pessoas e lugares.
              </span>
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-3 pt-4 pb-8 border-b border-black/10">
            {filterCategories.map((cat) => {
              const isActive = selectedFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedFilter(cat)}
                  className={`px-6 py-2 rounded-full font-mono text-xs tracking-wider uppercase transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-black ${
                    isActive
                      ? "bg-neutral-900 text-white shadow-xs"
                      : "bg-white text-neutral-700 border border-black/10 hover:border-black/30"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          02 — PROJETOS (GRID) (4. Projetos.png)
      ========================================================================= */}
      <section id="projetos-grid-section" className="py-12 md:py-16 bg-[#faf9f7]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between mb-8 pb-4">
            <div className="flex items-baseline gap-2">
              <span className="font-mono text-xs tracking-widest text-neutral-400">02</span>
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-neutral-500">
                PROJETOS
              </span>
            </div>
            <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400">
              Ideias em espaços. Projetos que inspiram.
            </span>
          </div>

          {/* 3 Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {filteredProjects.map((project: Project) => (
              <Link
                key={project.slug}
                href={`/projetos/${project.slug}`}
                data-cursor="project"
                className="group flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-lg"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-neutral-200 mb-4">
                  <Image
                    src={project.cover}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                </div>

                <div className="flex items-center justify-between pt-1">
                  <h3 className="text-lg md:text-xl font-normal text-neutral-900 group-hover:text-black transition-colors">
                    {project.title}
                  </h3>
                  <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-black group-hover:translate-x-1 transition-all" />
                </div>

                <p className="text-[11px] font-mono tracking-wider uppercase text-neutral-500 mt-1">
                  {project.category} · {project.city} · {project.year}
                </p>

                <p className="text-xs text-neutral-600 font-light mt-2 line-clamp-2">
                  {project.shortDescription}
                </p>

                <div className="pt-3">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono tracking-wider uppercase text-neutral-900 group-hover:text-neutral-500 font-medium transition-colors">
                    <span>Ver projeto</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          03 — DESTAQUE (Detailed Feature section as in 4. Projetos.png)
      ========================================================================= */}
      <section id="projetos-destaque" className="py-20 md:py-28 bg-[#faf9f7] border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-8">
            <div className="lg:col-span-2 flex flex-col">
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-xs tracking-widest text-neutral-400">03</span>
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-neutral-500">
                  DESTAQUE
                </span>
              </div>
              <p className="font-mono text-[9px] tracking-[0.15em] text-neutral-400 uppercase mt-8 hidden lg:block max-w-[130px] leading-relaxed">
                Mais que arquitetura, uma forma de viver.
              </p>
            </div>

            <div className="lg:col-span-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-neutral-900 mb-2">
                {featuredProject.title}
              </h2>
              <p className="text-sm sm:text-base text-neutral-600 font-light mb-8">
                {featuredProject.subtitle}
              </p>
            </div>
          </div>

          {/* Side by side layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-start-3 lg:col-span-6 relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-neutral-200 shadow-sm">
              <Image
                src={featuredProject.featuredImage}
                alt={featuredProject.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="lg:col-span-4 space-y-6">
              <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                {featuredProject.description}
              </p>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 gap-4 py-4 border-y border-black/10 text-xs">
                <div>
                  <span className="block font-mono text-[10px] tracking-wider uppercase text-neutral-400">
                    Área
                  </span>
                  <span className="font-medium text-neutral-900">{featuredProject.area}</span>
                </div>
                <div>
                  <span className="block font-mono text-[10px] tracking-wider uppercase text-neutral-400">
                    Categoria
                  </span>
                  <span className="font-medium text-neutral-900">{featuredProject.category}</span>
                </div>
                <div>
                  <span className="block font-mono text-[10px] tracking-wider uppercase text-neutral-400">
                    Localização
                  </span>
                  <span className="font-medium text-neutral-900">{featuredProject.city}</span>
                </div>
                <div>
                  <span className="block font-mono text-[10px] tracking-wider uppercase text-neutral-400">
                    Ano
                  </span>
                  <span className="font-medium text-neutral-900">{featuredProject.year}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {featuredProject.tags.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full bg-white border border-black/10 text-[10px] font-mono uppercase text-neutral-600"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  href={`/projetos/${featuredProject.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-neutral-900 hover:text-neutral-500 font-medium group transition-colors"
                >
                  <span>Ver projeto completo</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          04 — ABORDAGEM (4. Projetos.png)
      ========================================================================= */}
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

      {/* =========================================================================
          05 — CONTATO CTA (4. Projetos.png)
      ========================================================================= */}
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
