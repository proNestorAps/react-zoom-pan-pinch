module.exports = {
  extends: ["react-app"],
  rules: {
    // Always wrap in curly braces, even one-liners.
    curly: ["warn", "all"],

    // Always use strict equality comparison, that is === or !==.
    eqeqeq: ["warn", "always"],
  },
};
