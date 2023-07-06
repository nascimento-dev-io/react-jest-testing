module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:jest-dom/recommended',
    'plugin:testing-library/react',
    'plugin:prettier/recommended',
    'prettier',
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', 'react-hooks', 'jest-dom', 'testing-library'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'react/no-unescaped-entities': 'off',
    'react/jsx-no-bind': [
      'warn',
      {
        allowFunctions: true,
        allowArrowFunctions: true,
      },
    ],
    'jsx-a11y/control-has-associated-label': 'off',
    'react/jsx-no-constructed-context-values': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'no-undef': 'off',
  },
};
