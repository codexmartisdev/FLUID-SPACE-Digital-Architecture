import Image from "next/image";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { ContactCTA } from "@/components/sections/ContactCTA";

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
    description: "Espaços que conectam, acolhem e permitem liberdade de viver.",
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

export default function SobrePage() {
  return (
    <div className="w-full">
      <section
        id="sobre-hero"
        className="relative flex min-h-[90vh] flex-col justify-between overflow-hidden bg-[#faf9f7] pb-16 pt-32 md:pb-24 md:pt-40"
      >
        <div className="pointer-events-none absolute right-0 top-0 z-0 h-[60vh] w-full lg:h-full lg:w-[50%]">
          <div className="relative h-full w-full">
            <Image
              src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85"
              alt="Arquitetura contemporânea com luz natural e materialidade"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#faf9f7] via-[#faf9f7]/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#faf9f7] via-transparent to-transparent lg:hidden" />
          </div>
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-between px-6 md:px-12">
          <div className="max-w-2xl pt-6 md:pt-10">
            <span className="mb-4 inline-block font-mono text-[11px] uppercase tracking-[0.25em] text-neutral-500 md:text-xs">
              LaR · Arquitetura e Interiores
            </span>

            <h1 className="mb-6 text-4xl font-light leading-[1.1] tracking-tight text-neutral-900 sm:text-5xl md:text-6xl">
              Antes da forma, <br />
              <span className="font-normal text-black">existe pensamento.</span>
            </h1>

            <p className="mb-8 max-w-lg text-base font-light leading-relaxed text-neutral-600 sm:text-lg">
              Arquitetura e interiores guiados pela luz, pela materialidade, pelo movimento e, principalmente, pela experiência humana.
            </p>
          </div>

          <div className="mt-12 flex items-end justify-between border-t border-black/5 pt-16">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-400">
              LaR Arquitetura e Interiores
            </div>
          </div>
        </div>
      </section>

      <section id="sobre-essencia" className="border-t border-black/5 bg-[#faf9f7] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-xs tracking-widest text-neutral-400">01</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                  ESSÊNCIA
                </span>
              </div>
            </div>

            <div className="space-y-6 lg:col-span-6">
              <h2 className="text-3xl font-light leading-tight tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
                Arquitetura que <br /> nasce da escuta.
              </h2>
              <div className="max-w-lg space-y-4 text-sm font-light leading-relaxed text-neutral-600 sm:text-base">
                <p>
                  Cada projeto começa com uma escuta atenta. Contexto, pessoas, lugar e rotina orientam decisões que procuram equilibrar proporção, beleza, função e emoção.
                </p>
                <p>
                  Mais do que desenhar ambientes, a LaR busca criar experiências que façam sentido e permaneçam no tempo.
                </p>
              </div>
            </div>

            <div className="relative flex flex-col items-end lg:col-span-4">
              <div className="relative h-56 w-full overflow-hidden rounded-xl bg-neutral-100 shadow-xs md:h-72">
                <Image
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
                  alt="Harmonia de volumes e luz"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <span className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                Lugares que conectam pessoas.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="sobre-origem" className="border-t border-black/5 bg-[#faf9f7] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-xs tracking-widest text-neutral-400">02</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                  ORIGEM
                </span>
              </div>
            </div>

            <div className="space-y-6 lg:col-span-6">
              <h2 className="text-3xl font-light tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
                Laise Brito <span className="text-neutral-300">+</span> Rita Fontenele
              </h2>
              <div className="max-w-xl space-y-4 text-sm font-light leading-relaxed text-neutral-600 sm:text-base">
                <p>
                  LaR nasce da união de duas arquitetas e de duas perspectivas que se encontram no mesmo propósito: pensar espaços com identidade, sensibilidade e coerência.
                </p>
                <p>
                  O próprio nome sintetiza essa parceria — <strong className="font-medium text-neutral-800">La</strong> de Laise e <strong className="font-medium text-neutral-800">R</strong> de Rita — e, ao mesmo tempo, preserva a associação imediata com a ideia de lar.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 border-t border-black/10 pt-6 sm:grid-cols-2">
                <div className="border-l border-black/20 pl-3">
                  <h4 className="text-sm font-semibold text-neutral-900">Arquitetura</h4>
                  <p className="mt-0.5 text-xs font-light text-neutral-500">Forma, contexto e experiência</p>
                </div>
                <div className="border-l border-black/20 pl-3">
                  <h4 className="text-sm font-semibold text-neutral-900">Interiores</h4>
                  <p className="mt-0.5 text-xs font-light text-neutral-500">Atmosfera, materialidade e uso</p>
                </div>
              </div>
            </div>

            <figure className="flex flex-col lg:col-span-4">
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl border border-black/[0.06] bg-neutral-200 shadow-[0_18px_50px_rgba(17,18,21,0.08)]">
                <Image
                  src="/images/about/lar-founders.png"
                  alt="Laise Brito à esquerda e Rita Fontenele à direita, fundadoras da LaR Arquitetura e Interiores"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover object-center"
                />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/20" />
              </div>
              <figcaption className="mt-4 flex flex-col gap-1 border-t border-black/10 pt-3 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
                <span className="text-sm font-medium tracking-tight text-neutral-800">
                  Laise Brito <span className="font-light text-neutral-400">·</span> Rita Fontenele
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-neutral-400 sm:text-right">
                  Fundadoras · LaR Arquitetura e Interiores
                </span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section id="sobre-principios" className="border-t border-neutral-800 bg-[#111215] py-20 text-white md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="mb-16 grid grid-cols-1 items-baseline gap-6 lg:grid-cols-12 lg:gap-12">
            <div className="flex items-baseline gap-2 lg:col-span-2">
              <span className="font-mono text-xs tracking-widest text-neutral-500">03</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                PRINCÍPIOS
              </span>
            </div>
            <div className="lg:col-span-7">
              <h2 className="text-2xl font-light tracking-tight text-white sm:text-3xl md:text-4xl">
                Valores que guiam cada projeto.
              </h2>
            </div>
            <div className="lg:col-span-3 lg:text-right">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-400 md:text-xs">
                Forma, função e emoção em equilíbrio.
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {principles.map((principle) => (
              <div
                key={principle.title}
                className="flex flex-col justify-between rounded-xl border border-white/5 bg-neutral-900/60 p-5 transition-all duration-300 hover:border-white/20"
              >
                <div>
                  <div className="relative mb-4 aspect-[16/11] w-full overflow-hidden rounded-lg bg-neutral-800">
                    <Image
                      src={principle.image}
                      alt={principle.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 20vw"
                      className="object-cover"
                    />
                  </div>
                  <h3 className="mb-2 text-base font-medium text-white">{principle.title}</h3>
                  <p className="text-xs font-light leading-relaxed text-neutral-400">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessTimeline
        sectionNumber="04"
        sectionTag="MÉTODO"
        title="Do conceito à experiência."
        subtitle="Um processo colaborativo, transparente e focado em transformar intenção em espaço."
        steps={[
          {
            number: "01",
            title: "Escuta",
            description: "Entendemos necessidades, referências, rotina e expectativas.",
          },
          {
            number: "02",
            title: "Conceito",
            description: "Traduzimos ideias em uma direção espacial clara e coerente.",
          },
          {
            number: "03",
            title: "Desenvolvimento",
            description: "Detalhamos e compatibilizamos as decisões do projeto.",
          },
          {
            number: "04",
            title: "Acompanhamento",
            description: "Mantemos proximidade durante a materialização do espaço.",
          },
        ]}
      />

      <section id="sobre-visao" className="border-t border-black/5 bg-[#faf9f7] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="flex items-baseline gap-2 lg:col-span-2">
              <span className="font-mono text-xs tracking-widest text-neutral-400">05</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                VISÃO
              </span>
            </div>
            <div className="lg:col-span-7">
              <h2 className="max-w-3xl text-3xl font-light leading-tight tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
                Desenhar espaços que façam sentido antes de buscar apenas impacto.
              </h2>
            </div>
            <div className="lg:col-span-3">
              <p className="text-sm font-light leading-relaxed text-neutral-600">
                A LaR procura equilibrar expressão, técnica e cotidiano para criar arquitetura que permaneça relevante com o tempo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA
        sectionNumber="06"
        title="Vamos conversar sobre o seu espaço?"
        subtitle="Toda transformação começa com uma boa conversa."
        buttonText="INICIAR PROJETO"
        buttonHref="/contato"
      />
    </div>
  );
}
