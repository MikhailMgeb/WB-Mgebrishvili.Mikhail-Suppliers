import typeScriptEsLintPlugin from '@typescript-eslint/eslint-plugin';
import esLintConfigPrettier from 'eslint-config-prettier';
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: typeScriptEsLintPlugin.configs['recommended'],
});

module.exports = [
    'eslint:recommended',

    ...compat.config({
        env: { node: true },
        extends: ['plugin:@typescript-eslint/recommended'],
        parser: '@typescript-eslint/parser',
        parserOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
        },
        plugins: ['@typescript-eslint'],
        rules: {
            '@typescript-eslint/no-unused-vars': 'error',
            '@typescript-eslint/no-empty-interface': 'error',
        },
    }),


    esLintConfigPrettier,

    {
        rules: {
            camelcase: ['error', { ignoreDestructuring: true }],
        },
    },
];
