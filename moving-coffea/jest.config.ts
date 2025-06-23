import type { Config } from "jest";
import nextJest from "next/jest.js"

const createJestConfig = nextJest({
	dir: "./",
});

const config: Config = {
	preset: "ts-jest",
	testEnvironment: "jsdom",
	moduleNameMapper: {
		"^@/(.*)$": "<rootDir>/src/$1", // Soporte para alias "@"
	},
	setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
	transform: {
		"^.+\\.(ts|tsx)$": "ts-jest",
	},
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
	moduleDirectories: ["node_modules", "src"],
	testMatch: ['<rootDir>/src/test/**/*.test.{ts, tsx}']
};

export default createJestConfig(config);