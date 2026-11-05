const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../pages/LoginPage');
const { validUser, invalidUser } =
  require('../test-data/testData');

test.describe('Login Functionality', () => {

  test('TC_LOGIN_001 - Valid login', async ({ page }) => {

    const login = new LoginPage(page);

    await login.navigate();

    await login.login(
      validUser.username,
      validUser.password
    );

    await expect(page).toHaveURL(/inventory.html/);

  });

  test('TC_LOGIN_002 - Invalid login', async ({ page }) => {

    const login = new LoginPage(page);

    await login.navigate();

    await login.login(
      invalidUser.username,
      invalidUser.password
    );

    await expect(login.errorMessage).toBeVisible();

  });

  test('TC_LOGIN_003 - Empty username and password',
    async ({ page }) => {

      const login = new LoginPage(page);

      await login.navigate();

      await login.login('', '');

      await expect(login.errorMessage).toContainText(
        'Username is required'
      );

    });

});