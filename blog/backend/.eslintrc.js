module.exports = {
  env: {
    node: true,
    browser: true,
    es2020: true,
    'jest/globals': true
  },
  extends: ['eslint:recommended'],
  parserOptions: {
    sourceType: 'module'
  },
  plugins: ['react', 'jest'],
  rules: {
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    eqeqeq: 'error',
    'no-trailing-spaces': 'error',
    'object-curly-spacing': ['error', 'always'],
    'arrow-spacing': ['error', { before: true, after: true }],
    'no-console': 0,
    'react/prop-types': 0
  }
}
