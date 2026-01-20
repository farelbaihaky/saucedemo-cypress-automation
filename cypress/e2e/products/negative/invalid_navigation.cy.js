import LoginPage from '../../../pages/LoginPage';
import loginData from '../../../fixtures/loginData.json';

describe('Products Feature - Negative Cases (Invalid Navigation)', () => {

    beforeEach(() => {
        LoginPage.visit();
        const { username, password } = loginData.validUser;
        LoginPage.submitLogin(username, password);
    });

    it('Should handle navigation to product details and back', () => {
        // Click on first product
        cy.get('.inventory_item_name').first().click();
        cy.wait(2000);

        // Assertion: Should be on product details page
        cy.url().should('include', 'inventory-item.html');

        // Navigate back
        cy.get('#back-to-products').click();
        cy.wait(2000);

        // Assertion: Should be back on inventory page
        cy.url().should('include', '/inventory.html');
    });

    it('Should display all 6 products on inventory page', () => {
        // Assertion: Should have exactly 6 products
        cy.get('.inventory_item').should('have.length', 6);
    });

    it('Should display product images correctly', () => {
        // Assertion: All product images should be visible
        cy.get('.inventory_item_img img').should('have.length', 6);
        cy.get('.inventory_item_img img').each(($img) => {
            cy.wrap($img).should('be.visible');
        });
    });

    it('Should display product prices for all items', () => {
        // Assertion: All products should have prices
        cy.get('.inventory_item_price').should('have.length', 6);
        cy.get('.inventory_item_price').each(($price) => {
            cy.wrap($price).should('contain', '$');
        });
    });
});
