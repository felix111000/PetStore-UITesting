/// <reference types="cypress" />

import { signinPage } from '../support/pages/signinPage';
import { signupPage } from '../support/pages/signupPage';
import { catalogPage } from '../support/pages/catalogPage';

const userNumber = 101;
const username = 'test' + userNumber;
const password = 'test' + userNumber;
const firstName = 'firstname' + userNumber;
const lastName = 'lastname' + userNumber;
const email = firstName + '.' + lastName + '@test.com';
const phone = '0400000' + userNumber;
const address = userNumber + ' test street';
const city = 'Sydney';
const state = 'NSW';
const zip = '2000';
const country = 'Australia';

describe('Scenario 1: Sign Up', () => {
	it('Verified user should be successfully signed up and signed in', () => {
		cy.visit(`${Cypress.env('base_url')}` + `${Cypress.env('login_url')}`);
		signinPage.clickRegisterLink();
		signupPage.createAccount(username, password, firstName, lastName, email, phone, address, city, state, zip, country);
		catalogPage.clickSigninMenu();
		signinPage.loginWith(username, password);
		signinPage.verifyLoginSuccess(firstName);
	})
})