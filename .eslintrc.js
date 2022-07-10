module.exports = {
  extends: ["react-app"],
  rules: {
    // Always wrap in curly braces, even one-liners.
    curly: ["warn", "all"],

    // Always use strict equality comparison, that is === or !==.
    eqeqeq: ["warn", "always"],

    // Do not use shorthands to convert between types.
    "no-implicit-coercion": "warn",
  },
  overrides: [
    {
      // Rules that apply to JavaScript files in the root folder.
      files: ["./*.js"],
      env: {
        commonjs: true,
        node: true,
      },
    },
    {
      // Rules that only apply apply to TypeScript files. ESLint cannot lint JavaScript files if this is turned on for all files.
      files: ["*.ts", "*.tsx"],
      parserOptions: {
        project: ["./tsconfig.json"],
      },
      rules: {
        // Use Array<Foo> and ReadonlyArray<Foo> syntax to distinguish from empty array initializations and treat arrays like all other generic types.
        "@typescript-eslint/array-type": [
          "warn",
          {
            default: "generic",
          },
        ],
      },
    },
  ],
};
