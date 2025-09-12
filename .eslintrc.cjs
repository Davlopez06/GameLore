/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  ignorePatterns: ['.eslintrc.cjs', 'dist/', '.astro/'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    // Reglas base para archivos .astro
    'plugin:astro/recommended',
  ],
  plugins: ['@typescript-eslint', 'import'],
  rules: {
    // ---- Reglas generales/TS (adaptadas de tu config) ----
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],

    'no-console': 'error',
    'no-debugger': 'error',

    'max-len': ['error', { code: 150 }],
    quotes: ['error', 'single'],
    'no-underscore-dangle': 'off',
    'template-curly-spacing': 'off',
    indent: ['error', 2, { SwitchCase: 1 }],
    'spaced-comment': ['error', 'always', { exceptions: ['*'] }],

    // plugin-import (asegúrate de tenerlo instalado)
    'import/extensions': ['error', 'never'],
  },

  // Overrides para archivos específicos
  overrides: [
    // 1) Archivos .astro
    {
      files: ['**/*.astro'],
      // Parser para Astro + parser TS para script interno
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      rules: {
        // pon aquí reglas específicas para plantillas Astro si lo deseas
      },
    },

    // 2) Si usas React (islas) en .tsx/.jsx
    {
      files: ['**/*.{tsx,jsx}'],
      plugins: ['react', 'react-hooks'],
      extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended'],
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      settings: {
        react: { version: 'detect' },
      },
      rules: {
        'react/react-in-jsx-scope': 'off',
        'react/jsx-filename-extension': ['error', { extensions: ['.tsx', '.jsx'] }],
        'react/prop-types': 'off',
        'react/jsx-curly-spacing': ['error', { when: 'never', children: true }],
        'react/self-closing-comp': 'error',
      },
    },
  ],
};
