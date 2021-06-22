- CODE REVIEW
- In the path: libs\books\data-access\src\lib\+state, I would divide into two folders the states of the applition (books and reading-list), with their corresponding actions, effects, reducers, and selectors files, so it can be more organized. 

- In the path: libs\books\feature\src\lib\reading-list, in the reading-list.component.ts, I would change "let b of readingList$" for "let item of readingList$", or "let readingListItem of readingList$" so it can be more descriptive. 

- In the same way, in the path: libs\books\feature\src\lib\book-search, in the book-search.component.ts, I would change "let b of books" for "let book of books", so it can be a little more descriptive.

- I would create another folder called ui-shared, so I could place all the components from material ui. So the books-feature.module.ts can be more clean. 

- I would create another component to represent the individual items in the reading list, so each component only does a single task. And add that individual item in the books feature module. 

- Also, I would create another component to represent the individual books in the books list, in the book-search component, so each component only does a single task. And add that individual book in the books feature module. To achieve this, I also add the property isAdded to the book model as optional.

- In the path: libs\books\feature\src\lib\book, in the book.component.html, I would format the date using the date format pipe instead of creating another method in the ts file.

- In the path libs\books\feature\src\lib\book-search, in the book-search-component.ts, I would create an observable of type ReadingListBook[], so we can fetch the selected books more easily.


- ACCESIBILITY
- Issues reported by the lighthouse extension:
  -  Aria not found in the search button. 
  -  Colors contrast are not in the correct ratio.

- Other issues found:
  - Aria not found in the button of reading list items at the header of the app.
  - aria-pressed="false" not found in the button of reading list items at the header of the app.
  - In the book component, the "want to read" button did not had a focus style, so if the users were using the tab button to move between the elements, they did not know which element was selected.

