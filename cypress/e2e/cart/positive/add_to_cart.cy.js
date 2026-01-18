import LoginPage from '../../../pages/LoginPage';
import InventoryPage from '../../../pages/InventoryPage';
import loginData from '../../../fixtures/loginData.json';

describe('Cart Feature - Positive Cases (Add to Cart)', () => {

    beforeEach(() => {
        LoginPage.visit();
        const { username, password } = loginData.validUser;
        LoginPage.submitLogin(username, password);
    });

    it('Should add multiple items to cart and verify badge', () => {
        const item1 = 'Sauce Labs Backpack';
        const item2 = 'Sauce Labs Bike Light';

        InventoryPage.addToCart(item1);
        cy.wait(2000);
        InventoryPage.verifyProductAdded(item1);

        InventoryPage.addToCart(item2);
        cy.wait(2000);
        InventoryPage.verifyProductAdded(item2);

        // Assertion: Badge should show 2 items
        InventoryPage.verifyCartBadge('2');
    });
});
