describe('template spec', () => {

    it('visit site passes', () => {
        cy.visit('./pages/query.html');
    })

    it('test custom fuction', () => {
        cy.typeTo('Comment 1', 'Hello');
    })

})