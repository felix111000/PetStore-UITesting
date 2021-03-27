/// <reference types="cypress" />

import { catalogPage } from '../support/pages/catalogPage';
import { cartPage } from '../support/pages/cartPage';

const productId1 = 'FI-SW-02';
const itemId1 = 'EST-3';
var newQuantity;
var expectedQuantity;

beforeEach('Visit the catalog page.', () => {
    cy.visit(`${Cypress.env('base_url')}` + `${Cypress.env('catalog_url')}`);
})

describe('Scenario 6: Updating Quantity with boundary values/decimal values.', () => {
    it('Updating Quantity with boundary value 2147483647.', () => {
        // Add first product to cart
        catalogPage.clickFishBySideBar();
        catalogPage.clickProductById(productId1);
        catalogPage.addToCartByItemId(itemId1);

        // Update quantity
        newQuantity = 2147483647;
        cartPage.updateQuantity(itemId1, newQuantity);

        // Verify the quantity again
        expectedQuantity = 2147483647;
        cartPage.verifyQunaity(itemId1, expectedQuantity);
    })

    it('Updating Quantity with boundary value 2147483648.', () => {
        // Add first product to cart
        catalogPage.clickFishBySideBar();
        catalogPage.clickProductById(productId1);
        catalogPage.addToCartByItemId(itemId1);

        // Update quantity
        newQuantity = 2147483648;
        cartPage.updateQuantity(itemId1, newQuantity);

        // Verify the quantity again
        expectedQuantity = 1;
        cartPage.verifyQunaity(itemId1, expectedQuantity);
    })

    it('Updating Quantity with decimal value 1.25.', () => {
        // Add first product to cart
        catalogPage.clickFishBySideBar();
        catalogPage.clickProductById(productId1);
        catalogPage.addToCartByItemId(itemId1);

        // Update quantity
        newQuantity = 1.25;
        cartPage.updateQuantity(itemId1, newQuantity);

        // Verify the quantity again
        expectedQuantity = 1;
        cartPage.verifyQunaity(itemId1, expectedQuantity);
    })

    it('Updating Quantity with negative -1.', () => {
        // Add first product to cart
        catalogPage.clickFishBySideBar();
        catalogPage.clickProductById(productId1);
        catalogPage.addToCartByItemId(itemId1);

        // Update quantity
        newQuantity = -1;
        cartPage.updateQuantity(itemId1, newQuantity);

        // Verify the cart is empty
        cartPage.verifyCartEmpty();
    })
})