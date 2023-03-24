module.exports = {
  globals: {
    React: true,
    JSX: true,
  },
  extends: [
    "plugin:@typescript-eslint/recommended", // Uses rules from `@typescript-eslint/eslint-plugin`,
    "airbnb-typescript",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    // Layer in all the JS Rules
    "./.eslintrc.js",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {
    "no-template-curly-in-string": "warn",
    "no-param-reassign": "warn",
    "import/extensions": "off",
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "react/prop-types": "off",
    "react/jsx-filename-extension": ["warn", { extensions: [".jsx", ".tsx"] }],
    "react/jsx-props-no-spreading": "off",
    "react/require-default-props": "off",
    "react/no-array-index-key": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "@typescript-eslint/consistent-type-imports": "warn", // specify typed imports.. import { type Foo } from 'Foo';
    "import/no-extraneous-dependencies": "off",
    // this is covered by the typescript compiler, so we don't need it
    "no-undef": "off",
    "no-shadow": "off", // TS does it
  },
};
