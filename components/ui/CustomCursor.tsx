"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";

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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const canUseCursor = !coarsePointer && !prefersReducedMotion;

    if (!canUseCursor) {
      delete document.documentElement.dataset.customCursor;
      return;
    }

    document.documentElement.dataset.customCursor = "enabled";

    const handlePointerMove = (event: PointerEvent) => {
      rawX.set(event.clientX);
      rawY.set(event.clientY);
      setIsVisible(true);
    };

    const handlePointerLeave = () => setIsVisible(false);
    const handlePointerEnter = () => setIsVisible(true);

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", handlePointerLeave);
    document.documentElement.addEventListener("mouseenter", handlePointerEnter);

    return () => {
      delete document.documentElement.dataset.customCursor;
      window.removeEventListener("pointermove", handlePointerMove);
      document.documentElement.removeEventListener("mouseleave", handlePointerLeave);
      document.documentElement.removeEventListener("mouseenter", handlePointerEnter);
    };
  }, [prefersReducedMotion, rawX, rawY]);

  if (!isVisible || prefersReducedMotion) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[90]"
      style={{ x, y, mixBlendMode: "difference" }}
    >
      <div className="h-[11px] w-[11px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
    </motion.div>
  );
}
