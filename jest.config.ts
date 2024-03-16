import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true,
  transform: {
    "\\.m?jsx?$": [
      "babel-jest",
      {
        plugins: ["@babel/plugin-transform-modules-commonjs"],
      },
    ],
  },
  transformIgnorePatterns: ["/node_modules/?!(camelcase)/"],
};

export default config;
