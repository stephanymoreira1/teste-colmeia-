describe('Login Popup', () => {
    it('should display and close the login popup', () => {
       cy.visit('/'); 
      cy.get('[onclick="openPopup(\'login\')"]').click({ force: true }); 
      cy.get('#loginPopup').should('be.visible');
      cy.get('#loginPopup > .popup-content > .close').click();   
      cy.get('#loginPopup').should('not.be.visible');
      
    });
  });
  