describe('template spec', () => {

  it('enter site passes', () => {
    cy.visit('https://docs.cypress.io/')
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();
  })

  it('Type and Search', () => {
    cy.get('button[aria-label="Search"]').click()
    cy.get('input[placeholder="Search docs"]').type('click');
    cy.wait(500);
    cy.get('#docsearch-list').children().eq(1).click();
  })


})