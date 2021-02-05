module.exports = {
  env: {
    jest: true,
    browser: true,
    es2021: true,
    commonjs: true, //没有这一行，module报错
    es6: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'prettier/react'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  plugins: ['react'],
  parser: 'babel-eslint',
  rules: {
    semi: ['error', 'always'],

    'prettier/prettier': [
      'error',
      {
        semi: true,

        singleQuote: true,

        printWidth: 80,

        tabWidth: 2,

        jsxSingleQuote: false,

        trailingComma: 'none',

        arrowParens: 'avoid'
      }
    ]
  }
};
