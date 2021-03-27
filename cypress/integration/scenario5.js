import { catalogPage } from '../support/pages/catalogPage';
import { cartPage } from '../support/pages/cartPage';

const productId1 = 'K9-DL-01';
const itemId1 = 'EST-9';
var expectedQuantity;

describe('Scenario 5: Updating quantity of items in the cart.', () => {
    it('Add to cart 2 dogs and then update quantity to 3.', () => {
        // Visit catalog page
        cy.visit(`${Cypress.env('base_url')}` + `${Cypress.env('catalog_url')}`);

        // Add first product to cart
        catalogPage.clickDogsBySideBar();
        catalogPage.clickProductById(productId1);
        catalogPage.addToCartByItemId(itemId1);
        cartPage.returnToMainMenu();

        // Add second product to cart
        catalogPage.clickDogsBySideBar();
        catalogPage.clickProductById(productId1);
        catalogPage.addToCartByItemId(itemId1);

        // Verify the quantity
        expectedQuantity = 2;
        cartPage.verifyQunaity(itemId1, expectedQuantity);

        // Update quantity
        const newQuantity = 3;
        cartPage.updateQuantity(itemId1, newQuantity);

        // Verify the quantity again
        expectedQuantity = 3;
        cartPage.verifyQunaity(itemId1, expectedQuantity);
    })
})

