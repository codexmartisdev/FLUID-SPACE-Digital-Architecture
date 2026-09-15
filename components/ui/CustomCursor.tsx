"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";

type CursorVariant = "default" | "project" | "image";

const springConfig = {
  stiffness: 720,
  damping: 42,
  mass: 0.18,
};

export function CustomCursor() {
  const rawX = useMotionValue(-120);
  const rawY = useMotionValue(-120);
  const x = useSpring(rawX, springConfig);
  const y = useSpring(rawY, springConfig);
  const prefersReducedMotion = useReducedMotion();

  const [cursorVariant, setCursorVariant] = useState<CursorVariant>("default");
  const [isVisible, setIsVisible] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const canUseCursor = !coarsePointer && !prefersReducedMotion;
    setIsEnabled(canUseCursor);

    if (!canUseCursor) return;

    const resolveVariant = (target: EventTarget | null): CursorVariant => {
      if (!(target instanceof HTMLElement)) return "default";
      if (target.closest("[data-cursor='project']")) return "project";
      if (target.closest("[data-cursor='image']")) return "image";
      return "default";
    };

    const handlePointerMove = (event: PointerEvent) => {
      rawX.set(event.clientX);
      rawY.set(event.clientY);
      setIsVisible(true);
      setCursorVariant(resolveVariant(event.target));
    };

    const handlePointerLeave = () => setIsVisible(false);
    const handlePointerEnter = () => setIsVisible(true);

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", handlePointerLeave);
    document.documentElement.addEventListener("mouseenter", handlePointerEnter);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.documentElement.removeEventListener("mouseleave", handlePointerLeave);
      document.documentElement.removeEventListener("mouseenter", handlePointerEnter);
    };
  }, [prefersReducedMotion, rawX, rawY]);

  if (!isEnabled || !isVisible) return null;

  const isExpanded = cursorVariant !== "default";
  const cursorText =
    cursorVariant === "project"
      ? "VER →"
      : cursorVariant === "image"
        ? "EXPANDIR +"
        : "";

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[60]"
      style={{ x, y }}
    >
      <motion.div
        className="flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full font-mono text-[10px] uppercase tracking-widest text-white"
        animate={{
          width: isExpanded ? 78 : 11,
          height: isExpanded ? 78 : 11,
          backgroundColor: isExpanded
            ? "rgba(18, 19, 22, 0.90)"
            : "rgba(20, 21, 25, 0.72)",
          boxShadow: isExpanded
            ? "0 10px 32px rgba(0,0,0,0.16)"
            : "0 3px 12px rgba(0,0,0,0.10)",
        }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.span
          animate={{
            opacity: cursorText ? 1 : 0,
            scale: cursorText ? 1 : 0.9,
          }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          className="whitespace-nowrap font-medium tracking-wider"
        >
          {cursorText}
        </motion.span>
      </motion.div>
    </motion.div>
  );
}
