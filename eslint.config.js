import js from "@eslint/js"
import globals from "globals"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import tseslint from "typescript-eslint"
import {globalIgnores} from "eslint/config"
import stylistic from "@stylistic/eslint-plugin"
import importQuotes from "eslint-plugin-import-quotes"

export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
    ],
    plugins: {
      "@stylistic": stylistic,
      "import-quotes": importQuotes,
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      "@stylistic/comma-dangle": ["warn", "always-multiline"],
      "@stylistic/jsx-quotes": ["error", "prefer-double"],
      "@stylistic/keyword-spacing": ["error"],
      "@stylistic/no-multi-spaces": [
        "error",
        {
          ignoreEOLComments: true,
        },
      ],
      "@stylistic/quotes": [
        "error",
        "double",
        {
          avoidEscape: true,
        },
      ],
      "@stylistic/space-before-blocks": ["error", "always"],
      "@stylistic/space-in-parens": ["error", "never"],
      "@stylistic/semi": ["warn", "never"],
      "@stylistic/member-delimiter-style": [
        "warn",
        {
          multiline: {
            delimiter: "semi",
            requireLast: true,
          },
          singleline: {
            delimiter: "semi",
            requireLast: false,
          },
        },
      ],

      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],

      curly: ["error", "all"],
      "import-quotes/import-quotes": ["error", "double"],
    },
  },
])
