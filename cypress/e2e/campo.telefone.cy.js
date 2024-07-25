

describe('Validação do Campo de Telefone no Formulário de Contato', () => {
     
    it('deve aceitar e exibir o número de telefone corretamente', () => {
      // 1. Na página principal, clique no botão "Formulário".
      cy.visit('/');
      cy.get('[onclick="openPopup(\'form\')"]').click({ force: true });  
      
      // 2. No campo de telefone (#phone), insira o número "123456789".
      cy.get('#phoneError').type('123456789');
      
      // 3. Verifique se o número é exibido corretamente no campo.
      cy.get('#phoneError').should('have.value', '123456789');
    });
  });
  