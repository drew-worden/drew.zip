// Imports
import { dev } from "$app/environment"
import { injectAnalytics } from "@vercel/analytics/sveltekit"

// Add Vercel analytics in production
injectAnalytics({ mode: dev ? "development" : "production" })

// Root layout load function
function load({ url }: { url: URL }) {
	return {
		url: url.pathname
	}
}

// Exports
export { load }
