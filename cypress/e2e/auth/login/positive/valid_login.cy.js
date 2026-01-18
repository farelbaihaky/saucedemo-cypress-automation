import LoginPage from '../../../../pages/LoginPage';
import loginData from '../../../../fixtures/loginData.json';

describe('Login Feature - Positive Cases', () => {

    beforeEach(() => {
        LoginPage.visit();
    });

    it('Should login successfully with valid credentials', () => {
        const { username, password } = loginData.validUser;

        LoginPage.submitLogin(username, password);
        cy.wait(2000);
        LoginPage.verifyLoginSuccess();
    });
});
