import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Añade estas líneas para resolver el error de "mismatch"
    "eslint.config.mjs",
    "next.config.mjs",
    "postcss.config.mjs",
    "tailwind.config.ts",
  ]),
]);

export default eslintConfig;