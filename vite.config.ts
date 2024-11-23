// Imports
import { defineConfig } from "vitest/config"
import { sveltekit } from "@sveltejs/kit/vite"

// Vite configuration
const viteConfig = defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ["tests/unit/**/*.test.ts"],
		watch: false
	}
})

// Exports
export default viteConfig
