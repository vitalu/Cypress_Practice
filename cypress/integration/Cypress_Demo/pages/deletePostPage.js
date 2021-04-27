class deletePostPage {
   userName() {
      return cy.get('.nav-link').contains('CypressHero')
   }
   myArticle() {
      return cy.contains('My Articles', { timeout: 10000 })
   }
   postName() {
      return cy.get('a[class="preview-link"]').contains('Test')
   }
   deletePost() {
      return cy.get('.btn.btn-outline-danger.btn-sm')
   }
   verifyNoArticlesMsg(){
 return  cy.contains('No articles are here... yet.', { timeout: 10000 })
   }




}
export default deletePostPage