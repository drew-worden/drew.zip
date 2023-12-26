//Import packages
import { expect, test } from "@playwright/test"

//Test body
test("index page has expected h1", async ({ page }) => {
	await page.goto("/")
	await expect(page.getByText("🚧 drew.zip is under renovation")).toBeVisible()
})
