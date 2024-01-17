describe('template spec', () => {
  it('visit site passes', () => {
    cy.visit('./pages/query.html');
  })

  it('contains query', () => {
    cy.contains('ome5');
    cy.contains('Button');
    cy.contains('p', 'ome5');
    cy.contains('TEST');
  })

  it('get query', () => {
    cy.get('button');
    cy.get('.class1');
    cy.get('#button2');
    cy.get('#div2 > p');
    cy.get('textarea[placeholder="Comment 1"]');
    cy.get('.myClass\\.test[customField*="name"]');
    cy.get('.myClass\\.test[customField^="name"]');
  })

  it('chaining query', () => {
    cy.get('#div1').contains('ome5');
    cy.get('#div2').get('.class2');
    cy.get('#div2 > p.class1');
  })



})