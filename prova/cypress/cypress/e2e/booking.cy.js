describe('demoQA', () => {
  it('should send receive alert when button gets clicked', () => {
    cy.visit('https://demoqa.com/');
    cy.get('.category-cards > :nth-child(3)').click();
    cy.get(':nth-child(3) > .element-list > .menu-list > #item-1').click();
    cy.get('#alertButton').click();
    cy.on("window:alert", (msg) => {
      expect(msg).to.equal('You clicked a button');
    })
  })
  it('Should check the box', () => {
    cy.visit('https://demoqa.com/');
    cy.get('.category-cards > :nth-child(1)').click();
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-1').click();
    cy.get('label').click();
    cy.get('#result > :nth-child(1)').should('have.text', 'You have selected :');
  })
  it('Should have a broken image', () => {
    cy.visit('https://demoqa.com/');
    cy.get('.category-cards > :nth-child(1)').click();
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-6').click();
    cy.get('[src="/images/Toolsqa_1.jpg"]')
    .should('be.visible')
    .and(($img) => {
      expect($img[0].naturalWidth).to.equal(0);
    });
})
})