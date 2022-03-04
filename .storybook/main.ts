const webpack = require('webpack');

module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', 'storybook-addon-next-router'],
  framework: '@storybook/react',
  staticDirs: ['../public'],
  typescript: { reactDocgen: false },
  webpackFinal: async (config, options) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        Buffer: ['buffer', 'Buffer'],
      }),
    );

    config.resolve.fallback = {
      stream: require.resolve('stream-browserify'),
      os: require.resolve('os-browserify/browser'),
      https: false,
      http: require.resolve('stream-http'),
      buffer: require.resolve('buffer/'),
    };

    return config;
  },
};
