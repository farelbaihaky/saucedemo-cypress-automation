import LoginPage from '../../../pages/LoginPage';
import InventoryPage from '../../../pages/InventoryPage';
import loginData from '../../../fixtures/loginData.json';

describe('Cart Feature - Negative Cases (Edge Cases)', () => {

    beforeEach(() => {
        LoginPage.visit();
        const { username, password } = loginData.validUser;
        LoginPage.submitLogin(username, password);
    });

    it('Should handle adding all products to cart (maximum capacity)', () => {
        // Add all 6 products
        const products = [
            'Sauce Labs Backpack',
            'Sauce Labs Bike Light',
            'Sauce Labs Bolt T-Shirt',
            'Sauce Labs Fleece Jacket',
            'Sauce Labs Onesie',
            'Test.allTheThings() T-Shirt (Red)'
        ];

        products.forEach((product) => {
            InventoryPage.addToCart(product);
        });
        cy.wait(2000);

        // Assertion: Badge should show 6 items
        InventoryPage.verifyCartBadge('6');

        // All add buttons should be changed to remove
        products.forEach((product) => {
            InventoryPage.verifyProductAdded(product);
        });
    });

    it('Should update badge correctly after rapid add/remove', () => {
        const item = 'Sauce Labs Backpack';

        // Rapid add/remove
        InventoryPage.addToCart(item);
        InventoryPage.verifyProductAdded(item);
        InventoryPage.verifyCartBadge('1');

        InventoryPage.removeFromCart(item);
        cy.wait(2000);

        // Assertion: Badge should disappear
        cy.get('.shopping_cart_badge').should('not.exist');

        // Add again
        InventoryPage.addToCart(item);
        cy.wait(2000);

        // Assertion: Badge should show 1 again
        InventoryPage.verifyCartBadge('1');
    });

    it('Should maintain cart state when navigating between pages', () => {
        const item1 = 'Sauce Labs Backpack';
        const item2 = 'Sauce Labs Bike Light';

        InventoryPage.addToCart(item1);
        InventoryPage.addToCart(item2);
        cy.wait(2000);
        InventoryPage.verifyCartBadge('2');

        // Navigate to product details
        cy.get('.inventory_item_name').first().click();
        cy.wait(2000);

        // Assertion: Badge should persist
        InventoryPage.verifyCartBadge('2');

        // Navigate back
        cy.get('#back-to-products').click();
        cy.wait(2000);

        // Assertion: Badge should still show 2
        InventoryPage.verifyCartBadge('2');
    });
});
