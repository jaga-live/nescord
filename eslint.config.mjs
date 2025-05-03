// eslint.config.mjs
import eslintPluginTs from '@typescript-eslint/eslint-plugin';
import parserTs from '@typescript-eslint/parser';

export default [
  // Ignore all files in proto folders
  {
    ignores: [
      '**/proto/**/*.ts',
      '**/proto/**/*.js',
      '**/proto/**/*.d.ts',
      '**/lib/**/*.d.ts', // Also ignore declaration files in lib folders
    ],
  },
  // Main TypeScript configuration
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: parserTs,
      parserOptions: {
        project: ['./apps/**/tsconfig.json'],
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': eslintPluginTs,
    },
    rules: {
      ...eslintPluginTs.configs.recommended.rules,
      // Disable the no-explicit-any rule since it's causing many errors in the codebase
      '@typescript-eslint/no-explicit-any': 'warn',
      // Disable the no-unused-vars rule for parameters prefixed with _
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' },
      ],
      // Disable the no-empty-object-type rule
      '@typescript-eslint/no-empty-object-type': 'off',
    },
  },
];
