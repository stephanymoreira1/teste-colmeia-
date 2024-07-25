

describe('Validação do Campo de E-mail no Formulário de Login', () => {
    it('deve exibir o e-mail inserido corretamente no campo de e-mail', () => {
      // 1. Na página principal, clique no botão "Login".
      cy.visit('/');
      cy.get('[onclick="openPopup(\'login\')"]').click({ force: true }); 
      
      // 2. No campo de e-mail (#loginEmail), insira o e-mail "teste@exemplo.com".
      cy.get('#loginEmail').type('bruna@gmail.com');
      
      // 3. Verifique se o e-mail é exibido corretamente no campo.
      cy.get('#loginEmail').should('have.value', 'bruna@gmail.com');
      

    });
  });
  