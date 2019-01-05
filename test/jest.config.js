module.exports = {
    rootDir: '../',
    testURL: 'http://localhost/',
    clearMocks: true,
    setupFiles: [
        '<rootDir>/test/setup.js',
    ],
    moduleNameMapper: {
        '\\.(css|scss|jpg|png|gif)$': '<rootDir>/test/mock.js',
    },
    modulePaths: [
        '<rootDir>/src',
        '<rootDir>/',
    ],
    collectCoverageFrom: [
        '<rootDir>/src/**/*.js',
    ],
    testPathIgnorePatterns: [
        '<rootDir>/src/config/',
    ],
    coveragePathIgnorePatterns: [
        '<rootDir>/src/config',
    ],
    coverageThreshold: {
        global: {
            statements: 95,
            branches: 95,
            functions: 95,
            lines: 95,
        },
    },
};
