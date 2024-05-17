"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

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

const NavActive = () => {
  const path = usePathname();
  return (
    <nav className="flex gap-5 items-center justify-center h-16 bg-slate-200">
      {links.map((link) => (
        <Link
          href={link.path}
          key={link.name}
          className="relative  text-gray-800 hover:text-gray-800/50"
        >
          <span className="relative z-10 ">{link.name}</span>
          {path === link.path && (
            <motion.span
              layoutId="underline"
              className="absolute h-1 left-0 -bottom-1 w-full  bg-white "
              transition={{ type: "spring", duration: 0.5 }}
            />
          )}
        </Link>
      ))}
    </nav>
  );
};

export default NavActive;
