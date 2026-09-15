"use client";

import { AnimatePresence, MotionConfig, motion, useReducedMotion } from "motion/react";
import { usePathname } from "next/navigation";

interface MotionShellProps {
  children: React.ReactNode;
}

const fluidEase = [0.22, 1, 0.36, 1] as const;

export function MotionShell({ children }: MotionShellProps) {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();

  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -6 }}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.42,
            ease: fluidEase,
          }}
          className="w-full"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </MotionConfig>
  );
}
