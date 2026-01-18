import LoginPage from '../../../pages/LoginPage';
import CartPage from '../../../pages/CartPage';
import loginData from '../../../fixtures/loginData.json';

describe('Cart Feature - Negative Cases (Empty Cart)', () => {

    beforeEach(() => {
        LoginPage.visit();
        const { username, password } = loginData.validUser;
        LoginPage.submitLogin(username, password);
    });

    it('Should display empty cart message when no items added', () => {
        cy.get('.shopping_cart_link').click();
        cy.wait(2000);

        // Assertion: Cart should be empty
        CartPage.verifyCartEmpty();

        // Checkout button should still be visible but cart is empty
        cy.get('#checkout').should('be.visible');
    });

    it('Should not display cart badge when cart is empty', () => {
        // Assertion: Badge should not exist
        cy.get('.shopping_cart_badge').should('not.exist');
    });

    it('Should allow navigation to empty cart page', () => {
        // Navigate to cart via icon click (not direct URL)
        cy.get('.shopping_cart_link').click();
        cy.wait(2000);

        // Assertion: Should be on cart page even when empty
        cy.url().should('include', '/cart.html');
        CartPage.verifyCartEmpty();
    });
});
