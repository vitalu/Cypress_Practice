
import Post from '../pages/createPostPage';
describe('Create post', function () {
   before(function () {
      cy.Login()
   })
   const createPost = new Post
   it('Create a post', function(){
      createPost.newPost().click()
      cy.hash().should('include','#/editor')
      //cy.location('hash').should('include','#/editor')
      createPost.enterArticleTitle().type('Test 5')
      createPost.articleAbout().type('Test 5')
      createPost.writeYourArticle().type('Test 5')
      createPost.publishArticleButton().click()
      cy.url().should('include','article')
  })

});