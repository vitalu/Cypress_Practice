class createPost {

   newPost() {
      return cy.contains('New Post')
   }
   enterArticleTitle() {
      return cy.get('input[placeholder="Article Title"]')
   }
   articleAbout() {
      return cy.get('input[placeholder="What\'s this article about?"]')
   }
   writeYourArticle() {
      return cy.get('textarea[placeholder="Write your article (in markdown)"]')
   }
   publishArticleButton() {
      return cy.contains('Publish Article')
   }

}
export default createPost