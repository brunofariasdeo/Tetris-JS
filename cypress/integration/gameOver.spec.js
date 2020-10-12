Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe ('Game over', () => {
    it ('Check game over', () => {
        cy.visit('http://localhost:3000');

        cy.get('.treat-button').contains("Start!").click();

        cy.wait(200);

        for (var i = 0; i < 40; i++) {
            cy.get('body').trigger('keydown', { altKey: true, keyCode: 40, release: false })
            cy.get('body').trigger('keypress', { altKey: true, keyCode: 40, release: false })
            cy.wait(50)
        }
        
        cy.get('body').trigger('keyup', { altKey: true, keyCode: 40, release: false })

        cy.on('window:alert', (str) => {
            expect(str).to.equal(`Game Over!!`)
        })

    })
})