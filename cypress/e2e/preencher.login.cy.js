describe('Validação do Campo de E-mail no Formulário de Login', () => {
    it('deve exibir o e-mail inserido corretamente no campo de e-mail', () => {
        cy.visit('/');
        cy.get('[onclick="openPopup(\'login\')"]').click({ force: true });
        cy.get('#loginEmail').type('bruna@gmail.com');
        cy.get('#loginEmail').should('have.value', 'bruna@gmail.com');
    });
});
