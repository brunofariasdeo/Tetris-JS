Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});


describe( 'Check if music starts with game', () => {
	it( 'Successfully plays the music when game is initiated', () => {

        cy.visit('http://localhost:3000');

        cy.get(".grid").should('be.visible');

        cy.get(".next-piece-grid").should('be.visible');

        cy.get('.treat-button').contains("Start!").click();

        cy.get(".myAudio").should("have.class", "playing");

    })

    it( 'Successfully plays the music when game is restarted', () => {

        cy.visit('http://localhost:3000');

        cy.get(".grid").should('be.visible');

        cy.get(".next-piece-grid").should('be.visible');

        cy.get('.treat-button').contains("Restart!").click();

        cy.get(".myAudio").should("have.class", "playing");

    })

    it( 'Successfully stops the music when game is paused', () => {

        cy.visit('http://localhost:3000');

        cy.get(".grid").should('be.visible');

        cy.get(".next-piece-grid").should('be.visible');

        cy.get('.treat-button').contains("Start!").click();

        cy.get('.treat-button').contains("Pause").click();

        cy.get(".myAudio").should("have.class", "paused");
    })
})