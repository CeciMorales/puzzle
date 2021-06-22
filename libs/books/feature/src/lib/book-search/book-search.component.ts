import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  addToReadingList,
  clearSearch,
  getAllBooks,
  ReadingListBook,
  searchBooks
} from '@tmo/books/data-access';
import { FormBuilder } from '@angular/forms';
import { Book } from '@tmo/shared/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'tmo-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent implements OnInit {
  books$: Observable<ReadingListBook[]> ;
  term: string = '';

  searchForm = this.fb.group({
    term: ''
  });

  constructor(
    private readonly store: Store,
    private readonly fb: FormBuilder,
    
  ) {
    this.books$ = this.store.select(getAllBooks)
  }

  get searchTerm(): string {
    return this.searchForm.value.term;
  }

  ngOnInit(): void {
    
  }

  searchExample() {
    this.searchForm.controls.term.setValue('javascript');
    this.searchBooks();
  }

  searchBooks() {
    // this.searchForm.value.term
    if (this.term) {
      this.store.dispatch(searchBooks({ term: this.term }));
    } else {
      this.store.dispatch(clearSearch());
    }
  }
}
