"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

interface FluidLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: "light" | "dark" | "text";
}

const variants = {
  light:
    "bg-white text-black border border-white hover:border-neutral-200 shadow-lg shadow-black/20",
  dark:
    "bg-neutral-950 text-white border border-neutral-950 hover:bg-neutral-800",
  text:
    "bg-transparent text-current border border-transparent px-0 py-0",
};

export function FluidLink({
  href,
  children,
  className = "",
  variant = "dark",
}: FluidLinkProps) {
  const prefersReducedMotion = useReducedMotion();
  const isText = variant === "text";

  return (
    <Link
      href={href}
      className={`group relative inline-flex items-center overflow-hidden rounded-full font-mono text-xs font-medium uppercase tracking-wider focus:outline-none focus-visible:ring-2 focus-visible:ring-current focus-visible:ring-offset-2 ${
        isText ? "gap-2" : "gap-3 px-7 py-3.5"
      } ${variants[variant]} ${className}`}
    >
      {!isText && (
        <motion.span
          aria-hidden="true"
          className="absolute inset-0 origin-left bg-black/[0.06]"
          initial={false}
          whileHover={prefersReducedMotion ? undefined : { scaleX: 1 }}
          style={{ scaleX: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        />
      )}
      <motion.span
        className="relative z-10"
        whileHover={prefersReducedMotion ? undefined : { x: 2 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.span>
      <span className="relative z-10 flex w-4 overflow-hidden">
        <motion.span
          className="flex"
          whileHover={prefersReducedMotion ? undefined : { x: 16 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <ArrowRight className="h-3.5 w-3.5 shrink-0" />
          <ArrowRight className="h-3.5 w-3.5 shrink-0" />
        </motion.span>
      </span>
    </Link>
  );
}
