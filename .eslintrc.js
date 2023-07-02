module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', 'react-hooks'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'treact/no-unescaped-entities': 'off',
    'react/jsx-no-bind': ['warn', {
      allowFunctions: true,
      allowArrowFunctions: true,
    }],
  },
};
