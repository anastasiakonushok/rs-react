module.exports = {
    testEnvironment: "jsdom",
    moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
    transform: {
      "^.+\\.(ts|tsx)$": "ts-jest",
    },
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  };
  