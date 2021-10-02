module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    ['@babel/plugin-proposal-export-namespace-from'],
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@assets': './assets',
          '@components': './src/components',
          '@components/*': './src/components/*',
          '@navigations': './src/navigations',
          '@navigations/*': './src/navigations/*',
          '@screens': './src/screens',
          '@screens/*': './src/screens/*',
          '@utils': './src/utils',
          '@utils/*': './src/utils/*',
          '@i18n': './src/i18n',
          '@i18n/*': './src/i18n/*',
          '@constants': './src/constants',
          '@constants/*': './src/constants/*',
        },
      },
    ],
  ],
};
