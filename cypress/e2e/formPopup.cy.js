// cypress/e2e/formPopup.spec.js

describe('Contact Form Popup', () => {
    it('should display and close the contact form popup', () => {
        cy.visit('/');
        cy.get('[onclick="openPopup(\'form\')"]').click({ force: true });
        cy.get('#formPopup').should('be.visible');
        cy.get('#formPopup > .popup-content > .close').click({ force: true });
        cy.get('#formPopup').should('not.be.visible');
    });
});
