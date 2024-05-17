"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Stars-1",
    path: "/Stars-1",
  },
  {
    name: "Stars-2",
    path: "/Stars-2",
  },
  {
    name: "Stars-3",
    path: "/Stars-3",
  },
];
const MotionLink = motion(Link);
const MixNav = () => {
  const [hover, setHover] = useState("");
  const path = usePathname();
  return (
    <header className="px-4 bg-transparent border-b backdrop-blur z-[999] top-0 sticky border-zinc-500">
      <nav className="flex items-center justify-center max-w-[1200px] w-full mx-auto">
        {links.map((link) => (
          <MotionLink
            onHoverStart={() => setHover(link.name)}
            onHoverEnd={() => setHover("")}
            href={link.path}
            key={link.name}
            className={cn(
              "relative px-3 py-2 md:px-4 md:py-3 max-md:text-sm  text-zinc-400 hover:text-white transition-colors",
              {
                "text-white": path === link.path,
              }
            )}
          >
            <span className="relative z-10">{link.name}</span>
            {/* hoverde axan arxa plan */}
            {hover === link.name && (
              <motion.span
                layoutId="mix-hover"
                className="absolute rounded-full inset-1 bg-zinc-600 "
                transition={{ type: "spring", duration: 0.5 }}
              />
            )}

            {/* active tabda altdan xet */}
            {path === link.path && (
              <motion.span
                layoutId="mix-underline"
                className="absolute bottom-0 left-0 w-full h-1 bg-zinc-300 "
                transition={{ type: "spring", duration: 0.5 }}
              />
            )}
          </MotionLink>
        ))}
      </nav>
    </header>
  );
};

export default MixNav;
