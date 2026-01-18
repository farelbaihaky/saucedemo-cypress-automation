import LoginPage from '../../../../pages/LoginPage';
import loginData from '../../../../fixtures/loginData.json';

describe('Login Feature - Validation Tests', () => {

    beforeEach(() => {
        LoginPage.visit();
    });

    it('Should show error when username is empty', () => {
        const { username, password, expectedError } = loginData.validationTests.emptyUsername;
        LoginPage.submitLogin(username, password);
        cy.wait(2000);
        LoginPage.verifyLoginError(expectedError);
    });

    it('Should show error when password is empty', () => {
        const { username, password, expectedError } = loginData.validationTests.emptyPassword;
        LoginPage.submitLogin(username, password);
        cy.wait(2000);
        LoginPage.verifyLoginError(expectedError);
    });

    it('Should show error when both fields are empty', () => {
        const { username, password, expectedError } = loginData.validationTests.bothEmpty;
        LoginPage.submitLogin(username, password);
        cy.wait(2000);
        LoginPage.verifyLoginError(expectedError);
    });

    it('Should trim spaces and fail with invalid credentials', () => {
        const { username, password, expectedError } = loginData.validationTests.usernameWithSpaces;
        LoginPage.submitLogin(username, password);
        cy.wait(2000);
        LoginPage.verifyLoginError(expectedError);
    });
});
