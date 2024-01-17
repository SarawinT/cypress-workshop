describe('template spec', () => {

  it('enter site passes', () => {
    cy.visit('https://docs.cypress.io/api/table-of-contents')
  })

  it('.last()', () => {
    cy.get('.theme-doc-markdown').find('code');
  })
})