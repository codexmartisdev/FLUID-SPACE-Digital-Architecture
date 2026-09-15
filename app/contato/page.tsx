"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone, MapPin, Instagram, ArrowRight, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    whatsapp: "",
    cidade: "",
    tipoProjeto: "",
    area: "",
    mensagem: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const atuacaoCards = [
    {
      title: "Residencial",
      description: "Projetos para casas e apartamentos que unem estética, funcionalidade e bem-estar.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Interiores",
      description: "Ambientes que refletem sua essência, com atenção a cada detalhe.",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Comercial",
      description: "Espaços que valorizam marcas, pessoas e resultados.",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Consultoria",
      description: "Orientação técnica para transformar suas ideias em decisões seguras e eficientes.",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="w-full">
      <section
        id="contato-hero"
        className="relative min-h-[90vh] pt-32 pb-16 md:pt-40 md:pb-24 flex flex-col justify-between overflow-hidden bg-[#faf9f7]"
      >
        <div className="absolute top-0 right-0 w-full lg:w-[58%] h-[60vh] lg:h-full pointer-events-none z-0">
          <div className="relative w-full h-full">
            <Image
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=85"
              alt="Lounge arquitetônico com vista panorâmica"
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
              Contato
            </span>

            <span className="block font-light text-2xl sm:text-3xl text-neutral-500 mb-2">
              Contato
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-neutral-900 leading-[1.1] mb-6">
              Toda obra começa <br />
              <span className="font-normal text-black">com uma conversa.</span>
            </h1>

            <p className="text-base sm:text-lg text-neutral-600 font-light leading-relaxed max-w-lg mb-8">
              Estamos à disposição para ouvir seu projeto, seja ele residencial, comercial, de interiores ou uma consultoria. Vamos entender suas necessidades e te guiar nos próximos passos, com clareza e sensibilidade.
            </p>

            <div className="border-l-2 border-black/20 pl-4 py-1 max-w-md">
              <p className="text-xs md:text-sm font-light text-neutral-700 italic">
                &ldquo;Boas ideias nascem do diálogo e se transformam em lugares reais.&rdquo;
              </p>
              <span className="block text-[10px] font-mono tracking-widest uppercase text-neutral-400 mt-1">
                LaR
              </span>
            </div>
          </div>

          <div className="pt-16 flex justify-between items-end border-t border-black/5 mt-12">
            <div className="text-[10px] font-mono tracking-[0.2em] uppercase text-neutral-400">
              Canais Oficiais
            </div>
            <div className="text-right text-[10px] font-mono tracking-[0.2em] uppercase text-neutral-400">
              Conversas que dão início a espaços.
            </div>
          </div>
        </div>
      </section>

      <section id="contato-conexao" className="py-20 md:py-28 bg-[#faf9f7] border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-2 flex flex-col">
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-xs tracking-widest text-neutral-400">01</span>
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-neutral-500">
                  CONEXÃO
                </span>
              </div>
              <p className="font-mono text-[9px] tracking-[0.15em] text-neutral-400 uppercase mt-8 hidden lg:block max-w-[130px] leading-relaxed">
                Escuta · Contexto · Objetivos · Soluções Reais
              </p>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-neutral-900 leading-tight">
                Conte sua ideia. <br />
                Nós ajudamos a dar forma.
              </h2>
              <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed max-w-lg">
                Queremos entender suas necessidades, seu contexto, sua rotina, o local e seus objetivos. A partir dessa conversa, indicamos o melhor caminho para o seu projeto, sempre com um olhar atento, técnico e sensível.
              </p>
            </div>

            <div className="lg:col-span-4 relative flex flex-col items-end">
              <div className="relative w-full h-56 md:h-64 rounded-xl overflow-hidden bg-neutral-100 shadow-xs">
                <Image
                  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80"
                  alt="Espaço e diálogo"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-neutral-400 mt-3">
                Escuta. Clareza. Direção. Presença.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="contato-formulario-section" className="py-20 md:py-28 bg-[#faf9f7] border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5 space-y-8">
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-xs tracking-widest text-neutral-400">02</span>
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-neutral-500">
                  FALE COM O ESTÚDIO
                </span>
              </div>

              <div>
                <h2 className="text-3xl sm:text-4xl font-light text-neutral-900 mb-3">
                  Estamos prontos para te ouvir.
                </h2>
                <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                  Preencha o formulário ao lado ou entre em contato pelos nossos canais. Será um prazer conversar sobre o seu projeto.
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-black/10 text-xs sm:text-sm text-neutral-700">
                {siteConfig.phones.map((contact) => (
                  <a
                    key={contact.tel}
                    href={`tel:${contact.tel}`}
                    className="flex items-center gap-3 hover:text-black transition-colors"
                  >
                    <Phone className="w-4 h-4 text-neutral-400 shrink-0" />
                    <span>{contact.display}</span>
                  </a>
                ))}

                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-neutral-400 shrink-0" />
                  <span>{siteConfig.city}</span>
                </div>

                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-black transition-colors"
                >
                  <Instagram className="w-4 h-4 text-neutral-400 shrink-0" />
                  <span>{siteConfig.instagram}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-3xl border border-black/10 shadow-xs">
              {submitted ? (
                <div className="py-12 flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-light text-neutral-900">
                    Mensagem recebida com sucesso!
                  </h3>
                  <p className="text-sm text-neutral-600 font-light max-w-md leading-relaxed">
                    Obrigado por compartilhar suas ideias com a LaR Arquitetura e Interiores. Retornaremos assim que possível.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        nome: "",
                        email: "",
                        whatsapp: "",
                        cidade: "",
                        tipoProjeto: "",
                        area: "",
                        mensagem: "",
                      });
                    }}
                    className="mt-6 px-6 py-2.5 rounded-full border border-black/20 text-xs font-mono uppercase tracking-wider hover:bg-neutral-100 transition-colors"
                  >
                    Enviar nova mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="nome" className="block text-xs font-mono uppercase text-neutral-500 mb-2">
                        Nome
                      </label>
                      <input
                        id="nome"
                        type="text"
                        required
                        value={formData.nome}
                        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                        placeholder="Seu nome completo"
                        className="w-full px-4 py-3 rounded-xl border border-black/10 bg-[#faf9f7] text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-black"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-mono uppercase text-neutral-500 mb-2">
                        E-mail
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="seu@email.com"
                        className="w-full px-4 py-3 rounded-xl border border-black/10 bg-[#faf9f7] text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-black"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="whatsapp" className="block text-xs font-mono uppercase text-neutral-500 mb-2">
                        WhatsApp
                      </label>
                      <input
                        id="whatsapp"
                        type="tel"
                        required
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                        placeholder="(86) 9XXXX-XXXX"
                        className="w-full px-4 py-3 rounded-xl border border-black/10 bg-[#faf9f7] text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-black"
                      />
                    </div>

                    <div>
                      <label htmlFor="cidade" className="block text-xs font-mono uppercase text-neutral-500 mb-2">
                        Cidade
                      </label>
                      <input
                        id="cidade"
                        type="text"
                        value={formData.cidade}
                        onChange={(e) => setFormData({ ...formData, cidade: e.target.value })}
                        placeholder="Sua cidade"
                        className="w-full px-4 py-3 rounded-xl border border-black/10 bg-[#faf9f7] text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-black"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="tipoProjeto" className="block text-xs font-mono uppercase text-neutral-500 mb-2">
                        Tipo de projeto
                      </label>
                      <select
                        id="tipoProjeto"
                        required
                        value={formData.tipoProjeto}
                        onChange={(e) => setFormData({ ...formData, tipoProjeto: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-black/10 bg-[#faf9f7] text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-black"
                      >
                        <option value="">Selecione uma opção</option>
                        <option value="Residencial">Arquitetura Residencial</option>
                        <option value="Interiores">Design de Interiores</option>
                        <option value="Comercial">Comercial / Corporativo</option>
                        <option value="Reforma">Reforma Global</option>
                        <option value="Consultoria">Consultoria Especializada</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="area" className="block text-xs font-mono uppercase text-neutral-500 mb-2">
                        Área aproximada
                      </label>
                      <input
                        id="area"
                        type="text"
                        value={formData.area}
                        onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                        placeholder="Ex.: 120 m²"
                        className="w-full px-4 py-3 rounded-xl border border-black/10 bg-[#faf9f7] text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-black"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="mensagem" className="block text-xs font-mono uppercase text-neutral-500 mb-2">
                      Mensagem
                    </label>
                    <textarea
                      id="mensagem"
                      rows={4}
                      required
                      value={formData.mensagem}
                      onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                      placeholder="Conte um pouco sobre seu projeto, suas ideias e expectativas..."
                      className="w-full px-4 py-3 rounded-xl border border-black/10 bg-[#faf9f7] text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-black resize-y"
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-neutral-900 text-white font-mono text-xs tracking-wider uppercase font-medium hover:bg-neutral-800 transition-all transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50"
                    >
                      <span>{isSubmitting ? "Enviando..." : "Enviar Mensagem"}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <ProcessTimeline
        sectionNumber="03"
        sectionTag="COMO ACONTECE"
        title="Do primeiro contato ao início do projeto."
        subtitle="Um processo humano, claro e objetivo."
        steps={[
          {
            number: "01",
            title: "Escuta",
            description: "Entendemos sua necessidade, referências e contexto.",
          },
          {
            number: "02",
            title: "Alinhamento",
            description: "Definimos escopo, prioridades e próximos passos.",
          },
          {
            number: "03",
            title: "Proposta",
            description: "Apresentamos a melhor forma de conduzir o projeto.",
          },
          {
            number: "04",
            title: "Início",
            description: "Damos início ao trabalho com clareza e direção.",
          },
        ]}
      />

      <FAQAccordion
        sectionNumber="04"
        sectionTag="DÚVIDAS FREQUENTES"
        title="Informações para facilitar seu primeiro passo."
        leftNote="RESPOSTAS PARA VOCÊ COMEÇAR COM MAIS SEGURANÇA"
      />

      <section id="contato-atuacao" className="py-20 md:py-28 bg-[#faf9f7] border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-baseline mb-16">
            <div className="lg:col-span-2 flex items-baseline gap-2">
              <span className="font-mono text-xs tracking-widest text-neutral-400">05</span>
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-neutral-500">
                ATUAÇÃO
              </span>
            </div>

            <div className="lg:col-span-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-neutral-900 leading-snug">
                Arquitetura, interiores e consultoria <br />
                para diferentes necessidades.
              </h2>
            </div>

            <div className="lg:col-span-4 lg:text-right">
              <span className="text-[10px] md:text-xs font-mono tracking-[0.2em] uppercase text-neutral-400">
                Espaços bem pensados para pessoas reais.
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {atuacaoCards.map((c) => (
              <div
                key={c.title}
                className="flex flex-col p-4 rounded-xl bg-white border border-black/5 shadow-xs"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-neutral-100 mb-4">
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <h4 className="text-base font-medium text-neutral-900 mb-1">{c.title}</h4>
                <p className="text-xs text-neutral-500 font-light leading-relaxed">
                  {c.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA
        sectionNumber="06"
        title="Vamos transformar sua ideia em espaço real?"
        subtitle="Será um prazer conhecer seu projeto e construir esse próximo passo com você."
        buttonText="AGENDAR CONVERSA"
        buttonHref="#contato-formulario-section"
      />
    </div>
  );
}
