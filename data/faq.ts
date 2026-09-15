export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
  {
    id: "tipos-projetos",
    question: "Quais tipos de projeto vocês atendem?",
    answer:
      "Atendemos projetos residenciais, comerciais, de interiores e consultorias, em diferentes escalas.",
  },
  {
    id: "fora-da-cidade",
    question: "Atendem fora de São Paulo?",
    answer:
      "Sim. Desenvolvemos projetos em outras cidades e também de forma remota, com a mesma qualidade e proximidade.",
  },
  {
    id: "primeira-conversa",
    question: "Como funciona a primeira conversa?",
    answer:
      "É uma conversa sem compromisso, para entendermos suas necessidades e apresentarmos o nosso processo de trabalho.",
  },
  {
    id: "apenas-consultoria",
    question: "É possível contratar apenas consultoria?",
    answer:
      "Sim. Oferecemos consultorias pontuais para ajudar em decisões, reformas e direcionamentos, mesmo sem um projeto completo.",
  },
];
