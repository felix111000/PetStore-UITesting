import { catalogPage } from '../support/pages/catalogPage';
import { itemPage } from '../support/pages/itemPage';

const productId1 = "RP-SN-01";
const itemId1 = "EST-11";
var expectedPrice;

describe('Scenario 8: Validating Prices.', () => {
    it('Validate the price in item page.', () => {
        expectedPrice = '18.50';

        // Visit catalog page
        cy.visit(`${Cypress.env('base_url')}` + `${Cypress.env('catalog_url')}`);

        // Go to item page
        catalogPage.clickReptilesBySideBar();
        catalogPage.clickProductById(productId1);
        catalogPage.clickItemById(itemId1);

        // Verify the price
        itemPage.verifyPrice(expectedPrice);
    })
})