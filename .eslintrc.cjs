module.exports = {
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "env": {
        "browser": true,
        "es2021": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        'plugin:prettier/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "plugins": [
        "@typescript-eslint",
        "react",
        'import'
    ],
    "rules": {
        "react/react-in-jsx-scope": "off",
        'sort-imports': [
            'error',
            {
                ignoreCase: false,
                ignoreDeclarationSort: true,
                ignoreMemberSort: false,
                memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
                allowSeparatedGroups: true,
            },
        ],
        'import/no-unresolved': 'error',
        // 'import/no-named-as-default-member': 'off',
        'import/order': [
            'error',
            {
                groups: [
                    'builtin', // Built-in imports (come from NodeJS native) go first
                    'external', // <- External imports
                    'internal', // <- Absolute imports
                    ['sibling', 'parent'], // <- Relative imports, the sibling and parent types they can be mingled together
                    'index', // <- index imports
                    'unknown', // <- unknown
                ],
                'newlines-between': 'always',
                alphabetize: {
                    /* sort in ascending order. Options: ["ignore", "asc", "desc"] */
                    order: 'asc',
                    /* ignore case. Options: [true, false] */
                    caseInsensitive: true,
                },
            },
        ],
    },
    settings: {
        'import/resolver': {
            typescript: {
                project: './tsconfig.json',
            },
        },
    },
}
