module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  injectGlobals: true,
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};
