import * as app from "../../src/js/tetris";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});


describe( 'Start Game', () => {
	it( 'Successfully loads new game state', () => {
        cy.visit('http://localhost:3000');

        cy.window()
        .then(window => {
            cy.get('.treat-button').contains("Start!").click();
            
            let testVariable = cy.spy(window, 'moveDown');

            cy.get('.treat-button').contains("Start!").click();
        
        // cy.spy(app, 'moveDown')

        // expect(document.moveDown).to.be.called
    })
    })
})