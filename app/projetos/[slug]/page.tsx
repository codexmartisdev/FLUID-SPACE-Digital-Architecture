import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { ProjectGallery } from "@/components/projects/ProjectGallery";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projects[projectIndex];
  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : projects[projects.length - 1];
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : projects[0];

  return (
    <div className="w-full">
      {/* Monumental Hero */}
      <section className="relative min-h-[85vh] pt-32 pb-16 md:pt-40 md:pb-24 flex flex-col justify-between overflow-hidden bg-neutral-950 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src={project.featuredImage}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-neutral-950/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex-1 flex flex-col justify-between">
          <div>
            <Link
              href="/projetos"
              className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-neutral-300 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Voltar para Projetos</span>
            </Link>

            <span className="block font-mono text-xs tracking-[0.25em] text-neutral-400 uppercase mb-3">
              {project.category} · {project.city} · {project.year}
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-light tracking-tight text-white mb-6">
              {project.title}
            </h1>

            {project.subtitle && (
              <p className="text-lg sm:text-xl text-neutral-300 font-light max-w-2xl leading-relaxed">
                {project.subtitle}
              </p>
            )}
          </div>

          {/* Project Technical Meta Strip */}
          <div className="pt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-white/20 mt-12 text-xs font-mono">
            <div>
              <span className="text-neutral-400 uppercase tracking-widest text-[10px] block mb-1">
                Área Total
              </span>
              <span className="text-sm text-white font-medium">{project.area}</span>
            </div>
            <div>
              <span className="text-neutral-400 uppercase tracking-widest text-[10px] block mb-1">
                Localização
              </span>
              <span className="text-sm text-white font-medium">{project.city}</span>
            </div>
            <div>
              <span className="text-neutral-400 uppercase tracking-widest text-[10px] block mb-1">
                Ano do Projeto
              </span>
              <span className="text-sm text-white font-medium">{project.year}</span>
            </div>
            <div>
              <span className="text-neutral-400 uppercase tracking-widest text-[10px] block mb-1">
                Fotografia
              </span>
              <span className="text-sm text-white font-medium">Acervo Mick Ramos</span>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative & Concept Section */}
      <section className="py-20 md:py-28 bg-[#faf9f7] border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4 space-y-6">
              <span className="font-mono text-xs tracking-widest text-neutral-400 uppercase block">
                01 / CONCEITO
              </span>
              <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-neutral-900 leading-snug">
                Equilíbrio entre forma, função e contexto.
              </h2>

              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full bg-white border border-black/10 text-xs font-mono text-neutral-600"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-8 space-y-6 text-sm sm:text-base text-neutral-700 font-light leading-relaxed">
              <p className="text-lg text-neutral-900 font-normal leading-relaxed">
                {project.description}
              </p>
              <p>{project.concept}</p>

              {project.challenge && (
                <div className="pt-6 border-t border-black/10 grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-mono text-xs tracking-wider uppercase text-neutral-400 mb-2">
                      Desafio Espacial
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 font-light">
                      {project.challenge}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-mono text-xs tracking-wider uppercase text-neutral-400 mb-2">
                      Solução Arquitetônica
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 font-light">
                      {project.solution}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 md:py-28 bg-[#faf9f7]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between mb-12">
            <span className="font-mono text-xs tracking-widest uppercase text-neutral-400">
              02 / REGISTROS VISUAIS
            </span>
            <span className="font-mono text-[10px] tracking-widest uppercase text-neutral-500">
              {project.gallery.length} fotografias · clique para ampliar
            </span>
          </div>

          <ProjectGallery images={project.gallery} title={project.title} />
        </div>
      </section>

      {/* Materiality Palette */}
      <section className="py-20 md:py-28 bg-[#111215] text-white border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-baseline mb-16">
            <div className="lg:col-span-2">
              <span className="font-mono text-xs tracking-widest uppercase text-neutral-400">
                03 / MATERIALIDADE
              </span>
            </div>
            <div className="lg:col-span-6">
              <h2 className="text-2xl sm:text-3xl font-light text-white">
                Texturas, solidez e sensações táteis.
              </h2>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                A matéria como elemento vivo
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.materials.map((m) => (
              <div
                key={m.name}
                className="p-6 rounded-xl bg-neutral-900/60 border border-white/10 space-y-2"
              >
                <h4 className="text-sm font-medium text-white">{m.name}</h4>
                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  {m.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Navigation (Previous / Next) */}
      <section className="py-12 bg-[#faf9f7] border-t border-black/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <Link
              href={`/projetos/${prevProject.slug}`}
              className="group flex flex-col p-6 rounded-xl bg-white border border-black/5 hover:border-black/20 transition-all text-left"
            >
              <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 flex items-center gap-2 mb-2">
                <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
                <span>Projeto Anterior</span>
              </span>
              <span className="text-lg font-medium text-neutral-900 group-hover:text-black">
                {prevProject.title}
              </span>
              <span className="text-xs text-neutral-500 font-mono mt-1">
                {prevProject.category} · {prevProject.city}
              </span>
            </Link>

            <Link
              href={`/projetos/${nextProject.slug}`}
              className="group flex flex-col p-6 rounded-xl bg-white border border-black/5 hover:border-black/20 transition-all text-right sm:items-end"
            >
              <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 flex items-center gap-2 mb-2">
                <span>Próximo Projeto</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="text-lg font-medium text-neutral-900 group-hover:text-black">
                {nextProject.title}
              </span>
              <span className="text-xs text-neutral-500 font-mono mt-1">
                {nextProject.category} · {nextProject.city}
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA
        sectionNumber="04"
        title="Deseja conceber um projeto com essa essência?"
        subtitle="Agende uma conversa para explorarmos o potencial do seu espaço."
        buttonText="FALAR SOBRE MEU PROJETO"
        buttonHref="/contato"
      />
    </div>
  );
}
