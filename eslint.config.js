import vue from 'eslint-plugin-vue';
import prettier from 'eslint-plugin-prettier';
import unusedImports from 'eslint-plugin-unused-imports';
import vueParser from 'vue-eslint-parser';
import jsonc from 'eslint-plugin-jsonc';
import * as jsoncParser from 'jsonc-eslint-parser';
import tseslint from 'typescript-eslint';

export default [
  {
    ignores: ['node_modules/**', 'dist/**'],
  },
  {
    files: ['**/*.vue', '**/*.js'],
    languageOptions: {
      parser: vueParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        // Parsing TypeScript des <script lang="ts">
        parser: tseslint.parser,
        requireConfigFile: false,
        vueFeatures: {
          filter: true,
          interpolationAsNonHTML: false,
        },
      },
    },
    plugins: {
      vue,
      prettier,
      'unused-imports': unusedImports,
    },
    rules: {
      'prettier/prettier': 'error',

      'vue/html-indent': 'off',
      'vue/block-order': ['error', { order: ['template', 'script', 'style'] }],
      'vue/multi-word-component-names': 'off',
      'vue/attribute-hyphenation': 'error',
      'vue/no-unused-vars': 'error',

      'vue/no-unused-components': 'warn',
      'vue/require-prop-types': 'warn',
      'vue/no-unused-refs': 'warn',

      'unused-imports/no-unused-imports': 'warn',
      'unused-imports/no-unused-vars': [
        'warn',
        { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
      ],

      'no-console': 'error',
      'no-debugger': 'error',
      'prefer-const': 'warn',
      'no-var': 'warn',
      'curly': ['warn', 'multi-line', 'consistent'],
      'padding-line-between-statements': [
        'warn',
        { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
        { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
        { blankLine: 'always', prev: 'expression', next: 'if' },
        { blankLine: 'always', prev: '*', next: 'if' },
        { blankLine: 'always', prev: 'for', next: 'return' },
        { blankLine: 'always', prev: 'if', next: 'return' },
        { blankLine: 'always', prev: 'if', next: ['const', 'let', 'var'] },
        { blankLine: 'always', prev: 'if', next: '*' },
        { blankLine: 'always', prev: 'expression', next: 'return' },
        { blankLine: 'always', prev: 'if', next: 'expression' },
      ],

      'no-unused-vars': 'off',
      'no-reserved-keys': 'off',
    },
  },
  {
    // Fichiers TypeScript purs (src/composables, src/data…)
    files: ['**/*.ts'],
    languageOptions: {
      parser: tseslint.parser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
    },
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { varsIgnorePattern: '^_', argsIgnorePattern: '^_' },
      ],
      'padding-line-between-statements': [
        'warn',
        { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
        { blankLine: 'always', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
        { blankLine: 'always', prev: 'expression', next: 'if' },
        { blankLine: 'always', prev: 'if', next: ['const', 'let', 'var'] },
        { blankLine: 'always', prev: 'if', next: '*' },
      ],
    },
  },
  {
    files: ['src/utils/logger.js'],
    rules: {
      'no-console': 'off',
    },
  },
  {
    files: ['**/*.json'],
    ignores: ['package-lock.json'],
    languageOptions: {
      parser: jsoncParser,
    },
    plugins: {
      jsonc,
    },
    rules: {
      'jsonc/indent': ['warn', 4],
      'jsonc/key-spacing': 'warn',
      'jsonc/comma-dangle': ['warn', 'never'],
      'jsonc/no-dupe-keys': 'error',
    },
  },
];
