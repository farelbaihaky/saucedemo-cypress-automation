class CartPage {
    elements = {
        cartItems: () => cy.get('.cart_item'),
        cartItemNames: () => cy.get('.inventory_item_name'),
        checkoutBtn: () => cy.get('#checkout'),
        continueShoppingBtn: () => cy.get('#continue-shopping'),
        removeButtons: () => cy.get('button[id^="remove-"]')
    };

    visit() {
        cy.get('.shopping_cart_link').click();
    }

    verifyItemInCart(productName) {
        this.elements.cartItemNames()
            .should('contain.text', productName);
    }

    removeFromCart(productName) {
        this.elements.cartItems()
            .contains('.inventory_item_name', productName)
            .parents('.cart_item')
            .find('button')
            .click();
    }

    clickCheckout() {
        this.elements.checkoutBtn().click();
    }

    getCartItemCount() {
        return this.elements.cartItems().its('length');
    }

    verifyCartEmpty() {
        this.elements.cartItems().should('not.exist');
    }

    verifyCartItemCount(expectedCount) {
        if (expectedCount === 0) {
            this.verifyCartEmpty();
        } else {
            this.elements.cartItems().should('have.length', expectedCount);
        }
    }
}

export default new CartPage();
