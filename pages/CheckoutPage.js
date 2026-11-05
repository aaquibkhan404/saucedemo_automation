class CheckoutPage {

  constructor(page) {
    this.page = page;

    this.firstName = page.getByTestId('firstName');
    this.lastName = page.getByTestId('lastName');
    this.postalCode = page.getByTestId('postalCode');

    this.continueButton = page.getByTestId('continue');
    this.finishButton = page.getByTestId('finish');

    this.errorMessage = page.getByTestId('error');

    this.confirmationMessage =
      page.getByTestId('complete-header');
  }

  async enterCustomerDetails(customer) {
    await this.firstName.fill(customer.firstName);
    await this.lastName.fill(customer.lastName);
    await this.postalCode.fill(customer.postalCode);
  }

  async continueCheckout() {
    await this.continueButton.click();
  }

  async finishCheckout() {
    await this.finishButton.click();
  }

  async getConfirmationMessage() {
    return await this.confirmationMessage.textContent();
  }

  async getErrorMessage() {
    return await this.errorMessage.textContent();
  }
}

module.exports = { CheckoutPage };