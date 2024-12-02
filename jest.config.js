export default {
	preset: "ts-jest/presets/default-esm", // Support for ES Modules in TypeScript
	testEnvironment: "node", // Running in Node.js environment
	roots: ["<rootDir>/__tests__", "<rootDir>/src"],
	testMatch: [
		"**/__tests__/**/*.test.{ts,tsx}",
		"**/__tests__/**/*.test.{js,jsx}",
	], // Test file matchers
	moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
	transform: {
		"^.+\\.tsx?$": ["ts-jest", { useESM: true }], // Enable ESM support in ts-jest
		"^.+\\.(js|jsx|ts|tsx)$": "babel-jest", // Enable Babel for JavaScript files
	},
	extensionsToTreatAsEsm: [".ts", ".tsx"], // Treat TypeScript files as ESM
	moduleNameMapper: {
		"^@/(.*)$": "<rootDir>/src/$1", // Path aliasing for imports
	},
	clearMocks: true,
	collectCoverageFrom: ["src/**/*.{ts,tsx,js,jsx}", "!**/node_modules/**"],
	coverageDirectory: "<rootDir>/coverage",
	verbose: true,
};
