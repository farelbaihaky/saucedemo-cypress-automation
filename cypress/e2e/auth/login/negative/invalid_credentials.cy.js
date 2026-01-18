import LoginPage from '../../../../pages/LoginPage';
import loginData from '../../../../fixtures/loginData.json';

describe('Login Feature - Invalid Credentials', () => {

    beforeEach(() => {
        LoginPage.visit();
    });

    loginData.invalidUsers.forEach((user) => {
        it(`Should show error for user: ${user.username}`, () => {
            LoginPage.submitLogin(user.username, user.password);
            cy.wait(2000);
            LoginPage.verifyLoginError(user.expectedError);
        });
    });
});
