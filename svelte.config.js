// Imports
import adapter from "@sveltejs/adapter-vercel"
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"

// Svelte configuration
/** @type {import('@sveltejs/kit').Config} */
const svelteConfig = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			runtime: "nodejs20.x"
		})
	}
}

// Exports
export default svelteConfig
