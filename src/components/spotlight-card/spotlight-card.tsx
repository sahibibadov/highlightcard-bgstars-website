"use client";
import { useMousePosition } from "./useMousePosition";
import { motion, AnimatePresence } from "framer-motion";

import { useState } from "react";

export function SpotLightItem({ children }: { children: React.ReactNode }) {
  const mousePosition = useMousePosition();
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.4 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative grid w-full h-40 overflow-hidden border border-zinc-700 place-items-center backdrop-blur"
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            layoutId="spotlight"
            className="absolute inset-0 z-0 overflow-hidden bg-fixed "
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, hsla(${mousePosition.x},50%,80%,0.135) 0%,transparent 10%,transparent) fixed`,
            }}
          ></motion.div>
        )}
      </AnimatePresence>
      <motion.div
        className="absolute inset-0 z-0 overflow-hidden bg-fixed "
        style={{
          clipPath: `polygon(0% 0%, 0% 100%, calc(0% + 1px) 100%, calc(0% + 1px) calc(0% + 1px), calc(100% - 1px) calc(0% + 1px), calc(100% - 1px) calc(100% - 1px), calc(0% + 1px) calc(100% - 1px), calc(0% + 1px) 100%, 100% 100%, 100% 0%)`,
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, hsla(${
            ((mousePosition.x || 0) + (mousePosition.y || 0)) / 5
          },90%,70%,0.35) 0%,transparent 10%,transparent) fixed`,
        }}
      ></motion.div>
      <div className="relative z-10 ">{children}</div>
    </motion.div>
  );
}
