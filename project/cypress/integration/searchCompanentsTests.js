import { searchField, searchButton, searchTotalResults, searchResaultFirstLine } from '../support/selectors';

describe('search component tests', () => {
    const textToSearch = 'test';

    beforeEach(() => {
        cy.openMainPage();
    });
    
    it('test search sanity', () => {
        cy.get(searchField).should('be.visible');
        cy.get(searchButton).should('be.visible');
    });

    it('test search should show results label greater than 0', () => {
        cy.search(textToSearch);
        cy.get(searchTotalResults).should('be.visible').then(totalResults => {
            const totalResultsNumber = Number(totalResults.text());
            cy.wrap(totalResultsNumber).should('be.gt', 0);
        });
    });

    it('test search should show url of the related query', () => {
        cy.search(textToSearch);
        cy.url().should('include', textToSearch);
    });

});

