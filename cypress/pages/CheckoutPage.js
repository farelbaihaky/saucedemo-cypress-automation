class CheckoutPage {
    elements = {
        firstNameInput: () => cy.get('#first-name'),
        lastNameInput: () => cy.get('#last-name'),
        postalCodeInput: () => cy.get('#postal-code'),
        continueBtn: () => cy.get('#continue'),
        cancelBtn: () => cy.get('#cancel'),
        errorMessage: () => cy.get('[data-test="error"]'),
        finishBtn: () => cy.get('#finish'),
        completeHeader: () => cy.get('.complete-header'),
        completeText: () => cy.get('.complete-text'),
        summaryTotal: () => cy.get('.summary_total_label'),
        summarySubtotal: () => cy.get('.summary_subtotal_label'),
        itemNames: () => cy.get('.inventory_item_name')
    };

    fillCheckoutInfo(firstName, lastName, postalCode) {
        if (firstName) this.elements.firstNameInput().clear().type(firstName);
        if (lastName) this.elements.lastNameInput().clear().type(lastName);
        if (postalCode) this.elements.postalCodeInput().clear().type(postalCode);
    }

    clickContinue() {
        this.elements.continueBtn().click();
    }

    verifyCheckoutOverview() {
        cy.url().should('include', '/checkout-step-two.html');
        this.elements.summaryTotal().should('be.visible');
    }

    verifyItemInOverview(productName) {
        this.elements.itemNames().should('contain.text', productName);
    }

    finishCheckout() {
        this.elements.finishBtn().click();
    }

    verifyOrderComplete() {
        cy.url().should('include', '/checkout-complete.html');
        this.elements.completeHeader()
            .should('be.visible')
            .and('contain.text', 'Thank you for your order!');
    }

    verifyErrorMessage(expectedMessage) {
        this.elements.errorMessage()
            .should('be.visible')
            .and('contain.text', expectedMessage);
    }
}

export default new CheckoutPage();
