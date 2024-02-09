module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@global': './src/global',
          '@screens': './src/screens',
          '@routes': './src/routes',
        },
      },
    ],
  ],
};
