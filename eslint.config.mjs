import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginTs from "@typescript-eslint/eslint-plugin"; // Add TypeScript plugin
import parser from "@typescript-eslint/parser"; // Add TypeScript parser

export default [
  // JavaScript and React configurations
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: { globals: globals.browser },
    ...pluginJs.configs.recommended,
    ...pluginReact.configs.flat.recommended,
  },
  // TypeScript configurations
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: parser, // Use TypeScript parser
      globals: globals.browser, // Include browser globals
    },
    rules: {
      // You can customize TypeScript-specific rules here
    },
    // Recommended settings for TypeScript
    ...pluginTs.configs.recommended,
  },
];
