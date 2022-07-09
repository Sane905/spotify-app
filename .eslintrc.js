module.exports = {
  env: {
    browser: true,
  },
  extends: [
    "plugin:import/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:import/typescript",
    "plugin:import/errors",
    "plugin:import/warnings",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["import"],
  rules: {
    "import/no-unresolved": "error",
    "import/order": ["error", { "newlines-between": "always", alphabetize: { order: "asc" } }],
  },
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
}
