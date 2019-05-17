module.exports = {
    testRegex: '/__tests__/.*\\.spec\\.(js|ts)$',
    testPathIgnorePatterns: [
        '/node_modules/',
        '/__tests__/config\\.spec\\.js$',
        '/__tests__/config-sass\\.spec\\.js$',
    ],
    transform: {
        '.+\\.(css|styl|less|sass|scss)$': '<rootDir>/src/index.js',
        '.+\\.ts$': '<rootDir>/__tests__/preprocessor-typescript.js',
    },
    bail: true,
    collectCoverageFrom: ['src/**/*.js'],
};
