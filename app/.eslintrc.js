module.exports = {
  root: true,
  // extends: [
  //     '@react-native-community',
  //     'airbnb-typescript',
  //     'prettier',
  //     'prettier/@typescript-eslint',
  //     'prettier/react'
  // ],
  extends: ['plugin:@typescript-eslint/recommended', '@react-native-community'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier', 'simple-import-sort'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      typescript: {}
    }
  },
  rules: {
    'comma-dangle': ['error', 'never'],
    '@typescript-eslint/explicit-function-return-type': 'off',
    'simple-import-sort/sort': 'error',
    'sort-imports': 'off',
    'prettier/prettier': 'error'
  }
};
