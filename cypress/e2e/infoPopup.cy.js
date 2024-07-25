
describe('More Info Popup', () => {
    it('should display and close the more info popup', () => {
      // 1. Na página principal, clique no botão "Mais Info".
      cy.visit('/');
      cy.get('[onclick="openPopup(\'info\')"]').click({ force: true }); 
  
      // 2. Verifique se o pop-up de mais informações (#infoPopup) está visível.
      cy.get('#infoPopup').should('be.visible');
  
      // 3. Feche o pop-up clicando no botão de fechar (#infoPopup .close).
      cy.get('#infoPopup > .popup-content > .close').click({ force: true });
  
      // 4. Confirme que o pop-up de mais informações não está mais visível.
      cy.get('#infoPopup').should('not.be.visible');
    });
  });
  