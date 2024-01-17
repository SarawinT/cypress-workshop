describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://en.wikipedia.org/w/index.php?search=&title=Special:Search')
  })

  it('search', () => {
    cy.get('input[name="search"]').eq(1).type('Hello World', {force: true});
    cy.get('button[type="submit"]').click();
  })

  it('get search result', () => {
    cy.get('.mw-search-results').children().eq(0).find('.mw-search-result-heading').children().click();
  })
})