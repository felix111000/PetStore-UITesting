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

    updateCart() {
        cy.get(`input[name="updateCartQuantities"]`)
            .click()
    }
    
    updateQuantity(itemId, newQuantity) {
        cy.get(`input[name="${itemId}"]`)
            .clear()
            .type(newQuantity)
        this.updateCart();
    }

    verifyItemNumber(expectedNumber) {
        cy.get(`${getSourceId()} a[href *= "viewItem"]`)
            .should('have.length', expectedNumber);
    }

    verifyQunaity(itemId, expectedQuantity) {
        cy.get(`input[name="${itemId}"]`).should(($quantity) => {
            expect($quantity).to.have.attr('value', expectedQuantity);
        })
    }
}

export const cartPage = new CartPage();