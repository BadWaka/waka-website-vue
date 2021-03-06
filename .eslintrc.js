// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-s
  // tyle
  extends: 'standard',
  // required to lint *.vue files
  plugins: ['html'],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production'
      ? 2
      : 0,
    // 不允许空格 禁用
    'space-before-function-paren': 0,
    // 空格检测 禁用
    'indent': 0,
    // 分号 禁用
    'semi': 0,
    // 尾部逗号结尾 禁用
    'comma-dangle': 0,
    // 没有多行空格 禁用
    'no-trailing-spaces': 0,
    // 未使用的变量 禁用
    'no-unused-vars': 0
  }
}
