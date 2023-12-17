describe('template spec', () => {

  it('enter site passes', () => {
    cy.visit('https://docs.cypress.io/api/table-of-contents')
  })

  it('Commands', () => {
    cy.get('#__docusaurus_skipToContent_fallback > div > main > div > div > div.col.col--3 > div > ul > li:nth-child(1) > a')
  })

  it('.last()', () => {
    cy.contains('.last()').parent().siblings();
  })
})