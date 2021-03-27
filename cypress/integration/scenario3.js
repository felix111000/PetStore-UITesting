/// <reference types="cypress" />

import { catalogPage } from '../support/pages/catalogPage';
import { cartPage } from '../support/pages/cartPage';

const productId1 = "FI-SW-01";
const itemId1 = "EST-1";
const productId2 = "K9-BD-01";
const itemId2 = "EST-6";
const productId3 = "FL-DSH-01";
const itemId3 = "EST-14";

describe('Scenario 3: Add 3 products to cart.', () => {
    it('Adding 3 products to a cart and then removing 2 products', () => {
        // Visit catalog page
        cy.visit(`${Cypress.env('base_url')}` + `${Cypress.env('catalog_url')}`);

        // Add first product to cart
        catalogPage.clickFishBySideBar();
        catalogPage.clickProductById(productId1);
        catalogPage.addToCartByItemId(itemId1);
        cartPage.returnToMainMenu();

        // Add second product to cart
        catalogPage.clickDogsBySideBar();
        catalogPage.clickProductById(productId2);
        catalogPage.addToCartByItemId(itemId2);
        cartPage.returnToMainMenu();
        
        // Add third product to cart
        catalogPage.clickCatsBySideBar();
        catalogPage.clickProductById(productId3);
        catalogPage.addToCartByItemId(itemId3);
        
        // Verify the item number is 3 in the cart
        var expectedNumber = 3;
        cartPage.verifyItemNumber(expectedNumber);

        // Remove 2 products
        cartPage.removeItemFromCart(itemId1);
        cartPage.removeItemFromCart(itemId2);

        // Verify the item number is 1 in the cart
        expectedNumber = 1;
        cartPage.verifyItemNumber(expectedNumber);
    })
})