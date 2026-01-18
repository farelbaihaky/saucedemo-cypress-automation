import LoginPage from '../../../pages/LoginPage';
import InventoryPage from '../../../pages/InventoryPage';
import CartPage from '../../../pages/CartPage';
import loginData from '../../../fixtures/loginData.json';

describe('Cart Feature - Positive Cases (Remove from Cart)', () => {

    beforeEach(() => {
        LoginPage.visit();
        const { username, password } = loginData.validUser;
        LoginPage.submitLogin(username, password);
    });

    it('Should remove item from inventory page and update badge', () => {
        const item1 = 'Sauce Labs Backpack';
        const item2 = 'Sauce Labs Bike Light';

        // Add items
        InventoryPage.addToCart(item1);
        cy.wait(2000);
        InventoryPage.verifyProductAdded(item1);
        InventoryPage.addToCart(item2);
        cy.wait(2000);
        InventoryPage.verifyProductAdded(item2);

        // Verify badge shows 2 items
        InventoryPage.verifyCartBadge('2');
        cy.wait(2000);

        // Remove one item from inventory page
        InventoryPage.removeFromCart(item1);
        cy.wait(2000);

        // Assertion: Badge should now show 1
        InventoryPage.verifyCartBadge('1');
    });

    it('Should remove item from cart page and verify cart updates', () => {
        const item1 = 'Sauce Labs Backpack';
        const item2 = 'Sauce Labs Bike Light';
        const item3 = 'Sauce Labs Bolt T-Shirt';

        // Add multiple items
        InventoryPage.addToCart(item1);
        InventoryPage.addToCart(item2);
        InventoryPage.addToCart(item3);
        cy.wait(2000);
        InventoryPage.verifyCartBadge('3');

        // Go to cart
        InventoryPage.goToCart();
        cy.wait(2000);

        // Verify all items are in cart
        CartPage.verifyItemInCart(item1);
        CartPage.verifyItemInCart(item2);
        CartPage.verifyItemInCart(item3);

        // Remove one item from cart page
        CartPage.removeFromCart(item2);
        cy.wait(2000);

        // Assertions: Cart should have 2 items now
        CartPage.verifyCartItemCount(2);
        CartPage.verifyItemInCart(item1);
        CartPage.verifyItemInCart(item3);
    });

    it('Should remove all items and verify cart is empty', () => {
        const item = 'Sauce Labs Backpack';

        // Add item
        InventoryPage.addToCart(item);
        cy.wait(2000);
        InventoryPage.verifyCartBadge('1');

        // Go to cart
        InventoryPage.goToCart();
        cy.wait(2000);
        CartPage.verifyItemInCart(item);

        // Remove the item
        CartPage.removeFromCart(item);
        cy.wait(2000);

        // Assertion: Cart should be empty
        CartPage.verifyCartEmpty();
    });
});
