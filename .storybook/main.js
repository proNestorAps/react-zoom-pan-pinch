module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-storysource",
    "@storybook/addon-a11y",
  ],
  core: {
    builder: "webpack5",
  },
  webpackFinal: async (config) => {
    // Remove crypto since we aren't using it.
    config.resolve.fallback.crypto = false;

    return config;
  },
};
