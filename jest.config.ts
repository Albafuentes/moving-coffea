/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
	dir: "./",
});

const config: Config = {
	clearMocks: true,
	testEnvironment: "jsdom",
	moduleNameMapper: {
		"^@/(.*)$": "<rootDir>/src/$1",
	},
	collectCoverage: true,
	collectCoverageFrom: [
		"src/**/*.{js,jsx,ts,tsx}",
		"!src/**/*.d.ts",
		"!src/**/index.{js,jsx,ts,tsx}",
	],
	setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
	modulePathIgnorePatterns: ["<rootDir>/.next/"],
	globals: {
		"ts-jest": {
			diagnostics: {
				warnOnly: true,
			},
		},
	},
};

export default createJestConfig(config);