module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', 'testing-library'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
  overrides: [
    {
      files: ['src/**/*.test.jsx', 'src/**/*.test.js'],
      env: {
        browser: true,
        'jest/globals': true,
      },
      extends: ['plugin:react/recommended', 'plugin:testing-library/react'],
      plugins: ['testing-library'],
      rules: {
        // Additional rules or overrides specific to React Testing Library
      },
    },
  ],
};
