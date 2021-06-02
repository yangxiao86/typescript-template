/* eslint-disable no-undef */
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {},
  overrides: [
    {
      "files": ["*.ts"],
      "extends": ["plugin:@typescript-eslint/recommended"],
      "rules": {
        "brace-style": "off",
        "explicit-module-boundary-types": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/brace-style": ["error"],
        "@typescript-eslint/semi": 1,
        "@typescript-eslint/no-explicit-any": 0,
        "@typescript-eslint/interface-name-prefix": 0,
        "@typescript-eslint/no-unused-expressions": 1,
        "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
        "@typescript-eslint/ban-types": ["error",
          {
            "types": {
              "String": false,
              "Boolean": false,
              "Number": false,
              "Symbol": false,
              "{}": false,
              "Object": false,
              "object": false,
              "Function": false,
            },
            "extendDefaults": true
          },
        ],
        // Stylistic Issues
        "array-bracket-spacing": [1, "never"],
        "block-spacing": [1, "always"],
        "comma-spacing": [1, { "before": false, "after": true }],
        "comma-style": [1, "last"],
        "computed-property-spacing": [1, "never"],
        "consistent-this": 0,
        "eol-last": [1, "unix"],
        "func-style": [1, "declaration", { "allowArrowFunctions": true }],
        "id-blacklist": 0,
        "id-length": 0,
        "id-match": 0,
        "indent": [1, 4, { "SwitchCase": 1, "VariableDeclarator": { "var": 1, "let": 1, "const": 1 } }],
        "jsx-quotes": [1, "prefer-double"],
        "key-spacing": [1, { "beforeColon": false, "afterColon": true, "mode": "minimum" }],
        "keyword-spacing": [1, { "before": true, "after": true }],
        "linebreak-style": [1, "unix"],
        "lines-around-comment": 0,
        "max-depth": [1, 6],
        "max-lines": 0,
        "max-nested-callbacks": [1, { "max": 5 }],
        "max-params": [1, { "max": 10 }],
        "max-statements": 0,
        "max-statements-per-line": [1, { "max": 2 }],
        "new-parens": 1,
        "newline-after-var": [1, "always"],
        "newline-before-return": 1,
        "newline-per-chained-call": [1, { "ignoreChainWithDepth": 4 }],
        "no-array-constructor": 1,
        "no-bitwise": 0,
        "no-continue": 0,
        "no-inline-comments": 0,
        "no-lonely-if": 1,
        "no-mixed-operators": 1,
        "no-mixed-spaces-and-tabs": 1,
        "no-multiple-empty-lines": [1, { "max": 1, "maxEOF": 1, "maxBOF": 0 }],
        "no-negated-condition": 0,
        "no-nested-ternary": 1,
        "no-new-object": 1,
        "no-plusplus": 0,
        "no-restricted-syntax": [1, "DebuggerStatement", "EmptyStatement", "LabeledStatement", "WithStatement"],
        "no-spaced-func": 1,
        "no-ternary": 0,
        "no-trailing-spaces": 1,
        "no-underscore-dangle": 0,
        "no-unneeded-ternary": 1,
        "no-whitespace-before-property": 1,
        "object-curly-newline": 0,
        "object-curly-spacing": [1, "always"],
        "object-property-newline": 0,
        "one-var": [1, "never"],
        "one-var-declaration-per-line": [1, "always"],
        "operator-assignment": 0,
        "operator-linebreak": [1, "before"],
        "padded-blocks": [1, "never"],
        "quote-props": [1, "as-needed"],
        "quotes": [1, "single", { "allowTemplateLiterals": true }],
        "require-jsdoc": [0, { "require": { "FunctionDeclaration": false, "ClassDeclaration": true, "MethodDefinition": true } }],
        "semi": [1, "always"],
        "semi-spacing": [1, { "before": false, "after": true }],
        "sort-vars": 0,
        "space-before-blocks": [1, "always"],
        "space-before-function-paren": [1, { "anonymous": "always", "named": "never" }],
        "space-in-parens": [1, "never"],
        "space-infix-ops": 1,
        "space-unary-ops": [1, { "words": true, "nonwords": false }],
        "spaced-comment": [1, "always"],
        "unicode-bom": [1, "never"],
        "wrap-regex": 1,
      }
    }
  ]
};