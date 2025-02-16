import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        hanldee: ["var(--font-handlee)"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primaryDark: "#0C0C0C",
        lightPink: "#FFC9F0",
        pink: "#F072CD",
        lightYellow: "#FFE68C",
        yellow: "#E5C141",
        lightBlue: "#9DDCFF",
        blue: "#5AB5E8",
        lightGreen: "#7CF072",
        green: "#7CF072",
        darkPink: "#DB4A90",
        darkBlue: "#1C6AB1",
        darkYellow: "#BB9C2A",
        darkGreen: "#4ED543",
      },
    },
  },
  plugins: [],
} satisfies Config;
