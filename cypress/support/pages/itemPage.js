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

    verifyImageLoad() {
        cy.get(`${getSourceId()} tr>td`).find(`img`)
            .should('be.visible')
            .and(($image) => {
                expect($image[0].naturalWidth).to.be.greaterThan(0);
                expect($image[0].naturalHeight).to.be.greaterThan(0);
        })
    }

    verifyTag(expectedTag) {
        cy.get(`${getSourceId()} tbody>tr`).eq(0).find(`td`)
            .should('be.visible')
            .should('have.text', expectedTag);
    }
}

export const itemPage = new ItemPage();