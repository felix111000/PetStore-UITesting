import { catalogPage } from '../support/pages/catalogPage';
import { itemPage } from '../support/pages/itemPage';
import { searchPage } from '../support/pages/searchPage';

const productId1 = 'K9-RT-01';
const itemId1 = 'EST-28';
var expectedTag;
var searchText;

beforeEach('Visit the catalog page.', () => {
    cy.visit(`${Cypress.env('base_url')}` + `${Cypress.env('catalog_url')}`);
})

describe('Scenario 10: Are Images loading correctly and do they have correct tags.', () => {
    it('Go to an item page and verify the image and tag.)', () => {    
        // Go to an item page
        catalogPage.clickDogsBySideBar();
        catalogPage.clickProductById(productId1);
        catalogPage.clickItemById(itemId1);

        // Verify the image and tag
        expectedTag = 'Great family dog';
        itemPage.verifyImageLoad();
        itemPage.verifyTag(expectedTag);
    })

    it('Search products and verify the images and tags.)', () => {    
        // Search products by name
        searchText = 'Retriever';
        searchPage.searchProduct(searchText);

        // Verify the image and tag
        searchPage.verifyImageLoad();
        searchPage.verifyTag(1, expectedTag);
        expectedTag = 'Great hunting dog';
        searchPage.verifyTag(2, expectedTag);
    })
})