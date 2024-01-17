describe('template spec', () => {

  it('enter site passes', () => {
    cy.visit('https://www.last.fm/music/The+Lumineers')
  })

  it('Get all time top track', () => {
    cy.contains('button', 'Last 7 days').click({ force: true });
    cy.intercept('GET', 'https://www.last.fm/music/The+Lumineers/+partial/tracks?top_tracks_date_preset*').as('datePreset');
    cy.contains('a', 'All time').click();
    cy.wait('@datePreset').then(() => {
      cy.get('tbody[data-playlisting-add-entries]').children().eq(0).children().contains('Ho Hey').click();
    });

  })


})