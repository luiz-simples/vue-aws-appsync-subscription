module.exports = {
  env: {browser: true},
  root: true,
  plugins: ['vue'],
  parserOptions: {parser: 'babel-eslint'},
  extends: ['plugin:vue/essential', 'standard'],
  
  rules: {
    'no-new': 'off',
    'generator-star-spacing': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
