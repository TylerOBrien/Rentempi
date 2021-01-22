module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    es6: true
  },
  parserOptions: {
    sourceType: 'module'
  },
  plugins: [
    'eslint-comments',
    'react',
    'react-hooks',
    'react-native',
    '@react-native-community',
    'jest'
  ],
};
