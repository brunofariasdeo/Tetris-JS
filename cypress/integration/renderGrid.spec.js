Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});


describe( 'Render grid', () => {
	it( 'Successfully renders the grid and minigrid', () => {
        cy.visit('http://localhost:3000');

        cy.get(".grid").should('be.visible');

        cy.get(".next-piece-grid").should('be.visible');

    })
})