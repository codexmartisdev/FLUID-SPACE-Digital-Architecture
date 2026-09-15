"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

interface ParallaxLayerProps {
  children: React.ReactNode;
  className?: string;
  distance?: number;
}

export function ParallaxLayer({
  children,
  className = "",
  distance = 22,
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div
        className="h-full w-full will-change-transform"
        style={prefersReducedMotion ? undefined : { y }}
      >
        {children}
      </motion.div>
    </div>
  );
}
