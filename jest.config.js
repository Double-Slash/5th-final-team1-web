module.exports = {
  roots: ["<rootDir>/src"],
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}", "!src/**/*.d.ts"],
  setupFiles: ["react-app-polyfill/jsdom"],
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  testMatch: ["<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}", "<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}"],
  testEnvironment: "jest-environment-jsdom-fourteen",
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$", "^.+\\.module\\.(css|sass|scss)$"],
  modulePaths: [],
  moduleFileExtensions: ["web.js", "js", "web.ts", "ts", "web.tsx", "tsx", "json", "web.jsx", "jsx", "node"],
  watchPlugins: ["jest-watch-typeahead/filename", "jest-watch-typeahead/testname"],
  moduleDirectories: ["node_modules", "src"],
};
