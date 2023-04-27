module.exports = {
    roots: ['<rootDir>/src'],
    transform: {
        '^.+\\.ts?$': 'ts-jest',
    },
    setupFiles: ['dotenv/config'],
    testRegex: '(/test/).*\\.test.ts$',
    moduleFileExtensions: ['ts', 'js', 'json', 'node'],
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100,
        },
    },
    coverageDirectory: 'coverage-unit',
};
