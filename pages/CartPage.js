class CartPage {

  constructor(page) {
    this.page = page;

    this.cartItems = page.getByTestId('inventory-item');
    this.checkoutButton = page.getByTestId('checkout');
    this.continueShopping =
      page.getByTestId('continue-shopping');
  }

  async getCartItemCount() {
    return await this.cartItems.count();
  }

  async verifyProduct(productName) {
    return await this.page
      .locator('.cart_item')
      .filter({ hasText: productName })
      .count();
  }

  async checkout() {
    await this.checkoutButton.click();
  }

  async continueShoppingClick() {
    await this.continueShopping.click();
  }
}

module.exports = { CartPage };