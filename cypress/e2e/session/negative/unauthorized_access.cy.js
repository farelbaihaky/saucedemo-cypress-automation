describe('Session Management - Unauthorized Access Tests', () => {

    it('Should redirect to login when accessing protected pages without authentication', () => {
        const protectedPages = [
            '/inventory.html',
            '/cart.html',
            '/checkout-step-one.html',
            '/checkout-step-two.html',
            '/checkout-complete.html'
        ];

        protectedPages.forEach((page) => {
            cy.visit(page, { failOnStatusCode: false });
            cy.wait(2000);

            // Assertion: Should redirect to login page
            cy.url().should('eq', 'https://www.saucedemo.com/');
            cy.get('#login-button').should('be.visible');
        });
    });

    it('Should not allow direct URL manipulation to skip checkout steps', () => {
        // Try to access checkout complete page directly
        cy.visit('/checkout-complete.html', { failOnStatusCode: false });
        cy.wait(2000);

        // Assertion: Should redirect to login
        cy.url().should('eq', 'https://www.saucedemo.com/');
    });
});
