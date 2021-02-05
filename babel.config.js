module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.jsx', '.ios.jsx', '.android.jsx', '.tsx', '.json'],
        alias: {
          '~': './src',
          '@resources': './resources',
          '@images': './resources/images'
        }
      }
    ]
  ]
};
