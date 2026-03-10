// @ts-check
const { test, expect } = require('@playwright/test');

test('add iPhone X to cart and checkout', async ({ page }) => {
  // Login
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  await page.fill('input#username', 'rahulshettyacademy');
  await page.fill('input#password', 'Learning@830$3mK2');
  await page.click('input[type="submit"]');

  // Wait for navigation
  await page.waitForURL('**/shop', { timeout: 30000 });
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);

  // Scroll to reveal products
  await page.locator('body').evaluate(el => el.scrollTop = 500);
  await page.waitForTimeout(1000);

  // Add product to cart
  const addBtn = page.locator('button:has-text("Add")').first();
  await addBtn.click();
  await page.waitForTimeout(1500);

  // Go to cart
  await page.locator('a').filter({ hasText: 'Checkout' }).first().click();
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(1500);

  // Verify in checkout
  await expect(page.locator('text=iphone X')).toBeVisible();

  // Proceed to checkout if button exists
  const proceedBtn = page.locator('button').filter({ hasText: /Proceed|Order/i }).first();
  if (await proceedBtn.isVisible({ timeout: 5000 }).catch(() => false)) {
    await proceedBtn.click();
  }

  // Final verification
  await expect(page.locator('text=iphone X')).toBeVisible({ timeout: 15000 });
});
