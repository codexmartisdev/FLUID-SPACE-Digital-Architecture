"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState<"default" | "project" | "image" | "hidden">("default");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on non-touch devices and when motion is allowed
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isTouch || prefersReducedMotion) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setIsVisible(true);
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Check target elements
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const projectEl = target.closest("[data-cursor='project']");
      const imageEl = target.closest("[data-cursor='image']");
      const buttonEl = target.closest("button, a, input, textarea, select");

      if (projectEl) {
        setCursorVariant("project");
        setCursorText("VER →");
      } else if (imageEl) {
        setCursorVariant("image");
        setCursorText("EXPANDIR +");
      } else if (buttonEl) {
        setCursorVariant("default");
        setCursorText("");
      } else {
        setCursorVariant("default");
        setCursorText("");
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-50 flex items-center justify-center font-mono text-[10px] tracking-widest uppercase transition-opacity duration-300"
      animate={{
        x: mousePosition.x - (cursorVariant === "default" ? 6 : 40),
        y: mousePosition.y - (cursorVariant === "default" ? 6 : 40),
        width: cursorVariant === "default" ? 12 : 80,
        height: cursorVariant === "default" ? 12 : 80,
        backgroundColor:
          cursorVariant === "default"
            ? "rgba(20, 21, 25, 0.75)"
            : "rgba(18, 19, 22, 0.92)",
        color: "#ffffff",
        backdropFilter: cursorVariant !== "default" ? "blur(4px)" : "none",
      }}
      transition={{
        type: "spring",
        stiffness: 450,
        damping: 32,
        mass: 0.5,
      }}
      style={{
        borderRadius: "9999px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
      }}
    >
      {cursorText && (
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="font-medium tracking-wider"
        >
          {cursorText}
        </motion.span>
      )}
    </motion.div>
  );
}
