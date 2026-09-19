import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          darkGreen: "#091710",
          forest: "#0F2D1E",
          emerald: "#143C2A",
          leaf: "#1E4D38",
          cream: "#FAF7F2",
          creamDark: "#F2EBE0",
          creamLight: "#FFFDF9",
          gold: "#D4AF37",
          goldLight: "#E5C158",
          goldDark: "#A88319",
          amber: "#C59B27",
          charcoal: "#1C2420",
        },
      },
      fontFamily: {
        arabic: ["var(--font-tajawal)", "Cairo", "sans-serif"],
        serif: ["Cinzel", "Playfair Display", "serif"],
      },
      backgroundImage: {
        "botanical-pattern": "radial-gradient(circle at center, rgba(30,77,56,0.15) 0%, transparent 70%)",
        "gold-gradient": "linear-gradient(135deg, #D4AF37 0%, #E5C158 50%, #A88319 100%)",
      },
      boxShadow: {
        "glow-gold": "0 0 25px -5px rgba(212, 175, 55, 0.3)",
        "glow-green": "0 0 30px -5px rgba(15, 45, 30, 0.5)",
        "card-shadow": "0 10px 30px -5px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
