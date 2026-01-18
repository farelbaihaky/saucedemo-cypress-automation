import LoginPage from '../../../../pages/LoginPage';
import loginData from '../../../../fixtures/loginData.json';

describe('Login Feature - Security Tests', () => {

    beforeEach(() => {
        LoginPage.visit();
    });

    it('Should prevent SQL injection in login form', () => {
        const { username, password, expectedError } = loginData.securityTests.sqlInjection;
        LoginPage.submitLogin(username, password);
        cy.wait(2000);
        LoginPage.verifyLoginError(expectedError);

        // Assertion: Should not bypass authentication
        cy.url().should('not.include', '/inventory.html');
    });

    it('Should prevent XSS injection in login form', () => {
        const { username, password, expectedError } = loginData.securityTests.xssInjection;
        LoginPage.submitLogin(username, password);
        cy.wait(2000);
        LoginPage.verifyLoginError(expectedError);

        // Assertion: Script should not execute
        cy.get('body').should('not.contain', 'XSS');
    });

    it('Should handle very long username gracefully', () => {
        const { username, password, expectedError } = loginData.securityTests.veryLongUsername;
        LoginPage.submitLogin(username, password);
        cy.wait(2000);
        LoginPage.verifyLoginError(expectedError);
    });

    it('Should handle special characters in credentials', () => {
        const { username, password, expectedError } = loginData.securityTests.specialCharacters;
        LoginPage.submitLogin(username, password);
        cy.wait(2000);
        LoginPage.verifyLoginError(expectedError);
    });

    it('Should handle numeric-only username', () => {
        const { username, password, expectedError } = loginData.edgeCases.numericUsername;
        LoginPage.submitLogin(username, password);
        cy.wait(2000);
        LoginPage.verifyLoginError(expectedError);
    });

    it('Should handle emoji in credentials', () => {
        const { username, password, expectedError } = loginData.edgeCases.emojiUsername;
        LoginPage.submitLogin(username, password);
        cy.wait(2000);
        LoginPage.verifyLoginError(expectedError);
    });
});
