describe('template spec', () => {
    it('visit site passes', () => {
        cy.visit('./pages/queryTraversal.html');
    })

    // .parent()
    // .parents()
    //     .childrend()
    //     .siblings()
    //     .filter()
    //     .eq()

    it('parent(s)', () => {
        cy.contains('Company').parent();
        cy.contains('Company').parents();
    })

    it('children', () => {
        cy.get('#header-row').children();
    })

    it('siblings', () => {
        cy.contains('Contact').siblings();
    })

    it('filter', () => {
        cy.get('.myClass');
        cy.get('#div1').children().filter('.myClass');
    })

    it('eq', () => {
        cy.get('tr').eq(2);
    })





})