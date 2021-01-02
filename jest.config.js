module.exports = {
  setupFilesAfterEnv: ["<rootDir>src/setupTests.ts"],
  moduleNameMapper: {
    "@apis/(.*)": "<rootDir>/src/apis/$1",
    "@common/(.*)": "<rootDir>/src/common/$1",
    "@components/(.*)": "<rootDir>/src/components/$1",
    "@hooks/(.*)": "<rootDir>/src/hooks/$1",
    "@pages/(.*)": "<rootDir>/src/pages/$1",
    "@static/(.*)": "<rootDir>/src/static/$1",
    "@store/(.*)": "<rootDir>/src/store/$1",
    "@typings/(.*)": "<rootDir>/src/typings/$1",
    "@utils/(.*)": "<rootDir>/src/utils/$1",
    "\\.(css|less)$": "identity-obj-proxy",
  },
};
