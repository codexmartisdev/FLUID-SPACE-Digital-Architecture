export interface Project {
  slug: string;
  title: string;
  subtitle?: string;
  category: "Residencial" | "Interiores" | "Comercial" | "Corporativo";
  city: string;
  year: number;
  area: string;
  description: string;
  shortDescription: string;
  cover: string;
  featuredImage: string;
  gallery: string[];
  tags: string[];
  concept: string;
  challenge?: string;
  solution?: string;
  materials: { name: string; description: string }[];
  specs: {
    area: string;
    category: string;
    location: string;
    year: number;
    photography?: string;
  };
}

export const projects: Project[] = [
  {
    slug: "casa-horizon",
    title: "Casa Horizon",
    subtitle: "Natureza, luz e arquitetura em equilíbrio.",
    category: "Residencial",
    city: "Florianópolis, SC",
    year: 2024,
    area: "420 m²",
    shortDescription: "Integração com a natureza e design contemporâneo em perfeita harmonia.",
    description:
      "A Casa Horizon foi concebida para integrar arquitetura e paisagem, com linhas orgânicas, ambientes fluidos e uma forte conexão com o mar. A luz natural conduz a experiência, revelando texturas, materiais e sensações ao longo do dia. Um refúgio contemporâneo, pensado para viver o essencial com elegância.",
    concept:
      "A implantação dialoga com a declividade do terreno e a orientação solar. Grandes balanços de concreto aparente criam zonas de sombra e proteção, enquanto os panos de vidro deslizantes dissolvem os limites entre o interior e a paisagem oceânica.",
    challenge:
      "Criar uma estrutura monumental que parecesse leve sobre a encosta litorânea, preservando a vegetação nativa circundante e garantindo conforto térmico passivo contínuo.",
    solution:
      "Uso de lajes nervuradas com cantos curvos contínuos, ventilação cruzada abundante através de brises pivotantes de madeira carbonizada e piscina de borda infinita que se funde ao horizonte marítimo.",
    cover:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
    featuredImage:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1800&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=80",
    ],
    tags: ["Luz natural", "Integração", "Materialidade", "Bem-estar"],
    materials: [
      { name: "Concreto Arquitetônico Aparente", description: "Textura bruta com acabamento mineral acetinado" },
      { name: "Travertino Navona Rústico", description: "Pisos externos e borda infinita atérmica" },
      { name: "Madeira Cumaru Certificada", description: "Painéis ripados com tratamento natural" },
      { name: "Vidro Extra-Clear Duplo", description: "Controle solar térmico com transparência pura" },
    ],
    specs: {
      area: "420 m²",
      category: "Residencial",
      location: "Florianópolis, SC",
      year: 2024,
      photography: "Acervo Mick Ramos",
    },
  },
  {
    slug: "residencia-aurora",
    title: "Residência Aurora",
    subtitle: "Conforto, sofisticação e luz natural para uma nova forma de viver.",
    category: "Interiores",
    city: "São Paulo, SP",
    year: 2023,
    area: "360 m²",
    shortDescription: "Conforto, sofisticação e luz natural para uma nova forma de viver.",
    description:
      "A Residência Aurora equilibra a grandiosidade de espaços contínuos com a intimidade que um lar exige. Curvas suaves no forro de gesso e marcenaria orgânica direcionam a iluminação cênica indireta, enquanto o mobiliário de design assinado convida à pausa e ao convívio.",
    concept:
      "Fluidez espacial sem divisórias rígidas. A transição entre living, sala de jantar e varanda ocorre por sutis variações de piso, iluminação embutida e planos escultóricos de pedra natural.",
    cover:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85",
    featuredImage:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=80",
    ],
    tags: ["Interiores", "Conforto", "Iluminação Cênica", "Linhas Fluidas"],
    materials: [
      { name: "Linho Cru & Veludo Terracota", description: "Estofados e cortinas acústicas sob medida" },
      { name: "Mármore Michelangelo Nuvolato", description: "Lareira e bancada escultórica do bar" },
      { name: "Carvalho Americano Pálido", description: "Piso em paginação contínua e painéis acústicos" },
    ],
    specs: {
      area: "360 m²",
      category: "Interiores",
      location: "São Paulo, SP",
      year: 2023,
      photography: "Acervo Mick Ramos",
    },
  },
  {
    slug: "studio-prisma",
    title: "Studio Prisma",
    subtitle: "Design que potencializa pessoas e resultados.",
    category: "Comercial",
    city: "Curitiba, PR",
    year: 2025,
    area: "280 m²",
    shortDescription: "Design que potencializa pessoas e resultados.",
    description:
      "O Studio Prisma desafia a impessoalidade dos escritórios corporativos tradicionais. A planta livre é estruturada por volumes curvos de vidro canelado e luz difusa, estimulando a colaboração espontânea sem abrir mão da privacidade acústica.",
    concept:
      "Arquitetura de trabalho que valoriza o bem-estar psicológico, a biofilia e a acústica refinada como ferramentas de foco e inovação.",
    cover:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85",
    featuredImage:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=80",
    ],
    tags: ["Comercial", "Biofilia", "Acústica", "Fluidez"],
    materials: [
      { name: "Alumínio Anodizado Champagne", description: "Perfis esbeltos com vedação acústica dupla" },
      { name: "Microcimento Acetinado", description: "Piso contínuo sem juntas de dilatação visíveis" },
      { name: "Feltro PET Reciclado", description: "Nuvens acústicas no teto técnico" },
    ],
    specs: {
      area: "280 m²",
      category: "Comercial",
      location: "Curitiba, PR",
      year: 2025,
      photography: "Acervo Mick Ramos",
    },
  },
  {
    slug: "casa-lumen",
    title: "Casa Lúmen",
    subtitle: "Leveza, transparência e a beleza do essencial.",
    category: "Residencial",
    city: "Rio de Janeiro, RJ",
    year: 2022,
    area: "510 m²",
    shortDescription: "Leveza, transparência e a beleza do essencial.",
    description:
      "Encravada entre o verde da serra carioca e a brisa marinha, a Casa Lúmen é uma ode à luz natural. A cobertura parece levitar sobre pilotis esguios, permitindo que a vegetação tropical perpasse os pátios internos e jardins sombreados.",
    concept:
      "Transparência radical com sombreamento passivo inteligente. A edificação se abre para a vista frontal ao mesmo tempo em que se fecha sutilmente nas laterais para garantir intimidade.",
    cover:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85",
    featuredImage:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1800&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1400&q=80",
    ],
    tags: ["Residencial", "Ventilação Natural", "Paisagismo", "Sustentabilidade"],
    materials: [
      { name: "Pedra Moledo Brutal", description: "Muros de contenção integrados ao paisagismo nativo" },
      { name: "Estrutura Metálica Corten", description: "Perfis esbeltos de grande amplitude estrutural" },
      { name: "Deck em Ipê Roxo", description: "Extensão da sala até a raia de natação" },
    ],
    specs: {
      area: "510 m²",
      category: "Residencial",
      location: "Rio de Janeiro, RJ",
      year: 2022,
      photography: "Acervo Mick Ramos",
    },
  },
  {
    slug: "apartamento-brisa",
    title: "Apartamento Brisa",
    subtitle: "Atmosferas acolhedoras para o dia a dia.",
    category: "Interiores",
    city: "Porto Alegre, RS",
    year: 2024,
    area: "210 m²",
    shortDescription: "Atmosferas acolhedoras para o dia a dia.",
    description:
      "Reforma completa de um apartamento da década de 1970 com vistas para o Rio Guaíba. A demolição de paredes compartimentadas revelou a generosa amplitude original, unindo sala de estar, copa gourmet e espaço de leitura.",
    concept:
      "Reorganização dos eixos visuais e valorização do pôr do sol como protagonista do espaço social.",
    cover:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=85",
    featuredImage:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1800&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1400&q=80",
    ],
    tags: ["Interiores", "Reforma", "Atemporalidade", "Madeira Natural"],
    materials: [
      { name: "Granilite Feito em Obra", description: "Bancadas e pisos de áreas molhadas" },
      { name: "Marcenaria em Freijó Maciço", description: "Portas mimetizadas e estantes escultóricas" },
      { name: "Pintura Mineral Cal", description: "Paredes respiráveis com sutil textura tátil" },
    ],
    specs: {
      area: "210 m²",
      category: "Interiores",
      location: "Porto Alegre, RS",
      year: 2024,
      photography: "Acervo Mick Ramos",
    },
  },
  {
    slug: "atelier-orla",
    title: "Atelier Orla",
    subtitle: "Criatividade, bem-estar e identidade em cada detalhe.",
    category: "Comercial",
    city: "São Paulo, SP",
    year: 2026,
    area: "340 m²",
    shortDescription: "Criatividade, bem-estar e identidade em cada detalhe.",
    description:
      "Espaço híbrido destinado a um escritório de design e galeria de arte contemporânea. Com pé-direito duplo e iluminação zenital difusa, o ambiente convida à experimentação material e a eventos culturais imersivos.",
    concept:
      "A matéria como suporte da arte: concreto polido, planos de aço escovado e uma rampa sinuosa que conecta o térreo ao mezanino como percurso artístico.",
    cover:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=85",
    featuredImage:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1800&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80",
    ],
    tags: ["Comercial", "Corporativo", "Galeria", "Pé-direito Duplo"],
    materials: [
      { name: "Aço Inoxidável Escovado", description: "Bancadas técnicas e corrimãos contínuos" },
      { name: "Piso Concreto Polido Vitrificado", description: "Reflexos sutis da luz do teto de vidro" },
      { name: "Tijolos de Vidro Artesanais", description: "Divisórias translúcidas com textura líquida" },
    ],
    specs: {
      area: "340 m²",
      category: "Comercial",
      location: "São Paulo, SP",
      year: 2026,
      photography: "Acervo Mick Ramos",
    },
  },
];
