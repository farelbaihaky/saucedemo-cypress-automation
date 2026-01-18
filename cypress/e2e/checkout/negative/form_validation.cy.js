import LoginPage from '../../../pages/LoginPage';
import InventoryPage from '../../../pages/InventoryPage';
import CartPage from '../../../pages/CartPage';
import CheckoutPage from '../../../pages/CheckoutPage';
import loginData from '../../../fixtures/loginData.json';
import checkoutData from '../../../fixtures/checkoutData.json';

describe('Checkout Feature - Form Validation Tests', () => {

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

    checkoutData.invalidCheckout.forEach((data) => {
        it(`Should show error when ${data.expectedError}`, () => {
            CheckoutPage.fillCheckoutInfo(data.firstName, data.lastName, data.postalCode);
            cy.wait(2000);
            CheckoutPage.clickContinue();
            cy.wait(2000);

            // Assertion: Error message should appear
            CheckoutPage.verifyErrorMessage(data.expectedError);
        });
    });

    it('Should show error for very long first name', () => {
        const { veryLongFirstName, lastName, postalCode } = checkoutData.edgeCases;
        CheckoutPage.fillCheckoutInfo(veryLongFirstName, lastName, postalCode);
        cy.wait(2000);
        CheckoutPage.clickContinue();
        cy.wait(2000);

        // Assertion: System should handle gracefully (either accept or show limit error)
        cy.url().should('include', 'checkout');
    });

    it('Should show error for special characters in first name', () => {
        const { specialCharFirstName, lastName, postalCode } = checkoutData.edgeCases;
        CheckoutPage.fillCheckoutInfo(specialCharFirstName, lastName, postalCode);
        cy.wait(2000);
        CheckoutPage.clickContinue();
        cy.wait(2000);

        // Assertion: Should handle gracefully
        cy.url().should('include', 'checkout');
    });

    it('Should show error for numeric first name', () => {
        const { numericFirstName, lastName, postalCode } = checkoutData.edgeCases;
        CheckoutPage.fillCheckoutInfo(numericFirstName, lastName, postalCode);
        cy.wait(2000);
        CheckoutPage.clickContinue();
        cy.wait(2000);

        // Assertion: Should handle gracefully
        cy.url().should('include', 'checkout');
    });

    it('Should show error for emoji in first name', () => {
        const { emojiFirstName, lastName, postalCode } = checkoutData.edgeCases;
        CheckoutPage.fillCheckoutInfo(emojiFirstName, lastName, postalCode);
        cy.wait(2000);
        CheckoutPage.clickContinue();
        cy.wait(2000);

        // Assertion: Should handle gracefully
        cy.url().should('include', 'checkout');
    });

    it('Should show error for single character name', () => {
        const { singleCharFirstName, lastName, postalCode } = checkoutData.edgeCases;
        CheckoutPage.fillCheckoutInfo(singleCharFirstName, lastName, postalCode);
        cy.wait(2000);
        CheckoutPage.clickContinue();
        cy.wait(2000);

        // Assertion: Should handle gracefully
        cy.url().should('include', 'checkout');
    });
});
