// vitest.config.ts
export default {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    testFiles: [
        '<rootDir>/findMovie.test.ts',
        '<rootDir>/addMovie.test.ts',
        '<rootDir>/getMovies.test.ts',
        // Add more test files as needed
    ],
    // Add any additional Vitest configurations as needed
};
