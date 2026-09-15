import Link from "next/link";
import { navLinks, siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer id="global-footer" className="bg-[#faf9f7] border-t border-black/10 pt-16 pb-12 text-neutral-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Main Footer Row */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-12 border-b border-black/5">
          {/* Logo & Subtitle */}
          <Link
            href="/"
            className="flex items-baseline gap-3.5 group select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
          >
            <span className="font-serif text-3xl md:text-4xl font-light tracking-tighter text-black">
              MR
            </span>
            <div className="flex flex-col border-l border-black/20 pl-3">
              <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-neutral-900 uppercase">
                Mick Ramos
              </span>
              <span className="text-[9px] md:text-[10px] font-medium tracking-[0.25em] text-neutral-500 uppercase">
                Arquitetura que move
              </span>
            </div>
          </Link>

          {/* Nav Links */}
          <nav className="flex flex-wrap items-center gap-6 md:gap-8" aria-label="Navegação do Rodapé">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs md:text-sm tracking-wide text-neutral-700 hover:text-black transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-xs"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Architectural tagline on the right */}
          <div className="text-right hidden lg:block">
            <span className="text-[10px] md:text-xs font-mono tracking-[0.2em] uppercase text-neutral-500">
              — Projetando um amanhã mais humano.
            </span>
          </div>
        </div>

        {/* Bottom copyright and legal notes */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-[11px] md:text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} Mick Ramos. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <Link href="/sobre" className="hover:text-black transition-colors">
              Política de Privacidade
            </Link>
            <span className="text-neutral-300">|</span>
            <Link href="/sobre" className="hover:text-black transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
