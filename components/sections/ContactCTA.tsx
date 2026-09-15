import Link from "next/link";
import { ArrowRight, Mail, Phone, Instagram, MapPin, Linkedin } from "lucide-react";
import { siteConfig } from "@/config/site";

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
      className="relative bg-[#111215] text-white py-20 md:py-28 overflow-hidden border-t border-neutral-800"
    >
      {/* Fluid architectural light sweep background effect */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <svg
          className="w-full h-full object-cover"
          viewBox="0 0 1440 600"
          fill="none"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
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

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Section Indicator + Headline + CTA */}
          <div className="lg:col-span-8 flex flex-col md:flex-row gap-8 md:gap-12">
            {/* Section Number Column */}
            <div className="shrink-0 flex flex-col text-neutral-400">
              <span className="font-mono text-xs tracking-widest uppercase">{sectionNumber}</span>
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-neutral-500 mt-1">
                CONTATO
              </span>
            </div>

            {/* Main CTA copy */}
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white max-w-xl leading-tight">
                {title}
              </h2>
              <p className="text-sm md:text-base text-neutral-300 font-light max-w-md leading-relaxed">
                {subtitle}
              </p>
              <div className="pt-3">
                <Link
                  href={buttonHref}
                  className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-white text-black font-mono text-xs tracking-wider uppercase font-medium hover:bg-neutral-200 transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-black/30"
                >
                  <span>{buttonText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right: Contact Information */}
          <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-white/10 pt-8 lg:pt-0 lg:pl-12 space-y-6">
            <div>
              <h3 className="text-xs md:text-sm font-semibold tracking-[0.2em] text-white uppercase">
                {siteConfig.name}
              </h3>
              <p className="text-[10px] md:text-xs font-mono tracking-[0.2em] text-neutral-400 uppercase mt-1">
                {siteConfig.role}
              </p>
            </div>

            <ul className="space-y-3.5 text-xs text-neutral-300 font-light">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-neutral-400 shrink-0" />
                  <span>{siteConfig.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-neutral-400 shrink-0" />
                  <span>{siteConfig.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-white transition-colors"
                >
                  <Instagram className="w-4 h-4 text-neutral-400 shrink-0" />
                  <span>{siteConfig.instagram}</span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-neutral-400 shrink-0" />
                  <span>{siteConfig.city}</span>
                </div>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-white transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-neutral-400 shrink-0" />
                  <span>{siteConfig.linkedin}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
