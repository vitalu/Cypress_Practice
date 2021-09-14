import editPost from '../pages/editPostPage'
import Post from '../pages/createPostPage';
import Delete from '../pages/deletePostPage'
describe('Edit Post', function () {
   before(function () {
      cy.Login()
   })
   const createPost = new Post
   const edit = new editPost
   const deletePost = new Delete
   it('Create a post', function () {
      createPost.newPost().click()
      cy.hash().should('include', '#/editor')
      //cy.location('hash').should('include','#/editor')
      createPost.enterArticleTitle().type('Test')
      createPost.articleAbout().type('Test 1')
      createPost.writeYourArticle().type('Hey!!,')
      createPost.publishArticleButton().click()
      cy.url().should('include', 'article')
   })

   it('Edit Post', function () {
      edit.editArticleButton().click();
      edit.clearDescription().type('{del}{selectall}{backspace}').should('have.value', '')
      cy.wait(5000)
      edit.writeYourArticle().type('Editing Text')
      edit.publishArticleButton().click();
      cy.url().should('include', 'article')
      edit.veriftEditedPost().should('contain', 'Hey!!,Editing Text')
   })
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