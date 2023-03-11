const config = {
  transform: {
    // '^.+\\.(t|j)sx?$': '@swc/jest',
  },
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!(rescript|@glennsl/rescript-jest)/)',
  ],
  moduleFileExtensions: ['js', 'mjs'],
  testMatch: ['**/__tests__/**/*_test.mjs', '**/__tests__/**/*_test.bs.js'],
};

export default config
