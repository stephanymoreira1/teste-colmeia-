describe('Erro para E-mail Inválido no Formulário de Login', () => {

    it('deve exibir uma mensagem de erro para o e-mail inválido', () => {
        cy.visit('/');
        cy.get('[onclick="openPopup(\'login\')"]').click({ force: true });
        cy.get('#loginEmail').type('teste@exemplo');
        cy.get('[id="emailError"]').should('contain.text', 'Por favor, insira um endereço de email válido');
    });
});
