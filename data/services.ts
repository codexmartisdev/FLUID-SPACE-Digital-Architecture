export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
}

export interface DeliverableItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface ProjectFormat {
  id: string;
  title: string;
  description: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "arquitetura",
    title: "Arquitetura",
    description:
      "Projetos autorais residenciais e comerciais, com soluções que aliam estética, funcionalidade e contexto.",
    tags: ["Conceito", "Estudo preliminar", "Plantas", "Acompanhamento"],
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "interiores",
    title: "Design de Interiores",
    description:
      "Ambientes com identidade, conforto e sofisticação, pensados em cada detalhe para uma experiência única.",
    tags: ["Layout", "Materiais", "Marcenaria", "Iluminação"],
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "executivo",
    title: "Projeto Executivo",
    description:
      "Detalhamento técnico completo e compatibilização para uma execução precisa e sem imprevistos.",
    tags: ["Detalhamento", "Paginação", "Compatibilização", "Precisão"],
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "reformas",
    title: "Reformas",
    description:
      "Transformação de espaços existentes com eficiência, respeito ao que já existe e foco em novos usos.",
    tags: ["Releitura", "Adequação", "Funcionalidade", "Atualização"],
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "consultoria",
    title: "Consultoria",
    description:
      "Direcionamento especializado para decisões assertivas em todas as etapas do seu projeto.",
    tags: ["Diagnóstico", "Estratégia", "Escolhas", "Orientação"],
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Escuta",
    description: "Entendemos suas necessidades, objetivos e referências.",
  },
  {
    step: "02",
    title: "Conceito",
    description: "Traduzimos ideias em soluções criativas e viáveis.",
  },
  {
    step: "03",
    title: "Desenvolvimento",
    description: "Detalhamento técnico e compatibilização de todas as etapas.",
  },
  {
    step: "04",
    title: "Acompanhamento",
    description: "Suporte próximo para garantir a melhor execução.",
  },
];

export const deliverablesData: DeliverableItem[] = [
  {
    id: "estudo-preliminar",
    title: "Estudo Preliminar",
    description: "Conceito, volumetria e primeiras definições do projeto.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "modelagem",
    title: "Modelagem / Visualização",
    description: "Imagens realistas para melhor compreensão do espaço.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "projeto-executivo",
    title: "Projeto Executivo",
    description: "Documentação técnica completa para a obra.",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "materiais",
    title: "Caderno de Materiais",
    description: "Seleção de acabamentos, revestimentos e referências.",
    image:
      "https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "suporte-obra",
    title: "Suporte em Obra",
    description: "Acompanhamento e orientação durante a execução.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",
  },
];

export const projectFormats: ProjectFormat[] = [
  {
    id: "residencial",
    title: "Residencial",
    description:
      "Casas, apartamentos e espaços de vida com mais significado para o seu dia a dia.",
  },
  {
    id: "comercial",
    title: "Comercial",
    description:
      "Escritórios, lojas e ambientes corporativos que inspiram e geram resultados.",
  },
  {
    id: "consultoria",
    title: "Consultoria Pontual",
    description:
      "Atendimentos específicos para dúvidas, análises e direcionamentos estratégicos.",
  },
];
