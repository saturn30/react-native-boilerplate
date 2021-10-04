const custom = require('../storybook/web/webpack.config');
const { stories } = require('../storybook/storyLoader');

module.exports = {
  // stories: [
  // '../src/components/**/*.stories.mdx',
  //   '../src/components/**/*.stories.@(js|jsx|ts|tsx)',
  // ],
  stories,
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: config => {
    console.log('config :', config);
    console.log('custom :', custom);
    console.log(custom.resolve.alias);
    console.log(custom.module.rules);
    return {
      ...config,
      resolve: { alias: { ...config.resolve.alias, ...custom.resolve.alias } },
      module: { ...config.module, rules: custom.module.rules },
    };
  },
};
