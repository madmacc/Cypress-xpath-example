describe('My First Test', () => {
  
  it('The iFrame h1 should be visible', () => {
    cy.visit('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_iframe')
    cy.xpath('//iframe[@id="iframeResult"]').its('0.contentDocument.body').then(cy.wrap).xpath('//h1[text()="The iframe element"]').should('be.visible');
    /*In here we are accessing the document body through jQuey and wrapping the result of that (the body of iframe itself)
    inside the 'cy' element so that we can access it through that. */
  })
  
})
