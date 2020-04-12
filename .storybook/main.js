module.exports = {
  stories: ["../stories/**/*.stories.(js|mdx)"],
  addons: [
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
      },
    },
    "@storybook/addon-actions",
    "@storybook/addon-links",
  ],
};
