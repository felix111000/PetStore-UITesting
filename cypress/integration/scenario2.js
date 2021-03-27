/// <reference types="cypress" />

import { signinPage } from '../support/pages/signinPage';
import { catalogPage } from '../support/pages/catalogPage';
import { cartPage } from '../support/pages/cartPage';
import { orderPage } from '../support/pages/orderPage';

const username = 'test101';
const password = 'test101';
const productId1 = 'FI-SW-01';
const itemId1 = 'EST-1';
const productId2 = 'FL-DSH-01';
const itemId2 = 'EST-14';
const productId3 = 'AV-CB-01';
const itemId3 = 'EST-18';

describe('Scenario 2: Purchasing 3 Products.', () => {
    it('Successful End-to-end customer journey of purchasing 3 Products. (one fish, one cat and one bird)', () => {
        // Sign in existing user
		cy.visit(`${Cypress.env('base_url')}` + `${Cypress.env('login_url')}`);
		signinPage.loginWith(username, password);

        // Add first product to cart
        catalogPage.clickFishBySideBar();
        catalogPage.clickProductById(productId1);
        catalogPage.addToCartByItemId(itemId1);
        cartPage.returnToMainMenu();

        // Add second product to cart
        catalogPage.clickCatsBySideBar();
        catalogPage.clickProductById(productId2);
        catalogPage.addToCartByItemId(itemId2);
        cartPage.returnToMainMenu();
        
        // Add third product to cart
        catalogPage.clickBirdsBySideBar();
        catalogPage.clickProductById(productId3);
        catalogPage.addToCartByItemId(itemId3);

        // Submit the order
        cartPage.proceedToCheckout();
        orderPage.createOrder();
        orderPage.confirmOrder();
        orderPage.verifyOrderSucceed();
    })
})