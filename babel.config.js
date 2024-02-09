module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@components': './src/components',
          '@global': './src/global',
          '@hooks': './src/hooks',
          '@routes': './src/routes',
          '@screens': './src/screens',
        },
      },
    ],
  ],
};
