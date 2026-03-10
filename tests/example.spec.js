// @ts-check
const { test, expect } = require('@playwright/test');

const EXAMPLE_URL = 'https://example.com';

test.describe('Example Tests', () => {
  test('should display page title', async ({ page }) => {
    await page.goto(EXAMPLE_URL);
    await expect(page).toHaveTitle(/Example/);
  });

  test('should display main heading', async ({ page }) => {
    await page.goto(EXAMPLE_URL);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('should click button when available', async ({ page }) => {
    await page.goto(EXAMPLE_URL);
    const button = page.locator('button');
    
    if (await button.isVisible()) {
      await button.click();
    }
  });
});
