"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { articles, blogThemes, Article } from "@/data/articles";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const categories = ["Todos", "Arquitetura", "Interiores", "Materiais", "Processos", "Tendências"];

  const featuredArticle = articles[0];
  const gridArticles = articles.slice(1);

  const filteredArticles =
    selectedCategory === "Todos"
      ? gridArticles
      : gridArticles.filter((a) => a.category === selectedCategory);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes("@")) return;
    setNewsletterSuccess(true);
    setNewsletterEmail("");
  };

  return (
    <div className="w-full">
      {/* =========================================================================
          HERO SECTION (5. Blog.png)
      ========================================================================= */}
      <section
        id="blog-hero"
        className="relative min-h-[90vh] pt-32 pb-16 md:pt-40 md:pb-24 flex flex-col justify-between overflow-hidden bg-[#faf9f7]"
      >
        <div className="absolute top-0 right-0 w-full lg:w-[58%] h-[60vh] lg:h-full pointer-events-none z-0">
          <div className="relative w-full h-full">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
              alt="Ambiente contemporâneo e iluminação natural fluida"
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
              Blog
            </span>

            <span className="block font-light text-2xl sm:text-3xl text-neutral-500 mb-2">
              Blog
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-neutral-900 leading-[1.1] mb-6">
              Ideias que <br />
              <span className="font-normal text-black">moldam espaços.</span>
            </h1>

            <p className="text-base sm:text-lg text-neutral-600 font-light leading-relaxed max-w-lg mb-8">
              Arquitetura, interiores, materiais, luz, experiência e bem-estar. Um espaço para compartilhar ideias, referências e reflexões sobre o que realmente importa: a vida nos espaços.
            </p>

            <div className="border-l-2 border-black/20 pl-4 py-1 max-w-md">
              <p className="text-xs md:text-sm font-light text-neutral-700 italic">
                &ldquo;A arquitetura também se constrói com conversa, pesquisa e repertório.&rdquo;
              </p>
              <span className="block text-[10px] font-mono tracking-widest uppercase text-neutral-400 mt-1">
                Mick Ramos
              </span>
            </div>
          </div>

          <div className="pt-16 flex justify-between items-end border-t border-black/5 mt-12">
            <div className="text-[10px] font-mono tracking-[0.2em] uppercase text-neutral-400">
              Caderno Digital
            </div>
            <div className="text-right text-[10px] font-mono tracking-[0.2em] uppercase text-neutral-400">
              Conteúdo que inspira visões
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          01 — EDITORIAL (5. Blog.png)
      ========================================================================= */}
      <section id="blog-editorial" className="py-20 md:py-28 bg-[#faf9f7] border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-2 flex flex-col">
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-xs tracking-widest text-neutral-400">01</span>
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-neutral-500">
                  EDITORIAL
                </span>
              </div>
              <p className="font-mono text-[9px] tracking-[0.15em] text-neutral-400 uppercase mt-8 hidden lg:block max-w-[130px] leading-relaxed">
                Ideias · Referências · Experiências · Perspectivas
              </p>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-neutral-900 leading-tight">
                Pensamento, repertório e <br />
                sensibilidade aplicada ao espaço.
              </h2>
              <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed max-w-lg">
                Aqui você encontra conteúdos sobre arquitetura, design de interiores, materiais, processos e tendências, sempre com um olhar humano e contemporâneo. Mais que projetos, acreditamos em espaços que inspiram uma vida melhor.
              </p>
            </div>

            <div className="lg:col-span-4 relative flex flex-col items-end">
              <div className="relative w-full h-56 md:h-64 rounded-xl overflow-hidden bg-neutral-100 shadow-xs">
                <Image
                  src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80"
                  alt="Arquitetura de luz e concreto"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-neutral-400 mt-3">
                Arquitetura é cultura. É vida. É pessoas.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          02 — DESTAQUE (5. Blog.png)
      ========================================================================= */}
      <section id="blog-destaque" className="py-12 md:py-16 bg-[#faf9f7] border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-baseline gap-2 mb-8">
            <span className="font-mono text-xs tracking-widest text-neutral-400">02</span>
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-neutral-500">
              DESTAQUE
            </span>
          </div>

          {/* Large Featured Article Card */}
          <Link
            href={`/blog/${featuredArticle.slug}`}
            className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-6 md:p-8 rounded-2xl bg-white border border-black/5 hover:border-black/15 shadow-xs transition-all"
          >
            <div className="lg:col-span-6 relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-neutral-200">
              <Image
                src={featuredArticle.cover}
                alt={featuredArticle.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-103"
              />
            </div>

            <div className="lg:col-span-6 flex flex-col justify-between py-2">
              <div>
                <span className="text-[11px] font-mono tracking-widest uppercase text-neutral-400 block mb-3">
                  {featuredArticle.category} · {featuredArticle.date}
                </span>

                <h3 className="text-2xl sm:text-3xl font-light text-neutral-900 group-hover:text-black leading-snug mb-4">
                  {featuredArticle.title}
                </h3>

                <p className="text-sm text-neutral-600 font-light leading-relaxed mb-6">
                  {featuredArticle.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-black/5">
                <span className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-neutral-900 group-hover:text-neutral-500 font-medium transition-colors">
                  <span>Ler artigo</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* =========================================================================
          03 — ARTIGOS & FILTROS (5. Blog.png)
      ========================================================================= */}
      <section id="blog-artigos" className="py-16 md:py-20 bg-[#faf9f7] border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Header & Filter Row */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div className="flex items-baseline gap-2">
              <span className="font-mono text-xs tracking-widest text-neutral-400">03</span>
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-neutral-500">
                ARTIGOS
              </span>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-5 py-1.5 rounded-full font-mono text-xs tracking-wider uppercase transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-black ${
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

          {/* 6 Article Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article: Article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group flex flex-col p-4 rounded-xl bg-white border border-black/5 hover:border-black/15 transition-all shadow-xs"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-neutral-100 mb-4">
                  <Image
                    src={article.cover}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-104"
                  />
                </div>

                <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 block mb-2">
                  {article.category} · {article.date}
                </span>

                <h3 className="text-base sm:text-lg font-normal text-neutral-900 group-hover:text-black leading-snug mb-2">
                  {article.title}
                </h3>

                <p className="text-xs text-neutral-600 font-light leading-relaxed line-clamp-2 mb-4">
                  {article.excerpt}
                </p>

                <div className="mt-auto pt-2">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono tracking-wider uppercase text-neutral-900 group-hover:text-neutral-500 font-medium transition-colors">
                    <span>Ler artigo</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          04 — CADERNO / TEMAS QUE NOS INSPIRAM (5. Blog.png)
      ========================================================================= */}
      <section id="blog-temas" className="py-20 md:py-28 bg-[#faf9f7] border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-baseline mb-16">
            <div className="lg:col-span-2 flex items-baseline gap-2">
              <span className="font-mono text-xs tracking-widest text-neutral-400">04</span>
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-neutral-500">
                CADERNO
              </span>
            </div>

            <div className="lg:col-span-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-neutral-900">
                Temas que nos inspiram.
              </h2>
            </div>

            <div className="lg:col-span-4 lg:text-right">
              <span className="text-[10px] md:text-xs font-mono tracking-[0.2em] uppercase text-neutral-400">
                Mais que conteúdo, um convite a olhar o espaço de outra forma.
              </span>
            </div>
          </div>

          {/* 4 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {blogThemes.map((theme) => (
              <div
                key={theme.id}
                className="flex flex-col p-4 rounded-xl bg-white border border-black/5 shadow-xs"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-neutral-100 mb-4">
                  <Image
                    src={theme.image}
                    alt={theme.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <h4 className="text-base font-medium text-neutral-900 mb-1">{theme.title}</h4>
                <p className="text-xs text-neutral-500 font-light leading-relaxed">
                  {theme.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          05 — CONEXÃO / NEWSLETTER (5. Blog.png)
      ========================================================================= */}
      <section id="blog-newsletter" className="py-20 md:py-24 bg-white border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-2 flex items-baseline gap-2">
              <span className="font-mono text-xs tracking-widest text-neutral-400">05</span>
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-neutral-500">
                CONEXÃO
              </span>
            </div>

            <div className="lg:col-span-5">
              <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-neutral-900 leading-tight">
                Receba novos artigos <br />
                e insights no seu e-mail.
              </h2>
            </div>

            <div className="lg:col-span-5">
              <p className="text-xs sm:text-sm text-neutral-600 font-light mb-4">
                Conteúdos selecionados sobre arquitetura, interiores, tendências e bem-estar, direto na sua caixa de entrada.
              </p>

              {newsletterSuccess ? (
                <div className="flex items-center gap-3 p-3.5 rounded-full bg-neutral-100 text-neutral-900 text-xs font-mono">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Obrigado! Seu e-mail foi cadastrado com sucesso.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Seu e-mail"
                    className="flex-1 px-5 py-3 rounded-full border border-black/15 bg-neutral-50 text-xs text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-black"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-full bg-neutral-900 text-white font-mono text-xs tracking-wider uppercase font-medium hover:bg-neutral-800 transition-colors shrink-0"
                  >
                    Quero receber →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          06 — CONTATO CTA
      ========================================================================= */}
      <ContactCTA
        sectionNumber="06"
        title="Vamos conversar sobre o seu espaço?"
        subtitle="Novas ideias começam com uma boa conversa."
        buttonText="ENTRAR EM CONTATO"
        buttonHref="/contato"
      />
    </div>
  );
}
