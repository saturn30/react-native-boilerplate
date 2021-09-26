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
          '@navigation': './src/navigation',
          '@navigation/*': './src/navigation/*',
          '@screens': './src/screens',
          '@screens/*': './src/screens/*',
          '@utils': './src/utils',
          '@utils/*': './src/utils/*',
        },
      },
    ],
  ],
};
