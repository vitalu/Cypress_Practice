
import Delete from '../pages/deletePostPage'
describe('Delete post in application', function () {
   before(function () {
      cy.Login()
   })
   const deletePost = new Delete
   it('Delete post', function () {
      deletePost.userName().click()
      deletePost.myArticle().should('be.visible')
      deletePost.postName().click()
      cy.contains('Test').should('be.visible')
      deletePost.deletePost().click()
      //cy.reload();
      deletePost.verifyNoArticlesMsg().should('be.visible');
   })

});