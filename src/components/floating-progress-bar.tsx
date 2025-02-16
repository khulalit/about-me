"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollProgress(): JSX.Element {
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const windowHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / windowHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="fixed bottom-6 right-6 flex items-center justify-center w-8 h-8 rounded-full text-white shadow-lg cursor-pointer"
      onClick={scrollToTop}
    >
      <svg width="64" height="64" viewBox="0 0 100 100" className="absolute">
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="white"
          strokeWidth="6"
          fill="none"
        />
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="#0c0c0c"
          strokeWidth="6"
          fill="none"
          strokeDasharray="251.2"
          strokeDashoffset={`${251.2 - (scrollProgress / 100) * 251.2}`}
          strokeLinecap="round"
          transform="rotate(-90 50 50)"
        />
      </svg>
      <motion.div
        whileTap={{ scale: 0.9 }}
        className="flex flex-col items-center justify-center"
      >
        <ArrowUp size={16} className="text-primaryDark" />
        <span className="text-sm font-medium font-hanldee text-primaryDark">
          {Math.round(scrollProgress)}%
        </span>
      </motion.div>
    </div>
  );
}
