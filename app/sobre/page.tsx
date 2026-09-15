import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function SobrePage() {
  const principles = [
    {
      title: "Luz",
      description: "A luz como elemento vital, que revela, transforma e dá vida aos espaços.",
      image:
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Materialidade",
      description: "Materiais autênticos, honestos e atemporais, em harmonia com o entorno.",
      image:
        "https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Fluxo",
      description: "Espaços que conectam, acolhem e permitem a liberdade de viver.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Precisão",
      description: "Do conceito ao detalhe, com rigor técnico e sensibilidade estética.",
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Sensibilidade",
      description: "Arquitetura feita para pessoas, com empatia, escuta e propósito.",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="w-full">
      {/* =========================================================================
          HERO SECTION (2. Sobre.png)
      ========================================================================= */}
      <section
        id="sobre-hero"
        className="relative min-h-[90vh] pt-32 pb-16 md:pt-40 md:pb-24 flex flex-col justify-between overflow-hidden bg-[#faf9f7]"
      >
        <div className="absolute top-0 right-0 w-full lg:w-[50%] h-[60vh] lg:h-full pointer-events-none z-0">
          <div className="relative w-full h-full">
            <Image
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1600&q=85"
              alt="Mick Ramos — Retrato profissional em ambiente arquitetônico"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top filter grayscale-[20%]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#faf9f7] via-[#faf9f7]/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#faf9f7] via-transparent to-transparent lg:hidden" />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex-1 flex flex-col justify-between">
          <div className="max-w-2xl pt-6 md:pt-10">
            <span className="inline-block font-mono text-[11px] md:text-xs tracking-[0.25em] text-neutral-500 uppercase mb-4">
              Arquitetura · Interiores · Design
            </span>

            <span className="block font-light text-2xl sm:text-3xl text-neutral-500 mb-2">
              Sobre
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-neutral-900 leading-[1.1] mb-6">
              Antes da forma, <br />
              <span className="font-normal text-black">existe pensamento.</span>
            </h1>

            <p className="text-base sm:text-lg text-neutral-600 font-light leading-relaxed max-w-lg mb-8">
              Arquitetura, interiores e design guiados pela luz, pela materialidade, pelo movimento e, principalmente, pela experiência humana.
            </p>

            <div className="border-l-2 border-black/20 pl-4 py-1 max-w-md">
              <p className="text-xs md:text-sm font-light text-neutral-700 italic">
                &ldquo;Espaços bem pensados têm o poder de transformar vidas.&rdquo;
              </p>
              <span className="block text-[10px] font-mono tracking-widest uppercase text-neutral-400 mt-1">
                Mick Ramos
              </span>
            </div>
          </div>

          <div className="pt-16 flex justify-between items-end border-t border-black/5 mt-12">
            <div className="text-[10px] font-mono tracking-[0.2em] uppercase text-neutral-400">
              Mick Ramos Arquitetura
            </div>
            <div className="text-right text-[10px] font-mono tracking-[0.2em] uppercase text-neutral-400">
              Espaços · Pessoas · Histórias · Sempre
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          01 — ESSÊNCIA (2. Sobre.png)
      ========================================================================= */}
      <section id="sobre-essencia" className="py-20 md:py-28 bg-[#faf9f7] border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-2 flex flex-col">
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-xs tracking-widest text-neutral-400">01</span>
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-neutral-500">
                  ESSÊNCIA
                </span>
              </div>
              <p className="font-mono text-[9px] tracking-[0.15em] text-neutral-400 uppercase mt-8 hidden lg:block max-w-[130px] leading-relaxed">
                Mais do que espaços, experiências reais.
              </p>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-neutral-900 leading-tight">
                Arquitetura que <br />
                nasce da escuta.
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-neutral-600 font-light leading-relaxed max-w-lg">
                <p>
                  Cada projeto começa com uma escuta atenta. Entendemos o contexto, as pessoas, o lugar e o que realmente importa. É dessa escuta que surgem espaços autênticos, com proporção, beleza e emoção.
                </p>
                <p>
                  Mais do que projetar ambientes, criamos experiências que fazem sentido e permanecem no tempo.
                </p>
              </div>
            </div>

            <div className="lg:col-span-4 relative flex flex-col items-end">
              <div className="relative w-full h-56 md:h-72 rounded-xl overflow-hidden bg-neutral-100 shadow-xs">
                <Image
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
                  alt="Harmonia de volumes e luz"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-neutral-400 mt-3">
                Lugares que conectam pessoas.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          02 — TRAJETÓRIA (2. Sobre.png)
      ========================================================================= */}
      <section id="sobre-trajetoria" className="py-20 md:py-28 bg-[#faf9f7] border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-2 flex flex-col">
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-xs tracking-widest text-neutral-400">02</span>
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-neutral-500">
                  TRAJETÓRIA
                </span>
              </div>
              <p className="font-mono text-[9px] tracking-[0.15em] text-neutral-400 uppercase mt-8 hidden lg:block max-w-[130px] leading-relaxed">
                Arquitetura com propósito para uma vida mais plena.
              </p>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-neutral-900">
                Mick Ramos
              </h2>
              <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed max-w-lg">
                Arquiteto, projetista e designer de interiores, com foco em criar espaços que equilibram beleza, função e identidade. Acredito que a arquitetura deve ser atemporal, sensorial e profundamente humana, traduzindo histórias em espaços que inspiram, acolhem e elevam o modo de viver.
              </p>

              {/* 4 Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-black/10">
                <div className="border-l border-black/20 pl-3">
                  <h4 className="text-sm font-semibold text-neutral-900">Arquitetura</h4>
                  <p className="text-xs text-neutral-500 font-light mt-0.5">Projetos autorais e personalizados</p>
                </div>
                <div className="border-l border-black/20 pl-3">
                  <h4 className="text-sm font-semibold text-neutral-900">Interiores</h4>
                  <p className="text-xs text-neutral-500 font-light mt-0.5">Ambientes com identidade</p>
                </div>
                <div className="border-l border-black/20 pl-3">
                  <h4 className="text-sm font-semibold text-neutral-900">Projeto Executivo</h4>
                  <p className="text-xs text-neutral-500 font-light mt-0.5">Da ideia à precisão</p>
                </div>
                <div className="border-l border-black/20 pl-3">
                  <h4 className="text-sm font-semibold text-neutral-900">Acompanhamento</h4>
                  <p className="text-xs text-neutral-500 font-light mt-0.5">Presença em todas as etapas</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-end">
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-neutral-200 shadow-xs mb-3">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
                  alt="Processo criativo e desenvolvimento em prancheta técnica"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="text-right">
                <p className="text-[10px] font-mono tracking-wider uppercase text-neutral-500">
                  &ldquo;Arquitetura é sobre pessoas.&rdquo;
                </p>
                <span className="text-[9px] font-mono tracking-widest uppercase text-neutral-400">
                  Mick Ramos
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          03 — PRINCÍPIOS (Dark luxury section as in 2. Sobre.png)
      ========================================================================= */}
      <section id="sobre-principios" className="py-20 md:py-28 bg-[#111215] text-white border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-baseline mb-16">
            <div className="lg:col-span-2 flex items-baseline gap-2">
              <span className="font-mono text-xs tracking-widest text-neutral-500">03</span>
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-neutral-400">
                PRINCÍPIOS
              </span>
            </div>

            <div className="lg:col-span-7">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-white">
                Valores que guiam cada projeto.
              </h2>
            </div>

            <div className="lg:col-span-3 lg:text-right">
              <span className="text-[10px] md:text-xs font-mono tracking-[0.2em] uppercase text-neutral-400">
                Forma, função e emoção em equilíbrio.
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {principles.map((p) => (
              <div
                key={p.title}
                className="flex flex-col justify-between p-5 rounded-xl bg-neutral-900/60 border border-white/5 hover:border-white/20 transition-all duration-300"
              >
                <div>
                  <div className="relative aspect-[16/11] w-full overflow-hidden rounded-lg bg-neutral-800 mb-4">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 20vw"
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-base font-medium text-white mb-2">{p.title}</h3>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          04 — MÉTODO (2. Sobre.png)
      ========================================================================= */}
      <ProcessTimeline
        sectionNumber="04"
        sectionTag="MÉTODO"
        title="Do conceito à experiência."
        subtitle="Um processo colaborativo, transparente e focado em resultados extraordinários."
        steps={[
          {
            number: "01",
            title: "Escuta",
            description: "Entendemos suas necessidades, referências e sonhos.",
          },
          {
            number: "02",
            title: "Conceito",
            description: "Traduzimos ideias em soluções únicas e viáveis.",
          },
          {
            number: "03",
            title: "Desenvolvimento",
            description: "Detalhamamos, compatibilizamos e tornamos o projeto realidade.",
          },
          {
            number: "04",
            title: "Acompanhamento",
            description: "Estamos presentes em todas as etapas, até a entrega final.",
          },
        ]}
      />

      {/* =========================================================================
          05 — VISÃO (2. Sobre.png)
      ========================================================================= */}
      <section id="sobre-visao" className="py-20 md:py-28 bg-[#faf9f7] border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-2 flex flex-col">
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-xs tracking-widest text-neutral-400">05</span>
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-neutral-500">
                  VISÃO
                </span>
              </div>
              <p className="font-mono text-[9px] tracking-[0.15em] text-neutral-400 uppercase mt-8 hidden lg:block max-w-[130px] leading-relaxed">
                Espaços para um amanhã mais humano.
              </p>
            </div>

            <div className="lg:col-span-10">
              <div className="relative rounded-2xl overflow-hidden bg-neutral-900 text-white p-8 md:p-14">
                <div className="absolute inset-0 z-0">
                  <Image
                    src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1800&q=85"
                    alt="Visão de arquitetura contemporânea integrada à paisagem"
                    fill
                    sizes="100vw"
                    className="object-cover opacity-40"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
                </div>

                <div className="relative z-10 max-w-2xl space-y-4">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-white leading-tight">
                    Projetar é dar forma àquilo que ainda será vivido.
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-neutral-300 font-light leading-relaxed">
                    Acreditamos em uma arquitetura atemporal, que transcende tendências e cria valor real na vida das pessoas. Nosso compromisso é projetar espaços que inspirem, acolham e se adaptem ao futuro, sempre com foco na experiência humana.
                  </p>
                  <div className="pt-2 text-[10px] font-mono tracking-[0.2em] uppercase text-neutral-400">
                    Arquitetura hoje para as próximas gerações.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          06 — CONTATO
      ========================================================================= */}
      <ContactCTA
        sectionNumber="06"
        title="Vamos conversar sobre o seu espaço?"
        subtitle="Será um prazer conhecer o seu projeto e explorar, juntos, novas possibilidades."
        buttonText="ENTRAR EM CONTATO"
        buttonHref="/contato"
      />
    </div>
  );
}
