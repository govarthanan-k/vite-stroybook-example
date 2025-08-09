import { test, expect } from "@playwright/test";

test.describe("Button Visual Tests", () => {
  test("primary button appearance", async ({ page }) => {
    await page.goto("/?path=/story/example-button--primary");

    // Get the iframe first
    const storyFrame = page.frameLocator("#storybook-preview-iframe");

    // Wait for the button inside the iframe
    await storyFrame
      .locator('[data-testid="button"]')
      .waitFor({ timeout: 5000 });

    // Take screenshot
    await expect(
      storyFrame.locator('[data-testid="button"]')
    ).toHaveScreenshot();
  });
});
