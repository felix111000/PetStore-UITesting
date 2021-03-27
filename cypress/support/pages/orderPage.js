const getSourceId = () => {
    return "#Catalog";
};

export class OrderPage {
    createOrder() {
        cy.get(`${getSourceId()} input[type = 'submit']`)
            .click();
    }

    confirmOrder() {
        cy.get(`.Button`).contains(`Confirm`)
            .click();
    }

    verifyOrderSucceed() {    
        cy.get(`.messages li`).should(($li) => {
            const text = $li.text();
            expect(text).to.match(/Thank you, your order has been submitted./);
        })
    }

}

export const orderPage = new OrderPage();