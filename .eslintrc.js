module.exports = {
  root: true,
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser', // 解析器，本解析器支持Ts
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 12, // 指定es版本
    sourceType: 'module' // 代码支持es6，使用module
  },
  rules: {
    camelcase: 'warn',
    indent: ['off', 2],
    'no-var': 'error',
    'no-undef': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/ban-types': 'error',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    // 运行时，用prettier缩进2行，但还是会提示Expected indentation of 2 spaces but found 4,暂无法解决，待排查
    '@typescript-eslint/indent': ['off', 2]
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
