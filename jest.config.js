module.exports = {
  setupFilesAfterEnv: ["<rootDir>src/setupTests.ts"],
  moduleNameMapper: {
    "@common/(.*)": "<rootDir>/src/common/$1",
  },
};
