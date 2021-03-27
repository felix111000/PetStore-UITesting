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
}

export const cartPage = new CartPage();