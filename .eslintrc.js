// This is a patch so that eslint will load the plugins as dependencies.
// Otherwise we would need to install EVERYTHING in the root project: (platform-ui, mc-ui, etc)
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  parser: "@babel/eslint-parser",
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      presets: ["@babel/preset-react"],
    },
  },
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  extends: [
    "airbnb",
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
    "prettier",
  ],
  plugins: ["prettier", "react-hooks"],
  rules: {
    "prettier/prettier": "warn",
  },
};
