const path = require('path');

module.exports = {
    preset: 'ts-jest',
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    testEnvironment: 'jest-environment-jsdom',
    moduleDirectories: ['node_modules', path.join(__dirname, 'src')],
    moduleFileExtensions: ['js', 'json', 'ts', 'tsx', 'scss'],
    moduleNameMapper: {
        '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            path.join(__dirname, 'src/__tests__/__mocks__/fileMock.js'),
        '\\.(css|scss)$': 'identity-obj-proxy',
        'react-i18next': path.join(__dirname, 'src/__tests__/__mocks__/reacti18nextMock.jsx')
    },
    roots: ['src'],
    transform: {
        '^.+\\.ts?$': 'ts-jest',
        '^.+\\.(js|jsx)$': 'babel-jest'
    },
    transformIgnorePatterns: ['node_modules/(?!(imask|[LIBRARY]|@babel)/)'],
    testMatch: ['**/__tests__/*.ts?(x)']
};
