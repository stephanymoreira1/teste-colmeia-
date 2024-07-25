describe('Login Popup', () => {
    it('should display and close the login popup', () => {
      // 1. Na página principal, clique no botão "Login".
      cy.visit('/'); 
      cy.get('[onclick="openPopup(\'login\')"]').click({ force: true }); 
  
      // 2. Verifique se o pop-up de login (#loginPopup) está visível.
      cy.get('#loginPopup').should('be.visible');
  
      // 3. Feche o pop-up clicando no botão de fechar (#loginPopup .close).
      cy.get('#loginPopup > .popup-content > .close').click();   
  
      // 4. Confirme que o pop-up de login não está mais visível.
      cy.get('#loginPopup').should('not.be.visible');
    });
  });
  