import { signinPage } from '../support/pages/signinPage';
import { catalogPage } from '../support/pages/catalogPage';
import { cartPage } from '../support/pages/cartPage';
import { orderPage } from '../support/pages/orderPage';

const username = 'test101';
const password = 'test101';
const productId1 = 'FI-FW-01';
const itemId1 = 'EST-4';
var newQuantity;

beforeEach('Visit the catalog page.', () => {
    cy.visit(`${Cypress.env('base_url')}` + `${Cypress.env('catalog_url')}`);
})

describe('Scenario 7: Add/update to cart before sign up/sign in.', () => {
    it('Add to cart before sign in)', () => {    
        // Add a product to cart
        catalogPage.clickFishBySideBar();
        catalogPage.clickProductById(productId1);
        catalogPage.addToCartByItemId(itemId1);

        // Submit the order
        cartPage.proceedToCheckout();
        signinPage.loginWith(username, password);
        catalogPage.clickCartMenu();
        cartPage.proceedToCheckout();
        orderPage.createOrder();
        orderPage.confirmOrder();

        // Verify the order is sent successfully
        orderPage.verifyOrderSucceed();
    })

    it('Update to cart before sign in)', () => {

        newQuantity = 2;
        // Add a product to cart
        catalogPage.clickFishBySideBar();
        catalogPage.clickProductById(productId1);
        catalogPage.addToCartByItemId(itemId1);
        cartPage.updateQuantity(itemId1, newQuantity);

        // Submit the order
        cartPage.proceedToCheckout();
        signinPage.loginWith(username, password);
        catalogPage.clickCartMenu();
        cartPage.proceedToCheckout();
        orderPage.createOrder();
        orderPage.confirmOrder();

        // Verify the order is sent successfully
        orderPage.verifyOrderSucceed();
    })
})