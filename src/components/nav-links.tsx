"use client";
import { SquareMenu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function NavLinks() {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen((prev) => !prev);
  };

  const links: any = [
    {
      name: "Home",
      link: "#",
    },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Contact",
      link: "#contact",
    },
    {
      name: "Blog",
      link: "https://dev.to/lalitkhu",
    },
    {
      name: "About",
      link: "#about",
    },
  ];

  return (
    <>
      <button className="md:hidden" onClick={handleMenu}>
        <SquareMenu />
      </button>
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ width: 0, height: 0, opacity: 0 }}
            animate={{ width: "100vw", height: "100vh", opacity: 1 }}
            exit={{ width: 0, height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="font-light tracking-wider text-primaryDark gap-4 w-full h-full bg-lightBlue text-lg rounded-bl-full flex flex-col items-end py-8 pr-8 fixed top-0 right-0 border-2 border-darkBlue z-40"
          >
            <li>
              <X onClick={handleMenu} color="#0c0c0c" />
            </li>
            {links.map((item: any, index: any) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: 0.1 * (index + 1) }}
              >
                <a
                  href={item.link}
                  onClick={handleMenu}
                  className="hover:tracking-widest transition-all"
                >
                  {item.name}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
      <ul className="font-light tracking-wider text-primaryDark text-sm gap-4 hidden md:flex">
        <li>
          <a href="#" className="hover:tracking-widest transition-all">
            Home
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:tracking-widest transition-all">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:tracking-widest transition-all">
            Contact
          </a>
        </li>
        <li>
          <a
            href="https://dev.to/lalitkhu"
            className="hover:tracking-widest transition-all"
          >
            Blog
          </a>
        </li>
        <li>
          <a href="#about" className="hover:tracking-widest transition-all">
            About
          </a>
        </li>
        <li>
          <a href="" className="hover:tracking-widest transition-all">
            Contact
          </a>
        </li>
      </ul>
    </>
  );
}
