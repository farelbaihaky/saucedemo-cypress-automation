import LoginPage from '../../../../pages/LoginPage';
import InventoryPage from '../../../../pages/InventoryPage';
import loginData from '../../../../fixtures/loginData.json';

describe('Logout Feature - Positive Cases', () => {

    beforeEach(() => {
        LoginPage.visit();
        const { username, password } = loginData.validUser;
        LoginPage.submitLogin(username, password);
        LoginPage.verifyLoginSuccess();
    });

    it('Should logout successfully from inventory page', () => {
        InventoryPage.logout();
        cy.wait(2000);

        // Assertions
        cy.url().should('eq', 'https://www.saucedemo.com/');
        LoginPage.elements.loginBtn().should('be.visible');
    });
});
