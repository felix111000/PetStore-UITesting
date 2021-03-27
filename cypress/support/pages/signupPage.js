const getSourceId = () => {
    return "#Catalog";
};

export class SignupPage {
    clickRegisterLink() {
		cy.get(`a[href *= "newAccountForm"]`)
			.click();
	}

    setUserId(username) {
	    cy.get(`${getSourceId()} input`).eq(0)
            .clear()
            .type(username);
	}
	
	setNewPassword(password) {
	    cy.get(`${getSourceId()} input`).eq(1)
            .clear()
            .type(password);
	}

    setRepeatPassword(password) {
	    cy.get(`${getSourceId()} input`).eq(2)
            .clear()
            .type(password);
	}

    setFirstName(firstName) {
	    cy.get(`${getSourceId()} input`).eq(3)
            .clear()
            .type(firstName);
	}

    setLastName(lastName) {
	    cy.get(`${getSourceId()} input`).eq(4)
            .clear()
            .type(lastName);
	}

    setEmail(email) {
	    cy.get(`${getSourceId()} input`).eq(5)
            .clear()
            .type(email);
	}

    setPhone(phone) {
	    cy.get(`${getSourceId()} input`).eq(6)
            .clear()
            .type(email);
	}

    setAddressOne(address) {
	    cy.get(`${getSourceId()} input`).eq(7)
            .clear()
            .type(address);
	}

    setAddressTwo(address) {
	    cy.get(`${getSourceId()} input`).eq(8)
            .clear()
            .type(address);
	}

    setCity(city) {
	    cy.get(`${getSourceId()} input`).eq(9)
            .clear()
            .type(city);
	}

    setState(state) {
	    cy.get(`${getSourceId()} input`).eq(10)
            .clear()
            .type(state);
	}

    setZip(zip) {
	    cy.get(`${getSourceId()} input`).eq(11)
            .clear()
            .type(zip);
	}

    setCountry(country) {
	    cy.get(`${getSourceId()} input`).eq(12)
            .clear()
            .type(country);
	}

    setValueInTextField(index, value) {
        cy.get(`${getSourceId()} input`)
            .eq(index)
            .clear()
            .type(value);
      }

    clickSaveLink() {
		cy.get(`${getSourceId()} input`).eq(15)
			.click();
	}

    createAccount(userId, password, firstName, lastName, email, phone, address, city, state, zip, country) {
        this.setValueInTextField(0, userId);
        this.setValueInTextField(1, password);
        this.setValueInTextField(2, password);
        this.setValueInTextField(3, firstName);
        this.setValueInTextField(4, lastName);
        this.setValueInTextField(5, email);
        this.setValueInTextField(6, phone);
        this.setValueInTextField(7, address);
        this.setValueInTextField(9, city);
        this.setValueInTextField(10, state);
        this.setValueInTextField(11, zip);
        this.setValueInTextField(12, country);
        this.clickSaveLink();
        cy.wait(200);
  }
}

export const signupPage = new SignupPage();