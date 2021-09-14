class login{
   email(){
      return cy.get('input[type="email"]')
   }
   password(){
     return cy.get('input[type="password"]')
   }
   signIn(){
      return cy.get('.btn').contains('Sign in')
   }
}
export default login