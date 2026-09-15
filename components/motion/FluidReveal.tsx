"use client";

import { motion, useReducedMotion } from "motion/react";

interface FluidRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
  amount?: number;
}

const fluidEase = [0.22, 1, 0.36, 1] as const;

export function FluidReveal({
  children,
  className = "",
  delay = 0,
  y = 24,
  once = true,
  amount = 0.2,
}: FluidRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={prefersReducedMotion ? false : { opacity: 0, y, filter: "blur(5px)" }}
      whileInView={
        prefersReducedMotion
          ? undefined
          : { opacity: 1, y: 0, filter: "blur(0px)" }
      }
      viewport={{ once, amount }}
      transition={{
        duration: 0.82,
        delay,
        ease: fluidEase,
      }}
    >
      {children}
    </motion.div>
  );
}
