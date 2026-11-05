class InventoryPage {

  constructor(page) {
    this.page = page;

    this.inventoryItems = page.getByTestId('inventory-item');
    this.cartBadge = page.getByTestId('shopping-cart-badge');
    this.cartLink = page.getByTestId('shopping-cart-link');

    this.sortDropdown =
      page.getByTestId('product-sort-container');
  }

  async getProductCount() {
    return await this.inventoryItems.count();
  }

  async addProduct(productName) {
    const product = this.page
      .locator('.inventory_item')
      .filter({ hasText: productName });

    await product
      .locator('button')
      .click();
  }

  async removeProduct(productName) {
    const product = this.page
      .locator('.inventory_item')
      .filter({ hasText: productName });

    await product
      .locator('button')
      .click();
  }

  async getCartCount() {
    if (await this.cartBadge.count() === 0) {
      return 0;
    }

    return Number(await this.cartBadge.textContent());
  }

  async openCart() {
    await this.cartLink.click();
  }

  async sortProducts(value) {
    await this.sortDropdown.selectOption(value);
  }
}

module.exports = { InventoryPage };