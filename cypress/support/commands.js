Cypress.Commands.add("Login", ()=>{
   cy.visit('/#/login')
   cy.title().should('eq', 'Conduit')
   cy.location('protocol').should('eq', 'https:')
   cy.get('input[type="email"]').type('cytest@gmail.com')
   cy.get('input[type="password"]').type('cypress123')
   cy.get('.btn').contains('Sign in').should('be.visible').click()
   cy.contains('Your Feed', { timeout: 10000 }).should('be.visible')
});