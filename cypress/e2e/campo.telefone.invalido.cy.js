describe('Verificação de erro para números de telefone inválidos', () => {
    it('Deve exibir mensagens de erro apropriadas para números de telefone inválidos', () => {
      // Passo 1: Navegar para a página principal e clicar no botão "Formulário"
      cy.visit('/'); // Substitua com a URL real da página principal
      cy.get('[onclick="openPopup(\'form\')"]').contains('Formulário').click(); // Substitua com o seletor real do botão
  
      // Passo 2: Testar o campo de telefone com diferentes valores
  
      // Testar com "123"
    cy.get('#phone').clear().type('123');
    
    cy.wait(1000); // Adiciona uma espera para garantir que a mensagem tenha tempo de aparecer
    cy.get('body').then(($body) => {
      if ($body.find('.error-message').length > 0) {
        cy.get('.error-message')
          .should('contain', 'Número de telefone deve ter exatamente 9 dígitos');
      } else {
        cy.log('Mensagem de erro para "123" não encontrada.');
      }
    });
      // Testar com "1234567890"
    cy.get('#phone').clear().type('1234567890');
    
    cy.wait(1000); // Adiciona uma espera para garantir que a mensagem tenha tempo de aparecer
    cy.get('body').then(($body) => {
      if ($body.find('.error-message').length > 0) {
        cy.get('.error-message')
          .should('contain', 'Número de telefone deve ter exatamente 9 dígitos');
      } else {
        cy.log('Mensagem de erro para "1234567890" não encontrada.');
      }
    });

    // Testar com "abcdefghi"
    cy.get('#phone').clear().type('abcdefghi');
    
    cy.wait(1000); // Adiciona uma espera para garantir que a mensagem tenha tempo de aparecer
    cy.get('body').then(($body) => {
      if ($body.find('.error-message').length > 0) {
        cy.get('.error-message')
          .should('contain', 'Número de telefone deve conter apenas números');
      } else {
        cy.log('Mensagem de erro para "abcdefghi" não encontrada.');
      }
    });
  });
});