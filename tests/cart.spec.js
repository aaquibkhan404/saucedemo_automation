const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');
const { CartPage } = require('../pages/CartPage');

const { validUser } = require('../test-data/testData');

test.describe('Shopping Cart Functionality', () => {

  test.beforeEach(async ({ page }) => {

    const login = new LoginPage(page);

    await login.navigate();

    await login.login(
      validUser.username,
      validUser.password
    );

  });

  test('TC_CART_001 - Add product to cart', async ({ page }) => {

    const inventory = new InventoryPage(page);

    await inventory.addProduct('Sauce Labs Backpack');

    expect(await inventory.getCartCount()).toBe(1);

  });

  test('TC_CART_002 - Remove product from cart',
    async ({ page }) => {

      const inventory = new InventoryPage(page);

      await inventory.addProduct('Sauce Labs Backpack');

      await inventory.removeProduct('Sauce Labs Backpack');

      expect(await inventory.getCartCount()).toBe(0);

    });

  test('TC_CART_003 - Verify cart product',
    async ({ page }) => {

      const inventory = new InventoryPage(page);
      const cart = new CartPage(page);

      await inventory.addProduct('Sauce Labs Backpack');

      await inventory.openCart();

      expect(
        await cart.verifyProduct('Sauce Labs Backpack')
      ).toBe(1);

    });

});