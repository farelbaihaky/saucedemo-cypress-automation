import LoginPage from '../../../../pages/LoginPage';
import loginData from '../../../../fixtures/loginData.json';

describe('Logout Feature - Unauthorized Access Tests', () => {

    it('Should redirect to login when accessing inventory without authentication', () => {
        cy.visit('/inventory.html');
        cy.wait(2000);

        // Assertion: Should redirect to login page
        cy.url().should('eq', 'https://www.saucedemo.com/');
        LoginPage.elements.loginBtn().should('be.visible');
    });

    it('Should redirect to login when accessing cart without authentication', () => {
        cy.visit('/cart.html');
        cy.wait(2000);

        // Assertion: Should redirect to login page
        cy.url().should('eq', 'https://www.saucedemo.com/');
        LoginPage.elements.loginBtn().should('be.visible');
    });

    it('Should redirect to login when accessing checkout without authentication', () => {
        cy.visit('/checkout-step-one.html');
        cy.wait(2000);

        // Assertion: Should redirect to login page
        cy.url().should('eq', 'https://www.saucedemo.com/');
        LoginPage.elements.loginBtn().should('be.visible');
    });

    it('Should not allow back button navigation after logout', () => {
        // Login first
        LoginPage.visit();
        const { username, password } = loginData.validUser;
        LoginPage.submitLogin(username, password);
        cy.wait(2000);
        LoginPage.verifyLoginSuccess();

        // Logout
        cy.get('#react-burger-menu-btn').click();
        cy.get('#logout_sidebar_link').should('be.visible').click();
        cy.wait(2000);

        // Try to go back
        cy.go('back');
        cy.wait(2000);

        // Assertion: Should be redirected back to login
        cy.url().should('eq', 'https://www.saucedemo.com/');
    });
});
