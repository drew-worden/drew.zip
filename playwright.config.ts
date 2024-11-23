// Imports
import { defineConfig } from "@playwright/test"

// Playwright configuration
const playwrightConfig = defineConfig({
	webServer: {
		command: "npm run build && npm run preview",
		port: 4173
	},
	testDir: "tests/browser",
	outputDir: "tests/browser/results"
})

// Exports
export default playwrightConfig
