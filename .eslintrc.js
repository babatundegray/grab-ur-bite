module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'eslint:recommended',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended'
  ],
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    semi: [2, 'never'],
    'no-console': 'off',
    'vue/max-attributes-per-line': 'off',
    'prettier/prettier': ['error', { semi: false }],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'any'
        }
      }
    ],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto'
      }
    ]
  }
}
