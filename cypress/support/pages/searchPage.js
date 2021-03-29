const getSourceId = () => {
    return "#Catalog";
};

export class SearchPage {
    searchProduct(searchText) {
        cy.get('input[name="keyword"]')
            .clear()
            .type(searchText);
        cy.get('input[name="searchProducts"]')
            .click();
    }

    verifyItemNumber(expectedNumber) {
        cy.get(`${getSourceId()} tbody>tr`)
            .should('have.length', expectedNumber + 2);
    }

    verifyImageLoad() {
        cy.get(`${getSourceId()} tr>td`).find(`img`)
            .should(($image) => {
                for(var i = 0; i < $image.length; i++)
                {
                    expect($image[i]).to.be.visible;
                    expect($image[i].naturalWidth).to.be.greaterThan(0);
                    expect($image[i].naturalHeight).to.be.greaterThan(0);
                }
            })
    }

    verifyTag(itemSeqNumber, expectedTag) {
        cy.get(`${getSourceId()} tbody>tr`).eq(itemSeqNumber).find(`td>a`)
            .should('be.visible')
            .and(`have.text`, expectedTag);
    }
}

export const searchPage = new SearchPage();