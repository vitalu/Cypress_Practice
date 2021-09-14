import Login from '../pages/loginPage';
describe('Login to the Demo application', function () {
   const login = new Login()
   it('Login Coduit browser', function () {
      cy.visit('/#/login')
      cy.title().should('eq', 'Conduit')
      cy.location('protocol').should('eq', 'https:')
      login.email().type('cytest@gmail.com')
      login.password().type('cypress123')
      login.signIn().should('be.visible').click()
      cy.contains('Your Feed').should('be.visible')
   });
   
});