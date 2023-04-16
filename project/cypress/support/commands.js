import { searchField, searchButton, searchIsDone } from '../support/selectors';


Cypress.Commands.add('searchFieldType', (text) => {
    cy.get(searchField).clear().type(text);
});


Cypress.Commands.add('search', (text) => { 
    cy.searchFieldType(text);
    cy.get(searchButton).click();
    cy.get(searchIsDone, { timeout: 15000 }).should('be.visible');
});

Cypress.Commands.add('openMainPage', () => {
    cy.visit('https://www.gov.il', { retryOnStatusCodeFailure: true });
    cy.waitUntil(() => Cypress.$(searchButton).length, {
        verbose: true,
        customCheckMessage: 'is page loaded',
        timeout: 15000,
        interval: 1000,
    });
});