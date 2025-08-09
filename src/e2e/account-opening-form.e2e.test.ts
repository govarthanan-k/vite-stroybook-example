import { test } from "@playwright/test";

test.describe("Login Flow", () => {
  test("user can login successfully", async ({ page }) => {
    await page.goto("/");

    await page.click('[data-testid="button"]');
  });
});
