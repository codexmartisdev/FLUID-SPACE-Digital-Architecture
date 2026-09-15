export interface Article {
  slug: string;
  title: string;
  category: "Arquitetura" | "Interiores" | "Materiais" | "Processos" | "Tendências";
  date: string;
  readTime: string;
  excerpt: string;
  cover: string;
  content: string[];
  quotes?: string[];
  keyPoints?: string[];
}

export const articles: Article[] = [
  {
    slug: "como-a-luz-natural-transforma-a-experiencia-de-uma-residencia",
    title: "Como a luz natural transforma a experiência de uma residência",
    category: "Arquitetura",
    date: "12 MAR 2024",
    readTime: "5 min de leitura",
    excerpt:
      "Mais do que iluminar, a luz natural conecta, acolhe e transforma espaços em experiências mais humanas.",
    cover:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
    content: [
      "A luz solar não é apenas um fator luminotécnico ou um elemento que compõe o cálculo de eficiência energética de uma edificação. Na arquitetura sensorial, a luz natural é tratada como verdadeira matéria-prima de projeto, capaz de esculpir volumes, revelar texturas tácteis e sincronizar os ritmos biológicos dos moradores.",
      "Ao projetar uma residência, o estudo apurado da trajetória solar e da sazonalidade geométrica nos permite antecipar como cada ambiente se comportará ao longo das horas. Uma sala de estar orientada para captar os primeiros raios da manhã desperta a casa com suavidade, enquanto áreas de contemplação poente exigem proteção através de brises ou beirais calculados com rigor milimétrico.",
      "Quando a luz incide sobre o concreto aparente, o travertino bruto ou a madeira maciça, ela revela nuances imperceptíveis sob iluminação artificial. Essa dança entre luz e sombra confere dinamismo e poesia à vida cotidiana.",
    ],
    quotes: [
      "A luz não apenas revela o espaço; ela dá alma ao silêncio da arquitetura.",
    ],
    keyPoints: [
      "Integração entre aberturas zenitais e panos de vidro contínuos",
      "Controle térmico passivo através de beirais e brises orientados",
      "Sincronização com os ciclos circadianos para regeneração e descanso",
      "Valorização das texturas e materialidades naturais ao longo do dia",
    ],
  },
  {
    slug: "5-escolhas-de-materiais-que-elevam-um-projeto-contemporaneo",
    title: "5 escolhas de materiais que elevam um projeto contemporâneo",
    category: "Materiais",
    date: "28 FEV 2024",
    readTime: "4 min de leitura",
    excerpt:
      "Da pedra natural à madeira, conheça materiais que unem estética, durabilidade e sofisticação nos projetos de hoje.",
    cover:
      "https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?auto=format&fit=crop&w=1200&q=80",
    content: [
      "A escolha dos materiais define a alma táctil de qualquer projeto. Muito além da estética momentânea de catálogos ou modismos efêmeros, os materiais nobres selecionados pela LaR envelhecem com graça e contam histórias.",
      "Pedras com corte e acabamento escovado, madeiras de manejo sustentável com veios contínuos, concreto com dosagem personalizada e metais acetinados dialogam harmoniosamente sem competir entre si.",
    ],
  },
  {
    slug: "o-papel-do-layout-no-conforto-cotidiano",
    title: "O papel do layout no conforto cotidiano",
    category: "Interiores",
    date: "20 FEV 2024",
    readTime: "6 min de leitura",
    excerpt:
      "Entenda como a organização dos ambientes influencia a rotina, o bem-estar e a qualidade de vida dentro de casa.",
    cover:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    content: [
      "A circulação espacial é invisível aos olhos destreinados, mas imediatamente perceptível pelo corpo. Quando um layout é bem desenhado, o trajeto entre o despertar e o primeiro café da manhã flui sem ruídos.",
      "Projetar a convivência significa ponderar momentos de encontro coletivo e refúgios de silêncio e introspecção.",
    ],
  },
  {
    slug: "arquitetura-sensorial-espacos-que-acolhem",
    title: "Arquitetura sensorial: espaços que acolhem",
    category: "Arquitetura",
    date: "10 FEV 2024",
    readTime: "5 min de leitura",
    excerpt:
      "Texturas, luz, som e aromas. Descubra como o design sensorial cria ambientes mais humanos e significativos.",
    cover:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
    content: [
      "A arquitetura não deve ser concebida apenas para ser fotografada; ela deve ser tocada, respirada e ouvida. O eco excessivo de um ambiente amplo destrói o conforto térmico e acústico.",
      "Através de forros fonoabsorventes discretos, tecidos naturais e ventilação cruzada que conduz a brisa do jardim, criamos verdadeiros santuários contemporâneos.",
    ],
  },
  {
    slug: "como-planejar-uma-reforma-com-mais-clareza",
    title: "Como planejar uma reforma com mais clareza",
    category: "Processos",
    date: "02 FEV 2024",
    readTime: "7 min de leitura",
    excerpt:
      "Um guia prático para definir objetivos, evitar imprevistos e transformar sua reforma em uma experiência positiva.",
    cover:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    content: [
      "Reformar um imóvel existente é um exercício de escuta estrutural e respeito à história preexistente. Antes de qualquer marreta tocar uma parede, realizamos diagnósticos minuciosos de instalações elétricas, hidráulicas e alvenaria estrutural.",
      "O projeto executivo detalhado é a garantia de que o cronograma e o orçamento sejam rigorosamente cumpridos.",
    ],
  },
  {
    slug: "tendencias-atemporais-no-design-de-interiores",
    title: "Tendências atemporais no design de interiores",
    category: "Tendências",
    date: "26 JAN 2024",
    readTime: "4 min de leitura",
    excerpt:
      "Conheça os elementos que permanecem relevantes ao longo do tempo e como aplicá-los de forma contemporânea.",
    cover:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    content: [
      "Em um mundo saturado por tendências de redes sociais que duram poucos meses, a verdadeira sofisticação reside na atemporalidade. Móveis clássicos de designers brasileiros e escandinavos ganham destaque quando dispostos em ambientes arejados.",
      "Menos sobre preencher vazios, mais sobre permitir que os espaços respirem.",
    ],
  },
  {
    slug: "o-que-observar-antes-de-iniciar-um-projeto-residencial",
    title: "O que observar antes de iniciar um projeto residencial",
    category: "Arquitetura",
    date: "15 JAN 2024",
    readTime: "5 min de leitura",
    excerpt:
      "Dos terrenos à legislação, veja os pontos essenciais para começar seu projeto com segurança e tranquilidade.",
    cover:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    content: [
      "A escolha do terreno é o ponto de partida de tudo. Topografia, recuos municipais, insolação, ventos predominantes e solo influenciam diretamente tanto o custo construtivo quanto a liberdade plástica do projeto.",
      "Converse com o arquiteto antes mesmo de assinar a escritura do lote: uma consultoria preliminar pode economizar centenas de milhares de reais.",
    ],
  },
];

export const blogThemes = [
  {
    id: "luz",
    title: "Luz",
    description: "A luz como matéria de projeto. Natural ou artificial, ela transforma espaços e emoções.",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "materialidade",
    title: "Materialidade",
    description: "Texturas, superfícies e encontros que dão identidade e durabilidade aos espaços.",
    image:
      "https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "bem-estar",
    title: "Bem-estar",
    description: "Ambientes que acolhem, equilibram e melhoram a vida das pessoas.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "processo",
    title: "Processo",
    description: "Da ideia à obra, um olhar transparente sobre cada etapa do projeto.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80",
  },
];
