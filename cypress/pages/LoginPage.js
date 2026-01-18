class LoginPage {
    elements = {
        usernameInput: () => cy.get('#user-name'),
        passwordInput: () => cy.get('#password'),
        loginBtn: () => cy.get('#login-button'),
        errorMessage: () => cy.get('[data-test="error"]'),
        inventoryList: () => cy.get('.inventory_list')
    };

    visit() {
        cy.visit('/');
    }

    submitLogin(username, password) {
        if (username) {
            this.elements.usernameInput().clear().type(username);
        } else {
            this.elements.usernameInput().clear();
        }

        if (password) {
            this.elements.passwordInput().clear().type(password);
        } else {
            this.elements.passwordInput().clear();
        }

        this.elements.loginBtn().click();
    }

    verifyLoginSuccess() {
        cy.url().should('include', '/inventory.html');
        this.elements.inventoryList().should('be.visible');
    }

    verifyLoginError(expectedMessage) {
        this.elements.errorMessage().should('be.visible').and('contain.text', expectedMessage);
    }
}

export default new LoginPage();
