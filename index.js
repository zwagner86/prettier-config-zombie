module.exports = {
    arrowParens: 'avoid',
    bracketSpacing: false,
    bracketSameLine: false,
    singleQuote: true,
    tabWidth: 4,
    trailingComma: 'es5',
    overrides: [
        {
            files: '*.json',
            options: {
                tabWidth: 2,
            },
        },
        {
            files: '*.scss',
            options: {
                singleQuote: false,
            },
        },
    ],
};
