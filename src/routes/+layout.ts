// Imports
import { dev } from "$app/environment"
import { injectAnalytics } from "@vercel/analytics/sveltekit"

// Add Vercel analytics in production
injectAnalytics({ mode: dev ? "development" : "production" })
