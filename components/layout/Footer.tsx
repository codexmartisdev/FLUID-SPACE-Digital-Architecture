import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { navLinks, siteConfig } from "@/config/site";
import { BrandLogo } from "@/components/ui/BrandLogo";

export function Footer() {
  return (
    <footer
      id="global-footer"
      className="border-t border-black/10 bg-[#faf9f7] pb-10 pt-16 text-neutral-800 md:pb-12 md:pt-20"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 gap-10 border-b border-black/[0.07] pb-12 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <Link
              href="/"
              aria-label="LaR Arquitetura e Interiores - Início"
              className="inline-flex rounded-sm text-[#191a1d] focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
            >
              <BrandLogo
                symbolClassName="h-14 w-14 md:h-16 md:w-16"
                nameClassName="text-2xl md:text-3xl"
                subtitleClassName="text-[9px] md:text-[10px]"
              />
            </Link>

            <p className="mt-7 max-w-md text-sm font-light leading-relaxed text-neutral-600 md:text-base">
              {siteConfig.description}
            </p>
          </div>

          <div className="lg:col-span-3 lg:col-start-7">
            <p className="mb-4 font-mono text-[9px] uppercase tracking-[0.2em] text-neutral-400">
              Navegação
            </p>
            <nav className="grid grid-cols-2 gap-x-6 gap-y-3" aria-label="Navegação do Rodapé">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group inline-flex w-fit items-center gap-1.5 text-sm text-neutral-600 transition-colors hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
                >
                  <span>{item.name}</span>
                  <ArrowUpRight className="h-3 w-3 text-neutral-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-neutral-700" />
                </Link>
              ))}
            </nav>
          </div>

          <div className="lg:col-span-3">
            <p className="mb-4 font-mono text-[9px] uppercase tracking-[0.2em] text-neutral-400">
              Estúdio
            </p>
            <div className="space-y-2 text-sm text-neutral-600">
              <p>{siteConfig.city}</p>

              {siteConfig.phones.map((contact) => (
                <a
                  key={contact.tel}
                  href={`tel:${contact.tel}`}
                  className="block w-fit transition-colors hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
                >
                  {contact.display}
                </a>
              ))}

              {siteConfig.email && (
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="block w-fit transition-colors hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
                >
                  {siteConfig.email}
                </a>
              )}

              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-fit transition-colors hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
              >
                {siteConfig.instagram}
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-7 text-[10px] uppercase tracking-[0.12em] text-neutral-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} LaR Arquitetura e Interiores. Todos os direitos reservados.</p>
          <p className="font-mono tracking-[0.16em]">Arquitetura em movimento.</p>
        </div>
      </div>
    </footer>
  );
}
