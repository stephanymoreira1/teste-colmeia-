describe('More Info Popup', () => {
    it('should display and close the more info popup', () => {
        cy.visit('/');
        cy.get('[onclick="openPopup(\'info\')"]').click({ force: true });
        cy.get('#infoPopup').should('be.visible');
        cy.get('#infoPopup > .popup-content > .close').click({ force: true });
        cy.get('#infoPopup').should('not.be.visible');
    });
});
