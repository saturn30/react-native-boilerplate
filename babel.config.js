module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
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
          '@navigation': './src/navigation',
          '@screens': './src/screens',
        },
      },
    ],
  ],
};
