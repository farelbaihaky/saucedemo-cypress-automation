class InventoryPage {
    elements = {
        burgerMenuBtn: () => cy.get('#react-burger-menu-btn'),
        logoutLink: () => cy.get('#logout_sidebar_link'),
        shoppingCartBadge: () => cy.get('.shopping_cart_badge'),
        inventoryItems: () => cy.get('.inventory_item'),
        cartLink: () => cy.get('.shopping_cart_link'),
        sortDropdown: () => cy.get('.product_sort_container'),
        productNames: () => cy.get('.inventory_item_name')
    };

    addToCart(productName) {
        this.elements.inventoryItems()
            .contains(productName)
            .parents('.inventory_item')
            .find('button')
            .contains('Add to cart')
            .click();
    }

    logout() {
        this.elements.burgerMenuBtn().click();
        this.elements.logoutLink().should('be.visible').click();
    }

    verifyCartBadge(expectedCount) {
        this.elements.shoppingCartBadge().should('be.visible').and('contain.text', expectedCount);
    }

    verifyProductAdded(productName) {
        this.elements.inventoryItems()
            .contains(productName)
            .parents('.inventory_item')
            .find('button')
            .should('contain.text', 'Remove');
    }

    goToCart() {
        this.elements.cartLink().click();
    }

    sortProducts(option) {
        this.elements.sortDropdown().select(option);
    }

    getProductNames() {
        return this.elements.productNames().then($els => {
            return [...$els].map(el => el.innerText);
        });
    }

    verifyFirstProductName(expectedName) {
        this.elements.productNames().first().should('contain.text', expectedName);
    }

    removeFromCart(productName) {
        this.elements.inventoryItems()
            .contains(productName)
            .parents('.inventory_item')
            .find('button')
            .contains('Remove')
            .click();
    }
}

export default new InventoryPage();
