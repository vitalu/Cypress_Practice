class editPostPage{

   editArticleButton(){
      return cy.get('.btn.btn-outline-secondary.btn-sm').contains('Edit Article',{ timeout: 10000 })
   }
   clearDescription(){
      return cy.get('textarea[placeholder="Write your article (in markdown)"]',{ timeout: 10000 })
   }
   writeYourArticle() {
      return cy.get('textarea[placeholder="Write your article (in markdown)"]',{ timeout: 10000 })
   }
   publishArticleButton() {
      return cy.contains('Publish Article')
   }
   veriftEditedPost(){
      return cy.get('div>p',{ timeout: 10000 })
   }
}
export default editPostPage