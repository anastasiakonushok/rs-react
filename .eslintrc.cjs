module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true, // Add Node.js environment
    'jest/globals': true, // Add Jest globals
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jest/recommended", // Add Jest recommended rules
    "prettier", // Ensure Prettier is last to override other configs
  ],
  ignorePatterns: ["dist"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react-refresh", "@typescript-eslint", "jest"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};
