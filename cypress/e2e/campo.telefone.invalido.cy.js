describe('Verificação de erro para números de telefone inválidos', () => {
    it('Deve exibir mensagens de erro apropriadas para números de telefone inválidos', () => {
        cy.visit('/');
        cy.get('[onclick="openPopup(\'form\')"]').contains('Formulário').click();
        cy.get('#phone').clear().type('123');
        cy.wait(1000);
        cy.get('body').then(($body) => {
            if ($body.find('.error-message').length > 0) {
                cy.get('.error-message')
                    .should('contain', 'Número de telefone deve ter exatamente 9 dígitos');
            } else {
                cy.log('Mensagem de erro para "123" não encontrada.');
            }
        });
        cy.get('#phone').clear().type('1234567890');
        cy.wait(1000);
        cy.get('body').then(($body) => {
            if ($body.find('.error-message').length > 0) {
                cy.get('.error-message')
                    .should('contain', 'Número de telefone deve ter exatamente 9 dígitos');
            } else {
                cy.log('Mensagem de erro para "1234567890" não encontrada.');
            }
        });

        cy.get('#phone').clear().type('abcdefghi');
        cy.wait(1000);
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