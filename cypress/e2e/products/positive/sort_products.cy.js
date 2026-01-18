import LoginPage from '../../../pages/LoginPage';
import InventoryPage from '../../../pages/InventoryPage';
import loginData from '../../../fixtures/loginData.json';

describe('Products Feature - Positive Cases (Sorting)', () => {

    beforeEach(() => {
        LoginPage.visit();
        const { username, password } = loginData.validUser;
        LoginPage.submitLogin(username, password);
    });

    it('Should sort products A to Z (Name)', () => {
        InventoryPage.sortProducts('az');
        cy.wait(2000);

        // Assertion: First product should be "Sauce Labs Backpack"
        InventoryPage.verifyFirstProductName('Sauce Labs Backpack');
    });

    it('Should sort products Z to A (Name)', () => {
        InventoryPage.sortProducts('za');
        cy.wait(2000);

        // Assertion: First product should start with "Test.allTheThings()"
        InventoryPage.verifyFirstProductName('Test.allTheThings()');
    });

    it('Should sort products by price low to high', () => {
        InventoryPage.sortProducts('lohi');
        cy.wait(2000);

        // Assertion: First product should be "Sauce Labs Onesie" (cheapest)
        InventoryPage.verifyFirstProductName('Sauce Labs Onesie');
    });

    it('Should sort products by price high to low', () => {
        InventoryPage.sortProducts('hilo');
        cy.wait(2000);

        // Assertion: First product should be "Sauce Labs Fleece Jacket" (most expensive)
        InventoryPage.verifyFirstProductName('Sauce Labs Fleece Jacket');
    });

    it('Should verify product order changes after sorting', () => {
        // Get initial product names
        InventoryPage.getProductNames().then((initialNames) => {

            // Sort Z to A
            InventoryPage.sortProducts('za');
            cy.wait(2000);

            // Get new product names
            InventoryPage.getProductNames().then((sortedNames) => {
                // Assertion: Order should be different
                expect(sortedNames).to.not.deep.equal(initialNames);

                // Assertion: First should be last and vice versa
                expect(sortedNames[0]).to.equal(initialNames[initialNames.length - 1]);
            });
        });
    });
});
