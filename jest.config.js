const { resolve } = require('path');
const root = resolve(__dirname);
module.exports = {
  preset: 'ts-jest',
	rootDir: root,
  displayName: 'unit-tests',
  testMatch: ['<rootDir>/src/**/*.test.ts'],
  testEnvironment: 'node',
  clearMocks: true,
	collectCoverage: true,
	collectCoverageFrom: [
		'<rootDir>/src/**/*.ts',
		'<rootDir>/tests/**/*.ts'
	],
	coverageReporters: [
		'text-summary',
		'lcov'
	],
  testTimeout: 10000,
  moduleNameMapper: {
    '@src/(.*)': '<rootDir>/src/$1',
    '@test/(.*)': '<rootDir>/test/$1',
  },
};