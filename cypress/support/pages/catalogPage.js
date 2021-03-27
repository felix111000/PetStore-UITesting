const getMenuContentId = () => {
    return "#MenuContent";
};

const getQuickLinkId = () => {
    return "#QuickLinks";
};

const getSideBarId = () => {
    return "#SidebarContent";
};

const getMainImageId = () => {
    return "#MainImageContent";
};

const getSourceId = () => {
    return "#Catalog";
};

export class CatalogPage {
    clickSigninMenu() {
        cy.get(`${getMenuContentId()} a[href*="signonForm"]`).contains('Sign In')
            .click();
    }

    clickCartMenu() {
        cy.get(`${getMenuContentId()} img[name="img_cart"]`)
            .click();
    }

    clickCatalogBySideBar(catalogId) {
        cy.get(`${getSideBarId()} a[href*="${catalogId}"]`).find(`img`)
                .click();
    }

    clickFishBySideBar() {
        this.clickCatalogBySideBar("FISH");
    }

    clickDogsBySideBar() {
        this.clickCatalogBySideBar("DOGS");
    }

    clickCatsBySideBar() {
        this.clickCatalogBySideBar("CATS");
    }

    clickReptilesBySideBar() {
        this.clickCatalogBySideBar("REPTILES");
    }

    clickBirdsBySideBar() {
        this.clickCatalogBySideBar("BIRDS");
    }

    clickCatalogByQuickLink(catalogId) {
        cy.get(`${getQuickLinkId()} a[href*=${catalogId}]`).find(`img`)
                .click();
    }

    clickFishByQuickLink() {
        this.clickCatalogByQuickLink("FISH");
    }

    clickDogsByQuickLink() {
        this.clickCatalogByQuickLink("DOGS");
    }

    clickCatsByQuickLink() {
        this.clickCatalogByQuickLink("CATS");
    }

    clickReptilesByQuickLink() {
        this.clickCatalogByQuickLink("REPTILES");
    }

    clickBirdsByQuickLink() {
        this.clickCatalogByQuickLink("BIRDS");
    }

    clickCatalogByMainImage(catalogId) {
        cy.get(`${getMainImageId()} area[href*=${catalogId}]`)
                .click({force:true});
    }

    clickFishByMainImage() {
        this.clickCatalogByMainImage("FISH");
    }

    clickDogsByMainImage() {
        this.clickCatalogByMainImage("DOGS");
    }

    clickCatsByMainImage() {
        this.clickCatalogByMainImage("CATS");
    }

    clickReptilesByMainImage() {
        this.clickCatalogByMainImage("REPTILES");
    }

    clickBirdsByMainImage() {
        this.clickCatalogByMainImage("BIRDS");
    }

    clickProductById(productId) {
        cy.get(`${getSourceId()} a[href*="viewProduct"]`).contains(`${productId}`)
            .click();
    }

    clickItemById(itemId) {
        cy.get(`${getSourceId()} a[href*="viewItem"]`).contains(`${itemId}`)
            .click();
    }

    addToCartByItemId(itemId) {
        cy.get(`${getSourceId()} a[href*="workingItemId=${itemId}"]`).contains(`Add to Cart`)
            .click();
    }

    verifyItemNumber(expectedNumber) {
        cy.get(`${getSourceId()} a[href*="viewItem"]`)
            .should('have.length', expectedNumber);
    }

    verifyPrice(expectedPrice) {
        cy.get(`#Catalog tr>td`).eq(5)
            .should('have.text', '$' + expectedPrice.toString());
    }
}

export const catalogPage = new CatalogPage();