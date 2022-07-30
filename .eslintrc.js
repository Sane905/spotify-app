module.exports = {
  env: {
    browser: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:import/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:import/typescript",
    "plugin:import/errors",
    "plugin:import/warnings",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react-hooks", "import", "unused-imports"],
  rules: {
    "import/order": ["error", { "newlines-between": "always", alphabetize: { order: "asc" } }],
    "no-unused-vars": "off", // or "@typescript-eslint/no-unused-vars": "off",
    "react/display-name": "off",
    "react-hooks/exhaustive-deps": "warn",
    "react/no-unknown-property": ["error", { ignore: ["class"] }],
    "react/jsx-curly-brace-presence": ["error", "never"],
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "error",
      { vars: "all", varsIgnorePattern: "^_", args: "after-used", argsIgnorePattern: "^_" },
    ],
  },
}
