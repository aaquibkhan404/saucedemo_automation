const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');
const { validUser } = require('../test-data/testData');

test.describe('Product Functionality', () => {

  test.beforeEach(async ({ page }) => {

    const login = new LoginPage(page);

    await login.navigate();

    await login.login(
      validUser.username,
      validUser.password
    );

    await expect(page).toHaveURL(/inventory.html/);

  });

  test('TC_PRODUCT_001 - Verify product listing', async ({ page }) => {

    const inventory = new InventoryPage(page);

    const count = await inventory.getProductCount();

    expect(count).toBeGreaterThan(0);

  });

  test('TC_PRODUCT_002 - Add product to cart', async ({ page }) => {

    const inventory = new InventoryPage(page);

    await inventory.addProduct('Sauce Labs Backpack');

    expect(await inventory.getCartCount()).toBe(1);

  });

  test('TC_PRODUCT_003 - Sort products by price',
    async ({ page }) => {

      const inventory = new InventoryPage(page);

      await inventory.sortProducts('lohi');

      const prices = await page
        .locator('.inventory_item_price')
        .allTextContents();

      const numericPrices = prices.map(price =>
        Number(price.replace('$', ''))
      );

      expect(numericPrices).toEqual(
        [...numericPrices].sort((a, b) => a - b)
      );

    });

});