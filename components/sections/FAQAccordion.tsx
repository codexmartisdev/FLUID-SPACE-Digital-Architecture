"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { faqData } from "@/data/faq";

interface FAQAccordionProps {
  sectionNumber?: string;
  sectionTag?: string;
  title?: string;
  leftNote?: string;
}

export function FAQAccordion({
  sectionNumber = "04",
  sectionTag = "DÚVIDAS FREQUENTES",
  title = "Informações para facilitar seu primeiro passo.",
  leftNote = "RESPOSTAS PARA VOCÊ COMEÇAR COM MAIS SEGURANÇA",
}: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>("tipos-projetos");

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq-section" className="py-20 md:py-28 bg-[#faf9f7] border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-baseline mb-16">
          <div className="lg:col-span-2 flex flex-col gap-1">
            <div className="flex items-baseline gap-2">
              <span className="font-mono text-xs tracking-widest text-neutral-400">{sectionNumber}</span>
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-neutral-500">
                {sectionTag}
              </span>
            </div>
            {leftNote && (
              <p className="font-mono text-[9px] tracking-[0.15em] text-neutral-400 uppercase mt-8 hidden lg:block max-w-[140px] leading-relaxed">
                {leftNote}
              </p>
            )}
          </div>

          <div className="lg:col-span-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-neutral-900 mb-12">
              {title}
            </h2>

            {/* Accordion list */}
            <div className="divide-y divide-black/10 border-y border-black/10">
              {faqData.map((item) => {
                const isOpen = openId === item.id;
                return (
                  <div key={item.id} className="py-6">
                    <button
                      type="button"
                      onClick={() => toggleItem(item.id)}
                      className="w-full flex items-center justify-between gap-6 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-xs"
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${item.id}`}
                    >
                      <span className="text-base sm:text-lg md:text-xl font-normal text-neutral-900 group-hover:text-neutral-600 transition-colors">
                        {item.question}
                      </span>
                      <span className="shrink-0 p-1 rounded-full text-neutral-500 group-hover:text-black transition-colors">
                        {isOpen ? (
                          <Minus className="w-5 h-5" />
                        ) : (
                          <Plus className="w-5 h-5" />
                        )}
                      </span>
                    </button>

                    {isOpen && (
                      <div
                        id={`faq-answer-${item.id}`}
                        className="mt-4 pt-2 text-xs sm:text-sm md:text-base text-neutral-600 font-light leading-relaxed max-w-3xl pr-8"
                      >
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
