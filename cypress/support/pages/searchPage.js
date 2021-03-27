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
}

export const searchPage = new SearchPage();