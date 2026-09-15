"use client";

import { motion, useReducedMotion } from "motion/react";

interface ImageRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
  amount?: number;
}

const fluidEase = [0.22, 1, 0.36, 1] as const;

export function ImageReveal({
  children,
  className = "",
  delay = 0,
  once = true,
  amount = 0.18,
}: ImageRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      initial={
        prefersReducedMotion
          ? false
          : {
              clipPath: "inset(0 0 100% 0 round 22px)",
              opacity: 0.7,
            }
      }
      whileInView={
        prefersReducedMotion
          ? undefined
          : {
              clipPath: "inset(0 0 0% 0 round 22px)",
              opacity: 1,
            }
      }
      viewport={{ once, amount }}
      transition={{ duration: 1.05, delay, ease: fluidEase }}
    >
      <motion.div
        initial={prefersReducedMotion ? false : { scale: 1.035, y: 14 }}
        whileInView={prefersReducedMotion ? undefined : { scale: 1, y: 0 }}
        viewport={{ once, amount }}
        transition={{ duration: 1.2, delay, ease: fluidEase }}
        className="h-full w-full"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
