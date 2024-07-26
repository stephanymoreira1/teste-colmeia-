

describe('Validação do Campo de Telefone no Formulário de Contato', () => {
    it('deve aceitar e exibir o número de telefone corretamente', () => {
        cy.visit('/');
        cy.get('[onclick="openPopup(\'form\')"]').click({ force: true });
        cy.get('#phoneError').should('have.value', '123456789');
    });
});
