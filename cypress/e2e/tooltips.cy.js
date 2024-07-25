describe('Tooltips Display', () => {
    it('should display tooltips when hovering over buttons', () => {
        cy.visit('/');

        // 1. Passe o mouse sobre o botão "Login".
        cy.get('[onclick="openPopup(\'login\')"]').trigger('mouseover', { force: true });
        cy.wait(500); 
        cy.get('body').then($body => {
            console.log('All tooltips:', $body.find('.tooltip').toArray());
        });

        // 2. Verifique se o tooltip contendo "Abrir formulário de login" está visível.
        cy.get('.tooltip', { timeout: 10000, force: true }).contains('Abrir formulário de login');

        // 3. Passe o mouse sobre o botão "Formulário".
        cy.get('[onclick="openPopup(\'form\')"]').trigger('mouseover', { force: true });
        cy.wait(500); 

        // 4. Verifique se o tooltip contendo "Abrir formulário de contato" está visível.
        cy.get('.tooltip',{ timeout: 10000, force: true }).contains('Abrir formulário de contato');

        // 5. Passe o mouse sobre o botão "Mais Info".
        cy.get('[onclick="openPopup(\'info\')"]').trigger('mouseover', { force: true });
        cy.wait(500); 

        // 6. Verifique se o tooltip contendo "Abrir mais informações" está visível.
        cy.get('.tooltip',{ timeout: 10000, force: true }).contains('Abrir mais informações');
    });
});
