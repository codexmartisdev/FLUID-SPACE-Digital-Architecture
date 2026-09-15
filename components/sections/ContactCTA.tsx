import { Mail, Phone, Instagram, MapPin, Linkedin } from "lucide-react";
import { siteConfig } from "@/config/site";
import { FluidReveal } from "@/components/motion/FluidReveal";
import { FluidLink } from "@/components/motion/FluidLink";

interface ContactCTAProps {
  sectionNumber?: string;
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
}

export function ContactCTA({
  sectionNumber = "06",
  title = "Toda obra começa com uma conversa.",
  subtitle = "Vamos transformar suas ideias em espaços extraordinários?",
  buttonText = "ENTRAR EM CONTATO",
  buttonHref = "/contato",
}: ContactCTAProps) {
  return (
    <section
      id="cta-contato-section"
      className="relative overflow-hidden border-t border-neutral-800 bg-[#111215] py-20 text-white md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <svg
          className="h-full w-full object-cover"
          viewBox="0 0 1440 600"
          fill="none"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M-100 600C300 550 550 400 700 280C880 140 1200 80 1500 0V600H-100Z"
            fill="url(#paint0_linear)"
            fillOpacity="0.3"
          />
          <path
            d="M-50 600C400 520 620 320 850 200C1100 80 1350 40 1550 -50"
            stroke="url(#paint1_linear)"
            strokeWidth="1.5"
            strokeOpacity="0.4"
          />
          <defs>
            <linearGradient id="paint0_linear" x1="200" y1="200" x2="1400" y2="600" gradientUnits="userSpaceOnUse">
              <stop stopColor="#e2d4c0" stopOpacity="0.15" />
              <stop offset="1" stopColor="#000000" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="paint1_linear" x1="0" y1="600" x2="1400" y2="100" gradientUnits="userSpaceOnUse">
              <stop stopColor="#d1b894" stopOpacity="0.6" />
              <stop offset="0.7" stopColor="#ffffff" stopOpacity="0.1" />
              <stop offset="1" stopColor="#000000" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-44 h-[430px] w-[620px] rotate-[-9deg] rounded-[50%] border border-white/[0.045]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col gap-8 lg:col-span-8 md:flex-row md:gap-12">
            <FluidReveal className="flex shrink-0 flex-col text-neutral-400" y={16}>
              <span className="font-mono text-xs uppercase tracking-widest">{sectionNumber}</span>
              <span className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                CONTATO
              </span>
            </FluidReveal>

            <div className="space-y-6">
              <FluidReveal>
                <h2 className="max-w-xl text-3xl font-light leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                  {title}
                </h2>
              </FluidReveal>
              <FluidReveal delay={0.08} y={18}>
                <p className="max-w-md text-sm font-light leading-relaxed text-neutral-300 md:text-base">
                  {subtitle}
                </p>
              </FluidReveal>
              <FluidReveal delay={0.14} y={14} className="pt-3">
                <FluidLink href={buttonHref} variant="light">
                  {buttonText}
                </FluidLink>
              </FluidReveal>
            </div>
          </div>

          <FluidReveal
            delay={0.12}
            y={20}
            className="space-y-6 border-t border-white/10 pt-8 lg:col-span-4 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0"
          >
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white md:text-sm">
                {siteConfig.name}
              </h3>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-400 md:text-xs">
                {siteConfig.role}
              </p>
            </div>

            <ul className="space-y-3.5 text-xs font-light text-neutral-300">
              <li>
                <a href={`mailto:${siteConfig.email}`} className="group flex items-center gap-3 transition-colors hover:text-white">
                  <Mail className="h-4 w-4 shrink-0 text-neutral-400 transition-transform duration-300 group-hover:-translate-y-0.5" />
                  <span>{siteConfig.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 shrink-0 text-neutral-400 transition-transform duration-300 group-hover:-translate-y-0.5" />
                  <span>{siteConfig.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 transition-colors hover:text-white"
                >
                  <Instagram className="h-4 w-4 shrink-0 text-neutral-400 transition-transform duration-300 group-hover:-translate-y-0.5" />
                  <span>{siteConfig.instagram}</span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-neutral-400" />
                <span>{siteConfig.city}</span>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 transition-colors hover:text-white"
                >
                  <Linkedin className="h-4 w-4 shrink-0 text-neutral-400 transition-transform duration-300 group-hover:-translate-y-0.5" />
                  <span>{siteConfig.linkedin}</span>
                </a>
              </li>
            </ul>
          </FluidReveal>
        </div>
      </div>
    </section>
  );
}
