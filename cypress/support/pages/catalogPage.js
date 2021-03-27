const getMenuContentId = () => {
    return "#MenuContent";
};

export class CatalogPage {
    clickSigninMenu() {
        cy.get(`${getMenuContentId()} a[href*="signonForm"]`).contains('Sign In')
            .click();
    }
}

export const catalogPage = new CatalogPage();