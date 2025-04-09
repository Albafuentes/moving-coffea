import type { Config } from "jest";

const config: Config = {
	preset: "ts-jest",
	testEnvironment: "jsdom",
	moduleNameMapper: {
		"^@/(.*)$": "<rootDir>/src/$1", // Soporte para alias "@"
	},
	setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};

export default config;