interface TimelineStep {
  number: string;
  title: string;
  description: string;
}

interface ProcessTimelineProps {
  sectionNumber?: string;
  sectionTag?: string;
  title?: string;
  subtitle?: string;
  steps?: TimelineStep[];
}

export function ProcessTimeline({
  sectionNumber = "04",
  sectionTag = "PROCESSO",
  title = "Da ideia ao espaço real.",
  subtitle = "Um processo colaborativo, transparente e focado em resultados que superam expectativas.",
  steps = [
    {
      number: "01",
      title: "Escuta",
      description: "Entendemos suas necessidades, referências e sonhos.",
    },
    {
      number: "02",
      title: "Conceito",
      description: "Transformamos ideias em possibilidades reais.",
    },
    {
      number: "03",
      title: "Desenvolvimento",
      description: "Detalhamamos, alinhamos e evoluímos juntos.",
    },
    {
      number: "04",
      title: "Execução",
      description: "Acompanhamos de perto para garantir a excelência.",
    },
  ],
}: ProcessTimelineProps) {
  return (
    <section id="processo-timeline-section" className="py-20 md:py-28 bg-[#faf9f7] border-t border-black/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-baseline mb-16 md:mb-20">
          <div className="lg:col-span-2 flex items-baseline gap-3">
            <span className="font-mono text-xs tracking-widest text-neutral-400">{sectionNumber}</span>
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-neutral-500">
              {sectionTag}
            </span>
          </div>
          <div className="lg:col-span-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-neutral-900">
              {title}
            </h2>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <p className="text-xs font-mono tracking-wide text-neutral-500 uppercase leading-relaxed">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Timeline with flowing connecting curve */}
        <div className="relative pt-6 pb-2">
          {/* Subtle curved connecting line across desktop */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-10 pointer-events-none opacity-40">
            <svg
              className="w-full h-full"
              viewBox="0 0 1000 40"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M 50,20 Q 250,5 450,22 T 850,18 T 980,24"
                stroke="#a3a3a3"
                strokeWidth="1"
                strokeDasharray="2 3"
              />
            </svg>
          </div>

          {/* 4 Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative z-10">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col group">
                {/* Node point */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-2.5 h-2.5 rounded-full bg-black ring-4 ring-[#faf9f7] shadow-xs group-hover:scale-125 transition-transform" />
                  <span className="font-mono text-xs tracking-wider text-neutral-400">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-lg md:text-xl font-medium text-neutral-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs md:text-sm text-neutral-600 font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
