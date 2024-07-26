describe('Tooltips Display', () => {
    it('should display tooltips when hovering over buttons', () => {
        cy.visit('/');
        cy.get('[onclick="openPopup(\'login\')"]').trigger('mouseover', { force: true });
        cy.wait(500);
        cy.get('body').then($body => {
            console.log('All tooltips:', $body.find('.tooltip').toArray());
        });
        cy.get('.tooltip', { timeout: 10000, force: true }).contains('Abrir formulário de login');
        cy.get('[onclick="openPopup(\'form\')"]').trigger('mouseover', { force: true });
        cy.wait(500);
        cy.get('.tooltip', { timeout: 10000, force: true }).contains('Abrir formulário de contato');
        cy.get('[onclick="openPopup(\'info\')"]').trigger('mouseover', { force: true });
        cy.wait(500);
        cy.get('.tooltip', { timeout: 10000, force: true }).contains('Abrir mais informações');
    });
});
