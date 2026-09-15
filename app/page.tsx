import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import { servicesData } from "@/data/services";
import { articles } from "@/data/articles";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function HomePage() {
  const selectedProjects = projects.slice(0, 3);
  const featuredArticle = articles[0];

  return (
    <div className="w-full">
      {/* =========================================================================
          HERO SECTION (Reproduction of 1. Início.png)
      ========================================================================= */}
      <section
        id="hero-section"
        className="relative min-h-[92vh] md:min-h-screen pt-32 pb-16 md:pt-40 md:pb-24 flex flex-col justify-between overflow-hidden bg-[#faf9f7]"
      >
        {/* Organic fluid architectural image with subtle overlay */}
        <div className="absolute top-0 right-0 w-full lg:w-[62%] h-[60vh] lg:h-full pointer-events-none z-0">
          <div className="relative w-full h-full">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=90"
              alt="Arquitetura fluida contemporânea com curvas orgânicas e vista para o oceano"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 62vw"
              className="object-cover object-center"
            />
            {/* Subtle multi-gradient masks to blend organically with light background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#faf9f7] via-[#faf9f7]/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#faf9f7] via-transparent to-transparent lg:hidden" />
          </div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex-1 flex flex-col justify-between">
          {/* Upper Hero Grid */}
          <div className="max-w-2xl pt-6 md:pt-12">
            <span className="inline-block font-mono text-[11px] md:text-xs tracking-[0.25em] text-neutral-500 uppercase mb-4 md:mb-6">
              Arquitetura · Interiores · Design
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-neutral-900 leading-[1.08] mb-6 md:mb-8">
              Espaços não são <br />
              ocupados. <br />
              <span className="font-normal text-black">São experimentados.</span>
            </h1>

            <p className="text-base sm:text-lg text-neutral-600 font-light leading-relaxed max-w-lg mb-8 md:mb-10">
              Criamos espaços que unem função, emoção e movimento. Arquitetura para viver, sentir e pertencer.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/projetos"
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-neutral-950 text-white font-mono text-xs tracking-wider uppercase font-medium hover:bg-neutral-800 transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-md shadow-black/10"
              >
                <span>Ver projetos</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/contato"
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full border border-neutral-300 bg-[#faf9f7]/80 backdrop-blur-xs text-neutral-800 font-mono text-xs tracking-wider uppercase font-medium hover:bg-neutral-100 hover:border-black transition-all"
              >
                <span>Agendar conversa</span>
              </Link>
            </div>
          </div>

          {/* Lower Hero Metadata Bar */}
          <div className="pt-16 md:pt-24 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 border-t border-black/5 mt-12">
            {/* Left Tag Column */}
            <div className="flex flex-wrap sm:flex-col gap-2 sm:gap-1 text-[10px] font-mono tracking-[0.2em] text-neutral-400 uppercase">
              <span>Forma</span>
              <span>Luz</span>
              <span>Pessoas</span>
              <span>Possibilidades</span>
            </div>

            {/* Right Quote Block */}
            <div className="max-w-xs text-left sm:text-right">
              <p className="font-mono text-[10px] md:text-xs tracking-wider text-neutral-500 uppercase leading-relaxed">
                &ldquo;Arquitetura é a arte de dar forma ao amanhã.&rdquo;
              </p>
              <span className="block text-[10px] font-mono tracking-[0.2em] text-neutral-400 uppercase mt-1">
                Mick Ramos
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          01 — ESSÊNCIA (Reproduction of Section 01 in 1. Início.png)
      ========================================================================= */}
      <section id="essencia-section" className="py-20 md:py-28 bg-[#faf9f7] border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Section Tag Left */}
            <div className="lg:col-span-2 flex flex-col">
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-xs tracking-widest text-neutral-400">01</span>
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-neutral-500">
                  ESSÊNCIA
                </span>
              </div>
              <div className="mt-8 hidden lg:flex flex-col gap-1 text-[9px] font-mono tracking-[0.2em] text-neutral-400 uppercase">
                <span>Design</span>
                <span>Experiência</span>
                <span>Materialidade</span>
                <span>Movimento</span>
              </div>
            </div>

            {/* Middle Main Text */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-neutral-900 leading-tight">
                Arquitetura <br />
                em movimento.
              </h2>
              <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed max-w-lg">
                Acreditamos em um design que transcende o óbvio. Nossos projetos nascem da escuta, do lugar e das pessoas, e se materializam em espaços que equilibram luz, forma, funcionalidade e emoção.
              </p>
              <div className="pt-2">
                <Link
                  href="/sobre"
                  className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-neutral-900 hover:text-neutral-500 font-medium group transition-colors"
                >
                  <span>Conheça nossa história</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Right Curve Visual / Graphic */}
            <div className="lg:col-span-4 relative flex flex-col items-end">
              <div className="relative w-full h-56 md:h-72 rounded-xl overflow-hidden bg-neutral-100 shadow-xs">
                <Image
                  src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80"
                  alt="Detalhe de arquitetura fluida de concreto e luz natural"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-neutral-400 mt-3">
                Mais que espaços, experiências.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          02 — PROJETOS SELECIONADOS (Reproduction of Section 02 in 1. Início.png)
      ========================================================================= */}
      <section id="projetos-selecionados" className="py-20 md:py-28 bg-[#faf9f7] border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Header Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-baseline mb-12 md:mb-16">
            <div className="lg:col-span-2 flex items-baseline gap-2">
              <span className="font-mono text-xs tracking-widest text-neutral-400">02</span>
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-neutral-500">
                PROJETOS
              </span>
            </div>

            <div className="lg:col-span-5">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-neutral-900">
                Projetos Selecionados
              </h2>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:flex-row items-start sm:items-center justify-between lg:justify-end gap-4">
              <span className="hidden sm:inline text-[11px] font-mono tracking-wider text-neutral-400 uppercase">
                — Arquitetura real para pessoas reais.
              </span>
              <Link
                href="/projetos"
                className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-neutral-900 hover:text-neutral-500 font-medium group transition-colors"
              >
                <span>Ver todos os projetos</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* 3 Selected Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {selectedProjects.map((project) => (
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
                    sizes="(max-width: 768px) 100vw, 33vw"
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
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          03 — SERVIÇOS (Dark luxury section as in 1. Início.png)
      ========================================================================= */}
      <section id="servicos-home-section" className="py-20 md:py-28 bg-[#111215] text-white border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-baseline mb-16">
            <div className="lg:col-span-2 flex items-baseline gap-2">
              <span className="font-mono text-xs tracking-widest text-neutral-500">03</span>
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-neutral-400">
                SERVIÇOS
              </span>
            </div>

            <div className="lg:col-span-7">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-white leading-snug">
                Soluções completas <br />
                para cada etapa do seu projeto.
              </h2>
            </div>

            <div className="lg:col-span-3 lg:text-right">
              <span className="text-[10px] md:text-xs font-mono tracking-[0.2em] uppercase text-neutral-400">
                Do conceito à realidade.
              </span>
            </div>
          </div>

          {/* 5 Horizontal Services Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className="group flex flex-col justify-between p-5 rounded-xl bg-neutral-900/60 border border-white/5 hover:border-white/20 transition-all duration-300"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-neutral-800 mb-4">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 20vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <h3 className="text-base font-medium text-white mb-2">{service.title}</h3>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <Link
                  href="/servicos"
                  className="inline-flex items-center gap-2 text-[10px] font-mono tracking-wider uppercase text-neutral-300 group-hover:text-white transition-colors"
                >
                  <span>Saiba mais</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          04 — PROCESSO (Timeline with flowing line as in 1. Início.png)
      ========================================================================= */}
      <ProcessTimeline
        sectionNumber="04"
        sectionTag="PROCESSO"
        title="Da ideia ao espaço real."
        subtitle="Um processo colaborativo, transparente e focado em resultados que superam expectativas."
      />

      {/* =========================================================================
          05 — CADERNO / BLOG PREVIEW (Reproduction of Section 05 in 1. Início.png)
      ========================================================================= */}
      <section id="caderno-blog-preview" className="py-20 md:py-28 bg-[#faf9f7] border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: 05 BLOG + Title + Link */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div className="flex items-baseline gap-2 mb-6">
                <span className="font-mono text-xs tracking-widest text-neutral-400">05</span>
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-neutral-500">
                  BLOG
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-neutral-900 mb-4">
                Caderno
              </h2>

              <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed max-w-sm mb-8">
                Ideias, referências e perspectivas sobre arquitetura, design e o viver bem.
              </p>

              <div>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-neutral-900 hover:text-neutral-500 font-medium group transition-colors"
                >
                  <span>Ver todos os artigos</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Right: Featured Article Card */}
            <div className="lg:col-span-7">
              <Link
                href={`/blog/${featuredArticle.slug}`}
                className="group grid grid-cols-1 md:grid-cols-12 gap-6 p-4 md:p-6 rounded-2xl bg-white border border-black/5 hover:border-black/15 shadow-xs transition-all"
              >
                <div className="md:col-span-6 relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-neutral-200">
                  <Image
                    src={featuredArticle.cover}
                    alt={featuredArticle.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 30vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="md:col-span-6 flex flex-col justify-between py-2">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 block mb-2">
                      {featuredArticle.category} · {featuredArticle.date}
                    </span>
                    <h3 className="text-lg md:text-xl font-normal text-neutral-900 group-hover:text-black leading-snug mb-3">
                      {featuredArticle.title}
                    </h3>
                    <p className="text-xs text-neutral-600 font-light leading-relaxed">
                      {featuredArticle.excerpt}
                    </p>
                  </div>

                  <div className="pt-4">
                    <span className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-neutral-900 group-hover:text-neutral-500 font-medium transition-colors">
                      <span>Ler artigo</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          06 — CONTATO CTA
      ========================================================================= */}
      <ContactCTA
        sectionNumber="06"
        title="Toda obra começa com uma conversa."
        subtitle="Vamos transformar suas ideias em espaços extraordinários?"
        buttonText="ENTRAR EM CONTATO"
        buttonHref="/contato"
      />
    </div>
  );
}
