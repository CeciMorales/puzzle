describe('When: I use the reading list feature', () => {
  beforeEach(() => {
    cy.startAt('/');
  });

  it('Then: I should see my reading list', () => {
    cy.get('[data-testing="toggle-reading-list"]').click();

    cy.get('[data-testing="reading-list-container"]').should(
      'contain.text',
      'My Reading List'
    );
  });

  it('Then: I should undo the selected reading list item', () => {
    cy.get('input[type="search"]').type('javascript');
    cy.get('form').submit();
    cy.get('[data-testing="book-item"]').should('have.length.greaterThan', 1);

    cy.get('.add-item-list').first().click();
    cy.get('.close-drawer').click();

    cy.get('.undo-item-list').first().click();
    cy.get('.close-drawer').click();

    cy.get('.book').first().contains('Want to Read')

  });
});
