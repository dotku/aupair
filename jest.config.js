/** @type {import('jest').Config} */
const config = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": [
      "babel-jest",
      {
        presets: [
          "@babel/preset-env",
          ["@babel/preset-react", { runtime: "automatic" }],
          "@babel/preset-typescript",
        ],
      },
    ],
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: ["<rootDir>/src/tests/setupTests.ts"],
  globals: {
    "import.meta": {
      env: {
        VITE_SUPABASE_URL: "http://localhost:3000",
        VITE_SUPABASE_ANON_KEY: "mock-key",
      },
    },
  },
  transformIgnorePatterns: [
    "node_modules/(?!(@supabase|i18next|i18next-browser-languagedetector|react-i18next)/)",
  ],
};

export default config;
