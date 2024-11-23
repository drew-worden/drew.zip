// Imports
import adapter from "@sveltejs/adapter-vercel"
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"

// Svelte configuration
const svelteConfig = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter()
	}
}

// Exports
export default svelteConfig
