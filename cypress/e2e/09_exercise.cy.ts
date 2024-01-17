// https://www.last.fm/

describe('template spec', () => {

    it('visit site passes', () => {
        cy.visit('https://www.last.fm/');
    })

    it('search', () => {
        cy.get('.masthead-search-toggle').click({force: true});
        cy.get('input[placeholder="Search for music…"]').type('Taylor').type('{enter}');
        cy.get('.link-block-target').contains('Taylor Swift').click();

    })

    it('assert result', () => {
        cy.get('.tags-list').children().contains('pop').should('exist');
    })

})