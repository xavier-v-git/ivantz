// eslint.config.js
import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  // Ignore build outputs
  {
    ignores: [
      "**/.next/**",
      "**/dist/**",
      "**/build/**",
      "**/coverage/**",
      "**/node_modules/**",
      "next-env.d.ts",
    ],
  },

  // Bases JS & TS (rapide, sans type-check)
  js.configs.recommended,
  ...tseslint.configs.recommended,

  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      // Import sorting déterministe
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",

      // Qualité pragmatique
      "no-console": ["warn", { allow: ["warn", "error"] }],
      complexity: ["warn", 12],
      "max-lines": ["warn", { max: 400, skipBlankLines: true, skipComments: true }],

      // Adaptations React/Next
      "react/no-unescaped-entities": "off",
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    },
  },

  // Laisse Prettier gérer la mise en forme
  prettier,
];
