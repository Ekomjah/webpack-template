// eslint.config.mjs
import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import pluginPrettier from "eslint-plugin-prettier";

export default defineConfig([
  js.configs.recommended, // ESLint's recommended rules
  prettier, // Disables ESLint rules that conflict with Prettier
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
      "prettier/prettier": "warn", // Show Prettier issues as warnings in ESLint
    },
  },
]);
