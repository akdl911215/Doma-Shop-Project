module.exports = {
    env: {
        node: true,
        es6: true,
    },
    root: true,
    parser: "@typescript-eslint/parser",
    parserOptions: {
        // tsconfigRootDir: __dirname,
        project: [
            "tsconfig.eslint.json",
            "tsconfig.json",
        ],
        // debugLevel: true,
    },
    plugins: [
        "@typescript-eslint",
    ],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ],
    rules: {
        "comma-dangle": ["warn", "always-multiline"],
        "space-before-blocks": ["error", "always"],
        "quotes": ["warn", "double"],
        "@typescript-eslint/no-explicit-any": "off",
        "require-await": "off",
        "@typescript-eslint/require-await": "error",
        "@typescript-eslint/no-floating-promises": "error",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/await-thenable": "error",
        "no-return-await": "off",
        "no-useless-catch": "off",
        "@typescript-eslint/return-await": "error",
        "@typescript-eslint/no-misused-promises": "error",
        "@typescript-eslint/naming-convention": [
            "warn",
            {
                "selector": "default",
                "format": ["camelCase"],
            },
            {
                "selector": "variable",
                "format": ["camelCase", "snake_case", "UPPER_CASE"],
            },
            {
                "selector": "parameter",
                "format": ["camelCase"],
                "leadingUnderscore": "allow",
            },
            {
                "selector": "memberLike",
                "modifiers": ["private"],
                "format": ["camelCase", "PascalCase", "snake_case", "UPPER_CASE"],
                "leadingUnderscore": "allow",
            },
            {
                "selector": "memberLike",
                "modifiers": ["public"],
                "format": ["camelCase", "PascalCase", "snake_case", "UPPER_CASE"],
            },
            {
                "selector": "typeLike",
                "format": ["PascalCase"],
            },
        ],
    },
};
