"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";

interface ProjectGalleryProps {
  images: string[];
  title: string;
}

const fluidEase = [0.22, 1, 0.36, 1] as const;

export function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const isOpen = activeIndex !== null;

  const close = useCallback(() => setActiveIndex(null), []);
  const previous = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null || images.length === 0) return current;
      return (current - 1 + images.length) % images.length;
    });
  }, [images.length]);
  const next = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null || images.length === 0) return current;
      return (current + 1) % images.length;
    });
  }, [images.length]);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") previous();
      if (event.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [close, isOpen, next, previous]);

  if (images.length === 0) return null;

  return (
    <>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {images.map((image, index) => (
          <button
            key={`${image}-${index}`}
            type="button"
            onClick={() => setActiveIndex(index)}
            data-cursor="image"
            aria-label={`Abrir ${title} — foto ${index + 1} em tela cheia`}
            className={`group relative overflow-hidden rounded-2xl bg-neutral-200 text-left shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-4 ${
              index === 0 ? "aspect-[16/9] md:col-span-2" : "aspect-[4/3]"
            }`}
          >
            <Image
              src={image}
              alt={`${title} — Vista ${index + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full border border-white/20 bg-black/45 px-3 py-2 text-[10px] font-mono uppercase tracking-[0.14em] text-white backdrop-blur-md transition-all duration-300 group-hover:bg-black/65">
              <Maximize2 className="h-3.5 w-3.5" />
              <span>Expandir</span>
            </div>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {isOpen && activeIndex !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`Galeria em tela cheia — ${title}`}
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0.12 : 0.28, ease: fluidEase }}
            className="fixed inset-0 z-[120] flex flex-col bg-[#0b0c0e]/[0.97] text-white backdrop-blur-md"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) close();
            }}
          >
            <div className="relative z-20 flex items-center justify-between border-b border-white/10 px-4 py-4 sm:px-7">
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-white sm:text-base">{title}</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-400">
                  Foto {activeIndex + 1} de {images.length}
                </p>
              </div>

              <button
                type="button"
                onClick={close}
                aria-label="Fechar galeria em tela cheia"
                title="Fechar (Esc)"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white transition-colors hover:bg-white/[0.14] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden px-2 py-4 sm:px-20 sm:py-6">
              {images.length > 1 && (
                <button
                  type="button"
                  onClick={previous}
                  aria-label="Foto anterior"
                  title="Foto anterior (Seta esquerda)"
                  className="absolute left-3 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white backdrop-blur-md transition-all hover:bg-white hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:left-7 sm:h-12 sm:w-12"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
              )}

              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={`${images[activeIndex]}-${activeIndex}`}
                  initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.985, x: 10 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.99, x: -10 }}
                  transition={{ duration: prefersReducedMotion ? 0.12 : 0.34, ease: fluidEase }}
                  className="relative h-full w-full max-w-[1500px]"
                  onMouseDown={(event) => event.stopPropagation()}
                >
                  <Image
                    src={images[activeIndex]}
                    alt={`${title} — Foto ${activeIndex + 1}`}
                    fill
                    priority
                    sizes="100vw"
                    className="object-contain"
                  />
                </motion.div>
              </AnimatePresence>

              {images.length > 1 && (
                <button
                  type="button"
                  onClick={next}
                  aria-label="Próxima foto"
                  title="Próxima foto (Seta direita)"
                  className="absolute right-3 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white backdrop-blur-md transition-all hover:bg-white hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:right-7 sm:h-12 sm:w-12"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              )}
            </div>

            {images.length > 1 && (
              <div className="border-t border-white/10 px-4 py-3 sm:px-7 sm:py-4">
                <div className="mx-auto flex max-w-5xl items-center justify-start gap-2 overflow-x-auto pb-1 sm:justify-center">
                  {images.map((image, index) => (
                    <button
                      key={`thumb-${image}-${index}`}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      aria-label={`Abrir foto ${index + 1}`}
                      aria-current={index === activeIndex ? "true" : undefined}
                      className={`relative h-12 w-16 shrink-0 overflow-hidden rounded-lg border transition-all sm:h-14 sm:w-20 ${
                        index === activeIndex
                          ? "border-white opacity-100 ring-1 ring-white/40"
                          : "border-white/10 opacity-45 hover:opacity-90"
                      }`}
                    >
                      <Image
                        src={image}
                        alt=""
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
