import { CatalogPage } from "./catalogPage";

const getReturnId = () => {
    return "#BackLink";
};

const getSourceId = () => {
    return "#Catalog";
};

export class CartPage {
    returnToMainMenu() {
		cy.get(`${getReturnId()}`).find(`a`)
			.click();
	}

	proceedToCheckout() {
        cy.get(`${getSourceId()} a[href *= "newOrderForm"]`).contains(`Proceed to Checkout`)
                .click();
    }

    removeItemFromCart(itemId) {
        cy.get(`${getSourceId()} a[href *= "workingItemId=${itemId}"]`).contains(`Remove`)
            .click();
    }

    verifyItemNumber(expectedNumber) {
        cy.get(`${getSourceId()} a[href *= "viewItem"]`)
            .should('have.length', expectedNumber);
    }
}

export const cartPage = new CartPage();