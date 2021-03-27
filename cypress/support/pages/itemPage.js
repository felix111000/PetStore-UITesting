const getSourceId = () => {
    return "#Catalog";
};

export class ItemPage {
    addToCartByItemId(itemId) {
        cy.get(`${getSourceId()} a[href*="workingItemId=${itemId}"]`).contains(`Add to Cart`)
            .click();
    }

    verifyPrice(expectedPrice) {
        cy.get(`${getSourceId()} tr>td`).eq(5)
            .should('have.text', '$' + expectedPrice.toString());
    }
}

export const itemPage = new ItemPage();