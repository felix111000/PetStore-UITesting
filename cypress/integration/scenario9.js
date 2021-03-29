import { signinPage } from '../support/pages/signinPage';
import { catalogPage } from '../support/pages/catalogPage';
import { cartPage } from '../support/pages/cartPage';

const username = 'test101';
const password = 'test101';
const productId1 = 'FI-FW-02';
const itemId1 = 'EST-20';
var expectedItemNumber;
var newQuantity;

beforeEach('Visit the catalog page.', () => {
    cy.visit(`${Cypress.env('base_url')}` + `${Cypress.env('catalog_url')}`);
})

describe('Scenario 9: Account locked out after adding/updating items to cart.', () => {
    it('Add a product to cart and proceed to check out.)', () => {    
        // Add a product to cart
        catalogPage.clickFishBySideBar();
        catalogPage.clickProductById(productId1);
        catalogPage.addToCartByItemId(itemId1);

        // Verify the item number
        expectedItemNumber = 1;
        cartPage.verifyItemNumber(expectedItemNumber);

        // Submit the order
        cartPage.proceedToCheckout();

        // Verify that the must sign on message was displayed
        signinPage.verifyMustSignonMessage();

        // Logon with valid user and go to cart again
        signinPage.loginWith(username, password);
        catalogPage.clickCartMenu();

        // Verify the item number again
        cartPage.verifyItemNumber(expectedItemNumber);
    })

    it('Add a product to cart and update the quantity and then proceed to check out.)', () => {
        // Add a product to cart
        catalogPage.clickFishBySideBar();
        catalogPage.clickProductById(productId1);
        catalogPage.addToCartByItemId(itemId1);

        // Update the quantity to 2
        newQuantity = 2;
        cartPage.updateQuantity(itemId1, newQuantity);

        // Verify the item number
        expectedItemNumber = 1;
        cartPage.verifyItemNumber(expectedItemNumber);
    
        // Submit the order
        cartPage.proceedToCheckout();

        // Verify that the must sign on message was displayed
        signinPage.verifyMustSignonMessage();

        // Logon with valid user and go to cart again
        signinPage.loginWith(username, password);
        catalogPage.clickCartMenu();

        // Verify the item number again
        cartPage.verifyItemNumber(expectedItemNumber);
    })
})