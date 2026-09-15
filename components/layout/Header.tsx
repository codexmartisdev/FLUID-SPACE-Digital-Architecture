"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight } from "lucide-react";
import { navLinks, siteConfig } from "@/config/site";

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsMobileMenuOpen(false);
  }

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        id="global-header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#faf9f7]/90 backdrop-blur-md py-3.5 border-b border-black/5 shadow-xs"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="group flex items-center gap-3.5 select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
            aria-label="Mick Ramos Arquitetura - Início"
          >
            <div className="flex items-baseline">
              <span className="font-serif text-3xl md:text-4xl font-light tracking-tighter text-black">
                MR
              </span>
            </div>
            <div className="flex flex-col border-l border-black/20 pl-3.5">
              <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-neutral-900 uppercase">
                Mick Ramos
              </span>
              <span className="text-[9px] md:text-[10px] font-medium tracking-[0.25em] text-neutral-500 uppercase">
                Arquitetura · Design
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center gap-8 lg:gap-10"
            aria-label="Navegação Principal"
          >
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative py-1 text-sm tracking-wide text-neutral-700 hover:text-black transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-xs"
                >
                  <span className={isActive ? "font-semibold text-black" : "font-normal"}>
                    {link.name}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute left-0 bottom-0 w-full h-[1.5px] bg-black"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-neutral-800 hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-md"
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-nav-overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-30 bg-[#f8f7f4] flex flex-col justify-between p-8 pt-28 md:hidden"
          >
            <nav className="flex flex-col space-y-6">
              {navLinks.map((link, idx) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);

                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-between py-2 text-2xl font-light tracking-tight text-neutral-800 hover:text-black border-b border-black/5"
                    >
                      <span className={isActive ? "font-semibold text-black" : ""}>
                        {link.name}
                      </span>
                      {isActive ? (
                        <span className="text-xs tracking-widest uppercase font-mono px-2 py-0.5 bg-black text-white rounded-full">
                          Atual
                        </span>
                      ) : (
                        <ArrowRight className="w-4 h-4 text-neutral-400" />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <div className="pt-8 border-t border-black/10 space-y-2 text-xs text-neutral-600">
              <div className="font-semibold uppercase tracking-wider text-black">
                {siteConfig.name} — {siteConfig.role}
              </div>
              <p>{siteConfig.email}</p>
              <p>{siteConfig.phone}</p>
              <p className="text-[11px] text-neutral-500 pt-2">
                © {new Date().getFullYear()} Mick Ramos. Todos os direitos reservados.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
