describe('Erro para E-mail Inválido no Formulário de Login', () => {
    
    it('deve exibir uma mensagem de erro para o e-mail inválido', () => {
      // 1. Na página principal, clique no botão "Login".
      cy.visit('/');
      cy.get('[onclick="openPopup(\'login\')"]').click({ force: true });
      
      // 2. No campo de e-mail (#loginEmail), insira o e-mail "teste@exemplo".
      cy.get('#loginEmail').type('teste@exemplo');
      
      // 3. Verifique se a mensagem de erro "Por favor, insira um endereço de email válido" é exibida.
      // O seletor para a mensagem de erro deve ser ajustado conforme o HTML da sua página
      cy.get('[id="emailError"]').should('contain.text', 'Por favor, insira um endereço de email válido');
    });
  });
  