describe('Validação do Campo de Telefone no Formulário de Contato', () => {
    it('Deve aceitar e exibir o número inserido corretamente no campo de telefone', () => {
        cy.visit('/');
        cy.get('[onclick="openPopup(\'form\')"]').click();
        cy.get('#phone').type('123456789');
        cy.get('#phone').should('have.value', '123456789');
    });
});
