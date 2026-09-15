"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/config/site";
import { BrandLogo } from "@/components/ui/BrandLogo";

const fluidEase = [0.22, 1, 0.36, 1] as const;

export function Header() {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isProjectDetail = pathname.startsWith("/projetos/") && pathname !== "/projetos";
  const useLightHeader = isProjectDetail && !isScrolled && !isMobileMenuOpen;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 28);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        id="global-header"
        initial={false}
        animate={{
          paddingTop: isScrolled ? 10 : 18,
          paddingBottom: isScrolled ? 10 : 18,
          backgroundColor: isScrolled
            ? "rgba(250, 249, 247, 0.91)"
            : "rgba(250, 249, 247, 0)",
          boxShadow: isScrolled
            ? "0 1px 0 rgba(0,0,0,0.055), 0 12px 40px rgba(18,19,22,0.035)"
            : "0 0 0 rgba(0,0,0,0)",
        }}
        transition={{ duration: 0.42, ease: fluidEase }}
        className="fixed inset-x-0 top-0 z-[70] border-b border-transparent backdrop-blur-[14px]"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12">
          <Link
            href="/"
            aria-label="LaR Arquitetura e Interiores - Início"
            className={`group rounded-sm transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-current ${
              useLightHeader ? "text-white" : "text-[#191a1d]"
            }`}
          >
            <BrandLogo
              symbolClassName="h-10 w-10 md:h-12 md:w-12"
              nameClassName="text-xl md:text-[1.65rem]"
              subtitleClassName="text-[8px] md:text-[9px]"
            />
          </Link>

          <nav className="hidden items-center gap-8 md:flex lg:gap-10" aria-label="Navegação Principal">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group relative rounded-sm py-2 text-sm tracking-wide transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-current ${
                    useLightHeader ? "text-white/75 hover:text-white" : "text-neutral-700 hover:text-black"
                  }`}
                >
                  <span className={isActive ? "font-medium" : "font-normal"}>
                    {link.name}
                  </span>
                  <span
                    className={`absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100 ${
                      useLightHeader ? "bg-white/45" : "bg-black/35"
                    }`}
                  />
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className={`absolute inset-x-0 bottom-0 h-[1.5px] ${
                        useLightHeader ? "bg-white" : "bg-black"
                      }`}
                      transition={{ type: "spring", stiffness: 340, damping: 32, mass: 0.65 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className={`relative z-[80] flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur-md transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-current md:hidden ${
              useLightHeader
                ? "border-white/25 bg-black/10 text-white hover:bg-black/20"
                : "border-black/10 bg-white/60 text-neutral-900 hover:bg-white"
            }`}
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav-overlay"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={isMobileMenuOpen ? "close" : "open"}
                initial={prefersReducedMotion ? false : { opacity: 0, rotate: -12, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={prefersReducedMotion ? undefined : { opacity: 0, rotate: 12, scale: 0.8 }}
                transition={{ duration: 0.2, ease: fluidEase }}
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-nav-overlay"
            role="dialog"
            aria-modal="true"
            aria-label="Menu principal"
            initial={
              prefersReducedMotion
                ? { opacity: 0 }
                : { opacity: 0, clipPath: "circle(0% at calc(100% - 44px) 42px)" }
            }
            animate={
              prefersReducedMotion
                ? { opacity: 1 }
                : { opacity: 1, clipPath: "circle(150% at calc(100% - 44px) 42px)" }
            }
            exit={
              prefersReducedMotion
                ? { opacity: 0 }
                : { opacity: 0, clipPath: "circle(0% at calc(100% - 44px) 42px)" }
            }
            transition={{ duration: prefersReducedMotion ? 0.15 : 0.72, ease: fluidEase }}
            className="fixed inset-0 z-[60] flex flex-col justify-between overflow-hidden bg-[#f6f4ef] px-7 pb-8 pt-28 md:hidden"
          >
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
              <motion.div
                initial={prefersReducedMotion ? false : { x: "22%", y: "-8%", rotate: -8 }}
                animate={prefersReducedMotion ? undefined : { x: "5%", y: "2%", rotate: 0 }}
                transition={{ duration: 1.05, ease: fluidEase }}
                className="absolute -right-24 top-16 h-[42vh] w-[92vw] rounded-[50%] border border-black/[0.055] bg-white/35 blur-[0.2px]"
              />
              <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full border border-black/[0.04]" />
            </div>

            <nav className="relative z-10 flex flex-col" aria-label="Navegação móvel">
              {navLinks.map((link, index) => {
                const isActive =
                  link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

                return (
                  <motion.div
                    key={link.href}
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: prefersReducedMotion ? 0 : 0.18 + index * 0.055,
                      duration: 0.55,
                      ease: fluidEase,
                    }}
                  >
                    <Link
                      href={link.href}
                      className="group grid grid-cols-[42px_1fr_auto] items-center border-b border-black/[0.075] py-4"
                    >
                      <span className="font-mono text-[10px] tracking-[0.18em] text-neutral-400">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`text-[clamp(1.8rem,8vw,2.55rem)] font-light tracking-[-0.035em] ${
                          isActive ? "text-black" : "text-neutral-700"
                        }`}
                      >
                        {link.name}
                      </span>
                      <ArrowUpRight
                        className={`h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${
                          isActive ? "text-black" : "text-neutral-400"
                        }`}
                      />
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: prefersReducedMotion ? 0 : 0.52, duration: 0.5, ease: fluidEase }}
              className="relative z-10 grid grid-cols-2 gap-6 border-t border-black/10 pt-6 text-[11px] text-neutral-500"
            >
              <div>
                <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.2em] text-neutral-400">
                  Estúdio
                </p>
                <p className="font-medium text-neutral-800">{siteConfig.brand}</p>
                <p>{siteConfig.role}</p>
              </div>
              <div className="text-right">
                <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.2em] text-neutral-400">
                  Contato
                </p>
                <p>{siteConfig.email}</p>
                <p>{siteConfig.phone}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
