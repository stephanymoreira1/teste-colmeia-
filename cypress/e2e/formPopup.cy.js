// cypress/e2e/formPopup.spec.js

describe('Contact Form Popup', () => {
    it('should display and close the contact form popup', () => {
      // 1. Na página principal, clique no botão "Formulário".
      cy.visit('/');
      cy.get('[onclick="openPopup(\'form\')"]').click({ force: true }); // Substitua pelo seletor do botão "Formulário"
  
      // 2. Verifique se o pop-up do formulário de contato (#formPopup) está visível.
      cy.get('#formPopup').should('be.visible');
  
      // 3. Feche o pop-up clicando no botão de fechar (#formPopup .close).
      cy.get('#formPopup > .popup-content > .close').click({ force: true });
  
      // 4. Confirme que o pop-up do formulário de contato não está mais visível.
      cy.get('#formPopup').should('not.be.visible');
    });
  });
  