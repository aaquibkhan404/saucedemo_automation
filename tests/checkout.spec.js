const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');
const { CartPage } = require('../pages/CartPage');
const { CheckoutPage } = require('../pages/CheckoutPage');

const {
  validUser,
  customer
} = require('../test-data/testData');

test.describe('Checkout Functionality', () => {

  test.beforeEach(async ({ page }) => {

    const login = new LoginPage(page);

    await login.navigate();

    await login.login(
      validUser.username,
      validUser.password
    );

    const inventory = new InventoryPage(page);

    await inventory.addProduct('Sauce Labs Backpack');

    await inventory.openCart();

    const cart = new CartPage(page);

    await cart.checkout();

  });

  test('TC_CHECKOUT_001 - Complete successful order',
    async ({ page }) => {

      const checkout = new CheckoutPage(page);

      await checkout.enterCustomerDetails(customer);

      await checkout.continueCheckout();

      await expect(page).toHaveURL(/checkout-step-two.html/);

      await checkout.finishCheckout();

      await expect(checkout.confirmationMessage)
        .toHaveText('Thank you for your order!');

    });

  test('TC_CHECKOUT_002 - Validate empty customer details',
    async ({ page }) => {

      const checkout = new CheckoutPage(page);

      await checkout.continueCheckout();

      await expect(checkout.errorMessage).toContainText(
        'First Name is required'
      );

    });

});