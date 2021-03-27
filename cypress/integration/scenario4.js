/// <reference types="cypress" />

import { searchPage } from '../support/pages/searchPage';

var searchText;
var expectedItemNumber;

beforeEach('Visit the catalog page.', () => {
    cy.visit(`${Cypress.env('base_url')}` + `${Cypress.env('catalog_url')}`);
})

describe('Scenario 4: Searching for products', () => {
    it('Search a valid product name.', () => {
        searchText = 'Retriever';
        expectedItemNumber = 2;

        // Input text and click search button
        searchPage.searchProduct(searchText);
    
        // Verify the expected row count which searched
        searchPage.verifyItemNumber(expectedItemNumber);
    })

    it('Search a invalid product name.', () => {
        searchText = 'test';
        expectedItemNumber = 0;

        // Input text and click search button
        searchPage.searchProduct(searchText);
    
        // Verify the expected row count which searched
        searchPage.verifyItemNumber(expectedItemNumber);
    })
})
