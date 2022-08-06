module.exports = {
  root: true,
  env: {
    node: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/recommended',
    'eslint:recommended',
    '@vue/airbnb',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      modules: true,
    },
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'max-len': ['off'],
  },
};
