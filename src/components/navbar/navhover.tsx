"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];
const MotionLink = motion(Link);
const NavHover = () => {
  const [hover, setHover] = useState("");
  return (
    <nav className="flex items-center justify-center h-16 bg-slate-400">
      {links.map((link) => (
        <MotionLink
          onHoverStart={() => setHover(link.name)}
          onHoverEnd={() => setHover("")}
          href={link.path}
          key={link.name}
          className="relative p-3"
        >
          <span className="relative z-10">{link.name}</span>

          {hover === link.name && (
            <motion.span
              layoutId="nav-item"
              className="absolute left-0 -bottom-1 h-0.5 bg-blue-500 w-full"
            />
          )}
        </MotionLink>
      ))}
    </nav>
  );
};

export default NavHover;
