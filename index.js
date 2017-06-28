module.exports = {
    "parser": "babel-eslint",
    "extends": [
        "eslint-config-airbnb",
        "plugin:promise/recommended"
    ],
    "plugins": [
        "react",
        "flowtype",
        "promise"
    ],
    "env": {
        "browser": true,
        "node": true
    },
    "rules": {
        "array-callback-return": 1,
        "arrow-body-style": 0,
        "array-bracket-spacing": 1,
        "arrow-parens": 0,
        "arrow-spacing": 1,
        "block-no-empty": null,
        "block-scoped-var": 1,
        "brace-style": 1,
        "camelcase": 1,
        "class-methods-use-this": 0,
        "comma-dangle": [1, {
            "arrays": "always-multiline",
            "objects": "always-multiline",
            "imports": "always-multiline",
            "exports": "always-multiline",
            "functions": "ignore",
        }],
        "comma-spacing": 1,
        "comma-style": 1,
        "computed-property-spacing": 1,
        "consistent-return": 0,
        "curly": 1,
        "default-case": 1,
        "dot-notation": 1,
        "eqeqeq": [1, "allow-null"],
        "flowtype/define-flow-type": 1,
        "flowtype/use-flow-type": 1,
        "forbid-prop-types": [0, { "forbid": [] }],
        "guard-for-in": 1,
        "import/no-extraneous-dependencies": 0,
        "import/no-named-as-default": 0,
        "import/prefer-default-export": 0,
        "indent": [1, 4, {"SwitchCase": 1}],
        "jsx-a11y/href-no-hash": 0,
        "jsx-quotes": 1,
        "key-spacing": 1,
        "keyword-spacing": 1,
        "max-len": [1, {
            "ignoreStrings": true,
            "ignoreTrailingComments": true,
            "ignoreUrls": true,
            "code": 100
        }],
        "new-cap": 1,
        "no-case-declarations": 1,
        "no-console": 0,
        "no-else-return": 1,
        "no-empty": 1,
        "no-extra-semi": 1,
        "no-fallthrough": 1,
        "no-inner-declarations": 1,
        "no-loop-func": 1,
        "no-mixed-operators": 1,
        "no-multi-spaces": 1,
        "no-multi-str": 1,
        "no-multiple-empty-lines": 1,
        "no-nested-ternary": 1,
        "no-param-reassign": 0,
        "no-plusplus": 0,
        "no-redeclare": 1,
        "no-shadow": 1,
        "no-spaced-func": 1,
        "no-sparse-arrays": 1,
        "no-trailing-spaces": 1,
        "no-undef": 1,
        "no-unneeded-ternary": 1,
        "no-unreachable": 1,
        "no-unused-expressions": 1,
        "no-unused-vars": 1,
        "no-use-before-define": 0,
        "no-useless-constructor": 1,
        "no-var": 1,
        "object-curly-spacing": [1, "always"],
        "object-shorthand": 1,
        "one-var": 1,
        "one-var-declaration-per-line": 1,
        "padded-blocks": 1,
        "prefer-arrow-callback": 1,
        "prefer-const": 1,
        "prefer-rest-params": 1,
        "prefer-template": 1,
        "promise/always-return": 0,
        "promise/avoid-new": 0,
        "promise/catch-or-return": "error",
        "promise/no-nesting": 0,
        "promise/no-promise-in-callback": 0,
        "quote-props": 1,
        "quotes": [1, "double"],
        "radix": 1,
        "react/forbid-prop-types": 0,
        "react/jsx-boolean-value": 1,
        "react/jsx-closing-bracket-location": 1,
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/jsx-indent": [1, 4],
        "react/jsx-indent-props": [1, 4],
        "react/jsx-no-bind": 0,
        "react/jsx-space-before-closing": 1,
        "react/no-multi-comp": 1,
        "react/prefer-es6-class": 1,
        "react/prefer-stateless-function": 0,
        "react/prop-types": 1,
        "react/require-default-props": 0,
        "react/sort-comp": 0,
        "semi": 1,
        "semi-spacing": 1,
        "space-before-blocks": 1,
        "space-before-function-paren": 1,
        "space-in-parens": 1,
        "space-infix-ops": 0,
        "spaced-comment": 1,
        "vars-on-top": 1,
        "wrap-iife": 1
    }
};
