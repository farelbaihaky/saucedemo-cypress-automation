import LoginPage from '../../../pages/LoginPage';
import InventoryPage from '../../../pages/InventoryPage';
import CartPage from '../../../pages/CartPage';
import CheckoutPage from '../../../pages/CheckoutPage';
import loginData from '../../../fixtures/loginData.json';
import checkoutData from '../../../fixtures/checkoutData.json';

describe('Checkout Feature - Positive Cases', () => {

    beforeEach(() => {
        LoginPage.visit();
        const { username, password } = loginData.validUser;
        LoginPage.submitLogin(username, password);

        // Add items to cart
        InventoryPage.addToCart('Sauce Labs Backpack');
        InventoryPage.addToCart('Sauce Labs Bike Light');
        InventoryPage.goToCart();
    });

    it('Should complete checkout with valid information', () => {
        const { firstName, lastName, postalCode } = checkoutData.validCheckout;

        // Verify items in cart
        CartPage.verifyItemInCart('Sauce Labs Backpack');
        CartPage.verifyItemInCart('Sauce Labs Bike Light');
        cy.wait(2000);

        // Proceed to checkout
        CartPage.clickCheckout();
        cy.wait(2000);

        // Fill checkout information
        cy.url().should('include', '/checkout-step-one.html');
        CheckoutPage.fillCheckoutInfo(firstName, lastName, postalCode);
        cy.wait(2000);
        CheckoutPage.clickContinue();
        cy.wait(2000);

        // Verify checkout overview
        CheckoutPage.verifyCheckoutOverview();
        CheckoutPage.verifyItemInOverview('Sauce Labs Backpack');
        CheckoutPage.verifyItemInOverview('Sauce Labs Bike Light');
        cy.wait(2000);

        // Complete checkout
        CheckoutPage.finishCheckout();
        cy.wait(2000);
        CheckoutPage.verifyOrderComplete();
    });
});
