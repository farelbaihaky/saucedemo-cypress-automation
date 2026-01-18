import LoginPage from '../../../pages/LoginPage';
import InventoryPage from '../../../pages/InventoryPage';
import CartPage from '../../../pages/CartPage';
import loginData from '../../../fixtures/loginData.json';

describe('Checkout Feature - Empty Cart Checkout', () => {

    beforeEach(() => {
        LoginPage.visit();
        const { username, password } = loginData.validUser;
        LoginPage.submitLogin(username, password);
    });

    it('Should allow navigation to cart with empty cart', () => {
        InventoryPage.goToCart();
        cy.wait(2000);

        // Assertion: Should be on cart page
        cy.url().should('include', '/cart.html');
        CartPage.verifyCartEmpty();
    });

    it('Should allow checkout button click even with empty cart', () => {
        InventoryPage.goToCart();
        cy.wait(2000);

        // Click checkout with empty cart
        cy.get('#checkout').should('be.visible').click();
        cy.wait(2000);

        // Assertion: System allows proceeding (SauceDemo doesn't prevent this)
        cy.url().should('include', 'checkout-step-one.html');
    });

    it('Should show no items in overview when checking out with empty cart', () => {
        InventoryPage.goToCart();
        CartPage.clickCheckout();
        cy.wait(2000);

        // Fill form and proceed
        cy.get('#first-name').type('John');
        cy.get('#last-name').type('Doe');
        cy.get('#postal-code').type('12345');
        cy.get('#continue').click();
        cy.wait(2000);

        // Assertion: Should show overview with no items
        cy.url().should('include', 'checkout-step-two.html');
        cy.get('.cart_item').should('not.exist');
    });
});
