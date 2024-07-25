describe('Validação do Campo de Mensagem no Formulário de Contato', () => {
  beforeEach(() => {
    cy.visit('/'); 
  });

  it('Deve exibir mensagem com menos de 400 caracteres corretamente', () => {
    cy.get('[onclick="openPopup(\'form\')"]'); // Clique no botão "Formulário"
    cy.get('#message').type('Mensagem com menos de 400 caracteres.', { force: true });
    cy.get('#message').should('have.value', 'Mensagem com menos de 400 caracteres.');
  });

  it('Deve aceitar e exibir mensagem com mais de 400 caracteres', () => {
    cy.get('[onclick="openPopup(\'form\')"]').click(); // Clique no botão "Formulário"
    const longMessage = 'A'.repeat(401); // Mensagem com 401 caracteres
    cy.get('#message').type(longMessage);
    cy.get('#message').should('have.value', longMessage);
  });
});
