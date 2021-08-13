import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  addToReadingList,
  clearSearch,
  getAllBooks,
  ReadingListBook,
  searchBooks
} from '@tmo/books/data-access';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Book } from '@tmo/shared/models';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'tmo-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent implements OnInit {
  books$: Observable<ReadingListBook[]> ;

  searchForm = new FormGroup({
    term: new FormControl('')

  })
  

  constructor(
    private readonly store: Store,
    
  ) {
    this.books$ = this.store.select(getAllBooks)

    this.searchForm.get('term').valueChanges
    .pipe(
      debounceTime(500),
      distinctUntilChanged()
    )
    .subscribe((value) => this.searchBooks())
  
  }

  get searchTerm(): string {
    return this.searchForm.get('term').value
  }

  ngOnInit(): void {
    
  }

  searchExample() {
    this.searchForm.get('term').setValue('javascript');
    this.searchBooks();
  }

  searchBooks() {
    if ( this.searchTerm ) {
      this.store.dispatch(searchBooks({ term: this.searchTerm }));
    } else {
      this.store.dispatch(clearSearch());
    }
  }
}
