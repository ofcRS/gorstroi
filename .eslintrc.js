module.exports = {
    parser: 'babel-eslint',
    extends: [
        'plugin:react/recommended',
        'plugin:prettier/recommended',
        'prettier',
    ],
    parserOptions: {
        ecmaVersion: 10,
        sourceType: 'module',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    overrides: [
        {
            files: ['*.js*'],
            plugins: ['prettier'],
            rules: {
                'prettier/prettier': ['warn'],
                quotes: ['warn', 'single'],
                'react/prop-types': 0,
            },
        },
    ],
};
