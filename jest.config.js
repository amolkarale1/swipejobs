module.exports = {
    roots: ['<rootDir>/src'],
    transform: {
      '\\.(js|jsx)?$': 'babel-jest',
    },
    "testMatch": ["<rootDir>/src/tests/**/*.js?(x)", "**/?(*.)(spec|test).js?(x)"], // finds test
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
    testPathIgnorePatterns: ['/node_modules/', '/public/'],
    setupFilesAfterEnv: [
      '@testing-library/jest-dom/extend-expect'
    ],
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/jest-setup/styleMock.js",
        "\\.(css|less)$": "<rootDir>/jest-setup/styleMock.js"
      },
      testEnvironment: 'jsdom',
  }