Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});


describe( 'Restart Game', () => {
	it( 'Successfully loads new game', () => {
        cy.visit('http://localhost:3000');

        cy.get('.treat-button').contains("Start!").click();

        // cy.wait(10000);

        cy.get('.treat-button').contains("Restart!").click();

        cy.get('.treat-button').contains("Pause").click();

        cy.get(".grid").find('div').eq(-6).should("not.have.class", "piece");

        cy.get(".grid").find('div').eq(-5).should("not.have.class", "piece");

    })
})