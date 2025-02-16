"use client";
import { motion } from "framer-motion";
import {
  Braces,
  Code,
  Layers,
  Monitor,
  Zap,
  Terminal,
  Cpu,
  Globe,
  Database,
} from "lucide-react";

const animatedIcons = [
  { icon: Code, className: "top-10 left-10" },
  { icon: Monitor, className: "top-1/2 right-1/2" },
  { icon: Zap, className: "top-10 left-1/3" },
  { icon: Braces, className: "top-10 right-20" },
];

const staticIcons = [
  { icon: Terminal, className: "bottom-10 left-1/2" },
  { icon: Cpu, className: "bottom-1/4 left-1/4" },
  { icon: Globe, className: "bottom-10 left-10" },
  { icon: Database, className: "bottom-10 right-10" },
];

export default function FloatingIcons() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {animatedIcons.map(({ icon: Icon, className }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute text-primary opacity-50 ${className}`}
        >
          <Icon size={40} />
        </motion.div>
      ))}
      {staticIcons.map(({ icon: Icon, className }, index) => (
        <div
          key={`static-${index}`}
          className={`absolute text-primary opacity-50 ${className}`}
        >
          <Icon size={40} />
        </div>
      ))}
    </div>
  );
}
