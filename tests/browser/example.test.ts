// Imports
import { expect, test } from "@playwright/test"

// Example browser test
test("Home page has expected H1", async ({ page }) => {
	await page.goto("/")
	await expect(page.locator("h1")).toBeVisible()
})
