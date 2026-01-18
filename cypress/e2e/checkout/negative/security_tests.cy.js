import LoginPage from '../../../pages/LoginPage';
import InventoryPage from '../../../pages/InventoryPage';
import CartPage from '../../../pages/CartPage';
import CheckoutPage from '../../../pages/CheckoutPage';
import loginData from '../../../fixtures/loginData.json';
import checkoutData from '../../../fixtures/checkoutData.json';

describe('Checkout Feature - Security Tests', () => {

    beforeEach(() => {
        LoginPage.visit();
        const { username, password } = loginData.validUser;
        LoginPage.submitLogin(username, password);

        // Add items and go to checkout
        InventoryPage.addToCart('Sauce Labs Backpack');
        InventoryPage.goToCart();
        CartPage.clickCheckout();
        cy.wait(2000);
    });

    it('Should prevent SQL injection in checkout form', () => {
        const { sqlInjectionFirstName, lastName, postalCode } = checkoutData.securityTests;
        CheckoutPage.fillCheckoutInfo(sqlInjectionFirstName, lastName, postalCode);
        cy.wait(2000);
        CheckoutPage.clickContinue();
        cy.wait(2000);

        // Assertion: Should not cause SQL errors or bypass validation
        cy.url().should('include', 'checkout');
    });

    it('Should prevent XSS injection in checkout form', () => {
        const { xssFirstName, lastName, postalCode } = checkoutData.securityTests;
        CheckoutPage.fillCheckoutInfo(xssFirstName, lastName, postalCode);
        cy.wait(2000);
        CheckoutPage.clickContinue();
        cy.wait(2000);

        // Assertion: Script should not execute
        cy.get('body').should('not.contain', 'XSS');
        cy.url().should('include', 'checkout');
    });

    it('Should prevent HTML injection in checkout form', () => {
        const { htmlFirstName, lastName, postalCode } = checkoutData.edgeCases;
        CheckoutPage.fillCheckoutInfo(htmlFirstName, lastName, postalCode);
        cy.wait(2000);
        CheckoutPage.clickContinue();
        cy.wait(2000);

        // Assertion: HTML should be escaped or rejected
        cy.url().should('include', 'checkout');
    });

    it('Should prevent path traversal in postal code', () => {
        const { pathTraversalPostalCode, lastName } = checkoutData.securityTests;
        CheckoutPage.fillCheckoutInfo('John', lastName, pathTraversalPostalCode);
        cy.wait(2000);
        CheckoutPage.clickContinue();
        cy.wait(2000);

        // Assertion: Should handle gracefully
        cy.url().should('include', 'checkout');
    });
});
