const getSourceId = () => {
    return "#Catalog";
  };
  
  export class SigninPage {
      clickRegisterLink() {
          cy.get(`a[href *= "newAccountForm"]`)
              .click();
      }
  
      setUsername(username) {
          cy.get(`${getSourceId()} input`).eq(0)
              .clear()
              .type(username);
      }
      
      setPassword(password) {
          cy.get(`${getSourceId()} input`).eq(1)
              .clear()
              .type(password);
      }
  
      clickLoginButton() {
          cy.get(`${getSourceId()} input`).eq(2)
              .click();
      }
      
      verifyLoginSuccess(firstName) {
          cy.wait(500)
          cy.get(`#WelcomeContent`)
              .should('be.visible')
              .and('have.text', '\n\t\n        Welcome ' + firstName + '!\n      \n');
      }

      verifyMustSignonMessage() {    
        cy.get(`.messages li`).should(($li) => {
            const text = $li.text();
            expect(text).to.match(/You must sign on before attempting to check out.  Please sign on and try checking out again./);
        })
	  }
  
      loginWith(username, password) {
          this.setUsername(username);
          this.setPassword(password);
          this.clickLoginButton();
      }
  }
  
  export const signinPage = new SigninPage();