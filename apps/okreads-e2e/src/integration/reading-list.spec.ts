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

  it('Then: I should be able to mark a book as finished', () => {
    cy.get('input[type="search"]').type('javascript');
    cy.get('form').submit();
    cy.get('[data-testing="book-item"]').should('have.length.greaterThan', 1);

    cy.get('.book').first().contains('Want to Read') // conteneer want to read
    cy.get('.add-item-list').first().click(); // darle click


    // marcar como leido
    // abrir reading list
    
    cy.get('[data-testing="toggle-reading-list"]').click();
    cy.get('[data-testing="reading-list-container"]').should(
      'contain.text',
      'My Reading List'
    );

    cy.get('.mark-as-finished').first().click();
    cy.get('.close-drawer').click();

    cy.get('.book').first().contains('Finished')
    
  });
});
