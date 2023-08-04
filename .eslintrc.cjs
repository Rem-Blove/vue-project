/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        htmlWhitespaceSensitivity: 'ignore',
        trailingComma: 'none',
        semi: false,
        singleQuote: true,
        arrowParens: 'avoid',
        bracketSameLine: false,
        endOfLine: 'auto'
      }
    ],
    '@typescript-eslint/promise-function-async': 'off',
    'vue/multi-word-component-names': 'off',
    '@typescript-eslint/space-before-function-paren': 'off',
    '@typescript-eslint/no-unused-vars': 'error'
  }
}
