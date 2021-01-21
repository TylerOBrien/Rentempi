module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '~': './src',
          '@resources': './resources',
          '@images': './resources/images'
        }
      }
    ]
  ]
};
