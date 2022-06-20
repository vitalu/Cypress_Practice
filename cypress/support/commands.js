Cypress.Commands.add("Login", () => {
   cy.visit('/#/login')
   cy.title().should('eq', 'Conduit')
   cy.location('protocol').should('eq', 'https:')
   cy.get('input[type="email"]').type('cypractice@gmail.com')
   cy.get('input[type="password"]').type('cypress123',{ sensitive: true })
   cy.get('.btn').contains('Sign in').should('be.visible').click()
   cy.contains('Your Feed').should('be.visible')
});
Cypress.Commands.overwrite('type', (originalFn, element, text, options) => {
   if (options && options.sensitive) {
     // turn off original log
     options.log = false
     // create our own log with masked message
     Cypress.log({
       $el: element,
       name: 'type',
       message: '*'.repeat(text.length),
     })
   }
    return originalFn(element, text, options)
 })