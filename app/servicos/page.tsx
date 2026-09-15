import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { servicesData, deliverablesData, projectFormats } from "@/data/services";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function ServicosPage() {
  return (
    <div className="w-full">
      <section
        id="servicos-hero"
        className="relative min-h-[90vh] pt-32 pb-16 md:pt-40 md:pb-24 flex flex-col justify-between overflow-hidden bg-[#faf9f7]"
      >
        <div className="absolute top-0 right-0 w-full lg:w-[55%] h-[60vh] lg:h-full pointer-events-none z-0">
          <div className="relative w-full h-full">
            <Image
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=85"
              alt="Ambiente arquitetônico contemporâneo com vista panorâmica e design sofisticado"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#faf9f7] via-[#faf9f7]/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#faf9f7] via-transparent to-transparent lg:hidden" />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex-1 flex flex-col justify-between">
          <div className="max-w-2xl pt-6 md:pt-10">
            <span className="inline-block font-mono text-[11px] md:text-xs tracking-[0.25em] text-neutral-500 uppercase mb-4">
              LaR · Arquitetura e Interiores
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-neutral-900 leading-[1.1] mb-6">
              Do conceito à <br />
              <span className="font-normal text-black">materialização do espaço.</span>
            </h1>

            <p className="text-base sm:text-lg text-neutral-600 font-light leading-relaxed max-w-lg mb-8">
              Oferecemos arquitetura, design de interiores, desenvolvimento técnico, reformas e consultoria, com foco em beleza, funcionalidade, precisão e na experiência humana.
            </p>

            <div className="border-l-2 border-black/20 pl-4 py-1 max-w-md">
              <p className="text-xs md:text-sm font-light text-neutral-700 italic">
                &ldquo;Cada projeto exige sensibilidade, método e presença.&rdquo;
              </p>
              <span className="block text-[10px] font-mono tracking-widest uppercase text-neutral-400 mt-1">
                LaR
              </span>
            </div>
          </div>

          <div className="pt-16 flex justify-between items-end border-t border-black/5 mt-12">
            <div className="text-[10px] font-mono tracking-[0.2em] uppercase text-neutral-400">
              Soluções Integradas
            </div>
            <div className="text-right text-[10px] font-mono tracking-[0.2em] uppercase text-neutral-400">
              Serviços que dão forma à experiência
            </div>
          </div>
        </div>
      </section>

      <section id="servicos-visao-geral" className="py-20 md:py-28 bg-[#faf9f7] border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-2 flex flex-col">
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-xs tracking-widest text-neutral-400">01</span>
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-neutral-500">
                  VISÃO GERAL
                </span>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-neutral-900 leading-tight">
                Soluções completas <br />
                para cada etapa do seu projeto.
              </h2>
              <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed max-w-lg">
                Unimos visão criativa, conhecimento técnico e uma abordagem integrada para desenvolver espaços únicos — do conceito à execução, sempre com foco na sua rotina, no contexto e no que realmente importa.
              </p>
            </div>

            <div className="lg:col-span-4 relative flex flex-col items-end">
              <div className="relative w-full h-56 md:h-64 rounded-xl overflow-hidden bg-neutral-100 shadow-xs">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                  alt="Harmonia de arquitetura e contexto"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-neutral-400 mt-3">
                Forma, função e execução em equilíbrio.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="servicos-lista-detalhada" className="py-20 md:py-28 bg-[#faf9f7] border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-baseline justify-between gap-4 mb-16 pb-6 border-b border-black/10">
            <div className="flex items-baseline gap-2">
              <span className="font-mono text-xs tracking-widest text-neutral-400">02</span>
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-neutral-500">
                SERVIÇOS
              </span>
            </div>
            <span className="text-xs font-mono tracking-widest text-neutral-400 uppercase">
              Do desenho à realidade.
            </span>
          </div>

          <div className="space-y-12">
            {servicesData.map((s) => (
              <div
                key={s.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 md:p-8 rounded-2xl bg-white border border-black/5 shadow-xs hover:border-black/15 transition-all"
              >
                <div className="lg:col-span-3 relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-neutral-100">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 25vw"
                    className="object-cover"
                  />
                </div>

                <div className="lg:col-span-5 space-y-2">
                  <h3 className="text-xl md:text-2xl font-light text-neutral-900">{s.title}</h3>
                  <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                    {s.description}
                  </p>
                </div>

                <div className="lg:col-span-4 lg:border-l border-black/10 lg:pl-8 flex flex-wrap items-center gap-2 text-xs text-neutral-600 font-mono">
                  {s.tags.map((tag, idx) => (
                    <span key={tag} className="flex items-center gap-2">
                      <span className="px-2.5 py-1 bg-neutral-100 rounded-md text-[11px] text-neutral-700">
                        {tag}
                      </span>
                      {idx < s.tags.length - 1 && <span className="text-neutral-300">·</span>}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessTimeline
        sectionNumber="03"
        sectionTag="PROCESSO"
        title="Como o serviço acontece."
        subtitle="Um processo claro, colaborativo e preciso."
        steps={[
          {
            number: "01",
            title: "Escuta",
            description: "Entendemos suas necessidades, objetivos e referências.",
          },
          {
            number: "02",
            title: "Conceito",
            description: "Traduzimos ideias em soluções criativas e viáveis.",
          },
          {
            number: "03",
            title: "Desenvolvimento",
            description: "Detalhamento técnico e compatibilização de todas as etapas.",
          },
          {
            number: "04",
            title: "Acompanhamento",
            description: "Suporte próximo para garantir a melhor execução.",
          },
        ]}
      />

      <section id="servicos-entregaveis" className="py-20 md:py-28 bg-[#faf9f7] border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-baseline mb-16">
            <div className="lg:col-span-2 flex items-baseline gap-2">
              <span className="font-mono text-xs tracking-widest text-neutral-400">04</span>
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-neutral-500">
                ENTREGÁVEIS
              </span>
            </div>

            <div className="lg:col-span-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-neutral-900">
                Clareza em cada entrega.
              </h2>
            </div>

            <div className="lg:col-span-4 lg:text-right">
              <span className="text-[10px] md:text-xs font-mono tracking-[0.2em] uppercase text-neutral-400">
                Ideias bem estruturadas em resultados reais.
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {deliverablesData.map((item) => (
              <div
                key={item.id}
                className="flex flex-col p-4 rounded-xl bg-white border border-black/5 shadow-xs"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-neutral-100 mb-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 20vw"
                    className="object-cover"
                  />
                </div>
                <h4 className="text-sm font-medium text-neutral-900 mb-1">{item.title}</h4>
                <p className="text-xs text-neutral-500 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="servicos-formatos" className="py-20 md:py-28 bg-[#faf9f7] border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12">
            <div className="lg:col-span-2 flex items-baseline gap-2">
              <span className="font-mono text-xs tracking-widest text-neutral-400">05</span>
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-neutral-500">
                FORMATOS
              </span>
            </div>

            <div className="lg:col-span-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-neutral-900 leading-tight">
                Atendimento flexível <br />
                para diferentes necessidades.
              </h2>
            </div>

            <div className="lg:col-span-4 lg:text-right">
              <span className="text-[10px] md:text-xs font-mono tracking-[0.2em] uppercase text-neutral-400">
                Arquitetura pensada para a vida real.
              </span>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden bg-neutral-900 text-white p-8 md:p-12">
            <div className="absolute inset-0 z-0">
              <Image
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85"
                alt="Ambiente residencial contemporâneo"
                fill
                sizes="100vw"
                className="object-cover opacity-35"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/15">
              {projectFormats.map((f, idx) => (
                <div key={f.id} className={idx > 0 ? "pt-6 md:pt-0 md:pl-8" : ""}>
                  <h3 className="text-lg md:text-xl font-medium text-white mb-2">{f.title}</h3>
                  <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                    {f.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactCTA
        sectionNumber="06"
        title="Vamos definir o serviço ideal para o seu projeto?"
        subtitle="Entre em contato e vamos conversar sobre como transformar suas ideias em espaços extraordinários."
        buttonText="ENTRAR EM CONTATO"
        buttonHref="/contato"
      />
    </div>
  );
}
