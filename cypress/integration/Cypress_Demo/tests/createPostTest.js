
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
      createPost.enterArticleTitle().type('Test')
      createPost.articleAbout().type('Test 1')
      createPost.writeYourArticle().type('Test 2')
      createPost.publishArticleButton().click()
      cy.url().should('include','article')
  })

});