import type { Config } from "tailwindcss";

/**
 * Tailwind v4: este archivo se usa con @config en globals.css.
 * Fondo: neutral-950. Bordes: neutral-800 (Industrial Minimalist, dark mode).
 */
const config: Config = {
  theme: {
    extend: {
      colors: {
        canvas: "#0a0a0a", // neutral-950
        border: {
          DEFAULT: "#262626", // neutral-800
        },
      },
    },
  },
};

export default config;
