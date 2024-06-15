module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    "airbnb",
    "airbnb-typescript",
  ],
  parserOptions: {
    "project": ["./tsconfig.json"]
  },
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', "@typescript-eslint", "import"],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-inferrable-types": "error",
    "@typescript-eslint/no-use-before-define": "off",

    "react/function-component-definition": [
      2,
      {
        "namedComponents": "arrow-function",
        "unnamedComponents": "arrow-function"
      }
    ],
    "arrow-body-style": "off",
    "linebreak-style": 0,
    "import/prefer-default-export": "off",
    "jsx-a11y/heading-has-content": [
      "error",
      {
        "components": [""]
      }
    ],
    "react/self-closing-comp": "off",
    "jsx-a11y/html-has-lang": "error",
    "jsx-a11y/iframe-has-title": "error",
    "jsx-a11y/img-redundant-alt": "error",
    "jsx-a11y/lang": "error",
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",
    "react/require-default-props": [
      0,
      {
        "forbidDefaultForRequired": false,
        "functions": false
      }
    ],
    "comma-dangle": [2, "always-multiline"],
    "no-use-before-define": ["error", { "variables": false }],
    "space-before-blocks": "off",
    "@typescript-eslint/space-before-blocks": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": [
      "off",
      {
        "handlers": [
          "onClick",
          "onMouseDown",
          "onMouseUp",
          "onKeyPress",
          "onKeyDown",
          "onKeyUp"
        ],
        "allowExpressionValues": true
      }
    ],
    "no-unused-expressions": "off",
    "@typescript-eslint/no-unused-expressions": "warn",
    "react/button-has-type": "off",
    "import/order": [
      "error",
      {
        "groups": [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index"
        ],
        "newlines-between": "always-and-inside-groups"
      }
    ],
    "jsx-a11y/control-has-associated-label": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": [
          "**/*.stories.*",
          "**/.storybook/**/*.*"
        ],
        "peerDependencies": true
      }
    ],
    "no-param-reassign": "off",
    "jsx-a11y/label-has-associated-control": "off"
  },
}
